import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import colors from "@/global/colors";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.background,
        tabBarStyle: {
          backgroundColor: colors.text,
        height: 60,
        paddingBottom: 8,
    },
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: '600',
    },
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Pagina 1',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pagina-2"
        options={{
          title: 'Pagina 2',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="thumbs-up" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pagina-3"
        options={{
          title: 'Pagina 3',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
