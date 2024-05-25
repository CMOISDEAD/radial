
package com.unilocal.backend.repos;

import com.unilocal.backend.models.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CommentRepository extends MongoRepository<Comment, Integer> {
    Optional<Comment> findById(String id);
}
