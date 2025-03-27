import Login from "../components/Login";
import MatrixCubesLogo from "../components/MatrixCubesLogo";
import LeafAnim from "../components/LeafAnim";

function LandingPage() {
  return (
    <div className="app-container">
      <MatrixCubesLogo />
      <Login />
    </div>

  );
}

export default LandingPage;