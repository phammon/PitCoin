"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CryptoBlockChain = /*#__PURE__*/function () {
  function CryptoBlockChain() {
    _classCallCheck(this, CryptoBlockChain);

    this.blockChain = [this.startGenesisBlock()];
  }

  _createClass(CryptoBlockChain, [{
    key: "startGenesisBlock",
    value: function startGenesisBlock() {
      return new CryptoBlock(0, "01/01/2020", "Initial Block in the Chain", "0");
    }
  }, {
    key: "getLatestBlock",
    value: function getLatestBlock() {
      return this.blockchain[this.blockchain.length - 1];
    }
  }, {
    key: "addNewBlock",
    value: function addNewBlock(newBlock) {
      newBlock.precedingHash = this.getLatestBlock().hash;
      newBlock.hash = newBlock.computeHash();
      this.blockchain.push(newBlock);
    }
  }]);

  return CryptoBlockChain;
}();

var _default = CryptoBlockChain;
exports["default"] = _default;