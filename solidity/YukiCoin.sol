pragma solidity ^0.4.8;

//独自トークン
contract YukiCoin  {
    //状態変数
    string public name;      //トークン名  YukiCoinで登録予定
    string public symbol;    //単位        YUKで登録予定
    uint8 public decimals;   //小数以下の単位 0
    uint256 public totalSupply; //トークンの総量 100,000,000 (1億)登録予定
    mapping (address => uint256) public balanceOf; //各アドレスの残高
    
    //イベント通知
    event Transfer(address indexed from,address indexed to,uint256 value);
    
    //コンストラクタ
    function YukiCoin(uint _supply, string _name,string _symbol,uint8 _decimals) {
        balanceOf[msg.sender] = _supply; //msg.senderは関数を呼び出したもののアドレス(オーナのアドレス)
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        totalSupply = _supply;
    }
    
    function transfer(address _to,uint256 _value) {
        //不正送金チェック
        if (balanceOf[msg.sender] < _value) throw;
        if (balanceOf[_to] + _value < balanceOf[_to]) throw; //オーバーフローしないか？
        
        //送信アドレスと受信アドレスの残高を更新
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        //イベント通知
        Transfer(msg.sender, _to, _value);
        
    }
}
