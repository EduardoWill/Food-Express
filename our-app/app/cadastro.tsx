import { StyleSheet, TextInput, View, Text} from "react-native";
import React, {useState} from "react";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";


export default function Cadastro () {
const [text,setText] = useState("");
    return( 
<ThemedView style={styles.container}>
    
        <Text>Bah</Text>
        <TextInput value={text} 
        onChangeText={setText}
        placeholder="Texto"
        style={styles.input}>
        </TextInput>
   
</ThemedView>
);


}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
    },
    input: {

        borderWidth:1,
    }


})

