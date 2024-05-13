const data = {
users: [
        { id: 1, name: "Ali", pass: 1233, imgSrc: "..." },
        { id: 2, name: "Ahmed", pass: 4567, imgSrc: "..." },
        { id: 3, name: "Sara", pass: 7890, imgSrc: "..." },
        { id: 4, name: "Fatima", pass: 1357, imgSrc: "..." },
        { id: 5, name: "Omar", pass: 2468, imgSrc: "..." },
    ],
    conve:[
        {
            id:1,
            nodes:[1,2],
            name:null,
            type:1,
            masg:[
                {id:1,contect:"hello",sender:1,time:"20:30"},
                {id:2,contect:"hello there",sender:2,time:"20:05"}

            ]
        },
        {
            id:2,
            nodes:[3,2],
            name:null,
            type:1,
            masg:[
                {id:3,contect:"hello",sender:3,time:"20:30"},
                {id:2,contect:"hello th!!!!!!!!!!ere",sender:2,time:"20:05"}

            ]
        },
        {
            id:3,
            nodes:[1,2,3,4],
            name:"WorkShop",
            type:2 ,
            masg:[
                {id:1,contect:"hello",sender:1,time:"20:30"},
                {id:2,contect:"hel2222lo",sender:2,time:"20:30"},
                {id:3,contect:"he3333llo",sender:3,time:"20:30"},
                {id:4,contect:"hello there444",sender:4,time:"20:05"}

            ]
        },
        {
            id:4,
            nodes:[1,3,5],
            name:"Scchool",
            type:2,
            masg:[
                {id:1,contect:"hello",sender:1,time:"20:30"},
                {id:3,contect:"hello 333333333333",sender:3,time:"20:05"},
                {id:5,contect:"hello 5555",sender:5,time:"20:05"}

            ]
        },
        {
            id:5,
            nodes:[3,4],
            name:null,
            type:1,
            masg:[
                {id:3,contect:"hello33",sender:3,time:"20:30"},
                {id:4,contect:"hello 44",sender:4,time:"20:05"}

            ]
        },
        {
            id:6,
            nodes:[1,5],
            name:null,
            type:1,
            masg:[
                {id:5,contect:"hello n1",sender:5,time:"20:30"},
                {id:1,contect:"hello the number 5",sender:1,time:"20:05"}

            ]
        },
    ]
}

localStorage.setItem("data", JSON.stringify(data));
