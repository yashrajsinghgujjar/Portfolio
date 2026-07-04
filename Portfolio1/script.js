// Mobile Navbar Navigation Click Toggles
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#0F172A';
        navLinks.style.padding = '1rem 7%';
        navLinks.style.borderBottom = '1px solid #38BDF8';
    }
});

// Close menu when a link is clicked automatically
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

const canvas = document.getElementById('space-canvas');
const ctx = canvas.getContext('2d');

let numStars = 350; // तारों की संख्या बढ़ा दी है ताकि पूरा आसमान भरा-भरा दिखे
let stars = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// 🌟 असली रात के तारे (Real Night Sky Stars)
class Star {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        
        // असली आसमान में कुछ तारे बहुत छोटे सुई की नोक जैसे होते हैं और कुछ थोड़े बड़े
        this.size = Math.random() * 1.2 + 0.2; 
        
        // आसमान के तारों का नेचुरल रंग (ज़्यादातर सफ़ेद, कुछ हल्के नीले और कुछ हल्के पीले)
        const rand = Math.random();
        if (rand > 0.9) {
            this.color = '#e0f2fe'; // हल्का नीला (Sky Blue tint)
        } else if (rand > 0.8) {
            this.color = '#fef08a'; // हल्का पीला (Warm Star tint)
        } else {
            this.color = '#ffffff'; // प्योर सफ़ेद
        }

        // टिमटिमाते वक़्त अचानक से बंद-चालू न हों, इसके लिए स्मूथ ओपेसिटी लॉजिक
        this.opacity = Math.random();
        this.twinkleSpeed = Math.random() * 0.008 + 0.003; // एकदम धीमी और नेचुरल स्पीड
    }

    update() {
        // तारे अपनी जगह फिक्स रहेंगे (जैसे रात में होते हैं), बस उनकी चमक (Opacity) बदलेगी
        this.opacity += this.twinkleSpeed;
        
        // जब चमक पूरी बढ़ जाए या बहुत कम हो जाए, तो दिशा बदल दें
        if (this.opacity > 1 || this.opacity < 0.1) {
            this.twinkleSpeed = -this.twinkleSpeed;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.abs(this.opacity); // चमक को लाइव कंट्रोल करना
        
        // थोड़े बड़े तारों में हल्का सा नेचुरल ग्लो इफ़ेक्ट
        if (this.size > 1) {
            ctx.shadowBlur = 4;
            ctx.shadowColor = this.color;
        } else {
            ctx.shadowBlur = 0;
        }
        
        ctx.fill();
        ctx.globalAlpha = 1.0; // बाकी पेज के लिए रीसेट
    }
}

// सारे तारों को आसमान में बिखेरना
for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
}

// 🌠 कभी-कभार टूटने वाला तारा (Shooting Star) - यह असली रात के आसमान को परफेक्ट बनाएगा
let shootingStar = { x: 0, y: 0, dx: 0, dy: 0, length: 0, active: false };

function triggerShootingStar() {
    shootingStar.x = Math.random() * canvas.width;
    shootingStar.y = Math.random() * (canvas.height / 3); // सिर्फ ऊपरी आसमान में टूटेगा
    shootingStar.dx = Math.random() * 5 + 5; // गिरने की स्पीड
    shootingStar.dy = Math.random() * 3 + 3;
    shootingStar.length = Math.random() * 100 + 50; // पूंछ की लम्बाई
    shootingStar.active = true;
}

// हर 6 से 10 सेकंड में एक रैंडम टूटता तारा दिखेगा (बिल्कुल असली आसमान की तरह दुर्लभ)
setInterval(() => {
    if (!shootingStar.active && Math.random() > 0.5) triggerShootingStar();
}, 7000);

// आसमान का लाइव एनीमेशन लूप
function animateSky() {
    // गहरा काला-नीला रात का आसमान (Mid-night Space Color)
    ctx.fillStyle = '#02040a'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // तारों को चमकाओ
    stars.forEach(star => {
        star.update();
        star.draw();
    });

    // टूटते तारे को चलाओ
    if (shootingStar.active) {
        ctx.beginPath();
        let gradient = ctx.createLinearGradient(
            shootingStar.x, shootingStar.y, 
            shootingStar.x - shootingStar.length, shootingStar.y - shootingStar.length
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(1, 'transparent');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(shootingStar.x - shootingStar.length, shootingStar.y - shootingStar.length);
        ctx.stroke();

        // आगे बढ़ाओ
        shootingStar.x += shootingStar.dx;
        shootingStar.y += shootingStar.dy;

        // स्क्रीन से बाहर जाने पर बंद करो
        if (shootingStar.x > canvas.width || shootingStar.y > canvas.height) {
            shootingStar.active = false;
        }
    }

    requestAnimationFrame(animateSky);
}

// लाइव रात का आसमान शुरू करें!
animateSky();
