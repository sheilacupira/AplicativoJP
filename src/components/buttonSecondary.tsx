import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps } from "react-native";

interface Props {
    titulo: string;
    customStyle?: object;
    onPress?: TouchableOpacityProps['onPress'];
}

export default function ButtonSecondary(props: Props) {
    return (
        <TouchableOpacity
            style={[styles.button, props.customStyle]} // Combina estilos
            onPress={props.onPress}>
            <Text style={[styles.text]}>{props.titulo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        fontSize: 32,
        fontWeight: 'bold',
        justifyContent: 'center',
        padding: 12,
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#141921',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        color: '#141921', // Ajuste a cor do texto para contraste
        fontWeight: 'bold',
    },
})