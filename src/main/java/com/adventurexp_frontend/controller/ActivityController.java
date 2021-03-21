package com.adventurexp_frontend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ActivityController {

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
}
