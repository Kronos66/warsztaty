(function ()
{
    'use strict';
    var phoneDAO = require('../DAO/carDAO');

    module.exports = function (router)
    {
        router.route('/api/car').get(function (request, respond)
        {
            phoneDAO.search().then(function (result)
            {
                respond.status(200).send(result);
            }).catch(function ()
            {
                respond.sendStatus(500);
            });
        }).post(function (request, respond)
        {
            phoneDAO.createNewOrUpdate(request.body).then(function (result)
            {
                respond.status(201).send(result);
            }).catch(function ()
            {
                respond.sendStatus(500);
            });
        });

        router.route('/api/car/:id').get(function (request, respond)
        {
            phoneDAO.getDetails(request.params.id).then(function (results)
            {
                respond.status(200).send(results);
            }).catch(function ()
            {
                respond.sendStatus(500);
            });
        }).delete(function (request, respond)
        {
            console.log(request.params);
            phoneDAO.removePhone(request.params.id).then(function ()
            {
                respond.sendStatus(200);
            }).catch(function ()
            {
                respond.sendStatus(500);
            });
        });
    };
})();