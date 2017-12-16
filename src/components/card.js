import React, { Component } from 'react';

const Card = ({ card, img, onLike, onDeslike }) =>
  <div>
    {card.text}
    <img src={card.img}/>
    <p>Likes: {card.like}</p>
    <button onClick={() => onLike(card.id)}>Like</button>
    <button onClick={() => onDeslike(card.id)}>Deslike</button>
  </div>


		
export class CardList extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
			cards: [
				{
					id: 1,
					text: "Hey this is a test.",
					img: "https://previews.123rf.com/images/shotsstudio/shotsstudio1306/shotsstudio130600008/20456197-close-up-of-two-scientists-testing-laboratory-substances-on-a-lab-table-with-colorful-liquids-and-tr-Stock-Photo.jpg",
					like: 0,
					color: 'red'
				},
				{
					id: 2,
					text: "If this works I'll call it a day.",
					img: "https://i2-prod.mirror.co.uk/incoming/article756648.ece/ALTERNATES/s615b/A%20European%20Brown%20Bears%20relaxes%20against%20a%20tree%20in%20Kajaani,%20Finland",
					like: 0,
					color: 'green'
				},
				{
					id: 3,
					text: "I'll drink a lot of beer.",
					img: "https://i.pinimg.com/736x/60/a8/b7/60a8b735ee28669dd34d090abb186eac--beer-brewing-the-beer.jpg",
					like: 0,
					color: 'yellow'
				},
				{
					id: 4,
					text: "Cheers",
					img: "http://www.ktrs.com/wp-content/uploads/2017/05/Beer.jpg",
					like: 0,
					color: 'blue'
					
				},
				{
					id:5,
					text:"My brother Chris sucks",
					img: "https://sd.keepcalm-o-matic.co.uk/i-w600/chris-sucks-big-harry-balls.jpg",
					like: 0,
					color: 'purple'
				},
				{
					id: 6,
					text: "This is a new test blah",
					img: "https://previews.123rf.com/images/shotsstudio/shotsstudio1306/shotsstudio130600008/20456197-close-up-of-two-scientists-testing-laboratory-substances-on-a-lab-table-with-colorful-liquids-and-tr-Stock-Photo.jpg",
					like: 0,
					color: 'grey'
				},
				{
					id: 7,
					text: "'You're doing a great job'",
					img: "https://sd.keepcalm-o-matic.co.uk/i-w600/chris-sucks-big-harry-balls.jpg",
					like: 0,
					color: 'orange'
				}

			]
	    };
	    this.handleLike = this.handleLike.bind(this)
	    this.handleDeslike = this.handleDeslike.bind(this)


	  }



handleLike(id) {
	this.setState(prevState => ({
		...prevState,
		cards: prevState.cards.map(card => ({
			...card,
			like: card.id === id ? card.like + 1 : card.like
		}))
	}))

}
handleDeslike(id) {
    this.setState(prevState => ({
      ...prevState,
      cards: prevState.cards.map(card => ({
        ...card,
        like: card.id === id ? card.like - 1 : card.like
     }))
    }))
}
		
render() {
    return (
      <div>
        <ul>
          {this.state.cards.map(card =>
            <div key={card.id} id="card" style={{background: card.color}}>
              <Card 
                card={card}
                onLike={this.handleLike}
                onDeslike={this.handleDeslike}
              />
            </div>
          )}
        </ul>
      </div>
    )
  }
}