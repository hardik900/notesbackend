const requestHandler = (reqCheckerFunc) =>{
    return (req, res, next) =>{
        Promise.resolve(reqCheckerFunc(req,res,next)).catch((err) => next(err))
    }
}

export {requestHandler}