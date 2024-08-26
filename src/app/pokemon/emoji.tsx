"use client";
import React from "react";

export default function EmojiComponent({ text }: { text: string }) {
  const getEmoji = (text: string) => {
    switch (text.toLowerCase()) {
      case "normal":
        return "🙂";
      case "fighting":
        return "🥊";
      case "flying":
        return "🕊️";
      case "poison":
        return "☠️";
      case "ground":
        return "🌍";
      case "rock":
        return "🪨";
      case "bug":
        return "🐞";
      case "ghost":
        return "👻";
      case "steel":
        return "⚙️";
      case "fire":
        return "🔥";
      case "water":
        return "💧";
      case "grass":
        return "🌿";
      case "electric":
        return "⚡";
      case "psychic":
        return "🔮";
      case "ice":
        return "❄️";
      case "dragon":
        return "🐉";
      case "dark":
        return "🌑";
      case "fairy":
        return "🧚";
      case "stellar":
        return "🌟";
      case "unknown":
        return "❓";
      case "hp":
        return "❤️";
      case "attack":
        return "🗡️";
      case "defense":
        return "🛡️";
      case "special-attack":
        return "⚔️";
      case "special-defense":
        return "🔰";
      case "speed":
        return "🏃🏻‍♀️";
      default:
        return "❓";
    }
  };

  return <span>{getEmoji(text)}</span>;
}
