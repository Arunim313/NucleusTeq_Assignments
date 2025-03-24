package com.example.HRPortal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
//    root url will redirect to hr/login
    public String home() {
        return "redirect:/hr/login";
    }
}