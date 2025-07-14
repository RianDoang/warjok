const searchInput = document.getElementById("search_input");
const searchFocus = document.getElementById("search_focus");
const searchBlur = document.getElementById("search_blur");

// Fokus ke input jika tekan R
document.addEventListener("keydown", function (e) {
  if (
    document.activeElement !== searchInput &&
    (e.key === "r" || e.key === "R")
  ) {
    e.preventDefault();
    searchInput.focus();
  }
  // Blur input jika tekan ESC
  if (document.activeElement === searchInput && e.key === "Escape") {
    clearSearch();
  }
});

// Toggle visibility focus/blur
searchInput.addEventListener("input", function () {
  const isEmpty = searchInput.value.trim() === "";
  searchFocus.classList.toggle("hidden", !isEmpty);
  searchFocus.classList.toggle("flex", isEmpty);
  searchBlur.classList.toggle("hidden", isEmpty);
  searchBlur.classList.toggle("flex", !isEmpty);
});

// Fokus ke input jika searchFocus diklik
searchFocus.addEventListener("click", function () {
  searchInput.focus();
});

// Reset input jika searchBlur diklik
searchBlur.addEventListener("click", clearSearch);

function clearSearch() {
  searchInput.focus();
  searchInput.value = "";
  searchFocus.classList.remove("hidden");
  searchFocus.classList.add("flex");
  searchBlur.classList.add("hidden");
  searchBlur.classList.remove("flex");
}
