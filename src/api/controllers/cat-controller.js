import { addCat, findCatById, listAllCats } from '../models/cat-model.js';

const getCat = (req, res) => {
  res.json(listAllCats());
};

const getCatById = (req, res) => {
  const cat = findCatById(req.params.id);
  if (cat) {
    res.json(cat);
  } else {
    res.sendStatus(404);
  }
};

const postCat = (req, res) => {
  console.log(req.body);
  console.log(req.file);

  if (!req.file) { 
    return res.status(400).json({message: 'Please upload a cat image.',});}

  const cat = {
    ...req.body,
    filename: req.file.filename,
  };

  const result = addCat(cat);

  if (result.cat_id) {
    return res.status(201).json({
      message: 'New cat added.', result,
    });
  }

  return res.sendStatus(400);
};


const putCat = (req, res) => {
  res.json({ message: "Cat item updated" });
  res.sendStatus(200);
};

const deleteCat = (req, res) => {
  res.json({ message: "Cat item deleted" });
  res.sendStatus(200);
};

export { getCat, getCatById, postCat, putCat, deleteCat };