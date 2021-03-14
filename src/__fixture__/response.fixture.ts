// eslint-env jest
export const responseFixture = (): { status: jest.Mock; send: jest.Mock; end: jest.Mock } => {
  const res = {} as any;
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.end = jest.fn().mockReturnValue(res);

  return res;
};
