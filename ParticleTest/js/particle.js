const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouseSpeed = 0;
const mouse = { x: null, y: null, radius: 75 };
window.addEventListener("mousemove", (event) => {
    // 마우스 속도 측정
    if (mouse.x !== null && mouse.y !== null) {
        const dx = event.x - mouse.x;
        const dy = event.y - mouse.y;
        mouseSpeed = Math.sqrt(dx ** 2 + dy ** 2);
    }

    // 마우스 좌표 갱신
    mouse.x = event.x;
    mouse.y = event.y;
});

function object2rgba(color, alpha = 1) {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
}

function rgba2object(rgbString) {
    // rgb(255, 255, 255) or rgba(100, 200, 150, 0.3)
    const match = rgbString.match(/\d+(\.\d+)?/g);
    return {
        r: parseInt(match[0], 10),
        g: parseInt(match[1], 10),
        b: parseInt(match[2], 10),
        a: match[3] !== undefined ? parseFloat(match[3]) : 1,
    };
}

class Particle {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;

        this.prevX = x;
        this.prevY = y;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
    }

    // 밀어내기
    update1() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx ** 2 + dy ** 2);

        if (distance < mouse.radius) {
            let angle = Math.atan2(dy , dx);
            let force = (distance - mouse.radius) / mouse.radius;

            // 마우스 속도에 따라 힘 강화 (최대 2.0 배)
            // const speed = Math.min(mouseSpeed / 10, 1);
            // this.vx += Math.cos(angle) * force * 5 * speed;
            // this.vy += Math.sin(angle) * force * 5 * speed;
            this.vx += Math.cos(angle) * force * 5;
            this.vy += Math.sin(angle) * force * 5;
        }

        // 특정 방향으로 움직이다 점점 감속
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.9;
        this.vy *= 0.9;

        // 원래 위치로 천천히 복원
        this.vx += (this.prevX - this.x) * 0.02;
        this.vy += (this.prevY - this.y) * 0.02;
    }

    // 당겨내기
    update2() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx ** 2 + dy ** 2);

        if (distance < mouse.radius) {
            let angle = Math.atan2(dy, dx);
            let force = (mouse.radius - distance) / mouse.radius;

            // 마우스 속도에 따라 힘 강화 (최대 2.0 배)
            // const speed = Math.min(mouseSpeed / 10, 2);
            // this.vx += Math.cos(angle) * force * 10 * speed;
            // this.vy += Math.sin(angle) * force * 10 * speed;
            this.vx += Math.cos(angle) * force * 10;
            this.vy += Math.sin(angle) * force * 10;
        }

        // 특정 방향으로 움직이다 점점 감속
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.9;
        this.vy *= 0.9;

        // 원래 위치로 천천히 복원
        this.vx += (this.prevX - this.x) * 0.02;
        this.vy += (this.prevY - this.y) * 0.02;
    }

    draw() {
        // 마우스 거리 기반 색상/크기 변화
        // 마우스가 가까이 오면 입자가 더 커지고 밝게 변함
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx ** 2 + dy ** 2);
        
        const maxDistance = mouse.radius * 3;
        let intensity = 1 - Math.min(1, distance / maxDistance);
        
        // 마우스 거리 기반 색상 변화 1, 특정 색으로 변경(255, 255, 255)
        const base = this.color;
        // const r = Math.floor(base.r + (255 - base.r) * intensity);
        // const g = Math.floor(base.g + (255 - base.g) * intensity);
        // const b = Math.floor(base.b + (255 - base.b) * intensity);
        
        // 마우스 거리 기반 색상 변화 2, 본연의 색 강화
        const factor = 1 + intensity * 0.5;
        const r = Math.min(255, Math.floor(base.r * factor));
        const g = Math.min(255, Math.floor(base.g * factor));
        const b = Math.min(255, Math.floor(base.b * factor));

        // 마우스 거리 기반 크기 변화, 기본 색상 흰색(255, 255, 255)
        const size = this.size + 1 * intensity;
        ctx.fillStyle = object2rgba({ r, g, b });


        // 기본 원형 파티클
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
        // ctx.closePath();
        // ctx.fill();
        
        // 기본 사각형 파티클
        // ctx.fillRect(this.x - size / 2, this.y - size / 2, size, size);
        ctx.fillRect(this.x, this.y, this.size, this.size);

        // 기본 마름모 파티클
        // ctx.beginPath();
        // ctx.moveTo(this.x, this.y - size); // top
        // ctx.lineTo(this.x + size, this.y); // right
        // ctx.lineTo(this.x, this.y + size); // bottom
        // ctx.lineTo(this.x - size, this.y); // left
        // ctx.closePath();
        // ctx.fill();
    }
}

