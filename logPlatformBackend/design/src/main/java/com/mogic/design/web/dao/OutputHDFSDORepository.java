package com.mogic.design.web.dao;
import com.mogic.design.web.dataobject.OutputHDFSDO;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
public interface OutputHDFSDORepository extends JpaRepository<OutputHDFSDO, Integer>{
    @Override
    List<OutputHDFSDO> findAll();
}
