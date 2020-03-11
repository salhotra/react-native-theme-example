import React from "react";
import { Text, View, Switch, StyleSheet } from "react-native";

import { withTheme } from "./Theme/themeProvider";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  switch: {
    margin: 10
  }
});

const HomPage = ({ theme, toggleDarkTheme }) => {
  return (
    <View
      style={[styles.container, { backgroundColor: theme.primaryBackground }]}
    >
      <Switch
        style={styles.switch}
        onValueChange={toggleDarkTheme}
        value={theme.id === 'dark'}
      />
      <Text style={{ color: theme.primaryForeground }}>Theme: {theme.id}</Text>
    </View>
  );
};

export default withTheme(HomPage);
