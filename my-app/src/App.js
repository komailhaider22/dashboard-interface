import logo from "./logo.svg";
import "./App.css";
import Home from "./HomePage/Layout/Layout";
import Directory from "./HomePage/Layout/Main Content/Directory/Directory";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersFetch } from "./store/sagas/slice/usersSlice";

import Homepage from "./HomePage/Layout/Layout-sider";

function App() {
  // const [dataSource, setDataSource] = useState([]);
  // useEffect(() => {
  //   fetch("MOCK_DATA.json")
  //     .then((response) => response.json())
  //     .then((dataSource) => setDataSource(dataSource));
  // }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch]);

  // const users = useSelector((state) => state.users.users);

  // return <>{users && <Home users={users} />}</>;
  return <Homepage />;
}

export default App;
