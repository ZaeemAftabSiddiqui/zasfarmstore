import Product from "../../models/Product";
import connentDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  let products = await Product.find();
  let eggs = {};
  for (let item of products) {
    if (item.title in eggs) {
      if (
        !eggs[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        eggs[item.title].color.push(item.color);
      }
      if (!eggs[item.title].size.includes(item.size) && item.availableQty > 0) {
        eggs[item.title].size.push(item.size);
      }
    } else {
      eggs[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        eggs[item.title].color = [item.color];
        eggs[item.title].size = [item.size];
      }
    }
  }

  res.status(200).json({ eggs });
};

export default connentDb(handler);
