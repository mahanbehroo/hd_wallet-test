pragma solidity 0.5.16;

contract SimpleStorage {
  string value;

  function set(string memory x) public {

    value = x;
  }
  function get() public view returns (string memory)  {

  return value;
  }

}
