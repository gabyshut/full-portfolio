export const modules = [
  {
    title: "Фанфики",
    subjects: [
      {
        name: "«Клянись, что не изменишь своему счастью...»",
        link: "https://disk.yandex.ru/i/eAbOu48wxQLH4Q",
        annotation: "Фанфик с акцентом на эмоциональный конфликт и развитие персонажей.",
      },
      {
        name: "«Отражение в лезвии ножа»",
        link: "https://disk.yandex.ru/i/7sk07IotxVdo2w",
        annotation: "Психологический фанфик о внутренних противоречиях и цене выбора.",
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
        annotation: "Рассказ о подростках, которые оказались между мирами — ни живыми, ни мёртвыми.",
      },
      {
        name: "«Ничейные» на ЛитРес",
        link: "https://www.litres.ru/book/emiliya-melnik/nicheynye-72655609/?source_internal=trial_fragment",
        annotation: "Опубликованная версия рассказа на платформе ЛитРес.",
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
        annotation: "Интерактивная глава с иллюстрациями и ветками диалога.",
      },
      {
        name: "Рассказ «Ничейные» в формате визуальной новеллы",
        link: "https://disk.yandex.ru/i/1LoPkGRCbIdF9g",
        annotation: "Адаптация рассказа в жанре визуальной новеллы.",
      },
      {
        name: "Глава «Тени» в формате визуальной новеллы",
        link: "https://disk.yandex.ru/i/drzU35I-_dnZgQ",
      },
      {
        name: "Глава «Кленовый мост» в формате визуальной новеллы",
        link: "https://disk.yandex.ru/i/n6KV2_Z3WKQnEA",
      },
    ],
  },
  {
    title: "Визуальные новеллы",
    subjects: [
      {
        name: "«Железное сердце». Первый файл.",
        link: "https://disk.yandex.ru/i/APH1B8qTh3EbNg",
        annotation: "Первая часть оригинальной визуальной новеллы в стиле стимпанк.",
      },
      {
        name: "«Железное сердце». Второй файл.",
        link: "https://disk.yandex.ru/i/wnBO6kZfDP9dtA",
        annotation: "Продолжение истории: новые персонажи и сюжетные повороты.",
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
    listItem.className = "subject-item";

    const link = document.createElement("a");
    link.href = subject.link;
    link.textContent = subject.name;
    link.setAttribute("target", "_blank");
    listItem.appendChild(link);

    if (subject.annotation) {
      const annotation = document.createElement("p");
      annotation.className = "annotation";
      annotation.textContent = subject.annotation;
      listItem.appendChild(annotation);
    }

    list.appendChild(listItem);
  });

  card.appendChild(list);
  container.appendChild(card);
});