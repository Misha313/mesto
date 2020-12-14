class CardList {
  constructor(container, cardInst) {
    this.container = container;
    this.cardInst = cardInst
  }

  addCard(carInstance) {
    this.container.append(carInstance)
  }

  render(result) {

    result.forEach((card) => {
      const cards = this.cardInst.create(card.name, card.link)
      this.addCard(cards)
    })
  }
}
