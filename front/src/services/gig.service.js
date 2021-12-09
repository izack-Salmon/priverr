import { asyncStorageService } from "./async-storage.service.js";
import { storageService } from "./storage.service.js";
import { utilService } from "./util.service.js";
import { userService } from "./user.service.js";
// import axios from "axios";
import Axios from "axios";
var axios = Axios.create({ withCredentials: true, });

const KEY = 'gigsDB';

//for the start with no backend
// _createGigs()


const BASE_URL =
    process.env.NODE_ENV !== "development"
        ? "/api/gig"
        : "//localhost:3030/api/gig";

export const gigService = {
    query,
    getById,
    remove,
    save,
    getLabes,
}

function query(filterBy = {}) {
    // return asyncStorageService.query(KEY);
    return axios.get(BASE_URL, { params: filterBy }).then((res) => res.data)
}
function getById(id) {
    return axios.get(BASE_URL + `/${id}`).then((res) => res.data)
    // return asyncStorageService.get(KEY, id);
}
function remove(id) {
    return axios.delete(BASE_URL + `/${id}`).then((res) => res.data)
    // return asyncStorageService.remove(KEY, id);
}
function save(gig) {
    return (gig._id) ? axios.put(BASE_URL + `/${gig._id}`, gig).then((res) => res.data) : axios.post(BASE_URL + '/', gig).then((res) => res.data)
    // const savedGig = gig._id ? asyncStorageService.put(KEY, gig) : asyncStorageService.post(KEY, gig);
    // return savedGig;
}


function getLabes() {
    return labels
}


function getEmptyGig() {
    return {
        name: '',
        inStock: true,
        price: utilService.getRandomInt(10, 100),
        createdAt: Date.now(),
        reviews: [],
        labels: getRandomLabel(),
    };
}

async function _createGigs() {
    // console.log('im heere to ');
    var gigs = storageService.load(KEY);
    var gUsers = await userService.getUsers()
    console.log(gUsers);
    if (!gigs || !gigs.length) {
        gigs = [_createGig('music', gUsers.shift()), _createGig('music', gUsers.shift()), _createGig('web dev', gUsers.shift()), _createGig('art', gUsers.shift(),), _createGig('NFT-Art', gUsers.shift())];
        gigs = await Promise.all(gigs)
        // console.log(gigs);
        storageService.store(KEY, gigs);
    }
    return gigs;
}
function _createGig(imgUrls,label,title, user,) {
    const levels= ['Level 2 Seller','Level 1 Seller','Top Rated Seller']
    const rates = [4.7,4.8,4.9,4.6,4.5, ]
    console.log('user-gig-serv', user);
    var { _id, fullname, imgUrl } = user
    const miniUser = {
        _id,
        fullname,
        imgUrl,
        rate: rates[utilService.getRandomInt(0, levels.length-1)],
        level: levels[utilService.getRandomInt(0, levels.length-1)],
        orderNum: utilService.getRandomInt(100, 1000)
    }
    // console.log(miniUser);
    return {
        // _id: utilService.makeId(),
        title: title,
        inStock: true,
        price: utilService.getRandomInt(10, 100),
        owner: miniUser,
        createdAt: Date.now(),
        daysToMake: utilService.getRandomInt(1, 10),
        description: `This Gig is of one of many kinds ${label} we offer. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nihil necessitatibus eius temporibus dolorum magni, eveniet consectetur quibusdam adipisci deleniti accusantium alias quia ipsa architecto facere quae aut nobis`,
        imgUrl: imgUrls,
        // imgUrl: [
        //     'https://res.cloudinary.com/pivarr/image/upload/v1638435142/logo%20design/seller-2/1_ti4k8o.png',
        //     'https://res.cloudinary.com/pivarr/image/upload/v1638435210/logo%20design/seller-2/2_fo1hs6.png',
        //     'https://res.cloudinary.com/pivarr/image/upload/v1638434790/logo%20design/seller-1/1_har5gl.jpg'
        // ],
        tags: [
            `${label}`,
            "artisitic",
            "proffesional",
            "accessible"
        ],
    };
}



