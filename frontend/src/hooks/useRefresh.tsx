import { instance } from "../api/instance";
import { useAppStore } from "../store/useApp";

export const useRefresh = () => {
  const { setPoints } = useAppStore((state) => state);

  const refreshPlaces = () => {
    instance
      .get("/places/all")
      .then((res) => {
        setPoints(res.data);
      })
      .catch((e) => console.error(e));
  };

  return { refreshPlaces };
};
