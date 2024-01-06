// Check if the news data is in localStorage
const cachedNews = localStorage.getItem("news");
const cacheTime = localStorage.getItem("newsTime");

const currentTime = new Date().getTime();
const expiryTime = 30 * 1000; // 15 minutes

if (cachedNews && cacheTime && currentTime - cacheTime < expiryTime) {
  // If the news data is in localStorage and it's not expired, use it
  const news = JSON.parse(cachedNews);
  displayNews(news);
} else {
  // If the news data is not in localStorage or it's expired, fetch it
  fetch("/api/scrapeNews.js")
    .then((response) => response.json())
    .then((news) => {
      // Store the news data and the current time in localStorage
      localStorage.setItem("news", JSON.stringify(news));
      localStorage.setItem("newsTime", currentTime.toString());

      displayNews(news);
    });
}

function displayNews(news) {
  const newsContainer = document.getElementById("news-container");

  news.forEach((newsItem) => {
    const cardHTML = `
            <div class="card">
                <div class="card__header">
                    <img src="${newsItem.img}" alt="card__image" class="card__image" width="600">
                </div>
                <div class="card__body">
                    <h4>${newsItem.title}</h4>
                    <p>${newsItem.description}</p>
                </div>
                <div class="card__footer">
                    <div class="user">
                        <div class="user__info">
                            <small><a href="${newsItem.link}" target="_blank">Read more</a></small>
                        </div>
                    </div>
                </div>
            </div>
        `;

    newsContainer.innerHTML += cardHTML;
  });
}
