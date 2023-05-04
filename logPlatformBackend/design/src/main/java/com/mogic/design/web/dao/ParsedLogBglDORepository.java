package com.mogic.design.web.dao;

import com.mogic.design.web.dataobject.ParsedLogBGLDO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ParsedLogBglDORepository extends JpaRepository<ParsedLogBGLDO, Integer> {
    @Query("select p from ParsedLogBGLDO p where p.id < ?1")
    List<ParsedLogBGLDO> findByIdLessThan(Integer id);

}
