import { Routes, Route } from "react-router-dom";

import styles from "./app.module.css";

import Sidebar from "../sidebar/sidebar";

import Header from "../header/header";
import { ConfigProvider } from "antd";

import { HOME, TEAM, WORKERS } from "../../utils/constants";
import Company from "../../pages/company/company";
import Team from "../../pages/team/team";
import Workers from "../../pages/workers/workers";
import { loadEmployees } from "../../services/employees/actions";
import { useEffect } from "react";

import { useAppDispatch } from "../../hooks/hooks";
import { getEmployeesLoading } from "../../services/employees/reducer";
import { useSelector } from "react-redux";
import Preloader from "../preloader/preloader";
import Modal from "../modal/modal";

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
