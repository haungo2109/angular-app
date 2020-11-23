export default class Config {
  private static baseUrl = 'http://localhost:4000/api';

  public static getBaseUrl(): string {
    return this.baseUrl;
  }

  public static setBaseUrl(url: string = ''): void {
    this.baseUrl = url;
  }
  public static getUrl(path: string = '/'): string {
    return this.baseUrl + path;
  }
}
