import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

function ResultsShowScreen({ route }) {
	const [result, setResult] = useState(null);
	const id = route.params.id;
	// console.log("id:", id);

	const getResult = async (id) => {
		try {
			const res = await yelp.get(`/${id}`);
			setResult(res.data);
			// console.log(res.data);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		getResult(id);
	}, []);

	if (!result) {
		return null;
	}

	return (
		<View>
			{/* <Text>results show</Text> */}
			<FlatList
				data={result.photos}
				keyExtractor={(item) => item}
				renderItem={({ item }) => {
					return <Image style={styles.image} source={{ uri: item }} />;
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		height: 200,
		width: 300,
		marginBottom: 10,
	},
});

export default ResultsShowScreen;
