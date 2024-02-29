package com.unilocal.backend.repos;

import com.unilocal.backend.models.User;
import org.springframework.data.mongodb.repository.Query;

public class UserRepository extends MongoRepository<User, String> {
  @Query("{ 'username' : ?0 }")
  User findByUsername(String username) {
  };
}
