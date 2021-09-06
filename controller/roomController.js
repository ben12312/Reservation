const { Room } = require('../models');

module.exports = class Controller {
    static showAllRoom(req, res, next) {
        Room.findAll()
            .then(rooms => res.status(200).json(rooms))
            .catch(err => res.status(400).json({ message: 'Fail load rooms' }))
    }
    static showAvailableRoom(req, res, next) {
        Room.findAll({ where: { booking_oleh: 'none' } })
            .then(rooms => res.status(200).json(rooms))
            .catch(err => res.status(400).json({ message: 'Fail load available rooms' }))
    }
    static createRoom(req, res, next) {
        let createRoom = {
            lantai: +req.body.lantai,
            daya_tampung: req.body.daya_tampung,
            kemewahan: req.body.kemewahan,
            booking_oleh: 'none',
            tanggal: new Date
        }
        console.log(createRoom);
        Room.create(createRoom)
            .then(room => res.status(201).json(room))
            .catch(err => res.status(400).json({ message: 'Fail create room' }))
    }
    static addBookingRoom(req, res, next) {
        Room.findOne({ where: { id: req.params.id } })
            .then(room => {
                if (room.booking_oleh == 'none') {
                    return Room.update({
                        booking_oleh: req.body.booking_oleh,
                        tanggal: Date(req.body.tanggal)
                    }, {
                        where: { id: req.params.id }
                    })
                } else {
                    res.status(400).json({ message: 'Room already booked' })
                }
            })

            .then(res => res.status(200).json(res))
            .catch(err => res.status(400).json({ message: 'Fail create reservation room' }))
    }
    static deleteBookingRoom(req, res, next) {
        Room.update({
            booking_oleh: 'none',
            tanggal: 'none'
        }, { where: { id: req.params.id } })
            .then(res => res.status(200).json(res))
            .catch(err => res.status(400).json({ message: 'Fail delete reservation room' }))
    }
}