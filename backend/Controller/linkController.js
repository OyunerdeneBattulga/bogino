// eslint-disable-next-line no-unused-vars
const { request, response } = require('express');
const LinkModel = require('../Model/linkModel');
const crypto = require('crypto');

exports.createLink = async (request, response) => {
    try {
        const random = crypto.randomBytes(5).toString('hex');
        const link = await LinkModel.create({
            link: request.body.link,
            id: random,
            short: 'http://localhost:3000/' + random,
        });
        response.status(201).json({
            success: true,
            data: link,
        });
    } catch (error) {
        return response.status(400).json({ message: error });
    }
};

exports.hashLink = async (request, response) => {
    try {
        const owner = response.locals.id;
        console.log(owner);
        const random = crypto.randomBytes(5).toString('hex');
        const link = await LinkModel.create({
            link: request.body.link,
            id: random,
            short: 'http://localhost:3000/' + random,
            owner: request.userId,
        });
        response.status(201).json({
            success: true,
            data: link,
        });
    } catch (error) {
        return response.status(400).json({ message: error });
    }
};

exports.getPopulate = async (request, response) => {
    try {
        const link = await LinkModel.findById(request.body.id).populate('owner');
        response.status(200).json({
            message: true,
            data: link,
        });
    } catch (error) {
        console.log(error);
        return response.status(400).json({ message: false, data: error });
    }
};

exports.getLink = async (request, response) => {
    const { id } = request.params;
    try {
        const link = await LinkModel.findOne({ id: id });
        response.status(200).json({
            message: true,
            data: link,
        });
    } catch (error) {
        console.log(error);
        return response.status(400).json({ message: false, data: error });
    }
};

module.exports.getLinks = async (request, response  , name) => {
    try {
        const links = await LinkModel.find();
        response.status(200).json({
            message: true,
            data: links,
        });
    } catch (error) {
        // return response.status(400).json({ message: error, data: null });
        console.log(error)
    }
    return `${name}`
};

exports.deleteLink = async (request, response) => {
    const { id } = request.params;
    try {
        const link = await LinkModel.findByIdAndDelete(id);
        response.status(200).json({
            message: `user with ${request.params.id} id is delete`,
            data: link,
        });
    } catch (error) {
        response.status(400).json({ message: error, data: null });
    }
};
