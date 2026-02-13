import Sidebar from "./Sidebar";

function Layout({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="d-flex">
      <Sidebar role={user.role} />

      <div className="flex-grow-1 p-4 bg-light">
        {children}
      </div>
    </div>
  );
}

export default Layout;
