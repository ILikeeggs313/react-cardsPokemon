import React, { useState } from "react";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import {useAxios} from "./hooks/useAxios";
import  {formatCard}  from "./helpers";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function PlayingCardList() {
  const [cards, addCard, clearCard] = useAxios(
    "cards",
    "https://deckofcardsapi.com/api/deck/new/draw/"
  );
  
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard(formatCard)}>Add a playing card!</button>
        {/* added a button to clear the card API */}
        <button onClick = {clearCard}> Clear card </button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.image} />
        ))}
      </div>
    </div>
  );
}

PlayingCardList.defaultProps = {};

export default PlayingCardList;
