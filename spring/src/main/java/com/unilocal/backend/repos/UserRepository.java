package com.unilocal.backend.repos;

import com.unilocal.backend.models.User;
import java.util.Optional;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, Integer> {

  Optional<User> findByUsername(String username);

  Optional<User> findById(Id id);
}
