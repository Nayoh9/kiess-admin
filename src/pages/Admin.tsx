// Package import
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <main className="h-screen bg-slate-600">
      <h1 className="mb-10 text-center">Interface kiess Admin</h1>
      <div className="ml-96 mt-40 underline">
        <Link to={"/newsletter"}> Newsletter</Link>
      </div>
    </main>
  );
};

export default Admin;
