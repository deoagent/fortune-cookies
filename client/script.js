const generate = () => {
    let message = quotes[Math.floor(Math.random() * (quotes.length - 1))];
    document.querySelector('h2').textContent = `"${message}"`;
}
window.addEventListener('load', generate);
document.getElementById('btn__more-quotes').addEventListener('click', generate);

// control the auto refresh rate -> 1000 = 1 second
var refreshRate = 10000; // 10 seconds


// Automatically reload the browser
setInterval(function() {
   window.location.reload();
}, refreshRate);

// Hide the images on load
$('#chicago').hide();

// Get a random image from Unsplash and fade it in on load
$('#chicago').css({
  // serves a random image from this collection on Unsplash.com
  'background-image' : 'url(https://source.unsplash.com/collection/495468/1600x900)'
}).fadeIn(1500);
