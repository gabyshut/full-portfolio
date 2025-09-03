export const modules = [
  {
    title: "Фанфики",
    subjects: [
      {
        name: "Клянись, что не изменишь своему счастью...",
        link: "https://disk.yandex.ru/i/Wzl_ndIohZ0Tqg",
      },
      {
        name: "Отражение в лезвии ножа.",
        link: "https://disk.yandex.ru/i/7sk07IotxVdo2w",
      },
    ],
  },
  {
    title: "Оригинальные произведения",
    subjects: [
      { name: "Не может быть, что я единственный, кто слышит тебя", link: "https://disk.yandex.ru/i/7HbcT_Eu98OHGg" },
    ],
  },
  {
    title: "Другое",
    subjects: [
      {
        name: "Черное древо. История.",
        link: "https://disk.yandex.ru/i/E1n6EUawXFH0xw",
      },
    ],
  }]

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
    link.setAttribute('target', '__blank');
    listItem.appendChild(link);
    list.appendChild(listItem);
  });

  card.appendChild(list);
  container.appendChild(card);
});
