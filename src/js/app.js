import GameSavingLoader from './gameSavingLoader';

const loadSaveData = (incomeJSON) => {
  (async () => {
    const result = await GameSavingLoader.load(incomeJSON);
    return result;
  })().catch(() => new Error('Ошибка загрузки данных!'));
};

export default loadSaveData;
