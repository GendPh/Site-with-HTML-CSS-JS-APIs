/* Nav Bar Style Start*/
$("#navbar-btn").click(function () {
  const navbar = $("#navBar");
  const visibility = navbar.attr("data-visible");
  if (visibility === "false") {
    navbar.attr("data-visible", "true");
    $("#navbar-btn").attr("aria-expanded", "false");
  } else if (visibility === "true") {
    navbar.attr("data-visible", "false");
    $("#navbar-btn").attr("aria-expanded", "true");
  }
})
$("a[href='#top']").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
/* Nav Bar Style End*/


/* Home Aside Start */
$("#newsBtn").click(function () {
  const aside = $("#news");
  const mainContent = $("#mainContent");
  const visibilityAside = aside.attr("data-visible");
  if (visibilityAside === "false") {
    aside.attr("data-visible", "true");
    mainContent.attr("data-visible", "true");
    $("#newsBtn").attr("aria-expanded", "true");
  } else if (visibilityAside === "true") {
    aside.attr("data-visible", "false");
    mainContent.attr("data-visible", "false");
    $("#newsBtn").attr("aria-expanded", "false");
  }
})
$("news").ready(function () {
  $.ajax({
    url: 'https://gnews.io/api/v4/search?q=example&token=9da5f6a8c96f8116da0df52f869a89fd&lang=en&country=us&max=10',
    success: function (data, textStatus, jqXHR) {
      articles = data.articles;
      let newArticles = articles.slice(0, 10)
      newArticles.forEach(news => {
        const newsTitle = document.createElement("div");
        const newsContent = document.createElement("div");
        const newsUrl = document.createElement("a");
        newsTitle.textContent = news.title;
        newsContent.textContent = news.content;
        newsUrl.href = news.url;
        newsUrl.target = "_blanck";
        newsUrl.textContent = news.url;
        newsTitle.className += "title";
        newsContent.className += "content";
        newsUrl.className += "hyperLink";
        document.getElementById("news").appendChild(newsTitle);
        newsTitle.appendChild(newsContent);
        newsContent.appendChild(newsUrl);
      });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      const error403 = $(".error403");
      if (jqXHR.status == 403) {
        error403.attr("data-visible", "true");
      }
    }
  });
});

/* Home Aside End */


/* $("body").ready(function () {
  const year = new Date().getFullYear();
  $("#copyRightDate").text(year);
  let timeout;
  timeout = setTimeout(alertFunc, 5000);
  function alertFunc() {
    alert("Welcome to my WebSite. \n" + "Nota importante: \n" + "=> Estou a usar a API 'gnews.io' para mostrar as notícias. Uma vez que estou a utilizar a versão 'free', após um tempo de uso a API deixará de carregar as notícias que irá formar o erro 403. Para corrigir isto após aparecer o erro as notícias serão trocadas por texto lorem.");
  }
}) */

