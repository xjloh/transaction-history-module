import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TouchableOpacity, View, StyleSheet, Text } from 'react-native';

interface Transaction {
  id: number;
  amount: number;
  date: string;
  description: string;
  type: 'debit' | 'credit';
}

const Stack = createNativeStackNavigator({
  initialRouteName: 'TransactionHistory',
  screens: {
    History: TransactionHistory,
    Details: TransactionDetails,
  },
});

function TransactionHistory() {
    const [transactions] = useState<Transaction[]>([
        { id: 1, amount: 100, date: '2023-11-22', description: 'Groceries', type: 'debit' },
        { id: 2, amount: 50, date: '2023-11-21', description: 'Coffee Shop', type: 'debit' },
        { id: 3, amount: 200, date: '2023-11-20', description: 'Restaurant', type: 'debit' },
        { id: 4, amount: 150, date: '2023-11-19', description: 'Clothing', type: 'debit' },
        { id: 5, amount: 30, date: '2023-11-18', description: 'Transportation', type: 'debit' },
        { id: 6, amount: 80, date: '2023-11-17', description: 'Entertainment', type: 'debit' },
        { id: 7, amount: 120, date: '2023-11-16', description: 'Electronics', type: 'debit' },
        { id: 8, amount: 40, date: '2023-11-15', description: 'Groceries', type: 'debit' },
        { id: 9, amount: 100, date: '2023-11-14', description: 'Salary', type: 'credit' },
        { id: 10, amount: 50, date: '2023-11-13', description: 'Refund', type: 'credit' },
        { id: 11, amount: 75, date: '2023-11-12', description: 'Gift', type: 'credit' },
        { id: 12, amount: 25, date: '2023-11-11', description: 'Interest', type: 'credit' },
        { id: 13, amount: 15, date: '2023-11-10', description: 'Cashback', type: 'credit' },
        { id: 14, amount: 10, date: '2023-11-09', description: 'Reimbursement', type: 'credit' },
        { id: 15, amount: 35, date: '2023-11-08', description: 'Rental Income', type: 'credit' },
        { id: 16, amount: 20, date: '2023-11-07', description: 'Dividend', type: 'credit' },
        { id: 17, amount: 60, date: '2023-11-06', description: 'Bonus', type: 'credit' },
        { id: 18, amount: 45, date: '2023-11-05', description: 'Commission', type: 'credit' },
        { id: 19, amount: 85, date: '2023-11-04', description: 'Investment Returns', type: 'credit' },
        { id: 20, amount: 90, date: '2023-11-03', description: 'Side Hustle Earnings', type: 'credit' },
    ]);

    const navigation = useNavigation();
  
    return (
      <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
              <FlatList
                  data={transactions}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        padding: 10,
                        margin: 5,
                        borderBottomWidth: 1,
                        alignItems: 'center',
                        alignContent: 'space-between'
                      }}
                          onPress={() => { navigation.navigate('Details', { item })}}
                    >
                        <View style={{ flex: 1 }}>
                          <Text style={{fontSize: 18}}>{item.description}</Text>
                          <Text style={{fontSize: 14}}>{item.type}</Text>
                          <Text style={{fontSize: 14}}>{item.date}</Text>
                        </View>
                        <Text style={{fontSize: 20}}>${item.amount}</Text>
                      </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item.id.toString()}
              />
          </SafeAreaView>
      </SafeAreaProvider>
    )
}

function TransactionDetails({ route } : any) {
    const { item } = route.params;

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Transaction Details</Text>
            <View style={styles.details}>
                <Text style={styles.detailText}>Description: {item.description}</Text>
                <Text style={styles.detailText}>Amount: ${item.amount}</Text>
                <Text style={styles.detailText}>Date: {item.date}</Text>
                <Text style={styles.detailText}>Type: {item.type}</Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    details: {
        marginBottom: 20,
    },
    detailText: {
        fontSize: 16,
        marginBottom: 5,
    },
});

const RootLayout = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="History"
                component={TransactionHistory}
                options={{title: 'Transaction History'}}
            />
            <Stack.Screen
                    name="Details"
                    component={TransactionDetails}
                    options={{title: 'Transaction Details'}}
            />
        </Stack.Navigator>
    );
};

export default RootLayout