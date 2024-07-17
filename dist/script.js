// btn close/open sidebar
document
  .getElementById("btnCloseSidebar")
  .addEventListener("click", function () {
    var sidebar = document.querySelector(".sidebar");
    var mainContent = document.querySelector(".main-content");

    // Toggle sidebar visibility
    sidebar.classList.toggle("show");
    sidebar.classList.toggle("hide");
    mainContent.classList.toggle("expand");
  });

// btn open sidebar
document
  .getElementById("btnShowSidebar")
  .addEventListener("click", function () {
    var sidebar = document.querySelector(".sidebar");
    var mainContent = document.querySelector(".main-content");

    sidebar.classList.remove("hide");
    sidebar.classList.add("show");
    mainContent.classList.remove("expand");
  });
