import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer WW_VRlDOWNYWMs9JmfHqV7O4-kuhOZJQ5YLbtnp5ySm_2uCVM7wbsE7D_NfDAQP4VvA-ogO8vXz2vCciHYqonAouGf0FqM6mT-yupH0obIMzd0uLi3f3V7Hm9J-YYXYx",
	},
});
