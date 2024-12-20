import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const TransactionLayout = () => {
  return (
      <Stack>
          <Stack.Screen
              name="transaction-history"
              options={{headerShown: false}}
          />
            <Stack.Screen
              name="transaction-detail"
              options={{headerShown: false}}
          />
    </Stack>
  )
}

export default TransactionLayout