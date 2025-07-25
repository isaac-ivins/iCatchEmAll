import { StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome Screen</Text>
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
        fontSize: 42
    },
});