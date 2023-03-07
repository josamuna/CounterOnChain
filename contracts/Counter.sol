// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract Counter {
    uint256 private _count;

    function increment() external {
        _count += 1;
    }

    function decrement() external {
        if (_count != 0) {
            _count -= 1;
        }
    }

    function currentValue() public view returns (uint256) {
        return _count;
    }
}
