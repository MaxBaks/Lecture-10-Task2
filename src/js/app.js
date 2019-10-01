import GameSavingLoader from './gameSavingLoader';

const loadSaveData = (incomeJSON) => (async function () {
  try {
    return await GameSavingLoader.load(incomeJSON);
  } catch (error) {
    return new Error('Ошибка загрузки данных!');
  }
})();

export default loadSaveData;
