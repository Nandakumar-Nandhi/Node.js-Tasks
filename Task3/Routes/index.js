const express = require('express');
const db = require('./Controllers/index');
const router = express.Router();
router.use(express.json());

router.get('/:id', db.findUser);
router.post('/signup', db.createUser);
router.put('/:id', db.updateUser);
router.get('/getAutoSuggestUsers/:loginSubstring/:limit', db.autoSuggestUsers);
router.delete('/:id', db.deleteUser);

module.exports = router;
