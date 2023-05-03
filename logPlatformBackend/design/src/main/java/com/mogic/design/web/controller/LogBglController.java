package com.mogic.design.web.controller;

import cn.hutool.json.JSONObject;
import com.mogic.design.service.LogBglService;
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
public class LogBglController extends BaseController{
    @Autowired
    private LogBglService logBglService;

    @InterfaceLog(method = "getBglLogs", module = "bglLog")
    @ResponseBody
    @RequestMapping(value = "/getBglLogs", method = RequestMethod.GET)
    public ResponseEntity<JSONObject> getBglLogs() {
        return ResponseUtil.successReturn(logBglService.getBglLogs());
    }
}
