const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const fontSize = 300;
const text = "IP KEEPER";
const mouse = {x: null, y: null, radius: 80};

// 파티클 클래스 정의
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.origX = x;
        this.origY = y;
        this.size = 2;
        this.velocityX = 0;
        this.velocityY = 0;
    }

    update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
            let angle = Math.atan2(dy, dx);
            let force = (mouse.radius - distance) / mouse.radius;
            this.velocityX += Math.cos(angle) * force * 10;
            this.velocityY += Math.sin(angle) * force * 10;
        }

        this.x += this.velocityX;
        this.y += this.velocityY;
        this.velocityX *= 0.9;
        this.velocityY *= 0.9;

        let dxOrig = this.origX - this.x;
        let dyOrig = this.origY - this.y;
        let distanceOrig = Math.sqrt(dxOrig * dxOrig + dyOrig * dyOrig);

        if (distanceOrig > 1) {
            this.velocityX += dxOrig * 0.02;
            this.velocityY += dyOrig * 0.02;
        }
    }

    draw() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

// 파티클 생성 함수
function createParticles() {
    particles = [];
    ctx.fillStyle = "white";
    ctx.font = `${fontSize}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < canvas.height; y += 5) {
        for (let x = 0; x < canvas.width; x += 5) {
            const index = (y * canvas.width + x) * 4;
            if (imageData.data[index] > 128) {
                particles.push(new Particle(x, y));
            }
        }
    }
}

// 애니메이션 루프
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}

// 마우스 이벤트 추가
window.addEventListener("mousemove", event => {
    mouse.x = event.x;
    mouse.y = event.y;
});

// 초기 실행
createParticles();
animate();
