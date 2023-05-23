package com.mogic.design.web.controller;

import cn.hutool.json.JSONObject;
import com.mogic.design.service.ParsedLogHdfsService;
import com.mogic.design.web.utils.InterfaceLog;
import com.mogic.design.web.utils.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@Controller
public class ParsedLogHdfsController {
    @Autowired
    private ParsedLogHdfsService parsedLogHdfsService;

    @InterfaceLog(method = "getParsedLogHdfs", module = "parsedHdfs")
    @ResponseBody
    @RequestMapping(value = "/getParsedLogHdfs", method = RequestMethod.GET)
    public ResponseEntity<JSONObject> getParsedLogHdfs() {
        return ResponseUtil.successReturn(parsedLogHdfsService.getParsedLogHdfs());
    }
}
