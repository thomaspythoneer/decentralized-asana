# Project Management & NFT Battle Platform

## Project name:

CDVC6WQBXJ2ZOIRRDTD32OMYJPJRXEILPRBS5FGWOBZMCLFOXUHPQSPR
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/565fc5af-15df-46eb-a45f-ca8f014c99b4" />

## Who are you: 
- name: thomaspythoneer 
- blockchain developer
- Stellar Soroban enthusiast
- Next.js developer
- Smart contract developer
- Web3 enthusiast
- Open source contributor

## Project details:


contract id CDVC6WQBXJ2ZOIRRDTD32OMYJPJRXEILPRBS5FGWOBZMCLFOXUHPQSPR

A decentralized project management platform built on the Stellar Soroban blockchain that enables users to create, manage, and track project items on-chain. The platform features a Next.js frontend with wallet integration, allowing users to interact with smart contracts seamlessly. Users can store project items with titles, descriptions, and status information directly on the blockchain, ensuring transparency and immutability of project data. The platform also includes AI-powered battle features where players can debate about NFTs with an AI agent, creating an engaging gamified experience that combines project management with interactive NFT battles.

## Vision:

This project envisions a future where project management becomes truly decentralized and transparent. By leveraging blockchain technology, we aim to create a platform where project data is immutable, accessible, and owned by users rather than centralized organizations. The integration of AI-powered features adds a new dimension to project collaboration, making it engaging and interactive. Our vision is to democratize project management tools, making them available to everyone regardless of their location or financial resources. We believe this platform can revolutionize how teams collaborate, track progress, and manage projects by providing a trustless, transparent, and user-owned solution that eliminates intermediaries and reduces costs.

---

## ChatGPT prompt 1:
**Write me a project description, in less than 150 simple, straightforward words, for the following blockchain project details to be implemented on Stellar Soroban Blockchain. Describe a complete project:**

This is a decentralized project management platform built on Stellar Soroban blockchain that allows users to create, store, and manage project items directly on-chain. Users can add project items with titles, descriptions, and status information, all stored permanently on the blockchain. The platform includes a modern Next.js web interface with wallet integration, making it easy for users to interact with smart contracts. Additional features include AI-powered NFT battle functionality where players can engage in debates about their NFTs. The smart contract handles storing and retrieving project data, while the frontend provides an intuitive interface for managing projects and viewing collections.

## ChatGPT prompt 2:
**Now, also write a vision statement, in 100 simple, straightforward words, for this project. Talk about how this project can create a big impact. Here are my notes:**

Our vision is to democratize project management by moving it to the blockchain, ensuring transparency and user ownership. This platform eliminates centralized control, giving users true ownership of their project data. By combining project management with AI-powered interactions, we create an engaging experience that makes blockchain technology accessible to everyone. This can transform how teams collaborate globally, providing trustless solutions that reduce costs and increase transparency. We envision a future where project management tools are decentralized, affordable, and available to all, breaking down barriers to effective collaboration and project tracking.

## ChatGPT prompt 3:
**Now, write me a software development plan for this project. Please mainly focus on the smart contract functions, variables, features to be developed. Then, mention the front-end development as well. It should have less than 6 steps in total. Final step can be deployment.**

**Step 1:** Develop the Soroban smart contract with core functions: `store_item()` to save project items (id, title, description, status), `get_items()` to retrieve all items for a project, and `delete_item()` to remove items. Implement storage structures: persistent storage maps for project items and item lists, plus a counter for unique item IDs.

**Step 2:** Build the Next.js frontend with wallet integration using Stellar Wallet Kit. Create components for creating project items, viewing project collections, and deleting items. Implement React hooks for state management and transaction handling.

**Step 3:** Integrate AI battle features for NFT interactions. Add chat interface components that connect to AI services, allowing players to debate about NFTs. Implement winner determination logic and NFT claiming functionality.

**Step 4:** Design and implement the user interface with Tailwind CSS and shadcn/ui components. Create responsive layouts, tabs for different features, and toast notifications for transaction feedback.

**Step 5:** Test the contract functions and frontend interactions on Stellar testnet. Verify all transactions work correctly, test error handling, and ensure proper wallet connection.

**Step 6:** Deploy the smart contract to Stellar Soroban mainnet and deploy the frontend application to a hosting service. Configure production environment variables and network settings.

## ChatGPT prompt 4:
**Now, write a personal story summary in less than 100 words. here are my notes:**

I started exploring blockchain technology after realizing how centralized project management tools limit user control and data ownership. Discovering Stellar Soroban's fast and low-cost smart contracts inspired me to build a decentralized solution. I combined my passion for project management with my interest in AI and NFTs, creating a platform that empowers users while making blockchain accessible. This project represents my journey from learning smart contracts to building a complete Web3 application that solves real problems and creates new possibilities for collaboration.

## ChatGPT prompt 5:
**Can you also write a draft github readme on how to install the project?**

## Installation

### Prerequisites

- Node.js 18+ and npm
- Rust and Cargo (for smart contract development)
- Stellar Freighter wallet browser extension

### Smart Contract Setup

1. Navigate to the contract directory:
```bash
cd contract
```

2. Build the smart contract:
```bash
cargo build --target wasm32-unknown-unknown --release
```

3. The compiled WASM file will be located at:
```
target/wasm32-unknown-unknown/release/project_management.wasm
```

### Frontend Setup

1. Navigate to the app directory:
```bash
cd app
```

2. Install dependencies:
```bash
npm install
```

3. Generate the contract client (if needed):
```bash
# Run contract bindings generation if you have soroban CLI installed
# soroban contract bindings typescript --wasm ../contract/target/wasm32-unknown-unknown/release/project_management.wasm --output-dir ./
```

4. Set up environment variables (create `.env.local` if needed):
```bash
# Add any required environment variables here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

### Usage

1. Install and connect your Stellar Freighter wallet
2. Make sure you're on the Stellar Testnet
3. Connect your wallet through the interface
4. Start creating and managing project items!

---

## ImgCreator prompt:
futuristic happy digital painting with a MASCOT (animal or robot) hero in a happy, bright futuristic SETTING (village, city, forest, home), KEYWORDS (physical actions)

**Visual:**
- mascot: bull
- setting: city
- physical keywords: creating abundance, new frontiers

---

## Tech Stack

- **Blockchain:** Stellar Soroban
- **Smart Contract:** Rust
- **Frontend:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **Wallet Integration:** Stellar Wallet Kit, Freighter API
- **AI:** Google Generative AI SDK

## License

MIT
