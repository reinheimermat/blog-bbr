function EnviarFormulario () {
    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')

    if (name == "") {
        alert ("Preencha o campo Nome!")
    } else if (email == "") {
        alert ("preencha o campo Email!")
    } else if (password == "") {
        alert ("preencha o campo Senha!")
    } else {
        alert ("Cadastrado com sucesso!")
        window.location.href = 'https://reinheimermat.github.io/Blog-B.B.R/html/index.html'
    }
}