const fs = require('fs');
const path = require('path');

const fetchCachePath = path.join(__dirname, '.next', 'cache', 'fetch-cache');

// キャッシュディレクトリの中身を削除
function clearFetchCache(dir) {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach(file => {
      const currentPath = path.join(dir, file);
      if (fs.lstatSync(currentPath).isDirectory()) {
        clearFetchCache(currentPath);
      } else {
        fs.unlinkSync(currentPath);
      }
    });
  }
}

// ディレクトリの削除
function removeDirectory(dir) {
  if (fs.existsSync(dir)) {
    fs.rmdirSync(dir, { recursive: true });
  }
}

// キャッシュディレクトリを削除
removeDirectory(fetchCachePath);
console.log(`Cleared fetch cache at ${fetchCachePath}`);