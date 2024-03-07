package com.unilocal.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.Length;

public record RegisterUserDTO(@NotBlank @Length(max = 100) String name,
                @NotBlank @Length(max = 100) String username,
                @NotBlank @Length(min = 5) String password,
                @NotBlank @Email String email,
                @NotBlank String image, @NotBlank String city) {
}
