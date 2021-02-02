# FakeWeave SDK

This is the SDK of the FakeWeave. FakeWeave is the testing environment of the Arweave. 

## Installation

> WARING: although there are no formal restrictions, this SDK should never be used into a production environment. It is intended to be used only as a testing tool for your Arweave-related projects. 

Install the SDK with: 

```shell
    npm install fakeweave --save-dev
```

and then import it in your project as the following: 

```javascript
    import fakeweave from 'fakeweave';
```
## Usage

The SDK supplies handlers for testing the followings: 

1. deploying files on the Arweave;
2. deploying and testing SmartWeave contracts on the Arweave;
