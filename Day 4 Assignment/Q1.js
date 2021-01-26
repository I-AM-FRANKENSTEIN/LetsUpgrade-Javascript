console.log("Question 1:-")
var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }];

    for(var i=0;i<library.length;i++){
        if(library[i].readingStatus){
            console.log("Already read "+library[i].author+" by "+library[i].title)
        }
       else{
            console.log("You still need to read "+library[i].author+" by "+library[i].title)
        }
    } 