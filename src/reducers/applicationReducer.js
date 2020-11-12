import { applicationConstants } from "../constants/applicationConstants";

const initialState = {

}

export const applicationReducer = (state = initialState, payload) => {
	const { type } = payload;
	switch(type){
		default:
			return state;
	}
}