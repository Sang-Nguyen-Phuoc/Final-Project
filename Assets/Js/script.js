function initBook(id) {
  fetch(`./Assets/Data/link/${id}.txt`)
    .then(response => response.text())
    .then(text => {
      const bookElements = document.getElementById("book-information");
      const bookImage = text;
      const newEle = document.createElement("a");
      // newEle.href = "#";
      newEle.href = `detail.html?ID=${id}`
      newEle.classList.add("col-xxl-4");
      newEle.classList.add("col-md-6");
      newEle.classList.add("col-sm-12");
      newEle.classList.add("book-item");
      newEle.innerHTML = 
        `
          <img src="${bookImage}" class="img-book-cover">
          <p id="${id}"></p>
          <button class="btn btn-primary">Đọc tiếp</button>
        `
      bookElements.append(newEle);
    }
    )
}

function loadBookOnPage(numberOfBook) {
  for (let i = 1; i <= numberOfBook; i++) {
    const id = i;
    initBook(id);
    fetch(`./Assets/Data/name/${id}.txt`)
      .then(response => response.text())
      .then(text => {
        const newPara = document.getElementById(`${id}`);
        const title = document.createTextNode(`${text}`);
        console.log(id, text);
        newPara.appendChild(title);
      }
      )
  }
}

function searchEngine() {
  const searchBar = document.getElementById("search-bar");
  searchBar.innerHTML =
    `
      <form class="d-flex" role="search">
        <input type="text" placeholder="Tìm kiếm" class="search-engine">
        <button type="submit" class="search-btn btn btn-primary" onclick="directPage()">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <button input="submit" class="btn text-dark" onclick="closeSearchEngine()">
          <i class="fa-solid fa-x"></i>
        </button>
      </form>
    `
}

function closeSearchEngine() {
  const searchButton = document.getElementById("search-bar");
  searchButton.innerHTML = 
    `
      <button input="button" class="btn btn-outline-light text-dark" onclick="searchEngine()">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    `
}

function directPage() {

}


loadBookOnPage(9);