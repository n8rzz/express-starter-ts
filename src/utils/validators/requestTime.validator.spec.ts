// eslint-env jest
import { isRecentRequest } from './requestTime.validator';

const fourMinutesInSeconds = 1000 * 60 * 4;
const fiveMinutesInSeconds = 1000 * 60 * 5;
const sevenMinutesInSeconds = 1000 * 60 * 7;

describe('.isMoreThanFiveMinutesOld()', () => {
  describe('when #timestamp is in the past', () => {
    describe('and more than 5 mins old', () => {
      test('should return false', () => {
        const now = new Date().getTime();
        const sevenMinutesAgo = now - sevenMinutesInSeconds;
        const result = isRecentRequest(sevenMinutesAgo);

        expect(result).toBe(false);
      });
    });

    describe('and less than 5 mins old', () => {
      test('should return true', () => {
        const now = new Date().getTime();
        const result = isRecentRequest(now);

        expect(result).toBe(true);
      });
    });
  });

  describe('when #timestamp is in the future', () => {
    describe('and more than 5 mins ahead', () => {
      test('should return false', () => {
        const now = new Date().getTime();
        const fiveMinutesFromNow = now + fiveMinutesInSeconds;
        const result = isRecentRequest(fiveMinutesFromNow);

        expect(result).toBe(false);
      });
    });

    describe('and less than 5 mins old', () => {
      test('should return true', () => {
        const now = new Date().getTime();
        const fourMinutesFromNow = now + fourMinutesInSeconds;
        const result = isRecentRequest(fourMinutesFromNow);

        expect(result).toBe(true);
      });
    });
  });
});
