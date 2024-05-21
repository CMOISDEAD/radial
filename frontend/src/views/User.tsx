import { interestPoints as data } from "../utils/data";
// import { useParams } from "react-router-dom";

import { ProfileHeader } from "../components/profile/ProfileHeader";
import { PointList } from "../components/profile/PointList";

export const User = () => {
  // const { user } = useParams();

  const handleSelect = () => { };

  return (
    <div className="container mx-auto min-h-screen py-4 px-5 w-[90%]">
      <ProfileHeader />
      <PointList data={data} title="Favorites" callback={handleSelect} />
      <PointList data={data} title="recent" callback={handleSelect} />
    </div>
  );
};
