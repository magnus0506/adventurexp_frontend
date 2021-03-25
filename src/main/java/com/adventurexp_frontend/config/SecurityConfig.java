package com.adventurexp_frontend.config;

import com.adventurexp_frontend.model.User;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.sql.DataSource;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {

        ObjectMapper mapper = new ObjectMapper();
        List<User> userList = mapper.readValue(new URL("http://54.234.57.19:8085/users"), new TypeReference<>() {
            @Override
            public int compareTo(TypeReference<List<User>> o) {
                return super.compareTo(o);
            }
        });

        System.out.println("usernames:\n");
        for (User value : userList) {
            System.out.println(value.getUsername());
        }
        System.out.println("\npasswords:\n");
        for (User user : userList) {
            System.out.println(user.getPassword());
        }

        auth
                .inMemoryAuthentication()
                .withUser(userList.get(0).getUsername()).password(userList.get(0).getPassword()).roles("ADMIN").and()
                .withUser(userList.get(1).getUsername()).password(userList.get(1).getPassword()).roles("EMPLOYEE")
                .and()
                .passwordEncoder(bCryptPasswordEncoder());

    }


    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/booking/new").hasRole("ADMIN")
                .antMatchers("/login**").permitAll()
                .and()
                .formLogin()
                .and().csrf().disable();

    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
