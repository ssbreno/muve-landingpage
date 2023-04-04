export function checkEnvUrl(): string {
  const properUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://www.firemagic.com.br/'
      : 'http://localhost:3000/';

  return properUrl;
}
