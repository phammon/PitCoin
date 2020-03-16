"use strict";

require("./CryptoBlock.js");

require("./CryptoBlockChain.js");

var coin = new CryptoBlockChain();
coin.addNewBlock(new CryptoBlock(1, "01/06/2020", {
  sender: "Iris Ljesnjanin",
  recipient: "Cosima Mielke",
  quantity: 50
}));
coin.addNewBlock(new CryptoBlock(2, "01/07/2020", {
  sender: "Vitaly Friedman",
  recipient: "Ricardo Gimenes",
  quantity: 100
}));
console.log(JSON.stringify(smashingCoin, null, 4));