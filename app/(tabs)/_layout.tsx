import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabStack = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default TabStack;
