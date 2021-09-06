const roomRouter = require('express').Router();
const Controller = require('../controller/roomController');

roomRouter.get('/', Controller.showAllRoom);
roomRouter.get('/available', Controller.showAvailableRoom);
roomRouter.post('/', Controller.createRoom);
roomRouter.patch('/add/:id', Controller.addBookingRoom);
roomRouter.patch('/delete/:id', Controller.deleteBookingRoom);

module.exports = roomRouter