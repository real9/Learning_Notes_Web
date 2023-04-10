package com.mogic.design.web.error;

public enum EnumError implements UniversalError
{
    /**
     * 参数相关
     */
    INVALID_PARAMETER(701, "参数不合法"),

    /**
     * 用户、登录相关
     */
    USER_NOT_EXIST(801, "用户不存在"),
    NO_PERMISSION(802, "无权限"),
    NOT_LOGIN(803, "未登录"),
    CHECK_TOKEN_FAIL(804, "token验证失败"),
    TOKEN_EXPIRED(805, "登录已过期"),

    /**
     * 特殊保留
     */
    TEST_ERROR(666, "测试用"),
    UNKNOWN_ERROR(999, "未知错误");

    /**
     * 错误码
     */
    private final int errorCode;

    /**
     * 错误信息
     */
    private String errorMessage;

    EnumError(int errorCode, String errorMessage)
    {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
    }

    @Override
    public int getErrorCode()
    {
        return this.errorCode;
    }

    @Override
    public String getErrorMessage()
    {
        return this.errorMessage;
    }

    @Override
    public UniversalError setErrorMessage(String errorMessage)
    {
        this.errorMessage = errorMessage;
        return this;
    }
}
