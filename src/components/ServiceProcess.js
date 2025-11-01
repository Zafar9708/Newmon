// components/VideoMission.jsx
'use client';

export default function VideoMission() {
  return (
    <section className="w-full bg-nkfTeal py-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          
          {/* Left Side - Video */}
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
              >
                <source src="/videos/nkfw5.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="lg:w-1/2">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Newman Kahlon Foundations Mission
              </h2>
              <p className="text-xl md:text-2xl italic text-white leading-relaxed">
                Kindness is the language which the deaf can hear and the blind can see
              </p>
              <p className="text-lg text-white mt-4">
                Mark Twain
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}