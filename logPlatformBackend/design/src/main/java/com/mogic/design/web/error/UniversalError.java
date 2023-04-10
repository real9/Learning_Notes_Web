package com.mogic.design.web.error;

/**
 * 通用错误接口类
 */
public interface UniversalError
{
    /**
     * 错误码
     *
     * @return int
     */
    int getErrorCode();

    /**
     * 错误信息
     *
     * @return String
     */
    String getErrorMessage();

    /**
     * 设置错误信息
     *
     * @param errorMessage 错误信息
     * @return UniversalError
     */
    UniversalError setErrorMessage(String errorMessage);

}