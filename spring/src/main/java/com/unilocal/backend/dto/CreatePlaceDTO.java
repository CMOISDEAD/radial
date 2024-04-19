package com.unilocal.backend.dto;

import com.unilocal.backend.models.Feature;
import com.unilocal.backend.models.Schedule;

public record CreatePlaceDTO(String name, String description, String[] images,
                                                                                                                    String category,
                                                                                                                    String[] numbers,
                                                                                                                    Feature feature,
                                                                                                                    Schedule[] schedule,
                                                                                                                    String userId) {
}
