import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler'

interface Transaction {
  id: number;
  amount: number;
  date: string;
  description: string;
  type: 'debit' | 'credit';
}

const TransactionHistory = () => {
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

    return (
        <GestureHandlerRootView>
            <SafeAreaProvider>
                <SafeAreaView>
                    <FlatList
                        data={transactions}
                        renderItem={({item}) => (
                            <View>
                                <Text>Amount: ${item.amount}</Text>
                                <Text>Date: {item.date}</Text>
                                <Text>Description: {item.description}</Text>
                                <Text>Type: {item.type}</Text>
                            </View>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </SafeAreaView>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    )
}

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
});

export default TransactionHistory