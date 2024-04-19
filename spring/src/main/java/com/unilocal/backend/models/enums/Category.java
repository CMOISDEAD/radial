package com.unilocal.backend.models.enums;

public enum Category {
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
