import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

function SearchScreen() {
	const [term, setTerm] = useState("");
	const [fetch, results, errorMessage, setErrorMessage] = useResults();

	const filterResultsByPrice = (price) => {
		// return results.filter((item) => item.price === price);
		console.log("fil");
		const filtered = results.filter((item) => item.price === price);
		return filtered;
	};

	// const searchApi = async (searchTerm) => {
	// 	try {
	// 		console.log("api");
	// 		console.log("st", searchTerm);
	// 		// const res = await yelp.get("/search", {
	// 		// 	params: {
	// 		// 		limit: 50,
	// 		// 		searchTerm,
	// 		// 		location: "san jose",
	// 		// 	},
	// 		// });
	// 		// setResults(res.data.businesses);
	// 		// setErrorMessage("");
	// 		// console.log("found", res.data.businesses);
	// 		// console.log("found amount", res.data.businesses.length);
	// 	} catch (err) {
	// 		console.log(err);
	// 		setErrorMessage("something went wrong");
	// 	}
	// };

	return (
		// when view goes over the bottom end and cant scroll, use flex:1
		// or just use fragment <></> lmao
		// <View style={{ flex: 1 }}>
		<>
			{/* <SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm)} onTermSubmit={searchApi} /> */}
			<SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => fetch(term)} />
			{errorMessage !== "" && <Text>{errorMessage}</Text>}
			{/* <Text>We have found {results.length} reults</Text> */}
			<ScrollView>
				<ResultList results={filterResultsByPrice("$")} title="Cost Effective" />
				<ResultList results={filterResultsByPrice("$$")} title="Bit Pricier" />
				<ResultList results={filterResultsByPrice("$$$")} title="Big Spender" />
			</ScrollView>
		</>
		// </View>
	);
}

const styles = StyleSheet.create({});

export default SearchScreen;
