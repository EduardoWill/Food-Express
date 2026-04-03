import { StyleSheet, TextInput, View, Text, Button, Alert} from "react-native";
import React, {useState} from "react";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";


export default function Cadastro () {
const [nome,setNome] = useState("");
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [conSenha, conSetSenha] = useState ("");
const [cpf, setCpf] = useState("");
const [num, numSet] = useState("");

const handleSubmit = () => {
  if (!nome || !email || !senha || !conSenha || !cpf || !num) {
    Alert.alert("Erro", "Por favor, preencha todos os campos.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (nome.length >= 10 && nome.length <= 60) {
    Alert.alert("Erro", "O nome deve conter entre 10 e 60 caracteres.");
    return;
  } 
  
  if (!emailRegex.test(email)) {
    Alert.alert("Erro", "Email inválido.");
    return;
  }

  if (senha.length < 6) {
    Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres.");
    return;
  }

  if (senha !== conSenha) {
    Alert.alert("Erro", "As senhas não coincidem.");
    return;
  }

  const cpfOnlyDigits = cpf.replace(/\D/g, "");
  if (cpfOnlyDigits.length !== 11) {
    Alert.alert("Erro", "CPF deve conter 11 dígitos.");
    return;
  }

  Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
};

    return( 
<ThemedView style={styles.container}>
    
        <Text>Título</Text>

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
        
        <Button
          title="Enviar" onPress={handleSubmit}
        />


   
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

