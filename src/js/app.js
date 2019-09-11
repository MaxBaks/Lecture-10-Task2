import GameSavingLoader from './gameSavingLoader';

export default function loadSaveData(incomeJSON) {
  return new Promise((resolve) => {
    GameSavingLoader.load(incomeJSON).then((saving) => {
      resolve(saving);
    }, () => {
      resolve(new Error('Ошибка загрузки данных!'));
    });
  });
}
