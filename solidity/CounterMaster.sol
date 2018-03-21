pragma solidity ^0.4.8;

//カウンタ管理用Contract
contract CounterMaster {
    //カウンターContractのリスト
    //Contractはアドレスを指定して呼び出す必要があるため
    //アドレスとカウンターContractを対応するためのマップ情報
    mapping(address => Counter) private counters;
    //アドレスを管理する配列
    address[] private addressList;
    
    //カウンターContractを配列とマップに追加
    function addCounter(bytes32 name) public {
        //カウンターContractを作成
        Counter c = new Counter(name);
        //配列にアドレスを追加
        addressList.push(address(c));
        //マップにアドレスとカウンターContractを登録
        counters[address(c)] = c;
    }
    
    // カウンターContractのアドレスリストの取得
    function getCounterAddressList() public constant returns (address[] counterAddressList){
        counterAddressList = addressList;
    }
    
}

contract Counter {
    //カウンター項目名
    bytes32 counterName;
    //カウンター数
    uint32 numberOfCounter;
    //コンストラクタ(新規作成時にカウンター項目名項目名を設定)
    function Counter(bytes32 name) public {
        counterName = name;
    }
    //名前変更
    function setCounterName(bytes32 name) public {
        counterName = name;
    }
    //カウントアップ
    function countUp() public {
        numberOfCounter++;
    }
    //カウンター項目名の取得
    function getCounterName() public constant returns (bytes32 name) {
        return counterName;
    }
    //カウンタ数の取得
    function getNumberOfCounter() public constant returns (uint32 number) {
        return numberOfCounter;
    }
}