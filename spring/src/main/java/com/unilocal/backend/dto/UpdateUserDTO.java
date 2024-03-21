package com.unilocal.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record UpdateUserDTO(@NotBlank Integer id, @NotBlank String name,
        String image, @NotBlank @Email String email,
        String city) {
}
