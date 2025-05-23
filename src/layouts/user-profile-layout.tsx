import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Menu, MenuProps, theme } from "antd";
import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const UserProfileContainer = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const items: MenuItem[] = [
    {
      key: "myGameGrp",
      label: "My Games",
      type: "group",
      children: [
        {
          key: "/profile/library",
          label: "My Library",
          onClick: () => {
            navigate("/profile/library");
          },
        },
        {
          key: "/profile/ratings-and-reviews",
          label: "Ratings & Reviews",
          onClick: () => {
            navigate("/profile/ratings-and-reviews");
          },
        },
      ],
    },
    {
      key: "accountSettingGrp",
      label: "Account Settings",
      type: "group",
      children: [
        {
          key: "/profile",
          label: "Profile",
          onClick: () => {
            navigate("/profile");
          },
        },
        {
          key: "/profile/password",
          label: "Password",
          onClick: () => {
            navigate("/profile/password");
          },
        },
      ],
    },
    {
      key: "paymentGrp",
      label: "Payment",
      type: "group",
      children: [
        {
          key: "/profile/credit-card",
          label: "Credit Card",
          onClick: () => {
            navigate("/profile/credit-card");
          },
        },
        {
          key: "/profile/transction-history",
          label: "Transction History",
          onClick: () => {
            navigate("/profile/transction-history");
          },
        },
      ],
    },
    {
      key: "contactGrp",
      label: "Contact",
      type: "group",
      children: [
        {
          key: "/profile/email-notification",
          label: "Email Notifications",
          onClick: () => {
            navigate("/profile/email-notification");
          },
        },
      ],
    },
    {
      key: "miscGrp",
      label: "Misc",
      type: "group",
      children: [
        {
          key: "/profile/privacy",
          label: "Privacy",
          onClick: () => {
            navigate("/profile/privacy");
          },
        },
        {
          key: "/profile/delete-account",
          label: "Delete Account",
          onClick: () => {
            navigate("/profile/delete-account");
          },
        },
      ],
    },
  ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <MaxWidthWrapper>
      <div className="mt-5 bg-zinc-800 rounded drop-shadow border-zinc-700 border">
        <div className="border-b border-zinc-700 p-5">
          <h1 className="font-bold text-2xl">My Account</h1>
        </div>
        <div className="grid grid-cols-12">
          <div
            className="col-span-2 min-h-72"
            style={{ background: colorBgContainer }}
          >
            <Menu
              defaultSelectedKeys={[location.pathname]}
              mode="inline"
              items={items}
            />
          </div>
          <div className="col-span-10">{children}</div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default UserProfileContainer;
