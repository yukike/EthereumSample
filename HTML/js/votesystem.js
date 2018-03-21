// voteAddressを指定
var voteAddress = "0x4eb7bb7504849266c5baf4e1dac7cd0e03fc2249";

var voteABI = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "users",
		"outputs": [
			{
				"name": "addr",
				"type": "address"
			},
			{
				"name": "nickName",
				"type": "bytes32"
			},
			{
				"name": "counterName",
				"type": "bytes32"
			},
			{
				"name": "numberOfCounter",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "chkEnded",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_item",
				"type": "uint256"
			}
		],
		"name": "getCounterName",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getDeadline",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMaxCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "checkOwner",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "getUserCounterName",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "getUserCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getNumUser",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_item",
				"type": "uint256"
			}
		],
		"name": "getNumberOfCounter",
		"outputs": [
			{
				"name": "",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getNumItem",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getOdai",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "bytes32"
			}
		],
		"name": "addCounter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "setOwner",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_odai",
				"type": "bytes32"
			}
		],
		"name": "setOdai",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_item",
				"type": "uint256"
			}
		],
		"name": "countUp",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_deadline",
				"type": "uint256"
			}
		],
		"name": "setDeadline",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_duration",
				"type": "uint256"
			},
			{
				"name": "_odai",
				"type": "bytes32"
			}
		],
		"name": "reset",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "makeUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "para1",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "para2",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "para3",
				"type": "uint256"
			}
		],
		"name": "logSet",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			},
			{
				"name": "_namepoint",
				"type": "uint256"
			}
		],
		"name": "userCountUp",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
	];

//URLエンコードし、％を取り除く
function encodeBytes(_moji) {
	var sourceStr = encodeURIComponent(_moji);
	var targetStr = "%" ;
	var regExp = new RegExp( targetStr, "g" ) ;
	var a = sourceStr.replace( regExp , "" ) ;
	
	return "0x" + a;
}

// 文字列をUTF8の16進文字列に変換
function string_to_utf8_hex_string(text)
{
	var bytes1 = string_to_utf8_bytes(text);
	var hex_str1 = bytes_to_hex_string(bytes1);
	return "0x" + hex_str1;
}


// UTF8の16進文字列を文字列に変換
function utf8_hex_string_to_string(hex_str1)
{
	var bytes2 = hex_string_to_bytes(hex_str1);
	var str2 = utf8_bytes_to_string(bytes2);
	return str2;
}



// 文字列をUTF8のバイト配列に変換
function	string_to_utf8_bytes	(text)
{
    var result = [];
    if (text == null)
        return result;
    for (var i = 0; i < text.length; i++) {
        var c = text.charCodeAt(i);
        if (c <= 0x7f) {
            result.push(c);
        } else if (c <= 0x07ff) {
            result.push(((c >> 6) & 0x1F) | 0xC0);
            result.push((c & 0x3F) | 0x80);
        } else {
            result.push(((c >> 12) & 0x0F) | 0xE0);
            result.push(((c >> 6) & 0x3F) | 0x80);
            result.push((c & 0x3F) | 0x80);
        }
    }
    return result;
}

// バイト値を16進文字列に変換
function	byte_to_hex	(byte_num)
{
	var digits = (byte_num).toString(16);
    if (byte_num < 16) return '0' + digits;
    return digits;
}

// バイト配列を16進文字列に変換
function	bytes_to_hex_string		(bytes)
{
	var	result = "";

	for (var i = 0; i < bytes.length; i++) {
		result += byte_to_hex(bytes[i]);
	}
	return result;
}

// 16進文字列をバイト値に変換
function	hex_to_byte		(hex_str)
{
	return parseInt(hex_str, 16);
}

// バイト配列を16進文字列に変換
function	hex_string_to_bytes		(hex_str)
{
	var	result = [];

	for (var i = 0; i < hex_str.length; i+=2) {
		result.push(hex_to_byte(hex_str.substr(i,2)));
	}
	return result;
}

// UTF8のバイト配列を文字列に変換
function	utf8_bytes_to_string	(arr)
{
    if (arr == null)
        return null;
    var result = "";
    var i;
    while (i = arr.shift()) {
        if (i <= 0x7f) {
            result += String.fromCharCode(i);
        } else if (i <= 0xdf) {
            var c = ((i&0x1f)<<6);
            c += arr.shift()&0x3f;
            result += String.fromCharCode(c);
        } else if (i <= 0xe0) {
            var c = ((arr.shift()&0x1f)<<6)|0x0800;
            c += arr.shift()&0x3f;
            result += String.fromCharCode(c);
        } else {
            var c = ((i&0x0f)<<12);
            c += (arr.shift()&0x3f)<<6;
            c += arr.shift() & 0x3f;
            result += String.fromCharCode(c);
        }
    }
    return result;
}

