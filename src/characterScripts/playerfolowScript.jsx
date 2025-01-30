import { isFollow } from "../components/Main/MainComponent";
import { closeMitaMenu } from "./MitaScripts";

const closeMitaMenuOnDifference = (id, top, left) => {
  const element = document.querySelector(id);
  const referenceElement = document.querySelector("#test"); // 📌 Берем позицию #test

  if (!element || !referenceElement) return;

  const referenceRect = referenceElement.getBoundingClientRect();
  const positionXDifference = referenceRect.left - left;
  const positionYDifference = referenceRect.top - top;

  if (
    Math.abs(positionXDifference) > 800 ||
    Math.abs(positionYDifference) > 500
  ) {
    const mitaMenu = document.querySelector("#mitaMenu");
    if (mitaMenu) {
      closeMitaMenu(mitaMenu);
    }
  }
};

export const followClick = (event, id) => {
  const x = event.pageX;
  const y = event.pageY;

  const player = document.querySelector(id);
  if (player) {
    closeMitaMenuOnDifference(id, y - 270, x - 150);
    player.style.top = `${y - 270}px`;
    player.style.left = `${x - 150}px`;
  }
};

const checkPlayerPosition = (id) => {
  const element = document.querySelector(id);
  if (!element) return null;

  const top = element.offsetTop;
  const left = element.offsetLeft;

  return { top, left }; // Возвращаем координаты
};

const setMitaPosition = (id, top, left) => {
  const element = document.querySelector(id);
  const positionXDifference = element.offsetLeft - left;
  const positionYDifference = element.offsetTop - top;

  if (
    positionXDifference > 200 ||
    positionXDifference < -150 ||
    positionYDifference > 150 ||
    positionYDifference < -150
  ) {
    if (left > element.offsetTop) {
      element.style.top = `${top}px`;
      element.style.left = `${left - 50}px`;
    } else {
      element.style.top = `${top}px`;
      element.style.left = `${left + 150}px`;
    }
  } else {
  }
};

let intervalId; // Хранение интервала

export const followPlayer = (playerID, MitaID) => {
  if (intervalId) clearInterval(intervalId);

  intervalId = setInterval(() => {
    const position = checkPlayerPosition(playerID);
    if (position) {
      if (isFollow) {
        setMitaPosition(MitaID, position.top, position.left - 50);
      }
    }
  }, 2000);
};

export const stopFollowing = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

followPlayer("#testPlayer", "#test");
