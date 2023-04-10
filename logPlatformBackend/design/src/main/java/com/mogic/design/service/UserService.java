package com.mogic.design.service;

import com.mogic.design.web.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserService
{
    public User getUserByMobile(String mobile)
    {
        return new User();
    }
}
