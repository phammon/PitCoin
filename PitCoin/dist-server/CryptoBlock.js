"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SHA256 = require('crypto-js/sha256');

var CryptoBlock = /*#__PURE__*/function () {
  function CryptoBlock(index, timestamp, data) {
    var precedingHash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : " ";

    _classCallCheck(this, CryptoBlock);

    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
  }

  _createClass(CryptoBlock, [{
    key: "computeHash",
    value: function computeHash() {
      return SHA256(this.index + this.precedingHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
  }]);

  return CryptoBlock;
}();

var _default = CryptoBlock;
exports["default"] = _default;