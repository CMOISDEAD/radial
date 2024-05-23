package com.unilocal.backend.controllers;

import com.unilocal.backend.dto.CreateReviewDTO;
import com.unilocal.backend.models.Review;
import com.unilocal.backend.service.ReviewService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/review")
public class ReviewController {
  @Autowired ReviewService reviewService;

  /**
   * return a list with all the reviews
   *
   * @return a list with all the reviews
   */
  @GetMapping("/all")
  public ResponseEntity<List<Review>> all() {
    return ResponseEntity.status(200).body(null);
  }

  /**
   * return all reviews from an user
   *
   * @param id id of the user
   * @return list of reviews from the user
   */
  @GetMapping("/byUser/{id}")
  public ResponseEntity<List<Review>> byUser(String id) {
    List<Review> reviews = reviewService.findByUser(id);
    return ResponseEntity.status(200).body(reviews);
  }

  /**
   * return all reviews from a place
   *
   * @param id id of the place
   * @return list of reviews from the place
   */
  @GetMapping("/byPlace/{id}")
  public ResponseEntity<List<Review>> byPlace(String id) {
    return ResponseEntity.status(200).body(null);
  }

  /**
   * add a new review
   *
   * @param dto review to be added
   * @return review created
   */
  @PostMapping("/create")
  public ResponseEntity<Review> create(CreateReviewDTO dto) {
    Review review = reviewService.save(dto);
    return ResponseEntity.status(200).body(review);
  }

  /**
   * delete a review by id
   *
   * @param id id of the review
   * @return message with the result of the operation
   */
  @DeleteMapping("/delete/{id}")
  public ResponseEntity<String> delete(String id) {
    reviewService.delete(id);
    return ResponseEntity.status(200).body("Review deleted successfully!");
  }
}
