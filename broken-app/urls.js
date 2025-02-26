const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

// Get the filename from the command line arguments
const [, , filename] = process.argv;

// Function to download the content of a URL
const downloadUrl = (url) => {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;

    client.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(`Failed to download ${url} - Status Code: ${response.statusCode}`);
        return;
      }

      let data = '';
      response.on('data', (chunk) => (data += chunk));
      response.on('end', () => resolve(data));
    }).on('error', (err) => reject(`Failed to download ${url} - ${err.message}`));
  });
};

// Function to write content to a file
const writeFile = (filename, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, content, (err) => {
      if (err) reject(`Failed to write to ${filename} - ${err.message}`);
      else resolve(`Wrote to ${filename}`);
    });
  });
};

// Main function
const main = async () => {
  if (!filename) {
    console.error('Please provide a filename as an argument.');
    process.exit(1);
  }

  try {
    const urls = fs.readFileSync(filename, 'utf8').split('\n').filter(Boolean);

    const promises = urls.map(async (url) => {
      try {
        const content = await downloadUrl(url);
        const hostname = new URL(url).hostname;
        const outputFilename = path.join(__dirname, hostname);

        const result = await writeFile(outputFilename, content);
        console.log(result);
      } catch (err) {
        console.error(err);
      }
    });

    await Promise.all(promises);
  } catch (err) {
    console.error(`Failed to read the file: ${filename} - ${err.message}`);
    process.exit(1);
  }
};

main();
