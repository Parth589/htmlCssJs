
//@ts-check 
console.log("Heelo word");
let API_KEY = "d00ba7c7377c416fbebc1eb9d0921af7";

function getNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    let container = document.getElementById("accordionExample");
    xhr.onprogress = function () {
        container.innerHTML = "<h1> your news will be given to you in very short time</h1>";
    };
    xhr.onload = function () {
        if (xhr.status === 200) {
            container.innerHTML = "<h1> few time left...</h1>";
            let array = JSON.parse(xhr.responseText).articles;
            console.log(array);
            let HTML = "";
            array.forEach((/** @type {{ title: String; source: { name: String; }; description: String; publishedAt: String; url: String; }} */ element, /** @type {number} */ index) => {
                HTML += `
                  <div class="accordion-item">
            <h2 class="accordion-header" id="heading${index + 1}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse${index + 1}" aria-expanded="false" aria-controls="collapse${index + 1}">
                    news: #${index + 1}
                </button>
            </h2>
            <div id="collapse${index + 1}" class="accordion-collapse collapse" aria-labelledby="heading${index + 1}"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <h5 class="card-title">${element.title}</h5>
                    <div>
                    <strong>Source: ${element.source.name}</strong>
                    </div>
                    <strong>Description: </strong>${element.description}
                    <code>${element.publishedAt}</code>
                    <a href="${element.url}" class="link-primary" target="_blank">See more...</a>
                </div>
            </div>
        </div>
                `;
            });
            container.innerHTML = HTML + `<button type="button" class="btn btn - primary" id="refresh">Get new News</button>`;
        }
    };
    xhr.send();
}
// getNews();
document.getElementById("refresh").addEventListener("click", getNews);