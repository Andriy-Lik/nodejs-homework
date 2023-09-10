const validateFavorite = schema => {
    const func = (req, res, next) => {
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({message: "missing field favorite"});
        } else {
            const { error } = schema.validate(req.body);
            if (error) {
                return res.status(400).json({message: error.message});
            }
            next()
        }
    }
    return func;
}

module.exports = validateFavorite;