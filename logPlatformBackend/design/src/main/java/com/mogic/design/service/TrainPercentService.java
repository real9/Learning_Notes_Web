package com.mogic.design.service;

import com.mogic.design.web.dao.TrainPercentDORepository;
import com.mogic.design.web.dataobject.TrainPercentDO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrainPercentService {
    @Autowired
    TrainPercentDORepository trainPercentDORepository;

    public Integer putNewModelAndDataset(String id, String model, String dataset, Integer trainPercent)
    {
        return  trainPercentDORepository.updateIdAndModelAndDatasetAndTrainPercentBy(id, model, dataset, trainPercent);
    }

    public List<TrainPercentDO> getModelAndDatasetOfDiffPercent(String model, String dataset) {
        return trainPercentDORepository.findByModelAndDatasetOrderByModelAscDatasetAsc(model, dataset);
    }
}
