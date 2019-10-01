import GameSavingLoader from './gameSavingLoader';

async function loadSaveData(incomeJSON) {
  try {
    return await GameSavingLoader.load(incomeJSON);
  } catch (error) {
    return new Error('Ошибка загрузки данных!');
  }
}

export default loadSaveData;
