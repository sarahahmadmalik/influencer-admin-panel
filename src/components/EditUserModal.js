import React, { useState } from "react";
import { Modal, Form, Input, Upload, Button, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import {message} from 'antd'
const EditUserModal = ({ visible, onCancel, initialValues }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [imageList, setImageList] = useState([]);

  const handleOk = () => {
    form.validateFields().then((values) => {
      
      console.log("Edited User Data:", values);
      message.success("User Updated");
      onCancel();
    });
  };

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <Modal
      title="Edit User"
      visible={visible}
      onOk={handleOk}
      onCancel={onCancel}
      destroyOnClose
      footer={[
        <Button key="cancel" onClick={onCancel}  className="transition-ease 1000ms"
        size="large"
        htmlType="submit">
          Cancel
        </Button>,
       <Button
       className="hover:bg-[#614BC3] transition-ease 1000ms"
       style={{background: "#614BC3"}}
       size="large"
       type="primary"
       htmlType="submit"
       onClick={handleOk}
     >
      Add
     </Button>
      ]}
    >
      <Form form={form} initialValues={initialValues} layout="vertical">
        <Form.Item name="id" label="ID">
          <Input />
        </Form.Item>
        <Form.Item name="user" label="User Name">
          <Input />
        </Form.Item>
        <Form.Item name="mobile" label="Mobile">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[
            { required: true, message: "Please select class status" },
          ]}
        >
          <Select placeholder="Select class status">
            <Select.Option value="Active">Active</Select.Option>
            <Select.Option value="Inactive">Inactive</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Photo" style={{ width: "100%" }}>
          <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={handleFileChange}
            beforeUpload={() => false}
            accept=".jpg,.jpeg,.png"
          >
            <div>
              <UploadOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditUserModal;
