package com.unilocal.backend.service;

import com.unilocal.backend.models.Comment;
import com.unilocal.backend.repos.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Optional;

@Service
public class CommentService {
    @Autowired
    CommentRepository commentRepository;

    public void deleteById(String id) {
        System.out.println("Deleting comment with id: " + id);
        Optional<Comment> comment = commentRepository.findById(id);
        if (comment.isEmpty()) throw new IllegalArgumentException("Comment not found");
        commentRepository.delete(comment.get());
    }
}
