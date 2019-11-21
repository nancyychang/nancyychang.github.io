function scrollWin() {
  window.scrollBy(0, 550);
}

var words = [' designer', ' programmer', ' fitness enthusiast', ' animal lover'];

var i = 0;  // the index of the current item to show

setInterval(function() {            // setInterval makes it run repeatedly

    document.getElementById('word').innerHTML = words[i++];    // get the item and increment i to move to the next

    if (i == words.length) i = 0;   // reset to first element if you've reached the end
}, 3000);                         // 1000 milliseconds == 1 second
