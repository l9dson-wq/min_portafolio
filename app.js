const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const expressLayouts = require('express-layouts');

app.set('view engine','ejs');
app.use(expressLayouts);
app.use(express.static('public')); 
app.use('/', require('./routes'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});