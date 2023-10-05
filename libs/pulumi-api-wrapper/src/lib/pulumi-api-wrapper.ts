export function pulumiApiWrapper(): string {
  return 'pulumi-api-wrapper';
}
const TOKEN = process.env['PULUMI_API_TOKEN'];

const baseUrl = 'https://api.pulumi.com'

export const listStacks = () => {

}