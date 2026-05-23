import type { ReactNode } from "react";
import { FadeIn } from "./FadeIn";
import { useT } from "../lib/i18n";

type ContactBodyProps = {
  firstFocusRef?: React.RefObject<HTMLInputElement | null>;
  extraActions?: ReactNode;
};

export function ContactBody({ firstFocusRef, extraActions }: ContactBodyProps = {}) {
  const t = useT();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:sofia@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <div className="grid md:grid-cols-2 gap-12 md:gap-32">
      {/* Right col on desktop: text + social links — shown first on mobile via order */}
      <FadeIn className="order-1 md:order-2">
        <div className="text-left">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            {t("contact.title")}<br className="md:hidden" />
            {" "}<span className="text-accent">{t("contact.titleAccent")}</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-md mb-12">
            {t("contact.body")}
          </p>
          <div className="flex flex-col items-start gap-2 text-xs tracking-wide">
            <span>
              linkedin:{" "}
              <a
                href="https://www.linkedin.com/in/sof%C3%ADa-rey-se/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors underline"
              >
                Sofía Rey San Esteban
              </a>
            </span>
            <span>
              github:{" "}
              <a
                href="https://github.com/SofiaRey"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors underline"
              >
                @SofiaRey
              </a>
            </span>
          </div>
        </div>
      </FadeIn>

      {/* Left col on desktop: form — shown second on mobile via order */}
      <FadeIn delay={200} className="order-2 md:order-1">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            ref={firstFocusRef}
            type="text"
            name="name"
            placeholder={t("contact.placeholderName")}
            required
            className="border border-foreground/20 px-4 py-3 text-sm bg-transparent placeholder:text-foreground/40 focus:outline-none focus:border-foreground transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder={t("contact.placeholderEmail")}
            required
            className="border border-foreground/20 px-4 py-3 text-sm bg-transparent placeholder:text-foreground/40 focus:outline-none focus:border-foreground transition-colors"
          />
          <input
            type="text"
            name="subject"
            placeholder={t("contact.placeholderSubject")}
            required
            className="border border-foreground/20 px-4 py-3 text-sm bg-transparent placeholder:text-foreground/40 focus:outline-none focus:border-foreground transition-colors"
          />
          <textarea
            name="message"
            placeholder={t("contact.placeholderMessage")}
            rows={4}
            required
            className="border border-foreground/20 px-4 py-3 text-sm bg-transparent placeholder:text-foreground/40 focus:outline-none focus:border-foreground transition-colors resize-none"
          />
          <div className="flex items-center justify-between gap-4">
            {extraActions}
            <button
              type="submit"
              className="ml-auto border border-accent text-accent px-6 py-2 text-sm tracking-widest hover:bg-accent hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {t("contact.send")}
            </button>
          </div>
        </form>
      </FadeIn>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contacto" className="relative z-10 py-32 md:py-48 px-6">
      <div className="max-w-5xl mx-auto">
        <ContactBody />
      </div>
    </section>
  );
}
