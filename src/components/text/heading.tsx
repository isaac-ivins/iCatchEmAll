import { ReactNode, FC } from 'react';
import { Text, TextProps } from 'react-native'

interface HeadingProps extends TextProps {
    children: ReactNode;
}

const Heading: FC<HeadingProps> = ({ children }) => {
    // map typography to new styles
    return <Text>{children}</Text>
}

export default Heading;