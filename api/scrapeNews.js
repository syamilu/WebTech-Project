const chromium = require("chrome-aws-lambda");

async function scrapeNews(url) {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  });
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

module.exports = async (req, res) => {
  const news = await scrapeNews("https://news.iium.edu.my/?cat=4");
  res.json(news);
};
