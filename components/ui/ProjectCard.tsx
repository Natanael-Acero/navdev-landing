interface ProjectCardProps {
  tag: string;
  title: string;
  description: string;
  tech: string[];
}

export function ProjectCard({ tag, title, description, tech }: ProjectCardProps) {
  return (
    <div className="group rounded-2xl border border-white/8 bg-[#15151f] overflow-hidden card-glow transition-all duration-300 hover:border-violet-500/30">
      <div className="h-44 bg-gradient-to-br from-blue-900/30 to-violet-900/30 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-violet-600/10 group-hover:from-blue-600/20 group-hover:to-violet-600/20 transition-all duration-300" />
        <span className="relative text-4xl font-black text-white/10 select-none">{title[0]}</span>
      </div>
      <div className="p-6">
        <span className="inline-block rounded-full bg-blue-500/15 px-3 py-1 text-xs font-medium text-blue-400 mb-3">
          {tag}
        </span>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-white/55 leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="rounded-md bg-white/5 px-2 py-1 text-xs text-white/50">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
