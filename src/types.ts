import type { Baby } from "lucide-svelte";

/** ページのリンク */
export type Link = {
  label: string;
  menuName: string;
  href: string;
  icon: typeof Baby;
};

/** パンくずリスト用のページ情報 */
export type Breadcrumb = {
  label: string;
  href: string;
};

/** 検索条件 */
export type SearchParams = {
  q: string;
  p: number;
};
