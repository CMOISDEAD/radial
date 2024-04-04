package com.unilocal.backend.controllers;

import com.unilocal.backend.models.Place;
import com.unilocal.backend.service.PlaceService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/places")
public class PlaceController {
  @Autowired PlaceService placeService;

  @GetMapping("/all")
  public ResponseEntity<List<Place>> getAllPlaces() {
    return ResponseEntity.status(200).body(placeService.getAll());
  }

  @GetMapping("/id")
  public ResponseEntity<Place> getPlaceById(@RequestParam("id") Id id) {
    return ResponseEntity.status(200).body(placeService.findById(id));
  }
}
