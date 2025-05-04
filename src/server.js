
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const bcrypt = require("bcrypt");

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/signupDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log("✅ MongoDB Connected"))
//   .catch(err => console.error("❌ MongoDB Connection Error:", err));

// // Define User Schema
// const userSchema = new mongoose.Schema({
//     role: String,
//     fullName: String,
//     email: String,
//     password: String, // Assume password is hashed using bcrypt
//     companyName: String,
//     storeName: String,
//     storeID: String
// });

// const User = mongoose.model("User", userSchema);

// // Login Route
// app.post("/login", async (req, res) => {
//     try {
//         const { role, email, password } = req.body;
        
//         console.log("📩 Login Attempt:", req.body);

//         // Find user in MongoDB
//         const user = await User.findOne({ role, email });

//         if (!user) {
//             return res.status(400).json({ error: "User not found" });
//         }

//         // Validate password (assuming password is hashed)
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ error: "Invalid credentials" });
//         }

//         // Redirect user based on role
//         let redirectURL;
//         if (role === "manufacturer") {
//             redirectURL = "/manufacturer.html";
//         } else if (role === "seller") {
//             redirectURL = "/seller.html";
//         } else if (role === "consumer") {
//             redirectURL = "/seller.html";
//         }

//         res.json({ message: "Login successful", redirectURL });

//     } catch (error) {
//         console.error("❌ Login Error:", error);
//         res.status(500).json({ error: "Server error" });
//     }
// });

// // Start Server
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/signupDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Define User Schema
const userSchema = new mongoose.Schema({
    role: String,
    fullName: String,
    email: { type: String, unique: true }, // Ensure unique email
    password: String, // Hashed password
    companyName: String,
    storeName: String,
    storeID: String
});

const User = mongoose.model("User", userSchema);

// Signup Route
app.post("/signup", async (req, res) => {
    try {
        let { role, fullName, email, password, companyName, storeName, storeID } = req.body;

        // Ensure required fields
        if (!role || !fullName || !email || !password) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already registered" });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            role,
            fullName,
            email,
            password: hashedPassword,
            companyName,
            storeName,
            storeID
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully!" });

    } catch (error) {
        console.error("❌ Signup Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


// Login Route
app.post("/login", async (req, res) => {
    try {
        const { role, email, password } = req.body;
        
        console.log("📩 Login Attempt:", req.body);

        // Find user in MongoDB
        const user = await User.findOne({ role, email });

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // Redirect user based on role
        let redirectURL;
        if (role === "manufacturer") {
            redirectURL = "/manufacturer.html";
        } else if (role === "seller") {
            redirectURL = "/seller.html";
        } else if (role === "consumer") {
            redirectURL = "/consumer.html";
        }

        res.json({ message: "Login successful", redirectURL });

    } catch (error) {
        console.error("❌ Login Error:", error);
        res.status(500).json({ error: "Server error" });
    }
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

