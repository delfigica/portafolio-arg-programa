package com.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@SpringBootApplication
public class BackArgentinaProgramaApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackArgentinaProgramaApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("https://portafolio-arg-programa-1c4af.web.app", "http://localhost:4200").allowedMethods("*").allowedHeaders("*");
			}
		};
	}
}
