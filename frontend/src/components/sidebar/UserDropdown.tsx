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

const userImage = "https://i.pravatar.cc/150?u=a042581f4e29026024d";

export const UserDropdown = () => {
  const { setTheme } = useTheme();

  const handleTheme = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setTheme(value.toLowerCase());
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
          src={userImage}
          size="sm"
          color="primary"
          className="cursor-pointer"
        />
      </DropdownTrigger>
      <DropdownMenu className="p-3">
        <DropdownSection aria-label="Profile & Actions" showDivider>
          <DropdownItem
            key="profile"
            textValue="Profile"
            href="/user/user"
            variant="flat"
            color="primary"
          >
            <User
              name="Junior Garcia"
              description="@jrgarciadev"
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              avatarProps={{
                size: "sm",
                src: userImage,
              }}
            />
          </DropdownItem>
          <DropdownItem key="settings" textValue="settings" variant="flat">
            Settings
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Preferences" showDivider>
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

        <DropdownSection aria-label="Help & Feedback">
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
          >
            LogOut
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
