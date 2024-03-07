package com.unilocal.backend.repos;

import com.unilocal.backend.models.Review;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends MongoRepository<Review, Integer> {
}
