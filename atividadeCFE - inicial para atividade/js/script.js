// Efeito do botão voltar ao Topo
function topo() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

// Validação de Login 

    const emailInput = document.getElementById('Email')
const senhaInput = document.getElementById('Senha')
 
function login(){
 
    if(emailInput.value == 'admin@email.com.br' && senhaInput.value == "senha"){
        alert('Login feito com sucesso')
        window.location.href = 'index.html'
 
    } else{alert("email e/ou senha incorretos")}
}

// Cadastro
function cadastro() {
    var usuarioCadastro = document.getElementById('usuario-cadastro').value;
    var emailCadastro = document.getElementById('email-cadastro').value;
    var senhaCadastro = document.getElementById('senha-cadastro').value;

    alert(`Usuário: ${usuarioCadastro}\nEmail: ${emailCadastro}\nSenha: ${senhaCadastro}`);
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html";
}
