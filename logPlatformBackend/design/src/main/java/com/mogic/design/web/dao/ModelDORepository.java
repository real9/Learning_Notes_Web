package com.mogic.design.web.dao;

import com.mogic.design.web.dataobject.ModelDO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ModelDORepository extends JpaRepository<ModelDO, Integer>{

//    List<ModelDO> findByIdNotNullAndNameNotNullOrderByIdAsc();

//    @Query("select * from ModelDO")
//    List<ModelDO> findByIdAndNameOrderByIdAsc();

    @Override
    List<ModelDO> findAll();
}
