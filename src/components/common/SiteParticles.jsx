import { useEffect, useRef } from "react";

const colors = [
  "53, 208, 186",
  "255, 184, 77",
  "247, 250, 252",
];

const createParticle = (width, height, index) => ({
  alpha: 0.16 + Math.random() * 0.28,
  color: colors[index % colors.length],
  depth: 0.45 + Math.random() * 0.9,
  radius: 0.7 + Math.random() * 1.8,
  vx: -0.08 + Math.random() * 0.16,
  vy: 0.08 + Math.random() * 0.24,
  x: Math.random() * width,
  y: Math.random() * height,
});

const SiteParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { active: false, x: 0, y: 0 };
    const particles = [];
    let animationFrame;
    let width = 0;
    let height = 0;
    let scrollY = window.scrollY;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const targetCount = width < 768 ? 36 : 78;
      particles.length = 0;
      for (let index = 0; index < targetCount; index += 1) {
        particles.push(createParticle(width, height, index));
      }
    };

    const handlePointerMove = (event) => {
      pointer.active = true;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 112) {
            context.strokeStyle = `rgba(53, 208, 186, ${0.08 * (1 - distance / 112)})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const scrollDrift = (scrollY % height) * 0.0008;

      particles.forEach((particle) => {
        if (!prefersReducedMotion) {
          particle.x += particle.vx * particle.depth;
          particle.y += (particle.vy + scrollDrift) * particle.depth;

          if (pointer.active) {
            const dx = particle.x - pointer.x;
            const dy = particle.y - pointer.y;
            const distance = Math.hypot(dx, dy);
            const radius = 150;

            if (distance > 0 && distance < radius) {
              const force = (radius - distance) / radius;
              particle.x += (dx / distance) * force * 1.2;
              particle.y += (dy / distance) * force * 1.2;
            }
          }
        }

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y > height + 20) particle.y = -20;

        const glow = context.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 5
        );
        glow.addColorStop(0, `rgba(${particle.color}, ${particle.alpha})`);
        glow.addColorStop(1, `rgba(${particle.color}, 0)`);

        context.fillStyle = glow;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius * 5, 0, Math.PI * 2);
        context.fill();

        context.fillStyle = `rgba(${particle.color}, ${particle.alpha + 0.12})`;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      });

      drawConnections();
      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <canvas className="site-particle-canvas" ref={canvasRef} aria-hidden="true" />;
};

export default SiteParticles;
