function log(msg) {
  document.getElementById("log").innerText = msg;
}

document.addEventListener("click", () => {
  log("Klik terdeteksi!");
});

document.addEventListener("touchstart", () => {
  log("Sentuhan layar terdeteksi!");
});

document.addEventListener("keydown", (evt) => {
  log(`Tombol '${evt.key}' ditekan`);
});
