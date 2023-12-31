const puppeteer = require("puppeteer");

async function scrapeNews(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const allNews = await page.evaluate(() => {
    const news = document.querySelectorAll("article");

    return Array.from(news)
      .slice(0, 5)
      .map((newItem) => {
        const title = newItem.querySelector(
          ".entry-header a:not(.entry-meta a)"
        ).title;
        const description = newItem.querySelector(".entry-content p").innerText;
        const link = newItem.querySelector("a").href;
        const img = newItem.querySelector("img").src;
        return { title, overview, link, img };
      });
  });

  console.log(allNews);
  return allNews;
}
