package com.unilocal.backend.models;

import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import com.unilocal.backend.models.Schedule;

@Document
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Place {
  @Id
  private String id;

  private long lat;
  private long lon;
  private Status status;
  private Category[] categories;
  private Review[] reviews;

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
}

enum Category {
  SUPERMARKET("Supermarket"),
  RESTAURANT("Restaurant"),
  BAR("Bar"),
  CAFE("Cafe"),
  CLUB("Club"),
  SHOP("Shop"),
  OTHER("Other");

  private final String value;

  Category(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }
}

enum Status {
  APROVED("Aproved"),
  PENDING("Pending"),
  REJECTED("Rejected");

  private final String value;

  Status(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }
}
