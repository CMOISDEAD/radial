package com.unilocal.backend.dto;

public record MessageDTO<T>(boolean error, T message) {}
