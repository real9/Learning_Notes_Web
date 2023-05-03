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
@Table(name = "hdfs_logs")
public class LogHDFSDO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "content", nullable = false)
    private String content;
}
