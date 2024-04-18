package com.unilocal.backend.service;

import com.unilocal.backend.dto.CreatePlaceDTO;
import com.unilocal.backend.models.Place;
import com.unilocal.backend.repos.PlaceRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Service;

@Service
public class PlaceService {

  @Autowired PlaceRepository placeRepository;

  // return a list of all places
  public List<Place> getAll() { return placeRepository.findAll(); }

  // find a place by its id
  public Place findById(Id id) { return placeRepository.findById(id); }

  // save a new place
  public Place save(CreatePlaceDTO dto) {
    Place place =
        new Place(dto.name(), dto.description(), dto.images(), dto.category(),
                  dto.numbers(), dto.feature(), dto.schedule());
    return placeRepository.save(place);
  }

  // delete a place by its id
  public void delete(Id id) {
    Place place = placeRepository.findById(id);
    if (place == null)
      throw new RuntimeException("Place not found");
    placeRepository.delete(place);
  }
}
