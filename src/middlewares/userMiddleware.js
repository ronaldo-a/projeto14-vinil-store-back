import joi from "joi";

const signUpSchema = joi.object({
    username: joi.string().required().min(1),
    email: joi.string().email().required().min(1),
    password: joi.string().required().min(6)
})

const signInSchema = joi.object({
    email: joi.string().email().required().min(1),
    password: joi.string().required().min(6),
})

async function validateNewUser (req, res, next) {

    const validation = signUpSchema(req.body);

    if (validation.error) {
        const errors = validation.error.details.map(value => value.message);
        return res.status(422).send(errors);
    }

    next();
}

async function validateLogin (req, res, next) {
    user = req.body;
    const validation = signInSchema(user);

    if (validation.error) {
        const errors = validation.error.details.map(value => value.message);
        return res.status(422).send(errors);
    }

    res.locals.user = user;
    next();
}

export {validateNewUser, validateLogin}