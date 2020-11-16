export default class Config{
    private static baseUrl = 'https://5fb1f0e787ed490016ea834e.mockapi.io/api/';

    public static getBaseUrl(): string{
        return this.baseUrl;
    }

    public static setBaseUrl(url: string = ''): void{
        this.baseUrl = url;
    }
}
