import {
  Divider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Autocomplete,
  AutocompleteItem,
  AutocompleteSection,
} from "@nextui-org/react";
import { PointCard } from "../points/PointCard";
import { PointDetails } from "../points/PointDetails";
import { useAppStore, useMapStore } from "../../store/useApp";
import { groupBy } from "../../utils/groupBy";
import { useEffect } from "react";
import { instance } from "../../api/instance";

export const Finder = () => {
  const { points, setPoints, selectedPoint, setSelectedPoint } = useAppStore(
    (state) => state
  );
  const { map, directions } = useMapStore((state) => state);

  const onSelectionChange = (key: React.Key) => {
    if (!points) return;
    const find = points.find((point) => point.id == key);
    if (!find) return console.log("Point not found");
    setSelectedPoint(find);
    const coords = find.feature.geometry.coordinates;
    map!.flyTo({ center: coords, zoom: 16 });
    directions(coords[0], coords[1]);
  };

  useEffect(() => {
    instance
      .get("/places/all")
      .then((res) => {
        setPoints(res.data);
      })
      .catch((e) => console.error(e));
  }, [selectedPoint]);

  return (
    <Card
      className="w-3/6 mx-6 md:m-0 md:w-[38vw] bg-background/70 backdrop-blur h-full"
      shadow="lg"
    >
      <CardHeader>
        <Autocomplete
          label="Select an interest point"
          // @ts-ignore
          onSelectionChange={onSelectionChange}
        >
          {points ? (
            groupBy(points, "category").map((section: any, idx: number) => (
              <AutocompleteSection
                showDivider
                title={section[0].category}
                key={idx}
              >
                {section.map((point: any) => (
                  <AutocompleteItem key={point.id} value={point.value}>
                    {point.name}
                  </AutocompleteItem>
                ))}
              </AutocompleteSection>
            ))
          ) : (
            <AutocompleteItem key={0} value="none">
              Nothing to search
            </AutocompleteItem>
          )}
        </Autocomplete>
      </CardHeader>
      <CardBody>
        {selectedPoint ? (
          <PointDetails />
        ) : (
          <div className="grid grid-cols-2 grid-flow-row gap-4">
            {points ? (
              points.map((point) => <PointCard key={point.id} point={point} />)
            ) : (
              <p>Theres no places to search</p>
            )}
          </div>
        )}
      </CardBody>
      <Divider />
      <CardFooter className="text-xs text-gray-600">
        {points?.length || 0} interest points found nearby.
      </CardFooter>
    </Card>
  );
};
