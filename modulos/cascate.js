export default function cascate(){
    function rain(){
        let amount = 5
        let foot = document.querySelector('.final')
        let i = 0

        while(i < amount){
            let drop = document.createElement('i')

            let delay = Math.random() * -40
            let duration = Math.random * 5

            drop.style.animationDelay= delay+'s'
            drop.style.animationDuration = duration+'s'

            foot.appendChild(drop)  
            i++
        }
    }

    rain()
}