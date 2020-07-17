const { helloDom } = require("./helloDom");

const appendChild = jest.fn();

document.body.appendChild = appendChild;

test("to append to document.body", () => {
  helloDom();
  expect(appendChild.mock.calls.length).toBe(1);
});
