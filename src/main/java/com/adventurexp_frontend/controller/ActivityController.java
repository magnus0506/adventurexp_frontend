package com.adventurexp_frontend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ActivityController {

    @GetMapping("/about")
    public String aboutController(){
        return "about";
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

    @GetMapping ("/booking/{id}")
    public String editBookingController(){
        return "editbooking";
    }


}
