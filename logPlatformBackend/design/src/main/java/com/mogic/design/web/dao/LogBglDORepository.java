package com.mogic.design.web.dao;

import com.mogic.design.web.dataobject.LogBGLDO;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LogBglDORepository extends JpaRepository<LogBGLDO, Integer> {
    @Override
    List<LogBGLDO> findAll();
}
