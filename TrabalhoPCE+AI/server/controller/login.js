let LoginSchema = require("../model/login");

module.exports.login = async (email, password) => {
  try {
    let login = await LoginSchema.findOne({ email: email, password: password });
    console.log(login);
    if (login) {
      return { success: true, response: login };
    } else {
      return { success: false, response: 'Invalid email or password' };
    }
  } catch (err) {
    console.log(err);
    return { success: false, response: err };
  }
};


module.exports.signIn = async (email, password) => {
  try {
    let signIn = new LoginSchema({ email, password });
    let response = await signIn.save();
    return { Success: true, response };
  } catch (err) {
    console.log(err);
    return { Success: false, response: err };
  }
};
