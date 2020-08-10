# Economy

## Vote Power

As explained in [Introduction - BIND](/guide/#bind), the BIND coin represents **vote power** (or **power** for short) on the Compendia network. A validator's ranking is calculated by the **collective vote power** of their voters.

The primary role of validators is to secure the network, and optionally to provide the network with valuable data as a database curator.

In return for securing and maintaining the network, validators who are in the top 47 collect BIND through *block rewards* and *transaction fees*.

In an effort to garner votes to reach or maintain their position in the top 47, validators may pledge to **provide various services** that contribute to Compendia's ecosystem.

Such services could include:

* Ecosystem codebase contributions and development.
* Distributing rewards to creators of curated content, based on quality and popularity.
* Marketing and bounty campaigns.
* Hosting events (conferences, hackathons, competitions).
* Building new applications that integrate with the ecosystem.

### Voter Incentives

Validators may also choose to offer certain services **exclusively to their voters**. Such services may also scale with a voter's Vote Power.

**Vote-weighted services** could attract new voters and persuade existing voters to increase their Vote Power through staking or increasing their wallet balance. This would grow the validator’s votes, strengthening their forging position.

Examples of vote-weighted services include:

* Prioritized **data entry** in the validator's Compendia databases.
* Periodically **sharing a percentage of collected block rewards** and transaction fees with voters. 
  * **For example**: a voter who represents 20% of a validator's votes (i.e. 20k power on a validator with 100k total votes), could receive 20% of the validator's periodic (voluntary) reward share.
* Providing voters with **storage space** and bandwidth in Compendia's filesystem.
* Online apps or games with **benefit levels** scaled to the voter's power (i.e. in-game credits).
* Voter-exclusive **bounty programs** and competitions.

Virtually endless unique services and incentives can be created and offered by validators to their voters.

*Disclaimer: No specific "voter incentive" from validators is expected or required by the developers of the network.*

*BIND has no inherent financial value and should only be obtained by people who want to use the network. BIND should not be held as a financial investment. Do not expect to gain any financial returns from holding BIND, or any other Utility Token, Cryptocurrency, or Blockchain Coin.*

## Staking

Staking means you *lock* a number of coins for a duration to increase their vote power.

While staked, your coins cannot be moved, but they will grant significantly more vote power to your wallet.

This feature lets users who are willing to *commit time* to the network gain equal (or more) vote power than those who only seek to commit funds (but not time).

As explained in [Voter Benefits](#voter-benefits), the more power you have as a voter, the more you may stand to gain from validators.

You can stake BIND using the web wallet. See [Wallet - Stake](./wallet.html#stake).

### Durations
You can stake 10,000 BIND or more for 3 possible durations.

The minimum stake requirement can change in the future based on validator/voter consensus.

Each duration will multiply your stake's vote power by a certain amount:

|  Duration | Power Multiplier |
| --------: | :--------------: |
|  3 Months |        5x        |
|  6 Months |       7.5x       |
| 12 Months |       10x        |


 ### Phases

 Your stake will go through various *phases*:
 
 * **Grace:** After creating the stake, you can still cancel it within 1 hour. Canceling your stake returns all your to-be staked BIND.
  
 * **Powering:** After one hour, your stake is *powering up*. While powering up, each coin still represents one vote. The power-up duration is 47 hours.
  
 * **Active:** After your stake is *powered up* you will gain the bonus vote power for the configured duration.
  
 * **Release:** After your stake passes its duration, it will be *released*. A *released stake* grants half the bonus vote power, but you can redeem it at any time. This means you still benefit from the stake, but are also free to move or re-stake your coins at any time. 
  
 * **Redeemed:** If you redeem a released stake, all your staked BIND will return to your wallet. Each previously staked coin will represent 1 vote power again.


## Block Rewards & Halvings

The initial block reward is **4.84** BIND for the top 5 validators, and **3.9 BIND** for the other 42 active validators.

These two rewards result in an average fixed block reward of **4 BIND** per block.

To maintain a balance in vote power distribution between voters and validators, **the block reward will be halved every approximate three years** until it reaches the average 1 BIND block reward.

After year 9, the block rewards will remain at these fixed amounts, until (if at all) a new proposal accepted by network consensus.

The block reward reductions are visualized below (with Year 1 starting at the Genesis Block unix time):

| Years | Block Reward | Top 5 Reward | Average |
| ----- | ------------ | ------------ | ------- |
| 1-3   | 3.9          | 4.84         | 4       |
| 4-6   | 1.95         | 2.42         | 2       |
| 7-9   | 0.975        | 1.21         | 1       |

## Transaction Fees
To submit a transaction to the network, the sender must pay a **transaction fee**. Transaction fees help discourage network abuse and appropriately scale the incentive for validators to process any volume of transactions.

A validator receives a portion of the fees collected from all transactions made during their block, while the **majority of collected fees are removed permanently from circulation**.

The network currently consists of **fixed transaction fees**, but will allow for transaction fees to be customized by nodes and validators in the future, further decentralizing the network's economy.

### Fee Removal Model

The fee collection and removal model is as follows:

100% of collected fees up to the amount equal to the block reward in a block are permanently removed from circulation.

50% of any remaining collected fees are also removed from circulation.

The other 50% are awarded to the forging validator.

This fee system helps with combating possible shifts in Vote Power going from voters towards validators during times of increased transaction activity on the network.

#### Example

1. A block has collected ß12.00 in transaction fees.

2. ß3.90 from the collected fees (the amount equal to the block reward) are removed from circulation.

3. (12 - 3.9) * 0.5 = ß4.05 from the remainder are also removed from circulation.

4. The other ß4.05 are awarded to the forging validator.

The block’s forging validator receives ß7.95 (ß4.05 from collected fees awarded in step 4, plus ß3.90 block reward).


The transaction fee logic removed ß7.95 from circulation, while the fixed block reward added ß3.90 to circulation, causing a net ß4.05 reduction in BIND supply.


