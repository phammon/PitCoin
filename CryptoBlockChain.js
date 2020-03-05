class CryptoBlockChain {
  constructor() {
    this.blockChain = [this.startGenesisBlock()];
  }
  startGenesisBlock(){
    return new CryptoBlock(0, "01/01/2020", "Initial Block in the Chain", "0");
  }
  getLatestBlock(){
    return this.blockchain[this.blockchain.length - 1];
  }
  addNewBlock(newBlock){
       newBlock.precedingHash = this.getLatestBlock().hash;
       newBlock.hash = newBlock.computeHash();
       this.blockchain.push(newBlock);
   }
}
