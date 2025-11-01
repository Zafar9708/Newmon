// components/VideoSection.jsx
'use client';

const VideoSection = () => {
  return (
    <section className="w-full bg-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-auto"
            >
              <source src="/videos/nkfw1.mp4" type="video/mp4" />
              <source src="/videos/our-story.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;