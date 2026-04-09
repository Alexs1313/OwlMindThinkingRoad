import AsyncStorage from '@react-native-async-storage/async-storage';

const OWWLMINDTHINKINN_SAVED_LEGENDS_KEY = 'owwlmindthinkin_saved_legends';
const OWWLMINDTHINKINN_SAVED_FACTS_KEY = 'owwlmindthinkin_saved_facts';

type OwwlmindthinkinSavedType = 'legends' | 'facts';

const owwlmindthinkinKeyByType = (type: OwwlmindthinkinSavedType) => {
  return type === 'legends'
    ? OWWLMINDTHINKINN_SAVED_LEGENDS_KEY
    : OWWLMINDTHINKINN_SAVED_FACTS_KEY;
};

export async function owwlmindthinkinGetSavedIds(
  type: OwwlmindthinkinSavedType,
): Promise<number[]> {
  try {
    const raw = await AsyncStorage.getItem(owwlmindthinkinKeyByType(type));
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(x => typeof x === 'number');
  } catch {
    return [];
  }
}

export async function owwlmindthinkinSetSavedIds(
  type: OwwlmindthinkinSavedType,
  ids: number[],
): Promise<void> {
  try {
    await AsyncStorage.setItem(
      owwlmindthinkinKeyByType(type),
      JSON.stringify(ids),
    );
  } catch {
    console.log('error');
  }
}

export async function owwlmindthinkinToggleSavedId(
  type: OwwlmindthinkinSavedType,
  id: number,
): Promise<number[]> {
  const current = await owwlmindthinkinGetSavedIds(type);
  const next = current.includes(id)
    ? current.filter(x => x !== id)
    : [...current, id];
  await owwlmindthinkinSetSavedIds(type, next);
  return next;
}
