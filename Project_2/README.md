# Test the file

`` node ``

```
const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(data){
      this.height = '';
      this.timeStamp = '';
      this.data = data;
      this.previousHash = '0x';
      this.hash = '';
    }
  }

class Blockchain{
   constructor(){
     this.chain = [];
     this.addBlock(this.createGenesisBlock());
  }
 
 createGenesisBlock(){
   return new Block("First block in the chain - Genesis block");
 }
 
 addBlock(newBlock){
    if (this.chain.length>0) {
        newBlock.previousHash = this.chain[this.chain.length-1].hash;
    }
    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
    this.chain.push(newBlock);
  }
 }
```

``let blockchain = new Blockchain()``

``blockchain.addBlock(new Block('test'))``

``blockchain.chain``

## result should be: 

```
[
  Block {
    height: '',
    timeStamp: '',
    data: 'First block in the chain - Genesis block',
    previousHash: '0x',
    hash: '2b531ce3be7127c3bc382c13fdb20c73c5f711489b75698934f789be11f78a5f'
  },
  Block {
    height: '',
    timeStamp: '',
    data: 'test',
    previousHash: '2b531ce3be7127c3bc382c13fdb20c73c5f711489b75698934f789be11f78a5f',
    hash: '72adeb61f9d6339e5272778bf9bfbc83770be01bb299fe6f2129b2f5e5aff407'
  }
]
```

## add another block: 

``blockchain.addBlock(new Block('test 2'))     ``

``blockchain.chain``
## result should be: 

```

[
  Block {
    height: '',
    timeStamp: '',
    data: 'First block in the chain - Genesis block',
    previousHash: '0x',
    hash: '2b531ce3be7127c3bc382c13fdb20c73c5f711489b75698934f789be11f78a5f'
  },
  Block {
    height: '',
    timeStamp: '',
    data: 'test',
    previousHash: '2b531ce3be7127c3bc382c13fdb20c73c5f711489b75698934f789be11f78a5f',
    hash: '72adeb61f9d6339e5272778bf9bfbc83770be01bb299fe6f2129b2f5e5aff407'
  },
  Block {
    height: '',
    timeStamp: '',
    data: 'test 2',
    previousHash: '72adeb61f9d6339e5272778bf9bfbc83770be01bb299fe6f2129b2f5e5aff407',
    hash: 'e6c48f272db1f1b6f2df027dd16bf4852712e7e2d0c28084dab29941042530a9'
  }
]
```