package com.mogic.design.web.response;

/**
 * 通用返回类
 */
public class UniversalReturn
{
    /**
     * 是否成功执行
     * 成功返回 OK
     * 失败返回 GG
     */
    private String status;

    /**
     * 所携带数据
     * 若 status == OK
     * 则 data 携带所需数据
     * 否则 data 内为错误信息
     */
    private Object data;

    public UniversalReturn(String status, Object data)
    {
        this.status = status;
        this.data = data;
    }

    public UniversalReturn(Object data)
    {
        this.status = "OK";
        this.data = data;
    }

    public String getStatus()
    {
        return status;
    }

    public void setStatus(String status)
    {
        this.status = status;
    }

    public Object getData()
    {
        return data;
    }

    public void setData(Object data)
    {
        this.data = data;
    }
}
