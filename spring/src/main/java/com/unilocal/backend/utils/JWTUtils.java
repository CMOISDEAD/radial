package com.unilocal.backend.utils;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.Map;
import javax.crypto.SecretKey;
import org.springframework.stereotype.Component;

@Component
public class JWTUtils {
  public String generateToken(String email, Map<String, Object> claims) {
    Instant now = Instant.now();
    return Jwts.builder()
        .claims(claims)
        .subject(email)
        .issuedAt(Date.from(now))
        .expiration(Date.from(now.plus(1, ChronoUnit.HOURS)))
        .signWith(getKey())
        .compact();
  }

  public Jws<Claims> parseJwt(String jwtString)
      throws ExpiredJwtException, UnsupportedJwtException,
             MalformedJwtException, IllegalArgumentException {
    JwtParser jwtParser = Jwts.parser().verifyWith(getKey()).build();
    return jwtParser.parseSignedClaims(jwtString);
  }

  private SecretKey getKey() {
    String secret = "secretsecretsecretsecretsecretsecretsecretsecret";
    byte[] bytes = secret.getBytes();
    return Keys.hmacShaKeyFor(bytes);
  }
}
