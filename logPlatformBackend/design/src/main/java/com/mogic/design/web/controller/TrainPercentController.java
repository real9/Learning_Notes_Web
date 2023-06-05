package com.mogic.design.web.controller;

import cn.hutool.json.JSONObject;
import com.mogic.design.service.TrainPercentService;
import com.mogic.design.web.utils.InterfaceLog;
import com.mogic.design.web.utils.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@Controller
public class TrainPercentController extends BaseController{
    @Autowired
    private TrainPercentService trainPercentService;

    @InterfaceLog(method = "putModelAndDataset", module = "modelAndDataset")
    @ResponseBody
    @RequestMapping(value = "/putNewModelAndDataset", method = RequestMethod.POST)
    public ResponseEntity<JSONObject> putNewModelAndDataset(@RequestParam(value = "") String id, String model, String dataset, Integer trainPercent) {
        return ResponseUtil.successReturn(trainPercentService.putNewModelAndDataset(id, model, dataset, trainPercent));
    }

    @InterfaceLog(method = "getModelAndDataset", module = "getModelAndDataset")
    @ResponseBody
    @RequestMapping(value = "/getModelAndDatasetOfDiffPercent", method = RequestMethod.POST)
    public ResponseEntity<JSONObject> getModelAndDatasetOfDiffPercent(@RequestParam(value = "") String model, String dataset) {
        return ResponseUtil.successReturn(trainPercentService.getModelAndDatasetOfDiffPercent(model, dataset));
    }
}
