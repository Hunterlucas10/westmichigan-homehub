import { Shield, Lock, Award, CheckCircle } from "lucide-react";

interface TrustBadgesProps {
  variant?: "default" | "compact";
}

const TrustBadges = ({ variant = "default" }: TrustBadgesProps) => {
  const badges = [
    {
      icon: Shield,
      text: "Verified Lenders",
      description: "All lenders are verified and licensed",
    },
    {
      icon: Lock,
      text: "Secure & Encrypted",
      description: "Your information is protected",
    },
    {
      icon: Award,
      text: "BBB Accredited",
      description: "Trusted by Better Business Bureau",
    },
    {
      icon: CheckCircle,
      text: "No Obligation",
      description: "Free consultation, no commitment",
    },
  ];

  if (variant === "compact") {
    return (
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
        {badges.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <div key={index} className="flex items-center gap-2 text-muted-foreground">
              <Icon className="w-4 h-4 text-secondary" />
              <span>{badge.text}</span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50"
          >
            <Icon className="w-8 h-8 mb-2 text-secondary" />
            <p className="font-semibold text-foreground mb-1">{badge.text}</p>
            <p className="text-xs text-muted-foreground">{badge.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TrustBadges;

