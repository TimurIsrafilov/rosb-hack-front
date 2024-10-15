import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { ConfigProvider } from "antd";

import { useAppDispatch } from "../../hooks/hooks";

import styles from "./app.module.css";

import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import Company from "../../pages/company/company";
import Team from "../../pages/team/team";
import Workers from "../../pages/workers/workers";
import Preloader from "../preloader/preloader";
import Modal from "../modal/modal";

import { loadEmployees } from "../../services/employees/actions";
import { getEmployeesLoading } from "../../services/employees/reducer";

import { HOME, TEAM, WORKERS } from "../../utils/constants";

function App(): React.JSX.Element {
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getEmployeesLoading);

  useEffect(() => {
    dispatch(loadEmployees());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      {isLoading && (
        <Modal isLoading={isLoading}>
          <Preloader />
        </Modal>
      )}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "rgba(225, 13, 52, 1)",
          },
        }}
      >
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
