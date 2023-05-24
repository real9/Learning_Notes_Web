package com.mogic.design.service;
import com.mogic.design.web.dao.OutputBGLDORepository;
import com.mogic.design.web.dataobject.OutputBGLDO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class OutputBglService {
    @Autowired
    private OutputBGLDORepository outputBGLDORepository;

    public List<OutputBGLDO> getBglOutput() {return outputBGLDORepository.findAll();}
}
