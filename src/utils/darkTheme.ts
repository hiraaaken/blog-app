export type Theme = "light" | "dark";

/**
 * テーマの初期化
 */
export const initTheme = () => {
  const storedTheme: Theme =
    localStorage.getItem("theme") === "dark" ? "dark" : "light";
  toggleDarkClassByTheme(storedTheme);
};

/**
 * 現在のテーマを取得
 * @returns 現在のテーマ
 */
export const getCurrentTheme = (): Theme => {
  return localStorage.getItem("theme") === "dark" ? "dark" : "light";
};

/**
 * テーマの切り替え
 * @param theme テーマ "light" | "dark"
 */
export const toggleDarkClassByTheme = (theme: Theme) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
