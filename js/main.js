let url = "http://localhost:9900/get-jobs";
function getData() {
  fetch(url)
    .then(resp => resp.json())
    .then(function(i) {
      let data = i.splice(400, 300);
      let wrapper = document.querySelector(".articles");
      data.map(o => {
        wrapper.innerHTML += `<article class="card max bg-light">
    <div class="card-body">
        <h5 class="card-title">${o.title}</h5>
        <p class="card-text">${o.descriptions}</p>
        <a href="#" class="btn btn-primary">Apply</a>
    </div>
  </article>`;
      });
    })
    .catch(function(error) {
      console.log("ERROR: ", error);
    });
}

getData();

/*
git add .
git commit -m "31/07/2020"
git pull
git push
*/
