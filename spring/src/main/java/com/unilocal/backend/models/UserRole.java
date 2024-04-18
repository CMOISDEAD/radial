package com.unilocal.backend.models;

public enum UserRole {
  USER("User"),
  ADMIN("Admin");

  private final String value;

  UserRole(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }
}
