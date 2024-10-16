document.addEventListener('contextmenu', function (event) {
  event.preventDefault(); // Prevent default right-click menu
  alert('Right-click is disabled!'); // Optional: Alert message
});