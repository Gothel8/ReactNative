import { useState, useEffect } from 'react';
import { Button, Text, View } from 'react-native';

export const Counter = () => {
    const [even, setEven] = useState(0);
    const [odd, setOdd] = useState(1);

    useEffect(() => {
        console.log("componentDidMount");
    }, []);

    useEffect(() => {
        return () => {
            console.log("componentWillUnmount");
        };
    }, []);

    useEffect(() => {
        console.log("componentDidUpdate");
    }, [odd]);

    useEffect(() => {
        console.log("componentDidUpdate");
    }, [even]);

    return (
        <View>
            <Text>Even: {even}</Text>
            <Text>Odd: {odd}</Text>
            <Button title="Increase Even" onPress={() => setEven(even + 2)} />
            <Button title="Increase Odd" onPress={() => setOdd(odd + 2)} />
        </View>
    );
};       