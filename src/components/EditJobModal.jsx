import React, { useState } from 'react';
import { Modal, Form, Input, DatePicker, Select, Button } from 'antd';

const { Option } = Select;

const EditJobModal = ({ visible, onCancel, initialData, onSave }) => {
  const [form] = Form.useForm();
  console.log(initialData);

  const handleSave = () => {
    form.validateFields().then(values => {
      onSave(values);
      message.success('Job Modified!')
      form.resetFields();
    });
  };

  return (
    <Modal
      title="Edit Job"
      visible={visible}
      onCancel={onCancel}
      onOk={handleSave}
      footer={[
        <Button key="cancel" onClick={onCancel} className="transition-ease 1000ms" size="large" htmlType="submit">
          Cancel
        </Button>,
        <Button
          className="hover:bg-[#614BC3] transition-ease 1000ms"
          style={{ background: "#614BC3" }}
          size="large"
          type="primary"
          htmlType="submit"
          onClick={handleSave}
        >
          Add
        </Button>
      ]}
    >
      <Form form={form} initialValues={initialData} layout="vertical"> 
        <Form.Item name="internshipTitle" className="w-full my-3" label="Internship Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="company" className="w-full my-3" label="Company" rules={[{ required: true }]}> {/* Add Company input */}
          <Input />
        </Form.Item>
        <Form.Item name="postedDate" className="w-full my-3" label="Posted Date" rules={[{ required: true }]}>
          <DatePicker className="w-full m-0" />
        </Form.Item>
        <Form.Item name="deadline" className="w-full my-3" label="Deadline" rules={[{ required: true }]}>
          <DatePicker className="w-full" />
        </Form.Item>
        <Form.Item name="location" className="w-full my-3" label="Location" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="stipend" className="w-full my-3" label="Stipend" rules={[{ required: true }]}>
          <Input prefix="$" suffix="/month" />
        </Form.Item>
        <Form.Item name="status" className="w-full my-3" label="Status" rules={[{ required: true }]}>
          <Select>
            <Option value="Active">Active</Option>
            <Option value="Inactive">Inactive</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditJobModal;
