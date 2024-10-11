import React from "react";
import type { CascaderProps } from "antd";
import { Cascader } from "antd";

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
  disableCheckbox?: boolean;
}

const options: Option[] = [
  {
    label: "Core",
    value: "Core",
  },
  {
    label: "Медиа",
    value: "Медиа",
  },
  {
    label: "Приложение",
    value: "Приложение",
  },
  {
    label: "ФЛ",
    value: "ФЛ",
  },
  {
    label: "Эквайринг",
    value: "Эквайринг",
  },
  {
    label: "ЮЛ",
    value: "ЮЛ",
  },
];

const onChange: CascaderProps<Option, "value", true>["onChange"] = (value) => {
  console.log(value);
};

const FilterItem1: React.FC = () => (
  <Cascader
    style={{ width: "100%" }}
    options={options}
    onChange={onChange}
    multiple
    maxTagCount="responsive"
  />
);

export default FilterItem1;
