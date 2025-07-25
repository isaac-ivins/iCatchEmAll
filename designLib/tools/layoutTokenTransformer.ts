import { LayoutThemeType, ValuesHash } from "../types/layout"
import { values, iconValues, baselineWidth, baselineHeight } from '../tokens/layout.json';

const getLayoutFromClientViewportDeminsions = (width: number, height: number): LayoutThemeType => {
    const scaledX: ValuesHash = {};
    const scaledY: ValuesHash = {};
    const scaledIcons: ValuesHash = {};

    const scale = (size: number) => Math.round((width / baselineWidth) * size)
    const verticalScale = (size: number) => Math.round((height / baselineHeight) * size)

    Object.entries(values).forEach(([key, value]) => {
        scaledX[key as keyof typeof values] = scale(value);
        scaledY[key as keyof typeof values] = verticalScale(value);
    });

    Object.entries(iconValues).forEach(([key, value]) => {
        scaledIcons[key as keyof typeof values] = scale(value);
    });

    return {
        scaledX,
        scaledY,
        scale,
        verticalScale,
        icon: scaledIcons,
        window: {
            width,
            height,
        }
    }
}

export default getLayoutFromClientViewportDeminsions;