const express = require('express');
const { createVacancy, getVacancies, getVacancyById } = require('../controllers/vacancyController');

const router = express.Router();

router.post('/', createVacancy);
router.get('/', getVacancies);
router.get('/:id', getVacancyById);

module.exports = router;
