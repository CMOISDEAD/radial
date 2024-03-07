package com.unilocal.backend.repos;

import com.unilocal.backend.models.Feature;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeatureRepository extends MongoRepository<Feature, Integer> {
}
