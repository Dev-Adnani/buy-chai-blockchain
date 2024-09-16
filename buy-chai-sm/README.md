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

3.1. **Hardhat Commands:**
   ```shell
    npx hardhat help
    npx hardhat test
    REPORT_GAS=true npx hardhat test
    npx hardhat node
    npx hardhat ignition deploy ./ignition/modules/Chai.ts
   ```


4. **Deploy the Smart Contract:**  
   Run the following command to deploy the smart contract:
   `npx hardhat ignition deploy ./ignition/modules/Chai.ts --network your_network`
   Replace `your_network` with the appropriate Ethereum network (e.g., sepolia, mainnet).

## Usage

- **Buy Chai:** Use the frontend to initiate purchases of chai. Transactions are recorded on the Ethereum blockchain.
- **View Transactions:** The frontend displays details of each transaction, including who bought chai, the amount, and the timestamp.

