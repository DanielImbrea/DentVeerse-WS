"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AUTH, SITE } from "@/lib/constants";
import { getSupabaseBrowser, parseAuthHash } from "@/lib/supabase-browser";

type Status = "loading" | "success" | "error" | "missing-env";

export default function AuthCallbackPage() {
  const [status, setStatus] = useState<Status>("loading");
  const [message, setMessage] = useState("Confirmăm contul…");

  useEffect(() => {
    async function run() {
      const supabase = getSupabaseBrowser();
      if (!supabase) {
        setStatus("missing-env");
        setMessage("Supabase nu este configurat pe acest mediu.");
        return;
      }

      const { access_token, refresh_token } = parseAuthHash();
      if (!access_token || !refresh_token) {
        setStatus("error");
        setMessage("Link invalid sau expirat. Deschide din nou emailul de confirmare.");
        return;
      }

      const { error } = await supabase.auth.setSession({ access_token, refresh_token });
      if (error) {
        setStatus("error");
        setMessage(error.message);
        return;
      }

      setStatus("success");
      setMessage("Cont confirmat. Te redirecționăm în aplicație…");
      window.location.href = AUTH.appSignInDeepLink;
    }

    run();
  }, []);

  return (
    <main className="container-page flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <div className="glass-panel max-w-md p-8">
        <p className="text-kicker text-primary-light">{SITE.productName}</p>
        <h1 className="font-display mt-2 text-2xl font-semibold text-ink">Confirmare email</h1>
        <p className="mt-4 text-[15px] text-ink-soft">{message}</p>
        {(status === "success" || status === "error") && (
          <a
            href={AUTH.appSignInDeepLink}
            className="btn-primary focus-ring mt-6 inline-flex"
          >
            Deschide aplicația
          </a>
        )}
        {status === "missing-env" && (
          <Link href="/" className="focus-ring mt-6 inline-block text-primary-light underline">
            Înapoi la site
          </Link>
        )}
      </div>
    </main>
  );
}
