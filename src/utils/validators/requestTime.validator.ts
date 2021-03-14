/**
 * used to evaluate a request timestamp and validate if its a recent request
 *
 * @param timestamp {number}  time to evaluate, expressed as number of milliseconds since Unix Epoch
 */
export const isRecentRequest = (timestamp: number): boolean => {
  const now = new Date().getTime();
  const fiveMinutesInSeconds = 1000 * 60 * 5;
  const fiveMinutesAgo = now - fiveMinutesInSeconds;
  const fiveMinutesFromNow = now + fiveMinutesInSeconds;

  return timestamp > fiveMinutesAgo && timestamp < fiveMinutesFromNow;
};
