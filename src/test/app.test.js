import loadSaveData from '../js/app';

test('should return object', async () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  const result = await loadSaveData('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
  expect(result).toEqual(expected);
});

test('should return ERROR', async () => {
  const expected = Error('Ошибка загрузки данных!');

  const result = await loadSaveData('dsgdsg');
  expect(result).toEqual(expected);
});
