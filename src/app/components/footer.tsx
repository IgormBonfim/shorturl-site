import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="md:mx-2 md:px-8 py-12 px-8 border-t border-neutral-900 text-neutral-500">
      <div className="flex justify-between items-center">
        <address className="text-sm font-light not-italic">
          © 2025 <span className="font-medium">Igor Bonfim</span>.
        </address>
        <nav
          role="navigation"
          aria-label="Redes sociais"
          className="text-2xl flex justify-center items-center gap-4"
        >
          <ul className="text-2xl flex justify-center items-center gap-4">
            <li>
              <a
                href="https://www.linkedin.com/in/igormbonfim/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de Igor Bonfim no LinkedIn"
              >
                <FaLinkedin className="cursor-pointer hover:text-gray-400"></FaLinkedin>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/IgormBonfim"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de Igor Bonfim no GitHub"
              >
                <FaGithub className="cursor-pointer hover:text-gray-400"></FaGithub>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Igor Bonfim",
            url: "https://seusite.com",
            sameAs: [
              "https://www.linkedin.com/in/igormbonfim/",
              "https://github.com/IgormBonfim",
            ],
          }),
        }}
      />
    </footer>
  );
}
