import { useEffect, useRef } from "react";
import kaboom from "kaboom";


const Game = () => {
  const kaplay = kaboom();

  const gameContainerRef = useRef(null);

  useEffect(() => {
    if (gameContainerRef.current) {
      // Initialize Kaplay.js with the DOM element reference
      const k = kaplay({
        global: true,
        width: 640,
        height: 480,
        canvas: gameContainerRef.current,
        background: [141, 183, 255],        
      });

      // Add a sprite for proof of concept
      k.loadSprite("bean", "https://kaboomjs.com/sprites/bean.png");
      k.setGravity(3200);

      // Add a simple Kaplay.js game logic
      const player = k.add([
        k.sprite("bean"),
        k.pos(120, 80),
        k.area(),
        k.body(),
      ]);

      // Define controls
      k.keyDown("left", () => {
        player.move(-120, 0);
      });

      k.keyDown("right", () => {
        player.move(120, 0);
      });

      k.keyDown("up", () => {
        player.jump();
      });
    }
  }, []);

  return <canvas ref={gameContainerRef} />;
}


  
export default Game;
