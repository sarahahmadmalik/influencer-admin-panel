import React, { useState } from "react";
import { Modal, Form, Input, Upload, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AddStudentsModal = ({ visible, onCancel, onAddStudent }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };
  const handleAddStudent = () => {
    form.validateFields().then((values) => {
      onAddStudent(values, fileList);
      form.resetFields();
      setFileList([]); 
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setFileList([]); 
    onCancel();
  };

  return (
    <Modal
      title="Add Student"
      visible={visible}
      onCancel={onCancel}
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
       onClick={handleAddStudent}
     >
      Add
     </Button>
      ]}
    >
      <Form form={form} layout="vertical">
    <Form.Item name="id" label="ID" rules={[{ required: true, message: "Please enter ID" }]}>
    <Input placeholder="Enter ID" />
  </Form.Item>
  <Form.Item name="user" label="User Name" rules={[{ required: true, message: "Please enter User Name" }]}>
    <Input placeholder="Enter User Name" />
  </Form.Item>
  <Form.Item name="mobile" label="Mobile" rules={[{ required: true, message: "Please enter Mobile" }]}>
    <Input placeholder="Enter Mobile" />
  </Form.Item>
  <Form.Item name="email" label="Email" rules={[{ required: true, message: "Please enter Email" }]}>
    <Input placeholder="Enter Email" />
  </Form.Item>
        <Form.Item label="Photo"   style={{ width: "100%" }}>
          <Upload
           listType="picture-card"
            fileList={fileList}
            rules={[
                {
                  required: true,
                  message: "Please upload an image!",
                },
              ]}
              required
            onChange={handleFileChange}
            customRequest={(e) => {
                const imageRef = ref(
                  storage,
                  `product_images/${e.file.name + e.file.uid}`
                );
                uploadBytes(imageRef, e.file).then((snapshot) => {
                  e.onSuccess("ok");
                  getDownloadURL(snapshot.ref).then((url) => {
                    setImageList([
                      ...imageList,
                      {
                        id: uuidv4(),
                        url,
                      },
                    ]);
                  });
                });
              }}
              onRemove={(e) => {
                const imageRef = ref(
                  storage,
                  `product_images/${e.name + e.uid}`
                );
                getDownloadURL(imageRef).then((url) => {
                  const updated = imageList.filter((e) => e !== url.toString());
                  setImageList(updated);
                });
                deleteObject(imageRef);
              }}
            beforeUpload={() => false}
            accept=".jpg,.jpeg,.png"
          >
            <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </div>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddStudentsModal;
