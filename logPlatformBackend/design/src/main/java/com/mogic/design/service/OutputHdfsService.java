package com.mogic.design.service;
import com.mogic.design.web.dao.OutputHDFSDORepository;
import com.mogic.design.web.dataobject.OutputHDFSDO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class OutputHdfsService {
    @Autowired
    private OutputHDFSDORepository outputHDFSDORepository;
    public List<OutputHDFSDO> getHdfsOutput() {return outputHDFSDORepository.findAll();}
}
