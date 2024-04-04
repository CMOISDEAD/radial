package com.unilocal.backend.service;

import com.unilocal.backend.models.Place;
import com.unilocal.backend.repos.PlaceRepository;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Service;

@Service
public class PlaceService {

  @Autowired
  PlaceRepository placeRepository;

  // return a list of all places
  public List<Place> getAll() {
    return placeRepository.findAll();
  }

  // save a new place
  public Place save(Place place) {
    return placeRepository.save(place);
  }

  // find a place by its id
  public Place findById(Id id) {
    return placeRepository.findById(id);
  }

  // delete a place by its id
  public void delete(Id id) {
    Place place = placeRepository.findById(id);
    placeRepository.delete(place);
  }
}
