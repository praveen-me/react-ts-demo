export interface Contact {
	firstName: string,
	lastName: string,
	dateOfBirth: string,
	phoneNumber: number
}

export interface InitialState {
	contacts : Array<Contact>
}
