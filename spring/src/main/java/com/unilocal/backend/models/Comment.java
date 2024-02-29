package com.unilocal.backend.models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Getter
@Setter
public class Comment {
  @Id
  private String id;

  private String date;
  private int rating;
  private String UserId;
  private String PlaceId;
  private String text;
  private Comment[] comments;
}
