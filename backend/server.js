"use strict";

const express = require("express");

const PORT = 4000;

express()
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
  });
