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
public class Feature {
  @Id
  private String id;

  private String type;
  private Properties properties;
  private Geometry geometry;
}

@Document
@Getter
@Setter
@ToString
@NoArgsConstructor
class Properties {
  String description;
  String icon;
}

@Document
@Getter
@Setter
@ToString
@NoArgsConstructor
class Geometry {
  String type;
  double[] coordinates;
}
