package com.mogic.design.web.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 用户模型
 */
@EqualsAndHashCode(of = "id")
@Data
public class User
{
    // 用户id
    private Integer id;

    // 手机号
    private String mobile;

    // 昵称
    private String nickname;

    // 头像url
    private String icon;

    // 权限角色
    private String role;

    // 账户状态
    private Boolean status;
}
