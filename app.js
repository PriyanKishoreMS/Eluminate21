const express = require("express")
const ejs = require("ejs")
const data = require("./data")

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("main")
})

for (let i = 0; i < data.length; i++)
{
    app.get("/" + data[i].route, (req, res) =>
    {
        res.render("events",
            {
                title: data[i].ename,
                content: data[i].brief,
                imgurl: data[i].img1
            })
    })
}

app.listen(process.env.PORT || 3000, () => {
    console.log("Server runnning at port 3000")
})