import { ReactNode, FC } from 'react';
import { Text, TextProps } from 'react-native'

interface ParagraphProps extends TextProps {
    children: ReactNode;
}

const Paragraph: FC<ParagraphProps> = ({ children }) => {
    // map typography to new styles
    return <Text>{children}</Text>
}

export default Paragraph;