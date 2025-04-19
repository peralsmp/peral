import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { AlertOctagon, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="minecraft-card text-center max-w-md mx-auto p-8">
          <div className="flex justify-center mb-6">
            <AlertOctagon className="text-minecraft-accent h-20 w-20 animate-pulse" />
          </div>
          <h1 className="minecraft-title text-4xl mb-4">404</h1>
          <p className="text-xl text-gray-300 mb-6">
            Oops! Looks like you got lost in the Nether.
          </p>
          <p className="text-gray-400 mb-8">
            The page you're looking for doesn't exist in this dimension.
          </p>
          <Link to="/" className="minecraft-button inline-flex items-center">
            <Home className="mr-2" size={18} />
            Return to Overworld
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
