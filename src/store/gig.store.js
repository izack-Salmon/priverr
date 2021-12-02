import { gigService } from '../services/gig.service.js';


export const gigStore = {
    state: {
        gigs: [],
        currGig: null,
        // order: false,
        // labels: gigService.getLabes(),
        // filterBy: {},


    },
    getters: {
        getLabes(state) {
            return state.labels
        },
        gigsToShow(state) {
            return gigService.filterGigs(state.gigs, state.filterBy);
        },
        activeGigsLeft(state) {
            return state.gigs.filter((gig) => gig.isActive).length;
        },
        totalGigs(state) {
            return state.gigs.length;
        },
        gigs(state) {
            return JSON.parse(JSON.stringify(state.gigs))
        },
        currGig({ currGig }) { return currGig }

    },
    mutations: {
        addGig(state, { savedGig }) {
            state.gigs.push(savedGig);
        },
        updateGig(state, { gig }) {
            const idx = state.gigs.findIndex((currGig) => currGig._id === gig._id);
            state.gigs.splice(idx, 1, gig);

        },
        removeGig(state, { gigId }) {
            const idx = state.gigs.findIndex((currGig) => currGig._id === gigId);
            state.gigs.splice(idx, 1);
        },
        setGigs(state, { gigs }) {
            state.gigs = gigs;
        },
        setGigsSort(state, { sortBy }) {
            if (sortBy === 'txt') {
                state.gigs.sort((a, b) => {
                    var txtA = a.txt.toLowerCase();
                    var txtB = b.txt.toLowerCase();
                    if (txtA < txtB) return -1;
                    if (txtA > txtB) return 1;
                    return 0;
                });
            }
            if (!state.order) state.gigs.reverse();
            state.order = !state.order;
        },
        setFilterBy(state, { filterBy }) {
            state.filterBy = filterBy;
        },
        setCurrGig(state, { gig }) {
            state.currGig = gig;
        }

    },
    actions: {
        loadGigs({ commit, state }) {
            gigService.query(state.filterBy).then((gigs) => {
                console.log('gigs in store', gigs);
                commit({ type: 'setGigs', gigs });
            });
        },
        updateGig({ commit }, { gig }) {
            return gigService.save(gig).then((savedGig) => {
                commit({ type: 'updateGig', gig });
                return savedGig;
            });
        },
        addGig({ commit }, { gig }) {
            // const newGig = JSON.parse(JSON.stringify(gig))
            return gigService.save(gig).then((savedGig) => {
                commit({ type: 'addGig', savedGig });
                return savedGig;
            });
        },
        removeGig({ commit }, { gigId }) {
            console.log(gigId);
            return gigService.remove(gigId)
                .then(() => {
                    commit({ type: 'removeGig', gigId });
                })
        },
        setFilterBy({ commit, dispatch }, { filterBy }) {
            // return gigService.filterBy(state.gigs, filterBy).then((filterGigs) => {
            commit({ type: 'setFilterBy', filterBy });
            dispatch({ type: 'loadGigs' })
                // })
        },
        async getGigByid({ commit }, { gigId }) {
            try {
                const gig = await gigService.getById(gigId);
                commit({ type: 'setCurrGig', gig })

            } catch (err) {
                console.log('userStore: Error in getGigByid', err)
                throw err
            }
        }
    },
}