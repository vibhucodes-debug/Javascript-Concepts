
Error.prototype.message = function(status,message){
    const error = {
        message:message,
        status:status
    }
    return error
}

const tryCatch = async()=>{
    try{
        throw new Error();
    }catch(error){
       let err = error.message(404,"This is an error.")
       console.log(err)
       console.log(err.message)
       console.log(err.status)
    }
}
tryCatch()