package com.unilocal.backend.repos;

import com.unilocal.backend.models.Place;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaceRepository extends MongoRepository<Place, Integer> {
}
