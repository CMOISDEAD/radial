package com.unilocal.backend.service;

import com.unilocal.backend.dto.CreateReviewDTO;
import com.unilocal.backend.models.Review;
import com.unilocal.backend.repos.ReviewRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

  @Autowired ReviewRepository reviewRepository;

  public List<Review> getAll() { return reviewRepository.findAll(); }

  public Review save(CreateReviewDTO dto) {
    Review review =
        new Review(dto.text(), dto.stars(), dto.user(), dto.place());
    return reviewRepository.save(review);
  }

  public void delete(String id) {
    Review review = reviewRepository.findById(id).orElseThrow();
    reviewRepository.delete(review);
  }

  public List<Review> findByUser(String id) {
    Optional<List<Review>> reviews = reviewRepository.findByUser(id);
    if (reviews.isEmpty())
      throw new RuntimeException("No reviews found");
    return reviews.get();
  }

  public List<Review> findByPlace(String id) {
    Optional<List<Review>> reviews = reviewRepository.findByPlace(id);
    if (reviews.isEmpty())
      throw new RuntimeException("No reviews found");
    return reviews.get();
  }
}
