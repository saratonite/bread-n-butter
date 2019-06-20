import Layout from "../client/components/Layout";
import AuthGuard from "../client/components/wrappers/AuthGuard";
const Dashboard = () => {
  return <h1>Dashboard</h1>;
};

export default AuthGuard(Dashboard);
