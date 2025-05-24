import { Avatar, Dropdown, MenuProps } from "antd";
import { CiUser } from "react-icons/ci";
import { FaDoorOpen, FaLightbulb, FaStar, FaUserAlt } from "react-icons/fa";
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
      label: "My Profile",
      icon: <FaUserAlt />,
      onClick: () => navigate("/account/profile"),
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: "My Library",
      icon: <RiBookShelfLine />,
      onClick: () => navigate("/account/library"),
    },
    {
      key: "3",
      label: "Ratings & Reviews",
      icon: <FaStar />,
      onClick: () => navigate("/account/ratings-and-reviews"),
    },
    {
      key: "4",
      label: "Recommendations ",
      icon: <FaLightbulb />,
      onClick: () => navigate("/recommendations"),
    },
    {
      type: "divider",
    },
    {
      key: "5",
      label: "Log Out",
      icon: <FaDoorOpen />,
      danger: true,
      onClick: () => {
        handleLogout;
      },
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <Avatar icon={<CiUser />} className="cursor-pointer" />
    </Dropdown>
  );
};

export default ProfileMenu;
