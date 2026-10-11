import { Search, LineChart, Palette, Code2, Rocket } from "lucide-react";

export type ProcessStage = "research" | "analysis" | "design" | "develop" | "strategy";

interface FloatingCardProps {
  title: string;
  icon: ProcessStage;
  description: string;
  deliverables: string[];
  className?: string;
}

const ICON_MAP: Record<ProcessStage, React.ReactNode> = {
  research: <Search className="w-6 h-6" />,
  analysis: <LineChart className="w-6 h-6" />,
  design: <Palette className="w-6 h-6" />,
  develop: <Code2 className="w-6 h-6" />,
  strategy: <Rocket className="w-6 h-6" />,
};

const FloatingCard = ({ title, icon, description, deliverables, className = "" }: FloatingCardProps) => {
  const Icon = ICON_MAP[icon];

  return (
    <div
      className={`zv-card group z-10 p-6 w-72 lg:w-80 ${className}`}
    >
      {/* Icon */}
      <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20
                      flex items-center justify-center mb-4 backdrop-blur-sm border border-primary/30
                      group-hover:scale-110 transition-all duration-300">
        <div className="text-primary">{Icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-foreground mb-2 capitalize tracking-tight
                     group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{description}</p>

      {/* Deliverables */}
      <ul className="space-y-2">
        {deliverables.map((d) => (
          <li key={d} className="text-sm text-muted-foreground flex items-start">
            <span
              className="w-1.5 h-1.5 rounded-full bg-success mt-1.5 mr-3 shrink-0 animate-pulse"
              aria-hidden="true"
            />
            {d}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default FloatingCard;
