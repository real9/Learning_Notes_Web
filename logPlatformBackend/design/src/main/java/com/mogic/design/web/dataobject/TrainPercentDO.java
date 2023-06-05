package com.mogic.design.web.dataobject;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@DynamicUpdate
@DynamicInsert
@Setter
@Getter
@Entity
@Table(name="train_percentage")
public class TrainPercentDO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private String id;

    @Column(name = "model", nullable = false)
    private String model;

    @Column(name = "dataset", nullable = false)
    private String dataset;

    @Column(name = "trainPercent", nullable = false)
    private Integer trainPercent;
}
