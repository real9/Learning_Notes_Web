package com.mogic.design.web.controller;

import cn.hutool.json.JSONObject;
import com.mogic.design.service.OutputHdfsService;
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
public class OutputHdfsController extends BaseController{
    @Autowired
    private OutputHdfsService outputHdfsService;
    @InterfaceLog(method = "getHdfsOutput", module = "HdfsOutput")
    @ResponseBody
    @RequestMapping(value = "/getHdfsOutput", method = RequestMethod.GET)
    public ResponseEntity<JSONObject> getHdfsOutput() {
        return ResponseUtil.successReturn(outputHdfsService.getHdfsOutput());
    }
}
