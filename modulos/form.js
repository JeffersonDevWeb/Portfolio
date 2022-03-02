export default function form() {
  const btn = document.querySelector('.enviar');
  const enviar = document.querySelector('#enviar');
  const Nome = document.querySelector('#name');
  const Email = document.querySelector('#email');
  const mensagem = document.querySelector('#message');

  function EnviaMsg() {
    const nome = Nome.value;
    const email = Email.value;
    const Mensagem = mensagem.value;

    enviar.href = `mailto:dalvatechnologies@gmail.com?subject=${nome},%20${email}&body=${Mensagem}`;
  }

  btn.addEventListener('click', EnviaMsg);
}
