export default function initAnimateScroll(){
    const sections = document.querySelectorAll('[data-anime="scroll"]')
    if(sections.length){ 
        const windowScreen = window.innerHeight * 0.6

        function animaScroll(){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top
                const SectionVisible = (sectionTop - windowScreen) < 0
                if(SectionVisible){
                    section.classList.add('ativo')
                }else{
                    section.classList.remove('ativo')
                }
            })

        }
        
        animaScroll()

        window.addEventListener('scroll', animaScroll)
    }

}