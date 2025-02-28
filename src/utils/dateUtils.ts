export type FormatType =
  | "YYYY/MM/DD"
  | "DD/MM/YYYY"
  | "YYYY-MM-DD"
  | "YYYY.MM.DD";

export const formatDate = (date: Date, formatType: FormatType): string => {
  const padZero = (num: number) => (num < 10 ? `0${num}` : num.toString());

  const day = padZero(date.getDate());
  const month = padZero(date.getMonth() + 1);
  const year = date.getFullYear().toString();

  switch (formatType) {
    case "YYYY/MM/DD":
      return `${year} / ${month} / ${day}`;
    case "DD/MM/YYYY":
      return `${day} / ${month} / ${year}`;
    case "YYYY-MM-DD":
      return `${year}-${month}-${day}`;
    case "YYYY.MM.DD":
      return `${year}.${month}.${day}`;
    default:
      throw new Error("Invalid format type");
  }
};
