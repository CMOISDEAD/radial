import { ChangeEvent } from "react";
import { useTheme } from "next-themes";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  User,
  Avatar,
} from "@nextui-org/react";
import { useAppStore } from "../../store/useApp";
import { notify } from "../../utils/notifications";

export const UserDropdown = () => {
  const { user, setUser, setToken } = useAppStore((state) => state);
  const { setTheme } = useTheme();

  const handleTheme = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setTheme(value.toLowerCase());
  };

  const handleLogout = () => {
    notify({
      type: "success",
      msg: "You have been logged out successfully",
    });
    setUser(null);
    setToken(null);
    window.localStorage.clear();
  };

  return (
    <Dropdown
      showArrow
      radius="sm"
      classNames={{
        base: "before:bg-background/70", // change arrow background
        content:
          "p-0 border-small border-divider bg-background/70 backdrop-blur-sm",
      }}
    >
      <DropdownTrigger>
        <Avatar
          isBordered
          showFallback
          src={user?.image}
          size="sm"
          color={user?.role === "ADMIN" ? "secondary" : "default"}
          className="cursor-pointer"
        />
      </DropdownTrigger>
      <DropdownMenu className="p-3">
        <DropdownSection aria-labelledby="Profile & Actions" showDivider>
          {user ? (
            <DropdownItem
              key="profile"
              textValue="Profile"
              href={`/user/${user.username}`}
              variant="flat"
              color="primary"
            >
              <User
                name={user?.name}
                description={`@${user?.username}`}
                classNames={{
                  name: "text-default-600",
                  description: "text-default-500",
                }}
                avatarProps={{
                  size: "sm",
                  src: user?.image,
                }}
              />
            </DropdownItem>
          ) : (
            <p>No User</p>
          )}
          <DropdownItem key="settings" textValue="settings" variant="flat">
            Settings
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-labelledby="Preferences" showDivider>
          <DropdownItem
            isReadOnly
            variant="flat"
            key="theme"
            className="cursor-default"
            endContent={
              <select
                className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                id="theme"
                name="theme"
                onChange={handleTheme}
              >
                <option>System</option>
                <option>Dark</option>
                <option>Light</option>
              </select>
            }
            textValue="theme"
          >
            Theme
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-labelledby="Help & Feedback">
          <DropdownItem
            key="help_and_feedback"
            textValue="help_and_feedback"
            variant="flat"
          >
            Help & Feedback
          </DropdownItem>
          <DropdownItem
            key="logout"
            textValue="logout"
            href="/login"
            variant="flat"
            color="danger"
            onClick={handleLogout}
          >
            LogOut
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
