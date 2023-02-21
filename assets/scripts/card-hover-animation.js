//função para add a classe
function handleMouseEnter(){
  this.classList.add('s-card--hovered')
  //toda vez que passar o mouse no card o body recebe esse id concatenado com hovered
  document.body.id = `${this.id}-hovered`
}

//função para remover a classe
function handleMouseLeave() {
  this.classList.remove('s-card--hovered')
  //Limpar o id do body
  document.body.id =''
}

// função responsavel por add o listener aos cards
function addEventListenersToCards() {
  //cardElements vai retornar um array contendo tds os cards
  const cardElements = document.getElementsByClassName('s-card')

  for (let index = 0; index < cardElements.length; index ++){
    const card = cardElements[index]
    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)
  }
}

//função addEventListenersToCards so sera chamada quando todo o html for carregado
document.addEventListener('DOMContentLoaded', addEventListenersToCards, false)