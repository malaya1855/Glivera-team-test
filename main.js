const dashboardLink = document.getElementById("dashboard-link");
const sideBarLink = document.getElementById("sidebar-list");

dashboardLink.addEventListener("click", function () {
  console.log("add");
  sideBarLink.classList.remove("visually-hidden");
});
