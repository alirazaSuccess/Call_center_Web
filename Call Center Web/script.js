window.addEventListener('scroll', function() {
    const navbar1 = document.getElementById('navbar1');
    const navbar2 = document.getElementById('navbar2');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 50) { // Adjust this value as needed
        navbar1.classList.add('hidden');
        navbar2.classList.remove('hidden');
        navbar2.classList.add('show');
    } else {
        navbar1.classList.remove('hidden');
        navbar2.classList.remove('show');
        navbar2.classList.add('hidden');
    }
});




// JavaScript to handle the popup display
window.onload = function() {
const popup = document.getElementById('popup');

// Show the popup when the website loads
popup.style.display = 'flex';

// Close the popup and show an alert when the user clicks anywhere on the screen
window.onclick = function(event) {
if (event.target == popup || event.target != popup) {
    popup.style.display = 'none';
    window.location.href = "#"; // Replace with your desired URL
}
}
}
  

  