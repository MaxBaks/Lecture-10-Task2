import GameSavingLoader from './gameSavingLoader';

const loadSaveData = async (incomeJSON) => {
  try {
    return await GameSavingLoader.load(incomeJSON);
  } catch (error) {
    return new Error('Ошибка загрузки данных!');
  }
};

export default loadSaveData;
