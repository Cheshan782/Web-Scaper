const feedDisplay = document.querySelector('#feed')

fetch('http://localhost:8000/results')
    .then(response => response.json())
    .then(data => {
        data.forEach(article => {
          const articleItem = `<div><h3>` + article.title + `</h3><link>` + article.url + `</link></div>`
          feedDisplay.insertAdjacentHTML("Beforeend", articleItem)
        })
    })
    .catch(err => console.log(err))
