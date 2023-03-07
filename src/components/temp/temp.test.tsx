import { sum } from './temp';

describe('SearchAndFilters', () => {
  beforeEach(() => jest.clearAllMocks());
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
