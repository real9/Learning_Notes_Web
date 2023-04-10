package com.mogic.design.web.config;

import com.mogic.design.web.error.EnumError;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.builders.ResponseBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Response;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class SwaggerConfig
{
    @Value("${version}")
    private String projectVersion;

    @Bean
    public Docket createRestApi()
    {
        return new Docket(DocumentationType.OAS_30) // v2 不同
                .apiInfo(apiInfo())
                .globalResponses(HttpMethod.GET, getGlobalResponseMessage())
                .globalResponses(HttpMethod.POST, getGlobalResponseMessage())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.mogic.design.web.controller")) // 设置扫描路径
                .build();
    }

    private ApiInfo apiInfo()
    {
        return new ApiInfoBuilder()
                .title("系统接口文档")
                .description("<img src = 'https://simplebbs-1252616544.cos.ap-shanghai.myqcloud.com/%E6%BB%91%E7%A8%BD/frog_haha.gif' />" +
                        "&nbsp; <img src='https://simplebbs-1252616544.cos.ap-shanghai.myqcloud.com/%E6%BB%91%E7%A8%BD/biden_pai.jpg' />" +
                        "<div color = '#4d90f3' style = 'font-size: large; font-weight:700;'>如有疑问，您也找不到人联系</div>" +
                        "<img src = 'https://simplebbs-1252616544.cos.ap-shanghai.myqcloud.com/%E6%BB%91%E7%A8%BD/frog_water.gif' />" +
                        "<div color = '#4d90f3' style = 'font-size: large; font-weight:900;'>该版本为正式版</div>")
                .version(projectVersion)
                .build();
    }

    // 生成通用响应信息
    private List<Response> getGlobalResponseMessage()
    {
        List<Response> responseList = new ArrayList<>();
        for (EnumError error :
                EnumError.values())
        {
            responseList.add(new ResponseBuilder().
                    code(String.valueOf(error.getErrorCode())).
                    description(error.getErrorMessage()).
                    build());
        }

        return responseList;
    }
}