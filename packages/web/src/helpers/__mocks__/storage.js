export const getProjectVersion = jest.fn().mockImplementation(() => '1.2.3');
export const getOsmAuthToken = jest
  .fn()
  .mockImplementation(name => `Value of the ${name} token`);
export const getInstanceUrl = jest
  .fn()
  .mockImplementation(() => 'https://www.mapcontrib.xyz');
