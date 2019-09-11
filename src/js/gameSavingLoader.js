import GameSaving from './gameSaving';
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load(incomeJSON) {
    const readed = await read(incomeJSON);
    const converted = await json(readed);

    const data = JSON.parse(converted);
    const result = new GameSaving(data.id, data.created, data.userInfo);
    return result;
  }
}
