export default function logo(){
    var params = {
        container: document.querySelector('#lottie'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: "./img/D'alvaSVGOriginal.json"
        };

        var anim = lottie.loadAnimation(params);
}