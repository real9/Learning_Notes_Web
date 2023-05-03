package com.mogic.design.web.dao;

import com.mogic.design.web.dataobject.LogHDFSDO;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LogHdfsDORepository extends JpaRepository<LogHDFSDO, Integer> {
    @Override
    List<LogHDFSDO> findAll();
}
