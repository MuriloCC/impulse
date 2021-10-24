import React, { useEffect } from "react";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { ListMessage } from "../../components/ListMessage";
import { SignIn } from "../../components/SignIn";
import { SendMessageForm } from "../../components/SendMessageForm";
import { useAuth } from "../../hooks/auth";

export function Home(){
    const { user } = useAuth();
    return(
        <KeyboardAvoidingView 
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <View style={styles.container}>
                <Header />
                <ListMessage />
                {user? <SendMessageForm /> : <SignIn />}
            </View>
        </KeyboardAvoidingView>
    );
}