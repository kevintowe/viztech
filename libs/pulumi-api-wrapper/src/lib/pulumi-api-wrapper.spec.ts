import { pulumiApiWrapper } from './pulumi-api-wrapper';

describe('pulumiApiWrapper', () => {
  it('should work', () => {
    expect(pulumiApiWrapper()).toEqual('pulumi-api-wrapper');
  });
});
