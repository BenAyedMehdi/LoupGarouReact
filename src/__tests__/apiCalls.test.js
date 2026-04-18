const mockGet = jest.fn();
const mockPost = jest.fn();

jest.mock('axios', () => ({
  get: mockGet,
  post: mockPost,
}));

const apiCalls = require('../apiCalls').default;

describe('apiCalls', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getAllCards returns data on success', async () => {
    const mockCards = [
      { cardId: '1', cardName: 'Werewolf', description: 'desc', imageName: 'werewolf' },
      { cardId: '2', cardName: 'Villager', description: 'desc', imageName: 'villager' },
    ];
    mockGet.mockResolvedValue({ data: mockCards });

    const result = await apiCalls.getAllCards();

    expect(result.data).toEqual(mockCards);
    expect(result.error).toBeNull();
  });

  test('getAllCards returns error on failure', async () => {
    mockGet.mockRejectedValue(new Error('Network Error'));

    const result = await apiCalls.getAllCards();

    expect(result.data).toBeNull();
    expect(result.error).toBeTruthy();
  });

  test('createGame returns data on success', async () => {
    const mockGame = { gameId: 'abc123', gameCode: 'XYZ', numberOfPlayers: 4 };
    mockPost.mockResolvedValue({ data: mockGame });

    const result = await apiCalls.createGame({ numberOfPlayers: 4 });

    expect(result.data).toEqual(mockGame);
    expect(result.error).toBeNull();
  });
});