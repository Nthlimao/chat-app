import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    init: {
        flex: 1,
    },
    background: {
        flex: 1,
        backgroundColor: '#031D2E',
    },
    header: {
        paddingVertical: 40,
        paddingHorizontal: 30,
    },
    title: {
        fontFamily: 'GoogleSans-Regular',
        fontSize: 42,
        color: '#E0EAC7',
        paddingBottom: 10,
    },
    subtitle: {
        fontFamily: 'GoogleSans-Regular',
        fontSize: 18,
        color: '#E0EAC7',
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#578199',
        padding: 16,
        marginBottom: 10,
        borderRadius: 4,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'GoogleSans-Bold',
        letterSpacing: 1,
        textTransform: 'uppercase',
        fontSize: 14,
    },
    pressed: {
        opacity: 0.8,
        // backgroundColor: 'red',
    },
    singupBtn: {
        backgroundColor: '#274C69',
    },
    footer: {
        backgroundColor: '#031D2E',
        padding: 20,
        paddingBottom: 10,
    },
});

export default styles;
