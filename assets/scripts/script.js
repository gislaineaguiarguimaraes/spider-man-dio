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

function selectCarouselItem(selectedButtomElement){
  //pegando o id do elemento selecionado
  const selectedItem = selectedButtomElement.id
  //Fazendo ligação com o Dom e selecionando a bandeja dos cards
  const carousel = document.querySelector('.s-cards-carousel')
  //Pegando o valor do transform do item selecionado
  const transform = carousel.style.transform
  //Pegando o valor de rotação do elemento selecionado
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i)
  //calculando quantos graus cada card precisa rodar 
  const rotateYDeg = -120 * (Number(selectedItem) - 1)
  //criando variavel com novo valor
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`)
  //add novo valor de rotação no carrosel
  carousel.style.transform = newTransform
  
  //colocando classe ativa no botão correspondente ao card
  const activeButtomElement = document.querySelector('.s-controller__button--active')
  activeButtomElement.classList.remove('s-controller__button--active')
  selectedButtomElement.classList.add('s-controller__button--active')


}