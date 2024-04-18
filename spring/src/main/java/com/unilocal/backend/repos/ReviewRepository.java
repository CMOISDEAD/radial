package com.unilocal.backend.repos;

import com.unilocal.backend.models.Review;
import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends MongoRepository<Review, Integer> {

  Optional<Review> findById(String id);

  Optional<List<Review>> findByUser(String id);

  Optional<List<Review>> findByPlace(String id);
}
