import { gigService } from '../services/gig.service.js';
import { utilService } from "../services/util.service.js";



export const gigStore = {
    state: {
        gigs: [],
        currGig: null,
        searchTerm: null,
        filterBy: {},
        professional: [{
            img: "https://res.cloudinary.com/pivarr/image/upload/v1638380308/tagsimg/logo-design_cuoszf.jpg",
            name: 'Logo Design',
            des: 'Build your brand',
            _id: utilService.makeId(),
        },
        {
            img: "https://res.cloudinary.com/pivarr/image/upload/v1638380360/tagsimg/wordpress_cljj46.jpg",
            name: 'WordPress',
            des: 'Custiomize your site',
            _id: utilService.makeId()
        },
        {
            img: "https://res.cloudinary.com/pivarr/image/upload/v1638380400/tagsimg/voiceove_m64zfe.jpg",
            name: 'Voice Over',
            des: 'Share your message',
            _id: utilService.makeId()
        },
        {
            img: "https://res.cloudinary.com/pivarr/image/upload/v1638380443/tagsimg/animated-explainer_wwrbzu.jpg",
            name: 'Video Explainer',
            des: 'Engage your audience',
            _id: utilService.makeId()
        },
        {
            img: "https://res.cloudinary.com/pivarr/image/upload/v1638380521/tagsimg/social_zpnnod.jpg",
            name: 'Social Media',
            des: 'Reach more customers',
            _id: utilService.makeId()
        },
        {
            img: "https://res.cloudinary.com/pivarr/image/upload/v1638380821/tagsimg/seo_nmnzbj.jpg",
            name: 'SEO',
            des: 'Unlock growth online',
            _id: utilService.makeId()
        },
        {
            img: "https://res.cloudinary.com/pivarr/image/upload/v1638380545/tagsimg/illustration_t2kfs0.jpg",
            name: 'Illustartion',
            des: 'Color your dreams',
            _id: utilService.makeId()
        },
        {
            img: "https://res.cloudinary.com/pivarr/image/upload/v1638380577/tagsimg/translation_ojuw6w.jpg",
            name: 'Translation',
            des: 'Go global',
            _id: utilService.makeId()
        },
        {
            img: "https://res.cloudinary.com/pivarr/image/upload/v1638380690/tagsimg/data-entry_ky6my9.jpg",
            name: 'Date Entry',
            des: 'Learn your business',
            _id: utilService.makeId()
        },
        {
            img: "https://res.cloudinary.com/pivarr/image/upload/v1638380749/tagsimg/book-covers_xdjbu8.jpg",
            name: 'Book covers',
            des: 'Showcase your story',
            _id: utilService.makeId()
        },

        ],
        // order: false,
        // labels: gigService.getLabes(),


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
        currGig({ currGig }) {

            return currGig
        },

        professional(state) {
            return state.professional
        }
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
        setSearchTerm(state, { searchTerm }) {
            state.searchTerm = searchTerm
            state.filterBy.searchTerm = searchTerm;
            // const gigsToShow= state.gigs.filter(gig=>{
            //    return ((gig.title).toLowerCase().includes(searchTerm))
            // })
            // console.log('gigsToShow', gigsToShow);

        },
        setCurrGig(state, { gig }) {
            state.currGig = gig;
        },
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
        setSearch({ commit, dispatch }, { searchTerm }){
            console.log('set-search-store', searchTerm);
            commit({ type: 'setSearchTerm', searchTerm });
            dispatch({ type: 'loadGigs' })
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