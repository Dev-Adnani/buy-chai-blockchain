## Overview

This project is a decentralized application (DApp) that allows users to buy chai (tea) and view transaction details on the Ethereum blockchain. It consists of two main components:

- **Frontend:** `buy-chai-fe` – A React.js application for interacting with the blockchain.
- **Smart Contract:** `buy-chai-sm` – A smart contract deployed using Hardhat and Alchemy.

## Frontend Setup

The frontend is built with React.js and provides a user interface for buying chai and viewing transaction details.

### Installation

1. **Clone the Repository:**  
   `git clone https://github.com/your-username/buy-chai-fe.git`  
   `cd buy-chai-fe`

2. **Install Dependencies:**  
   `npm install`

3. **Configure Environment Variables:**  
   Create a `.env` file in the root directory with the following content:
   ```
   REACT_APP_CONTRACT_ADDRESS=your_contract_address
   REACT_APP_ALCHEMY_API_KEY=your_alchemy_api_key
   ```

4. **Start the Development Server:**  
   `npm start`

   The application will be available at [http://localhost:3000](http://localhost:3000).

## Backend Setup

The backend involves deploying a smart contract on the Ethereum blockchain. It uses Hardhat for development and Alchemy for blockchain interaction.

### Installation

1. **Clone the Repository:**  
   `git clone https://github.com/your-username/buy-chai-sm.git`  
   `cd buy-chai-sm`

2. **Install Dependencies:**  
   `npm install`

3. **Configure Alchemy:**  
   Create a `.env` file in the root directory with your Alchemy API key:
   ```
   ALCHEMY_API_KEY=your_alchemy_api_key
   ```

4. **Deploy the Smart Contract:**  
   Run the following command to deploy the smart contract:
   `npx hardhat run scripts/deploy.js --network your_network`
   Replace `your_network` with the appropriate Ethereum network (e.g., rinkeby, mainnet).

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
