const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.render('home', {
        title: 'Homepage',
        layout: 'layout/main'
    });
});

router.get('/projects', (req, res) => {
    return res.render('projects', {
        title: 'Projects',
        layout: 'layout/main'
    });
});

module.exports = router;