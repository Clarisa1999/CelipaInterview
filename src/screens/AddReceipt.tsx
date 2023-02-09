import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { TextColors } from '../utils/colors';

export default function AddReceipt() {
  const [restaurantName, setrestaurantName] = useState<string>('');
  const [amount, setAmount] = useState<number>();
  const [date, setDate] = useState<Date>(new Date());

  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <View>
          <Text style={styles.textStyling}>Restaurant Name:</Text>
          <TextInput
            value={restaurantName}
            onChangeText={setrestaurantName}
            style={styles.input}
          />
        </View>
        <View style={{ paddingTop: '10%' }}>
          <Text style={styles.textStyling}>Amount:</Text>
          <TextInput
            value={amount?.toString()}
            onChangeText={(text) => setAmount(parseFloat(text))}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
        <View style={{ paddingTop: '10%' }}>
          <Text style={styles.textStyling}>Date of the receipt:</Text>
          <TextInput value={date?.toDateString()} style={styles.input} />
          <View style={{ paddingTop: '10%' }}>
            <Button
              title="Submit"
              onPress={() => console.log(restaurantName, amount, date)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#ffffff'
  },
  contents: {
    paddingTop: '15%'
  },
  input: {
    borderColor: 'gray',
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  },
  textStyling: {
    color: TextColors.Primary,
    fontSize: 16,
    fontWeight: '600'
  }
});
