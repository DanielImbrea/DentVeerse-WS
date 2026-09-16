"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { AUTH, SITE } from "@/lib/constants";
import { getSupabaseBrowser, parseAuthHash } from "@/lib/supabase-browser";

type Phase = "loading" | "ready" | "success" | "error" | "missing-env";

export default function ResetPasswordPage() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function init() {
      const supabase = getSupabaseBrowser();
      if (!supabase) {
        setPhase("missing-env");
        return;
      }
      const { access_token, refresh_token, type } = parseAuthHash();
      if (type !== "recovery" || !access_token || !refresh_token) {
        setPhase("error");
        setError("Link de resetare invalid sau expirat.");
        return;
      }
      const { error: sessionError } = await supabase.auth.setSession({
        access_token,
        refresh_token,
      });
      if (sessionError) {
        setPhase("error");
        setError(sessionError.message);
        return;
      }
      setPhase("ready");
    }
    init();
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const supabase = getSupabaseBrowser();
    if (!supabase || password.length < 8) return;

    const { error: updateError } = await supabase.auth.updateUser({ password });
    if (updateError) {
      setError(updateError.message);
      setPhase("error");
      return;
    }
    setPhase("success");
    setTimeout(() => {
      window.location.href = AUTH.appSignInAfterReset;
    }, 1200);
  }

  return (
    <main className="container-page flex min-h-[70vh] flex-col items-center justify-center py-20">
      <div className="glass-panel w-full max-w-md p-8">
        <p className="text-kicker text-primary-light">{SITE.productName}</p>
        <h1 className="font-display mt-2 text-2xl font-semibold text-ink">Parolă nouă</h1>

        {phase === "loading" && <p className="mt-4 text-ink-soft">Verificăm linkul…</p>}

        {phase === "ready" && (
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="password" className="mb-2 block text-[13px] font-semibold text-ink">
                Parola nouă (min. 8 caractere)
              </label>
              <input
                id="password"
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="focus-ring w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-ink"
              />
            </div>
            <button type="submit" className="btn-primary focus-ring w-full py-3">
              Salvează parola
            </button>
          </form>
        )}

        {phase === "success" && (
          <p className="mt-4 text-ink-soft">Parola a fost actualizată. Deschidem aplicația…</p>
        )}

        {(phase === "error" || phase === "missing-env") && (
          <>
            <p className="mt-4 text-red-300">{error || "Configurare Supabase lipsă pe server."}</p>
            <Link href="/" className="focus-ring mt-6 inline-block text-primary-light underline">
              Înapoi la site
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
