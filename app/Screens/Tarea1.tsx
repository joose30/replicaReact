import { Alert, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function BanorteApp() {
    return (
        <View style={estilo.contenedor}>
            {/* Imagen del banner */}
            <Image source={require("./banorte-banner.png")} style={estilo.bannerImagen} />

            {/* Contenedor principal */}
            <ScrollView contentContainerStyle={estilo.contenido}>
                {/* Banner con fondo oscuro */}
                <View style={estilo.banner}>
                    <Text style={estilo.bannerTip}>Tip de experto</Text>
                    <Text style={estilo.bannerTexto}>
                        Usa la opción de Ahorro programado para lograr tus metas.
                    </Text>
                </View>

                {/* Saludo */}
                <View style={estilo.saludo}>
                    <Text style={estilo.saludoTexto}>Hola, Jose</Text>
                    <Text style={estilo.subTexto}>¿Qué vamos a hacer?</Text>
                </View>

                {/* Menú de opciones en 3x2 */}
                <View style={estilo.menu}>
                    <View style={estilo.row}>
                        <MenuItem icon="user" text="Mis cuentas" />
                        <MenuItem icon="exchange" text="Transferir o pagar" />
                        <MenuItem icon="university" text="Retirar dinero" />
                    </View>
                    <View style={estilo.row}>
                        <MenuItem icon="credit-card" text="Tarjeta Digital" />
                        <MenuItem icon="mobile" text="Token Celular" />
                        <MenuItem icon="th" text="Más Apps" />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

// Componente de cada opción del menú
interface MenuItemProps {
    icon: string;
    text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text }) => {
    return (
        <TouchableOpacity style={estilo.menuItem} onPress={() => Alert.alert(text)}>
            <Icon name={icon} size={35} color="#333" />
            <Text style={estilo.menuTexto}>{text}</Text>
        </TouchableOpacity>
    );
};

// **Estilos con ajuste en la imagen**
const estilo = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: "#ECECEC",
    },
    bannerImagen: {
        width: "100%",
        height: 250, // Ajusta la altura para la nueva imagen
        resizeMode: "cover", // Se asegura de llenar el espacio sin recortes
    },
    contenido: {
        flexGrow: 1,
        alignItems: "center",
        paddingVertical: 20,
    },
    banner: {
        backgroundColor: "#333333",
        width: "90%",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
    },
    bannerTip: {
        color: "#FF6666",
        fontWeight: "bold",
    },
    bannerTexto: {
        color: "#FFFFFF",
        textAlign: "center",
    },
    saludo: {
        backgroundColor: "#D1D1D1",
        width: "90%",
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        alignItems: "center",
    },
    saludoTexto: {
        fontSize: 18,
        color: "#333",
        fontWeight: "bold",
    },
    subTexto: {
        color: "#666",
    },
    menu: {
        width: "90%",
        marginTop: 20,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    menuItem: {
        width: "30%",
        backgroundColor: "#F5F5F5",
        padding: 20,
        borderRadius: 20,
        alignItems: "center",
    },
    menuTexto: {
        color: "#333",
        marginTop: 5,
        fontSize: 14,
        textAlign: "center",
    },
});
