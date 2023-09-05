import React from 'react';
import { Modal, Form, Input, InputNumber, Select, Button, message } from 'antd';
const { Option } = Select;

const EditCourseModal = ({ visible, onCancel, initialValues, onEditCourse }) => {
  const [form] = Form.useForm();

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      onEditCourse(values);
      message.success('Course Edited!')
      form.resetFields();
    } catch (error) {
      console.log('Validation failed:', error);
    }
  };

  return (
    <Modal
      title="Edit Course"
      visible={visible}
      onCancel={onCancel}
      onOk={handleOk}
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
      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues}
      >
        <Form.Item
          name="courseTitle"
          label="Course Title"
          rules={[{ required: true, message: 'Please enter the course title' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Courses"
          label="Courses"
          rules={[{ required: true, message: 'Please enter the number of courses' }]}
        >
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item
          name="Students"
          label="Students"
          rules={[{ required: true, message: 'Please enter the number of students' }]}
        >
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item
          name="ClassStats"
          label="Class Status"
          rules={[{ required: true, message: 'Please select the class status' }]}
        >
          <Select>
            <Option value="Active">Active</Option>
            <Option value="Inactive">Inactive</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditCourseModal;
