import { Avatar, Dropdown, MenuProps } from "antd";
import { CiUser } from "react-icons/ci";
import { FaDoorOpen, FaUserAlt } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { RiBookShelfLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/log-in");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "My Account",
      icon: <FaUserAlt />,
      onClick: () => navigate("/profile")
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: "My Library",
      icon: <RiBookShelfLine />,
      onClick: () => navigate("/profile/library")
    },
    {
      key: "4",
      label: "Settings",
      icon: <IoIosSettings />,
      onClick: () => navigate("/profile/settings")
    },
    {
      type: "divider",
    },
    {
      key: "5",
      label: "Log Out",
      icon: <FaDoorOpen />,
      danger: true,
      onClick: () => {handleLogout}
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <Avatar icon={<CiUser />} className="cursor-pointer" />
    </Dropdown>
  );
};

export default ProfileMenu;
