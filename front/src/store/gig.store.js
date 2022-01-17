import { gigService } from '../services/gig.service.js';
import { utilService } from "../services/util.service.js";



export const gigStore = {
    state: {
        gigs: [],
        currGig: null,
        exploreTitle: { category: 'Explore', searchTerm: null },
        filterBy: { budget: '', deliveryTime: '' },
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
            console.log(state.filterBy);
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
        currGig(state) {
            return state.currGig
        },

        professional(state) {
            return state.professional
        },

        exploreTitle(state) {
            let title = (state.exploreTitle.category !== null) ? state.exploreTitle.category : state.exploreTitle.searchTerm
            // console.log('title', title);
            return title
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
            console.log(filterBy);
            state.filterBy.deliveryTime = filterBy.deliveryTime;
            // console.log('filterBy.budget', filterBy.budget);
            state.filterBy.budget = filterBy.budget;
            if(filterBy.tag) {
                state.filterBy.tag = filterBy.tag;
                state.filterBy.searchTerm = '';
            }

        },
        setSearchTerm(state, { searchTerm }) {
            state.filterBy.searchTerm = searchTerm;
            // state.filterBy.category = searchTerm;
            state.exploreTitle.searchTerm = `Results for "${searchTerm}"`
            state.exploreTitle.category = null;
            // console.log('state.filterBy-search', state.filterBy);
            // console.log('state.exploreTitle-search', state.exploreTitle);
        },
        setCurrGig(state, { gig }) {
            state.currGig = gig;
        },
        clearFilter(state) {
            state.filterBy = {};
        }
    },
    actions: {
        
        //hope to do get gigs by user id back to front ;)

        // async loadGigs({ commit, state }) {
        //     var gigs = await gigService.query(state.filterBy)
        //     gigs = await gigs.filter(
        //         (gig) => gig.owner._id === this.user._id
        //       );
        //     commit({ type: 'setUserGigs', userGigs });
        // },
        async loadGigs({ commit, state }) {
            console.log('state.filterBY', state.filterBy);
            var gigs = await gigService.query(state.filterBy)
            commit({ type: 'setGigs', gigs });
            commit({ type: 'clearFilter' })
        },
        async updateGig({ commit }, { gig }) {
            var savedGig = gigService.save(gig)
            commit({ type: 'updateGig', gig });
            return savedGig;
        },
        async addGig({ commit }, { gig }) {
            var savedGig = await gigService.save(gig)
            if (gig._id){
            commit({ type: 'updateGig', gig });
            } else {
            commit({ type: 'addGig', savedGig });
            }
            return savedGig;
        },
        async removeGig({ commit }, { gigId }) {
            // console.log(gigId);
            var gig = await gigService.remove(gigId)
            commit({ type: 'removeGig', gigId });
            return gig
        },
        setFilterBy({ commit, dispatch }, { filterBy }) {
            // return gigService.filterBy(state.gigs, filterBy).then((filterGigs) => {
            commit({ type: 'setFilterBy', filterBy });
            dispatch({ type: 'loadGigs' })
            // })
        },
        setSearch({ commit, dispatch }, { searchTerm }) {
            commit({ type: 'setSearchTerm', searchTerm });
            dispatch({ type: 'loadGigs' })
        },
        async getGigByid({ commit }, { gigId }) {
            try {
                const gig = await gigService.getById(gigId);
                commit({ type: 'setCurrGig', gig })
                return gig
            } catch (err) {
                console.log('userStore: Error in getGigByid', err)
                throw err
            }
        }
    },
}