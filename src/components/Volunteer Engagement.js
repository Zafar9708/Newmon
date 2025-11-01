// components/ImageGrid.jsx
import Image from 'next/image';

export default function ImageGrid() {
  const images = [
    // First row images
    "/images/nkf1.jpg",
  "/images/nkf2.jpg",
  "/images/nkf3.jpg",
    // Second row images
   "/images/nkf4.jpg",
  "/images/nkf5.jpg",
  "/images/nkf6.jpg",

     "/images/nkf7.jpg",
  "/images/nkf8.jpg",
  "/images/nkf9.jpg",

     "/images/nkf10.jpg",
  "/images/nkf11.jpg",
  "/images/nkf12.jpg",

  
     "/images/nkf13.jpg",
  "/images/nkf14.jpg",
  "/images/nkf15.jpg",

  
     "/images/nkf16.jpg",
  "/images/nkf17.jpg",
  "/images/nkf18.jpg",


  
     "/images/nkf19.jpg",
  "/images/nkf20.jpg",
  "/images/nkf21.jpg",


  
     "/images/nkf22.jpg",
  "/images/nkf23.jpg",
  "/images/nkf24.jpg",

    "/images/nkf25.jpg",
  "/images/nkf26.jpg",
  "/images/nkf27.jpg",

  
    "/images/nkf28.jpg",
  "/images/nkf29.jpg",
  "/images/nkf30.jpg",



  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-8 lg:px-16"> {/* Space from left and right */}
        
        {/* Two rows of three images each */}
        <div className="flex flex-col gap-2 max-w-6xl mx-auto">
          
          {/* First Row */}
          <div className="flex flex-col md:flex-row gap-2">
            {images.slice(0, 3).map((image, index) => (
              <div key={index} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover "
                />
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row gap-2">
            {images.slice(3, 6).map((image, index) => (
              <div key={index + 3} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 4}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

            <div className="flex flex-col md:flex-row gap-2">
            {images.slice(6, 9).map((image, index) => (
              <div key={index + 3} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 4}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

           <div className="flex flex-col md:flex-row gap-2">
            {images.slice(9, 12).map((image, index) => (
              <div key={index + 3} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 4}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

           <div className="flex flex-col md:flex-row gap-2">
            {images.slice(12, 15).map((image, index) => (
              <div key={index + 3} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 4}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

           <div className="flex flex-col md:flex-row gap-2">
            {images.slice(15, 18).map((image, index) => (
              <div key={index + 3} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 4}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>


           <div className="flex flex-col md:flex-row gap-2">
            {images.slice(18, 21).map((image, index) => (
              <div key={index + 3} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 4}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>


           <div className="flex flex-col md:flex-row gap-2">
            {images.slice(21, 24).map((image, index) => (
              <div key={index + 3} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 4}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

           <div className="flex flex-col md:flex-row gap-2">
            {images.slice(24, 27).map((image, index) => (
              <div key={index + 3} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 4}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}