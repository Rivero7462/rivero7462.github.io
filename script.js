/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "grid") {
    x.style.display = "none";
  } else {
    x.style.display = "grid";
  }
};

function expandImage(img) {
  const modal = document.getElementById("imageModal");
  const expandedImg = document.getElementById("expandedImg");
  modal.style.display = "flex"; // Show the modal
  expandedImg.src = img.src; // Set the source of the expanded image
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none"; // Hide the modal
}