//UNIXタイムから、Y-m-d形式に変換する関数
function unixTime2ymd(intTime){
    // var d = new Date( intTime );
    var d = new Date( intTime * 1000 );
    var year  = d.getFullYear();
    var month = d.getMonth()+1;
    var day  = d.getDate();
    var hour = ( '0' + d.getHours() ).slice(-2);
    var min  = ( '0' + d.getMinutes() ).slice(-2);
    var sec   = ( '0' + d.getSeconds() ).slice(-2);

    return( year + '年' + month + '月' + day + '日 ' + hour + ':' + min + ':' + sec );

}

//UNIXタイムを取得する
function getUnixTime(year,month,day,hour,minute,sec) {
	// Dateオブジェクトを作成
	var date = new Date( year, month-1, day, hour, minute, sec ) ;
	// UNIXタイムスタンプを取得する (ミリ秒単位)
	var a = date.getTime() ;
	// UNIXタイムスタンプを取得する (秒単位 - PHPのtime()と同じ)
	var b = Math.floor( a / 1000 ) ;
	return b;
}

//今のUNIXタイムを取得する
function getUnixTimeNow() {
	// Dateオブジェクトを作成
	var date = new Date() ;
	// UNIXタイムスタンプを取得する (ミリ秒単位)
	var a = date.getTime() ;
	// UNIXタイムスタンプを取得する (秒単位 - PHPのtime()と同じ)
	var b = Math.floor( a / 1000 ) ;
	return b;
}

// コントラクトの関数呼び出し用
/*************************************
// VoteSystem 非同期⇒同期ラッピング関数
*************************************/
//VoteMaster
VoteMaster = function(voteMaster) {
  this.voteMaster = voteMaster;
};

// checkOwnerのラッピング関数
VoteMaster.prototype.checkOwner = function(_addr) {
    return new Promise(resolve => {
		this.voteMaster.checkOwner(_addr,
			function(error,result) {
				if(!error) {
					console.log("checkOwner OK");
					console.log(result);
					resolve(result);
				} else {
					console.log("checkOwner NG");
				}
			}
		);
    })
};

// chkEndのラッピング関数
VoteMaster.prototype.chkEnded = function() {
    return new Promise(resolve => {
		this.voteMaster.chkEnded(
			function(error,result) {
				if(!error) {
					console.log("chkEnd OK");
					console.log(result);
					resolve(result);
				} else {
					console.log("chkEnd NG");
				}
			}
		);
    })
};


// getVoteMasterAddressのラッピング関数
VoteMaster.prototype.getVoteMasterAddress = function() {
    return new Promise(resolve => {
		this.voteMaster.getVoteMasterAddress(
			function(error,result) {
				if(!error) {
					console.log("getVoteMasterAddress OK");
					console.log(result);
					resolve(result);
				} else {
					console.log("getVoteMasterAddress NG");
				}
			}
		);
    })
};

// resetのラッピング関数
VoteMaster.prototype.reset = function(_deadline, _odai) {
    return new Promise(resolve => {
		this.voteMaster.reset(_deadline,_odai,
			function(error,result) {
				if(!error) {
					console.log("reset OK");
					console.log(result);
					resolve(true);
				} else {
					console.log("reset NG");
					resolve(false);
				}
			}
		);
    })
};

// getDeadlineのラッピング関数
VoteMaster.prototype.getDeadline = function() {
    return new Promise(resolve => {
		this.voteMaster.getDeadline(
			function(error,result) {
				if(!error) {
					console.log("getDeadline OK");
					console.log(result);
					resolve(result);
				} else {
					console.log("getDeadline NG");
					resolve(false);
				}
			}
		);
    })
};

// getOdaiのラッピング関数
VoteMaster.prototype.getOdai = function() {
    return new Promise(resolve => {
		this.voteMaster.getOdai(
			function(error,result) {
				if(!error) {
					console.log("getOdai OK");
					console.log(result);
					resolve(result);
				} else {
					console.log("getOdai NG");
					resolve(false);
				}
			}
		);
	})
};

//getCounterAddressListのラッピング関数
VoteMaster.prototype.getCounterAddressList = function() {
    return new Promise(resolve => {
		this.voteMaster.getCounterAddressList(
			function(error,result) {
				if(!error) {
					console.log("checkOwner OK");
					console.log(result);
					resolve(result);
				} else {
					console.log("checkOwner NG");
				}
			}
		);
    })
};

