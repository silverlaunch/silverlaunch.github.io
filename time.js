
function time() {
  const now = new Date(Date.now());
  document.getElementById("time").innerHTML = "it is " + now.toLocaleTimeString();

  setInterval(function() {
    time()
  }, 1000); 
}
