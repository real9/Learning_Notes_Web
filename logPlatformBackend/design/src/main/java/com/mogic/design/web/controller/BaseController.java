package com.mogic.design.web.controller;

import com.mogic.design.web.error.EnumError;
import com.mogic.design.web.error.UniversalException;
import com.mogic.design.web.response.UniversalReturn;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

@Controller
public class BaseController
{
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ResponseBody
    public Object handleException(HttpServletRequest httpServletRequest, Exception exception)
    {
        Map<String, Object> responseData = new HashMap<>();
        if (exception instanceof UniversalException)
        {
            UniversalException universalException = (UniversalException) exception;
            responseData.put("errorCode", universalException.getErrorCode());
            responseData.put("errorMessage", universalException.getErrorMessage());
        } else
        {
            responseData.put("errorCode", EnumError.UNKNOWN_ERROR.getErrorCode());
            responseData.put("errorMessage", EnumError.UNKNOWN_ERROR.getErrorMessage());
            System.out.println(exception.getMessage());
        }

        return new UniversalReturn("GG", responseData);
    }
}
