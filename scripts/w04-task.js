/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Kenton Beech',

    photo: {
        src: 'images/profile_image.jpg',
        alt: 'Profile Picture'
    },

    favoriteFoods: [
        'Pineapple',
        'Pizza',
        'Ice-Cream',
        'Burgers',
        'Mango'
    ],

    hobbies: [
        'Tennis',
        'Rugby',
        'Baseball',
        'Reading',
        'Running'
    ],

    placesLived: []
};


/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo.src;
document.querySelector("#photo").alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
})

/* Places Lived DataList */
myProfile.placesLived.push(
    {
        place: 'Johannesburg, ZA',
        length: '14 years'
    },
    {
        place: 'Wales, UK',
        length: '1 year'
    },
    {
        place: 'England, UK',
        length: '1 year'
    },
    {
        place: 'East London, ZA',
        length: '8 years'
    }
        );

myProfile.placesLived.forEach(area => {
    let dt = document.createElement("dt");
    dt.textContent = area.place;
    document.querySelector("#places-lived").appendChild(dt);

    let dd = document.createElement("dd");
    dd.textContent = area.length;
    document.querySelector("#places-lived").appendChild(dd);
})
