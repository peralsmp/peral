
import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">{children}</main>
      <footer className="bg-minecraft-charcoal p-6 text-center">
        <p className="text-sm text-white font-minecraft">
          &copy; {new Date().getFullYear()} PERAL SMP | Not affiliated with Mojang Studios
        </p>
      </footer>
    </div>
  );
};

export default Layout;
