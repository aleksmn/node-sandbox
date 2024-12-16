import fs from 'fs';


fs.readFile('example.txt', 'utf8', (err, data) => { 
  if (err) { 
    console.error('Ошибка чтения файла:', err); 
    return; 
  } 
  console.log('Содержимое файла:', data); 
});
