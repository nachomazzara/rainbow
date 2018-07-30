pragma solidity ^0.4.22;

import "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";

contract RainbowToken is ERC721Token, Ownable {
    using SafeMath for uint256;

    // CreateColor event
    event CreateColor(
        address indexed owner,
        uint256 indexed colorId,
        string uri
    );

    // colors name or hexa
    mapping(uint256 => string) public colors;
    
    /**
    * @dev When the contract is created, the rainbow colors are minted
    * tokenId 0 and color index 0 is invalid or empty token
    * @param _name token name
    * @param _symbol token symbol
    */
    constructor(string _name, string _symbol) public ERC721Token(_name, _symbol) {
        uint256 _colorId = totalSupply().add(1);
        colors[_colorId] = "red";
        _mint(msg.sender, _colorId);
        _colorId = totalSupply().add(1);
        colors[_colorId] = "orange";
        _mint(msg.sender, _colorId);
        _colorId = totalSupply().add(1);
        colors[_colorId] = "yellow";
        _mint(msg.sender, _colorId);
        _colorId = totalSupply().add(1);
        colors[_colorId] = "green";
        _mint(msg.sender, _colorId);
        _colorId = totalSupply().add(1);
        colors[_colorId] = "blue";
        _mint(msg.sender, _colorId);
        _colorId = totalSupply().add(1);
        colors[_colorId] = "indigo";
        _mint(msg.sender, _colorId);
        _colorId = totalSupply().add(1);
        colors[_colorId] = "violet";
        _mint(msg.sender, _colorId); 
    }

    /**
    * @dev Mint new colors
    * @param _color valid color name or hexa
    * @param _uri url to a json schema with the format { name: '', description: '', image: '' }
    * @return An uint representing the new token
    */
    function addColor(string _color, string _uri) public returns (uint) {
        uint _colorId = totalSupply().add(1);
        colors[_colorId] = _color;
        _mint(msg.sender, _colorId); 
        _setTokenURI(_colorId, _uri);
        emit CreateColor(msg.sender, _colorId, _uri);
        return _colorId;
    }

    /**
    * @dev Get the color name by tokenId
    * @return string with the color name
    */
    function getColor(uint _colorId) view public returns (string) {
        return colors[_colorId];
    }

    /**
    * @dev Update color name
    * @param _colorId color to be updated
    * @param _newColor the new color name
    */
    function setColor(uint _colorId, string _newColor) public canTransfer(_colorId) {
        colors[_colorId] = _newColor;
    }

    /**
    * @dev Update color metadata
    * @param _colorId color to be updated
    * @param _uri new uri
    */
    function setColorMetadata(uint256 _colorId, string _uri) public canTransfer(_colorId) {
        _setTokenURI(_colorId, _uri);
    }
}
