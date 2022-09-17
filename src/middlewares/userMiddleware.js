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

    const validation = signUpSchema.validate(req.body);

    if (validation.error) {
        const errors = validation.error.details.map(value => value.message);
        return res.status(422).send(errors);
    }

    res.locals.user = req.body;
    next();
}

async function validateLogin (req, res, next) {
    const user = req.body;
    const validation = signInSchema.validate(user);

    if (validation.error) {
        const errors = validation.error.details.map(value => value.message);
        return res.status(422).send(errors);
    }

    res.locals.user = user;
    next();
}

export {validateNewUser, validateLogin}