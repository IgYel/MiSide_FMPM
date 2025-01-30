const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const natural = require("natural");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const stemmer = natural.PorterStemmerRu;

// 🔹 Стоп-слова (предлоги, частицы, союзы)
const stopWords = new Set([
  "и",
  "но",
  "а",
  "на",
  "под",
  "возле",
  "возл",
  "без",
  "с",
  "в",
  "о",
  "об",
  "про",
  "у",
  "до",
  "за",
  "к",
  "по",
  "от",
  "из",
  "через",
  "при",
  "между",
  "для",
  "чтобы",
  "же",
  "ли",
  "бы",
  "да",
  "то",
  "если",
  "что",
  "так",
  "это",
  "этот",
  "эта",
  "тот",
  "та",
  "тоже",
  "ну",
  "ах",
  "ох",
]);

app.post("/process-text", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.json({ error: "Нет текста для обработки" });
  }

  // 🔹 Убираем знаки препинания (кроме дефиса)
  const cleanedText = text.replace(/[!?.,"'();:]/g, "");

  // 🔹 Разбиваем текст на слова
  const words = cleanedText.toLowerCase().split(/\s+/);

  // 🔹 Применяем стемминг (убираем окончания)
  let processedWords = words.map((word) => stemmer.stem(word));

  // 🔹 Фильтруем стоп-слова
  processedWords = processedWords.filter((word) => !stopWords.has(word));

  res.json({ original: text, cleaned: cleanedText, processed: processedWords });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
});
