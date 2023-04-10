package com.mogic.design.web.utils;

import cn.hutool.json.JSONObject;
import cn.hutool.json.JSONUtil;
import com.mogic.design.web.error.EnumError;
import org.springframework.http.ResponseEntity;

public class ResponseUtil
{
    /**
     * 不需要修改默认错误信息
     *
     * @param error
     * @return
     */
    public static ResponseEntity<JSONObject> errorReturn(EnumError error)
    {
        return ResponseEntity.status(error.getErrorCode()).body(new JSONObject().putOnce("message", error.getErrorMessage()));
    }

    /**
     * 需要自定义错误信息
     *
     * @param error
     * @param message
     * @return
     */
    public static ResponseEntity<JSONObject> errorReturn(EnumError error, String message)
    {
        return ResponseEntity.status(error.getErrorCode()).body(new JSONObject().putOnce("message", message));
    }

    /**
     * 自定义错误信息并返回object
     *
     * @param error
     * @param message
     * @param data
     * @return
     */
    public static ResponseEntity<JSONObject> errorReturn(EnumError error, String message, Object data)
    {
        JSONObject jsonObject = JSONUtil.createObj()
                .set("message", message)
                .set("data", data);
        return ResponseEntity.status(error.getErrorCode()).body(jsonObject);
    }

    public static ResponseEntity<JSONObject> successReturn(Object data)
    {
        return ResponseEntity.ok(new JSONObject().putOnce("data", data));
    }

    public static ResponseEntity<JSONObject> successReturn()
    {
        return successReturn("OK");
    }
}
