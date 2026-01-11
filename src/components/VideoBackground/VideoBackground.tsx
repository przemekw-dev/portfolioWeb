import { useEffect, useRef, useState } from "react";

export default function TechVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.7;

      // Fallback for autoplay policies
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented, show mute button
          video.muted = true;
          video.play();
        });
      }
    }
  }, []);

  return (
    <div className="absolute w-screen max-h-sm overflow-hidden bg-white/90 z-10">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        onCanPlayThrough={() => setIsLoaded(true)}
        className={`min-w-screen max-h-sm object-contain transition-opacity duration-1000 ${
          isLoaded ? "opacity-80" : "opacity-0"
        }`}
        style={
          {
            //   width: "100vw",
            //   height: "100vh",
            //   left: "50%",
            //   top: "50%",
            //   transform: "translate(-50%, -50%)",
          }
        }
      >
        <source src="/assets/earth_bgvideo.mp4" type="video/mp4" />
        {/* <source src="/tech-background.webm" type="video/webm" />{" "} */}
        {/* Fallback format */}
      </video>
      <div
        className=" bg-linear-to-b from-surface/90 via-surface/70 to-surface/90"
        style={
          {
            //   width: "100vw",
            //   height: "100vh",
          }
        }
      />
    </div>
  );
}
