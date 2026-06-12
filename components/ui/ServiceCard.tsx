import {
  Monitor, Code2, LayoutDashboard, Rocket, Bot, Plug,
  ClipboardList, Clock, Globe, UserX, FileSpreadsheet, Lightbulb,
  Timer, HeartHandshake, Settings2, Sparkles, TrendingUp, Minimize2,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Monitor, Code2, LayoutDashboard, Rocket, Bot, Plug,
  ClipboardList, Clock, Globe, UserX, FileSpreadsheet, Lightbulb,
  Timer, HeartHandshake, Settings2, Sparkles, TrendingUp, Minimize2,
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  variant?: "service" | "problem" | "benefit";
}

export function ServiceCard({ icon, title, description, variant = "service" }: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Rocket;

  const colors = {
    service: "text-blue-400",
    problem: "text-violet-400",
    benefit: "text-green-400",
  };

  return (
    <div className="group relative rounded-2xl border border-white/8 bg-[#15151f] p-6 card-glow transition-all duration-300 hover:border-violet-500/30">
      <div className={`mb-4 inline-flex rounded-xl bg-white/5 p-3 ${colors[variant]}`}>
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/55">{description}</p>
    </div>
  );
}
