const { capitalizeWords, filterActiveUsers, logAction } = require('../index')
// capitalizeWords

// filterActiveUsers
describe("filterActiveUsers", () => {
  test("this should return only users that are active", () => {
    const users = [
      { name: "Eugene", active: true },
      { name: "Kegash", active: false },
      { name: "Jaseh", active: true }
    ];

    const result = filterActiveUsers(users);

    expect(result).toEqual([
      { name: "Eugene", active: true },
      { name: "Jaseh", active: true }
    ]);
  });

  test("should return an empty array when all users are inactive", () => {
    const users = [
      { name: "Eugene", active: false },
      { name: "Kegash", active: false }
    ];

    const result = filterActiveUsers(users);

    expect(result).toEqual([]);
  });

  test("should return an empty array when the input is an empty array", () => {
    const result = filterActiveUsers([]);

    expect(result).toEqual([]);
  });
});


// logAction
describe("logAction", () => {

  test("should create a log message when both action and username are given", () => {
    const log = logAction("login", "Eugene");

    expect(log.includes("Eugene performed login")).toBe(true);
  });

  test("should show undefined in log when action is missing", () => {
    const log = logAction(undefined, "Eugene");

    expect(log.includes("Eugene performed undefined")).toBe(true);
  });

  test("should show undefined in log when username is missing", () => {
    const log = logAction("login", undefined);

    expect(log.includes("undefined performed login")).toBe(true);
  });

  test("should handle empty action string", () => {
    const log = logAction("", "Eugene");

    expect(log.includes("Eugene performed ")).toBe(true);
  });

  test("should handle empty username string", () => {
    const log = logAction("login", "");

    expect(log.includes(" performed login")).toBe(true);
  });

});
