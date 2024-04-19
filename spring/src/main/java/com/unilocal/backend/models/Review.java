package com.unilocal.backend.models;

import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Review {
  @Id
  private String id;

  @NonNull
  private String text;
  @NonNull
  private int stars;
  @NonNull
  private User user;
  @NonNull
  private Place place;
}
