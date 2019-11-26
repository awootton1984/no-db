const skiers = [
    {
        id: 0,
        name: "Adrienne Wootton",
        type: "Freestyle",
        status: "Advanced"

    },

    {
        id: 1,
        name: "Shaun White",
        type: "Snowboard",
        status: "Advanced"
    },

    {
        id: 2,
        name: "Lindsey Vonn",
        type: "Alpine",
        status: "Advanced"
    },
    {
        id: 3,
        name: "John Doe",
        type: "Cross-Country",
        status: "Beginner"

    },
    
];

let id = 5;

module.exports = {
    getSkiers: (req, res) => {
        res.status(200).send(skiers);
    },
//createSkier: (req, res)
// },

createSkier: (req, res) => {
     const { name, type, status } = req.body;
     skiers.push({
         id,
         name,
         type,
         status
     });
     id++;
     res.status(200).send(skiers);
    },

deleteSkiers: (req, res) => {
    const { id } = req.params;
    console.log(id)
    
    const index = skiers.findIndex(skiers => skiers.id == id);
    skiers.splice(index, 1);

    res.status(200).send(skiers);
},

updateSkiers: (req, res) => {
    const { id } = req.params;
    const { name, type, status } = req.body;
    console.log(req.params, req.body);

    let index = skiers.findIndex(skiers => skiers.id == id);

    let foundSkiers = skiers[index];

    foundSkiers = {

        id: foundSkiers.id,
        name: name || foundSkiers.name,
        type: type || foundSkiers.type,
        status: status || foundSkiers.status,
    };

    skiers.splice(index, 1, foundSkiers);

    res.status(200).send(skiers);
    }
};





