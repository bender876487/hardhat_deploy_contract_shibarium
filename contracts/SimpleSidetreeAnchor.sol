pragma solidity 0.8.9;
//pragma solidity 0.8.16;


contract SimpleSidetreeAnchor {
    uint256 public transactionNumber = 0;

    event Anchor(
        bytes32 anchorFileHash,
        uint256 indexed transactionNumber,
        uint256 numberOfOperations,
        address writer
    );

    function anchorHash(bytes32 _anchorHash, uint256 _numberOfOperations)
        public
    {
        emit Anchor(_anchorHash, transactionNumber, _numberOfOperations , msg.sender);
        transactionNumber = transactionNumber + 1;
    }
}
