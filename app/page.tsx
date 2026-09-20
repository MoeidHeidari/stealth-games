import { GameCard } from "./components/GameCard";
import { games } from "@/data/games";

function GhostLogo() {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400 text-zinc-950 shadow-[0_0_30px_rgba(52,211,153,0.45)]">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3C7.5 3 4 6.6 4 11v9l2.6-2.2L9 20l3-2 3 2 2.4-2.2L20 20v-9c0-4.4-3.5-8-8-8Z"
          fill="currentColor"
        />
        <circle cx="9.2" cy="11" r="1.4" fill="#09090b" />
        <circle cx="14.8" cy="11" r="1.4" fill="#09090b" />
      </svg>
    </span>
  );
}

export default function Home() {
  const featured = games.find((g) => g.featured) ?? games[0];

  return (
    <div className="flex min-h-full flex-1 flex-col bg-zinc-950 text-zinc-100">
      {/* ── Nav ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-3">
            <GhostLogo />
            <span className="text-sm font-bold tracking-[0.22em]">
              STEALTH <span className="text-emerald-300">GAMES</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-zinc-400 sm:flex">
            <a href="#games" className="transition-colors hover:text-zinc-100">
              Games
            </a>
            <a href="#about" className="transition-colors hover:text-zinc-100">
              Why Stealth?
            </a>
          </nav>
          <a
            href="#games"
            className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-300"
          >
            Play now
          </a>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[120px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-16 pt-20 text-center sm:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-zinc-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Casual mini games. Free, instant, no installs
          </span>
          <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            Small games.
            <br />
            <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-lime-300 bg-clip-text text-transparent">
              Instant fun.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            Stealth Games is a tiny arcade of casual browser games. Click a
            card, play for two minutes or lose track of an hour. Starting
            with <span className="text-zinc-200">{featured.title}</span>.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-400 px-7 text-sm font-semibold text-zinc-950 transition-all hover:bg-emerald-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.4)]"
            >
              Play {featured.title} now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M4 12 12 4M12 4H6M12 4v6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#games"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 text-sm font-semibold text-zinc-100 transition-colors hover:bg-white/10"
            >
              Browse the arcade
            </a>
          </div>

          <dl className="mt-12 flex items-center gap-8 text-center sm:gap-12">
            {[
              [`${games.length}`, `live game${games.length === 1 ? "" : "s"}`],
              ["0", "installs needed"],
              ["∞", "quick breaks"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="text-2xl font-bold text-zinc-50">{value}</dd>
                <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-500">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Games grid ──────────────────────────────────── */}
      <main id="games" className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 pb-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              The arcade
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Pick a game, start playing
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm text-zinc-500 sm:block">
            Every game opens in a new tab and runs right in the browser.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}

          {/* Coming soon slot, remove once you have more games */}
          <div className="flex min-h-[320px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/30 p-8 text-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-xl text-zinc-500">
              +
            </span>
            <h3 className="font-semibold text-zinc-300">More games incoming</h3>
            <p className="max-w-[26ch] text-sm leading-relaxed text-zinc-500">
              Drop a cover in{" "}
              <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-xs text-emerald-200">
                public/games/
              </code>{" "}
              and add it to{" "}
              <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-xs text-emerald-200">
                data/games.ts
              </code>
              .
            </p>
          </div>
        </div>
      </main>

      {/* ── About ───────────────────────────────────────── */}
      <section id="about" className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "No installs",
              body: "Every game is a link. Click play and you are in, on desktop or mobile.",
            },
            {
              title: "Casual first",
              body: "Short sessions, simple controls, zero learning curve. Built for quick breaks.",
            },
            {
              title: "Made with AI, made with love",
              body: "These games are built with the help of AI, made with love and always free. No money, no ads, just play.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-6"
            >
              <h3 className="font-semibold text-zinc-100">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="border-t border-white/5">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row">
          <span className="flex items-center gap-2">
            <GhostLogo />
            <span className="text-xs font-bold tracking-[0.22em] text-zinc-400">
              STEALTH GAMES
            </span>
          </span>
          <p>Free forever. Made with AI, made with love.</p>
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-emerald-300"
          >
            Play {featured.title} →
          </a>
        </div>
      </footer>
    </div>
  );
}
