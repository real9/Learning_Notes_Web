package com.mogic.design.web.error;

public class UniversalException extends Exception implements UniversalError
{
    /**
     * 已填充信息的通用错误类
     */
    private UniversalError universalError;

    public UniversalException(UniversalError universalError)
    {
        super();
        this.universalError = universalError;
    }

    public UniversalException(String errorMessage, UniversalError universalError)
    {
        super(errorMessage);
        this.universalError = universalError;
        this.universalError.setErrorMessage(errorMessage);
    }

    @Override
    public int getErrorCode()
    {
        return this.universalError.getErrorCode();
    }

    @Override
    public String getErrorMessage()
    {
        return this.universalError.getErrorMessage();
    }

    @Override
    public UniversalError setErrorMessage(String errorMessage)
    {
        this.universalError.setErrorMessage(errorMessage);
        return this.universalError;
    }
}