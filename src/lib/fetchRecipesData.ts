const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
const RANGE = '一覧!A2:H100';

interface Recipe {
  id: string;
  menuName: string;
  channelName: string;
  youtubeUrl: string;
  imageUrl: string;
  comment: string;
  isRecommended: boolean;
  recipe: string;
  ingredients: string; // 新しい材料のフィールド
}

export async function fetchRecipesData() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
  const res = await fetch(url, { cache: "force-cache" });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  const data = await res.json();
  console.log(data);
  const recipes: Recipe[] = data.values
    .map((row: string[], index: number) => ({
      id: index.toString(),
      menuName: row[0] || '', // 空のレコードを考慮
      channelName: row[1] || '',
      youtubeUrl: row[2] || '',
      imageUrl: row[3] || '',
      comment: row[4] || '',
      isRecommended: row[5] === 'true',
      recipe: row[6] || '',
      ingredients: row[7] || '', // 材料の取得
    }))
    .filter((recipe: Recipe) => recipe.menuName.trim() !== ''); // 空のmenuNameを除外
  return recipes;
}