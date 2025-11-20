export const modules = [
  {
    title: "Фанфики",
    subjects: [
      {
        name: "«Клянись, что не изменишь своему счастью...»",
        link: "https://disk.yandex.ru/i/eAbOu48wxQLH4Q",
      },
      {
        name: "«Отражение в лезвии ножа»",
        link: "https://disk.yandex.ru/i/7sk07IotxVdo2w",
      },
    ],
  },
  {
    title: "Оригинальные произведения",
    subjects: [
      {
        name: "«Не может быть, что я единственный, кто слышит тебя»",
        link: "https://disk.yandex.ru/i/7HbcT_Eu98OHGg",
      },
      {
        name: "«Ничейные»",
        link: "https://docs.google.com/document/d/1V0u5CdBwIh5JPa_xLk9SN0ijYcHF9BMSgIJ7Ynw8uUE/edit?usp=sharing",
      },
      {
        name: "«Ничейные» на ЛитРес",
        link: "https://www.litres.ru/book/emiliya-melnik/nicheynye-72655609/?source_internal=trial_fragment",
      },
    ],
  },
  {
    title: "Другое",
    subjects: [
      {
        name: "«Черное древо. История.»",
        link: "https://disk.yandex.ru/i/E1n6EUawXFH0xw",
      },
      {
        name: "Глава «Забвение. Часть 2» в формате визуальной новеллы",
        link: "https://disk.yandex.ru/i/eBuG_7lgP5WWRQ",
      },
      {
        name: "Рассказ «Ничейные» в формате визуальной новеллы",
        link: "https://disk.yandex.ru/i/1LoPkGRCbIdF9g",
      },
      {
        name: "Глава «Тени» в формате визуальной новеллы",
        link: "https://disk.yandex.ru/i/drzU35I-_dnZgQ",
      },
    ],
  },
];

const container = document.querySelector(".card-container");

modules.forEach((module) => {
  const card = document.createElement("li");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = module.title;
  card.appendChild(title);

  const list = document.createElement("ul");

  module.subjects.forEach((subject) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = subject.link;
    link.textContent = subject.name;
    link.setAttribute("target", "__blank");
    listItem.appendChild(link);
    list.appendChild(listItem);
  });

  card.appendChild(list);
  container.appendChild(card);
});
