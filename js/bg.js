const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colors = ['#ed1941', '#f05b72', '#ef4136', '#f15a22', '#8e3e1f', '#fcaf17', '#b76f40', '#00ae9d', '#009ad6', '#1d953f', '#426ab3', '#6950a1', '#74787c', '#2a5caa'];
let w, h;

setCanvasSize();

function setCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  w = window.innerWidth;
  h = window.innerHeight;
}

window.addEventListener('resize', setCanvasSize);

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function getDistance(a, b) {
  const x = a.x - b.x;
  const y = a.y - b.y;
  return Math.hypot(x, y);
}

function Particle() { }

Particle.prototype.create = function () {
  this.radius = getRandom(2.2, 4);
  this.x = getRandom(0 + this.radius, w - this.radius);
  this.y = getRandom(0 + this.radius, h - this.radius);
  this.speedX = getRandom(-2, 2);
  this.speedY = getRandom(-2, 2);
  this.color = colors[Math.floor(getRandom(0, colors.length))];
}

Particle.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  ctx.fill();
}

Particle.prototype.link = function () {
  for (const particle of particles) {
    const distance = getDistance(this, particle);
    if (distance < 150) {
      ctx.beginPath();
      ctx.lineWidth = 0.1;
      ctx.strokeStyle = this.color;
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(particle.x, particle.y);
      ctx.stroke();
    }
  }
}

Particle.prototype.move = function () {
  if (this.x <= this.radius || this.x + this.radius >= w) {
    this.speedX *= -1;
  }
  if (this.y <= this.radius || this.y + this.radius >= h) {
    this.speedY *= -1;
  }
  this.x += this.speedX;
  this.y += this.speedY;
}

const particles = [];
for (let i = 0; i < 118; i++) {
  const particle = new Particle();
  particle.create();
  particles.push(particle);
}

function animate() {
  ctx.clearRect(0, 0, w, h);

  for (const particle of particles) {
    particle.move();
    particle.draw();
    particle.link();
  }

  requestAnimationFrame(animate);
}

animate();