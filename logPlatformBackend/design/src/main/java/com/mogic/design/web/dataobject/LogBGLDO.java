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
@Table(name = "bgl_logs")
public class LogBGLDO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "content", nullable = false)
    private String content;

}
