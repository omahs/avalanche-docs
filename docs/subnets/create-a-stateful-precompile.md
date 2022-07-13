# Create a Stateful Precompile

Stateful Precompiles offer a novel interface for subnet developers to add functionality to their EVM chain without writing a single line of Solidity. Stateful Precompiles integrate natively within the EVM by building on top of the interface offered by EVM precompiles, while adding in state access for an expanded range of possibilities. This allows developers and users to benefit from the ability to create functionality otherwise impossible within the EVM while also making smart contracts more performant and gas efficient.

This tutorial will walk you through the full development workflow of creating a new Stateful Precompile by building a toy example: "Hello World Stateful Precompile".

## Getting Started

Note: skip this section if you have already cloned `subnet-evm`.

To get started, we'll assume that you have already cloned AvalancheGo into the default location within your `$GOPATH`. We'll start out by going into the parent directory of `avalanchego`, so that we can clone `subnet-evm` to sit adjacent to `avalanchego`.

```bash
cd $GOPATH/src/github.com/ava-labs
git clone https://github.com/ava-labs/subnet-evm.git
cd subnet-evm
```

Now that we've cloned `subnet-evm`, you should open it in your editor of choice and we'll get started implementing our "Hello World" application.

## Solidity Interface

Now it's time to implement the Stateful Precompile. To start out, let's define the Solidity interface that we want the precompile to implement.

For HelloWorld, we will implement two functions `sayHello()` and `setRecipient(string calldata recipient)`.

`sayHello` will simply return a "Hello ..." string to the caller and `setRecipient` will set the latter half of the string returned by `sayHello`.

Once we've implemented the Solidity interface, it's time to set up the contract itself.

## Precompile Implementation


1. Add new address for the Stateful Precompile to `precompile/params.go` and add it to `usedAddresses`.
2. Create a new file called `precompile/hello_world.go`.
3. Implement the full config and contract interface with methods to fill in and type checks so everything passes
4. Implement the actual BlockTimestamp, Address, and Contract functions to return the singleton contract (note: singleton should be safe to call concurrently)
5. Implement the Configure function to set up the address space of the precompile - this will set the original recipient in the state
6. Implement packer/unpacker functions, create the function selectors as vars at the top of the file, and two functions sayHello and setRecipient to perform the actual functionality following the interface
7. Implement `createHelloWorldPrecompile` which simply wraps these two functions together into one contract
8. Update the config to return the actual contract

## Adding the Precompile to the Chain Config

1. Add `precompile.HelloWorldConfig` to `params/config.go` in the same way as for the others
2. Add to String() function
3. Add `IsHelloWorld` function
4. Add to `checkCompatible` to ensure that we do not allow invalid upgrades
5. Add to `rules` type
6. Add to `AvalancheRules`
7. Add to `enabledStatefulPrecompiles()` so that it will be activated correctly

## Writing Stateful Precompile Unit Tests

Follow the same style in `core/stateful_precompile_test.go` to add unit tests:

- set recipient read only
- set recipient no read only
- sayHello normal
- sayHello after setting the recipient

Note: we should mention that we can also add tests in `plugin/evm/vm_test.go` or `core/blockchain_test.go` if the precompile is intended to modify the behavior of the VM beyond just the state transition it performs ex. TxAllowList blocks addresses from issuing transactions, so this changes the behavior of `core/tx_pool.go` and `core/state_transition.go`.

## Add HardHat Tests

Add HardHat tasks to e2e tests to show how it can be used from HardHat

## Use from Remix

Example of how to use it in Remix
## Call Directly in a Transaction

Example of how to call it directly from a transaction without going through a smart contract
