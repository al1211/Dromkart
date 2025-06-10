import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Analytics from "./page/Analytics";
import Messages from "./page/Messages";
import Products from "./page/Products";
import Reports from "./page/Reports";
import Settings from "./page/Settings";
import Login from "./Auth/Login";
import Sinup from "./Auth/Sinup";
import Dashboard from "./page/Dashboard";
import DashboradeLayout from "./layout/DashboradeLayout";

function App() {
  return (
    <Router>
      <Routes>
        
        
        <Route path="/" element={<Navigate to="/login"/>}/>
        <Route element={<DashboradeLayout/>} >
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/products" element={<Products />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/sinup" element={<Sinup />} />

        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
