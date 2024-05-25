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

interface Inputs {
  name: string;
  description: string;
  images: string[];
  category: string;
  numbers: string[];
  open: string;
  close: string;
  lat: number;
  lon: number;
}

export const UpdateForm = ({ values }: any) => {
  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      ...values,
      lon: values.feature.geometry.coordinates[1],
      lat: values.feature.geometry.coordinates[1],
      category: values.feature.properties.icon,
      open: values.schedule[0].start_hour,
      close: values.schedule[0].close_hour,
    },
  });
  const { user, setSelectedPoint } = useAppStore((state) => state);

  const mapData = (data: any) => {
    return {
      ...data,
      userId: user?.id,
      images: [data.images],
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
          coordinates: [data.lon, data.lat],
        },
      },
    };
  };

  const onSubmit = (data: Inputs) => {
    console.log(data);
    const request = mapData(data);
    console.log(request);
    instance
      .post("/places/update", request)
      .then((res) => {
        setSelectedPoint(res.data);
        notify({
          msg: "Place added successfully",
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
          <Input
            isRequired
            label="Images"
            placeholder="Images"
            {...register("images", { required: true })}
          />
          <Select
            fullWidth
            label="Category"
            variant="flat"
            placeholder="Select a category"
            onChange={({ target }) => setValue("category", target.value)}
          >
            {["restaurant", "museum", "hotel", "cine", "library"].map(
              (point) => (
                <SelectItem key={point} value={point}>
                  {point[0].toUpperCase() + point.slice(1)}
                </SelectItem>
              )
            )}
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
              label="Lat"
              placeholder="Latitude"
              {...register("lat", { required: true })}
            />
            <Input
              isRequired
              label="Long"
              placeholder="Longitude"
              {...register("lon", { required: true })}
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
      <div className="w-full flex content-center items-center justify-center">
        <Button
          fullWidth
          variant="flat"
          color="success"
          className="w-full"
          type="submit"
        >
          Update Site
        </Button>
      </div>
    </form>
  );
};
