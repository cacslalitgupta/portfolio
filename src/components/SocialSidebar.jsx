// src/components/SocialSidebar.jsx
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const SOCIALS = [
  { name: "Facebook",  href: "https://www.facebook.com/lalit.gupta.58367",  Icon: Facebook,  hover: "hover:text-[#1877f2]" },
  { name: "Instagram", href: "https://instagram.com", Icon: Instagram, hover: "hover:text-[#d62976]" },
  { name: "YouTube",   href: "https://youtube.com",   Icon: Youtube,   hover: "hover:text-[#ff0000]" },
  { name: "LinkedIn",  href: "https://in.linkedin.com/in/ca-lalit-gupta-9895497a",  Icon: Linkedin,  hover: "hover:text-[#0a66c2]" },
];

export default function SocialSidebar({ links }) {
  // Use links prop if provided, else fall back to defaults
  const items = links?.length
    ? links.map((l) => {
        const preset = SOCIALS.find(
          (s) => s.name.toLowerCase() === l.name.toLowerCase()
        );
        return { ...preset, ...l, Icon: preset?.Icon };
      })
    : SOCIALS;

  return (
    <aside
      aria-label="Social media links"
      className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-1 rounded-r-2xl border border-l-0 border-line bg-surface/80 p-1.5 shadow-card backdrop-blur-md transition-colors hover:bg-surface sm:flex"
    >
      {items.map(({ name, href, Icon, hover }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className={`grid h-10 w-10 place-items-center rounded-xl text-muted transition-all hover:scale-110 hover:bg-soft ${hover || ""}`}
        >
          <Icon size={20} strokeWidth={2} />
        </a>
      ))}
    </aside>
  );
}