pragma solidity >=0.4.22 <0.7.0;
pragma experimental ABIEncoderV2;



// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract Kursor {
	mapping (address => uint) balances;
	// те курсы, которые проходит пользователь
	mapping (address => string[]) userCourses;
	// те курсы, кот создал пользователь
	mapping (address => string[]) authorToCource;
	// название курса в курс
	mapping (string => Course) nameToCource;

	event Transfer(address indexed _from, address indexed _to, uint256 _value);


    struct Course {
        string name;
		address author;
    }

	constructor() public {

	}

	function getBalance(address addr) public view returns(uint) {
		return balances[addr];
	}

	function getCourse(string memory name) public view returns( Course memory) {
		return nameToCource[name];
	}

    function createCourse(string memory _name) public  {
		Course memory cVar = Course(_name, msg.sender);
		nameToCource[_name] =  cVar;
		authorToCource[msg.sender].push(_name);
    }

}
