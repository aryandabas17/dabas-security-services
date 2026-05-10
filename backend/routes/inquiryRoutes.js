const express = require('express');

const router = express.Router();

const Inquiry = require('../models/Inquiry');


/* CREATE INQUIRY */

router.post('/', async (req, res) => {

  try {

    const inquiry = new Inquiry({

      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
      service: req.body.service,
      message: req.body.message

    });

    await inquiry.save();

    res.status(201).json({

      success: true,
      message: 'Inquiry Submitted Successfully'

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,
      message: 'Server Error'

    });

  }

});


/* GET ALL INQUIRIES */

router.get('/', async (req, res) => {

  try {

    const inquiries = await Inquiry.find();

    res.json(inquiries);

  } catch (error) {

    res.status(500).json({
      message: 'Server Error'
    });

  }

});

module.exports = router;