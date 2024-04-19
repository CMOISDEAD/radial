package com.unilocal.backend.repos;

import com.unilocal.backend.models.Place;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaceRepository extends MongoRepository<Place, Integer> {

  Optional<Place> findById(String id);

  // Optional<Place> findByUsername(String username);

  Optional<List<Place>> findAllByUserId(String userId);
}
