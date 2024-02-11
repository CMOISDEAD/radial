import { ActionBar } from "./ActionsBar";
import { Finder } from "./Finder";

export const Sidebar = () => {
  return (
    <div className="w-2/6 h-full flex">
      <ActionBar />
      <div className="flex-grow w-4/6 p-2">
        <Finder />
      </div>
    </div>
  );
};
