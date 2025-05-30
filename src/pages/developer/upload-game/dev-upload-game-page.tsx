import useAgeRestrictionStore from "@/store/use-age-restriction-store";
import useCategoryStore from "@/store/use-category-store";
import useTagStore from "@/store/use-tag-store";
import {
  Form,
  FormProps,
  Input,
  InputNumber,
  Radio,
  Select,
  Steps,
} from "antd";
import Checkbox, { CheckboxGroupProps } from "antd/es/checkbox";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
const steps = [
  {
    title: "Basic Game Info",
    description: "Provide the game title, genre, and a short description.",
  },
  {
    title: "Upload Media Assets",
    description:
      "Add screenshots, cover images, and other promotional visuals.",
  },
  {
    title: "Upload Game Files",
    description: "Upload the playable build or installer for your game.",
  },
  {
    title: "Review and Submit",
    description:
      "Double-check all information and media, then click submit for review.",
  },
];
const items = steps.map((item) => ({
  key: item.title,
  title: item.title,
  description: item.description,
}));

const pricingOptions: CheckboxGroupProps<string>["options"] = [
  { label: "Free", value: "free" },
  { label: "Paid", value: "paid" },
];

type FieldType = {
  name: string;
  coverImage: string; //file
  videoLink: string;
  price: number;
  allowDonate: boolean;
  shortDescription: string;
  description: string;
  averageSession: number;
  ageRestrictionId: string;
  categoryId: string;
  gameStatusId: string;
  languageIds: string[];
  tagIds: string[];
  file: {
    platformId: string;
    file: string;
  };
};
const DevUploadGamePage = () => {
  const [form] = Form.useForm();
  const [pricingOption, setPricingOption] = useState("free");
  const [allowDonate, setAllowDonate] = useState(false);
  const {
    categories,
    fetchCategories,
    loading: loadingCategories,
  } = useCategoryStore();
  const { tags, fetchTags, loading: loadingTags } = useTagStore();
  const {
    ageRestrictions,
    fetchAgeRestrictions,
    loading: loadingAgeRestrictions,
  } = useAgeRestrictionStore();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  useEffect(() => {
    fetchCategories();
    fetchTags();
    fetchAgeRestrictions();
  }, []);
  return (
    <div className="bg-zinc-900">
      <h1 className="font-bold text-2xl p-5">Upload a new game</h1>
      <div className="bg-red-500/20 px-5 py-3">
        You don't have payment configured. If you set a minimum price above 0 no
        one will be able to download your project.&nbsp;
        <Link to={"/dev/earnings"} className="text-orange-500 underline">
          Edit account
        </Link>
      </div>
      <div className="p-5">
        <div className="mb-5">
          <div className="bg-zinc-800 p-3 rounded-lg flex items-center">
            <div className="p-3">
              <FaBook className="size-8" />
            </div>
            <div className="flex-1 border-l px-3 border-zinc-600">
              <p className="font-bold">Make sure everyone can find your page</p>
              <div>
                Review our{" "}
                <Link
                  to={"/quality-guidelines"}
                  className="underline text-orange-500"
                >
                  quality guidelines
                </Link>{" "}
                before posting your project
              </div>
            </div>
          </div>
        </div>
        <Form
          form={form}
          name="upload-game-form"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          initialValues={{ price: 1000 }}
        >
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-8">
              <h2 className="text-2xl mb-3">Game Information</h2>
              <Form.Item<FieldType>
                name="name"
                label="Game Name"
                rules={[
                  { required: true, message: "Please enter the game name" },
                  {
                    min: 2,
                    message: "Game name must be at least 2 characters",
                  },
                ]}
                style={{ width: 500, marginBottom: 20 }}
              >
                <Input placeholder="Name/Title" />
              </Form.Item>
              <Form.Item<FieldType>
                name="shortDescription"
                label="Short description"
                style={{ width: 500, marginBottom: 20 }}
                extra="Shown to avoid duplicating your game's name"
              >
                <TextArea placeholder="(Optional)" />
              </Form.Item>
              <Form.Item<FieldType>
                name="averageSession"
                label="Average session"
                rules={[
                  {
                    required: true,
                    message: "Please enter the average session",
                  },
                ]}
                style={{ width: 500, marginBottom: 20 }}
                extra="Estimated average play session length in minutes"
              >
                <InputNumber
                  min={1}
                  max={2000}
                  placeholder="60 (minutes)"
                  style={{ width: 500 }}
                />
              </Form.Item>
              <Form.Item
                label="Category"
                name={"categoryId"}
                extra="Select the category that best describes your game."
                rules={[
                  { required: true, message: "Please select a category" },
                ]}
                style={{ width: 500, marginBottom: 20 }}
              >
                <Select
                  showSearch
                  optionFilterProp="label"
                  placeholder="Click to view options or type to filter"
                  options={categories.map((x) => ({
                    value: x.id,
                    label: x.name,
                  }))}
                  loading={loadingCategories}
                />
              </Form.Item>
              <Form.Item
                label="Tags"
                name="tagIds"
                extra="Any other keywords someone might search to find your game. Max of 10."
                style={{ width: 500, marginBottom: 20 }}
              >
                <Select
                  showSearch
                  mode="multiple"
                  allowClear
                  maxCount={10}
                  optionFilterProp="label"
                  placeholder="Click to view options or type to filter"
                  options={tags.map((x) => ({
                    value: x.id,
                    label: x.name,
                  }))}
                  loading={loadingTags}
                />
              </Form.Item>
              <Form.Item
                label="Content rating"
                name="ageRestrictionId"
                extra="Select the appropriate age rating for your game"
                style={{ width: 500, marginBottom: 20 }}
              >
                <Select
                  showSearch
                  optionFilterProp="label"
                  placeholder="Select an option"
                  options={ageRestrictions
                    .sort((a, b) => a.code.localeCompare(b.code))
                    .map((x) => ({
                      value: x.id,
                      label: x.code,
                      desc: x.description,
                    }))}
                  optionRender={(option) => (
                    <div>
                      <div className="text-lg font-semibold">
                        {option.data.label}
                      </div>
                      <p className="text-wrap">{option.data.desc}</p>
                    </div>
                  )}
                  loading={loadingAgeRestrictions}
                />
              </Form.Item>
              {/* PRICING */}
              <h2 className="text-2xl mb-3">Pricing</h2>
              <Form.Item
                extra={
                  pricingOption == "free" &&
                  "The game's files will be freely available"
                }
                style={{ marginBottom: 10 }}
              >
                <Radio.Group
                  value={pricingOption}
                  options={pricingOptions}
                  onChange={(e) => setPricingOption(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                name="price"
                label="Price"
                rules={[{ required: true, message: "Please a price" }]}
                hidden={pricingOption == "free"}
                extra="Price to pay to get download access to game"
              >
                <InputNumber
                  min={1000}
                  max={10000000}
                  step={1000}
                  style={{ width: 500 }}
                  formatter={(value) =>
                    `${value}  ₫`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  // @ts-ignore
                  parser={(value) =>
                    value?.replace(/₫|\s|,/g, "") as unknown as number
                  }
                />
              </Form.Item>
              <Form.Item<FieldType>
                name="allowDonate"
                valuePropName="checked"
                label={null}
                extra={
                  allowDonate
                    ? "Someone downloading your project will be asked for a donation before getting access."
                    : "No donations can be made"
                }
              >
                <Checkbox
                  onChange={(e) => {
                    setAllowDonate(e.target.checked);
                  }}
                >
                  Allow donation
                </Checkbox>
              </Form.Item>
            </div>

            <div className="col-span-4">
              <Steps current={0} items={items} direction="vertical" />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default DevUploadGamePage;
