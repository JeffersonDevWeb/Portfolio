export default function logo(){
    var params = {
        container: document.getElementById('lottie'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: "./img/D'alvaSVGOriginal.json"
        };

        var anim;

        anim = lottie.loadAnimation(params);
}