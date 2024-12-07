import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="flex w-full min-w-0 flex-auto flex-col px-4 md:px-6 container mx-auto">
        <Outlet />
      </div>
    </>
  );
}
