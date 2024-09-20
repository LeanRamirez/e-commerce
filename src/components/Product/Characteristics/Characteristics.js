import React from 'react';
import { ScrollView, Text } from 'react-native';
import Markdown from 'react-native-simple-markdown';


export function Characteristics({ text }) {
    return (
        <ScrollView>
            <Markdown >
                {text}
            </Markdown>
        </ScrollView>
    );
}

