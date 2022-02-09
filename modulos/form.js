export default function form(){
    const btn = document.querySelector('.enviar')
    const enviar = document.querySelector('#enviar')
    let Nome = document.querySelector('#name')
    let Email = document.querySelector('#email')
    let mensagem = document.querySelector('#message')

    btn.addEventListener('click', EnviaMsg)
    
    function EnviaMsg(){
        var nome = Nome.value
        var email = Email.value
        var Mensagem = mensagem.value 

        enviar.href = `mailto:dalvatechnologies@gmail.com?subject=${nome},%20${email}&body=${Mensagem}`
    }
}