pragma solidity ^0.4.22;

import "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "zeppelin-solidity/contracts/ownership/Ownable.sol";

contract RainbowToken is ERC721Token, Ownable {

    string[] public colors;
    
    constructor (string _name, string _symbol) public ERC721Token(_name, _symbol) {
        uint _colorId = colors.push("Red") - 1;
        _mint(msg.sender, _colorId);
        _colorId = colors.push("Orange") - 1;
        _mint(msg.sender, _colorId);
        _colorId = colors.push("Yellow") - 1;
        _mint(msg.sender, _colorId);
        _colorId = colors.push("Green") - 1;
        _mint(msg.sender, _colorId);
        _colorId = colors.push("Blue") - 1;
        _mint(msg.sender, _colorId);
        _colorId = colors.push("Indigo") - 1;
        _mint(msg.sender, _colorId);
        _colorId = colors.push("Violet") - 1;
        _mint(msg.sender, _colorId); 
    }

    function getColor (uint _colorId) view public returns (string) {
        return colors[_colorId];
    }   
}
