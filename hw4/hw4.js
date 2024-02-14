/*
 * Zein Mera
 * Professor Nathan Hischon
 * CISC 3300
 * 20 February 2024
 * 
 * Create a Javascript file that does the following: 
 * a. loop through the cats array found here: https://github.com/nhishonFordham/lecture-code/blob/main/html-17-19-js-1/cats.js
 * b. if the cats adoption status is available add that cat’s name to a result array
 * c. create a new sentence(via code!) about your newly adopted cats from your result array
 */

//array retreived from link above
const cats = [
    {
        name: 'Charlie',
        adoptionStatus: 'available'
    },
    {
        name: 'Lily',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Coco',
        adoptionStatus: 'available'
    },
    {
        name: 'Oreo',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Luna',
        adoptionStatus: 'available'
    },
    {
        name: 'Milo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lola',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Leo',
        adoptionStatus: 'available'
    },
    {
        name: 'Willow',
        adoptionStatus: 'available'
    },
    {
        name: 'Bella',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Max',
        adoptionStatus: 'available'
    },
    {
        name: 'Cleo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lucy',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Daisy',
        adoptionStatus: 'available'
    },
];

//array will store name of cats available for adoption
const result = [];

for(let i=0; i<cats.length; i++)
{
    if(cats[i].adoptionStatus == 'available')
        result.push(cats[i].name);
}

//will become sentance incorporating results array
let sentance = '';
for(let i=0; i<result.length; i++)
{
    if(i==result.length-1)
        sentance = sentance + 'and ' + result[i];
    else
        sentance = sentance + result[i] + ', ';
}
sentance = sentance + ' are available for adoption!';
console.log(sentance);