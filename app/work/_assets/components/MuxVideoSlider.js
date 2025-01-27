'use client'

import { useState, useEffect, useRef } from "react";
import MuxVideoPlayer from "./MuxVideoPlayer";

export default function MuxVideoSlider({ videos, autoPlay = "muted", theme = false, controls = false }) {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef(null);

    // Handle video ended event to play next video
    const handleEnded = () => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
        setProgress(0);
    };

    // Update progress bar
    const handleTimeUpdate = (e) => {
        const video = e.target;
        const progress = (video.currentTime / video.duration) * 100;
        setProgress(progress);
    };

    return (
        <div className="w-full">
            <div className="relative">
                <MuxVideoPlayer
                    playbackId={videos[currentVideoIndex].playbackId}
                    metadata={videos[currentVideoIndex].metadata}
                    autoPlay={autoPlay}
                    theme={theme}
                    controls={controls}
                    loop={false}
                    onEnded={handleEnded}
                    onTimeUpdate={handleTimeUpdate}
                    videoRef={videoRef}
                />
                <div className="absolute bottom-[5%] left-0 right-0 flex gap-2 px-4">
                    {videos.map((video, index) => (
                        <div 
                            key={video.playbackId}
                            className="h-1 flex-1 bg-gray-200 rounded overflow-hidden"
                        >
                            <div 
                                className="h-full bg-primary transition-all duration-200 ease-linear"
                                style={{ 
                                    width: `${index === currentVideoIndex ? progress : index < currentVideoIndex ? '100' : '0'}%`,
                                    opacity: index === currentVideoIndex ? 1 : 0.5
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 