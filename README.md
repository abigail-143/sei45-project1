# Halli Galli - Project 1

## Introduction

Halli Galli is a card game that I've coded for SEI45 Project 1. It's a multiplayer game that can host 2 - 4 players. The objective of the game is to snatch up cards opened on the screen faster than your opponents and collect as many cards as possible.

Grab your friends and play the game [here](https://pages.git.generalassemb.ly/abigail-143/project1-halligalli/)

<img width="1680" alt="Screenshot 2023-07-14 at 15 42 44" src="https://media.git.generalassemb.ly/user/49441/files/882cd7f6-e627-4309-bb3e-a35309fc086e">

## Game Play

Players can choose between 2-players, 3-players or 4-players depending on how many friends are playing the game. Players are prompted to input their names which will be displayed on the game page once the game starts.

### 2-players interface
<img width="1680" alt="Screenshot 2023-07-14 at 16 04 52" src="https://media.git.generalassemb.ly/user/49441/files/04b5ddf5-ed02-4caf-a3ef-7d86d9e4c04f">

### 3-players interface
<img width="1680" alt="Screenshot 2023-07-14 at 16 05 09" src="https://media.git.generalassemb.ly/user/49441/files/05c7d5e0-7888-448f-a9ac-997652368c43">

### 4-players interface
<img width="1680" alt="Screenshot 2023-07-14 at 15 43 10" src="https://media.git.generalassemb.ly/user/49441/files/c8e9ebdb-0ebd-4b3a-a42f-eccd70412e7a">

Each player will have 2 keys they can press on the keyboard that they can use to play the game. The keys are indicated on the game page as prompts for the users. One of the keys will allow users to retrieve a card from their hidden carddeck and open it to be shown on the screen. With each card opened, the player's score, which is initially set to 14 as each player will have 14 cards in their hidden carddeck, will decrease. The second key will allow players to snatch up the card on the table if it meets the snatch requirements. To successfully snatch the open cards, there should be 5 counts of the same food types. If the snatch is successfully, all cards that have been opened by all players will be awarded to the player that snatch the cards. If the player's snatch is unsuccessful, each opponent will be awarded a card each from the player's hidden carddeck.

### Examples of successful snatch.
<img width="1680" alt="Screenshot 2023-07-14 at 15 56 55" src="https://media.git.generalassemb.ly/user/49441/files/1bd1e5b7-04c5-4772-97c0-300d0b7652b8">
<img width="1680" alt="Screenshot 2023-07-14 at 15 44 03" src="https://media.git.generalassemb.ly/user/49441/files/7528d72e-0f98-46cf-b7c3-1b5647f738fc">

### Example of unsuccessful snatch.
<img width="1680" alt="Screenshot 2023-07-14 at 15 44 40" src="https://media.git.generalassemb.ly/user/49441/files/9465caf6-a4e0-40eb-b00a-d51cfc57549e">

Once the player has opened up all the cards in their hidden carddeck, which brings their score down to 0, they will be declared to have lost. The last player with a score that is not 0 will be declared the winner.

<img width="1680" alt="Screenshot 2023-07-14 at 15 44 58" src="https://media.git.generalassemb.ly/user/49441/files/c290e9ef-3da5-4520-8c04-e551a690c267">
<img width="1680" alt="Screenshot 2023-07-14 at 15 45 18" src="https://media.git.generalassemb.ly/user/49441/files/460c0f98-51ca-49d2-8519-17fd948f5755">

## Languages

- HTML
- CSS
- Javascript
- Bootstrap framework

## Next Steps

- Adding feature cards to the card deck, such as flow-reverse cards or add-two cards.
- Adding more multiplayer versions.

## Online Resources & References

. Learning how to shuffle card decks

[https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)

. Learning to split arrays

[https://stackoverflow.com/questions/8495687/split-array-into-chunks](https://stackoverflow.com/questions/8495687/split-array-into-chunks)

. How to check values in objects

[https://stackoverflow.com/questions/19233283/sum-javascript-object-propertya-values-with-the-same-object-propertyb-in-an-arra](https://stackoverflow.com/questions/19233283/sum-javascript-object-propertya-values-with-the-same-object-propertyb-in-an-arra)
