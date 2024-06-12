"use client";

import {
  FaChessBishop,
  FaChessKing,
  FaChessKnight,
  FaChessQueen,
  FaChessRook,
} from "react-icons/fa6";

import GameCard from "./game-card";

const CardCollection = () => {
  return (
    <div className="-mx-4 flex flex-row flex-wrap place-content-center gap-4 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
      <GameCard
        name="The Rook"
        description="The Rook can move any number of squares in any direction."
        bonus="The Rook has a special move called castling."
        icon={FaChessRook}
        cardBack="green"
      />
      <GameCard
        name="The Queen"
        description="The Queen can move any number of squares in any direction."
        icon={FaChessQueen}
        cardBack="brown"
      />
      <GameCard
        name="The King"
        description="The King can move only one square in any direction."
        bonus="If the King is in check, it must move to the nearest safe square."
        icon={FaChessKing}
        cardBack="blue"
      />
      <GameCard
        name="The Knight"
        description="The Knight can move in an L-shape."
        icon={FaChessKnight}
        cardBack="red"
      />
      <GameCard
        name="The Bishop"
        description="The Bishop can move any number of squares diagonally."
        icon={FaChessBishop}
        cardBack="gray"
      />
    </div>
  );
};

export default CardCollection;
