package com.mogic.design.service;

import com.mogic.design.web.dao.ParsedLogBglDORepository;
import com.mogic.design.web.dataobject.ParsedLogBGLDO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParsedLogBglService {
    @Autowired
    private ParsedLogBglDORepository parsedLogBglDORepository;

    public List<ParsedLogBGLDO> getParsedLogBgl(Integer id){
        return parsedLogBglDORepository.findByIdLessThan(id);
    }
}
