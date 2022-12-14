import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import MapScreen from "../screens/MapScreen";
import ProfileStack from "./ProfileStack";

// Modals
import CommunitiesModal from "../modals/CommunitiesModal";
import OrganizationModal from "../modals/OrganizationModal";
import MembershipAlert from "../modals/MembershipAlert";

const Stack = createStackNavigator();

export default function MapStack() {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ProfileStack" component={ProfileStack} options={{ headerShown: false }} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal', headerShown: false, cardStyle:{ backgroundColor: "rgba(255, 255, 255, 0)", opacity: 0.99 } }}>
        <Stack.Screen name="Communities" component={CommunitiesModal} />
        <Stack.Screen name="Organization" component={OrganizationModal} />
        <Stack.Screen name="Membership" component={MembershipAlert} />
      </Stack.Group>
    </Stack.Navigator>
  );
}