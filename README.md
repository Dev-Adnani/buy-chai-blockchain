## Overview

This project is a decentralized application (DApp) that enables users to "buy a chai" on the Ethereum blockchain, similar to the "Buy Me a Coffee" concept. Instead of coffee, users can purchase chai (tea) and view transaction details on the blockchain.

- **Frontend:** `buy-chai-fe` – A React.js application for interacting with the blockchain.
- **Smart Contract:** `buy-chai-sm` – A smart contract deployed using Hardhat and Alchemy.

## Frontend Setup

The frontend is built with React.js and provides a user interface for buying chai and viewing transaction details.

### Installation

1. **Clone the Repository:**  
   `cd buy-chai-fe`

2. **Install Dependencies:**  
   `npm install`

3. **Configure Environment Variables:**  
   Create a `.env` file in the root directory with the following content:
   ```
   SEPOLIAURL=your_contract_address
   ```

4. **Start the Development Server:**  
   `npm run dev`


## Backend Setup

The backend involves deploying a smart contract on the Ethereum blockchain. It uses Hardhat for development and Alchemy for blockchain interaction.

### Installation

1. **Clone the Repository:**  
   `cd buy-chai-sm`

2. **Install Dependencies:**  
   `npm install`

3. **Configure Alchemy:**  
   Create a `.env` file in the root directory with your Alchemy API key:
   ```
   SEPOLIAURL=your_sepolia_url
   MMPKE=your_private_key
   ```

4. **Deploy the Smart Contract:**  
   Run the following command to deploy the smart contract:
   `npx hardhat ignition deploy ./ignition/modules/Chai.ts --network your_network`
   Replace `your_network` with the appropriate Ethereum network (e.g., sepolia, mainnet).

## Usage

- **Buy Chai:** Use the frontend to initiate purchases of chai. Transactions are recorded on the Ethereum blockchain.
- **View Transactions:** The frontend displays details of each transaction, including who bought chai, the amount, and the timestamp.

## Contributing

To contribute to this project:

1. Fork the repository.
2. Create a new branch (e.g., `git checkout -b feature-branch`).
3. Make your changes and commit them (e.g., `git commit -am 'Add new feature'`).
4. Push the branch (e.g., `git push origin feature-branch`).
5. Create a pull request on GitHub.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- **React.js:** For building the user interface.
- **Hardhat:** For smart contract development.
- **Alchemy:** For Ethereum node services.
'''
