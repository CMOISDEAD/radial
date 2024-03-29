package com.unilocal.backend.service;

import com.unilocal.backend.dto.RegisterUserDTO;
import com.unilocal.backend.dto.UpdateUserDTO;
import com.unilocal.backend.models.User;
import com.unilocal.backend.repos.UserRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired
  UserRepository userRepository;

  public List<User> getAll() {
    return userRepository.findAll();
  }

  public User save(RegisterUserDTO dto) {
    User user = new User(dto.name(), dto.username(), dto.password(),
        dto.email(), dto.image(), dto.city());
    return userRepository.save(user);
  }

  public Optional<User> findByUsername(String username) {
    return userRepository.findByUsername(username);
  }

  public Optional<User> findById(Id id) {
    return userRepository.findById(id);
  }

  public void delete(Id id) {
    User user = userRepository.findById(id).orElseThrow();
    userRepository.delete(user);
  }

  public User update(UpdateUserDTO user) {
    Optional<User> person = userRepository.findById(user.id());
    if (person.isEmpty())
      throw new RuntimeException("User not found");
    else {
      User updatedUser = person.get();
      updatedUser.setName(user.name());
      updatedUser.setEmail(user.email());
      updatedUser.setCity(user.city());
      updatedUser.setImage(user.image());
      userRepository.save(updatedUser);
      return updatedUser;
    }
  }
}
