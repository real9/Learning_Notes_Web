package com.mogic.design.web.dao;

import com.mogic.design.web.dataobject.TrainPercentDO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface TrainPercentDORepository extends JpaRepository<TrainPercentDO, Integer> {
    @Transactional
    @Modifying
    @Query("update TrainPercentDO t set t.id = ?1, t.model = ?2, t.dataset = ?3, t.trainPercent = ?4")
    int updateIdAndModelAndDatasetAndTrainPercentBy(String id, String model, String dataset, Integer trainPercent);

    @Query("select t from TrainPercentDO t where t.model = ?1 and t.dataset = ?2 order by t.model, t.dataset")
    List<TrainPercentDO> findByModelAndDatasetOrderByModelAscDatasetAsc(String model, String dataset);

}
