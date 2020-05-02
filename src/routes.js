const express = require('express');

const IncidentValidator = require('./validations/IncidentValidator');
const OngValidator = require('./validations/OngValidator');
const ProfileValidator = require('./validations/ProfileValidator');
const SessionValidator = require('./validations/SessionValidator');

const IncidentsController = require('./controllers/IncidentsController');
const OngsController = require('./controllers/OngsController');
const ProfilesController = require('./controllers/ProfilesController');
const SessionsController = require('./controllers/SessionsController');

const routes = express.Router();

// Incidents routes
routes.get('/incidents', IncidentValidator.index, IncidentsController.index);
routes.post('/incidents', IncidentValidator.create, IncidentsController.create);
routes.delete('/incidents/:id', IncidentValidator.delete, IncidentsController.delete);

// Ongs routes
routes.get('/ongs', OngValidator.index, OngsController.index);
routes.post('/ongs', OngValidator.create, OngsController.create);

// Profiles routes
routes.get('/profiles', ProfileValidator.index, ProfilesController.index);

// Sessions routes
routes.post('/sessions', SessionValidator.create, SessionsController.create);

module.exports = routes;