const express = require('express');

const ctrl = require('../../controllers/contacts');

const { validateBody, isValidId, validateFavorite, authenticate } = require('../../middlewares');

const {addSchema, favoriteSchema} = require('../../schemas');

const router = express.Router();

router.get('/', authenticate, ctrl.getAll);

router.get('/:id', authenticate, isValidId, ctrl.getById);

router.post('/', authenticate, validateBody(addSchema), ctrl.add);

router.put('/:id', authenticate, isValidId, validateBody(addSchema), ctrl.updateById);

router.patch('/:id/favorite', authenticate, isValidId, validateFavorite(favoriteSchema), ctrl.updateStatus);

router.delete('/:id', authenticate, isValidId, ctrl.deleteById);

module.exports = router;
router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router