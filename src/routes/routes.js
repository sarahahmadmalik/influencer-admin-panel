import { PieChartOutlined, HomeFilled, SettingFilled } from "@ant-design/icons";
import Image from 'next/image'
import { UserOutlined } from "@ant-design/icons";

const routes = [
  {
    path: "/",
    icon: <Image src="/images/route1.svg" height={20} width={20} />,
    title: "Creator Discovery",
    roles: ["admin", "user"],
  },

  {
    path: "/relationship",
    icon: <Image src="/images/route2.svg" height={20} width={20} />,
    title: "Relationship",
    roles: ["user", "admin"],
  },
  {
    path: "/compaign",
    icon: <Image src="/images/route3.svg" height={20} width={20} />,
    title: "Campaign",
    roles: ["user", "admin"],
  },
  {
    path: "/payments",
    icon: <Image src="/images/route4.svg" height={20} width={20} />,
    title: "Payments",
    roles: ["user", "admin"],
  },
  {
    path: "/plan&billing",
    icon: <Image src="/images/route5.svg" height={20} width={20} />,
    title: "Plan & Billing",
    roles: ["user", "admin"],
  },
  
  {
    path: "/talk_to_us",
    icon: <Image src="/images/route6.svg" height={20} width={20} />,
    title: "Talk to us",
    roles: ["user", "admin"],
  },
   {
    path: "/your_account",
    icon: <Image src="/images/route7.svg" height={20} width={20} />,
    title: "Your account",
    roles: ["user", "admin"],
  },
 
];

export default routes;
