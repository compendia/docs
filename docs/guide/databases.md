# Databases

Compendia's Layer 2 Database Network is currently available on our Testnet.

Below you'll find guides on creating databases and schemas. This doc will be updated with a developer guide on **building metaverse apps** that use Compendia databases as well.

If you need any help, [join our Discord](https://discord.gg/SJWMQaFVWe).

## Creating a database

1. Create a new [testnet wallet](https://wallet.nos.dev) and click Get Coins.
![image|690x304](https://nos.chat/uploads/default/original/1X/4e7546d6a782a05aa081ccd7596fbc5cf2525dc1.png)

2. Click "Register Validator" and set a username.
![image|690x302](https://nos.chat/uploads/default/original/1X/8b464088391615a81e449698385c9b7ab32a958a.png) 

1. Find a schema in the [Layer 2 Database Explorer](https://db-testnet.compendia.org/). The schema represents the database rules, such as the columns that it should have. If you want to use your own schema, read [Registering a Schema](#registering-a-schema).

2. Set up a local instance of [Concierge](https://github.com/compendia/concierge). Follow the readme and configure it use your schema and validator wallet passphrase. You'll need your configured API key later.

3. Run Concierge and copy the Database URI it returns in your console (i.e. `/orbitdb/foo/bar`).

4. In your Compendia testnet wallet, click **Tools** and **Register Database**. Paste the database URL and click **Submit**.

5. Go to [Maestro](https://maestro.compendia.org) (a Compendia Database Admin UI), enter your Concierge API URL (your concierge server ip + port), API key, and Schema name.

6. Open the [DB Explorer](https://db-testnet.compendia.org) in another window, click your schema, and then **View** next to your database in the list.

7. Add a new entry in Maestro and watch it appear in your database in real-time.

Any user and application that synchronizes with your database, will become a node, making your data decentralized and always-online.

## Registering a schema

1. In your Compendia testnet wallet, click Register Schema.

2. Enter a schema name and paste a [JSON Schema](https://json-schema.org/learn/getting-started-step-by-step.html).

3. Submit the transaction by clicking **Submit**.

Your schema is now live on Compendia. Curators can now register a database with open data using your schema.

## Building a metaverse app with Compendia Databases

**Coming Soon.**
