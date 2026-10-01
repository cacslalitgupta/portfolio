import {
  Banknote, BarChart3, BookOpen, Briefcase, Building2, Calculator, ClipboardCheck, Coins, FileCheck,
  FileSpreadsheet, FileText, Globe, HandCoins, Landmark, Percent, PiggyBank, Receipt, Scale,
  ShieldCheck, TrendingUp, Users, Wallet
} from "lucide-react";

// Curated set shown in the admin icon picker. Keys are what get stored in MongoDB.
export const ICONS = {
  Calculator, Receipt, BookOpen, ShieldCheck, FileCheck, Building2, TrendingUp, Users, Briefcase, Landmark,
  PiggyBank, Scale, FileText, BarChart3, Wallet, Percent, Coins, ClipboardCheck, Globe, HandCoins, Banknote,
  FileSpreadsheet
};
export const ICON_NAMES = Object.keys(ICONS);

const norm = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]/g, "");
const lookup = Object.fromEntries(ICON_NAMES.map((n) => [norm(n), ICONS[n]]));

/** Accepts "BookOpen", "book-open", "bookopen"… so older saved data still works. */
export const resolveIcon = (name) => lookup[norm(name)] || Briefcase;
