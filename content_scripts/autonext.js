function onMessage(event) {
  alert(`autoplay received: ${JSON.stringify(event)}`);
  if (event.data == "nextEp") nextEp();
}

function initAutonext() {
  alert("hello autonext");
  window.addEventListener("message", onMessage);

  let playerDF = document.getElementById("playerDF");
  playerDF.contentWindow.postMessage("marco", "*");
}

if (typeof nextEp !== 'undefined') initAutonext();
