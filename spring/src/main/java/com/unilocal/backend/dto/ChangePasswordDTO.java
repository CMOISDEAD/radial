package com.unilocal.backend.dto;

import jakarta.validation.constraints.NotBlank;

public record ChangePasswordDTO(@NotBlank String id,
    @NotBlank String newPassword,
    @NotBlank String token) {
}
