import { ColorValue, KeyboardTypeOptions, StyleSheet, TextInput, TextInputProps } from "react-native";

interface Props{
    placeholder?: string;
    keyboardType?: KeyboardTypeOptions | undefined;
    autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
    value?: string;
    password?:boolean;
    onChangeText: TextInputProps['onChangeText'];
    border?:ColorValue;
    color?:ColorValue;
    backgroundColor?:ColorValue;
}

export default function InputCustom(props: Props) {
    return (
        <TextInput
            style={{...styles.input,...{borderColor:props.border??'#141921',color:props.color??'#141921'}}}
            placeholder={props.placeholder}
            keyboardType={props.keyboardType}
            autoCapitalize={props.autoCapitalize}
            value={props.value}
            onChangeText={props.onChangeText}
            placeholderTextColor="#141921"
        />
    )
}

export const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        color: '#141921'
    }
})