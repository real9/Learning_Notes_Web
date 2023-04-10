package com.mogic.design.web.config;

import com.mogic.design.web.interceptor.AuthorizationInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class InterceptorConfig implements WebMvcConfigurer
{
    @Autowired
    private AuthorizationInterceptor authorizationInterceptor;

    public void addInterceptors(InterceptorRegistry registry)
    {
        registry.addInterceptor(authorizationInterceptor)
                .addPathPatterns("/**");
    }
}
