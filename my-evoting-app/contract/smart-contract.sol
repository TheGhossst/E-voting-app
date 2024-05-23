// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Ballot {
    struct Candidate {
        bytes32 name;
        uint voteCount;
    }

    struct Voter {
        bool voted;
    }

    address private owner;
    Candidate[] public candidates;
    mapping(address => Voter) public voters;
    address payable recipient = payable(0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2);
    uint public voterCount;
    uint public votingLimit;
    bool public votingClosed;

    modifier Owner {
        require(msg.sender == owner, "The action can only be authorized by the owner");
        _;
    }

    constructor(bytes32[] memory _candidateNames, uint _votingLimit) {
        owner = msg.sender;
        votingLimit = _votingLimit;
        for (uint i = 0; i < _candidateNames.length; i++) {
            candidates.push(Candidate({name: _candidateNames[i], voteCount: 0}));
        }
        votingClosed = false;
    }

    function giveVoteRights(address) public payable Owner {
        require(msg.value == 1000, "Insufficient funds");
        recipient.transfer(1000);
        voters[recipient].voted = false;
    }

    function addCandidates(bytes32 _candidateName) public Owner {
        require(!votingClosed, "Voting is closed, and no more candidates can be added");
        candidates.push(Candidate({name: _candidateName, voteCount: 0}));
    }

    function readOwner() public view returns (address) {
        return owner;
    }

    function readCandidates() public view returns (Candidate[] memory) {
        return candidates;
    }

    function vote(bytes32 _candidateName) public {
        require(!votingClosed, "Voting is closed, and no more votes can be cast");
        require(!voters[msg.sender].voted, "This person has already voted");
        uint _done = 0;
        for (uint i = 0; i < candidates.length; i++) {
            if (candidates[i].name == _candidateName) {
                candidates[i].voteCount++;
                voters[msg.sender].voted = true;
                voterCount++;
                _done = 1;
                break;
            }
        }
        require(_done == 1, "No such candidates exist");
        if (voterCount >= votingLimit) {
            closeVoting();
        }
    }

    function closeVoting() private {
        votingClosed = true;
    }
}