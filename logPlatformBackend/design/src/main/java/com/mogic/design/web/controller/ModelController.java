package com.mogic.design.web.controller;

import cn.hutool.json.JSONObject;
import com.mogic.design.service.ModelService;
import com.mogic.design.web.dataobject.ModelDO;
import com.mogic.design.web.utils.InterfaceLog;
import com.mogic.design.web.utils.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@Controller
public class ModelController extends BaseController{
    @Autowired
    private ModelService modelService;

    @InterfaceLog(method = "getModel", module = "model")
    @ResponseBody
    @RequestMapping(value = "/getModel", method = RequestMethod.GET)
    public ResponseEntity<JSONObject> getModel(){
        return ResponseUtil.successReturn(modelService.getModel());
    }
}
