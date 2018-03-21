// Web3 非同期⇒同期ラッピング関数
Web3A = function(web3js) {
  this.web3 = web3js;
};

// web3.version.getNetworkラッピング関数
Web3A.prototype.getNetwork = function() {
    return new Promise(resolve => {
		this.web3.version.getNetwork(
			function(error,result) {
				if(!error) {
					console.log("getNetwork OK");
					console.log(result);
					resolve(result);
				} else {
					console.log("getNetwork NG");
				}
			}
		);
    })
};

// web3.eth.blockNumberラッピング関数
Web3A.prototype.blockNumber = function() {
    return new Promise(resolve => {
		this.web3.eth.blockNumber(
			function(error,result) {
				if(!error) {
					console.log("blockNumber OK");
					console.log(result);
					resolve(result);
				} else {
					console.log("blockNumber NG");
				}
			}
		);
    })
};

// web3.eth.getBlockラッピング関数
Web3A.prototype.getBlock = function(_count) {
    return new Promise(resolve => {
		this.web3.eth.getBlock(_count,
			function(error,result) {
				if(!error) {
					console.log("getBlock OK");
					console.log(result);
					resolve(result);
				} else {
					console.log("getBlock NG");
				}
			}
		);
    })
};

// web3.eth.getTransactionラッピング関数
Web3A.prototype.getTransaction = function(_count) {
    return new Promise(resolve => {
		this.web3.eth.getTransaction(_count,
			function(error,result) {
				if(!error) {
					console.log("getTransaction OK");
					console.log(result);
					resolve(result);
				} else {
					console.log("getTransaction NG");
				}
			}
		);
    })
};
