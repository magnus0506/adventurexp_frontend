package com.adventurexp_frontend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;

@Controller
public class ActivityController {

    @GetMapping("/about")
    public String aboutController(){
        return "about";
    }

    @GetMapping("/login")
    public String loginController(){
        return "login";
    }

    @GetMapping("/activities")
    public String activitiesController(){
        return "activities";
    }

    @GetMapping("/booking")
    public String bookingsController(){
        return "booking";
    }

    @GetMapping("/booking/new")
    public String newBookingController(){
        return "newBooking";
    }

    @PutMapping ("/booking/edit")
    public String editBookingController(){
        return "editBooking";
    }
}
