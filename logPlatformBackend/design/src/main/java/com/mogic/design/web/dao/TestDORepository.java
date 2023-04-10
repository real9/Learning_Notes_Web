package com.mogic.design.web.dao;

import com.mogic.design.web.dataobject.TestDO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TestDORepository extends JpaRepository<TestDO, Integer> {
    TestDO findByIdEqualsOrUsernameIsLikeIgnoreCase(Integer id, String username);

    @Query("select t from TestDO t where t.id = ?1 or t.username = ?2")
    TestDO findByIdEqualsOrUsername(Integer id, String username);
    
    
}