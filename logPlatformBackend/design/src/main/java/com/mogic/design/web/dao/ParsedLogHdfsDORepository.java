package com.mogic.design.web.dao;
import com.mogic.design.web.dataobject.ParsedLogHDFSDO;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ParsedLogHdfsDORepository extends JpaRepository<ParsedLogHDFSDO, Integer> {
    @Override
    List<ParsedLogHDFSDO> findAll();
}
