export const changeThemeToDarkNeon = () => {
  document.documentElement.classList.add("dark-mode");
  (document.getElementsByTagName('body')[0] as HTMLElement).style.transition = "background-color 0.5s ease";

  document.documentElement.style.setProperty(
    "--color-background",
    "#000000"
  );
  document.documentElement.style.setProperty('--color-logo-na', 'var(--color-secondary)');
  (document.getElementById('dark-mode-btn') as HTMLButtonElement).disabled = true;

  document.querySelectorAll("h2").forEach((element) => {
    element.classList.add("neon-text-pink");
  });
}

export const createWorld = (canvas: HTMLCanvasElement, engine: any, Matter: any) => {
  const { World, Bodies } = Matter;

  const width = canvas.offsetWidth;
  const height = canvas.offsetHeight;

  // paredes dinámicas
  const walls = [
    Bodies.rectangle(width / 2, 0, width, 20, { isStatic: true, render: { visible: false } }),           // top
    Bodies.rectangle(width / 2, height, width, 20, { isStatic: true, render: { visible: false } }),      // bottom
    Bodies.rectangle(0, height / 2, 20, height, { isStatic: true, render: { visible: false } }),         // left
    Bodies.rectangle(width, height / 2, 20, height, { isStatic: true, render: { visible: false } }),     // right
  ];

  World.add(engine.world, walls);
}

export const createWalls = (width: number, height: number, world: any, Matter: any) => {
  const { World, Bodies } = Matter;

  const walls = [
    Bodies.rectangle(width / 2, -10, width, 20, {
      isStatic: true,
      render: { visible: false },
      label: 'wall-top'
    }),
    Bodies.rectangle(width / 2, height + 10, width, 20, {
      isStatic: true,
      render: { visible: false },
      label: 'wall-bottom'
    }),
    Bodies.rectangle(-10, height / 2, 20, height, {
      isStatic: true,
      render: { visible: false },
      label: 'wall-left'
    }),
    Bodies.rectangle(width + 10, height / 2, 20, height, {
      isStatic: true,
      render: { visible: false },
      label: 'wall-right'
    }),
  ];

  World.add(world, walls);
  return walls;
}

export const createSkillsBodies = (tags: string[], world: any, Matter: any, canvas: HTMLCanvasElement) => {
  const { World, Bodies } = Matter;
  return tags.forEach((tag, i) => {
    const x = 50 + Math.random() * (canvas.width - 100);
    const y = 50 + Math.random() * 100;
    const body = Bodies.rectangle(x, y, Math.min(tag.length * 20, 150), 40, {
      chamfer: { radius: 20 },
      render: {
        fillStyle: "#444",
        strokeStyle: "#666",
        lineWidth: 2,
      },
    });
    World.add(world, body);
  });
}

export const skillsTagsGenerator = (tags: string[], tagBodies: any[], world: any, ctx: any) => {
  tags.forEach((tag, i) => {
    const body = tagBodies[i];
    if (body && !body.isStatic) {
      ctx.save();
      ctx.translate(body.position.x, body.position.y);
      ctx.rotate(body.angle);
      ctx.fillText(tag, 0, 0);
      ctx.restore();
    }
  });
}