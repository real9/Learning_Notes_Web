package com.mogic.design.service;

import com.mogic.design.web.dao.TestDORepository;
import com.mogic.design.web.dataobject.TestDO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestService {
    @Autowired
    private TestDORepository testDORepository;

    public TestDO test(Integer id, String name){
        return testDORepository.findByIdEqualsOrUsername(id, name);
    }
}
