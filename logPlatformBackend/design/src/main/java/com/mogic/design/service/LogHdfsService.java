package com.mogic.design.service;


import com.mogic.design.web.dao.LogHdfsDORepository;
import com.mogic.design.web.dataobject.LogHDFSDO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LogHdfsService {
    @Autowired
    private LogHdfsDORepository logHdfsDORepository;

    public List<LogHDFSDO> getHdfsLogs() {
        return logHdfsDORepository.findAll();
    }
}
