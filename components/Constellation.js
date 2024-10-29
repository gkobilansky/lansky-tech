import React, { useRef, useEffect } from 'react';

const Constellation = () => {
    const canvasRef = useRef(null);
    const points = useRef([]);
    const mouse = useRef({ x: 0, y: 0 });
    const scrollPosition = useRef(0);
    const connections = useRef([]);
    const isTouch = useRef(false);

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

        // Update mouse handler to handle both mouse and touch
        const handleMouseMove = (e) => {
            e.preventDefault();
            mouse.current = {
                x: e.clientX,
                y: e.clientY
            };
        };

        // Add touch handlers
        const handleTouchMove = (e) => {
            e.preventDefault();
            isTouch.current = true;
            const touch = e.touches[0];
            mouse.current = {
                x: touch.clientX,
                y: touch.clientY
            };
        };

        const handleTouchStart = (e) => {
            e.preventDefault();
            isTouch.current = true;
            const touch = e.touches[0];
            mouse.current = {
                x: touch.clientX,
                y: touch.clientY
            };
        };

        const handleTouchEnd = () => {
            // Reset mouse position when touch ends
            mouse.current = { x: 0, y: 0 };
        };

        // Add event listeners
        window.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
        canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
        canvas.addEventListener('touchend', handleTouchEnd);

        // Add this function to create a new connection
        const createConnection = (startPoint, endPoint) => {
            return {
                start: startPoint,
                end: endPoint,
                particles: [{
                    progress: 0,
                    speed: 0.02 + Math.random() * 0.03 // Random speed for variety
                }]
            };
        };

        // Animation function
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Calculate zoom scale based on scroll position
            const zoomScale = 1 + (scrollPosition.current * 0.0001); // Adjust the 0.001 to control zoom speed
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            
            // Reset connections array
            connections.current = [];
            
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
                ctx.lineWidth = 1;
                ctx.stroke();

                // Modify the point connection logic
                points.current.forEach(otherPoint => {
                    const otherDx = otherPoint.x - centerX;
                    const otherDy = otherPoint.y - centerY;
                    const otherScaledX = centerX + (otherDx * zoomScale);
                    const otherScaledY = centerY + (otherDy * zoomScale);

                    const distance = Math.hypot(scaledX - otherScaledX, scaledY - otherScaledY);
                    if (distance < 150 * zoomScale) {
                        // Draw base connection line with lower opacity
                        ctx.beginPath();
                        ctx.moveTo(scaledX, scaledY);
                        ctx.lineTo(otherScaledX, otherScaledY);
                        ctx.lineWidth = 0.5 / zoomScale;
                        ctx.strokeStyle = `rgba(255, 255, 255, ${(0.2 - distance / (150 * zoomScale)) * 0.5})`;
                        ctx.stroke();

                        // Create or update connection
                        const connection = createConnection(
                            { x: scaledX, y: scaledY },
                            { x: otherScaledX, y: otherScaledY }
                        );
                        connections.current.push(connection);
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

            // // Draw particles along connections
            // connections.current.forEach(connection => {
            //     connection.particles.forEach((particle, index) => {
            //         // Update particle position
            //         particle.progress += particle.speed;
                    
            //         // Remove particle if it reached the end
            //         if (particle.progress >= 100) {
            //             // Create new particle if needed
            //             if (Math.random() < 0.1) { // 10% chance to create new particle
            //                 particle.progress = 0;
            //             } else {
            //                 connection.particles.splice(index, 1);
            //             }
            //             return;
            //         }

            //         // Draw particle
            //         const x = connection.start.x + (connection.end.x - connection.start.x) * particle.progress;
            //         const y = connection.start.y + (connection.end.y - connection.start.y) * particle.progress;
                    
            //         ctx.beginPath();
            //         ctx.arc(x, y, 1.5 / zoomScale, 0, Math.PI * 2);
            //         ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            //         ctx.fill();
            //     });
            // });

            requestAnimationFrame(animate);
        };
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('touchmove', handleTouchMove);
            canvas.removeEventListener('touchstart', handleTouchStart);
            canvas.removeEventListener('touchend', handleTouchEnd);
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
                zIndex: -1,
                touchAction: 'none'
            }}
        />
    );
};

export default Constellation;
