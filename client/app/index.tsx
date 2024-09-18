import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';

export default function index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ textAlign: 'center' }}>Index Page of the App</Text>
      <Link
        href=""
        style={{
          padding: 16,
          margin: 8,
          backgroundColor: Colors.PRIMARY,
          color: Colors.BLACK,
        }}
      >
        Go to (tabs)/index
      </Link>
    </View>
  );
}
