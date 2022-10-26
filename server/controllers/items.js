import marketplaceItem from "../models/martketplaceItem.js";

export const getItems = async (req, res) => {
  const category = req.query.category;
  const subCategory = req.query.subCategory;
  const id = req.query.id
  console.log(category);
  console.log(subCategory);


  if(id){
    try {
        const marketplaceItems = await marketplaceItem.find({
          _id: id,
        });
        console.log(marketplaceItem);
        res.status(200).json(marketplaceItems);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }

  }else if (subCategory) {
    try {
      const marketplaceItems = await marketplaceItem.find({
        subCategory: subCategory,
      });
      console.log(marketplaceItem);
      res.status(200).json(marketplaceItems);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  } else if(!subCategory && !id) {
    try {
      const marketplaceItems = await marketplaceItem.find({category:category});
      console.log(marketplaceItem);
      res.status(200).json(marketplaceItems);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
};

export const uploadItem = async (req, res) => {
  const item = req.body;

  const newItem = new marketplaceItem(item);
  try {
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
