import Image from "next/image";
import type { Game } from "@/data/games";
import { withBasePath } from "@/lib/basePath";

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path
        d="M4 12 12 4M12 4H6M12 4v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GameCard({ game }: { game: Game }) {
  return (
    <a
      href={game.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.35)]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
        <Image
          src={withBasePath(game.image)}
          alt={`${game.title} cover art`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
        {game.featured && (
          <span className="absolute left-4 top-4 rounded-full border border-emerald-300/30 bg-emerald-400/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-200 backdrop-blur">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-300/90">
            {game.tagline}
          </p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-zinc-50">
            {game.title}
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-zinc-400">
          {game.description}
        </p>

        <div className="mt-1 flex flex-wrap gap-2">
          {game.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-[11px] font-medium text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-300">
            Play now
            <ArrowIcon />
          </span>
          <span className="max-w-[180px] truncate text-xs text-zinc-600">
            {new URL(game.url).hostname}
          </span>
        </div>
      </div>
    </a>
  );
}
