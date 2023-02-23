/**
 * Generate a random mobile number in italian locale
 */
export const useRandomMobileNumber = () => {
	const randomString = Math.random().toString().slice(2, 12);

	const randomMobileNumber = `+39${randomString}`;

	return randomMobileNumber;
};
