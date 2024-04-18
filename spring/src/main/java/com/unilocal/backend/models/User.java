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
public class User {

  @Id
  private String id;

  @NonNull
  private UserRole role;
  @NonNull
  private String name;
  @NonNull
  private String username;
  @NonNull
  private String email;
  @NonNull
  private String password;
  private String image;
  @NonNull
  private String country;
  @NonNull
  private String city;
  private Review[] reviews;
}
