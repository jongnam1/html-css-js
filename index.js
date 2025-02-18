let width = 0;
let height = 0;

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;

  const x = Math.floor(width / 40);

  const y = Math.floor(height / 40);

  let tiles = Array.from({ length: y }, (_, i) => i);

  tiles.forEach( () => 
    Array.from(
        {length:x}, (_, i =>i)
    )
   
    )
  )
});
