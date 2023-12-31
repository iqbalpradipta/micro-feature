import * as Joi from "joi";

export const createArticleSchema = Joi.object({
    title: Joi.string().min(5).max(50).required(),
    img: Joi.string().required(),
    author: Joi.string().required(),
    description: Joi.string().min(5).required(),
});
