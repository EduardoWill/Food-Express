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
        placeholder="useless placeholder"
        style={styles.input}/>
        <TextInput value={text} 
        onChangeText={setText}
        placeholder="useless placeholder"
        style={styles.input}/>
        
   
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
        width: 300,
        height: 60,
        margin: 1,
        borderWidth:0.5,
        padding:20,
        borderRadius: 20,
        borderColor: "#800080",
    }


})

