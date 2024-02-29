package com.unilocal.backend.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Review {
  @Id
  private String id;

  private String text;
  private int stars;
  private User user;
  private Place place;
}
