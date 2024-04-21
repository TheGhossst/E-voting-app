// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingContract {
    struct Voter {
        bool hasVoted;
        uint256 voteCount;
    }

    struct Candidate {
        string name;
        uint256 voteCount;
    }

    mapping(address => Voter) public voters;
    Candidate[] public candidates;

    event VoteCast(address voter, uint256 candidateId);

    constructor(string[] memory _candidateNames) {
        for (uint256 i = 0; i < _candidateNames.length; i++) {
            candidates.push(Candidate({
                name: _candidateNames[i],
                voteCount: 0
            }));
        }
    }

    function vote(uint256 candidateId) public {
        require(!voters[msg.sender].hasVoted, "You have already voted.");
        bool candidateExists = false;
        for (uint256 i = 0; i < candidates.length; i++) {
            if (i == candidateId) {
                candidateExists = true;
                break;
            }
        }
        
        require(candidateExists, "Invalid candidate ID.");

        voters[msg.sender].hasVoted = true;
        voters[msg.sender].voteCount++;
        candidates[candidateId].voteCount++;

        emit VoteCast(msg.sender, candidateId);
    }

    function getCandidateVotes(uint256 candidateId) public view returns (uint256) {
        require(candidateId < candidates.length, "Invalid candidate ID.");
        return candidates[candidateId].voteCount;
    }

    function getVoterStatus(address voterAddress) public view returns (bool, uint256) {
        return (voters[voterAddress].hasVoted, voters[voterAddress].voteCount);
    }
}