import { useEffect, useRef } from "react";

export default function GoogleSlide({ ID }) {
  const iframeRef = useRef();
  useEffect(() => {
    iframeRef.current.height = iframeRef.current.clientWidth * 0.6 + "px";
  }, []);

  return (
    <>
      <iframe
        src={`https://docs.google.com/presentation/d/e/${ID}/embed?start=false&loop=false&delayms=3000`}
        frameBorder="0"
        allowFullScreen={true}
        // mozAllowFullScreen="true"
        // webkitAllowFullScreen="true"
        className="w-full"
        ref={iframeRef}
      ></iframe>
    </>
  );
}
