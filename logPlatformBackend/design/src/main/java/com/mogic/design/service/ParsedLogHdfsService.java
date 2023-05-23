package com.mogic.design.service;

import com.mogic.design.web.dao.ParsedLogHdfsDORepository;
import com.mogic.design.web.dataobject.ParsedLogHDFSDO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParsedLogHdfsService {
    @Autowired
    private ParsedLogHdfsDORepository parsedLogHdfsDORepository;
    public List<ParsedLogHDFSDO> getParsedLogHdfs() {return parsedLogHdfsDORepository.findAll();}
}
