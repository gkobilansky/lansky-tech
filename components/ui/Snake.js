import { useEffect, useState, useCallback, useRef } from 'react';

const CELL_SIZE = 20;
const getGridSize = (containerRef) => ({
  width: Math.floor((containerRef.current?.clientWidth || 600) / CELL_SIZE),
  height: Math.floor((containerRef.current?.clientHeight || 400) / CELL_SIZE),
});
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const INITIAL_FOOD = { x: 15, y: 15 };

export default function Snake() {
  const containerRef = useRef(null);
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [gameOver, setGameOver] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [gridSize, setGridSize] = useState({ width: 30, height: 20 });

  // Update resize handler to use container dimensions
  useEffect(() => {
    const handleResize = () => {
      setGridSize(getGridSize(containerRef));
    };
    
    // Initial size calculation
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate new food position
  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * gridSize.width),
      y: Math.floor(Math.random() * gridSize.height),
    };
    return newFood;
  }, [gridSize]);

  // Handle keyboard controls
  const handleKeyPress = useCallback((event) => {
    switch (event.key) {
      case 'ArrowUp':
        if (direction.y === 0) setDirection({ x: 0, y: -1 });
        break;
      case 'ArrowDown':
        if (direction.y === 0) setDirection({ x: 0, y: 1 });
        break;
      case 'ArrowLeft':
        if (direction.x === 0) setDirection({ x: -1, y: 0 });
        break;
      case 'ArrowRight':
        if (direction.x === 0) setDirection({ x: 1, y: 0 });
        break;
    }
  }, [direction]);

  // Handle touch controls
  const handleTouchStart = (e) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;

    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    };

    const dx = touchEnd.x - touchStart.x;
    const dy = touchEnd.y - touchStart.y;

    if (Math.abs(dx) > Math.abs(dy)) {
      // Horizontal swipe
      if (dx > 0 && direction.x === 0) setDirection({ x: 1, y: 0 });
      else if (dx < 0 && direction.x === 0) setDirection({ x: -1, y: 0 });
    } else {
      // Vertical swipe
      if (dy > 0 && direction.y === 0) setDirection({ x: 0, y: 1 });
      else if (dy < 0 && direction.y === 0) setDirection({ x: 0, y: -1 });
    }
  };

  // Game loop
  useEffect(() => {
    if (gameOver) return;
    console.log("gameLoop");

    const moveSnake = () => {
      setSnake((prevSnake) => {
        const newHead = {
          x: (prevSnake[0].x + direction.x + gridSize.width) % gridSize.width,
          y: (prevSnake[0].y + direction.y + gridSize.height) % gridSize.height,
        };

        // Check collision with self
        if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          return prevSnake;
        }

        // Check if food is eaten
        if (newHead.x === food.x && newHead.y === food.y) {
          setFood(generateFood());
          return [newHead, ...prevSnake];
        }

        return [newHead, ...prevSnake.slice(0, -1)];
      });
    };

    const gameInterval = setInterval(moveSnake, 150);
    return () => clearInterval(gameInterval);
  }, [direction, food, gameOver, generateFood, gridSize]);

  // Set up event listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div className="w-full aspect-[3/2] h-[60vh]" ref={containerRef}>
      <div
        className="relative w-full h-full bg-neutral-900 rounded-lg"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Render snake */}
        {snake.map((segment, index) => (
          <div
            key={index}
            className="absolute bg-[var(--primary)]"
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
          className="absolute bg-[var(--secondary)]"
          style={{
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE,
            width: CELL_SIZE - 1,
            height: CELL_SIZE - 1,
          }}
        />

        {/* Game over overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-black/70 flex justify-center items-center text-white text-2xl">
            Game Over!
          </div>
        )}
      </div>
    </div>
  );
}
