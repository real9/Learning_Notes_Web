package com.mogic.design.web.utils.jwtToken;

import cn.hutool.jwt.JWT;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.http.HttpServletRequest;

import java.nio.charset.StandardCharsets;
import java.util.Date;

public class JwtUtil
{
    public static final byte[] secretKey = "苟利国家生死以，岂因祸福避趋之".getBytes(StandardCharsets.UTF_8);

    public static final long EXPIRATION = 1000 * 24 * 60 * 60 * 7;

    /**
     * 生成token
     *
     * @param mobile
     * @return
     */
    public static String generateToken(String mobile)
    {
        String result = null;
        result = JWT.create()
                .setPayload("mobile", mobile)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiresAt(new Date(System.currentTimeMillis() + EXPIRATION))
                .setKey(secretKey)
                .sign();

        return result;
    }

    public static boolean checkToken(String token)
    {
        boolean result = false;
        try
        {
            result = JWT.of(token).setKey(secretKey).verify();
        } catch (Exception e)
        {
            e.printStackTrace();
            return false;
        }
        return result;
    }

    public static boolean checkTokenExpiration(String token)
    {
        final Claims claims;
        try
        {
            claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
        } catch (ExpiredJwtException e)
        {
            //e.printStackTrace();
            return false;
        }
        return true;
    }

    public static String getMobile(String token)
    {
        if (token == null)
        {
            return null;
        }

        String result = null;
        try
        {
            result = (String) JWT.of(token).getPayload("mobile");
        } catch (Exception e)
        {
            //e.printStackTrace();
            return null;
        }

        return result;
    }

    public static String getMobile(HttpServletRequest request)
    {
        String token = request.getHeader("token");
        return getMobile(token);
    }

    public static Date getExpiredTime(String token)
    {
        if (token == null)
        {
            return null;
        }

        Integer expireMill = (Integer) JWT.of(token).getPayload("exp");
        return new Date(expireMill);
    }

}
