package org.sangokch;

import org.sangokch.web.LoginCheckInterceptor;
import org.sangokch.web.toAttchFileConverter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.format.FormatterRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ManagerwebApplication extends SpringBootServletInitializer implements WebMvcConfigurer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(ManagerwebApplication.class);
	}
	
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(new LoginCheckInterceptor())
			.order(1)
			.addPathPatterns("/**")
			.excludePathPatterns("/login"
					,"/doLogin"
					,"/test"
					,"/js/**"
					,"/css/**"
					,"/file/**"
					,"/img/**");
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/**").addResourceLocations("classpath:/static/");
		registry.addResourceHandler("/file/**").addResourceLocations("classpath:/public/");
	}
	
	@Override
	public void addFormatters(FormatterRegistry registry) {
		registry.addConverter(new toAttchFileConverter());
	}

	public static void main(String[] args) {
		SpringApplication.run(ManagerwebApplication.class, args);
	}

}
