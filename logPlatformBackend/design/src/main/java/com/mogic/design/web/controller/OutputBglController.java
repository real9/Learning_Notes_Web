package com.mogic.design.web.controller;

import cn.hutool.json.JSONObject;
import com.mogic.design.service.OutputBglService;
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
public class OutputBglController extends BaseController{
    @Autowired
    private OutputBglService outputBglService;
    @InterfaceLog(method = "getBglOutput", module = "bglOutput")
    @ResponseBody
    @RequestMapping(value = "/getBglOutput", method = RequestMethod.GET)
    public ResponseEntity<JSONObject> getBglOutput() {
        return ResponseUtil.successReturn(outputBglService.getBglOutput());
    }
}
