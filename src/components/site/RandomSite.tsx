import { useRef } from "react";
import { useRandomPageViewModel } from "../../viewmodels/RandomPageViewModel";
import "./RandomSite.css";

function RandomSite() {
  const { currentPage, openRandomPage } = useRandomPageViewModel();

  const frame = useRef(null);

  return (
    <div className="random-site">
      <div>
        <button
          className="site-button"
          onClick={() => {
            openRandomPage();
          }}
        >
          Random Page
        </button>
        <a>{currentPage}</a>
      </div>
      <iframe ref={frame} src={currentPage}></iframe>
    </div>
  );
}

export default RandomSite;
