import Tiptap from "@/components/tiptap/tiptap";
import usePlatformStore from "@/store/use-platform-store";
import {
  Button,
  Form,
  FormInstance,
  FormProps,
  Input,
  Select,
  Upload,
  UploadFile,
} from "antd";
import { useEffect } from "react";
import { FaMinus, FaPlus, FaUpload } from "react-icons/fa";

type FieldType = {
  files: {
    displayName: string;
    file: UploadFile[];
    platformId: string;
  }[];
  installInstruction: string;
};

const GameFilesForm = ({ form }: { form: FormInstance<any> }) => {
  const { fetchPlatforms, platforms, loading } = usePlatformStore();

  const normFile = (e: any) => {
    if (Array.isArray(e)) return e;
    return e?.fileList;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const files = values.files?.map((item) => ({
      displayName: item.displayName,
      file: item.file?.[0]?.originFileObj,
    }));
    console.log("Submitted Files:", files);
  };

  useEffect(() => {
    fetchPlatforms();
  }, []);

  return (
    <Form form={form} onFinish={onFinish} layout="vertical" autoComplete="off">
      <Form.List name="files">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div
                key={key}
                className="flex flex-col mb-5 border p-3 bg-zinc-800 rounded"
              >
                <Form.Item
                  {...restField}
                  name={[name, "displayName"]}
                  label="Display Name"
                  extra="The name that will be shown to users (e.g., Windows Build v1.2)"
                  rules={[
                    { required: true, message: "Please input display name" },
                  ]}
                  style={{ width: 500, marginBottom: 5 }}
                >
                  <Input placeholder="Enter display name" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "file"]}
                  label="Upload File"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  rules={[{ required: true, message: "Please upload a file" }]}
                  style={{ marginBottom: 10 }}
                  extra="Upload the actual game file (compressed builds are accepted). File size limit: 1 GB."
                >
                  <Upload
                    beforeUpload={() => false}
                    maxCount={1}
                    showUploadList={{
                      extra: ({ size = 0 }) => (
                        <span style={{ color: "#cccccc" }}>
                          &nbsp;({(size / 1024 / 1024).toFixed(2)}MB)
                        </span>
                      ),
                      showRemoveIcon: true,
                    }}
                  >
                    <Button icon={<FaUpload />}>Select File</Button>
                  </Upload>
                </Form.Item>
                <Form.Item
                  {...restField}
                  label={<span className="font-bold">Platform</span>}
                  name={[name, "platformId"]}
                  extra="Select the platform this game file is for"
                  style={{ width: 500, marginBottom: 20 }}
                >
                  <Select
                    showSearch
                    allowClear
                    optionFilterProp="label"
                    placeholder="Click to view options or type to filter"
                    options={platforms.map((x) => ({
                      value: x.id,
                      label: x.name,
                    }))}
                    loading={loading}
                  />
                </Form.Item>
                <Button
                  danger
                  type="default"
                  onClick={() => remove(name)}
                  icon={<FaMinus />}
                >
                  Remove
                </Button>
              </div>
            ))}

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<FaPlus />}
              >
                Add File
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item<FieldType>
        name="installInstruction"
        label={<span className="font-bold">Install instruction</span>}
        extra="Help players install your game on their specific platform"
      >
        <Tiptap />
      </Form.Item>
    </Form>
  );
};

export default GameFilesForm;
