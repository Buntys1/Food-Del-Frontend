const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Usermodel = require("./models/user");
const Feedbackmodel = require("./models/feedback");
const Product = require("./models/product");
const app = express();
const stripe = require("stripe")(
  "sk_test_51OBw0FSC47WMjY7mnzgfaWhYpvbA3UATDKMbJBsHy8XXEEINxB1U1MNX18fwLd7WA3aBjoB3kCr9iXC3ZMkHrOzk00r0vNoOvr"
);
app.use(express.json());
app.use(cors());

// DB connection
mongoose
  .connect("mongodb://localhost:27017/Employees")
  .then(() => {
    console.log("db is Connected Successfully!!");
  })
  .catch((err) => {
    console.log(err);
  });

// login
app.get("/", (req, res) => {
  res.send("hii from login");
});

app.post("/", (req, res) => {
  const { email, password } = req.body;
  Usermodel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password == password) {
        res.json("success");
      } else {
        res.json("the password is wrong!!");
      }
    } else {
      res.json("this user not registerd");
    }
  });
});

// signup

app.post("/signup", (req, res) => {
  Usermodel.create(req.body)
    .then((User) => res.json(User))
    .catch((err) => res.json(err));
});

// feedback

app.post("/feedback", (req, res) => {
  Feedbackmodel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});
// Products
// Get all products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/products", async (req, res) => {
  try {
    const { name, description, price, sizes, colors, img } = req.body;

    const newProduct = new Product({
      id,
      name,
      description,
      price,
      sizes,
      colors,
      img,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});
// Stripe Payment
app.post("/create-checkout-session", async (req, res) => {
  const { products } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: products.map((product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.name,
        },
        unit_amount: Math.round(product.price * 100),
      },
      quantity: 1,
    })),
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });
  res.json({ id: session.id });
});

app.listen(3000, () => {
  console.log("server is running!!");
});
