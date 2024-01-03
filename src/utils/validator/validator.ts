import * as Joi from "joi";

export const createArticleSchema = Joi.object({
    title: Joi.string().min(5).max(50).required(),
    img: Joi.string().allow(null),
    author: Joi.string().required(),
    description: Joi.string().min(5).required(),
});

export const createPaslonSchema = Joi.object({
    name: Joi.string().max(50).required(),
    nomorUrut: Joi.number().required(),
    visiMisi: Joi.string().required(),
    img: Joi.string().allow(null),
    koalisi: Joi.string().allow(null),
})

export const createPartaiSchema = Joi.object({
    name: Joi.string().max(50).required(),
    ketum: Joi.string().required(),
    visiMisi: Joi.string().required(),
    alamat: Joi.string().required(),
    img: Joi.string().allow(null),
})

export const createUserSchema = Joi.object({
    fullName: Joi.string().required(),
    alamat: Joi.string().required(),
    jenisKelamin: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
})

export const createLoginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
})

