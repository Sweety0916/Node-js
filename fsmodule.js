const fs=require('fs');
fs.writeFile('file.txt',"this is a data",()=>{
    console.log("written to the file")
});
b=fs.writeFileSync('file.txt',"this is data")
console.log(b)
console.log("Finished reading file")