const express = require('express');
const morgan = require('morgan');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');
/* app.set('views', 'ViewsFolder') */ //This is for using a views folder that doesn't go by the name of views

//listen for requests
app.listen(3000);

//middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Kratos offs Hades', snippet: 'In his fit of rage against the gods, Kratos decided to punish them for their selfishness'},
        {title: 'Doom Slayer is back for more', snippet: 'Doom Slayer is once again out for blood as he traps himself in Hell once again'},
        {title: 'Dante & Vergil have teamed up', snippet: 'After Vergil recovered from his previous wounds, he and Dante have decided to stop demons from entering the land of humans'},
    ]
    //res.send('<p>Homeless page</p>');
    res.render('index', { title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    //res.send('<p>About the homeless page</p>');
    res.render('about', { title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog'});
})

//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404'})
});
