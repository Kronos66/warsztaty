(function ()
{
    'use strict';
    var q = require('q');
    var sequence = 1;
    var data = [
        {
            id: sequence++,
            mark: 'Porsche',
            model: '911',
            fuel: 'gasoline',
            capacityEngine: 2
        },
        {
            id: sequence++,
            mark: 'BMW',
            model: 'M3',
            fuel: 'gasoline',
            capacityEngine: 3
        },
        {
            id: sequence++,
            mark: 'BMW',
            model: 'M5',
            fuel: 'gasoline',
            capacityEngine: 5
        },
        {
            id: sequence++,
            mark: 'Porsche',
            model: 'Carrera S',
            fuel: 'gasoline',
            capacityEngine: 3.5
        }];

    function createNewOrUpdate(car)
    {
        var defer = q.defer();
        if (car.id) {
            data[car.id - 1] = car;
            defer.resolve(car);
        } else {
            car.id = sequence++;
            data.push(car);
            defer.resolve(car)
        }
        return defer.promise;
    }

    function search()
    {
        var defer = q.defer();
        defer.resolve(data);
        return defer.promise;
    }

    function getDetails(carId)
    {
        var defer = q.defer();
        defer.resolve(data[carId - 1]);
        return defer.promise;
    }

    function removePhone(carId)
    {
        carId = parseInt(carId, 10);
        data.splice(carId - 1, 1);
        var defer = q.defer();
        defer.resolve(data);
        return defer.promise;
    }

    module.exports = {
        removePhone: removePhone,
        getDetails: getDetails,
        createNewOrUpdate: createNewOrUpdate,
        search: search
    };
})();
