import { resolveIcon } from "../lib/icons";
export default function Icon({ name, size = 22, className = "" }) {
  const C = resolveIcon(name);
  return <C size={size} strokeWidth={1.8} className={className} />;
}
