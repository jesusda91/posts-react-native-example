import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeAsyncData = async (key, value) => {
	try {
		const jsonValue = JSON.stringify(value)
		await AsyncStorage.setItem(key, jsonValue)
		return null;
	} catch (e) {
		// saving error
		return e;
	}
}

export const getAsyncData = async (key) => {
	try {
		const jsonValue = await AsyncStorage.getItem(key)
		return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch (e) {
		// error reading value
	}
}