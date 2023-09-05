import React from 'react';
import { Modal, Form, Input, Select, Button } from 'antd';

const { Option } = Select;

const EditApplicantModal = ({ visible, onCancel, initialValues, onUpdateApplicant }) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then(values => {
      onUpdateApplicant(values);
      form.resetFields();
    });
  };

  return (
    <Modal
      title="Edit Applicant"
      visible={visible}
      onCancel={onCancel}
      onOk={handleSubmit}
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
          onClick={handleSubmit}
        >
          Add
        </Button>
      ]}
    >
      <Form form={form} initialValues={initialValues} layout="vertical">
        <Form.Item label="Company" name="company" rules={[{ required: true, message: 'Please enter the company.' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Post" name="post" rules={[{ required: true, message: 'Please enter the post.' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Applied Date" name="appliedDate" rules={[{ required: true, message: 'Please enter the applied date.' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Type" name="type" rules={[{ required: true, message: 'Please enter the type.' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Position" name="position" rules={[{ required: true, message: 'Please enter the position.' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Contact" name="contact" rules={[{ required: true, message: 'Please enter the contact.' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Status" name="status" rules={[{ required: true, message: 'Please select the status.' }]}>
          <Select>
            <Option value="Pending">Pending</Option>
            <Option value="On-Hold">On-Hold</Option>
            <Option value="Rejected">Rejected</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditApplicantModal;
