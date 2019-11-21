// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function scrollWin() {
  window.scrollBy(0, 550);
}

var words = [' designer', ' programmer', ' fitness enthusiast', ' animal lover'];

var i = 0;  // the index of the current item to show

setInterval(function() {            // setInterval makes it run repeatedly

    document.getElementById('word').innerHTML = words[i++];    // get the item and increment i to move to the next

    if (i == words.length) i = 0;   // reset to first element if you've reached the end
}, 3000);                         // 1000 milliseconds == 1 second
