'use client'

import MuxPlayer from "@mux/mux-player-react";
import "@mux/mux-player/themes/minimal";

export default function MuxVideoPlayer({ playbackId, metadata, autoPlay = true, loop = true, controls = false, onEnded, onTimeUpdate, videoRef }) {
    const controlsStyle = controls ? '' : 'none';
    return (
        <div className="w-full">
            <MuxPlayer
                playbackId={playbackId}
                theme="minimal"
                metadata={metadata}
                style={{ aspectRatio: 4 / 3, display: 'block', borderRadius: '1rem', overflow: 'hidden', '--controls': controlsStyle }}
                thumbnailTime={0}
                muted
                loop={loop}
                playsInline
                autoPlay={autoPlay}
                controls={controls}
                onEnded={onEnded}
                onTimeUpdate={onTimeUpdate}
                ref={videoRef}
            />
        </div>
    );
} 