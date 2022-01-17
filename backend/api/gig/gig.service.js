const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

async function query(filterBy) {
    if (filterBy.budget) {
        filterBy.budget = JSON.parse(filterBy.budget)
    }

    try {
        const criteria = _buildCriteria(filterBy)
        // const criteria = {};
        const collection = await dbService.getCollection('gig')
        var gigs = await collection.find(criteria).toArray()
        return gigs
    } catch (err) {
        logger.error('cannot find gigs', err)
        throw err
    }
}

async function getById(gigId) {
    try {
        const collection = await dbService.getCollection('gig')
        const gig = collection.findOne({ '_id': ObjectId(gigId) })
        return gig
    } catch (err) {
        logger.error(`while finding gig ${gigId}`, err)
        throw err
    }
}

async function remove(gigId) {
    try {
        const collection = await dbService.getCollection('gig')
        await collection.deleteOne({ '_id': ObjectId(gigId) })
        return gigId
    } catch (err) {
        logger.error(`cannot remove gig ${gigId}`, err)
        throw err
    }
}

async function add(gig) {
    try {
        const collection = await dbService.getCollection('gig')
        const addedGig = await collection.insertOne(gig)
        return addedGig
    } catch (err) {
        logger.error('cannot insert gig', err)
        throw err
    }
}
async function update(gig) {
    try {
        var id = ObjectId(gig._id)
        delete gig._id
        const collection = await dbService.getCollection('gig')
        await collection.updateOne({ "_id": id }, { $set: { ...gig } })
        return gig
    } catch (err) {
        logger.error(`cannot update gig ${gigId}`, err)
        throw err
    }
}
function _buildCriteria(filterBy) {

    const criteria = {}
    if (filterBy.searchTerm && filterBy.searchTerm !== '') {
        const searchCriteria = { $regex: filterBy.searchTerm, $options: 'i' }
        criteria.title = searchCriteria;
    }
    if (filterBy.deliveryTime && filterBy.deliveryTime !== '') {
       criteria.daysToMake = { $lte: +filterBy.deliveryTime };
    }
    if (filterBy.tag && filterBy.tag !== '') {
        // const newTag = [filterBy.tag.toLowerCase()];
        const newTag = [filterBy.tag.toUpperCase()];
        criteria.tags = { $in: newTag };
    }
    if (filterBy.budget) {
        criteria.price = { $gt: filterBy.budget.min, $lt: filterBy.budget.max }
    }

    return criteria
}




module.exports = {
    remove,
    query,
    getById,
    add,
    update,
}
