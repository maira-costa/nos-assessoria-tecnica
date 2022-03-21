document.addEventListener("click", e => {
    const botaoEstaAtivo = e.target.matches("[data-botao-info]")
    
    if (!botaoEstaAtivo && e.target.closest('[data-info]') != null) return
  
    let cardAtual
    if (botaoEstaAtivo) {
      cardAtual = e.target.closest('[data-info]')
      cardAtual.classList.toggle('ativo')
    }
  
    document.querySelectorAll("[data-info].ativo").forEach(card => {
      if (card === cardAtual) return
      card.classList.remove('ativo')
    })
    
  })