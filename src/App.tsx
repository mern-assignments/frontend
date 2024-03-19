import { Navbar, Layout } from "components";
import { Login, Profile, Users } from "views";

import { Routes, Route, Outlet } from "react-router-dom";
import { PrivateRoutes } from "components/PrivateRoute";
import { SignUp } from "views/Signup";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Layout>
        <Routes>
          <Route element={<PrivateRoutes element={<Outlet />} />}>
            <Route path="/" element={<Users />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
