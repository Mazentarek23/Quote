var listarr=[

    {
        id:0,
        imge:10 ,
        quout:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        author:"― Mahatma Gandhi"
    },
    {
        id:1,
        imge: 17,
        quout:"“Be yourself; everyone else is already taken.”",
        author:"― Oscar Wilde"
    },
    {
        id:2,
        imge:12 ,
        quout:"“It does not do to dwell on dreams and forget to live.”",
        author:"― J.K. Rowling, Harry Potter and the Sorcerer's Stone"
    },
    {
        id:3,
        imge: 4,
        quout:"“So many books, so little time.”",
        author:"― Frank Zappa"
    },
    {
        id:4,
        imge:5 ,
        quout:"“A room without books is like a body without a soul.”",
        author:"― Marcus Tullius Cicero"
    }
    ,
    {
        id:5,
        imge: 9,
        quout:"“You only live once, but if you do it right, once is enough.”",
        author:"― Mae West"
    }
    ,
    {
        id:6,
        imge:10 ,
        quout:"“Be the change that you wish to see in the world.”",
        author:"― Mahatma Gandhi"
    }
    ,
    {
        id:7,
        imge: 11,
        quout:"“In three words I can sum up everything I've learned about life: it goes on.”",
        author:"― Robert Frost"
    }
    ,
    {
        id:8,
        imge: 12,
        quout:"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
        author:"― J.K. Rowling, Harry Potter and the Goblet of Fire"
    }
    ,
    {
        id:9,
        imge:13 ,
        quout:"“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not leadWalk beside me… just be my friend”",
        author:"― Albert Camust"
    }
    ,
    {
        id:10,
        imge:18 ,
        quout:"“If you tell the truth, you don't have to remember anything.” ",
        author:"― Mark Twain"
    }
    ,
    {
        id:11,
        imge:17 ,
        quout:"“We are all in the gutter, but some of us are looking at the stars.” ",
        author:"― Oscar Wilde, Lady Windermere's Fan"
    }
    ,
    {
        id:12,
        imge: 15,
        quout:"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
        author:"― Maya Angelou"
    }
    ,
    {
        id:13,
        imge:16 ,
        quout:"“A friend is someone who knows all about you and still loves you.”",
        author:"― Elbert Hubbard"
    }
    ,
    {
        id:14,
        imge:17 ,
        quout:"“To live is the rarest thing in the world. Most people exist, that is all.”",
        author:"― Oscar Wilde"
    }
    ,
    {
        id:15,
        imge:17 ,
        quout:"“Always forgive your enemies; nothing annoys them so much.”",
        author:"― Oscar Wilde"
    }
]

function showdata(){

 var x=Math.floor(Math.random() * 16);
    
    var temp = `<img src="images/`+listarr[x].imge +`.jpg" style="width: 100%; border-radius: 50%;"></img>`
    var temp1=`<p>`+listarr[x].quout+`</p>`
    var temp2=`<p>`+listarr[x].author+`</p>`
    
    
    document.getElementById("image").innerHTML=temp
    document.getElementById("quote").innerHTML=temp1
    document.getElementById("author").innerHTML=temp2
}


