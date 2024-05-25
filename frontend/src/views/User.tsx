import { ProfileHeader } from "../components/profile/ProfileHeader";
import { PointList } from "../components/profile/PointList";

export const User = () => {
  return (
    <div className="container mx-auto min-h-screen py-4 px-5 w-[90%]">
      <ProfileHeader />
      <PointList />
    </div>
  );
};
