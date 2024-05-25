import { useEffect, useState } from "react";
import { PointCard } from "../../components/points/PointCard";
import { useAppStore } from "../../store/useApp";
import { instance } from "../../api/instance";

export const PointList = () => {
  const [created, setCreated] = useState([]);
  const { user } = useAppStore((state) => state);

  useEffect(() => {
    if (!user) return;
    instance
      .get(`/users/places/${user.id}`)
      .then((res) => setCreated(res.data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="my-2">
      <h3 className="text-xl font-bold capitalize">Your Places</h3>
      <div className="flex flex-nowrap gap-2 overflow-auto py-2 min-h-44">
        {created?.length ? (
          created.map((point: any) => (
            <PointCard key={point.id} point={point} />
          ))
        ) : (
          <div className="h-full w-full flex content-center items-center justify-center">
            <p className="text-center text-content4 text-lg">
              No created points found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
