package com.unilocal.backend.service;

import com.unilocal.backend.dto.RegisterUserDTO;
import com.unilocal.backend.dto.UpdateUserDTO;
import com.unilocal.backend.models.User;
import com.unilocal.backend.repos.UserRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired UserRepository userRepository;

  // return a list of all users
  public List<User> getAll() { return userRepository.findAll(); }

  // save a new user
  public User save(RegisterUserDTO dto) {
    User user = new User(dto.name(), dto.username(), dto.password(),
                         dto.email(), dto.image(), dto.city());
    return userRepository.save(user);
  }

  // return a user by its username
  public Optional<User> findByUsername(String username) {
    return userRepository.findByUsername(username);
  }

  // return a user by its id
  public Optional<User> findById(String id) {
    return userRepository.findById(id);
  }

  // delete a user by its id
  public void delete(String id) {
    User user = userRepository.findById(id).orElseThrow();
    userRepository.delete(user);
  }

  // update a user
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
