import React, { useState } from 'react';
import { Modal, Form, Input, InputNumber, Select, Button } from 'antd';

const { Option } = Select;

const AddCourseModal = ({ visible, onCancel, onAddCourse }) => {
  const [form] = Form.useForm();

  const handleAddCourse = () => {
    form.validateFields()
      .then(values => {
        onAddCourse(values);
        form.resetFields();
      })
      .catch(errorInfo => {
        console.log('Validation Failed:', errorInfo);
      });
  };
  const handleCancel = () => {
    form.resetFields(); 
    onCancel();
  };

  return (
    <Modal
      title="Add Course"
      visible={visible}
      onCancel={handleCancel}
      onOk={handleAddCourse}
      footer={[
        <Button key="cancel" onClick={handleCancel}  className="transition-ease 1000ms"
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
       onClick={handleAddCourse}
     >
      Add
     </Button>
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="courseTitle"
          label="Course Title"
          rules={[{ required: true, message: 'Please enter a course title' }]}
          style={{width: "100% !important"}}
        >
          <Input placeholder="Enter course title"  style={{width: "100% !important"}}/>
        </Form.Item>
        <Form.Item
  name="Courses"
  label="Courses"
  rules={[
    { required: true, message: 'Please enter the number of courses' },
    { type: 'number', min: 0, message: 'Courses cannot be negative' },
  ]}
  style={{ width: '100%' }}
>
  <InputNumber placeholder="Enter number of courses" />
</Form.Item>

<Form.Item
  name="Students"
  label="Students"
  rules={[
    { required: true, message: 'Please enter the number of students' },
    { type: 'number', min: 0, message: 'Students cannot be negative' },
  ]}
  style={{ width: '100%' }}
>
  <InputNumber placeholder="Enter number of students" />
</Form.Item>

        <Form.Item
          name="ClassStats"
          label="Class Stats"
          rules={[{ required: true, message: 'Please select class status' }]}
        >
          <Select placeholder="Select class status">
            <Option value="Active">Active</Option>
            <Option value="Inactive">Inactive</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddCourseModal;
