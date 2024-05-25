package com.unilocal.backend.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Comment {
  @Id
  private String id;

  @NonNull
  private String date;
  @NonNull
  private String userId;
  @NonNull
  private String placeId;
  @NonNull
  private String text;


  private Comment[] comments;
}
