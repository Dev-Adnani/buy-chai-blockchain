// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Chai {

    struct Memo {
        string message;
        string name;
        uint256 timestamp;
        uint256 amount;
        address from;
    }

    Memo[] private memos;
    address payable public owner;
    uint256 public totalDonations;

    event NewMemo(
        string message,
        string name,
        uint256 timestamp,
        uint256 amount,
        address indexed from
    );

    constructor() {
        owner = payable(msg.sender);
    }

    function buyChai(string calldata _name, string calldata _message) external payable {
        require(msg.value > 0, "Amount should be greater than 0");

        owner.transfer(msg.value);

        // Update total donations
        totalDonations += msg.value;

        // Add memo
        memos.push(Memo(_message, _name, block.timestamp, msg.value, msg.sender));

        // Emit event
        emit NewMemo(_message, _name, block.timestamp, msg.value, msg.sender);
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }

    // Since we're maintaining `totalDonations`, this function is no longer needed
    function getChaiDonationAmount() public view returns (uint256) {
        return totalDonations;
    }
}
