import React, { useState } from 'react';
import { Modal, Form, Input, InputNumber, Select, Button, DatePicker } from 'antd';

const { Option } = Select;

const AddJob = ({ visible, onCancel, onAddJob }) => {
  const [form] = Form.useForm();
  const [selectedStatus, setSelectedStatus] = useState('Active');

  const handleAddJob = () => {
    form.validateFields()
      .then(values => {
        const currentDate = new Date().toLocaleDateString();
        const jobData = {
          ...values,
          postedDate: currentDate,
          status: selectedStatus
        };
        onAddJob(jobData);
        form.resetFields();
        setSelectedStatus('Active'); 
      })
      .catch(errorInfo => {
        console.log('Validation Failed:', errorInfo);
      });
  };

  return (
    <Modal
      title="Add Job"
      visible={visible}
      onCancel={onCancel}
      onOk={handleAddJob}
      footer={[
        <Button key="cancel" size="large" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="add" type="primary" 
        style={{background: "#614BC3"}}
        size="large"
        htmlType="submit" onClick={handleAddJob}>
          Add
        </Button>
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="internshipTitle"
          label="Internship Title"
          rules={[{ required: true, message: 'Please enter the internship title' }]}
        >
          <Input placeholder="Enter internship title" />
        </Form.Item>
        <Form.Item
          name="company"
          label="Company"
          rules={[{ required: true, message: 'Please enter the company name' }]}
        >
          <Input placeholder="Enter company name" />
        </Form.Item>
        <Form.Item
          name="deadline"
          label="Deadline"
          rules={[{ required: true, message: 'Please select the deadline' }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name="location"
          label="Location"
          rules={[{ required: true, message: 'Please enter the location' }]}
        >
          <Input placeholder="Enter location" />
        </Form.Item>
        <Form.Item
          name="stipend"
          label="Stipend"
          rules={[{ required: true, message: 'Please enter the stipend' }]}
        >
          <InputNumber placeholder="Enter stipend" />
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: 'Please select the status' }]}
        >
          <Select placeholder="Select status" onChange={value => setSelectedStatus(value)}>
            <Option value="Active">Active</Option>
            <Option value="Inactive">Inactive</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="img"
          label="Internship Image"
          rules={[{ required: true, message: 'Please enter the image URL' }]}
        >
          <Input placeholder="Enter image URL" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddJob;
