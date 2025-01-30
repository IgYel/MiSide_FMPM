export function countWordsSetFontByID(elementID) {
  const element = document.querySelector(elementID);
  if (!element) {
    console.warn(`❌ Элемент ${elementID} не найден!`);
    return;
  }

  const updateFontSize = () => {
    const text = element.value.trim();
    const words = text.match(/\p{L}+/gu) || [];

    let size = 3;
    size = size - words.length / 12;

    element.style.fontSize = `${Math.max(size, 1.5)}vh`;
  };

  const observer = new MutationObserver(updateFontSize);
  observer.observe(element, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  // ✅ Реагируем на ввод пользователя
  element.addEventListener("input", updateFontSize);
  element.addEventListener("keydown", updateFontSize);
  element.addEventListener("paste", updateFontSize);
  element.addEventListener("cut", updateFontSize);

  // ✅ Первый запуск, чтобы размер сразу изменился
  updateFontSize();
}

export const showPlayerInfo = () => {
  const playerIcon = document.querySelector("#playerIcon");
  playerIcon.addEventListener("mousedown", () => {
    const playerInfo = document.querySelector("#playerInfo");
    playerInfo.classList.toggle("showPlayerInfo");
    setTimeout(() => {
      if (playerInfo.classList.contains("showPlayerInfo")) {
        playerInfo.classList.toggle("showPlayerInfo");
      }
    }, 5000);
  });
};

//! API CHATTING

async function sendMessageToServer(userMessage) {
  const response = await fetch("http://localhost:3000/process-text", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: userMessage }),
  });

  const data = await response.json();
  return data.processed; // Возвращаем обработанные слова
}

const responses = [
  {
    keywords: [
      "уборка",
      "порядок",
      "убирать",
      "убрат",
      "убра",
      "убира",
      "чистота",
      "прибраться",
    ],
    responses: [
      "Хорошая идея, тут давно пора прибраться!",
      "Не думаю, что сейчас время для уборки...",
      "Ты можешь сделать это сам?",
      "А кто здесь отвечает за уборку?",
    ],
  },
  {
    keywords: [
      "еда",
      "кухня",
      "готовить",
      "готов",
      "приготовить",
      "приготов",
      "поесть",
    ],
    responses: [
      "Что бы ты хотел приготовить?",
      "Может, начнём с чего-то простого?",
      "Я не очень люблю готовить...",
      "Главное, чтобы не сгорело!",
    ],
  },
  {
    keywords: [
      "окно",
      "окн",
      "вид",
      "прогуля",
      "улица",
      "снаружи",
      "наружу",
      "пейзаж",
    ],
    responses: [
      "Мы же не можем выйти за пределы дома( там ничего нет",
      "Я тоже задумывался, но не знаю ответа.",
      "там ничего нет кроме этого белого света, это чтобы не лагало)",
    ],
  },
  {
    keywords: ["свет", "лампа", "освещение", "яркость", "ярко", "ярк"],
    responses: [
      "Свет тут никогда не гаснет...",
      "Ты замечал, что лампы не имеют выключателей?",
      "Может, стоит попробовать что-то выключить?",
      "Мне кажется, свет реагирует на нас.",
    ],
  },
  {
    keywords: ["музыка", "звук", "мелодия", "песня"],
    responses: [
      "Ты тоже это слышишь?",
      "Откуда вообще здесь играет музыка?",
      "Она повторяется, как будто зациклилась.",
      "Может, это часть атмосферы дома?",
    ],
  },
];

export const sendToMita = () => {
  const talkButton = document.getElementById("talk");
  const playerTalkWindow = document.getElementById("playerTalkWindow");
  let closeTimeout; // ✅ Храним таймер

  if (!talkButton || !playerTalkWindow) {
    console.warn("Элементы #talk или #playerTalkWindow не найдены!");
    return;
  }

  // ✅ Функция сброса таймера
  const resetCloseTimeout = () => {
    clearTimeout(closeTimeout);
    closeTimeout = setTimeout(() => {
      playerTalkWindow.classList.remove("showPlayerTalkWindow"); // ✅ Закрываем окно
    }, 8000);
  };

  // ✅ Открытие/закрытие при нажатии на кнопку "talk"
  talkButton.addEventListener("click", () => {
    playerTalkWindow.classList.toggle("showPlayerTalkWindow");
    if (playerTalkWindow.classList.contains("showPlayerTalkWindow")) {
      resetCloseTimeout();
    }
  });

  playerTalkWindow.addEventListener("click", resetCloseTimeout);

  playerTalkWindow.addEventListener("input", resetCloseTimeout);

  playerTalkWindow.addEventListener("keydown", async function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // ✅ Предотвращаем перенос строки в input

      const userMessage = this.value.trim();
      if (!userMessage) return;

      this.value = ""; // ✅ Очищаем input после отправки

      resetCloseTimeout(); // ✅ Обнуляем таймер при вводе текста

      // ✅ Отправляем текст на сервер и обрабатываем ответ
      const processedWords = await sendMessageToServer(userMessage);
      console.log("Обработанные слова:", processedWords);

      let foundResponse = "Я не знаю, что сказать..."; // Значение по умолчанию

      for (const topic of responses) {
        if (
          topic.keywords.some((keyword) => processedWords.includes(keyword))
        ) {
          foundResponse =
            topic.responses[Math.floor(Math.random() * topic.responses.length)];
          break;
        }
      }

      console.log(foundResponse);
    }
  });
};
