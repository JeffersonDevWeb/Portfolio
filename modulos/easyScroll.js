export default function initEasyScroll(){
    const linksInternos = document.querySelectorAll('[data-anime="menu"] a[href^="#"]')

    function scrollToSection(Event){
        Event.preventDefault()
        const href = Event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}