'use client'

import { useState, useEffect } from "react";
import "@mux/mux-player/themes/minimal";

const Placeholder = () => (
    <div className="w-full aspect-video bg-base-300 animate-pulse rounded-lg" />
);

export default function MuxVideoPlayer({ playbackId, theme = "minimal", metadata, autoPlay = false, loop = true, controls = false, onEnded, onTimeUpdate, videoRef }) {
    const [MuxPlayer, setMuxPlayer] = useState(null);

    useEffect(() => {
        import("@mux/mux-player-react").then((mod) => {
            setMuxPlayer(() => mod.default);
        });
    }, []);

    const controlsStyle = controls ? '' : {"--bottom-controls": "none", "--top-controls": "none"};

    if (!MuxPlayer) {
        return (
            <div className="w-full aspect-auto rounded-lg overflow-hidden">
                <Placeholder />
            </div>
        );
    }

    return (
        <div className="w-full aspect-auto rounded-lg overflow-hidden">
            <MuxPlayer
                playbackId={playbackId}
                theme={theme}
                metadata={metadata}
                style={{ aspectRatio: 4 / 3, display: 'block', ...controlsStyle }}
                thumbnailTime={0}
                muted
                loop={loop}
                playsInline
                autoPlay={autoPlay}
                controls={controls}
                onEnded={onEnded}
                accentColor="#FFCC00"
                onTimeUpdate={onTimeUpdate}
                ref={videoRef}
            />
        </div>
    );
} 