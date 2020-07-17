const { hello } = require("./hello");

test("Should be defined", () => {
  expect(hello).toBeDefined();
});

test("given abdu as name", () => {
  expect(hello("peter")).toBe("Hello peter");
});
