import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
    return (
        <View style={estilo.contenedor}>
            <Text style={estilo.titulo}>PODAI</Text>
            <Text style={estilo.labels}>Usuario</Text>
            <TextInput style={estilo.input}/>
            <Text style={estilo.labels}>Password</Text>
            <TextInput style={estilo.input} />
            <Button title="Login" color={'#4B2E1E'} onPress={()=>{Alert.alert('Logueando')}} />

        </View>
    )
}

const estilo = StyleSheet.create({
    contenedor:{
            backgroundColor: '#EDE0D4',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
    },
    titulo:{
        fontSize: 25,
        marginBottom: 20,
        color: '#4B2E1E',

    },
    input:{
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
    },
    labels:{
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    button:{
        backgroundColor: '#4B2E1E',
        color: 'white',
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }

})