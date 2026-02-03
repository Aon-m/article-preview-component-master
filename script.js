const shareBtn = document.querySelector("#share-button");
const dialog = document.querySelector(".dialog");

shareBtn.addEventListener("click", toggleDialog);
window.addEventListener("click", closeDialog);

function toggleDialog(e) {
  e.stopPropagation();

  if (dialog.hasAttribute("open")) {
    dialog.close();
  } else {
    dialog.show();
  }
}

function closeDialog(e) {
  if (dialog.hasAttribute("open") && !dialog.contains(e.target)) {
    dialog.close();
  }
}
