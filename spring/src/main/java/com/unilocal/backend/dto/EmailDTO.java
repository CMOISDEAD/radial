package com.unilocal.backend.dto;

import jakarta.validation.constraints.NotNull;

public record EmailDTO(@NotNull String to, @NotNull String subject,
                       @NotNull String body) {}
