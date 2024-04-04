package com.unilocal.backend.service;

import com.unilocal.backend.utils.JWTUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

// TODO: Implement this class
@Service
@Transactional
@RequiredArgsConstructor
public class AuthService {
  private final UserService userService;
  private final JWTUtils jwtUtils;
}
