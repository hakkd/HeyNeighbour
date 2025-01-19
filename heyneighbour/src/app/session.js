import CryptoJS from 'crypto-js';

export function encrypt(data) {
  const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'your-secret-key').toString();
  return ciphertext;
}

export function decrypt(ciphertext) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, 'your-secret-key');
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
}