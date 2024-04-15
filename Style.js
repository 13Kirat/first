import { StyleSheet } from 'react-native';

export default Style = StyleSheet.create({
    textbox: {
        color: 'red',
        backgroundColor: 'yellow',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    text: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    textOnly: {
        fontSize: 20,
        color: 'black',
        paddingBottom: 0,
    },
    container: {
        marginTop: 25,
        paddingTop: 25,
        borderTopWidth: 10,
    },
    textinput: {
        fontSize: 20,
        color: 'red',
        borderWidth: 2,
        borderColor: 'blue',
        margin: 10,
        marginHorizontal: 30,
        paddingHorizontal: 20,
        borderRadius: 30,
    },
    btn: {
        margin: 10,
        marginHorizontal: 30,
    },
    item: {
        fontSize: 24,
        padding: 5,
        color: 'red',
        backgroundColor: 'lightblue',
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
    },
    containerFlex: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    itemFlex: {
        fontSize: 24,
        backgroundColor: 'blue',
        color: 'white',
        margin: 5,
        padding: 5,
        width: 120,
        height: 120,
        textAlignVertical: 'center',
        textAlign: 'center',
        // borderWidth:1,
        // borderColor:'black',
    }
});
