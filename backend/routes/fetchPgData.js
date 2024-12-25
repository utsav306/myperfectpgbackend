const express = require('express');
const router = express.Router();

//fetch pg data
router.get('/fetchPgData', async (req, res) => {
    try {
        const pgs = await Pg.find();
        res.status(200).json({ success: true, data: pgs });
    } catch (error) { 
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;