package com.unilocal.backend.dto;

import com.unilocal.backend.models.Place;
import com.unilocal.backend.models.User;

public record CreateReviewDTO(String id, String text, int stars, User user,
                              Place place) {}
