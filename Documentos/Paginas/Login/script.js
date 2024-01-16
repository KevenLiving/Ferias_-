

const botao = document.querySelector(".botao")


botao.addEventListener("click", function(e) {

    

    const input_email = document.querySelector("#email");
    const email = input_email.value
    const input_senha = document.querySelector("#senha");


    const alerta = document.querySelector(".alerta")



    if(input_senha.type="password") {
        input_senha.type="text"
        const senha = input_senha.value
        input_senha.type="password"

        if(email==='kevenmedeiros' && senha==='JESUS123') {
            window.location.href="../Cursos/index.html"
        }

        else {
            input_email.value=""
            input_senha.value=""

            input_email.style.border="1px solid red"
            input_senha.style.border="1px solid red"
            alerta.style.opacity="1"
        }
    }
    
    
    

    

    
    
    

    


    
})
    


