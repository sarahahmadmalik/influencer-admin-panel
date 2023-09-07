
import Sidebar from "./Sidebar";
import { useMutation, useQuery } from "@tanstack/react-query";
import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import {useState} from 'react'
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image"
import authApi from "@/lib/authApi";
import { Avatar, Button, Dropdown, Input, Layout, Spin } from "antd";
import { SearchOutlined, BellOutlined } from "@ant-design/icons";
const { Header, Content } = Layout;
import { Menu } from "antd";
import routes from "@/routes/routes";
import { MenuOutlined, HomeOutlined, AppstoreOutlined, UsergroupAddOutlined, UploadOutlined, DollarCircleOutlined, StarOutlined } from "@ant-design/icons";


const Index = ({ children }) => {
  const router = useRouter();
  

  const handleMenuClick = (item) => {
    setSelectedMenuItem(item.key);
  };

  
  
  const items = [
    {
      key: "2",
      label: (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            className="text-sm md:text-lg font-medium font-poppins"
            style={{ textTransform: "capitalize", color: "#F49342" }}
          >
            {/* {data?.name} */}
            John Doe
          </span>
          <span
            className="text-black opacity-50 text-xs md:text-sm font-normal font-poppins"
            style={{ textTransform: "capitalize", opacity: "60" }}
          >
            {/* {data?.role} */}
            Admin
          </span>
        </div>
      ),
    },
    {
      key: "1",
      label: (
        <span
          className="text-red-600 opacity-50 text-xs md:text-base font-normal font-poppins"
          style={{ color: "red" }}
          onClick={() => logoutMutation.mutate()}
        >
          Logout
        </span>
      ),
    },
  ];

  
  const getPageTitle = (path) => {
    console.log(path)
    if (path === "/Home/[id]") {
      return "Influencer"; 
    }
    let route = routes.find((r) => r.path === path);
    if (! route) {
        if (path === "/") {
            route = routes.find((r) => r.path === "/")
            return route.title
        }
    }
    return route ? route.title : "";
}

const navItemMenu = (
  <Menu className="custom-dropdown-menu" selectedKeys={[router.pathname]}>
    <Menu.Item key="/" icon={<HomeOutlined />}>
      <Link href="/">Creator Discovery</Link>
    </Menu.Item>
    <Menu.Item key="relationship" icon={<AppstoreOutlined />}>
      <Link href="/relationship">Relationship</Link>
    </Menu.Item>
    <Menu.Item key="compaign" icon={<UsergroupAddOutlined />}>
      <Link href="/compaign">Campaign</Link>
    </Menu.Item>
    <Menu.Item key="payments" icon={<UploadOutlined />}>
      <Link href="/payments">Payments</Link>
    </Menu.Item>
    <Menu.Item key="plan&billing" icon={<DollarCircleOutlined />}>
      <Link href="/plan&billing">Plan & Billing</Link>
    </Menu.Item>
    <Menu.Item key="talk_to_us" icon={<UserOutlined />}>
      <Link href="/talk_to_us">Talk to us</Link>
    </Menu.Item>
    <Menu.Item key="your_account" icon={<UserOutlined />}>
      <Link href="/your_account">Your account</Link>
    </Menu.Item>
  </Menu>
);


  return (
    <Layout style={{ minHeight: "100vh" }} className="">
      <Sidebar role={"admin"} />
      <Layout className="site-layout ">
        <Header
          className=" bg-[#FFFFFF] border topRow  flex items-center justify-between w-full  "
          style={{ paddingTop: 20, paddingBottom: 20, height: "4rem", borderColor: "#D9E9FF", background: "white"}}
        >
  
  <div className="flex  w-auto sm:px-4 items-center justify-start  ">
    <div className="">
            <h1 className="font-[700] sm:text-[24px] text-[20px] fontMonst" style={{fontWeight: "700 !important", fontSize: "24px !important"}}> { getPageTitle(router.pathname)}</h1>
          </div>
        
        </div>

       


<div className="flex items-center border">

          <div className="w-full flex flex-col   mr-3">
          <p className="font-[600] text-[18px] border " style={{padding: "0 !important", margin: 0}}>John Doe</p>
          <p className="font-[400] text-[13px]  text-[#0000006B]">Influencer</p>
          </div>

         

          {/* Avatar */}
          <div className="">
            <Dropdown menu={{ items }} className="border" placement="bottomRight">
              <Avatar
                size="large"
                icon={<Image src='/images/admin.svg' fill objectFit="contain" />}
                className="flex items-center mr-3 justify-center cursor-pointer"
              />
            </Dropdown>
          </div>

       
    
    <div className=" hidden hide-menu-md   h-full px-2 ">
      <Dropdown overlay={navItemMenu} trigger={["click"]} style={{border: "none !important", padding: "0 !important"}}  >
        <a className="text-[#0852C1]">
          <MenuOutlined style={{ fontSize: "24px" }} />
        </a>
      </Dropdown>
    </div>


          </div>
        </Header>
      
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default Index;
