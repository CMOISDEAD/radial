import axios from "axios";

export const upload = async (image: any) => {
  try {
    const content = new FormData();
    content.append("file", image);
    content.append("upload_preset", "library");
    content.append("cloud_name", "djfou58lo");
    const { data } = await axios.post(
      "https://api.cloudinary.com/v1_1/djfou58lo/image/upload",
      content
    );
    return data;
  } catch (e) {
    console.error(e);
  }
};