var labalsAimg = [
    {label:'logo design', 
    imgUrls: [
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638715480/logo%20design/seller-3/1_i3unds.png',
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638862335/logo%20design/seller-4/write-signature-and-handmade-unique-logo_1_sz31bt.jpg',
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638862396/logo%20design/seller-4/design-a-modern-minimalist-logo-in-24-hours_j5ykcu.png',
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638863926/logo%20design/seller-5/make-a-simple-premium-cartoon-animal-logo-mascot_vdavv4.png',
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638863922/logo%20design/seller-5/make-a-simple-premium-cartoon-animal-logo-mascot_woo3kj.jpg',
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638863919/logo%20design/seller-5/make-a-simple-premium-cartoon-animal-logo-mascot_1_pwito9.jpg',
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638715480/logo%20design/seller-3/1_i3unds.png',
    ],
    title: ['design flat and clean logo design',
    'design flat and clean logo design',
    'do profesional modern buisness logo design'
],
     },
    {
        label: 'social media',
        imgUrls: [
            'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638715332/soicalmedia/person1/1_mgoc7d.jpg',
            'https://res.cloudinary.com/pivarr/image/upload/v1638866001/soicalmedia/seller-2/boost-youtube-videos-high-platform_enn2sd.png',
        ],
        title: ['research the perfect audience to target with facebook ads',
        'be your social media content and post creator',
     ]
    },
    {
        label: 'voice over',
        imgUrls: [
            'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638865426/voice-over/audio-delivery-bg_lvsuxh.png',
            'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638865489/voice-over/seller-1/e9178daf57f10ce3399c993c77b002c15f5f775f_t1eebl.jpg',
            'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638865532/voice-over/seller-2/67342de45573b46dc31fe8fec17247c3b8e868f5_j5pgex.jpg',
            'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638865426/voice-over/audio-delivery-bg_lvsuxh.png',
            'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638865531/voice-over/seller-2/record-an-awesome-voice-over-in-24-hours-with-revisions_hrcqk6.jpg',
            'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638865603/voice-over/seller-3/13e1bd0f5b4d3d7620a3f7b96ad93e8b9e582976_jnxmst.jpg',
            'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638865604/voice-over/seller-3/a7b191d6bebcbe1995022a4516e2c190fe4edb85_uhcsms.jpg',
            'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638865426/voice-over/audio-delivery-bg_lvsuxh.png',

        ],
        title: ['recored ameriacan deep voices',
               'record high quality voice overs',
               'record your kickstarter or croud funding voice over',
               'record british english voiceover',
     ]
    },
    {
        label: 'wordpress',
        imgUrls: [
            'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638715147/wordpress/person1/1_cfzkte.jpg',
            'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638715148/wordpress/person1/2_niodln.jpg',
            'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638715150/wordpress/person1/3_t2qdjv.jpg',
            'https://res.cloudinary.com/pivarr/image/upload/v1638864757/wordpress/seller-2/speed-up-your-wordpress-website_egwlgj.png',
            'https://res.cloudinary.com/pivarr/image/upload/v1638864757/wordpress/seller-2/speed-up-your-wordpress-website_egwlgj.png',
            'https://res.cloudinary.com/pivarr/image/upload/v1638864965/wordpress/seller-3/design-wordpress-landing-page-elementor-pro-responsive-landing-page-squeeze-page_ljoshs.jpg',
            'https://res.cloudinary.com/pivarr/image/upload/v1638864961/wordpress/seller-3/design-wordpress-landing-page-elementor-pro-responsive-landing-page-squeeze-page_1_yov75o.jpg',
            'https://res.cloudinary.com/pivarr/image/upload/v1638864959/wordpress/seller-3/1_l3annt_qvktvl.jpg'
        ],
        title: ['create clean and modern wordpress website',
        'develop responsive wordpress website design',
        'setup modern wordpress website design or blog design',
        'create aesthetic wordpress websites with elementor pro'
    ]
        
    }
]

// var res = setGig();
// console.log('res-set gigs', res);


async function setGig (){
   const users=  await userService.getUsers();
   console.log('users', users);
for (let i = 0; i < 1; i++) { 

    for (let i = 0; i < labalsAimg.length; i++) {
        let gig = {
            label: labalsAimg[i].label,
            imgUrl: [
                labalsAimg[i].imgUrls[utilService.getRandomInt(0, labalsAimg[i].imgUrls.length-1)],
                labalsAimg[i].imgUrls[utilService.getRandomInt(0, labalsAimg[i].imgUrls.length-1)],
                labalsAimg[i].imgUrls[utilService.getRandomInt(0, labalsAimg[i].imgUrls.length-1)]
            ],
            title: `I will ${labalsAimg[i].title[utilService.getRandomInt(0, labalsAimg[i].title.length-1)]}`,
            user: users[utilService.getRandomInt(0, users.length-1)]
        }
        var newGig = _createGig(gig.imgUrl,gig.label,gig.title, gig.user,)
        console.log('newGig', newGig);
        save(newGig)
        
    }
}
}