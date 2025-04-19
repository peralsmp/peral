
import { useState } from "react";
import Layout from "@/components/Layout";
import { Shield, Upload, Image, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StaffAdmin = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "987654") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="min-h-[calc(100vh-4rem)] bg-minecraft-dark py-16 px-4 flex items-center justify-center">
          <div className="minecraft-card max-w-md w-full">
            <div className="flex items-center justify-center mb-6">
              <Shield className="text-minecraft-accent mr-3" size={32} />
              <h1 className="minecraft-title text-2xl">Staff Login</h1>
            </div>
            
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter staff password"
                  className="w-full bg-minecraft-black/50 border border-minecraft-accent/30 rounded-md p-3 text-white focus:border-minecraft-accent focus:outline-none focus:ring-1 focus:ring-minecraft-accent"
                />
              </div>
              
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              
              <div className="text-center">
                <button type="submit" className="minecraft-button">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] bg-minecraft-dark py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="minecraft-title text-3xl md:text-4xl mb-8 text-center">Staff Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="minecraft-card">
              <div className="flex items-center mb-6">
                <Image className="text-minecraft-accent mr-3" size={24} />
                <h2 className="minecraft-title text-xl">Gallery Management</h2>
              </div>
              
              <div className="space-y-4">
                <button className="minecraft-button w-full flex items-center justify-center gap-2">
                  <Upload size={20} />
                  Upload New Image
                </button>
                <button className="minecraft-button w-full">
                  Manage Existing Images
                </button>
              </div>
            </div>
            
            <div className="minecraft-card">
              <div className="flex items-center mb-6">
                <Settings className="text-minecraft-accent mr-3" size={24} />
                <h2 className="minecraft-title text-xl">Server Settings</h2>
              </div>
              
              <div className="space-y-4">
                <button className="minecraft-button w-full">
                  Update Server Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StaffAdmin;
