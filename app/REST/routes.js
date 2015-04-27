(function ()
{
    'use strict';
    module.exports = function (router)
    {
        require('./car.endpoint')(router);
    };
})();