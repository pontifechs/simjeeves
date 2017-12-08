

import {spawn} from 'child_process';
import * as tmp from 'tmp';
import * as fs from 'fs';



export const executeSim = (apl) => {

  // TODO:: de-sync?
  const tmpFile = tmp.fileSync();
  console.log('File: ', tmpFile.name);
  console.log('Filedescriptor: ', tmpFile.fd);

  fs.writeSync(tmpFile.fd, apl);

  const ls = spawn(__dirname + '/simc', [tmpFile.name]);

  ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
};