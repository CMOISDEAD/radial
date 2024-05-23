import { interestPoints as data } from "../utils/data";
import { ProfileHeader } from "../components/profile/ProfileHeader";
import { PointList } from "../components/profile/PointList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../api/instance";

export const User = () => {
  const { user } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    instance
      .get(`/user/${user}`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSelect = () => { };

  return (
    <div className="container mx-auto min-h-screen py-4 px-5 w-[90%]">
      <ProfileHeader user={userData} />
      <PointList data={data} title="Favorites" callback={handleSelect} />
      <PointList data={data} title="recent" callback={handleSelect} />
    </div>
  );
};
