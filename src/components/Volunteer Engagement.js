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
    "/images/nkf51.jpeg",
    "/images/nkf52.jpeg",
    "/images/nkf53.jpeg",
    "/images/nkf54.jpeg",
    "/images/nkf29.jpg",
    "/images/nkf56.jpeg",
    "/images/nkf28.jpg",
    "/images/nkf57.jpeg",
    "/images/nkf58.jpeg",
    "/images/nkf59.jpg",
    "/images/nkf60.jpg",
    "/images/nkf61.jpg",
    "/images/nkf62.jpg",
    "/images/nkf63.jpg",
    "/images/nkf64.jpg",
    "/images/nkf65.jpg",
        


  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-12 lg:px-24 xl:px-32"> {/* More space from left and right */}
        
        {/* Image Grid */}
        <div className="flex flex-col gap-4 max-w-4xl mx-auto"> {/* Smaller max-width and increased gap */}
          
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-4">
            {images.slice(0, 3).map((image, index) => (
              <div key={index} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={350}  
                  height={250} 
                  className="w-full h-56 object-cover" 
                />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-4">
            {images.slice(3, 6).map((image, index) => (
              <div key={index + 3} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 4}`}
                  width={350}
                  height={250}
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex flex-col md:flex-row gap-4">
            {images.slice(6, 9).map((image, index) => (
              <div key={index + 6} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 7}`}
                  width={350}
                  height={250}
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Row 4 */}
          <div className="flex flex-col md:flex-row gap-4">
            {images.slice(9, 12).map((image, index) => (
              <div key={index + 9} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 10}`}
                  width={350}
                  height={250}
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Row 5 */}
          <div className="flex flex-col md:flex-row gap-4">
            {images.slice(12, 15).map((image, index) => (
              <div key={index + 12} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 13}`}
                  width={350}
                  height={250}
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Row 6 */}
          <div className="flex flex-col md:flex-row gap-4">
            {images.slice(15, 18).map((image, index) => (
              <div key={index + 15} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 16}`}
                  width={350}
                  height={250}
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Row 7 */}
          <div className="flex flex-col md:flex-row gap-4">
            {images.slice(18, 21).map((image, index) => (
              <div key={index + 18} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 19}`}
                  width={350}
                  height={250}
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Row 8 */}
          <div className="flex flex-col md:flex-row gap-4">
            {images.slice(21, 24).map((image, index) => (
              <div key={index + 21} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 22}`}
                  width={350}
                  height={250}
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Row 9 */}
          <div className="flex flex-col md:flex-row gap-4">
            {images.slice(24, 27).map((image, index) => (
              <div key={index + 24} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 25}`}
                  width={350}
                  height={250}
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Row 10 */}
          <div className="flex flex-col md:flex-row gap-4">
            {images.slice(27, 30).map((image, index) => (
              <div key={index + 27} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 28}`}
                  width={350}
                  height={250}
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Row 11 */}
          <div className="flex flex-col md:flex-row gap-4">
            {images.slice(30, 33).map((image, index) => (
              <div key={index + 30} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 31}`}
                  width={350}
                  height={250}
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Row 12 */}
          <div className="flex flex-col md:flex-row gap-4">
            {images.slice(33, 36).map((image, index) => (
              <div key={index + 33} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 34}`}
                  width={350}
                  height={250}
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Row 13 */}
          <div className="flex flex-col md:flex-row gap-4">
            {images.slice(36, 39).map((image, index) => (
              <div key={index + 36} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 37}`}
                  width={350}
                  height={250}
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>


             <div className="flex flex-col md:flex-row gap-4">
            {images.slice(39, 42).map((image, index) => (
              <div key={index + 36} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 37}`}
                  width={350}
                  height={250}
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>


             <div className="flex flex-col md:flex-row gap-4">
            {images.slice(42, 45).map((image, index) => (
              <div key={index + 36} className="flex-1">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 37}`}
                  width={350}
                  height={250}
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>

          

        </div>
      </div>
    </section>
  );
}