pragma solidity ^0.4.19;

//オーナ機能
contract VoteSystem {
    // オーナーアドレス
    address private owner;
    // 投票のお題
    bytes32 private odai;
    // 投票者数
    uint private numVoter;
    // 締め切り
    uint private deadline;
    // 締め切りか否か
    bool private ended;
    
    //CounterMasterの移植
    mapping(uint => Con) private counters;
    //アドレスを管理する配列
    //address[] private addressList;
    //項目数
    uint private numItem;
    
    struct Con {
        //カウンター項目名
        bytes32 counterName;
        //カウンター数
        uint32 numberOfCounter;        
    }
    //VoteSystemUserの移植
    mapping(uint => User) public users;
    //ユーザ数
    uint private numUser;
    
    struct User {
        //ウォレットアドレス
        address addr;
        //ニックネーム
        bytes32 nickName;
        //投票した項目
        bytes32 counterName;
        //カウント
        uint32 numberOfCounter;
    }
    //ログ出力のイベント
    event logSet(uint para1,uint para2,uint para3);
    
    //オーナかどうかチェック
    modifier onlyOwner() {
        //オーナでなければエラー
        //各関数のonlyOwner関数でチェックされる
        require(msg.sender == owner);
        _;
    }
    
    //コンストラクタ
    function VoteSystem() public {
        //オーナをセット
        owner = msg.sender;
        //締め切りフラグ
        ended = false;
        
        numItem = 0;
    }
    
    //VoteSystemのオーナを変更する
    function setOwner(address _owner) public onlyOwner {
        owner = _owner;
    }
    //VoteSystemのオーナを取得する
    function getOwner() public constant returns (address) {
        return owner;
    }
    //VoteSystemのオーナかチェックする
    function checkOwner(address _addr) public constant returns (bool) {
        if(owner == _addr) {
            return true;
        } else {
            return false;
        }
    }
    
    //お題を設定する
    function setOdai(bytes32 _odai) public onlyOwner {
        odai = _odai;
    }
    //お題を取得する
    function getOdai() public constant returns (bytes32) {
        return odai;
    }
    
    //締め切りを設定する
    function setDeadline(uint _deadline) public onlyOwner {
        if(now < _deadline) {
            deadline = _deadline;

        }
    }
    //締め切りを取得する
    function getDeadline() public constant returns (uint) {
        return deadline;
    }
    
    //締め切りかどうかチェックする
    function chkEnded() public constant returns (bool) {
        if(now >= deadline) {
            //締め切り
            return true;
        } else {
            //投票中
            return false;
        }
    }
    
    //再度投票を開始する（リセット）
    function reset(uint _duration, bytes32 _odai) public onlyOwner {
        //締め切りを設定
        deadline = _duration;
        //投票のお題を設定
        odai = _odai;
        //締め切りフラグ
        ended = false;
        
        for(uint i=0;i<numItem;i++) {
            counters[i].counterName = "";
            counters[i].numberOfCounter = 0;
        }
        numItem = 0;
        
        for(i=0;i<numUser;i++) {
            users[i].counterName = "";
            users[i].numberOfCounter = 0;
        }
    }
    
    //投票全体とユーザ個別のカウントアップ
    //function voteCountUp(address _target_addr,address _user_addr) public {
    //    counterMaster.getCounter(_target_addr).countUp();
    //    voteSystemUser.getUser(_user_addr).countUp();
    //}    
    
    //CounterMasterの移植
    //カウンターContractを配列とマップに追加
    function addCounter(bytes32 name) public {
        //カウンターContractを作成
        //Counter c = new Counter(name);
        Con c = counters[numItem];
        c.counterName = name;
        c.numberOfCounter = 0;
        numItem++;
        
        //counters[address(c)] = c;
        
        //配列にアドレスを追加
        //addressList.push(address(c));
        //マップにアドレスとカウンターContractを登録
        //counters[address(c)] = c;
    }
    
    //項目名を取得する
    function getCounterName(uint _item) public constant returns (bytes32) {
        return counters[_item].counterName;
    }
    
    //カウント数を取得する
    function getNumberOfCounter(uint _item) public constant returns (uint32) {
        return counters[_item].numberOfCounter;
    }
    
    //カウントアップする(全体のカウントだけ)
    function countUp(uint _item) public {
        counters[_item].numberOfCounter++;
    }
    
    //カウントアップする(全体のカウントとユーザ個別のカウントも)
    //function countUp(uint _item, address _addr) public {
    //    
    //    //ユーザ追加
    //    bool user_exist = false;
    //    for(uint i=0;i < numUser;i++) {
    //        if(users[i].addr == _addr) {
    //            user_exist = true;
    //        }    
    //    }
    //    
    //    if(!user_exist) {
    //        //ユーザが存在しなければ追加する
    //        User u = users[numUser];
    //        u.addr = _addr;
    //        u.nickName = "";
    //        u.counterName = "";
    //        u.numberOfCounter = 0;
    //        numUser++;
    //    }
    //    
    //    //カウントアップ
    //   for(i=0;i < numUser;i++) {
    //        if(users[i].addr == _addr) {
    //            //ユーザカウントが0だったらカウントアップ
    //            if(users[i].numberOfCounter == 0) {
    //                //全体のカウント
    //                counters[_item].numberOfCounter++;
    //                //ユーザ個別
    //                users[i].numberOfCounter++;
    //                users[i].counterName = counters[_item].counterName;
    //                //break;
    //            }
    //        }
    //    }
    //}

    //項目数を取得する
    function getNumItem() public constant returns (uint) {
        return numItem;
    }
    
    //投票結果を求める
    function getMaxCount() public constant returns(uint) {
        uint maxCount = 0;
        
        //最多投票数を求める
        for(uint i=0;i<numItem;i++) {
            if(counters[i].numberOfCounter > maxCount) {
                maxCount = counters[i].numberOfCounter;
            }
        }
        
        return maxCount;
    }    
    /***************************************/
    //VoteSystemUserの移植
    /***************************************/
    //ユーザを追加する
    function makeUser(address _addr) public {
        bool user_exist = false;
        for(uint i=0;i < numUser;i++) {
            if(users[i].addr == _addr) {
                user_exist = true;
                break;
            }    
        }
        
        if(!user_exist) {
            //ユーザが存在しなければ追加する
            User u = users[numUser];
            u.addr = _addr;
            u.nickName = "";
            //u.counterName = "";
            //u.numberOfCounter = 0;
            numUser++;
        }
    }
    
    //ユーザ数を取得する
    function getNumUser() public constant returns (uint) {
        return numUser;
    }
    
    //ユーザのカウント数を取得する
    //function getUserCount(uint _numUser) public constant returns (uint) {
    //   return users[_numUser].numberOfCounter;
    //}
    
    //ユーザのカウント数を取得する(アドレス指定)
    function getUserCount(address _addr) public constant returns (uint) {
        for(uint i=0;i<numUser;i++) {
            if(users[i].addr == _addr) {
                break;
            }
        }
        return users[i].numberOfCounter;
    }
    
    //ユーザの項目を取得する(アドレス指定)
    function getUserCounterName(address _addr) public constant returns (bytes32) {
        for(uint i=0;i<numUser;i++) {
            if(users[i].addr == _addr) {
                break;
            }
        }
        return users[i].counterName;
    }
    
    //カウントアップする
    //function userCountUp(uint _numUser) public {
    //    users[_numUser].numberOfCounter++;
    //}
    
    //カウントアップする
    function userCountUp(address _addr, uint _namepoint) public {
        makeUser(_addr);
        
        for(uint i=0;i<numUser;i++) {
            if(users[i].addr == _addr) {
                if(users[i].numberOfCounter == 0) {
                    users[i].numberOfCounter++;
                    users[i].counterName = counters[_namepoint].counterName;
                    counters[_namepoint].numberOfCounter++;
                    break;
                }
            }
        }
        
    }  
    //コントラクトを破棄するための関数
    //function kill() public onlyOwner {
    //    selfdestruct(owner);
    //}
}
