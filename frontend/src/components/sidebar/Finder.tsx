import {
  AvatarGroup,
  Avatar,
  Divider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Autocomplete,
  AutocompleteItem,
  Button,
} from "@nextui-org/react";
import { PointCard } from "./PointCard";
import { interestPoints as data } from "../../utils/data";
import { useState } from "react";

export const Finder = () => {
  const [selected, setSelected] = useState<null | any>();

  const onSelectionChange = (key: React.Key) => {
    const find = data.find((point) => point.id == key);
    setSelected(find);
  };

  const onInputChange = (value: string) => {
    // TODO: On search update list, first implement a debounce
    console.log(value);
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <Autocomplete
          label="Select an interest point"
          onSelectionChange={onSelectionChange}
          onInputChange={onInputChange}
        >
          {data.map((point) => (
            <AutocompleteItem key={point.id} value={point.value}>
              {point.name}
            </AutocompleteItem>
          ))}
        </Autocomplete>
      </CardHeader>
      <CardBody>
        {selected ? (
          <div>
            <p>{selected.name}</p>
            <p>{selected.description}</p>
            <p>{selected.lat}</p>
            <p>{selected.lgn}</p>
            <Button onPress={() => setSelected(null)}>&times;</Button>
            <AvatarGroup
              isBordered
              max={3}
              total={10}
              renderCount={(count) => (
                <p className="text-small text-foreground font-medium ms-2">
                  +{count} others
                </p>
              )}
            >
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
            </AvatarGroup>
          </div>
        ) : (
          <div className="grid grid-cols-2 grid-flow-row gap-4">
            {data.map((point) => (
              <PointCard key={point.id} point={point} callback={setSelected} />
            ))}
          </div>
        )}
      </CardBody>
      <Divider />
      <CardFooter className="text-xs text-divider">
        {data.length} interest points found.
      </CardFooter>
    </Card>
  );
};
