import { PointCard } from "../../components/points/PointCard";

export const PointList = ({ data, title, callback }: any) => {
  return (
    <div className="my-2">
      <h3 className="text-xl font-bold capitalize">{title}</h3>
      <div className="flex flex-nowrap gap-2 overflow-auto py-2">
        {data.map((point: any) => (
          <PointCard key={point.id} point={point} callback={callback} />
        ))}
      </div>
    </div>
  );
};
