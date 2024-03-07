package com.unilocal.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record SesionUserDTO(@NotBlank @Email String email,
    @NotBlank String password) {
}
