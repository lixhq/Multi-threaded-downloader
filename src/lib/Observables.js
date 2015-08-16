'use strict';
var request = require('request'),
    utils = require('./Utility'),
    rx = require('rx'),
    fs = require('fs');

var requestBody = function (url, headers) {
        return rx.Observable.create(function (observer) {
            request({url, headers})
                .on('data', x => observer.onNext(x))
                .on('complete', x => observer.onCompleted(x))
                .on('error', x => observer.onError(x));
        });
    },
    requestHeadAsync = utils.promisify(request.head),
    fsOpenAsync = utils.promisify(fs.open),
    fsWrite = rx.Observable.fromCallback(fs.write),
    fsTruncate = rx.Observable.fromCallback(fs.truncate),
    fsRename = rx.Observable.fromCallback(fs.rename);

module.exports = {
    requestBody,
    requestHeadAsync,
    fsOpenAsync,
    fsWrite,
    fsTruncate,
    fsRename
};