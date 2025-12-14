"use client";

import Image from "next/image";
import { useVersion } from "@/lib/hooks";

export default function Home() {
  const { data, isLoading, error } = useVersion();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 h-full w-full animate-slow-spin rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 h-full w-full animate-slow-spin-reverse rounded-full bg-gradient-to-tl from-blue-700/20 via-cyan-400/10 to-transparent blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Content */}
      <main className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Logo */}
        <div className="relative">
          <div className="absolute inset-0 animate-pulse-slow blur-2xl">
            <div className="h-32 w-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 opacity-40" />
          </div>
          <Image
            src="https://tempestphp.com/img/tempest-logo.svg"
            alt="Tempest Logo"
            width={128}
            height={128}
            className="relative drop-shadow-2xl"
            priority
          />
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              Tempest
            </span>
          </h1>
          <p className="text-lg text-slate-400 sm:text-xl md:text-2xl">
            The PHP framework that gets out of your way
          </p>
        </div>

        {/* Version badge */}
        <div className="flex items-center gap-3">
          <div className="group relative overflow-hidden rounded-full border border-slate-700/50 bg-slate-900/50 px-6 py-3 backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-slate-800/50">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                {isLoading && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                )}
                <span
                  className={`relative inline-flex h-2 w-2 rounded-full ${
                    error
                      ? "bg-red-500"
                      : isLoading
                        ? "bg-cyan-400"
                        : "bg-emerald-400"
                  }`}
                />
              </span>
              <span className="font-mono text-sm text-slate-300">
                {isLoading && "Connecting..."}
                {error && "API Offline"}
                {data && (
                  <>
                    Backend{" "}
                    <span className="text-cyan-400">v{data.version}</span>
                  </>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://tempestphp.com/docs/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-medium text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/30"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="https://github.com/tempestphp/tempest-framework"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/50 px-8 py-3 font-medium text-slate-300 backdrop-blur-sm transition-all hover:border-slate-600 hover:bg-slate-800/50 hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            Source Code
          </a>
        </div>

        {/* Features hint */}
        <div className="mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { title: "Zero Config", desc: "Convention over configuration" },
            { title: "Type Safe", desc: "Full PHP 8.4 support" },
            { title: "Lightning Fast", desc: "Minimal overhead" },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-slate-800 bg-slate-900/30 p-4 backdrop-blur-sm transition-all hover:border-slate-700 hover:bg-slate-900/50"
            >
              <h3 className="font-semibold text-white">{feature.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-6 text-sm text-slate-600">
        Built with Tempest PHP & Next.js
      </footer>
    </div>
  );
}
