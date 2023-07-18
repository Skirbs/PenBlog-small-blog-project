const openList = document.querySelector(".open-list");
const sidebarList = document.querySelector(".sidebar-list");
openList.addEventListener("touchend", () => {
  toggleSidebarList(true);
});

function toggleSidebarList(open) {
  if (open) {
    sidebarList.classList.add("open-menu");
    document.querySelector(".open-menu").addEventListener("touchend", (ev) => {
      if (ev.target.classList[0] === "sidebar-list") {
        toggleSidebarList(false);
      }
    });
    return;
  }

  sidebarList.classList.remove("open-menu");
}
