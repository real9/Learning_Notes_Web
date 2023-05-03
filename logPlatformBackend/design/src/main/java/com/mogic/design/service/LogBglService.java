package com.mogic.design.service;

import com.mogic.design.web.dao.LogBglDORepository;
import com.mogic.design.web.dataobject.LogBGLDO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LogBglService {
    @Autowired
    private LogBglDORepository logBglDORepository;

    public List<LogBGLDO> getBglLogs() {
        return logBglDORepository.findAll();
    }
}
