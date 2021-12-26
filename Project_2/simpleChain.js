
/* ===== Block Class ===================================
|  Class with a constructor for block data model       |
|  ====================================================*/

class Block {
    constructor(data){
      this.height = '';
      this.timeStamp = '';
      this.data = data;
      this.previousHash = '0x';
      this.hash = '';
    }
  }