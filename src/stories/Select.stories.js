import Select from "../component/Select";

export default {
  title: 'Component/Select',
  component: Select,
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    block: false,
    invalid: false,
    disabled: false,
    required: false,
  },
  argTypes: {
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text', // ✅ 텍스트로 수정
    },
    block: {
      control: 'boolean',
    },
    invalid: {
      control: 'boolean',
    },
    disabled: { // ✅ 오타 수정
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
  },
};

export const Default = (args) => {
  return (
    <Select
      data={["Item 1", "Item 2", { label: "Item 3", value: "value" }]}
      {...args}
    />
  );
};