//addCounterのラッピング関数
VoteMaster.prototype.addCounter = function(_name) {
    return new Promise(resolve => {
		this.voteMaster.addCounter(_name,
			function(error,result) {
				if(!error) {
					console.log("addCounter OK");
					console.log(result);
					resolve(result);
				} else {
					console.log("addCounter NG");
				}
			}
		);
    })
};

//getCounterNameのラッピング関数
VoteMaster.prototype.getCounterName = function(_item) {
    return new Promise(resolve => {
		this.voteMaster.getCounterName(_item,
			function(error,result) {
				if(!error) {
					console.log("getCounterName OK");
					console.log(result);
					resolve(result);
				} else {
					console.log("getCounterName NG");
				}
			}
		);
    })
};

//getNumberOfCounterのラッピング関数
VoteMaster.prototype.getNumberOfCounter = function(_item) {
    return new Promise(resolve => {
		this.voteMaster.getNumberOfCounter(_item,
			function(error,result) {
				if(!error) {
					console.log("getNumberOfCounter OK");
					console.log(result);
					resolve(result);
				} else {
					console.log("getNumberOfCounter NG");
				}
			}
		);
    })
};

//getNumItemのラッピング関数
VoteMaster.prototype.getNumItem = function() {
    return new Promise(resolve => {
		this.voteMaster.getNumItem(
			function(error,result) {
				if(!error) {
					console.log("getNumItem OK");
					console.log(result);
					resolve(result);
				} else {
					console.log("getNumItem NG");
				}
			}
		);
    })
};

//voteResetのラッピング関数
VoteMaster.prototype.voteReset = function() {
    return new Promise(resolve => {
		this.voteMaster.voteReset(
			function(error,result) {
				if(!error) {
					console.log("voteReset OK");
					console.log(result);
					resolve(result);
				} else {
					console.log("voteReset NG");
				}
			}
		);
    })
};

//makeUserのラッピング関数
VoteMaster.prototype.makeUser = function(_addr) {
    return new Promise(resolve => {
		this.voteMaster.makeUser(_addr,
			function(error,result) {
				if(!error) {
					console.log("makeUser OK");
					console.log(result);
					resolve(result);
				} else {
					console.log("makeUser NG");
				}
			}
		);
    })
};

//countUpのラッピング関数
VoteMaster.prototype.countUp = function(_num) {
    return new Promise(resolve => {
		this.voteMaster.countUp(_num,
			function(error,result) {
				if(!error) {
					console.log("countUp OK");
					console.log(result);
					resolve(result);
				} else {
					console.log("countUp NG");
				}
			}
		);
    })
};

//userCountUpのラッピング関数
VoteMaster.prototype.userCountUp = function(_addr,_num) {
    return new Promise(resolve => {
		this.voteMaster.userCountUp(_addr,_num,
			function(error,result) {
				if(!error) {
					console.log("userCountUp OK");
					console.log(result);
					resolve(result);
				} else {
					console.log("userCountUp NG");
				}
			}
		);
    })
};

//getUserCounterNameのラッピング関数
VoteMaster.prototype.getUserCounterName = function(_addr, _namepoint) {
    return new Promise(resolve => {
		this.voteMaster.getUserCounterName(_addr, _namepoint,
			function(error,result) {
				if(!error) {
					console.log("getUserCounterName OK");
					console.log(result);
					resolve(result);
				} else {
					console.log("getUserCounterName NG");
				}
			}
		);
    })
};

//getUserCountのラッピング関数
VoteMaster.prototype.getUserCount = function(_addr) {
    return new Promise(resolve => {
		this.voteMaster.getUserCount(_addr,
			function(error,result) {
				if(!error) {
					console.log("getUserCount OK");
					console.log(result);
					resolve(result);
				} else {
					console.log("getUserCount NG");
				}
			}
		);
    })
};

//getMaxCountのラッピング関数
VoteMaster.prototype.getMaxCount = function() {
    return new Promise(resolve => {
		this.voteMaster.getMaxCount(
			function(error,result) {
				if(!error) {
					console.log("getMaxCount OK");
					console.log(result);
					resolve(result);
				} else {
					console.log("getMaxCount NG");
				}
			}
		);
    })
};

//setOwnerのラッピング関数
VoteMaster.prototype.setOwner = function(_newOwner) {
    return new Promise(resolve => {
		this.voteMaster.setOwner(_newOwner,
			function(error,result) {
				if(!error) {
					console.log("setOwner OK");
					console.log(result);
					resolve(result);
				} else {
					console.log("setOwner NG");
				}
			}
		);
    })
};

