import { addUser, listAllUsers, findUserById } from "../models/user-models.js";

const getUser = (req, res) => { 
    res.json(listAllUsers());
};

const getUserId = (req, res) => { 
    const user = findUserById(req.param.id)
    if (user) { 
        res.json(cat);
    } else { 
        res.sendStatus(404)
    }
}

const postUser = (req, res) => { 
    const result = addUser(req.body)
    if (result.user_id) { 
        res.status(201)
        res.json ({message: 'New user added', result})
    } else { 
        res.sendStatus(404)
    }
}

const putUser = (req, res) => { 
    res.json({ message: 'User items updated'})
    res.sendStatus(200)
}

const deleteUser = (req, res) => { 
    res.json ({message: 'User item deleted'})
    res.sendStatus(200)
}

export { getUser, getUserId, postUser, putUser, deleteUser}