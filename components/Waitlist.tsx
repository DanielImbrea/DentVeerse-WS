"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { revealUp } from "@/lib/animations";
import { SITE } from "@/lib/constants";

const FORM_ENDPOINT = "";

type Role = "pacient" | "clinica" | "laborator";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("pacient");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;

    if (!FORM_ENDPOINT) {
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
        "Lista de așteptare DentVeerse"
      )}&body=${encodeURIComponent(`Email: ${email}\nMă înscriu ca: ${role}`)}`;
      setStatus("success");
      return;
    }

    try {
      setStatus("loading");
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ email, role }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="waitlist" className="pb-24 md:pb-32">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={revealUp}
          className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-surface via-surface to-primary/[0.04] p-8 shadow-glass-lg md:p-12 lg:p-14"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-kicker text-accent">Lansare în curând</p>
              <h2 className="font-display mt-3 max-w-[20ch] text-[2rem] font-semibold leading-[1.1] tracking-tight text-ink md:text-[2.5rem]">
                Fii primul care află când lansăm pe App Store și Google Play.
              </h2>
              <p className="mt-5 max-w-prose text-[16px] leading-relaxed text-ink-soft">
                Un singur email, exact când aplicația devine disponibilă în regiunea ta. Fără spam.
              </p>
            </div>

            <div>
              {status === "success" ? (
                <div className="rounded-2xl border border-primary/25 bg-primary/5 p-8 text-center md:text-left">
                  <p className="font-display text-xl font-semibold text-primary-light">Te-am notat!</p>
                  <p className="mt-2 text-[15px] text-ink-soft">
                    Îți scriem imediat ce DentVeerse e disponibilă pentru descărcare.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-[13px] font-semibold text-ink">
                      Adresă de email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nume@exemplu.ro"
                      className="focus-ring w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3.5 text-[15px] text-ink shadow-inner-glow backdrop-blur-sm placeholder:text-ink-muted"
                    />
                  </div>

                  <fieldset>
                    <legend className="mb-2 block text-[13px] font-semibold text-ink">Mă înscriu ca</legend>
                    <div className="flex flex-wrap gap-2">
                      {(
                        [
                          ["pacient", "Pacient"],
                          ["clinica", "Clinică"],
                          ["laborator", "Laborator"],
                        ] as [Role, string][]
                      ).map(([value, label]) => (
                        <button
                          type="button"
                          key={value}
                          onClick={() => setRole(value)}
                          aria-pressed={role === value}
                          className={`chip ${role === value ? "chip-active" : "chip-inactive"}`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary focus-ring w-full py-3.5 text-[15px] disabled:opacity-60"
                  >
                    {status === "loading" ? "Se trimite…" : "Intră pe lista de așteptare"}
                  </button>

                  {status === "error" && (
                    <p className="text-[13.5px] text-red-700">
                      Ceva nu a mers bine. Încearcă din nou sau scrie-ne la {SITE.email}.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
