import { FadeIn } from "./FadeIn";

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const body = `Nombre: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:sofia@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <section id="contacto" className="relative z-10 py-32 md:py-48 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Form */}
          <FadeIn className="md:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="TU NOMBRE"
                required
                className="border border-foreground/20 px-4 py-3 text-sm bg-transparent placeholder:text-foreground/40 focus:outline-none focus:border-foreground transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="TU EMAIL"
                required
                className="border border-foreground/20 px-4 py-3 text-sm bg-transparent placeholder:text-foreground/40 focus:outline-none focus:border-foreground transition-colors"
              />
              <input
                type="text"
                name="subject"
                placeholder="MOTIVO"
                required
                className="border border-foreground/20 px-4 py-3 text-sm bg-transparent placeholder:text-foreground/40 focus:outline-none focus:border-foreground transition-colors"
              />
              <textarea
                name="message"
                placeholder="CONTAME MÁS..."
                rows={4}
                required
                className="border border-foreground/20 px-4 py-3 text-sm bg-transparent placeholder:text-foreground/40 focus:outline-none focus:border-foreground transition-colors resize-none"
              />
              <button
                type="submit"
                className="self-end border border-accent text-accent px-6 py-2 text-sm tracking-widest hover:bg-accent hover:text-white transition-colors duration-200 cursor-pointer"
              >
                ENVIAR
              </button>
            </form>
          </FadeIn>

          {/* Text */}
          <FadeIn className="md:w-1/2" delay={200}>
            <div>
              <h2 className="font-serif italic text-3xl md:text-4xl mb-6">
                sigamos el <span className="text-accent">proceso</span>
              </h2>
              <p className="text-sm leading-relaxed max-w-md">
                Hoy quiero seguir construyendo proyectos donde diseño,
                tecnología y propósito se encuentren. Me interesan las
                experiencias accesibles, los productos digitales cuidados, la
                educación, la divulgación y las herramientas que transforman
                ideas complejas en experiencias claras y humanas.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
