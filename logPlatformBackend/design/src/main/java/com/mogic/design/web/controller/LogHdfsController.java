package com.mogic.design.web.controller;

import cn.hutool.json.JSONObject;
import com.mogic.design.service.LogHdfsService;
import com.mogic.design.web.utils.InterfaceLog;
import com.mogic.design.web.utils.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin
@Controller
public class LogHdfsController extends BaseController{
    @Autowired
    private LogHdfsService logHdfsService;

    @InterfaceLog(method = "getHdfsLogs", module = "hdfsLog")
    @ResponseBody
    @RequestMapping(value = "/getHdfsLogs", method = RequestMethod.GET)
    public ResponseEntity<JSONObject> getHdfsLogs() {
        return ResponseUtil.successReturn(logHdfsService.getHdfsLogs());
    }
}
