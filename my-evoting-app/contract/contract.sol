// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Ballot 
{
    
    struct Candidate
    {
        bytes32 name;
        uint vote_count;
    }

    struct Voter {
        bool voted;
    }

    address private owner;
    Candidate[] public candidates;
    mapping (address => Voter) public  voters;
    address payable recipient = payable(0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2);

    modifier Owner {
        require(msg.sender == owner, "The action can only be authorized by the owner");
        _;
    }

    constructor(bytes32[] memory _candidateNames) 
    {
        owner = msg.sender;
        for (uint i=0; i<_candidateNames.length; i++)
        {
            candidates.push(
                Candidate({
                    name: _candidateNames[i],
                    vote_count: 0
                })
            );
        }
        
    }

    function giveVoteRights(address) Owner payable public {
        recipient.transfer(1000);
        voters[recipient].voted = false;
    }

    function addCandidates(bytes32 _candidateName) public Owner {
        candidates.push(
            Candidate(
                {
                    name: _candidateName,
                    vote_count: 0
                }
            )
        );
    }

    function readOwner() public view returns(address) {
        return owner;
    }

    function readCandidates() public view returns(Candidate[] memory) {
        return candidates;
    }

    function vote(bytes32 _candidateName ) public {
        require(!voters[msg.sender].voted, "This person has already voted");
        uint _done = 0;
        for(uint i=0; i<candidates.length; i++)
        {
            if(candidates[i].name == _candidateName)
            {
                candidates[i].vote_count++;
                voters[msg.sender].voted = true;
                _done = 1;
                break;
            }
        }

        require(_done == 1, "No such candidates exist");
    }
}