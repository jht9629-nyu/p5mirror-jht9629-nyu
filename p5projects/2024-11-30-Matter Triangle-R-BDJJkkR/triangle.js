// Import Matter.js
const { Engine, Render, Runner, World, Bodies, Vertices } = Matter;

// Create an engine
const engine = Engine.create();
const world = engine.world;

// Create a renderer
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 600,
    wireframes: false, // Use false for solid shapes
  },
});

// Define the triangle vertices
const triangleVertices = Vertices.create([
  { x: 0, y: 0 },   // Vertex 1
  { x: 50, y: 100 }, // Vertex 2
  { x: -50, y: 100 } // Vertex 3
], null);

// Create the triangle body
const triangle = Bodies.fromVertices(400, 300, triangleVertices, {
  render: {
    fillStyle: 'blue', // Triangle fill color
    strokeStyle: 'black', // Triangle border color
    lineWidth: 2, // Border thickness
  }
});

// Add the triangle to the world
World.add(world, triangle);

// Run the engine and renderer
Engine.run(engine);
Render.run(render);
