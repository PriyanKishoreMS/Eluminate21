require("dotenv").config()
const express = require("express")
const ejs = require("ejs")
const Razorpay = require("razorpay")

const app = express()

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("payPort");
})

app.post("/order", (req, res) => {
    var options = {
        amount: 50000,  
        currency: "INR",
        receipt: "order_rcptid_11"
      };
      razorpay.orders.create(options, function(err, order) {
          console.log(order);
          res.json(order)
      });
    
})

app.post("/order-complete", (req, res) => {
    razorpay.payments.fetch(req.body.razorpay_payment_id).then((payDoc) => {
        if (payDoc.status == "captured") {
            res.send("Payment Successful!")
        } else {
            res.redirect("/")
        }
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server runnning at port 3000")
})