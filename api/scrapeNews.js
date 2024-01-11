const axios = require("axios");
const { parse } = require("node-html-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

async function scrapeNews(url) {
  const response = await axios.get(url);
  const root = parse(response.data);

  const allNews = root
    .querySelectorAll("article")
    .slice(0, 9)
    .map((newItem) => {
      const title = newItem
        .querySelector(".entry-header a:not(.entry-meta a)")
        .getAttribute("title");
      const description = newItem.querySelector(".entry-content p").text;
      const link = newItem.querySelector("a").getAttribute("href");
      const img = newItem.querySelector("img").getAttribute("src");
      return { title, description, link, img };
    });

  return allNews;
}

// module.exports = async (req, res) => {
//   const news = await scrapeNews("https://news.iium.edu.my/?cat=4");
//   res.json(news);
// };

//for running on local host(need to change fetch url in index.js to http://localhost:3000/api)
app.get("/api", async (req, res) => {
  const news = await scrapeNews("https://news.iium.edu.my/?cat=4");
  res.json(news);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
