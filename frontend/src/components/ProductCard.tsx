import React, { useState, useEffect } from "react";
import "../styles/ProductCard.css";

// Structure for our Pokemon data
interface Pokemon {
  id: number;
  name: string;
  sprite: string;
  type: string;
  type2: string;
  level: number;
}

interface PokemonCardProps {
  pokemon: Pokemon;
}

const ProductCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  // colour code map for Pokemon typing
  const typeColours = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
    steel: "#71797e",
    dark: "#36454F",
  };

  // State variable to track whether or not the card has been collected
  const [collected, setCollected] = useState(false);
  /**
   * Function to handle click event
   */
  const handleClick = () => {
    // If user has not collected the card set collected to true
    if (!collected) {
      setCollected(true);
    }
  };

  return (
    <div className={`pokemonCard-${pokemon.type}`} onClick={handleClick}>
      <div className="pokemonImage">
        <img src={pokemon.sprite} alt="pokemon sprite" />
      </div>

      <div className="cardLevel">
        <p>LVL {pokemon.level}</p>
      </div>

      <div className="pokemon">
        <div className="pokemonName">
          <p>{pokemon.name}</p>
        </div>

        {pokemon.type2 != null ? (
          <div className="pokemonTyping">
            <p className={`type-${pokemon.type}`}>{pokemon.type}</p>
            <p className={`type-${pokemon.type2}`}>{pokemon.type2}</p>
          </div>
        ) : (
          <div className="pokemonTyping">
            <p className={`type-${pokemon.type}`}>{pokemon.type}</p>
          </div>
        )}

        {collected ? (
          <div className="collectedOverlay">
            <p> COLLECTED </p>
          </div>
        ) : null}
      </div>
      <style>
        {`
      .pokemonCard-${pokemon.type}{
        position: relative;
        padding: 30px 50px;
        box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        background: radial-gradient(circle at 50% 0%, ${
          (typeColours as Record<string, string>)[pokemon.type]
        } 50%, #ffffff 36%)
      }

      .pokemonCard-${pokemon.type}:hover{
        transform: scale(1.05);
      }
    `}
      </style>
    </div>
  );
};

export default ProductCard;
