import { Baby, Brain, Newspaper, Tag } from "lucide-svelte";
import type { Link } from "../types";

export const LINKS: Link[] = [
  { label: "About", menuName: "about", href: "/about", icon: Baby },
  { label: "Blog", menuName: "blog", href: "/blog", icon: Newspaper },
  { label: "Tag", menuName: "tag", href: "/tag", icon: Tag },
  { label: "Works", menuName: "works", href: "/works", icon: Brain },
];

export const categories = {
  0: "Language",
  1: "Frontend",
  2: "Backend",
  3: "Middleware",
  4: "Infrastructure",
  5: "Others",
};
