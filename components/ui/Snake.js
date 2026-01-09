'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

const CELL_SIZE = 16;
const INITIAL_SPEED = 120;
const MIN_SPEED = 70;
const SPEED_INCREASE = 3;

const getGridSize = (containerRef) => ({
  width: Math.floor((containerRef.current?.clientWidth || 480) / CELL_SIZE),
  height: Math.floor((containerRef.current?.clientHeight || 320) / CELL_SIZE),
});

const INITIAL_DIRECTION = { x: 1, y: 0 };

export default function Snake() {
  const containerRef = useRef(null);
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [nextDirection, setNextDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [gameState, setGameState] = useState('start');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [gridSize, setGridSize] = useState({ width: 30, height: 20 });
  const [speed, setSpeed] = useState(INITIAL_SPEED);

  // Load high score from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('snakeHighScore');
    if (saved) setHighScore(parseInt(saved, 10));
  }, []);

  // Update resize handler
  useEffect(() => {
    const handleResize = () => {
      setGridSize(getGridSize(containerRef));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate new food position
  const generateFood = useCallback((currentSnake, grid) => {
    let newFood;
    const maxAttempts = 100;
    let attempts = 0;
    do {
      newFood = {
        x: Math.floor(Math.random() * grid.width),
        y: Math.floor(Math.random() * grid.height),
      };
      attempts++;
    } while (
      currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y) &&
      attempts < maxAttempts
    );
    return newFood;
  }, []);

  // Start or restart game
  const startGame = useCallback(() => {
    const initialSnake = [{ x: Math.floor(gridSize.width / 2), y: Math.floor(gridSize.height / 2) }];
    setSnake(initialSnake);
    setDirection(INITIAL_DIRECTION);
    setNextDirection(INITIAL_DIRECTION);
    setFood(generateFood(initialSnake, gridSize));
    setScore(0);
    setSpeed(INITIAL_SPEED);
    setGameState('playing');
  }, [gridSize, generateFood]);

  // Toggle pause
  const togglePause = useCallback(() => {
    if (gameState === 'playing') {
      setGameState('paused');
    } else if (gameState === 'paused') {
      setGameState('playing');
    }
  }, [gameState]);

  // Handle direction change with validation
  const changeDirection = useCallback((newDir) => {
    setNextDirection(prev => {
      if (newDir.x !== 0 && direction.x !== 0) return prev;
      if (newDir.y !== 0 && direction.y !== 0) return prev;
      return newDir;
    });
  }, [direction]);

  // Handle keyboard controls (arrow keys only)
  const handleKeyPress = useCallback((event) => {
    if (gameState === 'start') {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(event.key)) {
        event.preventDefault();
        startGame();
        return;
      }
    }

    if (event.key === ' ' || event.key === 'Escape') {
      event.preventDefault();
      if (gameState === 'playing' || gameState === 'paused') {
        togglePause();
      }
      return;
    }

    if (gameState === 'gameOver' && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      startGame();
      return;
    }

    if (gameState !== 'playing') return;

    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault();
        changeDirection({ x: 0, y: -1 });
        break;
      case 'ArrowDown':
        event.preventDefault();
        changeDirection({ x: 0, y: 1 });
        break;
      case 'ArrowLeft':
        event.preventDefault();
        changeDirection({ x: -1, y: 0 });
        break;
      case 'ArrowRight':
        event.preventDefault();
        changeDirection({ x: 1, y: 0 });
        break;
    }
  }, [gameState, startGame, togglePause, changeDirection]);

  // Handle touch swipe controls
  const handleTouchStart = (e) => {
    if (gameState !== 'playing') return;
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
  };

  const handleTouchEnd = (e) => {
    if (!touchStart || gameState !== 'playing') return;

    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    };

    const dx = touchEnd.x - touchStart.x;
    const dy = touchEnd.y - touchStart.y;
    const minSwipe = 30;

    if (Math.abs(dx) < minSwipe && Math.abs(dy) < minSwipe) return;

    if (Math.abs(dx) > Math.abs(dy)) {
      changeDirection(dx > 0 ? { x: 1, y: 0 } : { x: -1, y: 0 });
    } else {
      changeDirection(dy > 0 ? { x: 0, y: 1 } : { x: 0, y: -1 });
    }
    setTouchStart(null);
  };

  // Game loop
  useEffect(() => {
    if (gameState !== 'playing') return;

    const moveSnake = () => {
      setDirection(nextDirection);

      setSnake((prevSnake) => {
        const currentDirection = nextDirection;
        const newHead = {
          x: (prevSnake[0].x + currentDirection.x + gridSize.width) % gridSize.width,
          y: (prevSnake[0].y + currentDirection.y + gridSize.height) % gridSize.height,
        };

        // Check collision with self (skip head)
        if (prevSnake.slice(1).some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameState('gameOver');
          setHighScore(prev => {
            const newHighScore = Math.max(prev, score);
            localStorage.setItem('snakeHighScore', newHighScore.toString());
            return newHighScore;
          });
          return prevSnake;
        }

        // Check if food is eaten
        if (newHead.x === food.x && newHead.y === food.y) {
          const newSnake = [newHead, ...prevSnake];
          setFood(generateFood(newSnake, gridSize));
          setScore(prev => prev + 10);
          setSpeed(prev => Math.max(MIN_SPEED, prev - SPEED_INCREASE));
          return newSnake;
        }

        return [newHead, ...prevSnake.slice(0, -1)];
      });
    };

    const gameInterval = setInterval(moveSnake, speed);
    return () => clearInterval(gameInterval);
  }, [nextDirection, food, gameState, generateFood, gridSize, speed, score]);

  // Set up keyboard event listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  // D-Pad button - using onPointerDown to avoid double-firing on mobile
  const DPadButton = ({ label, onPress }) => (
    <button
      className="w-14 h-14 bg-[#1a1a1a] border-2 border-[#333] active:bg-[#0f0] active:border-[#0f0]
                 flex items-center justify-center text-[#0f0] text-2xl
                 select-none font-mono"
      onPointerDown={(e) => {
        e.preventDefault();
        onPress();
      }}
    >
      {label}
    </button>
  );

  return (
    <div className="flex flex-col gap-3 font-mono">
      {/* Score bar - retro style */}
      <div className="flex justify-between items-center px-1 text-[#0f0]">
        <div className="flex gap-4 text-sm">
          <span>SCORE: {String(score).padStart(4, '0')}</span>
          <span>HI: {String(highScore).padStart(4, '0')}</span>
        </div>
        {gameState === 'playing' && (
          <button
            className="text-[#0f0]/60 hover:text-[#0f0] text-xs uppercase"
            onClick={togglePause}
          >
            [PAUSE]
          </button>
        )}
      </div>

      {/* Game container */}
      <div className="w-full aspect-[3/2] max-h-[50vh]" ref={containerRef}>
        <div
          className="relative w-full h-full bg-black border-2 border-[#0f0]/30 overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Render snake - no transitions for instant position changes */}
          {snake.map((segment, index) => (
            <div
              key={index}
              className="absolute bg-[#0f0]"
              style={{
                left: segment.x * CELL_SIZE,
                top: segment.y * CELL_SIZE,
                width: CELL_SIZE - 1,
                height: CELL_SIZE - 1,
              }}
            />
          ))}

          {/* Render food */}
          <div
            className="absolute bg-[#f00]"
            style={{
              left: food.x * CELL_SIZE,
              top: food.y * CELL_SIZE,
              width: CELL_SIZE - 1,
              height: CELL_SIZE - 1,
            }}
          />

          {/* Start screen */}
          {gameState === 'start' && (
            <div className="absolute inset-0 bg-black/90 flex flex-col justify-center items-center gap-4 p-4">
              <div className="text-2xl md:text-3xl text-[#0f0] tracking-wider">
                SNAKE
              </div>
              <div className="text-[#0f0]/60 text-center text-xs md:text-sm">
                <p className="hidden md:block">ARROW KEYS TO MOVE</p>
                <p className="md:hidden">SWIPE OR USE D-PAD</p>
                <p className="mt-1">SPACE TO PAUSE</p>
              </div>
              <button
                className="mt-2 px-4 py-2 border border-[#0f0] text-[#0f0] hover:bg-[#0f0] hover:text-black text-sm"
                onClick={startGame}
              >
                START
              </button>
            </div>
          )}

          {/* Pause overlay */}
          {gameState === 'paused' && (
            <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center gap-3">
              <div className="text-xl text-[#0f0]">PAUSED</div>
              <button
                className="px-4 py-2 border border-[#0f0] text-[#0f0] hover:bg-[#0f0] hover:text-black text-sm"
                onClick={togglePause}
              >
                RESUME
              </button>
            </div>
          )}

          {/* Game over overlay */}
          {gameState === 'gameOver' && (
            <div className="absolute inset-0 bg-black/90 flex flex-col justify-center items-center gap-3 p-4">
              <div className="text-xl md:text-2xl text-[#f00]">GAME OVER</div>
              <div className="text-[#0f0] text-sm">
                SCORE: {score}
              </div>
              {score === highScore && score > 0 && (
                <div className="text-[#ff0] text-xs">NEW HIGH SCORE!</div>
              )}
              <button
                className="mt-2 px-4 py-2 border border-[#0f0] text-[#0f0] hover:bg-[#0f0] hover:text-black text-sm"
                onClick={startGame}
              >
                PLAY AGAIN
              </button>
              <p className="text-[#0f0]/40 text-xs hidden md:block">OR PRESS ENTER</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile D-Pad controls */}
      <div className="md:hidden flex flex-col items-center gap-1 mt-1">
        <DPadButton
          label="▲"
          onPress={() => {
            if (gameState === 'start') startGame();
            else if (gameState === 'playing') changeDirection({ x: 0, y: -1 });
          }}
        />
        <div className="flex gap-14">
          <DPadButton
            label="◀"
            onPress={() => {
              if (gameState === 'start') startGame();
              else if (gameState === 'playing') changeDirection({ x: -1, y: 0 });
            }}
          />
          <DPadButton
            label="▶"
            onPress={() => {
              if (gameState === 'start') startGame();
              else if (gameState === 'playing') changeDirection({ x: 1, y: 0 });
            }}
          />
        </div>
        <DPadButton
          label="▼"
          onPress={() => {
            if (gameState === 'start') startGame();
            else if (gameState === 'playing') changeDirection({ x: 0, y: 1 });
          }}
        />
      </div>
    </div>
  );
}
