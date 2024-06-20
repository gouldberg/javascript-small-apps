// script.js
document.addEventListener("DOMContentLoaded", function () {
  const contentDiv = document.getElementById("content");
  const paginationDiv = document.getElementById("pagination");

  const itemsPerPage = 3;
  const totalItems = 10;
  let currentPage = 1;

  function generateContent(page) {
    contentDiv.innerHTML = "";
    for (let i = (page - 1) * itemsPerPage + 1; i <= page * itemsPerPage; i++) {
      contentDiv.innerHTML += `<p>Item ${i}: 
			This is some content for item ${i}.</p>`;
    }
  }

  function generatePagination() {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    paginationDiv.innerHTML = "";

    const prevArrow = document.createElement("span");
    prevArrow.className = "arrow";
    prevArrow.textContent = "←";
    prevArrow.addEventListener("click", function () {
      if (currentPage > 1) {
        currentPage--;
        generateContent(currentPage);
        generatePagination();
      }
    });
    paginationDiv.appendChild(prevArrow);

    for (let i = 1; i <= totalPages; i++) {
      const link = document.createElement("a");
      link.href = "#";
      link.textContent = i;

      if (i === currentPage) {
        link.classList.add("active");
      }

      link.addEventListener("click", function () {
        currentPage = i;
        generateContent(currentPage);
        generatePagination();
      });

      paginationDiv.appendChild(link);
    }

    const nextArrow = document.createElement("span");
    nextArrow.className = "arrow";
    nextArrow.textContent = "→";
    nextArrow.addEventListener("click", function () {
      if (currentPage < totalPages) {
        currentPage++;
        generateContent(currentPage);
        generatePagination();
      }
    });
    paginationDiv.appendChild(nextArrow);
  }

  generateContent(currentPage);
  generatePagination();
});
