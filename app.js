const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const PORT = process.env.PORT || 5000;


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {   
    res.render("home") ;
});

app.get("/hodmsg", (req, res) => {   
    res.render("hodmsg") ;
});

app.get("/vision", (req, res) => {   
    res.render("vision") ;
});

app.get("/peo", (req, res) => {   
    res.render("peo") ;
});

app.get("/achievements", (req, res) => {   
    res.render("achievments") ;
});

app.get("/nba", (req, res) => {   
    res.render("nba") ;
});

app.get("/fac", (req, res) => {   
    res.render("fac") ;
});

app.get("/time", (req, res) => {   
    res.render("time") ;
});

app.get("/syl", (req, res) => {   
    res.render("syl") ;
});
app.get("/att", (req, res) => {   
    res.render("att") ;
});

app.get("/int", (req, res) => {   
    res.render("int") ;
});

app.get("/fin", (req, res) => {   
    res.render("fin") ;
});

app.get("/vid", (req, res) => {   
    res.render("vid") ;
});

app.get("/maj", (req, res) => {   
    res.render("maj") ;
});

app.get("/ba", (req, res) => {   
    res.render("ba") ;
});
app.get("/acad", (req, res) => {   
    res.render("acad") ;
});
app.get("/pyp", (req, res) => {   
    res.render("pyp") ;
});
app.get("/sf", (req, res) => {   
    res.render("sf") ;
});

app.get("/atp", (req, res) => {   
    res.render("atp") ;
});

app.get("/trec", (req, res) => {   
    res.render("trec") ;
});
app.get("/prec", (req, res) => {   
    res.render("prec") ;
});

app.get("/iii", (req, res) => {   
    res.render("iii") ;
});

app.get("/ptp", (req, res) => {   
    res.render("ptp") ;
});

app.get("/lab", (req, res) => {   
    res.render("lab") ;
});
app.get("/club", (req, res) => {   
    res.render("club") ;
});
app.get("/alum", (req, res) => {   
    res.render("alum") ;
});
app.get("/bab", (req, res) => {   
    res.render("bab") ;
});
app.get("/mou", (req, res) => {   
    res.render("mou") ;
});
app.get("/epp", (req, res) => {   
    res.render("epp") ;
});
app.get("/mil", (req, res) => {   
    res.render("mil") ;
});
app.get("/egr", (req, res) => {   
    res.render("egr") ;
});
app.get("/tech", (req, res) => {   
    res.render("tech") ;
});
app.get("/pd", (req, res) => {   
    res.render("pd") ;
});
app.get("/cul", (req, res) => {   
    res.render("cul") ;
});
app.get("/spo", (req, res) => {   
    res.render("spo") ;
});

app.get("/about", (req, res) => {   
    res.render("about") ;
});
app.get("/courseout", (req, res) => {   
    res.render("courseout") ;
});


app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
});