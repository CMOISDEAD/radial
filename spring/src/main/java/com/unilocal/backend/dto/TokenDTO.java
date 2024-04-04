package com.unilocal.backend.dto;

import jakarta.validation.constraints.NotBlank;

public record TokenDTO(@NotBlank String token) {}
