# Validators

This guide will explain how to register a validator and set up a validator profile using the Compendia Web Wallet.

## Introduction
Compendia adopts a **Delegated Proof of Stake** - or **DPoS** - consensus model.

DPoS enables high performance with fast block times, while governance of the network resides with the holders of the network’s native cryptocurrency: BIND.

The nodes that seek to verify transactions and secure the network are called **validators**.

Wallets with a BIND balance/stake can vote for validators.

The top forty-seven validators (ranked by *vote balance*: the collective vote power of all wallets that voted for a validator) will forge new blocks.

These *forging validators* receive a fixed block reward + transaction fees for every block that they forge.

Validators that are not among the top forty-seven can still function and contribute to the network as relay nodes; servers that maintain a full copy of the blockchain and host API endpoints that serve blockchain data, increasing general availability and stability of the network.

Non-forging validators can also still upload and share databases on Compendia.

To operate a validator, you will need to run a [**forging node and relay nodes**](./node.html).

## Registration

*If you only want to launch relay nodes you can skip registering a validator.*

1. Open the [Compendia Web Wallet](https://wallet.compendia.org)

2. Log in with your mnemonic key, or create a new wallet.
**Make sure to store your mnemonic key in a safe and secure location!**

3. Make sure you have at least 252 coins in your wallet.

4. On the right next to "Validators", click **Register Validator**.
![image|690x302](https://nos.chat/uploads/default/original/1X/8b464088391615a81e449698385c9b7ab32a958a.png) 
5. Enter your desired username *(lowercase letters, numbers, and underscores only)* for your Validator and click "Register".
![image|690x302](https://nos.chat/uploads/default/original/1X/ec8e1977cf016d3e266198547c677f34fa96e373.png) 
6. Users can now vote for your Validator by entering your username in **Search Validator**, or by clicking your username in the Validators list.
![image|690x243](https://nos.chat/uploads/default/original/1X/0a2b3833d1e9b5f14900123fb69946dc3aa7f5c3.png) 
7. You can vote for yourself by clicking **Find Validator** and entering your username. Then click **Vote**.

## Create a Profile

You can set a logo and a description for your validator. This data is hosted on Compendia using the IPFS protocol.

Logos and descriptions are visible on the wallet and explorer.

1. Select your Validator by clicking on your yellow name on top of the Validators list.
![image](./img/select-profile.png) 
1. Click the **Update Profile** button.
![image](./img/update-profile.png) 
3. In your description, enter a short value proposal for potential voters (if any), and click submit.
4. Go to **Update Profile** again and upload your logo.

***Note:** Any offensive, 18+, and/or illegal content will cause your custom data to be permanently hidden from the official wallet and explorer.*

Now you're ready to [set up a node](/guide/node.html) for your validator.
