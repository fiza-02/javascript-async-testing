import { it, expect, test } from "vitest";

import { generateToken } from "./async";

it("should generate a token value", (done) => {
	const testUserEmail = "test@email.com";
	generateToken(testUserEmail, (err, token) => {
		// we want to get some value without existing not undefined
		try {
			expect(token).toBeDefined();
			// expect(token).toBe(2);
			done();
		} catch (err) {
			done(err);
		}
	});
});
