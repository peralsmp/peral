
import { useState } from "react";
import Layout from "@/components/Layout";
import { Image, Info, X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedDescription, setSelectedDescription] = useState<string | null>(null);

  // Sample gallery images - in a real application, these would come from an API or database
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      alt: "Power-Gemsteel Temple",
      description: "The ancient temple where Gemsteel power can be harnessed",
      category: "builds"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      alt: "PvP Arena",
      description: "Weekly Lifesteal tournament in the main PvP arena",
      category: "pvp"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      alt: "Enchanted Forest Base",
      description: "Community build project in the enchanted forest",
      category: "builds"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      alt: "Mountain Kingdom",
      description: "Aerial view of the northern mountain kingdom",
      category: "builds"
    }
  ];

  // Categories for filtering
  const categories = ["all", "builds", "pvp", "events"];
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter(image => image.category === activeCategory);

  // Open image modal
  const openImage = (src: string, description: string) => {
    setSelectedImage(src);
    setSelectedDescription(description);
    document.body.style.overflow = "hidden";
  };

  // Close image modal
  const closeImage = () => {
    setSelectedImage(null);
    setSelectedDescription(null);
    document.body.style.overflow = "auto";
  };

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] bg-minecraft-dark py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Image className="text-minecraft-accent mr-3" size={32} />
            <h1 className="minecraft-title text-3xl md:text-4xl">Screenshot Gallery</h1>
          </div>

          <div className="mb-8 text-center">
            <p className="text-gray-300 max-w-2xl mx-auto">
              Check out epic builds, PvP battles, and events from PERAL SMP. Want to submit your own screenshots?
              Contact our admins through the Discord server!
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-minecraft-charcoal rounded-lg p-1">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 font-minecraft text-sm rounded-md transition-colors ${
                    activeCategory === category
                      ? "bg-minecraft-accent text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id}
                className="minecraft-card overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => openImage(image.src, image.description)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-white font-minecraft text-sm">{image.alt}</h3>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-400">No images found in this category</p>
            </div>
          )}

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              <Info size={16} className="inline mr-1" />
              Only server administrators can upload new images to the gallery
            </p>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full bg-minecraft-charcoal rounded-lg overflow-hidden">
            <div className="absolute top-4 right-4">
              <button
                onClick={closeImage}
                className="bg-minecraft-black/50 hover:bg-minecraft-black text-white rounded-full p-2 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="max-h-[80vh] overflow-hidden">
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="w-full h-auto object-contain"
              />
            </div>
            {selectedDescription && (
              <div className="p-4 bg-minecraft-charcoal">
                <p className="text-white">{selectedDescription}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
