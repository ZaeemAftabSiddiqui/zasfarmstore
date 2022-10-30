import connentDb from "../../middleware/mongoose";
import User from "../../models/User";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  if (req.method === "POST") {
    console.log(req.body);
    let user = await User.findOne({ email: req.body.email });
    const bytes = CryptoJS.AES.decrypt(user.password, "secret key 123");
    let decryptedpass = bytes.toString(CryptoJS.enc.Utf8);
    if (user) {
      if (
        req.body.email === user.email &&
        req.body.password === decryptedpass
      ) {
        var token = jwt.sign(
          { email: user.email, name: user.name },
          "secret rino",
          { expiresIn: "3d" }
        );
        res.status(200).json({ success: true, token });
      } else {
        res.status(200).json({ success: false, error: "Invalid credentials" });
      }
    } else {
      res.status(200).json({ success: false, error: "No user found!" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connentDb(handler);
