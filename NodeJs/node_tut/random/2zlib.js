// Demonstrate the concept of compression and decompression using zlib module

const zlib = require('zlib');
const input = 'Hello, world!';

// Compress the input data
zlib.deflate(input, (err, compressed) => {
  if (err) {
    console.error('Compression error:', err);
  } else {
    console.log('Compressed data:', compressed.toString('base64'));

    // Decompress the compressed data
    zlib.inflate(compressed, (err, decompressed) => {
      if (err) {
        console.error('Decompression error:', err);
      } else {
        console.log('Decompressed data:', decompressed.toString());
      }
    });
  }
});