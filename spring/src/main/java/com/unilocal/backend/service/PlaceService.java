package com.unilocal.backend.service;

import java.util.List;
import java.util.Optional;

import com.unilocal.backend.dto.CommentDTO;
import com.unilocal.backend.dto.DeleteCommentDTO;
import com.unilocal.backend.models.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unilocal.backend.dto.CreatePlaceDTO;
import com.unilocal.backend.models.Place;
import com.unilocal.backend.repos.PlaceRepository;

@Service
public class PlaceService {

  @Autowired
  PlaceRepository placeRepository;

  /**
   * return all places
   *
   * @return list of all places
   */
  public List<Place> getAll() {
    return placeRepository.findAll();
  }

  /**
   * find place by id
   *
   * @param id place id
   * @return place found by id
   */
  public Place findById(String id) throws Exception {
    Optional<Place> place = placeRepository.findById(id);
    if (place.isEmpty())
      throw new RuntimeException("Place not found");
    return place.get();
  }

  /**
   * save a new place
   *
   * @param dto place dto with all properties
   * @return place created
   */
  public Place save(CreatePlaceDTO dto) {
    Place place = new Place(dto.name(), dto.description(), dto.images(), dto.category(),
        dto.numbers(), dto.feature(), dto.schedule(), dto.userId());
    return placeRepository.save(place);
  }

  /**
   * delete a place by id
   *
   * @param id place id
   * @throws throw new RuntimeException("Place not found"); place not found
   */
  public void delete(String id) {
    Optional<Place> place = placeRepository.findById(id);
    if (place.isEmpty())
      throw new RuntimeException("Place not found");
    placeRepository.delete(place.get());
  }

  public List<Place> findByUser_id(String userId) {
    Optional<List<Place>> places = placeRepository.findAllByUserId(userId);
    if (places.isEmpty())
      throw new RuntimeException("Place not found");
    return places.get();
  }

  public Place checkPlace(String id) {
    Optional<Place> place = placeRepository.findById(id);
    if (place.isEmpty())
      throw new RuntimeException("Place not found");
    place.get().setChecked(!place.get().isChecked());
    return placeRepository.save(place.get());
  }

  // addComment
    public Place addComment( CommentDTO dto) {
        String id = dto.placeId();
        Optional<Place> place = placeRepository.findById(id);
        if (place.isEmpty()) throw new RuntimeException("Place not found");
        Comment comment = new Comment(dto.date(), dto.userId(), dto.placeId(), dto.text());
        place.get().addComment(comment);
        return placeRepository.save(place.get());
    }

  public Place deleteComment(Comment comment) {
    Optional<Place> place = placeRepository.findById(comment.getPlaceId());
    if (place.isEmpty()) throw new RuntimeException("Place not found");
    place.get().deleteComment(comment);
    return placeRepository.save(place.get());
  }

  public Place update(Place place) {
    Optional<Place> placeOptional = placeRepository.findById(place.getId());
    if (placeOptional.isEmpty()) throw new RuntimeException("Place not found");
    Place placeToUpdate = placeOptional.get();
    placeToUpdate.setName(place.getName());
    placeToUpdate.setDescription(place.getDescription());
    placeToUpdate.setImages(place.getImages());
    placeToUpdate.setCategory(place.getCategory());
    placeToUpdate.setNumbers(place.getNumbers());
    placeToUpdate.setFeature(place.getFeature());
    placeToUpdate.setSchedule(place.getSchedule());
    return placeRepository.save(placeToUpdate);
  }
}
