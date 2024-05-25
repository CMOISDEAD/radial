import {
  Button,
  Input,
  Select,
  SelectItem,
  TimeInput,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { instance } from "../../../api/instance";
import { useAppStore } from "../../../store/useApp";
import { notify } from "../../../utils/notifications";
import { upload } from "../../../utils/upload";
import categories from "../../../utils/categories";

interface Inputs {
  name: string;
  description: string;
  images: string[];
  category: string;
  numbers: string[];
  open: string;
  close: string;
  lngLat: string;
  image: any;
}

export const AddForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm<Inputs>();
  const { user, setPoints } = useAppStore((state) => state);

  const mapData = async (data: Inputs) => {
    const [lng, lat] = data.lngLat.split(",");
    const image = await upload(data.image[0]);
    return {
      ...data,
      userId: user?.id,
      images: [image.url],
      numbers: [data.numbers],
      schedule: [
        {
          day: "monday",
          start_hour: data.open,
          end_hour: data.close,
        },
      ],
      feature: {
        type: "feature",
        properties: {
          description: data.description,
          icon: data.category,
        },
        geometry: {
          type: "Point",
          coordinates: [lng, lat],
        },
      },
    };
  };

  const onSubmit = async (data: Inputs) => {
    const request = await mapData(data);
    delete request.image;
    instance
      .post("/places/add", { ...request })
      .then((res) => {
        setPoints(res.data);
        notify({
          msg: "Place added succesfully",
          type: "success",
        });
      })
      .catch((e) => {
        console.error(e);
        notify({
          msg: "An error occurred",
          type: "error",
        });
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-4 content-center mb-4">
        <div className="flex flex-col gap-2 w-full">
          <Input
            isRequired
            label="Name"
            placeholder="El tazon del buho"
            {...register("name", { required: true })}
          />
          <Input
            isRequired
            label="description"
            placeholder="A restaurant with a good food ?"
            {...register("description", { required: true })}
          />
          <input type="file" {...register("image", { required: true })} />
          <Select
            fullWidth
            label="Category"
            variant="flat"
            placeholder="Select a category"
            onChange={({ target }) => setValue("category", target.value)}
          >
            {categories.map((point) => (
              <SelectItem key={point} value={point}>
                {point[0].toUpperCase() + point.slice(1)}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Input
            isRequired
            label="Numbers"
            placeholder="Numbers"
            {...register("numbers", { required: true })}
          />
          <div className="flex gap-2 content-center items-center justify-center">
            <Input
              isRequired
              label="Longitude & Latitude"
              placeholder="Longitude & Latitude"
              {...register("lngLat", { required: true })}
            />
          </div>
          <div className="flex gap-2 content-center items-center">
            <TimeInput
              isRequired
              label="Open hour"
              onChange={(date) => setValue("open", date.toString())}
            />
            <TimeInput
              isRequired
              label="Close hour"
              onChange={(date) => setValue("close", date.toString())}
            />
          </div>
        </div>
      </div>
      <Button fullWidth variant="flat" color="success" type="submit">
        Save Site
      </Button>
    </form>
  );
};
