import GameSavingLoader from './gameSavingLoader';

export default async function loadSaveData(incomeJSON) {
  try {
    const result = await GameSavingLoader.load(incomeJSON);
    return result;
  } catch (error) {
    return new Error('Ошибка загрузки данных!');
  }
}
