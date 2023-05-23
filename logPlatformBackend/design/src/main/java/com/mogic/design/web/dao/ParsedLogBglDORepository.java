package com.mogic.design.web.dao;

import com.mogic.design.web.dataobject.ParsedLogBGLDO;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ParsedLogBglDORepository extends JpaRepository<ParsedLogBGLDO, Integer> {
    @Override
    List<ParsedLogBGLDO> findAll();
}
