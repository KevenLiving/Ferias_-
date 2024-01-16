

const myObserver = new IntersectionObserver((entrada) => {
    entrada.forEach((entray) => {
        if (entray.isIntersecting) {
            entray.target.classList.add("efects_on")
        }

        else{
            entray.target.classList.remove("efects_on")
        }
    })
})

const elementos_pagina = document.querySelectorAll(".efects_off")

elementos_pagina.forEach((elemento) => myObserver.observe(elemento))
