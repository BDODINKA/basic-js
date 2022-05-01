const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type
  }
  encrypt(message,key) {
    if (!message || !key){
      throw new Error('Incorrect arguments!');
    }

    let messages = message.toUpperCase();
    let keys = key.toUpperCase().repeat(Math.ceil(messages.length / key.length)).split('');
    let kode = '';

      for (let i = 0 ; i < messages.length; i++) {
        if (65 <= messages.charCodeAt(i) && messages.charCodeAt(i) < 91) {
          kode += String.fromCharCode(((messages.charCodeAt(i) + keys[0].charCodeAt(0)) % 26) + 65);
          keys.shift();
        } else {
          kode += messages.charAt(i)
        }
      }
       if(this.type === false){
      return kode.split('').reverse().join('')
    }
    return kode
  }
  decrypt(message,key) {
    if (!message || !key){
      throw new Error('Incorrect arguments!');
    }

    let messages = message.toUpperCase()
    let keys = key.toUpperCase().repeat(Math.ceil(messages.length / key.length)).split('')
    let kode = ''

    for (let i = 0 ; i < messages.length; i++){
      if (65 <= messages.charCodeAt(i) && messages.charCodeAt(i) < 91){
        kode += String.fromCharCode(((messages.charCodeAt(i) + 26 - keys[0].charCodeAt(0)) % 26 ) + 65)
        keys.shift()
      }
      else{
        kode+=messages.charAt(i)
      }
    }
      if(this.type === false){
      return kode.split('').reverse().join('')
    }
    return kode
    }

}

module.exports = {
  VigenereCipheringMachine
};
