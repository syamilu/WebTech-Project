const fetch = require("node-fetch");
const { parse } = require("node-html-parser");

async function scrapeNews(url) {
  const res = await fetch(url);
  const html = await res.text();
  const root = parse(html);

  const allNews = root
    .querySelectorAll("article")
    .slice(0, 9)
    .map((newItem) => {
      const title = newItem
        .querySelector(".entry-header a:not(.entry-meta a)")
        .getAttribute("title");
      const description = newItem.querySelector(".entry-content p").innerText;
      const link = newItem.querySelector("a").getAttribute("href");
      const img = newItem.querySelector("img").getAttribute("src");
      return { title, description, link, img };
    });

  return allNews;
}

module.exports = async (req, res) => {
  const news = await scrapeNews("https://news.iium.edu.my/?cat=4");
  res.json(news);
};
