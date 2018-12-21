pragma solidity ^0.4.17;

contract Lottery{

    address public manager;//管理员的地址
    address[] public players;//投注者的地址
    address public winner;//中奖者的地址

    function Lottery() public{
        manager =  msg.sender;
    }

    function getManager() public view returns (address){
        return manager;
    }

    //投注彩票
    function enter() public payable {
        require(msg.value == 1 ether);
        players.push(msg.sender);
    }
    //返回所有的投注彩票的人
    function  getAllPlayers() public view returns (address[]){
        return players;
    }
    function getBalance() public view returns(uint){
        return this.balance;
    }
    function getPlayersCount() public view returns(uint){
        return players.length;
    }

    function random() private view  returns (uint){
        return  uint(keccak256(block.difficulty, now, players));
    }

    //这个函数的返回值是当前交易的id
    //（注意：这里send方法不能有返回值，即使你这里设置返回值（如returns(address)）,返回也不是中奖者的地址，而是该笔交易的哈希值）
    function  pickWinner() public onlyManagerCanCall {
        uint index = random() % players.length;
        winner =  players[index];
        players = new address[](0) ;
        winner.transfer(this.balance);
    }

    function refund() public onlyManagerCanCall{

        for(uint i = 0;i<players.length;i++){
            players[i].transfer(1 ether);
        }
        players = new address[](0) ;
    }

    modifier onlyManagerCanCall(){
        require(msg.sender == manager);
        _;
    }

}
