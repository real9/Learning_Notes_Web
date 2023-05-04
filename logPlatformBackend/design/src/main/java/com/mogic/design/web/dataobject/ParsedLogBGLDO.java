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
@Table(name = "bgl_parse")
public class ParsedLogBGLDO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "log_id", nullable = false)
    private Integer id;

    @Column(name = "time_stamp")
    private String time_stamp;
    @Column(name = "state")
    private String state;
    @Column(name = "Level")
    private String level;
    @Column(name = "Content")
    private String content;
    @Column(name = "Event_id")
    private String event_id;
    @Column(name = "Event_template")
    private String event_template;
}
