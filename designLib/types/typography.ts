export enum RNTextEnum {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    p1 = 'p1',
    p2 = 'p2',
}

export type TypographyValues = {
    fontFamily: Record<string, string>;
    fontSize: Record<string, number>;
    fontWeight: Record<string, string>;
    lineHeight: Record<string, number>;
}

export type TypographyConfig = {
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
}