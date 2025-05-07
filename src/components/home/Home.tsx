import { useNavigate } from "react-router-dom";
import { useRandomPageViewModel } from "../../viewmodels/RandomPageViewModel";
import "./Home.css";

function Home() {
  const { openRandomPage } = useRandomPageViewModel();
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Useless Web</h1>
      <button
        className="home-button"
        onClick={() => {
          navigate("random");
          openRandomPage();
        }}
      >
        Random Site
      </button>
    </div>
  );
}

export default Home;
