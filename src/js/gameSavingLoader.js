import GameSaving from './gameSaving';
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load(incomeJSON) {
    return new Promise((resolve, reject) => {
      read(incomeJSON)
        .then(readed => json(readed))
        .then((converted) => {
          const data = JSON.parse(converted);
          const result = new GameSaving(data.id, data.created, data.userInfo);
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
