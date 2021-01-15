import { max_number} from './index';

describe('max_number', () => {
  describe('given an empty array', () => {
    it('returns 0', () => {
      expect(max_number([])).toEqual(0)
    });
  });
});