const particles = [];
const numParticles = 2000;

// 랜덤 색상 생성 함수
function getRandomColor() {
    return {
        r: Math.floor(Math.random() * 200 + 55), // 55 ~ 255 사이
        g: Math.floor(Math.random() * 200 + 55), // 55 ~ 255 사이
        b: Math.floor(Math.random() * 200 + 55), // 55 ~ 255 사이
    }
}

function getClickColor(index) {    
    const colors = [
        { r: 255, g: 255, b: 255 },    // 하얀색
        { r: 255, g: 128, b: 128 },    // 파스텔 빨강
        { r: 255, g: 200, b: 130 },    // 파스텔 주황
        { r: 255, g: 255, b: 170 },    // 파스텔 노랑
        { r: 170, g: 255, b: 170 },    // 파스텔 초록
        { r: 150, g: 180, b: 255 },    // 파스텔 파랑
        { r: 180, g: 150, b: 255 },    // 파스텔 남색
        { r: 220, g: 170, b: 255 }     // 파스텔 보라
    ];
    return index === 0 ? getRandomColor() : colors[index - 1];
}

// 마우스 클릭 시 폭발 효과 및 색상 변경
let clickedColorIndex = 0;
window.addEventListener("click", () => {
    clickedColorIndex = (clickedColorIndex + 1) % 9;
    particles.forEach(particle => {
        // 파티클 색상 변경
        particle.color = getClickColor(clickedColorIndex);

        // 폭발 방향 랜덤
        const angle = Math.random() * Math.PI * 2;
        const force = Math.random() * 100 + 50; // 50 ~ 150 사이
        particle.vx += Math.cos(angle) * force;
        particle.vy += Math.sin(angle) * force;
    });
});

// 랜덤한 파티클 배치
// for (let i = 0; i < numParticles; i++) {
//     const x = Math.random() * canvas.width;
//     const y = Math.random() * canvas.height;
//     const size = Math.random() * 3 + 1;
//     const color = "white";
//     particles.push(new Particle(x, y, size, color));
// }

// 텍스트 기반 파티클 배치
function createParticlesFromText(text) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const baseRem = 15;
    const baseWidth = 1920;
    const fontSize = (canvas.width / baseWidth) * baseRem;
    ctx.font = `bold ${fontSize}rem Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // 일단 캔버스에 텍스트를 흰색으로 렌더링
    ctx.fillStyle = "white";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // 기존 파티클 제거
    particles.length = 0;
    const baseParticleSize = 2;
    const particleSize = (canvas.width / baseWidth) * baseParticleSize;
    for (let y = 0; y < canvas.height; y += 6) {
        for (let x = 0; x < canvas.width; x += 6) {
            const index = (y * canvas.width + x) * 4;
            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];
            const a = data[index + 3];

            // 흰색(흰색 계열)으로 렌더링된 텍스트 픽셀만 파티클화
            if (r + g + b > 200 + 200 + 200) {
                const size = Math.random() * particleSize + 1;
                const color = getClickColor(clickedColorIndex);
                particles.push(new Particle(x, y, size, color));
            }
        }
    }

    // 임시로 캔버스에 렌더링했던 텍스트 삭제
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
}

// 파티클 생성
let particleText = "HELLO\nWorld!";
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticlesFromText(particleText);
}
createParticlesFromText(particleText);
window.addEventListener("resize", resizeCanvas);


// 입자 간 선 연결 (별자리처럼)
function connectParticles() {
    const maxDistance = 100;

    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx ** 2 + dy ** 2);

            if (dist < maxDistance) {
                const opacity = 1 - dist / maxDistance;
                ctx.beginPath();
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    // 배경색 초기화
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 파티클 렌더링
    particles.forEach(particle => {
        // particle.update1();
        particle.update2();
        particle.draw();
    });

    // 입자 간 선 연결 (별자리처럼)
    // connectParticles();
    requestAnimationFrame(animate);
}

animate();
