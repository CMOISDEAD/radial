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
        base: "before:bg-default-200", // change arrow background
        content: "p-0 border-small border-divider bg-background",
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
      <DropdownMenu
        aria-label="Custom item styles"
        disabledKeys={["profile"]}
        className="p-3"
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
      >
        <DropdownSection aria-label="Profile & Actions" showDivider>
          <DropdownItem
            isReadOnly
            key="profile"
            textValue="Profile"
            className="h-14 gap-2 opacity-100"
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
          <DropdownItem key="settings" textValue="settings">
            Settings
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Preferences" showDivider>
          <DropdownItem
            isReadOnly
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
          <DropdownItem key="help_and_feedback" textValue="help_and_feedback">
            Help & Feedback
          </DropdownItem>
          <DropdownItem key="logout" textValue="logout" href="/login">
            LogOut
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
