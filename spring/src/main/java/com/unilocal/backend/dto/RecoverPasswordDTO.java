package com.unilocal.backend.dto;

import jakarta.validation.constraints.Min;
import lombok.NonNull;

public record RecoverPasswordDTO(@NonNull String token, @NonNull @Min(2) String password) {
}
