package com.h_hub.harvesthub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
// @ComponentScan is optional as system will scan the entire package
public class HarvesthubApplication {

	public static void main(String[] args) {
		SpringApplication.run(HarvesthubApplication.class, args);
	}

}
