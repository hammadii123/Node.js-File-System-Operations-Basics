const fs = require('fs');


// fs.writeFile
// fs.copyFile
// raname
// fs.appendFile
// unlink


// // 1))fs.WriteFile
fs.writeFile("hammad.txt","Hello how are you !",function(err){
    if(err){
        console.log("There is an error writing the file")
    }
    else{
        console.log("File is written successfully")
    }
})


// // 2))
fs.appendFile('hammad.txt', ' Long time no see where have you been', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
}); 


// // 3))rename (Ye file ka name change krdega)
fs.rename('hammad.txt','newFile.txt',(error)=>{
    if (error){
        console.log(error)
    }
    else{
        console.log("The 'rename' is also done successfully ")
    }

})


// // 4))Copyfile
//first created folder name copy in which i will be copying my this file and giving the name copy.txt
fs.copyFile("newFile.txt",'./copy/copy.txt',(err)=>{
    if (err){
        console.log(err.message)
    }
    else{
        console.log("Copying file done...")
    }
})


// 5))Unlink===delete the file
fs.unlink('newFile.txt',(error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("Unlink(deletion of file done)...")
    }
})



// 6))fs.rmdir (Ye jis folder me kuch)
// fs.rmdir("./copy",(error)=>{ //it deletes the emty folders only
fs.rm("./copy",{recursive:true},(error)=>{ //it deletes empty or non empty folders both 

    if(error) console.log(error.message)

    else console.log("removed using rmdir")
})