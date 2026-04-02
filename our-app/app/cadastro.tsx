import { StyleSheet, TextInput, View, Text} from "react-native";
import React, {useState} from "react";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { salvarUsuario } from "@/services/firebase";
import { Button } from "react-native";




export default function Cadastro () {
const [nome,setNome] = useState("");
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [conSenha, conSetSenha] = useState ("");
const [cpf, setCpf] = useState("");
const [num, numSet] = useState("");

const handleCadastro = () => {
    if (!nome || !email || !senha) {
      console.log("Preencha os campos obrigatórios");
      return;
    }

    if (senha !== conSenha) {
      console.log("Senhas não coincidem ");
      return;
    }

    const dadosUsuario = {
      nome,
      email,
      senha,
      cpf,
      telefone: num,
    };

    salvarUsuario(dadosUsuario);
  };

    return( 
<ThemedView style={styles.container}>
    
        <Text>Titúlo</Text>

        <TextInput value={nome} 
        onChangeText={setNome}
        placeholder="Nome Completo"
        style={styles.input}/>

        <TextInput value={email} 
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"/>

          <TextInput value={senha} 
        onChangeText={setSenha}
        placeholder="Senha"
        secureTextEntry={true}
        style={styles.input}/>

          <TextInput value={conSenha} 
        onChangeText={conSetSenha}
        placeholder="Confirme sua Senha"
        secureTextEntry={true}
        style={styles.input}/>

          <TextInput value={cpf} 
        onChangeText={setCpf}
        placeholder="CPF"
        keyboardType ="numeric"
        style={styles.input}
        />

          <TextInput value={num} 
        onChangeText={numSet}
        placeholder="Número de Celular"
        keyboardType = "phone-pad"
        style={styles.input}/>
        
        <Button title="Cadastrar" onPress={handleCadastro} />

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

