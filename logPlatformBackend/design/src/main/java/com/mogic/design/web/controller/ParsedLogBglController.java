package com.mogic.design.web.controller;

import cn.hutool.json.JSONObject;
import com.mogic.design.service.ParsedLogBglService;
import com.mogic.design.web.utils.InterfaceLog;
import com.mogic.design.web.utils.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@Controller
public class ParsedLogBglController extends BaseController{
    @Autowired
    private ParsedLogBglService parsedLogBglService;

    @InterfaceLog(method = "getParsedLogBgl", module = "parsedBgl")
    @ResponseBody
    @RequestMapping(value = "/getParsedLogBgl", method = RequestMethod.GET)
    public ResponseEntity<JSONObject> getParsedLogBgl(@RequestParam(value = "") Integer id) {
        return ResponseUtil.successReturn(parsedLogBglService.getParsedLogBgl(id));
    }
}
