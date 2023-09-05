import React, { useState } from "react";
import { Modal, Form, Input, Select, Button } from "antd";
const { Option } = Select;

const AddApplicantModal = ({ visible, onCancel, onAddApplicant }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      onAddApplicant(values);
      form.resetFields();
      setLoading(false);
    } catch (error) {
      console.error("Error adding applicant:", error);
      setLoading(false);
    }
  };

  return (
    <Modal
      title={
        <div className="fontMonst ">Add Applicant</div>
      }
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" className=" transition-ease 1000ms" onClick={onCancel} 
        size="large">
          Cancel
        </Button>,
        <Button
        style={{background: "#614BC3"}}
        size="large"
        type="primary"
        htmlType="submit"
        className="fontMonst"
          loading={loading}
          onClick={handleAdd}
        >
          Add
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical" className="fontMonst" >
        <Form.Item  className="fontMonst"  label="Post" name="post" rules={[{ required: true, message: "Please enter the post" }]}>
          <Input className="fontMonst" placeholder="Enter post" />
        </Form.Item>
        <Form.Item className="fontMonst" label="Company" name="company" rules={[{ required: true, message: "Please enter the company" }]}>
          <Input className="fontMonst" placeholder="Enter company" />
        </Form.Item>
        <Form.Item className="fontMonst" label="Applied Date" name="appliedDate" rules={[{ required: true, message: "Please select applied date" }]}>
          <Input className="fontMonst" type="date" />
        </Form.Item>
        <Form.Item className="fontMonst" label="Type" name="type" rules={[{ required: true, message: "Please select type" }]}>
          <Select className="fontMonst" placeholder="Select type">
            <Option className="fontMonst" value="Full Time">Full Time</Option>
            <Option className="fontMonst" value="Part Time">Part Time</Option>
          </Select>
        </Form.Item>
        <Form.Item className="fontMonst" label="Position" name="position" rules={[{ required: true, message: "Please select position" }]}>
          <Select className="fontMonst" placeholder="Select position">
            <Option className="fontMonst" value="Internship">Internship</Option>
            <Option  className="fontMonst"  value="Entry Level">Entry Level</Option>
          </Select>
        </Form.Item>
        <Form.Item className="fontMonst" label="Status" name="status" rules={[{ required: true, message: "Please select status" }]}>
          <Select className="fontMonst" placeholder="Select status">
            <Option className="fontMonst" value="Pending">Pending</Option>
            <Option className="fontMonst" value="On-Hold">On-Hold</Option>
            <Option className="fontMonst" value="Rejected">Rejected</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddApplicantModal;
