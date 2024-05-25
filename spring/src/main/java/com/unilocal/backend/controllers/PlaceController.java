package com.unilocal.backend.controllers;

import java.util.List;

import com.unilocal.backend.dto.CommentDTO;
import com.unilocal.backend.dto.DeleteCommentDTO;
import com.unilocal.backend.models.Comment;
import com.unilocal.backend.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.unilocal.backend.dto.CreatePlaceDTO;
import com.unilocal.backend.models.Place;
import com.unilocal.backend.service.PlaceService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/places")
public class PlaceController {
  @Autowired
  PlaceService placeService;

  @Autowired
  CommentService commentService;

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
  public ResponseEntity<List<Place>> addPlace(@RequestBody CreatePlaceDTO placeDTO) {
    Place place = placeService.save(placeDTO);
    List<Place> places = placeService.getAll();
    return ResponseEntity.status(200).body(places);
  }

  /**
   * delete a place by id
   *
   * @param id id of the place to be deleted
   * @return String with the result of the operation
   */
  @DeleteMapping("/delete/{id}")
  public ResponseEntity<List<Place>> delete(@PathVariable("id") String id) {
    placeService.delete(id);
    List<Place> places = placeService.getAll();
    return ResponseEntity.status(200).body(places);
  }

  /**
   * update a place by id
   *
   * @param place place to be updated
   * @return place updated
   */
  @PostMapping("/update")
  public ResponseEntity<Place> updatePlace(@RequestBody Place place) {
    return ResponseEntity.status(200).body(placeService.update(place));
  }

  @PutMapping("/check/{id}")
  public ResponseEntity<Place> checkPlace(@PathVariable("id") String id) {
    return ResponseEntity.status(200).body(placeService.checkPlace(id));
  }

  @PostMapping("/addcomment")
  public ResponseEntity<Place> addComment(@RequestBody CommentDTO commentDTO) {
    return ResponseEntity.status(200).body(placeService.addComment(commentDTO));
  }

  @PostMapping("/deletecomment")
    public ResponseEntity<Place> deleteComment(@RequestBody Comment comment) throws Exception {
      return ResponseEntity.status(200).body(placeService.deleteComment(comment));
    }
}
