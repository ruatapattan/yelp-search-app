import { useNavigation } from "@react-navigation/native";
// import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultsDetail from "./ResultsDetail";

function ResultList({ title, results }) {
	const navigation = useNavigation();

	return (
		<>
			{results.length ? (
				<View style={styles.container}>
					<Text style={styles.title}>{title}</Text>
					{/* <Text>{results.length}</Text> */}
					<FlatList
						horizontal
						data={results}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<TouchableOpacity
								onPress={() => navigation.navigate("ResultsShow", { name: item.name, id: item.id })}
							>
								<ResultsDetail result={item} />
							</TouchableOpacity>
						)}
						showsHorizontalScrollIndicator={false}
					/>
				</View>
			) : null}
		</>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 15,
		marginBottom: 5,
	},
	container: {
		marginBottom: 10,
	},
});

export default ResultList;
