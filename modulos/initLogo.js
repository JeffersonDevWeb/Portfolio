export default function logo() {
  var params = {
    container: document.querySelector("#lottie"),
    renderer: "svg",
    loop: !1,
    autoplay: !0,
    path: "./img/D'alvaSVGOriginal.json",
  };
  var anim = lottie.loadAnimation(params);
}
