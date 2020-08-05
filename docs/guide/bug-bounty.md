# Security Vulnerability Disclosure Program

**No software is ever perfect. Even fully vetted production releases can often have awkward bugs or security vulnerabilities that manage to slip through the cracks. We take the security of our network very seriously and want to do everything we can to encourage and incentivize responsible and timely reporting of any discovered vulnerabilities in our code. To do this, we provide a vulnerability reporting process that includes monetary rewards for bugs or errors in the** [**Compendia Core**](https://github.com/nos/core) **that could potentially harm or exploit the Compendia network.**

Security vulnerability disclosures are weighed based on the impact to the network and assigned a tier which determines the range of payment provided for proper disclosure. Patches are not required to receive payment for a vulnerability disclosure but any recommendations on potential mitigations are appreciated and welcome.

_Note: All disclosures are examined on a case by case basis given the nature of the disclosed vulnerability and the impact on the network. Examples given are for reference only and do not indicate potential for final determination._ 

:::: tip

Compendia's Bug Bounty / Vulnerability Rewards Program (VRP) only applies to Compendia-exclusive features.

Vulnerabilities in ARK Core-native packages are only eligible for rewards if they exist due to modifications made by Compendia.

**Compendia modules include:**

* Everything staking-related
* Most things voting-related
* File transactions & IPFS features
* Compendia Database features
* Scaled transaction fee removal from blocks

Most Compendia-exclusive modules live in its [Core Plugins](https://github.com/nos/core/tree/develop/plugins) directory.

All rewards are paid in BIND.

**Vulnerabilities that also exists in ARK Core may only be eligible for rewards from the ARK team.**

ARK Core vulnerabilities packages should be reported to the [ARK team](https://ark.io/sv).
::::

**Github Repository:** [**https://github.com/nos/core**](https://github.com/nos/core)

## **Security Vulnerability Classifications**

Below you will find several examples that outline the current tier structure and potential vulnerabilities that might fit into each category. This information is subject to change and current information will always be available on this page.

### **Critical Vulnerabilities: $2,500 - $5,000**

Security vulnerabilities that have critical, usually irreversible or irreparable implications to the network or its infrastructure.

_Examples: making BIND out of thin air through a vulnerability the staking system, staking someone else’s BIND without the need of their private keys, taking control of the entire network, permanently forking the network or a way to permanently destroy the integrity of the Compendia blockchain without requiring a malicious validator through one of Compendia's unique features._

### **Severe Vulnerabilities: $1,000 - $1,500**

Security vulnerabilities that cause severe problems to the networks for prolonged periods and usually don’t have irreparable implications.

_Examples: stopping the whole network for longer periods of time, bringing majority / all validator down, get into the blockchain DB invalid data \(transaction, blocks\) using Compendia's unique features._

### **Moderate Vulnerabilities: $250 - $750**

Security vulnerabilities that can cause moderate, temporary problems, but don’t expose any private data or cause permanent harm.

_Examples: slow down block propagation or the network, stop the network for a shorter period of time, making replay attacks under some restricted circumstances._

### **Basic Vulnerabilities: $50 - $150**

Security vulnerabilities that usually have no impact on the whole blockchain infrastructure, but can still pose problems for some specific things.

_Examples: things that only affect a subset of nodes \(e.g. hardware failures caused by an attack when the server satisfies the minimum requirements specified, inconveniences caused by a malicious validator\)._

To report a possible security vulnerability, please include your Name, preferred contact information, a full disclosure report, and a method to reproduce the issue being reported and email the information to [contact@compendia.org](mailto:contact@compendia.org) with the title “Security Vulnerability Report”. 

## **Security Vulnerability Guidelines**

To be eligible for compensation for reporting of a valid security vulnerability, researchers must meet the following criteria:

* The vulnerability must be exclusive to the Compendia's Core plugins that are live on its mainnet. For an ARK Core related vulnerability, contact [ARK](https://ark.io/sv).
* The vulnerability must not also exist (or have existed) on ARK Core.
* In order to receive payment, a proper invoice and personal information must be provided.
* The Researcher must never have publicly disclosed the exploit or vulnerability.
* The Researcher must not maliciously initiate an exploit on ARK Public Network. If testing is required for a potential vulnerability or to reproduce it, please use [Compendia Testnet](https://explorer.nos.dev) or set up your own local testnet (pull Compendia Core and install redis server, run `yarn setup`, then `cd packages/core && yarn full:testnet`).
* The Researcher must be able to completely reproduce and demonstrate the vulnerability or provide valid instructions so that our development team can do the same. This will allow us to properly test any patches prior to release.
* Before reporting a security vulnerability, the Researcher should review public branches and the latest commits to see if the team is currently aware of the vulnerability. If after review the Researcher believes the security vulnerability is still present, a report should be submitted.

_Disclaimer: Category of the severity of the disclosure and all monetary decisions are at the sole discretion of the Compendia Team and are final. Exploits that make indirect use of already known issues may not be eligible for payment. Examples are for reference only and do not impact or predict potential classification or payment. Past evaluations of security vulnerabilities are not indicative of future evaluations. Security vulnerabilities are paid in BIND on the daily average rate before the payout at the sole discretion of the Compendia Team. Please direct any questions to_ [_contact@compendia.org_](mailto:contact@compendia.org) _with the title “SV Program Help”._
