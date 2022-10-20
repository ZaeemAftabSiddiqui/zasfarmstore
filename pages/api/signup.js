import connentDb from "../../middleware/mongoose";
import User from "../../models/User";

const handler = async (req, res) => {
  if (req.method === "POST") {
    console.log(req.body);
    let u = new User(req.body);
    await u.save();
    res.status(200).json({ success: "success" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connentDb(handler);
