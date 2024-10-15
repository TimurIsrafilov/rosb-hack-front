import { useState } from "react";
import { Checkbox, CheckboxProps } from "antd";

import styles from "./filter-element.module.css";

import { useAppDispatch } from "../../hooks/hooks";

import FilterButton from "../filter-button/filter-button";
import { setFilterValue } from "../../services/filter/reducer";
import { TypeFilterValue } from "../../types/types";

const FilterElement: React.FC<TypeFilterValue> = (props) => {
  const dispatch = useAppDispatch();

  const [checkedList, setCheckedList] = useState<string[]>(props.options);

  const CheckboxGroup = Checkbox.Group;

  const checkAll = props.options?.length === checkedList?.length;
  const indeterminate =
    checkedList?.length > 0 && checkedList?.length < props.options?.length;

  const onChange = (list: string[]) => {
    setCheckedList(list);

    dispatch(setFilterValue({ type: props.type, options: list }));
  };

  const onCheckAllChange: CheckboxProps["onChange"] = (e) => {
    setCheckedList(e.target.checked ? props.options : []);

    e.target.checked
      ? dispatch(setFilterValue({ type: props.type, options: props.options }))
      : dispatch(setFilterValue({ type: props.type, options: [] }));
  };

  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.filter_element}>
      <FilterButton
        handleMenuOpen={handleMenuOpen}
        isMenuOpen={isMenuOpen}
        label={props.type}
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
            options={props.options}
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
