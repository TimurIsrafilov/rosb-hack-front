import { v4 as uuidv4 } from "uuid";

import styles from "./filter.module.css";

import useFilter from "../../hooks/filter";
import FilterElement from "../filter-element/filter-element";
import { TypeFilterValue } from "../../types/types";

function Filter(): React.JSX.Element {
  const { filterData } = useFilter();

  return (
    <div className={styles.filter}>
      {filterData.map((item: TypeFilterValue) => (
        <FilterElement type={item.type} options={item.options} key={uuidv4()} />
      ))}
    </div>
  );
}

export default Filter;
