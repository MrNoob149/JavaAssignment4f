import {listAllCats, findCatById, addCat, modifyCat, removeCat } from '../models/cat-model.js';

const getCat = async (req, res, next) => {
  try {
    const cats = await listAllCats();
    res.json(cats);
  } catch (error) {
    next(error);
  }
};

const getCatById = (req, res, next) => {
  const cat = findCatById(req.params.id);
  if (cat) {
    res.json(cat);
  } else {
    res.sendStatus(404);
  }
  res.json (cat);
};

const getCatsByUserId = async (req, res, next) => {
  try {
    const cats = await findCatsByUserId(req.params.userId);
    res.json(cats);
  } catch (error) {
    next(error);
  }
};

const postCat = (req, res, next) => {
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

export { getCat, getCatById, postCat, putCat, deleteCat, getCatsByUserId };