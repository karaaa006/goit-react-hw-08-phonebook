import { PageHeader } from "antd";
import { useSelector } from "react-redux";
import { Outlet, NavLink } from "react-router-dom";
import { UserMenu } from "../components/UserMenu/UserMenu";

export default function Layout() {
  const isLogined = useSelector((state) => Boolean(state.user?.token));
  return (
    <>
      <PageHeader
        ghost={false}
        title="Phonebook"
        subTitle="v0.1"
        extra={
          isLogined ? (
            <UserMenu />
          ) : (
            [
              <NavLink to="register" key="1">
                Sign Up
              </NavLink>,
              <NavLink to="/" key="2">
                Log In
              </NavLink>,
            ]
          )
        }
      ></PageHeader>
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}
