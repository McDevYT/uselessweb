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

      <div className="home-links">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://mcdevyt.com/"
        >
          Who Made it?
        </a>
        <a> - </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdi3diYjVPA_fmDRFKTzKJ2jf9Z6oMPV2xDc1Qt1eQlENSu4g/viewform?usp=dialog"
        >
          Submit
        </a>
      </div>
    </div>
  );
}

export default Home;
