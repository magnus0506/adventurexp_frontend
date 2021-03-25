package com.adventurexp_frontend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.io.IOException;


@SpringBootApplication
public class AdventurexpApplication {

    public AdventurexpApplication() {}

    public static void main(String[] args) throws IOException {
        SpringApplication.run(AdventurexpApplication.class, args);
    }
}
