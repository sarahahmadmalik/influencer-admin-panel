import Head from "next/head";
import { useState } from "react";
import { Input, Button, Form, Upload } from "antd";
import { LockOutlined } from "@ant-design/icons";
import Image from 'next/image'
import { message } from "antd";

const Index = () => {
  const [form] = Form.useForm();
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (info) => {
    if (info.file.status === "done") {
      setImageFile(info.file.originFileObj);
    }
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };


  const admin = {
    firstName: "James",
    lastName: "Williams",
    email: "James67@email.com",
    phone: "+91 465575767",
    password: "james1234",
    city: "Mumbai",
    address: "Mumbai, street 67 Flat 45",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    profilePic: "/images/profilePic.svg"
  };

  const handleSubmit = (values) => {
    if (values.password !== values.confirmPassword) {
      setIsPasswordMatch(false);
      return;
    }
  
    setIsPasswordMatch(true);
  
    // Check if any data has changed
    const hasChanged =
      values.firstName !== admin.firstName ||
      values.lastName !== admin.lastName ||
      values.email !== admin.email ||
      values.phone !== admin.phone ||
      values.city !== admin.city ||
      values.address !== admin.address ||
      values.about !== admin.about ||
      imageFile !== null;
  
    if (hasChanged) {
      message.success("Profile updated successfully!");
    } else {

      message.info("Profile is already up to date.");
    }
  };

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="h-full w-full py-6 sm:px-5 bg-[#F6F2FE] ">
        <div className="bg-[#FFFFFF] rounded-md px-5 py-6 flex flex-col-reverse sm:flex-row">
          <div className="w-full flex grow-1 px-4">
        <Form
          form={form}
          initialValues={{
            firstName: admin.firstName,
            lastName: admin.lastName,
            email: admin.email,
            phone: admin.phone,
            password: admin.password,
            city: admin.city,
            address: admin.address,
            about: admin.about
          }}
          onFinish={handleSubmit}
          className="fontMonst w-full"
        >
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-[24px] font-[700]">General</h1>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 mb-4">
            <div>
                <label>First Name</label>
              <Form.Item
                name="firstName"
              >
                <Input className="py-2 px-3 fontMonst" style={{borderColor: "#DCD8D8"}} />
              </Form.Item>
            </div>
            <div>
            <label>Last Name</label>
              <Form.Item
              
                name="lastName"
              >
                <Input className="py-2 px-3 fontMonst"  style={{borderColor: "#DCD8D8"}} />
              </Form.Item>
            </div>
            <div>
            <label>Email Address</label>
              <Form.Item
             
                name="email"
              >
                <Input className="py-2 px-3 fontMonst"  style={{borderColor: "#DCD8D8"}} />
              </Form.Item>
            </div>
            <div>
            <label>Phone Number</label>
              <Form.Item
             
                name="phone"
              >
                <Input className="py-2 px-3 fontMonst"  style={{borderColor: "#DCD8D8"}} />
              </Form.Item>
            </div>
            <div>
            <label>Password</label>
              <Form.Item
              
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password",
                  },
                ]}
              >
                <Input.Password className="py-2 px-3 fontMonst"  style={{borderColor: "#DCD8D8"}} />
              </Form.Item>
            </div>
            <div>
            <label>Confirm Password</label>
            <Form.Item
  name="confirmPassword" 
  dependencies={["password"]}
  rules={[
    {
      required: true,
      message: "Please confirm your password",
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }
        return Promise.reject(
          new Error("The passwords do not match")
        );
      },
    }),
  ]}
  validateStatus={!isPasswordMatch ? "error" : ""}
  help={!isPasswordMatch ? "Passwords do not match" : ""}
>
  <Input.Password className="py-2 px-3 fontMonst" style={{ borderColor: "#DCD8D8" }} />
</Form.Item>

            </div>
            <div>
            <label>City</label>
              <Form.Item
              
                name="city"
              >
                <Input className="py-2 px-3 fontMonst"  style={{borderColor: "#DCD8D8"}} />
              </Form.Item>
            </div>
            <div>
            <label>Address</label>
              <Form.Item
               
                name="address"
              >
                <Input className="py-2 px-3 fontMonst"  style={{borderColor: "#DCD8D8"}} />
              </Form.Item>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="">About Info</h2>
            <Form.Item
              name="about"
            >
              <Input.TextArea className="py-3 px-5 fontMonst"  style={{borderColor: "#DCD8D8"}} rows={4} />
            </Form.Item>
          </div>

          <div>
            <Button    style={{ background: "linear-gradient(270.75deg, #FF5B84 -51.86%, #4254FF 107.54%)", color: 'white',}} className="py-4 px-3 rounded-md"
       
       size="large"
       type="primary"
       htmlType="submit" >Save Changes</Button>
          </div>
        </Form>
        </div>
        <div className="flex flex-col items-center space-2 mt-5">
              <h2 className="text-[18px] fontMonst font-[600]">Profile Update</h2>
              <div relative className="my-4">
              <Image src={admin.profilePic} width={130} height={130} />
              </div>
              <Form.Item name="profileImage" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
            <Upload
              name="profileImage"
              accept="image/*"
              listType="picture"
              showUploadList={false}
              onChange={handleImageChange}
              customRequest={({ file, onSuccess }) => {
                setTimeout(() => {
                  onSuccess("ok");
                }, 0);
              }}
            >
              <Button className="text-sm font-medium  border border-[#DCD8D8] fontMonst" >
                Change Photo
              </Button>
            </Upload>
            </Form.Item>
            </div>
        </div>
        
      </div>
    </>
  );
};

export default Index;
