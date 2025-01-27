'use client'

import MuxPlayer from "@mux/mux-player-react";
import "@mux/mux-player/themes/minimal";

export default function MuxVideoPlayer({ playbackId, theme = "minimal", metadata, autoPlay = false, loop = true, controls = false, onEnded, onTimeUpdate, videoRef }) {
    const controlsStyle = controls ? '' : {"--bottom-controls": "none", "--top-controls": "none"}
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
                onTimeUpdate={onTimeUpdate}
                ref={videoRef}
            />
        </div>
    );
} 