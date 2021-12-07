const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

async function query(filterBy) {
    console.log('filterBy-serviceback', filterBy);
    try {
        // const criteria = _buildCriteria(filterBy)
        const criteria = {};
        // console.log('filter', filterBy);
        // console.log('criteria', criteria);
        const collection = await dbService.getCollection('gig')
        // console.log('collection:', collection);
        var gigs = await collection.find(criteria).toArray()
        // console.log('gigs:', gigs);
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
    if (filterBy.name) {
        const nameCriteria = { $regex: filterBy.name, $options: 'i' }
        criteria.name = nameCriteria
    }
    if (filterBy.inStock !== '' && filterBy.inStock !== 'all') {
        if (filterBy.inStock === 'inStock') criteria.inStock = { $eq: true }
        else if (filterBy.inStock === 'missing') criteria.inStock = { $eq: false }

        // criteria.inStock = { $eq: JSON.parse(filterBy.inStock) }
    }
    if (filterBy.labels && filterBy.labels.length) {
        criteria.labels = { $in: filterBy.labels }
    }
    // criteria.$or = [
    //     {
    //         name: nameCriteria
    //     },
    //     {
    //         inStock: txtCriteria
    //     }
    // ]
    return criteria
}




module.exports = {
    remove,
    query,
    getById,
    add,
    update,
}