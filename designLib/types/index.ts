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

type ValueText =
  | string
  | 'xxSmall'
  | 'xSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xLarge'
  | 'xxLarge';

type IconText = string | 'small' | 'medium' | 'large';

type ValuesHash = {
  [key in ValueText]: number;
};

type IconHash = {
  [key in IconText]: number;
};
