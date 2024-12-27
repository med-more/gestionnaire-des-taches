const express = require('express');//import de module express
const bodyParser = require('body-parser');//impor de middleware
const taskRoutes = require('./routes/tasks');//import des routs
const connectDB = require('./db');//etablir la connection a la base de donneé

