import React from "react";
import Board from "./Board";

import { BsArrowCounterclockwise } from 'react-icons/bs'

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.boardElement = React.createRef();

    this.state = {
      height: 8,
      width: 8,
      mines: 10,
      gameStatus: 0
    };
  }

  handleChange = (prop, value) => {
    this.setState({ [prop]: value });
  };

  handleChangeHeight = event => {
    const val = clamp(event.target.value, 5, 18);
    this.handleChange("height", val);
  };

  handleChangeWidth = event => {
    const val = clamp(event.target.value, 5, 18);
    this.handleChange("width", val);
  };

  handleChangeMines = event => {
    const cap = Math.floor((this.state.height * this.state.width) / 3);
    const val = clamp(event.target.value, 1, cap);
    this.handleChange("mines", val);
  };

  restartGame = () => {
    this.boardElement.current.restartBoard();
  };

  render() {
    const { height, width, mines, gameStatus } = this.state;
    return (
      <div className="game h-screen flex flex-col justify-center items-center">
        <Board
          ref={this.boardElement}
          height={10}
          width={10}
          mines={mines}
          gameStatus={gameStatus}
        />
        <div className="control-buttons flex justify-center text-gray-500 mt-8 mb-48 font-thin">
          <button onClick={this.restartGame}
            className="text-2xl">
            <BsArrowCounterclockwise />
        </button>
        </div>
      </div>
    );
  }
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(n, max));
}

export default Game;