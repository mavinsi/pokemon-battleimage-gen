
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("dex.json");
const db = low(adapter);

const jimp = require('jimp')



		   var random = function (start,end){
    return Math.floor(Math.random()*(end-start+1)+start);
}
		   let newho = random(1,890)

 let newgo = random(1,890)
let idinput = newho.toString().padStart(3,`0`)
let opinput = newgo.toString().padStart(3,`0`)
//let idinput = `003`
//let opinput = `006`
	   let namekl = db
      .get("server")
      .find({ pokeDex: idinput })
      .value().name;
       let nameop = db
      .get("server")
      .find({ pokeDex: opinput })
      .value().name;
      console.log(`${nameop} VS ${namekl}`)
      let realop = nameop.toLowerCase()
let realname = namekl.toLowerCase()

               async function main(){

let fonte = await jimp.loadFont(jimp.FONT_SANS_32_BLACK)
  let avatar = await  jimp.read(`https://play.pokemonshowdown.com/sprites/gen5/${realop}.png`)
	   let oponent = await  jimp.read(`https://play.pokemonshowdown.com/sprites/gen5/${realname}.png`)
               jimp.read('https://mr21.github.io/carousel-parallax/img/pokemon-battle/bg.jpg').then(fundo => {
 
	avatar.resize(250,250)
      oponent.resize(250,250)
      oponent.flip(true, false)
	  fundo.composite(avatar,520 , 75).composite(oponent,20 ,95).write('resultado.png')

})
}
main()

