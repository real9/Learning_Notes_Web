package com.mogic.design.web.interceptor;

import cn.hutool.core.util.StrUtil;
import com.mogic.design.service.UserService;
import com.mogic.design.web.error.EnumError;
import com.mogic.design.web.model.User;
import com.mogic.design.web.utils.AccessLevel;
import com.mogic.design.web.utils.jwtToken.CheckLoginToken;
import com.mogic.design.web.utils.jwtToken.JwtUtil;
import com.mogic.design.web.utils.jwtToken.PassCheckToken;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import java.lang.reflect.Method;
import java.util.Date;

@Component
public class AuthorizationInterceptor implements HandlerInterceptor
{
    @Autowired
    private UserService userService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception
    {
        String token = null;
        try
        {
            token = request.getHeader("token");
        } catch (RuntimeException e)
        {
            response.setStatus(EnumError.NOT_LOGIN.getErrorCode());
            return false;
        }

        //不是映射到方法直接通过
        if (!(handler instanceof HandlerMethod))
        {
            return true;
        }

        HandlerMethod handlerMethod = (HandlerMethod) handler;
        Method method = handlerMethod.getMethod();
        //检查是否有PassCheckToken 注释，有则跳过认证
        if (method.isAnnotationPresent(PassCheckToken.class))
        {
            PassCheckToken passToken = method.getAnnotation(PassCheckToken.class);
            if (passToken.required())
            {
                return true;
            }
        }

        if (method.isAnnotationPresent(CheckLoginToken.class))
        {
            CheckLoginToken checkLoginToken = method.getAnnotation(CheckLoginToken.class);
            if (checkLoginToken.required())
            {
                if (token == null)
                {
                    response.setStatus(EnumError.NOT_LOGIN.getErrorCode());
                    return false;
                }
            }

            //校验失败
            if (!JwtUtil.checkToken(token))
            {
                response.setStatus(EnumError.CHECK_TOKEN_FAIL.getErrorCode());
                return false;
            }

            //登录已过期
            if (!JwtUtil.checkTokenExpiration(token))
            {
                response.setStatus(EnumError.TOKEN_EXPIRED.getErrorCode());
                return false;
            }
        }

        String mobile = JwtUtil.getMobile(token);
        User user = userService.getUserByMobile(mobile);

        // 需要验证权限
        if (method.isAnnotationPresent(AccessLevel.class))
        {
            AccessLevel accessLevelAnnotation = method.getAnnotation(AccessLevel.class);
            if (!checkAccessLevel(accessLevelAnnotation, user))
            {
                response.setStatus(EnumError.NO_PERMISSION.getErrorCode());
                return false;
            }
        }

        // 过期前三天刷新token
        Date expiredTime = JwtUtil.getExpiredTime(token);
        if (expiredTime == null)
        {
            return true;
        }
        Date halfADay = new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24 * 3);
        if (expiredTime.before(halfADay))
        {
            String renewToken = JwtUtil.generateToken(mobile);
            response.setHeader("token", renewToken);
            response.setHeader("Access-Control-Allow-Headers", "token,content-type");
            response.setHeader("Access-Control-Expose-Headers", "token");
        }

        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception
    {
        HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception
    {
        HandlerInterceptor.super.afterCompletion(request, response, handler, ex);
    }

    public boolean checkAccessLevel(AccessLevel accessLevel, User user)
    {
        String[] role = StrUtil.cleanBlank(accessLevel.role()).split(",");
        if (user == null)
        {
            return false;
        }
        String user_role = user.getRole();
        // 用户不存在权限或出错
        if (user_role == null)
        {
            return false;
        }

        for (String r :
                role)
        {
            if (user_role.equals(r))
            {
                return true;
            }
        }

        return false;
    }
}
