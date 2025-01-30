import { followClick } from "../../characterScripts/playerfolowScript";
import { showMitaMenuFunction } from "../../characterScripts/MitaScripts";
import {
  countWordsSetFontByID,
  showPlayerInfo,
} from "../../characterScripts/otherCommonScripts";

export let isFollow = false;

export const observeDOM = (callback) => {
  const observer = new MutationObserver((mutations, obs) => {
    if (document.querySelector("#mitaCollider")) {
      callback();
      obs.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
};

export const initSpriteMenuButtons = () => {
  document.addEventListener("mousedown", (event) => {
    const target = event.target;

    if (target.classList.contains("spriteMenuButton")) {
      target.classList.add("pressed");

      if (target.id === "follow") {
        isFollow = !isFollow;
        if (isFollow) {
          target.classList.add("active");
        } else {
          target.classList.remove("active");
        }
      } else {
        target.classList.add("active");
      }
    }
  });

  document.addEventListener("mouseup", (event) => {
    const target = event.target;

    if (
      target.classList.contains("spriteMenuButton") &&
      target.id !== "follow"
    ) {
      setTimeout(() => {
        target.classList.remove("pressed", "active"); // Убираем классы после отпускания
      }, 100);
    } else if (target.classList.contains("spriteMenuButton")) {
      target.classList.remove("pressed"); // Для follow убираем только pressed
    }
  });
};

observeDOM(() => {
  initSpriteMenuButtons();

  showMitaMenuFunction();
  showPlayerInfo();
  countWordsSetFontByID("#playerTalkWindow");
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("moveClicker")) {
    const testPlayer = document.querySelector("#testPlayer");
    if (testPlayer) {
      followClick(event, "#testPlayer");
    } else {
      console.warn("Элемент #testPlayer не найден!");
    }
  }
});

// ✅ Компонент React
export const MainComponent = ({ Player, MitaTest }) => {
  return (
    <main className="Main">
      <div id="backgroundContainer">
        <img id="backgroundHouseImage" src="/img/houseTest.jpg" alt="" />
        <Player />
        <MitaTest />
        <div className="moveClickerItems">
          <div className="moveClicker"></div>
          <div className="moveClicker"></div>
        </div>
      </div>
    </main>
  );
};
