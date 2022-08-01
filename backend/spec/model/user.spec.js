const User = require('../../models/user');

describe('User model', () => {
  it('create an instance of the User Model Schema', () => {
    const user = new User({
      username: "Test User",
      email: "example@example.com",
      password: "123456"
    })
    expect(user.username).toEqual("Test User");
    expect(user.email).toEqual("example@example.com");
    expect(user.password).toEqual("123456");
  });
})