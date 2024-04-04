package com.unilocal.backend.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ImageService {
  private final Cloudinary cloudinary;

  public ImageService() {
    Map<String, String> config = new HashMap<>();
    config.put("cloud_name", "");
    config.put("api_key", "");
    config.put("api_secret", "");

    cloudinary = new Cloudinary(config);
  }

  public Map upload(MultipartFile image) throws Exception {
    File file = convert(image);
    return cloudinary.uploader().upload(
        file, ObjectUtils.asMap("folder", "unilocal"));
  }

  public Map remove(String id) throws Exception {
    return cloudinary.uploader().destroy(id, ObjectUtils.emptyMap());
  }

  private File convert(MultipartFile image) throws IOException {
    File file = File.createTempFile(image.getOriginalFilename(), null);
    FileOutputStream fos = new FileOutputStream(file);
    fos.write(image.getBytes());
    fos.close();
    return file;
  }
}
