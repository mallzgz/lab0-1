package es.unizar.tmdad.lab0.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.twitter.api.SearchResults;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import es.unizar.tmdad.lab0.service.TwitterLookupService;


@RestController
public class SearchController {

    @Autowired
    TwitterLookupService twitter;

   /* @RequestMapping("/")
    public String greeting() {
        return "index";
    }*/

    @RequestMapping("/search")
    public SearchResults search(@RequestParam("q") String q) {
    	//m.addAttribute("res", twitter.search(q));
        //return "search :: content";
        return twitter.search(q);
    }
}