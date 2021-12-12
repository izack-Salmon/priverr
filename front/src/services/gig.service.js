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
    console.log('gig', gig);
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
function _createGig(imgUrls, label, title, user,) {
    const levels = ['Level 2 Seller', 'Level 1 Seller', 'Top Rated Seller']
    const rates = [4.7, 4.8, 4.9, 4.6, 4.5,]
    console.log('user-gig-serv', user);
    var { _id, fullname, imgUrl } = user
    const miniUser = {
        _id,
        fullname,
        imgUrl,
        rate: rates[utilService.getRandomInt(0, rates.length - 1)],
        level: levels[utilService.getRandomInt(0, levels.length - 1)],
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
        // description: `This Gig is of one of many kinds ${label} i offer. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nihil necessitatibus eius temporibus dolorum magni, eveniet consectetur quibusdam adipisci deleniti accusantium alias quia ipsa architecto facere quae aut nobis`,
        description: `Don’t you have a website or web presence for your business? You are on the right GIG! I will create a custom WORDPRESS website design for your business, blog, store Mobile friendly, and promo/landing page`,
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
    {
        label: 'LOGO DESIGN',
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
        label: 'SOCIAL MEDIA',
        imgUrls: [
            'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638715332/soicalmedia/person1/1_mgoc7d.jpg',
            'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638866001/soicalmedia/seller-2/boost-youtube-videos-high-platform_enn2sd.png',
        ],
        title: ['research the perfect audience to target with facebook ads',
            'be your social media content and post creator',
        ]
    },
    {
        label: 'VOICE OVER',
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
        label: 'WORDPRESS',
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


async function setGig() {
    const users = await userService.getUsers();
    console.log('users', users);
    for (let i = 0; i < 1; i++) {

        for (let i = 0; i < labalsAimg.length; i++) {
            let gig = {
                label: labalsAimg[i].label,
                imgUrl: [
                    labalsAimg[i].imgUrls[utilService.getRandomInt(0, labalsAimg[i].imgUrls.length - 1)],
                    labalsAimg[i].imgUrls[utilService.getRandomInt(0, labalsAimg[i].imgUrls.length - 1)],
                    labalsAimg[i].imgUrls[utilService.getRandomInt(0, labalsAimg[i].imgUrls.length - 1)]
                ],
                title: `I will ${labalsAimg[i].title[utilService.getRandomInt(0, labalsAimg[i].title.length - 1)]}`,
                user: users[utilService.getRandomInt(0, users.length - 1)]
            }
            var newGig = _createGig(gig.imgUrl, gig.label, gig.title, gig.user,)
            console.log('newGig', newGig);
            save(newGig)

        }
    }
}

// var res1 = setLabelGig();
// console.log('res-set gigs', res1);

async function setLabelGig() {
    const users = await userService.getUsers();
    console.log('users', users);
    // for (let i = 0; i < 1; i++) {

        for (let i = 0; i < logoImgUrls.length; i++) {
            let gig = {
                label: 'WORDPRESS',
                imgUrl: wordUrls[i],
                // title: `I will ${logoTitles[utilService.getRandomInt(0, logoTitles.length - 1)]}`,
               title: `I will ${wordpresTitle[i]}`,
                user: users[utilService.getRandomInt(10, users.length - 1)]
            }
            var newGig = _createGig(gig.imgUrl, gig.label, gig.title, gig.user,)
            console.log('newGig', newGig);
            save(newGig)

        }
    // }
}

// c_scale,h_393,w_680/


const wordpresTitle = [
    'create aesthetic wordpress websites with elementor pro',
    'develop responsive wordpress website design',
    'create clean and modern wordpress website',
    'design responsive wordpress website using elementor pro page builder',
    'setup modern wordpress website design or blog design',
    'create wordpress landing page elementor landing page design using elementor',
    'fix wordpress menu, header, footer,css issue with in 24hrs'
]   

const wordUrls = [
    [
        'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638715147/wordpress/person1/1_cfzkte.jpg',
        'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638715148/wordpress/person1/2_niodln.jpg',
        'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638715150/wordpress/person1/3_t2qdjv.jpg'
    ],
    [
        'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638864764/wordpress/seller-2/create-complete-wordpress-websites-mobile-responsive_o5mewq.jpg',
        'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638864757/wordpress/seller-2/speed-up-your-wordpress-website_egwlgj.png',
        'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638864756/wordpress/seller-2/speed-up-your-wordpress-website_i8imsr.jpg'
    ],
    [
        'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638864965/wordpress/seller-3/design-wordpress-landing-page-elementor-pro-responsive-landing-page-squeeze-page_ljoshs.jpg',
        'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638864961/wordpress/seller-3/design-wordpress-landing-page-elementor-pro-responsive-landing-page-squeeze-page_1_yov75o.jpg',
        'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638864959/wordpress/seller-3/1_l3annt_qvktvl.jpg'
    ],
    [
        'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639263107/wordpress/58660d_np9oh2.jpg',
        'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639263107/wordpress/5657_q79zyb.jpg',
        'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639263107/wordpress/elementor-template_twulfb.jpg'
    ],
    [
        'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639263107/wordpress/news-website_uepoix.jpg'
    ],
    [
       'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639263106/wordpress/elementor-pro_i7reeo.png'

    ],
    [
        'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639263106/wordpress/fix-wordpress-menu-header-footer-css-issue-with-in-24hrs_uk59lh.jpg'
    ]


]




const logoTitles = ['do modern minimalist logo design',
'design flat and clean logo design',
'do profesional modern buisness logo design',
'design modern business logo with unlimited revision',
'do modern line art text or badge logo design',
'draw a unique logo for your enterprise',
'design an outstanding logo',
'do 5 minimalist logo design for your business',
'illustrate a sensational logo design',
'design 3 minimalist logo concepts with unlimited revisions',
'do beautiful logo design',
'design stunning business logo',
'do 3 flat minimalist logo for your business',
'do professional flat minimalist logo design'

]


var logoImgUrls = [
    [
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639249307/logo%20design/seller-1/6_ndhbse.jpg',
'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639249270/logo%20design/seller-1/5_k4blhu.png',
'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639248710/logo%20design/seller-1/4_ws5rws.jpg',
'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639248659/logo%20design/seller-1/3_dlhhqr.png',
'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639248585/logo%20design/seller-1/2_shfro5.jpg',
'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639248545/logo%20design/seller-1/1_rf8tap.jpg'
],

[
'https://res.cloudinary.com/pivarr/image/upload/v1638435142/logo%20design/seller-2/1_ti4k8o.png',
'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638435210/logo%20design/seller-2/2_fo1hs6.png',
'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639249389/logo%20design/seller-2/5_uulkqj.jpg',
'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639248439/logo%20design/seller-2/2_dbieat.jpg',
'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639248394/logo%20design/seller-2/1_plko7w.png'

],
[
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638715480/logo%20design/seller-3/1_i3unds.png',
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639249489/logo%20design/seller-3/5_yqpqcy.png',
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639248100/logo%20design/seller-3/3_iarj0j.jpg',
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639247948/logo%20design/seller-3/2_sxi7ly.jpg',
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639247909/logo%20design/seller-3/1_uftst3.png',
],
[
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638862335/logo%20design/seller-4/write-signature-and-handmade-unique-logo_1_sz31bt.jpg',
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638874004/logo%20design/seller-4/ihgtlin6b4vwvkavotsc_br0x7j.png',
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639248249/logo%20design/seller-4/1_toiqir.png',
],
[
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639256675/logo%20design/seller-5/4_t4spu3.png',
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639256634/logo%20design/seller-5/3_fn73er.png',
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638863926/logo%20design/seller-5/make-a-simple-premium-cartoon-animal-logo-mascot_vdavv4.png',
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1638863922/logo%20design/seller-5/make-a-simple-premium-cartoon-animal-logo-mascot_woo3kj.jpg'
],
[
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639249078/logo%20design/seller-6/1_z2qq3b.jpg',
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639249027/logo%20design/seller-6/2_zy0r4e.jpg',
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639249027/logo%20design/seller-6/2_zy0r4e.jpg',
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639249123/logo%20design/seller-6/4_tmsdfx.jpg',
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639249010/logo%20design/seller-6/3_rypabz.png'
],
[
 'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639249819/logo%20design/seller-7/1_vxk3kg.png'
],
[
 'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639249875/logo%20design/seller-8/1_raviu7.png'
],
[
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639249946/logo%20design/seller-9/1_evi3uy.png'
],
[
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639250007/logo%20design/seller-10/1_eflltt.png'
],
['https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639250206/logo%20design/seller-11/1_s9fpdh.png'
],
[
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639250334/logo%20design/seller-12/1_vvhmth.png',
],
[
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639250412/logo%20design/seller-13/1_mhj4xs.jpg',
],
[
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639250598/logo%20design/seller-14/1_f5x7ej.jpg'
],
[
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639250638/logo%20design/seller-15/1_e7papp.png'
],
[
    'https://res.cloudinary.com/pivarr/image/upload/c_scale,h_393,w_680/v1639250705/logo%20design/seller-16/1_wg8jkq.jpg'
],
]