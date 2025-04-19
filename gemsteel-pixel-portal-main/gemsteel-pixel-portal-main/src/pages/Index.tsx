import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Zap, Heart, ArrowRight, Gamepad2 } from "lucide-react";
import serverLogo from "/lovable-uploads/c988b2c5-414a-4de6-8c98-2fe161792d04.png";

const Index = () => {
  return (
    <Layout>
      <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20 animate-minecraft-bg" 
            style={{backgroundSize: "200% 200%"}}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-minecraft-dark/0 via-minecraft-dark/70 to-minecraft-dark"></div>
        </div>
        
        <div className="w-full max-w-5xl px-6 py-12 text-center z-10">
          <div className="flex flex-col items-center justify-center mb-8">
            <img 
              src={serverLogo} 
              alt="PERAL SMP Logo" 
              className="w-40 h-40 mb-6 animate-float"
            />
            <h1 className="text-4xl md:text-6xl font-minecraft-ten text-white animate-glow">
              PERAL SMP
            </h1>
          </div>
          
          <div className="mb-12 mx-auto max-w-2xl">
            <p className="text-xl text-white mb-8 font-minecraft">
              Experience Minecraft like never before with our unique gameplay features
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="minecraft-card h-full animate-float">
                <div className="feature-icon mb-4">
                  <Zap size={32} className="text-minecraft-accent" />
                </div>
                <h3 className="minecraft-title text-lg mb-2">Power-Gemsteel</h3>
                <p className="text-gray-300">Harness the power of rare gemsteel ore to enhance your abilities</p>
              </div>
              
              <div className="minecraft-card h-full animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="feature-icon mb-4">
                  <Heart size={32} className="text-minecraft-accent" />
                </div>
                <h3 className="minecraft-title text-lg mb-2">Lifesteal</h3>
                <p className="text-gray-300">Defeat other players to steal their hearts and increase your maximum health</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="minecraft-button inline-flex items-center gap-2"
                onClick={() => {
                  navigator.clipboard.writeText("peralsmpbest.aternos.me:25906");
                  window.alert("Server IP copied to clipboard!");
                }}
              >
                <Gamepad2 size={20} />
                Join Now
              </button>
              
              <Link to="/info" className="minecraft-button inline-flex items-center gap-2">
                Server Info
                <ArrowRight size={20} />
              </Link>
              
              <a 
                href="https://discord.gg/7yQEDY8xPh"
                target="_blank"
                rel="noopener noreferrer"
                className="minecraft-button inline-flex items-center gap-2"
              >
                Join Discord
              </a>
            </div>
          </div>
          
          <div className="text-white text-sm mt-12 font-minecraft">
            <p>Currently supporting Minecraft version: <span className="text-minecraft-accent">1.21.51</span></p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
