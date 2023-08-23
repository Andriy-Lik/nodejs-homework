const { listContacts, getContactById, removeContact, addContact, updateContact, } = require("../../models/contacts");
const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const result = await listContacts();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
})

router.get('/:contactId', async (req, res, next) => {

  const { contactId } = req.params;
  const result = await getContactById(contactId);
  if (!result) {
    return res.status(404).json({ message: "Not found", status: "error" });
  } 
  res.json(result);
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router;
