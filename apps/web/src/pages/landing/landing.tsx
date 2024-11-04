import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useTransparentHeader from "../../features/header/use-transparent-header";

const assetsUrl = import.meta.env.VITE_ASSETS_BASE_URL;

function Landing() {
  const { t } = useTranslation();
  const [fallbackToImage, setFallbackToImage] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setFallbackToImage(true);
      });
    }
  }, [videoRef, fallbackToImage]);

  useTransparentHeader(true);

  useEffect(() => {
    document.title = `Ciroplaste | Stories from wax`;
  }, []);

  return (
    <div className="relative z-10 flex min-h-dvh w-full flex-col justify-center">
      <div className="mx-auto flex max-w-lg flex-col items-center px-4">
        <span className="text-chalk-50 mb-4 font-serif text-8xl font-bold">
          {t("Purpose of Ciroplaste")}
        </span>
        <span className="text-chalk-50 mb-8">
          {t("Reason for this website")}
        </span>
        <Link
          to={"/explore"}
          role="button"
          className="text-chalk-50 bg-iris-600 w-full py-4 text-center"
        >
          {t("Explore")}
        </Link>
      </div>
      {fallbackToImage ? (
        <img
          src={`${assetsUrl}/landing.mp4`}
          className="bg-chalk-950 pointer-events-none fixed -z-10 h-full w-full object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          preload="auto"
          autoPlay
          playsInline
          muted
          loop
          src={`${assetsUrl}/landing.mp4`}
          className="bg-chalk-950 pointer-events-none fixed -z-10 h-full w-full object-cover"
        />
      )}
    </div>
  );
}

export default Landing;
