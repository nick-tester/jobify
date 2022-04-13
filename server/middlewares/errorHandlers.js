const notFoundMiddleware = (req, res) => {
    res.status(404).send(`${req.originalUrl} does NOT exist!`.yellow);
};

const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err.message);
    res.status(500).json({ status: res.statusCode, msg: err.message });
};

export { notFoundMiddleware, errorHandlerMiddleware };