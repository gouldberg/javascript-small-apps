// Script.js

// Function to create a new chip
function createChip(name) {
  const chipContainer = document.querySelector(".chips-container");
  const chip = document.createElement("div");
  chip.classList.add("chip");
  const chipAvatar = document.createElement("div");
  chipAvatar.classList.add("chip-avatar");
  chipAvatar.textContent = "P";
  const chipName = document.createElement("div");
  chipName.textContent = name;
  const closeIcon = document.createElement("div");
  closeIcon.classList.add("close-icon");
  closeIcon.textContent = "x";
  closeIcon.addEventListener("click", function () {
    chip.remove();
  });
  chip.appendChild(chipAvatar);
  chip.appendChild(chipName);
  chip.appendChild(closeIcon);
  chipContainer.appendChild(chip);
}

// Handle form submission
const addChipForm = document.getElementById("addChipForm");
addChipForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameInput = document.getElementById("nameInput");
  // 文字列の両端からホワイトスペースを取り除き、元の文字列を変更せずに新しい文字列を返す
  const name = nameInput.value.trim();
  if (name !== "") {
    createChip(name);

    // Use null if profile icon is empty
    nameInput.value = "";
  }
});
