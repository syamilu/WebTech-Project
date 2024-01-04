const puppeteer = require("puppeteer");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

async function scrapeNews(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const allNews = await page.evaluate(() => {
    const news = document.querySelectorAll("article");

    return Array.from(news)
      .slice(0, 9)
      .map((newItem) => {
        const title = newItem.querySelector(
          ".entry-header a:not(.entry-meta a)"
        ).title;
        const description = newItem.querySelector(".entry-content p").innerText;
        const link = newItem.querySelector("a").href;
        const img = newItem.querySelector("img").src;
        return { title, description, link, img };
      });
  });

  return allNews;
}

app.get("/api", async (req, res) => {
  const news = await scrapeNews("https://news.iium.edu.my/?cat=4");
  res.json(news);
});

app.listen(port, () => {
  console.log(`Server running at https://v3.salahuddin.syamilyusof.com`);
});
