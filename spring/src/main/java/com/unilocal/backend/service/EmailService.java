package com.unilocal.backend.service;

import com.unilocal.backend.dto.EmailDTO;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {
  @Autowired
  private JavaMailSender mailSender;
  private String template = "<!DOCTYPE html>\n" +
          "<html lang=\"es\">\n" +
          "<head>\n" +
          "  <meta charset=\"UTF-8\">\n" +
          "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
          "  <title>Recuperación de Contraseña</title>\n" +
          "  <style>\n" +
          "    body {\n" +
          "      background-color: #121212;\n" +
          "      color: #e0e0e0;\n" +
          "      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n" +
          "      margin: 0;\n" +
          "      padding: 0;\n" +
          "    }\n" +
          "    .container {\n" +
          "      width: 100%;\n" +
          "      max-width: 600px;\n" +
          "      margin: 0 auto;\n" +
          "      padding: 20px;\n" +
          "      box-shadow: 0 0 15px rgba(0,0,0,0.5);\n" +
          "      background-color: #000000;\n" +
          "      border-radius: 8px;\n" +
          "    }\n" +
          "    .header {\n" +
          "      text-align: center;\n" +
          "      padding: 20px 0;\n" +
          "    }\n" +
          "    .header img {\n" +
          "      width: 150px;\n" +
          "    }\n" +
          "    .content {\n" +
          "      padding: 20px;\n" +
          "      text-align: center;\n" +
          "    }\n" +
          "    .content h1 {\n" +
          "      font-size: 24px;\n" +
          "      margin-bottom: 10px;\n" +
          "      color: #e0e0e0;\n" +
          "    }\n" +
          "    .content p {\n" +
          "      font-size: 16px;\n" +
          "      line-height: 1.5;\n" +
          "      margin-bottom: 20px;\n" +
          "      color: #b0b0b0;\n" +
          "    }\n" +
          "    .button {\n" +
          "      display: inline-block;\n" +
          "      padding: 12px 24px;\n" +
          "      font-size: 16px;\n" +
          "      color: #fff;\n" +
          "      background-color: #0070f3;\n" +
          "      border-radius: 4px;\n" +
          "      text-decoration: none;\n" +
          "      transition: background-color 0.3s ease;\n" +
          "    }\n" +
          "    .button:hover {\n" +
          "      background-color: #005bb5;\n" +
          "    }\n" +
          "    .footer {\n" +
          "      text-align: center;\n" +
          "      padding: 20px;\n" +
          "      font-size: 12px;\n" +
          "      color: #666;\n" +
          "    }\n" +
          "  </style>\n" +
          "</head>\n" +
          "<body>\n" +
          "  <div class=\"container\">\n" +
          "    <div class=\"header\">\n" +
          "      <img src=\"https://cdn.dribbble.com/users/1158215/screenshots/15709809/media/c980e24f70c9f97e7c68d7b11eacaf51.jpg?resize=400x300&vertical=center\" alt=\"Company Logo\">\n" +
          "    </div>\n" +
          "    <div class=\"content\">\n" +
          "      <h1>Recupera tu contraseña</h1>\n" +
          "      <p>Hemos recibido una solicitud para restablecer la contraseña de tu cuenta. Haz clic en el botón de abajo para restablecer tu contraseña.</p>\n" +
          "      <a href=\"{{reset_link}}\" class=\"button\">Restablecer contraseña</a>\n" +
          "      <p>Si no solicitaste este cambio, puedes ignorar este correo con tranquilidad.</p>\n" +
          "    </div>\n" +
          "    <div class=\"footer\">\n" +
          "      <p>&copy; 2024 UniLocal. Todos los derechos reservados.</p>\n" +
          "    </div>\n" +
          "  </div>\n" +
          "</body>\n" +
          "</html>\n";

  public void sendEmail(EmailDTO email) throws Exception {
    MimeMessage message = mailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(message);

    helper.setTo(email.to());
    helper.setSubject(email.subject());
    helper.setText(this.template.replace("{{reset_link}}", email.body()), true);
    helper.setFrom("no_reply@dominio.com");

    mailSender.send(message);
  }
}
