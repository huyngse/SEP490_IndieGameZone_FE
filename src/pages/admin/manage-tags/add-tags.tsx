import { axiosClient } from "@/lib/api/config/axios-client";
import { Form, Input, message, Modal } from "antd";
import { useState } from "react";

interface AddTagModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

interface AddTagForm {
  name: string;
}
const AddTags = ({ open, onClose, onSuccess }: AddTagModalProps) => {
  const [form] = Form.useForm<AddTagForm>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: AddTagForm) => {
    try {
      setLoading(true);
      await axiosClient.post("/tags", {
        name: values.name,
      });

      message.success("Tag added successfully!");
      form.resetFields();
      onClose();
      onSuccess();
    } catch (error) {
      message.error("Failed to add Tag");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };
  return (
    <div>
      {" "}
      <Modal
        title="Add New Tags"
        open={open}
        onCancel={handleCancel}
        onOk={() => form.submit()}
        confirmLoading={loading}
        destroyOnClose
        forceRender
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit} autoComplete="off">
          <Form.Item
            label="Tag Name"
            name="name"
            rules={[
              { required: true, message: "Please input tag name!" },
              { min: 2, message: "tag name must be at least 2 characters!" },
            ]}
          >
            <Input placeholder="Enter tag name" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddTags;
