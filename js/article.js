const params = new URLSearchParams(window.location.search)

const slug = params.get("slug")

fetch("data/articles.json")
  .then(res => res.json())
  .then(articles => {

    const article = articles.find(a => a.slug === slug)

    if (!article) return

    document.getElementById("title").textContent = article.title
    document.getElementById("date").textContent = article.date
    document.getElementById("content").textContent = article.content

  })
