package com.mogic.design.service;

import com.mogic.design.web.dao.ModelDORepository;
import com.mogic.design.web.dataobject.ModelDO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModelService {
    @Autowired
    private ModelDORepository modelDORepository;

    public List<ModelDO> getModel(){
        return modelDORepository.findAll();
    }
}
