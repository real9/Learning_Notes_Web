package com.mogic.design.web.controller;

import cn.hutool.json.JSONObject;
import com.mogic.design.service.TestService;
import com.mogic.design.web.utils.InterfaceLog;
import com.mogic.design.web.utils.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@Controller
public class TestController extends BaseController {

    @Autowired
    private TestService testService;

    @InterfaceLog(method="test", module = "hhh")
    @ResponseBody
    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public ResponseEntity<JSONObject> test(@RequestParam(value = "") Integer id, String name){
        return ResponseUtil.successReturn(testService.test(id, name));
    }
}
