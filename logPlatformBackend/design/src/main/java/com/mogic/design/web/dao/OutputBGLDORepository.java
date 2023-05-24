package com.mogic.design.web.dao;
import com.mogic.design.web.dataobject.OutputBGLDO;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
public interface OutputBGLDORepository extends JpaRepository<OutputBGLDO, Integer>{
    @Override
    List<OutputBGLDO> findAll();
}
