import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const fetch = async (searchTerm) => {
		try {
			console.log("api");
			console.log("st us", searchTerm);
			const res = await yelp.get("/search", {
				params: {
					limit: 50,
					term: searchTerm,
					location: "san jose",
				},
			});
			setResults(res.data.businesses);
			setErrorMessage("");
			// console.log("found", res.data.businesses);
			// res.data.businesses.forEach((item) => console.log("price", item.price));
			console.log("found amount", res.data.businesses.length);
			// console.log("found", res.data.businesses);
		} catch (err) {
			console.log(err);
			setErrorMessage("something went wrong");
		}
	};

	useEffect(() => {
		fetch();
	}, []);

	return [fetch, results, errorMessage, setErrorMessage];
};
