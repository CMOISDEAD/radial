package com.unilocal.backend.models;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Locale.Category;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.unilocal.backend.models.enums.PlaceStatus;

import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Document
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Place {
    @Id
    private String id;

    @NonNull
    private String name;
    @NonNull
    private String description;
    @NonNull
    private String[] images;
    @NonNull
    private String category;
    @NonNull
    private String[] numbers;
    @NonNull
    private Feature feature;
    @NonNull
    private Schedule[] schedule;
    @NonNull
    private String userId;

    private boolean checked = false;

    private long lat;
    private long lon;
    private PlaceStatus status;
    private Category[] categories;
    private Review[] reviews;
    private ArrayList<Comment> comments = new ArrayList<>();

    public void addComment(Comment comment) {
        comments.add(comment);
    }

    public void deleteComment(Comment comment) {
        Iterator<Comment> iterator = comments.iterator();
        while (iterator.hasNext()) {
            Comment c = iterator.next();
            if (c.getUserId().equals(comment.getUserId()) && c.getDate().equals(comment.getDate())) {
                iterator.remove();
            }
        }
    }
}
