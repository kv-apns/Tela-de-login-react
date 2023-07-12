import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    container: {
        // Toda a tela 
        backgroundColor: "#464D6A",
        flex: 1
    },
    secondcontainer:{
        // painel de loguin
        backgroundColor: "#353B51",
        width: 340,
        marginTop: 200,
        margin: 26,
        borderRadius: 6

    },
    login:{
        color: "#C9CCD6",
        margin: 35,
        fontSize: 22,
        width: 80,
        marginBottom: 50
        
    },
    userKey:{
        color: "#C9CCD6",
        marginLeft: 40,
        fontSize: 13
    },
    infoInput:{
        marginLeft: 40,
        color: "#FFFFFF",
        borderBottomColor: "#C9CCD6",
        borderBottomWidth: 2,
        marginRight: 40,
        marginBottom: 15

    },
    button:{
       backgroundColor: "#A33852",
       marginLeft: 40,
       marginTop: 10,
       marginRight: 40,
       width: 260,
       height: 45,
       alignItems: "center",
       justifyContent: "center",
       borderRadius: 6
    },
    buttonlog:{
        color: "#FFFFFF"
    },
    notKey:{
        color: "#C9CCD6",
        fontSize: 12,
        textAlign: "center",
        marginTop: 8
    }

})