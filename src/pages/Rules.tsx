
import Layout from "@/components/Layout";
import { Shield, AlertCircle, ThumbsUp, X } from "lucide-react";

const Rules = () => {
  const generalRules = [
    "No hacking, cheating, or using modifications that provide unfair advantages",
    "No exploiting bugs or glitches - report them to staff instead",
    "No excessive griefing of other players' builds",
    "No spawn killing or excessive targeting of the same player",
    "No inappropriate skins, usernames, or chat messages",
    "Do not disrespect other players or staff members",
  ];

  const pvpRules = [
    "PvP is enabled throughout the server",
    "Lifesteal mechanics apply to all PvP encounters",
    "No combat logging (disconnecting during combat)",
    "The use of TNT or lava in combat is permitted",
    "Base raiding is allowed, but excessive griefing is not",
  ];

  const buildingRules = [
    "Respect other players' build areas",
    "No building offensive or inappropriate structures",
    "Keep redstone contraptions lag-friendly",
    "Do not claim excessively large areas of land",
    "Clean up floating trees after harvesting wood",
  ];

  const Rule = ({ rule }: { rule: string }) => (
    <li className="flex items-start py-2">
      <div className="mr-3 mt-1">
        <div className="h-2 w-2 bg-minecraft-accent rounded-full"></div>
      </div>
      <span className="text-gray-300">{rule}</span>
    </li>
  );

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] bg-minecraft-dark py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-10">
            <Shield className="text-minecraft-accent mr-3" size={32} />
            <h1 className="minecraft-title text-3xl md:text-4xl">Server Rules</h1>
          </div>

          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            These rules are in place to ensure everyone has an enjoyable experience on the PERAL SMP server. 
            Failure to follow these rules may result in warnings, temporary bans, or permanent bans.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="minecraft-card">
              <div className="flex items-center mb-4">
                <AlertCircle className="text-minecraft-accent mr-2" size={20} />
                <h2 className="minecraft-title text-xl">General Rules</h2>
              </div>
              <ul className="space-y-1">
                {generalRules.map((rule, index) => (
                  <Rule key={`general-${index}`} rule={rule} />
                ))}
              </ul>
            </div>

            <div className="minecraft-card">
              <div className="flex items-center mb-4">
                <X className="text-minecraft-accent mr-2" size={20} />
                <h2 className="minecraft-title text-xl">PvP Rules</h2>
              </div>
              <ul className="space-y-1">
                {pvpRules.map((rule, index) => (
                  <Rule key={`pvp-${index}`} rule={rule} />
                ))}
              </ul>
            </div>
          </div>

          <div className="minecraft-card mt-8">
            <div className="flex items-center mb-4">
              <ThumbsUp className="text-minecraft-accent mr-2" size={20} />
              <h2 className="minecraft-title text-xl">Building Rules</h2>
            </div>
            <ul className="space-y-1">
              {buildingRules.map((rule, index) => (
                <Rule key={`building-${index}`} rule={rule} />
              ))}
            </ul>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white">
              Remember: Staff have the final say in all matters. Rules may be updated at any time.
            </p>
            <p className="text-gray-400 mt-2">
              Last updated: April 2025
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Rules;
