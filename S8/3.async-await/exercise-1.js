
const runTimeOut = async () => {

try{
    const promise =  await new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    }) 
   
    console.log('Time out!')

}catch (error){
       console.error('Error:', error);
    }
};

runTimeOut();
