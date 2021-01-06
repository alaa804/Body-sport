const logger = (req, res, next)=>{
    console.table({method: req.method, path: req.url});
    next();
};

module.exports = logger;