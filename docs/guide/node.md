# Nodes (Relay & Forging)

## What are nodes?
Your **Forging Node** is your server that will verify transactions and forge blocks. You must have a forging node in order to collect block rewards and transaction fees when you're in the Top 47.

Your **Relay Nodes** are API servers that maintain a copy of the blockchain. Users and apps in the network can automatically connect to nearby relay nodes to make transactions and get blockchain data.
Your forging node will also need reliable relay nodes to connect with, so if you're running a Validator you should host at least two Relays.

## Recommended Node Specs

**Forging Node:**

* Ubuntu 20.x
* 2 CPU
* 8GB RAM
* 50+ GB SSD (HDD)

**Relay Node:**

* Ubuntu 20.x
* 1 CPU
* 3GB-4GB RAM
* 50+ GB SSD (HDD)

## Create two relay nodes

We're going to install your relay nodes first using the simple "core-control" package.

Once we set up the first relay, we can create a snapshot and instantly create our second one.

1. Go to [**DigitalOcean**](https://m.do.co/c/1506a50e2710) or any other VPS service (AWS, Google Cloud, Vultr etc). *(Note: This is a [DigitalOcean referral link](https://m.do.co/c/1506a50e2710) that grants you $100 credit for 60 days, more than enough to run your nodes at **zero cost** for the first two months.)*.

**Important:** If you're signing up with a referral link, make sure to turn off your adblockers (e.g. Brave Browser can block your referral data from your session).

2. Once logged in to DigitalOcean, create a new Droplet. <br> ![image|690x243](https://nos.chat/uploads/default/original/1X/a41d1de11b438b77a0a338e4adf5592022ead096.png) 

1. Select the $15/mo Standard Droplet (3 GB RAM / 1 CPU):
![image|690x302](https://nos.chat/uploads/default/original/1X/b08c314bd46cfc156f061939d80273717ef3d4c9.png) 

4. Select your preferred hosting location. You'll use the same location for all your nodes. This can be your own country, or you can ask the community in which country more nodes are needed:
![image|690x220](https://nos.chat/uploads/default/original/1X/4fad1ce77a41ebb1e3bb536a1218c090db3139d3.png) 

5. If you don't have an SSH Key, click New SSH Key and follow the on-screen instructions: <br>
![image|228x324](https://nos.chat/uploads/default/original/1X/77f368b8e9663bb7e3c9ca5a0fbed77587696162.png) 

6. Enter a hostname such as "relay-1"
![image|690x125](https://nos.chat/uploads/default/original/1X/050c69ff1b167153c83ee1a81f6d6dd3e13df6ac.png) 

7. Add the tag "nos" to your droplet:<br>
![image|690x125](https://nos.chat/uploads/default/original/1X/869bcc9728035920d5ad396116bb5ccffcd631a6.png) 


1. You can optionally enable backups for $3/mo. Low cost for an important feature. Enabling it is recommended.

## Install core-control

Now we're going to set up core-control.

1. Log in to your VPS using SSH: [Instructions for Windows](https://www.digitalocean.com/docs/droplets/how-to/connect-with-ssh/putty/) - [Instructions for macOS/Linux](https://www.digitalocean.com/docs/droplets/how-to/connect-with-ssh/openssh/).

2. Once logged in, create a new user:
```bash
adduser nos
usermod -aG sudo nos
su nos
```

Whenever you log in to your droplet, you can (and should always) log in with `su nos`.
You can also configure it as your default user account when logging in with PuTTy or OpenSSH.

3. Navigate to your `nos` user directory:
```bash
cd ~
```
Clone the core-control repository and navigate into it:
```bash
git clone https://github.com/nos/core-control -b nos-devnet
cd core-control
```

Now we can install the blockchain node software (enter one of the two commands below based on your preference):
```bash
# If you'd like core-control to set up everything, including a firewall:
./ccontrol.sh install core

# OR: If you don't want your firewall (UFW) auto-configured (advanced users):
./ccontrol install core advanced
```

The installation will take a few minutes.

4. After installation is done, we can create a snapshot in our VPS dashboard to quickly create the second relay. Click on the VPS in your dashboard and create a snapshot:
![image|690x223](https://nos.chat/uploads/default/original/1X/01c78c6f26cb1af80fa2c5de412a1cccbf0a3c36.png) 

5. After the snapshot is made, go to create a new VPS, but instead of selecting Ubuntu, we'll select the snapshot we just made:
![image|690x150](https://nos.chat/uploads/default/original/1X/3f5837ada64984123591d583866cae9116c8863e.png) 

6. Select the same server plan (3GB RAM, 1 CPU for $15/mo), add the SSH key you created for the first server, set your hostname to `relay-2`, add the `nos` tag, and if you already have a back-up plan for `relay-1` you don't need to add another back-up plan for this one.

7. Click create and log in to your new node using OpenSSH or PuTTy. Now you should have two SSH sessions open: one for `relay-1` and another for `relay-2`.

8. In `relay-2`, execute the following to log in as the `nos` user and go to the core-control directory:
```bash
su nos
cd ~/core-control
```

9. Now execute the following commands in both `relay-1` and `relay-2`:
```bash
./ccontrol.sh start relay
./ccontrol.sh logs
```

Next time you log in to your nodes, as the `nos` user, you can run `ccontrol <command>` without navigating to the `core-control` directory.

You can run `ccontrol logs` to check the node logs.

10. The relay node should now be live and working.

## Create a forging node

We can use the snapshot we made when we set up our first node to quickly bootstrap the forger:

1. Create a new VPS, select your `relay-1` snapshot, and select the 8GB RAM / 4 CPU plan ($40/mo on DigitalOcean).

2. Select your SSH key, enter the hostname `forger-1` and add the `nos` tag. Adding the back-up plan for your forger is recommended.

3. Create the node and log in with SSH.

4. Configure your private key by entering:
```
ccontrol secret set {your secret here}
```
*Replace `{your secret here}` with your validator's mnemonic key, without the `{ ... }` brackets.*

5. Run the following:
```bash
ccontrol start all
ccontrol logs
```

You should see your forger start syncing blocks.

When your Validator has enough votes to be in the Top 47, you'll start forging blocks and collecting block rewards and transaction fees.

If you're in the top 5, you'll earn 0.02 NOS extra per block!

While you're not in the Top 47, all of your nodes will still sync the blockchain and help secure and increase the performance of the network.

**Now it's time to advertise your validator to the community with a [Validator Announcement Thread!](https://nos.chat/t/how-to-write-a-validator-announcement-thread/35)**

## Updating a node

To update a node to the latest Compendia node software version, simply log in to the node as your **node user**, then enter:
 ```bash
 ccontrol update core
 ```

Some updates may require you to reset your configuration as well. This will be announced in any update announcement. The process to reset your config is:

```bash
# Stop the node
ccontrol stop
# Back up your custom plugins' config first, then reset your config:
ccontrol config reset
# If you're running a forging node:
ccontrol secret set [your validator secret]
# Start your node
ccontrol start [relay/forger]
```

## Tips

* You can secure your nodes further using CloudFlare. <br>
[See ARK Core documentation on securing your node.](https://guides.ark.dev/devops-guides/how-to-secure-your-ark-node)
