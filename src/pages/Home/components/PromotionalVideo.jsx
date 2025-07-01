function PromotionalVideo() {
  return (
    <div className="h-[500px] flex items-center overflow-clip mt-20">
      <div className="w-full h-[900px]">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/wh7sIc-PzQM?autoplay=1&mute=1&controls=1&loop=1&playlist=wh7sIc-PzQM&rel=0"
          title="YouTube video player"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default PromotionalVideo;
