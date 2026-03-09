fetch("data/articles.json")
  .then(res => res.json())
  .then(articles => {

    const container = document.getElementById("articles")

    articles.forEach(article => {

      const div = document.createElement("div")

      div.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.date}</p>
        <a href="article.html?slug=${article.slug}">
          Lire l'article
        </a>
      `

      container.appendChild(div)

    })

  })
