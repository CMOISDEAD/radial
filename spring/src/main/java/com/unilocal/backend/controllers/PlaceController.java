package com.unilocal.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.unilocal.backend.dto.CreatePlaceDTO;
import com.unilocal.backend.models.Place;
import com.unilocal.backend.service.PlaceService;

@RestController
@RequestMapping("/places")
public class PlaceController {
  @Autowired
  PlaceService placeService;

  /**
   * return a list with all places
   *
   * @return list with all places
   */
  @GetMapping("/all")
  public ResponseEntity<List<Place>> getAllPlaces() {
    List<Place> places = placeService.getAll();
    return ResponseEntity.status(200).body(places);
  }

  /**
   * return a place by id
   *
   * @param id id of the place
   * @return place with the given id
   * @throws Exception
   */
  @GetMapping("/{id}")
  public ResponseEntity<Place> getPlaceById(@PathVariable("id") String id) throws Exception {
    Place place = placeService.findById(id);
    return ResponseEntity.status(200).body(place);
  }

  /**
   * add a new place
   *
   * @param placeDTO place to be added
   * @return place created
   */
  @PostMapping("/add")
  public ResponseEntity<Place> addPlace(@RequestBody CreatePlaceDTO placeDTO) {
    Place place = placeService.save(placeDTO);
    return ResponseEntity.status(200).body(place);
  }

  /**
   * delete a place by id
   *
   * @param id id of the place to be deleted
   * @return String with the result of the operation
   */
  @DeleteMapping("/delete/{id}")
  public ResponseEntity<String> delete(@PathVariable("id") String id) {
    placeService.delete(id);
    return ResponseEntity.status(200).body("Place deleted successfully");
  }

  /**
   * update a place by id
   *
   * @param place place to be updated
   * @return place updated
   */
  @PostMapping("/update")
  public ResponseEntity<Place> updatePlace(@RequestBody CreatePlaceDTO place) {
    return ResponseEntity.status(200).body(placeService.save(place));
  }
}
