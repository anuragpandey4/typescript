import diaryData from '../../data/entries.json' with { type: "json" };
import type { DiaryEntry } from '../../data/types.ts';

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

const getEntries = (): DiaryEntry[]  => { 
  return diaries;
};

const addDiary = () => {
  return null;
};

export default {
  getEntries,
  addDiary
};