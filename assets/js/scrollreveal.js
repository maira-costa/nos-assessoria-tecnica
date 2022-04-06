/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollRevealTop = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollRevealTop.reveal(
    `
        .inicio__imagem, .titulo--chamada, .subtitulo--chamada, .chamada__botoes,
        #galeria .titulo--secao, .galeria__item--um, .galeria__item--quatro, .galeria__item--sete, #galeria .quadrado--preto, #galeria .quadrado--vermelho,
        #equipe .titulo--secao, .equipe__card,
        .formulario, .formulario .titulo, .formulario .subtitulo, .formulario__input, .formulario .botao
    `,
    { interval: 170 }
)

const scrollRevealLeft = ScrollReveal({
    origin: 'left',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollRevealLeft.reveal(
    `
        
        #acoes .titulo--secao, .acoes__card, #acoes .quadrado,
        .galeria__item--dois, .galeria__item--cinco, .galeria__item--oito, #galeria .quadrado--listras
    `,
    { interval: 170 }
)

const scrollRevealBottom = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollRevealBottom.reveal(
    `
        .quem-somos__conteudo,
        .galeria__item--tres, galeria__item--seis, #galeria .quadrado--branco
    `,
    { interval: 170 }
)