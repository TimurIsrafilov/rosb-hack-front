// import React from "react";
// import { Checkbox } from "antd";
// import type { GetProp } from "antd";

import styles from "./filter-element.module.css";

// const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (
//   checkedValues
// ) => {
//   console.log("checked = ", checkedValues);
// };

// const plainOptions = ["Apple", "Pear", "Orange"];

// const FilterItem2: React.FC = () => (
//   <>
//     <Checkbox.Group
//       options={plainOptions}
//       onChange={onChange}
//       className={styles.ant_checkbox_group}
//     />
//   </>
// );

// export default FilterItem2;

import React, { useState } from "react";
import { Checkbox, Divider } from "antd";
import type { CheckboxProps } from "antd";
import FilterButton from "../filter-button/filter-button";
import { ignore } from "antd/es/theme/useToken";
import { getFilterValue, setFilterValue } from "../../services/filter/reducer";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

// const CheckboxGroup = Checkbox.Group;

// const plainOptions = ["Apple", "Pear", "Orange"];
// const defaultCheckedList = ['Apple', 'Orange'];

// @ts-ignore
const FilterElement: React.FC<string[]> = ({ label, menuOptions }) => {
  const dispatch = useAppDispatch();

  const filterValue = useAppSelector(getFilterValue);

  // const x = filterValue.length !== 0 ? true : false;

  const [isCheckBoxOpen, setCheckBoxOpen] = useState(false);

  const defaultCheckedList = label !== "Команда" ? menuOptions : [];

  const [checkedList, setCheckedList] = useState<string[]>(defaultCheckedList);

  const CheckboxGroup = Checkbox.Group;

  const checkAll = menuOptions?.length === checkedList?.length;
  const indeterminate =
    checkedList?.length > 0 && checkedList?.length < menuOptions?.length;

  const onChange = (list: string[]) => {
    setCheckedList(list);
    // console.log(list);

    setCheckBoxOpen(true)
    dispatch(setFilterValue({ type: label, arr: list }));
  };

  const onCheckAllChange: CheckboxProps["onChange"] = (e) => {
    setCheckedList(e.target.checked ? menuOptions : []);
    // console.log(menuOptions);
    // console.log(e.target.checked);

    setCheckBoxOpen(true)
    e.target.checked
      ? dispatch(setFilterValue({ type: label, arr: menuOptions }))
      : dispatch(setFilterValue({ type: label, arr: [] }));
  };

  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  // const y = isMenuOpen || x || isCheckBoxOpen ? true : false;

  return (
    <div className={styles.filter_element}>
      {/* <h3 className={styles.filter_element__title}>{label}</h3> */}
      <FilterButton
        handleMenuOpen={handleMenuOpen}
        isMenuOpen={isMenuOpen}
        label={label}
      />
      {isMenuOpen && (
        <div className={styles.filter_element__container}>
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            Все
          </Checkbox>
          <CheckboxGroup
            options={menuOptions}
            value={checkedList}
            onChange={onChange}
            className={styles.filter_element__checkbox}
          />
        </div>
      )}
    </div>
  );
};

export default FilterElement;

// import React, { useState } from 'react';
// import { Checkbox, Divider } from 'antd';
// import type { CheckboxProps } from 'antd';

// const CheckboxGroup = Checkbox.Group;

// const plainOptions = ['Apple', 'Pear', 'Orange'];
// const defaultCheckedList = ['Apple', 'Orange'];

// const App: React.FC = () => {
//   const [checkedList, setCheckedList] = useState<string[]>(defaultCheckedList);

//   const checkAll = plainOptions.length === checkedList.length;
//   const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;

//   const onChange = (list: string[]) => {
//     setCheckedList(list);
//   };

//   const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
//     setCheckedList(e.target.checked ? plainOptions : []);
//   };

//   return (
//     <>
//       <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
//         Check all
//       </Checkbox>
//       <Divider />
//       <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
//     </>
//   );
// };

// export default App;
