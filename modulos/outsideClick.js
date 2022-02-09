export default function outsideClick(elemento, events, callback){
    const html = document.documentElement
    const outside = 'data-outside'
    
    if(!elemento.hasAttribute(outside)){
        events.forEach(userEvent => {
            setTimeout(() => {
                html.addEventListener(userEvent, handleOutsideClick)
            }, 0)
        })
        elemento.setAttribute(outside, '')
    }
    
    function handleOutsideClick(event){//essa função é uma forma de evitar o efeito bubble
        if(!elemento.contains(event.target)){
            elemento.removeAttribute(outside)
            
            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOutsideClick)
            })
            callback()
        }
    }
}