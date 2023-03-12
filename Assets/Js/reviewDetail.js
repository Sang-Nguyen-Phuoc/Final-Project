function getContentInPage(id) {
  //Title 1 
  fetch(`./Assets/Data/detailReview/${id}/title1.txt`)
    .then(response => response.text())
    .then(text => {
      const main = document.getElementById("main");
      const h2 = document.createElement("h2");
      h2.classList.add("title");
      h2.innerHTML = text;
      main.appendChild(h2);
      const author = document.createElement("div");
      author.classList.add("author-time")
      author.innerHTML = `
        <p class="author">BUGCOLORFULL</p>
        <p class="time">/  THÁNG MƯỜI MỘT 25, 2022</p>
      `
      main.appendChild(author);
    }
    )
  //Content 1
  fetch(`./Assets/Data/detailReview/${id}/content1.txt`)
    .then(response => response.text())
    .then(text => {
      const main = document.getElementById("main");
      const p = document.createElement("p");
      p.classList.add("para");
      p.innerHTML = text;
      main.appendChild(p);
    }
    )
  //title 2
  fetch(`./Assets/Data/detailReview/${id}/title2.txt`)
    .then(response => response.text())
    .then(text => {
      const main = document.getElementById("main");
      const h2 = document.createElement("h2");
      h2.classList.add("title");
      h2.innerHTML = text;
      main.appendChild(h2);
      const img = document.createElement("img");
      img.classList.add("img");
      img.src = `/Assets/Data/detailReview/${id}/img.jpg`;
      main.appendChild(img);
    }
    )
  //content 2 
  fetch(`./Assets/Data/detailReview/${id}/content2.txt`)
    .then(response => response.text())
    .then(text => {
      const main = document.getElementById("main");
      const p = document.createElement("p");
      p.classList.add("para");
      p.innerHTML = text;
      main.appendChild(p);
    }
    )
  //title 3 
  fetch(`./Assets/Data/detailReview/${id}/title3.txt`)
    .then(response => response.text())
    .then(text => {
      const main = document.getElementById("main");
      const h2 = document.createElement("h2");
      h2.classList.add("title");
      h2.innerHTML = text;
      main.appendChild(h2);
    }
    )
  //content 3 
  fetch(`./Assets/Data/detailReview/${id}/content3.txt`)
    .then(response => response.text())
    .then(text => {
      const main = document.getElementById("main");
      const p = document.createElement("p");
      p.classList.add("para");
      p.innerHTML = text;
      main.appendChild(p);
    }
    )
}

function getId(id) {
  localStorage.setItem("id", id);
}

function loadPageReviewDetail() {
  const id = localStorage.getItem("id");
  console.log(id);
  getContentInPage(id);
}


loadPageReviewDetail();