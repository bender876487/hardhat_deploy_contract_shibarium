// My First Smart Contract 
pragma solidity 0.8.9;



contract helloworld3{
 
    string userInput;
 
    function set(string memory finalValue) public
    {
        userInput = finalValue;
    }
 
    function get() public view returns(string memory){
        return userInput;
    }
     
}
