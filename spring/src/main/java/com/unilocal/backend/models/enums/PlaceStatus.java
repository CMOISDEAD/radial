package com.unilocal.backend.models.enums;

public enum PlaceStatus {
  APROVED("Aproved"),
  PENDING("Pending"),
  REJECTED("Rejected");

  private final String value;

  PlaceStatus(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }
}
