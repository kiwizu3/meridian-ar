'use client';

const VideoSection = () => {
  const handleVideoEnd = () => {
    document?.querySelector('.first-play-video')?.classList.toggle('hidden');
  };

  return (
    <div>
      <video
        onEnded={handleVideoEnd}
        id="origami-art-bg.mp4"
        autoPlay
        muted
        playsInline
        poster="/images/origami-art-bg-0.jpg"
        className="w-full md:h-full first-play-video h-[calc(100vh-10rem)] object-cover md:text-clip absolute top-0 left-0 z-20 appl1-hdvd-xx"
      >
        <source
          key="origami-art-bg-mobile"
          src="/videos/origami-animation-start_mobile.mp4"
          type="video/mp4"
          media="(max-width: 767px)"
        />
        <source
          key="origami-art-bg-web"
          src="/videos/Lion Animation_SFX_v2.mp4"
          type="video/mp4"
        />
        <track
          src="/videos/Lion Animation_SFX_v2.mp4"
          kind="captions"
          srcLang="en"
          label="English"
          default
        />
      </video>

      <video
        id="origami-art-loop"
        loop
        muted
        playsInline
        autoPlay
        className="w-full md:h-full h-[calc(100vh-10rem)] object-cover absolute top-0 left-0 z-10 appl1-hdvd-xx"
      >
        <source
          key="origami-art-loop-mobile"
          src="/videos/origami-animation-loop_mobile.mp4"
          type="video/mp4"
          media="(max-width: 767px)"
        />
        <source
          key="origami-art-loop-web"
          src="/videos/Lion Animation_SFX_v3.mp4"
          type="video/mp4"
        />
        <track
          src="/videos/Lion Animation_SFX_v3.mp4"
          kind="captions"
          srcLang="en"
          label="English"
          default
        />
      </video>
    </div>
  );
};

export default VideoSection;
