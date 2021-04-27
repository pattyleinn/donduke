try{
    setTimeout(()=>{
        throw new Error("uh oh!")
    }, 2000)

}catch(e){
    console.log("I caught the error" + e.message)
}