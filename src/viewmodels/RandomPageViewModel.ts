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
  "http://floatingqrcode.com/",
  "https://thatsthefinger.com/",
  "https://cant-not-tweet-this.com/",
  "http://heeeeeeeey.com/",
  "http://corndog.io/",
  "http://eelslap.com/",
  "http://www.staggeringbeauty.com/",
  "http://burymewithmymoney.com/",
  "https://smashthewalls.com/",
  "https://jacksonpollock.org/",
  "http://endless.horse/",
  "http://drawing.garden/",
  "https://www.trypap.com/",
  "http://www.republiquedesmangues.fr/",
  "http://www.movenowthinklater.com/",
  "https://sliding.toys/mystic-square/15-puzzle/daily/",
  "https://paint.toys/",
  "https://checkboxrace.com/",
  "http://www.rrrgggbbb.com/",
  "http://www.koalastothemax.com/",
  "https://rotatingsandwiches.com/",
  "http://www.everydayim.com/",
  "http://randomcolour.com/",
  "http://maninthedark.com/",
  "http://cat-bounce.com/",
  "http://chrismckenzie.com/",
  "https://thezen.zone/",
  "http://ninjaflex.com/",
  "http://ihasabucket.com/",
  "https://toms.toys",
  "http://corndogoncorndog.com/",
  "http://www.hackertyper.com/",
  "https://pointerpointer.com",
  "http://imaninja.com/",
  "http://www.ismycomputeron.com/",
  "http://www.nullingthevoid.com/",
  "http://www.yesnoif.com/",
  "http://lacquerlacquer.com",
  "https://clicking.toys/peg-solitaire/solid/",
  "http://iamawesome.com/",
  "http://thisisnotajumpscare.com/",
  "http://crouton.net/",
  "http://corgiorgy.com/",
  "http://www.wutdafuk.com/",
  "http://unicodesnowmanforyou.com/",
  "http://chillestmonkey.com/",
  "http://scroll-o-meter.club/",
  "http://tencents.info/",
  "https://memory.toys/maze/easy/",
  "https://boringboringboring.com/",
  "http://www.patience-is-a-virtue.org/",
  "https://existentialcrisis.com/",
  "http://www.omfgdogs.com/",
  "http://oct82.com/",
  "http://chihuahuaspin.com/",
  "http://www.blankwindows.com/",
  "http://tunnelsnakes.com/",
  "http://www.trashloop.com/",
  "http://spaceis.cool/",
  "http://www.doublepressure.com/",
  "http://buildshruggie.com/",
  "https://optical.toys/thatcher-effect/",
  "http://yeahlemons.com/",
  "http://wowenwilsonquiz.com",
  "http://notdayoftheweek.com/",
  "https://number.toys/",
  "https://card.toys",
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
  "https://cat-bounce.com/message/",

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
