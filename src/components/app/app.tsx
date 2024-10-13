import { Routes, Route } from "react-router-dom";

import styles from "./app.module.css";

import Sidebar from "../sidebar/sidebar";

import Header from "../header/header";
import { ConfigProvider } from "antd";
import Filter from "../filter/filter";
import InfoPanel from "../info-panel/info-panel";
// import GradePanel from "../grade-panel/grade-panel";

import { HOME, COMPANY, TEAM, WORKERS } from "../../utils/constants";
import Company from "../../pages/company/company";
import Team from "../../pages/team/team";
import Workers from "../../pages/workers/workers";
import { loadEmployees } from "../../services/employees/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../hooks/hooks";

function App() {
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(loadEmployees());
  // }, [dispatch]);

  return (
    <div className={styles.app}>
      <ConfigProvider
        theme={{
          token: {
            // borderRadius: 5,
            // colorBorder: "var(--dark-grey)",
            colorPrimary: "rgba(225, 13, 52, 1)",

            // controlHeightLG: 40,
          },
        }}
      >
        {/* <Filter /> */}
        <Sidebar />
        <div className={styles.app__container}>
          <Header />

          <Routes>
            <Route path={HOME} element={<Company />} />
            <Route path={TEAM} element={<Team />} />
            <Route path={WORKERS} element={<Workers />} />
          </Routes>
        </div>
      </ConfigProvider>
    </div>
  );
}

export default App;
