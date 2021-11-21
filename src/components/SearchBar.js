import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

function SearchBar({ term, onTermChange, onTermSubmit }) {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name="search" style={styles.iconStyle} />
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				style={styles.inputStyle}
				placeholder="Search"
				value={term}
				// onChangeText={(newTerm) => onTermChange(newTerm)}
				//dont actually need to specify param
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: "#f0eeee",
		marginTop: 15,
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: "row",
		marginBottom: 10,
	},
	inputStyle: {
		flex: 1,
		// borderColor: "black",
		// borderWidth: 1,
		// paddingVertical: 0,
		fontSize: 18,
		paddingHorizontal: 5,
	},
	iconStyle: {
		fontSize: 35,
		marginRight: 5,
		alignSelf: "center",
	},
});

export default SearchBar;
