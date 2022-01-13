function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

// 'Product2'
// 'Product not found!'

// Both the case for '113' executes as it is exact match but also the defualt 
// case executes as there is no break statement

// Also 'Product3' is printed as the case statement no longer needs to be true