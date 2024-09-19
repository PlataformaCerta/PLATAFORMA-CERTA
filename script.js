const acessarCanalButton = document.querySelectorAll("#acessar-canal");
const googlePlayButton = document.querySelector("#google-play");
const appStoreButton = document.querySelector("#app-store");

acessarCanalButton.forEach(button => {
  button.addEventListener("click", () => {
    // Adicione aqui o código para redirecionar para o canal do Telegram
    // Por exemplo: window.location.href = "https://t.me/seu_canal";
    console.log("Botão Acessar Canal clicado!");
  });
});

googlePlayButton.addEventListener("click", () => {
  // Adicione aqui o código para redirecionar para a página do app no Google Play
  // Por exemplo: window.location.href = "https://play.google.com/store/apps/details?id=org.telegram.messenger";
  console.log("Botão Google Play clicado!");
});

appStoreButton.addEventListener("click", () => {
  // Adicione aqui o código para redirecionar para a página do app na App Store
  // Por exemplo: window.location.href = "https://apps.apple.com/us/app/telegram/id686449010";
  console.log("Botão App Store clicado!");
});