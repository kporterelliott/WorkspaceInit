const fs = require('node:fs');
const IndexBP = require.resolve('./boilerplates/IndexBP.js');
const HomeBP = require.resolve('./boilerplates/views/HomeBP.ejs')
const AllCommentsBP = require.resolve('./boilerplates/views/AllCommentsBP.ejs');
const DatabaseBP = require.resolve('./boilerplates/public/JSON/DatabaseBP.json');
const MyAppBP = require.resolve('./boilerplates/public/JS/MyAppBP.js');
const HomeHTMLBP = require.resolve('./boilerplates/public/JS/HomeHTMLBP.html');
const browserOpenBP = require.resolve('./boilerplates/browserOpen.bat')
const appStartBP = require.resolve('./boilerplates/appStart.bat')


//console correct args
console.log ('This is fullARGV:', process.argv )
// destructure argv
process.title = "Your New App"
const slicedARGV = process.argv.slice(2)
let [public , views, index] = slicedARGV
console.log(public, views, index)





// make directories 

fs.mkdirSync(`./YourNewApp`)
if (slicedARGV.includes('public')){
    fs.mkdirSync('./YourNewApp/public')
    fs.mkdirSync(`./YourNewApp/public/JS`);
    fs.mkdirSync(`./YourNewApp/public/CSS`);
    fs.mkdirSync(`./YourNewApp/public/JSON`);
}

//make browserOpener and AppStart

const browserOpenBody = fs.readFileSync(browserOpenBP, 'utf8');
fs.appendFileSync(`./YourNewApp/browserOpen.bat`, browserOpenBody);


const appStartBody = fs.readFileSync(appStartBP, 'utf8');
fs.appendFileSync(`./YourNewApp/appStart.bat`, appStartBody);



//make files

for (el in slicedARGV){
    let arg = slicedARGV[el]
    if (arg.includes('.') === false){
        switch (arg){
            case 'views':
                fs.mkdirSync(`./YourNewApp/views`); 
        }
    }
    else if (arg.includes('.')){
            let ext = arg.slice(arg.indexOf('.'))
            switch(arg){
                case 'index.js':
                    const indexBody = fs.readFileSync(IndexBP, 'utf8');
                    fs.appendFileSync(`./YourNewApp/index.js`, indexBody);
                case 'myApp.js' || 'MyApp.js':
                    const MyAppBody = fs.readFileSync(MyAppBP, 'utf8');
                    fs.appendFileSync(`./YourNewApp/public/JS/myApp.js`, MyAppBody);
                case 'database.json' || 'Database.json':
                    const DatabaseBody = fs.readFileSync(DatabaseBP, 'utf8');
                    fs.appendFileSync(`./YourNewApp/public/JSON/database.json`, DatabaseBody);
                case 'home.ejs':
                    const homeBody = fs.readFileSync(HomeBP, 'utf8');
                    fs.appendFileSync(`./YourNewApp/views/home.ejs`, homeBody);
                case 'allComments.ejs':
                    const allCommentsBody = fs.readFileSync(AllCommentsBP, 'utf8');
                    fs.appendFileSync(`./YourNewApp/views/allComments.ejs`, allCommentsBody);
                case 'home.html':
                    const HomeHTMLBody = fs.readFileSync(HomeHTMLBP, 'utf8');
                    fs.appendFileSync(`./YourNewApp/public/JS/home.html`, HomeHTMLBody);
                }
        }
        else {
            // fs.appendFileSync(`./YourNewApp/${arg}`);
        }
}

// class Directory {
//     constructor(arg1){
//         this.arg1 = arg1;
//     }
// }


// fs.mkdirSync(`./YourNewApp`)

// fs.mkdirSync(`./YourNewApp/${public}`)

// fs.mkdirSync(`./YourNewApp/${public}/JS`)

// fs.mkdirSync(`./YourNewApp/${views}`)








// // create New index
// const indexBody = fs.readFileSync(IndexBP, 'utf8');
// fs.appendFileSync(`./YourNewApp/index.js`, indexBody);

// create home view -------------------//
// const homeBody = fs.readFileSync(HomeBP, 'utf8');
// fs.appendFileSync(`./YourNewApp/views/home.ejs`, homeBody);


// create All Comments view -------------------//
// const allCommentsBody = fs.readFileSync(AllCommentsBP, 'utf8');
// fs.appendFileSync(`./YourNewApp/views/allComments.ejs`, allCommentsBody);


// // // create All Comments view -------------------//
// const DatabaseBody = fs.readFileSync(DatabaseBP, 'utf8');
// fs.appendFileSync(`./YourNewApp/public/JS/database.json`, DatabaseBody);

// // // create All Comments view -------------------//
// const MyAppBody = fs.readFileSync(MyAppBP, 'utf8');
// fs.appendFileSync(`./YourNewApp/public/JS/myApp.js`, MyAppBody);

// // create All Comments view -------------------//
// const HomeHTMLBody = fs.readFileSync(HomeHTMLBP, 'utf8');
// fs.appendFileSync(`./YourNewApp/public/JS/home.html`, HomeHTMLBody);