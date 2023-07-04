// My First Smart Contract 
pragma solidity 0.8.9;



contract helloworld4{
 
 uint storedData;
    function set(uint x) public {
        storedData = x;
    }
    function get() public view returns (uint) {
        return storedData;
    }     
}
