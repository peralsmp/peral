
import Layout from "@/components/Layout";
import { Server, Users, Zap, Heart, Clock } from "lucide-react";

const ServerInfo = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] bg-minecraft-dark py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="minecraft-title text-3xl md:text-4xl mb-8 text-center">Server Information</h1>
          
          <div className="minecraft-card mb-12">
            <div className="flex items-center mb-6">
              <Server className="text-minecraft-accent mr-3" size={28} />
              <h2 className="minecraft-title text-xl">Connection Details</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-minecraft-black/40 p-4 rounded-md">
                <p className="text-gray-400 mb-1">Server Address:</p>
                <p className="text-minecraft-accent font-minecraft text-md">peralsmpbest.aternos.me</p>
              </div>
              
              <div className="bg-minecraft-black/40 p-4 rounded-md">
                <p className="text-gray-400 mb-1">Port:</p>
                <p className="text-minecraft-accent font-minecraft text-md">25906</p>
              </div>
              
              <div className="bg-minecraft-black/40 p-4 rounded-md">
                <p className="text-gray-400 mb-1">Version:</p>
                <p className="text-minecraft-accent font-minecraft text-md">1.21.51</p>
              </div>
              
              <div className="bg-minecraft-black/40 p-4 rounded-md">
                <p className="text-gray-400 mb-1">Game Mode:</p>
                <p className="text-minecraft-accent font-minecraft text-md">Survival</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button
                className="minecraft-button"
                onClick={() => {
                  navigator.clipboard.writeText("peralsmpbest.aternos.me:25906");
                  alert("Server IP copied to clipboard!");
                }}
              >
                Copy Server Address
              </button>
            </div>
          </div>
          
          <div className="minecraft-card mb-12">
            <div className="flex items-center mb-6">
              <Users className="text-minecraft-accent mr-3" size={28} />
              <h2 className="minecraft-title text-xl">Server Status</h2>
            </div>
            
            <p className="text-gray-300 mb-6">
              Player status is currently managed manually. Please join our Discord for real-time server status.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="minecraft-card">
              <div className="flex items-center mb-6">
                <Zap className="text-minecraft-accent mr-3 animate-pulse" size={28} />
                <h2 className="minecraft-title text-xl">Power-Gemsteel</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  Discover and mine the rare Gemsteel ore found in the deepest parts of the world. This powerful mineral grants special abilities and enhancements.
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Collect Gemsteel fragments to craft powerful items</li>
                  <li>Enhance your tools and weapons with special abilities</li>
                  <li>Unlock unique crafting recipes</li>
                  <li>Access special powers unavailable to other players</li>
                </ul>
              </div>
            </div>
            
            <div className="minecraft-card">
              <div className="flex items-center mb-6">
                <Heart className="text-minecraft-accent mr-3 animate-pulse" size={28} />
                <h2 className="minecraft-title text-xl">Lifesteal</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  Engage in our unique Lifesteal system where defeating other players grants you additional health.
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Start with 10 hearts of health (vanilla)</li>
                  <li>Defeat other players to steal one of their hearts</li>
                  <li>Increase your maximum health beyond vanilla limits</li>
                  <li>Players who lose all hearts will be banned temporarily</li>
                  <li>Resurrection items can be crafted to revive banned players</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="minecraft-card">
            <div className="flex items-center mb-6">
              <Clock className="text-minecraft-accent mr-3" size={28} />
              <h2 className="minecraft-title text-xl">Server Activity</h2>
            </div>
            
            <p className="text-gray-300">
              Our server features regular events, competitions, and updates to keep the gameplay fresh and exciting. Join our Discord community to stay informed about upcoming activities.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServerInfo;
