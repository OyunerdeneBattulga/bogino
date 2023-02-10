const axios = require('axios');

const data = [
    {
        first_name: 'WIFON73X',
        last_name: 'Drainage of Abducens Nerve with Drain Dev, Open Approach',
    },
    {
        first_name: 'Gw59XED',
        last_name: 'Division of Abducens Nerve, Percutaneous Endoscopic Approach',
    },
    {
        first_name: 'MOF5KX',
        last_name: 'Supplement Right Temporal Bone with Synth Sub, Open Approach',
    },
    {
        first_name: 'LSgLnyTM',
        last_name: 'Drainage of Left Maxilla with Drainage Device, Open Approach',
    },
    {
        first_name: 'ilA2JCTi',
        last_name: 'Revision of Nonaut Sub in R Toe Phalanx Jt, Perc Approach',
    },
    {
        first_name: 'KSZGWhy0',
        last_name: 'Bypass Innominate Artery to L Low Leg Art, Open Approach',
    },
    {
        first_name: 's32pOs',
        last_name: 'Reposition Left Mandible with Ext Fix, Perc Endo Approach',
    },
    {
        first_name: 'dClXRu8PsQG7',
        last_name: 'Reposition Right Thyroid Artery, Open Approach',
    },
    {
        first_name: 'VP4zUAwag85G',
        last_name: 'Insertion of Feeding Device into Small Intest, Open Approach',
    },
    {
        first_name: 'XoZhkVvfTi',
        last_name: 'Replace R Parietal Bone w Autol Sub, Perc Endo',
    },
    {
        first_name: 'ZopFEU',
        last_name: 'Release Right Internal Carotid Artery, Perc Endo Approach',
    },
    {
        first_name: 'K2tMJIKywe',
        last_name: 'Removal of Neuro Lead from Spinal Cord, Perc Endo Approach',
    },
    {
        first_name: 'ngk3FvuJKpko',
        last_name: 'Change Drainage Device in L Up Extrem, Extern Approach',
    },
    {
        first_name: 'G2bjz9fT',
        last_name: 'Drainage of Thoracic Vertebra, Perc Endo Approach, Diagn',
    },
    {
        first_name: 'E85i9JTQ',
        last_name: 'CT Scan of L Pelvic Vein using Oth Contrast',
    },
    {
        first_name: '6JEcabEW',
        last_name: 'Restriction of Stomach, Pylorus, Perc Endo Approach',
    },
    {
        first_name: 'TEQkivXNNy',
        last_name: 'Reposition Right Humeral Shaft, Percutaneous Approach',
    },
    {
        first_name: 'u5VmqcWoldP',
        last_name: 'Drainage of Left Breast with Drainage Device, Endo',
    },
    {
        first_name: 'VeQNTZ5gRz',
        last_name: 'Excision of L Int Carotid, Perc Endo Approach, Diagn',
    },
    {
        first_name: 'pBmeRqk',
        last_name: 'Dilation of Splenic Vein, Open Approach',
    },
    {
        first_name: 'KWmoghx8Zm2T',
        last_name: 'Excision of Right Tibia, Open Approach',
    },
    {
        first_name: 'rDotjrH',
        last_name: 'Drainage of Right Axillary Lymphatic, Perc Endo Approach',
    },
    {
        first_name: 'TWHeNHo6qWo',
        last_name: 'Insertion of Monitor Dev into Thor Aorta Desc, Perc Approach',
    },
    {
        first_name: 'IdGHbcwVGt4V',
        last_name: 'Excision of Cervical Plexus, Percutaneous Approach',
    },
    {
        first_name: 'cVDWZ2DiKA',
        last_name: 'Insertion of Ext Fix into R Carpal Jt, Open Approach',
    },
    {
        first_name: 'WmdtEXZa',
        last_name: 'Removal of Other Device on Right Toe',
    },
    {
        first_name: 'TtIia7k1',
        last_name: 'Division of Left Maxilla, Open Approach',
    },
    {
        first_name: 'QWe1LwB',
        last_name: 'Bypass Left Lesser Saphenous Vein to Low Vein, Open Approach',
    },
    {
        first_name: 'lh28Krq8ijJ',
        last_name: 'Restriction of Ileocecal Valve, Perc Endo Approach',
    },
    {
        first_name: 'lzpEao',
        last_name: 'Wound Mgmt Treatment of Musculosk Low Back/LE using Orthosis',
    },
];

function createpost(data) {
    axios.post('http://localhost:8000/', data).then((res) => {
        console.log(res);
    });
}
function createposts(data) {
    data.map((item) => {
        createpost(item);
    });
}

createposts(data);
