export type LayoutThemeType = {
  scale: (size: number) => number;
  verticalScale: (size: number) => number;
  scaledX: ValuesHash;
  scaledY: ValuesHash;
  icon: IconHash;
  window: {
    width: number;
    height: number;
  };
};

export type ValueText =
  | string
  | 'xxxSmall'
  | 'xxSmall'
  | 'xSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xLarge'
  | 'xxLarge'
  | 'xxxLarge';

export type IconText = string | 'small' | 'medium' | 'large';

export type ValuesHash = {
  [key in ValueText]: number;
};

export type IconHash = {
  [key in IconText]: number;
};
