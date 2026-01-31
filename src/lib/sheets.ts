export type ContentMap = Record<string, string>;

type SheetsResponse = {
  values?: string[][];
};

const isNonEmptyString = (value: string | undefined): value is string =>
  typeof value === "string" && value.trim().length > 0;

export const normalizeSheetValues = (values: string[][]): ContentMap => {
  const map: ContentMap = {};

  values.forEach((row, index) => {
    if (!row || row.length < 2) {
      return;
    }

    const key = row[1]?.trim();
    const value = row[2] ?? "";

    if (!isNonEmptyString(key)) {
      return;
    }

    if (index === 0 && key.toLowerCase() === "key") {
      return;
    }

    map[key] = value;
  });

  return map;
};

export const fetchSheetValues = async (): Promise<string[][]> => {
  const apiKey = import.meta.env.VITE_SHEETS_API_KEY as string | undefined;
  const sheetId = import.meta.env.VITE_SHEETS_ID as string | undefined;
  const range = import.meta.env.VITE_SHEETS_RANGE as string | undefined;

  if (!apiKey || !sheetId || !range) {
    throw new Error("Missing Google Sheets env vars.");
  }

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Sheets request failed: ${response.status}`);
  }

  const data = (await response.json()) as SheetsResponse;

  if (!data.values) {
    return [];
  }

  return data.values;
};
