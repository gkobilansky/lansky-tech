'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

const CELL_SIZE = 20;
const INITIAL_SPEED = 150;
const MIN_SPEED = 80;
const SPEED_INCREASE = 5;

const getGridSize = (containerRef) => ({
  width: Math.floor((containerRef.current?.clientWidth || 600) / CELL_SIZE),
  height: Math.floor((containerRef.current?.clientHeight || 400) / CELL_SIZE),
});

const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };

export default function Snake() {
  const containerRef = useRef(null);
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [nextDirection, setNextDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [gameState, setGameState] = useState('start'); // 'start', 'playing', 'paused', 'gameOver'
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

  // Update resize handler to use container dimensions
  useEffect(() => {
    const handleResize = () => {
      setGridSize(getGridSize(containerRef));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate new food position
  const generateFood = useCallback((currentSnake) => {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * gridSize.width),
        y: Math.floor(Math.random() * gridSize.height),
      };
    } while (currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, [gridSize]);

  // Start or restart game
  const startGame = useCallback(() => {
    const initialSnake = [{ x: Math.floor(gridSize.width / 2), y: Math.floor(gridSize.height / 2) }];
    setSnake(initialSnake);
    setDirection(INITIAL_DIRECTION);
    setNextDirection(INITIAL_DIRECTION);
    setFood(generateFood(initialSnake));
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
      // Prevent 180-degree turns
      if (newDir.x !== 0 && direction.x !== 0) return prev;
      if (newDir.y !== 0 && direction.y !== 0) return prev;
      return newDir;
    });
  }, [direction]);

  // Handle keyboard controls
  const handleKeyPress = useCallback((event) => {
    // Start game on any arrow key or WASD if in start state
    if (gameState === 'start') {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd', 'W', 'A', 'S', 'D', ' '].includes(event.key)) {
        event.preventDefault();
        startGame();
        return;
      }
    }

    // Handle pause
    if (event.key === ' ' || event.key === 'Escape') {
      event.preventDefault();
      if (gameState === 'playing' || gameState === 'paused') {
        togglePause();
      }
      return;
    }

    // Restart on Enter when game over
    if (gameState === 'gameOver' && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      startGame();
      return;
    }

    if (gameState !== 'playing') return;

    event.preventDefault();

    switch (event.key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        changeDirection({ x: 0, y: -1 });
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        changeDirection({ x: 0, y: 1 });
        break;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        changeDirection({ x: -1, y: 0 });
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        changeDirection({ x: 1, y: 0 });
        break;
    }
  }, [gameState, startGame, togglePause, changeDirection]);

  // Handle touch controls
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

        // Check collision with self
        if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameState('gameOver');
          // Update high score
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
          setFood(generateFood(newSnake));
          setScore(prev => prev + 10);
          // Increase speed
          setSpeed(prev => Math.max(MIN_SPEED, prev - SPEED_INCREASE));
          return newSnake;
        }

        return [newHead, ...prevSnake.slice(0, -1)];
      });
    };

    const gameInterval = setInterval(moveSnake, speed);
    return () => clearInterval(gameInterval);
  }, [nextDirection, food, gameState, generateFood, gridSize, speed, score]);

  // Set up event listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  // D-Pad button component
  const DPadButton = ({ label, onClick }) => (
    <button
      className="w-12 h-12 bg-neutral-700/80 hover:bg-neutral-600 active:bg-[var(--primary)]
                 rounded-lg flex items-center justify-center text-white/80 text-xl
                 transition-colors touch-manipulation select-none"
      onClick={onClick}
      onTouchStart={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {label}
    </button>
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Score bar */}
      <div className="flex justify-between items-center px-2">
        <div className="flex gap-6">
          <div className="text-white/90">
            <span className="text-white/50 text-sm">Score:</span>{' '}
            <span className="font-bold text-lg">{score}</span>
          </div>
          <div className="text-white/90">
            <span className="text-white/50 text-sm">Best:</span>{' '}
            <span className="font-bold text-lg">{highScore}</span>
          </div>
        </div>
        {gameState === 'playing' && (
          <button
            className="text-white/50 hover:text-white/80 text-sm transition-colors"
            onClick={togglePause}
          >
            Pause
          </button>
        )}
      </div>

      {/* Game container */}
      <div className="w-full aspect-[3/2] max-h-[50vh]" ref={containerRef}>
        <div
          className="relative w-full h-full bg-neutral-900 rounded-lg overflow-hidden"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Render snake */}
          {snake.map((segment, index) => {
            const isHead = index === 0;
            return (
              <div
                key={index}
                className={`absolute transition-all duration-75 ${
                  isHead
                    ? 'bg-[var(--primary)] shadow-lg shadow-[var(--primary)]/30'
                    : 'bg-[var(--primary)]/80'
                }`}
                style={{
                  left: segment.x * CELL_SIZE + 1,
                  top: segment.y * CELL_SIZE + 1,
                  width: CELL_SIZE - 2,
                  height: CELL_SIZE - 2,
                  borderRadius: isHead ? '4px' : '2px',
                  zIndex: isHead ? 10 : 1,
                }}
              />
            );
          })}

          {/* Render food */}
          <div
            className="absolute bg-[var(--secondary)] rounded-full animate-pulse shadow-lg shadow-[var(--secondary)]/40"
            style={{
              left: food.x * CELL_SIZE + 2,
              top: food.y * CELL_SIZE + 2,
              width: CELL_SIZE - 4,
              height: CELL_SIZE - 4,
            }}
          />

          {/* Start screen */}
          {gameState === 'start' && (
            <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center gap-6 p-4">
              <div className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
                Snake
              </div>
              <div className="text-white/60 text-center text-sm md:text-base max-w-xs">
                <p className="hidden md:block mb-2">Use arrow keys or WASD to move</p>
                <p className="md:hidden mb-2">Swipe or use D-pad to move</p>
                <p>Space to pause</p>
              </div>
              <button
                className="px-6 py-3 bg-[var(--primary)] hover:bg-[var(--primary)]/80
                           text-white font-semibold rounded-lg transition-colors"
                onClick={startGame}
              >
                Start Game
              </button>
            </div>
          )}

          {/* Pause overlay */}
          {gameState === 'paused' && (
            <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center gap-4">
              <div className="text-2xl font-bold text-white">Paused</div>
              <button
                className="px-6 py-2 bg-[var(--primary)] hover:bg-[var(--primary)]/80
                           text-white font-semibold rounded-lg transition-colors"
                onClick={togglePause}
              >
                Resume
              </button>
            </div>
          )}

          {/* Game over overlay */}
          {gameState === 'gameOver' && (
            <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center gap-4 p-4">
              <div className="text-2xl md:text-3xl font-bold text-red-500">Game Over!</div>
              <div className="text-white text-lg">
                Score: <span className="font-bold text-[var(--primary)]">{score}</span>
              </div>
              {score === highScore && score > 0 && (
                <div className="text-yellow-400 text-sm animate-pulse">New High Score!</div>
              )}
              <button
                className="px-6 py-3 bg-[var(--primary)] hover:bg-[var(--primary)]/80
                           text-white font-semibold rounded-lg transition-colors mt-2"
                onClick={startGame}
              >
                Play Again
              </button>
              <p className="text-white/40 text-sm hidden md:block">or press Enter</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile D-Pad controls */}
      <div className="md:hidden flex flex-col items-center gap-1 mt-2">
        <DPadButton
          label="▲"
          onClick={() => {
            if (gameState === 'start') startGame();
            else if (gameState === 'playing') changeDirection({ x: 0, y: -1 });
          }}
        />
        <div className="flex gap-12">
          <DPadButton
            label="◀"
            onClick={() => {
              if (gameState === 'start') startGame();
              else if (gameState === 'playing') changeDirection({ x: -1, y: 0 });
            }}
          />
          <DPadButton
            label="▶"
            onClick={() => {
              if (gameState === 'start') startGame();
              else if (gameState === 'playing') changeDirection({ x: 1, y: 0 });
            }}
          />
        </div>
        <DPadButton
          label="▼"
          onClick={() => {
            if (gameState === 'start') startGame();
            else if (gameState === 'playing') changeDirection({ x: 0, y: 1 });
          }}
        />
      </div>
    </div>
  );
}
