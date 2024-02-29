package com.unilocal.backend.models;

import java.time.LocalTime;
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
public class Place {
  @Id
  private String id;

  private String name;
  private String description;
  private String[] images;
  private long lat;
  private long lon;
  private String category;
  private Review[] reviews;
  private Category[] categories;
  private String[] numbers;
  private Feature feature;
  private Status status;
  private Schedule[] schedule;
}

@Getter
@Setter
class Schedule {
  private String day;
  private LocalTime start_hour;
  private LocalTime end_hour;
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
