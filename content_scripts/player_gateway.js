function onMessage(event) {
  alert(`gateway received: ${JSON.stringify(event)}`);
  if (event.data == "marco") event.source.postMessage("polo", event.origin);
}

function nextEp() {
  throw new Error("No way to handle nextEp yet !");
}

function initPlayerGateway() {
  alert("hello player_gateway");
  window.addEventListener("message", onMessage);

  for (let video of document.getElementsByTagName("video")) {
    video.onended = nextEp;
  }
}

initPlayerGateway();
