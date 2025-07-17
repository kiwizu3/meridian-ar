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
        // poster="/images/origami-art-bg-0.jpg"
        className="max-h-[79vh] max-w-[1280px] w-full object-cover appl1-hdvd-xx rounded-2xl"
      >
        <source
          key="origami-art-bg-mobile"
          src="/videos/LB lion_animation_Loop.mp4.mp4"
          type="video/mp4"
          media="(max-width: 767px)"
        />
        <source
          key="origami-art-bg-web"
          src="/videos/LB lion_animation_Loop.mp4.mp4"
          type="video/mp4"
        />
        <track
          src="/videos/LB lion_animation_Loop.mp4.mp4"
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
        className="max-h-[79vh] max-w-[1280px] w-full object-cover appl1-hdvd-xx rounded-2xl"
      >
        <source
          key="origami-art-loop-mobile"
          src="/videos/lion_animation_Loop.mp4"
          type="video/mp4"
          media="(max-width: 767px)"
        />
        <source
          key="origami-art-loop-web"
          src="/videos/lion_animation_Loop.mp4"
          type="video/mp4"
        />
        <track
          src="/videos/lion_animation_Loop.mp4"
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
