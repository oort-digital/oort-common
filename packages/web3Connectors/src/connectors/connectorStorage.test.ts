import { connectorStorage } from "./connectorStorage";

const lsKey = 'cur_connector';

test('read bad cur_connector must return undefined', async () => {
  localStorage.setItem(lsKey, 'Injected')
  const result = connectorStorage.read()
  expect(result).toBeUndefined()
});

