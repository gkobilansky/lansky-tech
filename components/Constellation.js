import React, { useRef, useEffect } from 'react';

const Constellation = () => {
    const canvasRef = useRef(null);
    const points = useRef([]);
    const mouse = useRef({ x: 0, y: 0 });
    const scrollPosition = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        // Set canvas size to window size
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        // Add scroll handler
        const handleScroll = () => {
            scrollPosition.current = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);

        // Create initial points
        const createPoints = () => {
            points.current = [];
            const numberOfPoints = 100;
            for (let i = 0; i < numberOfPoints; i++) {
                points.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                });
            }
        };
        createPoints();

        // Handle mouse movement
        const handleMouseMove = (e) => {
            mouse.current = {
                x: e.clientX,
                y: e.clientY
            };
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Animation function
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Calculate zoom scale based on scroll position
            const zoomScale = 1 + (scrollPosition.current * 0.0001); // Adjust the 0.001 to control zoom speed
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            
            // Update and draw points
            points.current.forEach(point => {
                // Calculate position relative to center
                const dx = point.x - centerX;
                const dy = point.y - centerY;
                
                // Apply zoom scale
                const scaledX = centerX + (dx * zoomScale);
                const scaledY = centerY + (dy * zoomScale);
                
                // Move points with velocity
                point.x += point.vx;
                point.y += point.vy;

                // Bounce off edges (adjust bounds based on scale)
                if (point.x < -canvas.width * (zoomScale - 1) || point.x > canvas.width * zoomScale) point.vx *= -1;
                if (point.y < -canvas.height * (zoomScale - 1) || point.y > canvas.height * zoomScale) point.vy *= -1;

                // Draw node with scaled position
                ctx.beginPath();
                ctx.arc(scaledX, scaledY, 4 / zoomScale, 0, Math.PI * 2); // Scale down point size
                ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
                ctx.fill();
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
                ctx.lineWidth = 1 / zoomScale;
                ctx.stroke();

                // Connect points within range with styled connections
                points.current.forEach(otherPoint => {
                    // Calculate scaled coordinates for other point
                    const otherDx = otherPoint.x - centerX;
                    const otherDy = otherPoint.y - centerY;
                    const otherScaledX = centerX + (otherDx * zoomScale);
                    const otherScaledY = centerY + (otherDy * zoomScale);

                    const distance = Math.hypot(scaledX - otherScaledX, scaledY - otherScaledY);
                    if (distance < 150 * zoomScale) {  // Scale the connection range
                        ctx.beginPath();
                        ctx.moveTo(scaledX, scaledY);
                        ctx.lineTo(otherScaledX, otherScaledY);
                        ctx.lineWidth = 0.5 / zoomScale;  // Scale line width
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.8 - distance / (150 * zoomScale)})`;
                        ctx.stroke();
                    }
                });

                // Connect to mouse with emphasized connection
                const mouseDistance = Math.hypot(scaledX - mouse.current.x, scaledY - mouse.current.y);
                if (mouseDistance < 200 * zoomScale) {  // Scale the mouse interaction range
                    ctx.beginPath();
                    ctx.moveTo(scaledX, scaledY);
                    ctx.lineTo(mouse.current.x, mouse.current.y);
                    ctx.lineWidth = 1 / zoomScale;  // Scale line width
                    ctx.strokeStyle = `rgba(255, 255, 255, ${1 - mouseDistance / (200 * zoomScale)})`;
                    ctx.stroke();
                }
            });

            requestAnimationFrame(animate);
        };
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                background: 'transparent',
                zIndex: -1
            }}
        />
    );
};

export default Constellation;
