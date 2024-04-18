package com.unilocal.backend.service;

import com.unilocal.backend.dto.EmailDTO;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
@EnableAutoConfiguration
@RequiredArgsConstructor
public class EmailService {
  private final JavaMailSender mailSender;

  public void sendEmail(EmailDTO email) throws Exception {
    MimeMessage message = mailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(message);

    helper.setTo(email.to());
    helper.setSubject(email.subject());
    helper.setText(email.body(), true);
    helper.setFrom("no_reply@dominio.com");

    mailSender.send(message);
  }
}
