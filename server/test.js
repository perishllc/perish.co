// import { generate, verify } from "https://esm.sh/nano-uri";
// import { tools } from "https://esm.sh/nanocurrency-web";

// const ed25519 = require("@trashman/ed25519-blake2b");


// const ed25519 = require('@trashman/ed25519-blake2b');

const nacl = require("tweetnacl-blake2b");



// function detachedVerify(message, signature, publicKey) {
//   if (signature.length != signatureLength) return false;
//   if (publicKey.length != publicKeyLength) return false;
//   let sm = Uint8Array(signatureLength + message.length);
//   let m = Uint8Array(signatureLength + message.length);
//   for (let i = 0; i < signatureLength; i++) sm[i] = signature[i];
//   for (let i = 0; i < message.length; i++)
//     sm[i + signatureLength] = message[i];
//   return (TweetNaclFast.cryptoSignOpen(m, -1, sm, 0, sm.length, publicKey) >=
//     0);
// }


let options = {
  "account": "nano_11qwaxtmb5c7xc16wat5rgirbxzug1kgq8tf996xi8kf5cdcrjyaiy39foun",
  "signature": "7E73261CA0EE948086F895B37C100B25EA55ED02C87CF73671DAFBED7E1AB5A70B699BDC1DFB54033EDC42F60743BC55E43CC1522254F23EFACBF99E9728A508",
  "signed": "736F6D655F72616E646F6D5F6E6F6E63653A313636313430363039383A4C6F67696E20746F205065726973683A6E616E6F5F33383731337839357A796A73717A78366E6D3164736F6D316A6D6D3636386F776B6562393931336178366E66676A3135617A336E7538786B78353739",
  "formatted": "some_random_nonce:1661406098:Login to Perish:nano_38713x95zyjsqzx6nm1dsom1jmm668owkeb9913ax6nfgj15az3nu8xkx579",
  "message": "See this content after login",
  "label": "Login to Perish"
}

// let publicKey = tools.addressToPublicKey(options.account);
let publicKey = "02fc4775348d45ea804e2343c3a184f7fb7024eb9b4d39c9d81a4d1a96ac47c8";



// mySig: 3717D07189B6C3BFA734B41E26E75318AB88C7D99FD3405ACA2460BDF783121F7DD072E7C591EFF1CD6DE0C86240B89550163766E7150B21E85783359879B30C
// coSig: eb3efcac2d7cef25bb87041d40dc9bec97e711e085c12bbebab2ff5e8d8b1a6fd8314dd9c88f73f0c0f6c13f9f039b6d9fd180cc2fa67050cc0c116402df4201

function hexStringToByteArray(hexString) {
  if (hexString.length % 2 !== 0) {
    throw "Must have an even number of hex digits to convert to bytes";
  }
  var numBytes = hexString.length / 2;
  var byteArray = new Uint8Array(numBytes);
  for (var i = 0; i < numBytes; i++) {
    byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
  }
  return byteArray;
}

function hex2ba(hex) {
  const ab = [];
  for (let i = 0; i < hex.length; i += 2) {
    ab.push(parseInt(hex.substr(i, 2), 16));
  }
  return new Uint8Array(ab);
}


let formatted = String.fromCharCode(...hexStringToByteArray(options.signed));

console.log(`formats match: ${formatted === options.formatted}`);

// console.log(publicKey);

// let isValid = tools.verify(publicKey, options.signature, options.signed);

// let isValid = ed25519.verify(options.signature, options.signed, publicKey);


// let signature = "68E10A74A7274E1DBD5440E1E2876BBF320929C7F3B8EAA7EFDF65795F24E87C2887FF6B3CD2781BD8FF597FCC9B969D52E4604A0FB3015E2E2B4A86390C9607";
// let signed = "AB";

// let signed = hex2ba(options.signed);
// let signature = hex2ba(options.signature);
// let publicKey = hex2ba(publicKey);
// let isValid = nacl.sign.detached.verify(signed, signature, publicKey);

// console.log("correct sig: " + tools.sign("F9F2E3184AAA800CCA1DECD32829BE32FC837FFCBFC88A3C17E0CD6B86E235C3", options.signed));


console.log(`isValid: ${isValid}`);
