import './App.css';
import React from 'react';
import CardType from './components/index';
import {cards} from './data/cards';
import {cards1} from './data/cards1';

function App() {
  return (
    <div className="App">
        <div className="container">
          <div className="t">
          <div className="top">
            <div>
              <h1 className="Title">NEW</h1>
            </div>
            <div className="a"> 
              <p1>Text1</p1>
              <p2>Text2</p2>
              <p3>Text3</p3>
              <p4>Text4</p4>
              <p5>Text5</p5>
            </div>
          </div>
          </div>
        <div className="body">
        <div className="p">
          <div className="t1">Text1</div>
          <div>Text2</div>
          <div>Text3</div>
          <div>Text4</div>
          <div>Text5</div>
          <div>Text6</div>
          <div>Text7</div>
          <div>Text8</div>
          <div>Text9</div>
          <div>Text10</div>
          <div>Text11</div>
          <div>Text12</div>
        </div>        
        <div className="Delivery">
          <div className="name">Free Delivery</div>
          <div>Random text as padding for letters</div>
        </div>
        </div>
        <div className="Row">
        <div className="Row1">
          {cards.map(card => (
            <CardType
              src={card.src}
              title={card.title}
              text={card.text}
              endtext={card.endtext}
            />
          ))}
        </div>
        <div className="Row2">
          {cards1.map(card => (
            <CardType
              src={card.src}
              title={card.title}
              text={card.text}
              endtext={card.endtext}
            />
          ))}
        </div>
        </div>
        </div>
    </div>  
  );
}

export default App;
