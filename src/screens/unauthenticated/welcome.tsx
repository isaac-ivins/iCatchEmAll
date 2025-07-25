import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const WelcomeScreen: FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.font}>Welcome Screen</Text>
        </View>
    )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    font: {
        color: 'black',
        fontSize: 40,
    }
});