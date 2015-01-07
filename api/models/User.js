/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
schema:true,
    attributes: {
        name:
           { type: 'string', required: true },
        title:
           { type: 'string' },
        email:
           { type: 'string', required: true, email: true },
        online: {
            type: 'boolean',
            defaultsTo: false
        },
        toJSON: function () {
            var obj = this.toObject();
            delete obj._csrf;
            return obj;
        }

    }
};

