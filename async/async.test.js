import { it, expect, test } from "vitest";

import { generateToken, generateTokenPromise } from "./async";

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

//without done parameter

it("should generate a token value", async () => {
	const testUserEmail = "test@email.com";
	const token = await generateTokenPromise(testUserEmail);
	// you expect the resolved value of the promise returned by function call to be something
	// This guarantees that Vitest / Jest wait for the promise to be resolved. use return the promise assertion in your tests

	// You don't need to `return` when using `async` / `await` (since a function annotated with `async` returns a promise implicitly).
	expect(token).toBeDefined();
});
