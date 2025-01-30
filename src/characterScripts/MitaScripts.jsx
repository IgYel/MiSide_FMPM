export const closeMitaMenu = (mitaMenu) => {
  mitaMenu.classList.remove("animateSpriteMenu");
  setTimeout(() => {
    mitaMenu.classList.remove("showSpriteMenu");
  }, 500);
};

export const showMitaMenuFunction = () => {
  const mitaCollider = document.querySelector("#mitaCollider");
  let closeTimeout; // ✅ Переменная для хранения таймера

  if (mitaCollider) {
    mitaCollider.addEventListener("click", () => {
      const mitaMenu = document.querySelector("#mitaMenu");

      const player = document.querySelector("#testPlayer");
      const referenceElement = document.querySelector("#test");

      if (!player || !referenceElement) {
        console.warn("Элемент #testPlayer или #test не найден!");
        return;
      }

      const playerRect = player.getBoundingClientRect();
      const referenceRect = referenceElement.getBoundingClientRect();

      const positionXDifference = Math.abs(
        playerRect.left - referenceRect.left
      );
      const positionYDifference = Math.abs(playerRect.top - referenceRect.top);

      if (positionXDifference > 700 || positionYDifference > 400) {
        console.warn("Меню не откроется: персонажи слишком далеко!");
        return;
      }

      if (mitaMenu.classList.contains("showSpriteMenu")) {
        closeMitaMenu(mitaMenu);
        clearTimeout(closeTimeout); // ✅ Сбрасываем старый таймер
      } else {
        mitaMenu.classList.add("showSpriteMenu");

        setTimeout(() => {
          mitaMenu.classList.add("animateSpriteMenu");
        }, 500);

        mitaMenu.addEventListener("click", () => {
          clearTimeout(closeTimeout);
          closeTimeout = setTimeout(() => {
            closeMitaMenu(mitaMenu);
          }, 12000);
        });
        clearTimeout(closeTimeout);
        closeTimeout = setTimeout(() => {
          closeMitaMenu(mitaMenu);
        }, 12000);
      }
    });
  } else {
    console.warn("Элемент #mitaCollider не найден!");
  }
};
