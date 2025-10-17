document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".toggle-course");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const details = this.nextElementSibling;
      if (details.style.display === "block") {
        details.style.display = "none";
      } else {
        details.style.display = "block";
      }
    });
  });
});

function toggleDetails(id) {
  const section = document.getElementById(id);
  if (section.style.display === "none" || section.style.display === "") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}


