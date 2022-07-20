import {View, Text, StyleSheet, Switch} from 'react-native';
import { useEffect, useState } from 'react';
export default function SignIn() {

    const [isSignUp, setIsSignUp] = useState(false);

    useEffect(() => {




    }, [isSignUp]);

    return (
        <View style={styles.container}>
            <View style={styles.switchContainer}>
                <Text>Sign In</Text>
                <Switch value={isSignUp} onValueChange={() => setIsSignUp(!isSignUp)}/>
                <Text>Sign Up</Text>
            </View>

            {
                isSignUp ? 
                <View style={styles.signUpContainer}> 
                    <Text>Sign Up</Text>
                </View> 
                : 
                <View style={styles.signInContainer}>
                    <Text>Sign In</Text>
                </View>
            }



        </View>
    );

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%"
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        width: "50%"
    }

})