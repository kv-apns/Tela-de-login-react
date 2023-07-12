import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles";


export function Home(){
    
    return (
        
        <View style={styles.container}>

            <View style={styles.secondcontainer}>
                <Text style={styles.login}>
                Loguin
                </Text>

                <View>
                    {/* Campo do user */}
                    <Text style={styles.userKey}>Usuário</Text>
                    <TextInput style={styles.infoInput}></TextInput>

                    {/* Campo da senha */}
                    <Text style={styles.userKey}>Senha</Text>
                    <TextInput style={styles.infoInput}></TextInput>

                    {/* Campo do botão */}
                    <TouchableOpacity style={styles.button}>

                        <Text style={styles.buttonlog}>Login</Text>
                    
                    </TouchableOpacity>

                    {/* Campo de recuperação de senha */}
                    <Text style={styles.notKey}>Esqueceu a senha?</Text>

                </View>
            </View>


        </View>

    );
}