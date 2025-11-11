import { changeThemeToDarkNeon } from "./utils";
import confetti from "canvas-confetti";

document.addEventListener("astro:page-load", () => gameInit());

const gameInit = () => {
  const GAME_WIN_SCORE = 10;
  const DURATIONS = ["duration-[1s]", "duration-[1.5s]"];
  const DELAY_MIN = 1500;
  const DELAY_MAX = 3000;
  let gameRunning = false;
  let playerJumping = false;
  let playerIsFalling = false;
  let lastSpawnTime = 0;
  let spawnTimeoutId: number | null = null;
  let gameWon = false;

  const gameContainerRef = document.querySelector(
    "#gameContainer"
  ) as HTMLElement;
  const gameOverScreenRef = document.querySelector(
    "#gameOverScreen"
  ) as HTMLElement;
  const gameStartScreenRef = document.querySelector(
    "#gameStartScreen"
  ) as HTMLElement;
  const gameReplayButtonRef = document.querySelector(
    "#gameReplayButton"
  ) as HTMLElement;
  const gameWinScreenRef = document.querySelector(
    "#gameWinScreen"
  ) as HTMLElement;
  const scoreTextRef = document.querySelector("#scoreText") as HTMLElement;
  const playerRef = document.querySelector("#player") as HTMLElement;
  const scoreRef = document.querySelector("#score") as HTMLElement;

  if (!gameContainerRef || !gameOverScreenRef || !gameStartScreenRef || !gameReplayButtonRef || !gameWinScreenRef || !playerRef || !scoreRef) return
  const gameContainerWidth = gameContainerRef?.offsetWidth || 0;
  let score = 0;

  const getObstacleRefs = () => document.querySelectorAll(".obstacle");

  const startGameWithKeyboard = (event: KeyboardEvent) => {
    if (gameRunning || gameWon) return;
    if (event.code !== "Space") return;
    startGame();
  };

  const winGame = () => {
    if (gameWon) return;
    gameWon = true;
    setTimeout(() => {
      confetti({
        particleCount: 400,
        spread: 200,
        origin: { y: 0.3 },
      })
    }, 1000);
    activateNeonMode();
    gameWinScreenRef.style.opacity = "1";
    gameWinScreenRef.style.transform = "scale(1)";
    gameRunning = false;
    if (spawnTimeoutId !== null) {
      clearTimeout(spawnTimeoutId);
      spawnTimeoutId = null;
    }
    getObstacleRefs().forEach((obstacle) => obstacle.remove());
    window.removeEventListener("keydown", (event) => startGameWithKeyboard(event));
  }

  const createNextObstacle = () => {
    const newObstacle = document.createElement("div");
    newObstacle.classList.add(
      "bg-transparent",
      "w-[50px]",
      "h-[50px]",
      "absolute",
      "bottom-0",
      "left-0",
      "transition-transform",
      "ease-linear",
      "obstacle"
    );

    let randomDuration =
      DURATIONS[Math.floor(Math.random() * DURATIONS.length)];
    newObstacle.classList.add(randomDuration);

    newObstacle.style.transform = `translateX(${gameContainerWidth}px)`;
    gameContainerRef.appendChild(newObstacle);

    let isActive = true;

    const update = () => {
      if (!isActive || !gameRunning) return;

      const obstacleRect = newObstacle.getBoundingClientRect();
      const playerRect = playerRef.getBoundingClientRect();

      const isColliding = !(
        playerRect.right < obstacleRect.left ||
        playerRect.left > obstacleRect.right ||
        playerRect.bottom < obstacleRect.top ||
        playerRect.top > obstacleRect.bottom
      );

      if (isColliding) {
        gameReplayButtonRef.style.display = "block";
        gameOverScreenRef.style.opacity = "1";
        gameOverScreenRef.style.transform = "scale(1)";
        gameRunning = false;
        isActive = false;

        if (spawnTimeoutId !== null) {
          clearTimeout(spawnTimeoutId);
          spawnTimeoutId = null;
        }

        getObstacleRefs().forEach((obstacle) => obstacle.remove());
      }

      if (document.body.contains(newObstacle) && gameRunning && isActive) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);

    setTimeout(() => {
      if (isActive) {
        newObstacle.style.transform = `translateX(0px)`;
      }
    }, 100);

    const handleTransitionEnd = () => {
      if (isActive && gameRunning && document.body.contains(newObstacle)) {
        score++;
        scoreRef.textContent = `${score}`;
        if (score >= GAME_WIN_SCORE) winGame();
      }
      isActive = false;
      newObstacle.remove();
    };

    newObstacle.addEventListener("transitionend", handleTransitionEnd);
  };

  const spawnObstacle = () => {
    if (!gameRunning) return;

    const now = Date.now();
    if (now - lastSpawnTime > DELAY_MIN) {
      createNextObstacle();
      lastSpawnTime = now;
    }

    const delay = DELAY_MIN + Math.random() * (DELAY_MAX - DELAY_MIN);
    spawnTimeoutId = setTimeout(spawnObstacle, delay) as unknown as number;
  };

  document.addEventListener("keydown", (event) => {
    jumpPlayer(event, true);
  });

  document.addEventListener("touchstart", (event) => {
    jumpPlayer(event, false);
  });

  const jumpPlayer = (event: KeyboardEvent | TouchEvent, isSpace: boolean) => {
    if (!gameRunning) return;
    if (isSpace && (event as KeyboardEvent).code !== "Space") return;
    if (isSpace) {
      event.preventDefault();
    }
    if (playerJumping || playerIsFalling) return;

    playerJumping = true;
    playerIsFalling = false;
    playerRef.style.transform = `translateY(-100px)`;
    const handleJumpUpEnd = () => {
      playerIsFalling = true;
      playerRef.style.transform = `translateY(0px)`;
      const handleJumpDownEnd = () => {
        playerJumping = false;
        playerIsFalling = false;
      };
      
      playerRef.addEventListener("transitionend", handleJumpDownEnd, { once: true });
    };

    playerRef.addEventListener("transitionend", handleJumpUpEnd, { once: true });
  }

  const startGame = () => {
    scoreTextRef.classList.remove("opacity-0");
    score = 0;
    scoreRef.textContent = `0`;
    gameRunning = true;
    gameOverScreenRef.style.opacity = "0";
    gameOverScreenRef.style.transform = "scale(0)";
    gameStartScreenRef.style.opacity = "0";
    gameStartScreenRef.style.pointerEvents = "none";
    lastSpawnTime = 0;
    playerJumping = false;
    playerIsFalling = false;
    playerRef.style.transform = `translateY(0px)`;
    spawnObstacle();
  };

  gameStartScreenRef?.addEventListener("click", () => {
    startGame();
  });

  window.addEventListener("keydown", (event) => startGameWithKeyboard(event));

  gameReplayButtonRef.addEventListener("click", () => {
    startGame();
    gameReplayButtonRef.style.display = "none";
  });

  const activateNeonMode = () => {
    changeThemeToDarkNeon();
  };
};