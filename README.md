🔒 Fake Product Identification Using Blockchain Technology
📌 Overview
This project is a decentralized application (DApp) designed to combat counterfeit products by leveraging the power of blockchain technology. It enables manufacturers to register authentic products on the blockchain, while sellers and consumers can verify a product's legitimacy using its unique ID.

By storing product data on the Ethereum blockchain, the system ensures transparency, immutability, and trust across the supply chain — from the factory to the end user.

💡 Key Features
👤 Role-Based Signup/Login for:

Manufacturers

Sellers

Consumers

🛠️ Product Registration by manufacturers

🔍 Product Verification by sellers and consumers

🔗 All product data stored on Ethereum using smart contracts

🔑 MetaMask integration for wallet-based authentication

🧾 QR code or product ID-based product lookup

🧰 Tools & Technologies Used
-------------------------

| Tool/Language       | Purpose                                      |
|---------------------|----------------------------------------------|
| Solidity            | Writing smart contracts                      |
| Ganache             | Local Ethereum blockchain for development    |
| MetaMask            | Wallet & blockchain interaction              |
| Truffle / Hardhat   | Smart contract development and deployment    |
| Web3.js / Ethers.js | Blockchain interaction on front-end          |
| JavaScript (Vanilla / React) | Front-end interface                 |
| HTML & CSS          | UI layout and styling                        |
| Node.js             | Back-end logic (optional for APIs)           |
| IPFS (optional)     | Decentralized file storage for product data  |


🛠️ Installation & Setup
--------------------

1. Clone the Repository
   git clone https://github.com/Maythadarkyaw123/Product-Identification-Using-Blockchain-Technology.git

2. Install Dependencies
   npm install

3. Start Ganache (Download and run Ganache GUI or use CLI)

4. Compile & Deploy Contracts
   truffle compile
   truffle migrate --network development

5. Run the App
   npm start

6. Connect MetaMask to your local Ganache network and import an account.

📦 Project Structure
-----------------

📁 contracts       # Solidity smart contracts  
📁 src             # Front-end source code  
📁 migrations      # Truffle deployment scripts  
📁 build           # Compiled contract artifacts  
📄 truffle-config.js  # Truffle configuration 

🔐 How It Works
------------

1. Manufacturer signs up and logs in.
2. Manufacturer registers a product → stored on blockchain.
3. Seller or Consumer enters/scans the product ID.
4. The DApp retrieves and displays product authenticity from blockchain data.

📄 License
-------

This project is licensed under the MIT License.
