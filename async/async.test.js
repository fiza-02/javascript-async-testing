import { it, expect, test } from "vitest";

import { generateToken } from "./async";

it("should generate a token value", (done) => {
	const testUserEmail = "test@email.com";
	generateToken(testUserEmail, (err, token) => {
		try {
			expect(err).toBeNull(); // Check for no errors
			expect(token).toBeDefined();
			done(); // Signal that the asynchronous part of the test is complete
		} catch (err) {
			done(err); // Signal that an error occurred, passing the error to the testing framework
		}
	});
});
