import { useState } from "react";

var sitesList = [
  "https://sliding.toys/mystic-square/8-puzzle/daily/",
  "https://longdogechallenge.com/",
  "https://maze.toys/mazes/mini/daily/",
  "https://optical.toys",
  "https://paint.toys/calligram/",
  "https://puginarug.com",
  "https://memory.toys/classic/easy/",
  "https://alwaysjudgeabookbyitscover.com",
  "https://clicking.toys/flip-grid/neat-nine/3-holes/",
  "https://weirdorconfusing.com/",
  "https://checkbox.toys/scale/",
  "https://binarypiano.com/",
  "https://mondrianandme.com/",
  "https://onesquareminesweeper.com/",
  "https://cursoreffects.com",
  "https://floatingqrcode.com/",
  "https://thatsthefinger.com/",
  "https://cant-not-tweet-this.com/",
  "https://burymewithmymoney.com/",
  "https://smashthewalls.com/",
  "https://jacksonpollock.org/",
  "https://drawing.garden/",
  "https://www.trypap.com/",
  "https://www.movenowthinklater.com/",
  "https://sliding.toys/mystic-square/15-puzzle/daily/",
  "https://paint.toys/",
  "https://checkboxrace.com/",
  "https://www.rrrgggbbb.com/",
  "https://www.koalastothemax.com/",
  "https://rotatingsandwiches.com/",
  "https://maninthedark.com/",
  "https://cat-bounce.com/",
  "https://chrismckenzie.com/",
  "https://ihasabucket.com/",
  "https://toms.toys",
  "https://corndogoncorndog.com/",
  "https://www.hackertyper.com/",
  "https://pointerpointer.com",
  "https://imaninja.com/",
  "https://www.nullingthevoid.com/",
  "https://lacquerlacquer.com",
  "https://clicking.toys/peg-solitaire/solid/",
  "https://iamawesome.com/",
  "https://thisisnotajumpscare.com/",
  "https://crouton.net/",
  "https://corgiorgy.com/",
  "https://www.wutdafuk.com/",
  "https://unicodesnowmanforyou.com/",
  "https://memory.toys/maze/easy/",
  "https://boringboringboring.com/",
  "https://existentialcrisis.com/",
  "https://www.omfgdogs.com/",
  "https://oct82.com/",
  "https://www.blankwindows.com/",
  "https://tunnelsnakes.com/",
  "https://www.trashloop.com/",
  "https://www.doublepressure.com/",
  "https://optical.toys/thatcher-effect/",
  "https://wowenwilsonquiz.com",
  "https://notdayoftheweek.com/",
  "https://number.toys/",
  "https://greatbignothing.com/",
  "https://zoomquilt.org/",
  "https://optical.toys/troxler-fade/",
  "https://dadlaughbutton.com/",
  "https://remoji.com/",
  "https://loopedforinfinity.com/",
  "https://www.ripefordebate.com/",
  "https://elonjump.com/",
  "https://memory.toys/monkey-challenge/easy/",
  "https://memory.toys",
  // ...
  "https://color.method.ac/",
  "https://ffffidget.com/",
  "https://2048.io/",
  "https://screamintothevoid.com/",
  "https://29a.ch/sandbox/2011/neonflames/",
  "https://www.fallingfalling.com/",
  "https://2048game.com/de/",

  // ...
];

export function useRandomPageViewModel() {
  const [currentPage, setCurrentPage] = useState<string>(
    sitesList[Math.floor(Math.random() * sitesList.length)]
  );

  function openRandomPage() {
    setCurrentPage(sitesList[Math.floor(Math.random() * sitesList.length)]);
    console.log("Show Random Page: ", currentPage);
  }

  function openCurrentPageInNewTab() {
    if (currentPage) {
      window.open(currentPage, "_blank");
    }
  }

  function getSimplifiedLink(): string {
    const url = new URL(currentPage);
    const path = url.pathname;
    return url.hostname + (path.endsWith("/") ? path.slice(0, -1) : path);
  }

  return {
    currentPage,
    openRandomPage,
    openCurrentPageInNewTab,
    getSimplifiedLink,
  };
}
