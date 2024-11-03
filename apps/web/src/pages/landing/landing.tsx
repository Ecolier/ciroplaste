import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useTransparentHeader from "../../features/header/use-transparent-header";

function Landing() {
  const { t } = useTranslation();
  const [isUsingVideoFallback, useVideoFallback] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        useVideoFallback(true);
      });
    }
  }, [videoRef, isUsingVideoFallback]);

  useTransparentHeader(true);

  useEffect(() => {
    document.title = `Ciroplaste | Stories from wax`;
  }, []);

  return (
    <div className="min-h-dvh relative w-full flex flex-col justify-center z-10">
      <div className="flex flex-col items-center mx-auto px-4 max-w-lg">
        <span className="text-8xl font-bold mb-4 text-chalk-50 font-serif">
          {t("Purpose of Ciroplaste")}
        </span>
        <span className="mb-8 text-chalk-50">
          {t("Reason for this website")}
        </span>
        <Link
          to={"/explore"}
          role="button"
          className="text-chalk-50 text-center bg-iris-600 w-full py-4"
        >
          {t("Explore")}
        </Link>
      </div>
      {isUsingVideoFallback ? (
        <img
          src="landing.mp4"
          className="fixed object-cover h-full w-full bg-chalk-950 -z-10 pointer-events-none"
        />
      ) : (
        <video
          ref={videoRef}
          preload="auto"
          autoPlay
          playsInline
          muted
          loop
          src="landing.mp4"
          className="fixed object-cover h-full w-full bg-chalk-950 -z-10 pointer-events-none"
        />
      )}
    </div>
  );
}

export default Landing;
