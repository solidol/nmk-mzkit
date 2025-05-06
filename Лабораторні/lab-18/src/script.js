class TransparentShape {
    constructor(x, y, color, alpha) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.alpha = alpha;
    }
  
    draw(ctx) {
      // базовий клас не малює
    }
  }
  
  class TransparentCircle extends TransparentShape {
    constructor(x, y, color, alpha, radius) {
      super(x, y, color, alpha);
      this.radius = radius;
    }
  
    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }
  
  class TransparentRectangle extends TransparentShape {
    constructor(x, y, color, alpha, width, height) {
      super(x, y, color, alpha);
      this.width = width;
      this.height = height;
    }
  
    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.restore();
    }
  }
  
  // --- Робота з канвою ---
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  const shapes = [];
  
  canvas.addEventListener("click", () => {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const color = getRandomColor();
    const alpha = Math.random() * 0.8 + 0.2; // від 0.2 до 1.0
  
    let shape;
    if (Math.random() < 0.5) {
      shape = new TransparentCircle(x, y, color, alpha, 15 + Math.random() * 20);
    } else {
      shape = new TransparentRectangle(x, y, color, alpha, 20 + Math.random() * 30, 15 + Math.random() * 25);
    }
  
    shapes.push(shape);
    redraw();
  });
  
  function redraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shapes.forEach(shape => shape.draw(ctx));
  }
  
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }