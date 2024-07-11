document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:8000/api/articles/')
        .then(response => response.json())
        .then(articles => {
            const articlesSection = document.getElementById('articles');
            let i = 0;
            let currArticlesSub = document.createElement('div');
            currArticlesSub.className = "articles-sub";
            articlesSection.appendChild(currArticlesSub);

            articles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.className = 'article';
                articleElement.innerHTML = `
                    <a href="article.html">
                        <small>${article.date}</small>
                        <small>Yazan: ${article.author}</small>
                        <img src="${article.image}" alt="${article.title}">
                        <b>${article.tags}</b>
                        <h2>${article.title}</h2>
                    </a>
                `;
                currArticlesSub.appendChild(articleElement);
                i++;
                if (i % 3 === 0) {
                    currArticlesSub = document.createElement('div');
                    currArticlesSub.className = 'articles-sub';
                    articlesSection.appendChild(currArticlesSub);
                }
            });
        })
        .catch(error => console.error('Error fetching articles:', error));
});

