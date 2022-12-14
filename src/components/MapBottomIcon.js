import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";


export default function MapBottomIcon ({ imageUrl, iconText }) {
    return (
      <View style={[styles.iconContainer, styles.shadowProp]}>
        <View style={styles.iconImageContainer}>
          <Image
            style={styles.iconImage}
            source={imageUrl}
          />
        </View>
        <View style={styles.iconTextContainer}>
          <Text style={styles.iconText}>{ iconText }</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 50,
  },
  iconImageContainer: {
    width: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  iconImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  iconTextContainer: {
    backgroundColor: "white",
    position: "absolute",
    borderRadius: 20,
    paddingTop: 3,
    paddingBottom: 3,
    bottom: -5,
    width: 82,
  },
  iconText: {
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
});