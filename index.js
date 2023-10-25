//Dependencies
const morgan = require('morgan');
const express = require('express');
const app = express();
//Routes
const empleados = require('./routes/empleado');
const user_proyecto = require('./routes/user_proyecto');
//Middleware
const auth = require('./middleware/auth');
const notFound = require('./middleware/notFound');
const index = require('./middleware/index');
const cors = require('./middleware/cors');

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", index);
app.use("/user_proyecto", user_proyecto);
app.use(auth);
app.use("/empleados", empleados);
app.use(notFound);

app.listen(process.env.PORT || 3000, () => {
      console.log("server is running...");
});
