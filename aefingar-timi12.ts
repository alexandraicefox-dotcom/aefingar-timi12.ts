// =====================================================
// NTV · Forritun 101 · Tími 12
// Verkefni: fetch upprifjun + TypeScript grunnur
//
// TVÆR LEIÐIR TIL AÐ VINNA:
//
//   Leið A (ekkert að setja upp):
//     Opnaðu https://www.typescriptlang.org/play
//     Afritaðu einn hluta í einu þangað inn. Rauðar línur = villur.
//     Ýttu á "Run" og skoðaðu útkomuna í "Logs" flipanum til hægri.
//
//   Leið B (VS Code):
//     Opnaðu þessa skrá í VS Code. VS Code sýnir TypeScript-villur sjálft.
//     Keyrðu hana í terminal:   npx tsx aefingar-timi12.ts
//
// REGLUR:
//   - Eitt verkefni í einu. Keyrðu eftir hvert.
//   - "// Á að gefa:" segir hvað á að koma út.
//   - "// 🔴" þýðir: hér á að koma rauð lína. Lestu villuna og lagaðu hana.
//   - Verkefni sem eru komment (//) takið þið kommentin af þegar þið komið að þeim.
//     Í VS Code: veldu línurnar og Ctrl + K, svo Ctrl + U.
//
// ⭐ = létt   ⭐⭐ = miðlungs   ⭐⭐⭐ = erfitt
// =====================================================


// =====================================================
// HLUTI A — Upprifjun: fetch
// Mynstrið er alltaf það sama:
//   const response = await fetch(url);
//   const gogn = await response.json();
//   ...nota gögnin
// Opnaðu alltaf URL-ið í vafranum fyrst og skoðaðu JSON-ið!
// =====================================================

async function hlutiA() {
  // A1 ⭐ Sæktu https://dummyjson.com/recipes/1 og prentaðu nafnið (name).
  // Á að gefa: Classic Margherita Pizza

  const response = await fetch ("https://dummyjson.com/recipes/1");
  const uppskrift = await response.json();

  console.log(uppskrift.name)


  // A2 ⭐ Sæktu https://dummyjson.com/quotes/random og prentaðu tilvitnunina
  // og höfundinn: "„...“ — Höfundur"

  const svar = await fetch("https://dummyjson.com/quotes/random");
  const tilvitnun  = await svar.json();

  console.log(`„${tilvitnun.quote}“ — ${tilvitnun.author}`);




  // A3 ⭐ Sæktu https://dummyjson.com/products?limit=5 og prentaðu titlana
  // á öllum vörunum með for...of. Muna: listinn er í gogn.products

  const voruSvar = await fetch ("https://dummyjson.com/products?limit=5");
  const voruGogn = await voruSvar.json();

  for (const vara of voruGogn.products) {
    console.log(vara.title);
  }


  // A4 ⭐⭐ Sæktu https://dummyjson.com/products?limit=30 og notaðu map
  // til að búa til array af verðum (price). Prentaðu það.

const verdSvar = await fetch("https://dummyjson.com/products?limit=30");
const verdGogn = await verdSvar.json();

const verdListi = verdGogn.products.map(
  (vara: { price: number }) => vara.price
);

console.log(verdListi);




  // A5 ⭐⭐ Sæktu https://dummyjson.com/users?limit=30. Hversu margir notendur
  // eru eldri en 40 ára? (filter + .length)

const notendaSvar = await fetch("https://dummyjson.com/users?limit=30");
const notendaGogn = await notendaSvar.json();

const eldriEn40 = notendaGogn.users.filter(
  (notandi: {age: number}) => notandi.age > 40
);

console.log("Fjöldi eldri en 40 ára:", eldriEn40.length);

  // A6 ⭐⭐ Sæktu https://dummyjson.com/recipes/search?q=chicken
  // Hversu margar uppskriftir fundust? Prentaðu nöfnin.

const leitSvar = await fetch(
  "https://dummyjson.com/recipes/search?q=chicken"
);
const leitGogn = await leitSvar.json();

console.log("Fjöldi uppskrifta sem fundust:", leitGogn.total);

for (const rettur of leitGogn.recipes) {
  console.log(rettur.name);
}

  // A7 ⭐⭐⭐ Skrifaðu async function `saekjaUppskrift(id)` sem sækir
  // https://dummyjson.com/recipes/${id} og prentar nafnið.
  // Kallaðu á hana með 1, 2 og 3.

  async function saekjaUppskrift(id: number) {
    const svar = await fetch(`https://dummyjson.com/recipes/${id}`);
    const uppskrift = await svar.json();

    console.log(uppskrift.name);
  }

  await saekjaUppskrift(1);
  await saekjaUppskrift(2);
  await saekjaUppskrift(3);

}



hlutiA();


// =====================================================
// HLUTI B — Types á breytur
// TypeScript = JavaScript + types.
// Við segjum hvaða type breyta er, og VS Code varar okkur við villum
// ÁÐUR en kóðinn keyrir.
//
//   let nafn: string = "Anna";
//   let aldur: number = 25;
//   let erNemandi: boolean = true;
// =====================================================

// B1 ⭐ Búðu til þrjár breytur með types: nafnið þitt (string),
// aldurinn þinn (number) og hvort þú kunnir TypeScript (boolean). Prentaðu þær.

const nafn: string = "Alexandra";
const aldur: number = 35;
const kannTypeScript: boolean = false;

console.log(nafn);
console.log(aldur);
console.log(kannTypeScript);




// B2 ⭐ Takið kommentin af. 🔴 Lestu villuna. Lagaðu svo með því að setja tölu.
let verd: number = 1290;
verd = 0;
//villan er verð er string en ekki number


// B3 ⭐ Takið kommentin af. 🔴 Hvaða type ætti `borg` að vera? Lagaðu.
let borg: string = "Reykjavík";
//villan er að number átti að vera strengur


// B4 ⭐ TypeScript getur giskað sjálft. Skrifaðu  let land = "Ísland";
// og færðu músina yfir `land` í VS Code (eða Playground). Hvaða type sérðu?
let land = "Ísland";
//TypeScript ályktar að týpan sé string út frá "ísland" þótt ég hafi ekki skrifað :string


// B5 ⭐⭐ Takið kommentin af. 🔴 Af hverju kemur villa? Lagaðu.
let fjoldi = 10;
fjoldi = 20;
//Þótt við skrifum ekki : number, ályktar TypeScript að fjoldi sé tala út frá upphafsgildinu 10.
// Þess vegna má ekki setja textann "tíu" í hana.


// =====================================================
// HLUTI C — Types á functions
// Við setjum types á parameters og á það sem function skilar:
//
//   function tvofalda(tala: number): number {
//     return tala * 2;
//   }
// =====================================================

// C1 ⭐ Skrifaðu function `heilsa(nafn: string): string` sem skilar "Halló, Anna!"
// Á að gefa: Halló, Anna!

function heilsa(nafn:string): string {
  return `halló, ${nafn}!`;
}

console.log(heilsa("Alexandra"));
//halló ég :P 


// C2 ⭐ Skrifaðu function `leggjaSaman(a: number, b: number): number`.
// Á að gefa: leggjaSaman(4, 6) → 10

function leggjaSaman(a: number, b: number): number {
  return a + b;
}

console.log(leggjaSaman(4, 6));
// 10


// C3 ⭐ Takið kommentin af. 🔴 Hvað er að? Lagaðu kallið, ekki function-ina.
function ferningur(x: number): number {
return x * x;
}
console.log(ferningur(5));
//ekki hafa goosfeet á tölu🪿


// C4 ⭐⭐ Skrifaðu function `erFullordinn(aldur: number): boolean`
// sem skilar true ef aldur er 18 eða meira.
// Á að gefa: erFullordinn(17) → false, erFullordinn(30) → true

function erFullordinn(aldur:number):boolean {
  return aldur >=18;
}

console.log(erFullordinn(17)); // false
console.log(erFullordinn(30)); // true

// C5 ⭐⭐ Skrifaðu arrow function `medVsk` sem tekur verð (number) og skilar
// verðinu með 24% vsk. Hint: const medVsk = (verd: number): number => ...
// Á að gefa: medVsk(1000) → 1240

const medVsk = (verd: number): number => verd * 1.24;

console.log(medVsk(1000));


// C6 ⭐⭐ Takið kommentin af. 🔴 function-in segist skila number en skilar string. Lagaðu.
function lengd(texti: string): number {
  return texti.length;
}
console.log(lengd("Halló"));



// =====================================================
// HLUTI D — Arrays með types
//   const tolur: number[] = [1, 2, 3];
//   const nofn: string[] = ["Anna", "Óli"];
// =====================================================

// D1 ⭐ Búðu til `uppahaldsMatur: string[]` með þremur réttum. Prentaðu hann.

const uppahaldsMatur: string[] = ["Nautakjöt","Pasta","fiskur"];

console.log(uppahaldsMatur);



// D2 ⭐ Takið kommentin af. 🔴 Lagaðu svo aðeins tölur séu í array-inu.
const einkunnir: number[] = [8, 9, 10, 7];
console.log(einkunnir);


// D3 ⭐⭐ Notaðu map á `einkunnir` (eftir að þú lagaðir hana) til að bæta 1 við hverja.
// Færðu músina yfir niðurstöðuna. Hvaða type er hún?
const haerriEinkunnir = einkunnir.map(einkunn => einkunn + 1);

console.log(haerriEinkunnir);
//type er number- TypeScript veit líka sjálft að einkunn er tala, því hún kemur úr tölulista.


// D4 ⭐⭐ Skrifaðu function `summa(listi: number[]): number` með reduce.
// Á að gefa: summa([4, 8, 15]) → 27

function summa(listi: number[]): number {
  return listi.reduce((samtals, tala) => samtals + tala, 0);
}

console.log(summa([4, 8, 15]));
//reduce vinnur listann niður í eitt gildi. 0 er upphafsgildið fyrir samtals:
// therefor 
// 0 + 4 = 4
//4 + 8 = 12
//12 + 15 = 27

// D5 ⭐⭐ Skrifaðu function `lengstaNafn(nofn: string[]): string`
// sem skilar lengsta nafninu.
// Á að gefa: lengstaNafn(["Anna", "Bjarki", "Óli"]) → Bjarki

function lengstaNafn(nofn: string[]): string {
  return nofn.reduce((lengsta, nafn) => {
    if (nafn.length > lengsta.length) {
      return nafn;
    }

    return lengsta;
  }, "");
}

console.log(lengstaNafn(["Anna", "Bjarki", "Óli"]));
// Bjarki


// =====================================================
// HLUTI E — type fyrir objects
//   type Rettur = {
//     nafn: string;
//     verd: number;
//     vegan: boolean;
//   };
//   const supa: Rettur = { nafn: "Súpa", verd: 1690, vegan: true };
// =====================================================

// E1 ⭐ Búðu til `type Kvikmynd` með titill (string), ar (number) og einkunn (number).

type Kvikmynd = {
  titill: string;
  ar: number;
  einkunn: number;
  leikstjori?: string;
};


// E2 ⭐ Búðu til eina Kvikmynd, t.d. Hrútar, 2015, 7.1. Prentaðu titilinn.

const hrutar : Kvikmynd = {
  titill: "Hrútar",
  ar: 2015,
  einkunn: 7.1
};

console.log("E2:",hrutar.titill);
//Hrútar


// E3 ⭐ Takið kommentin af (þegar E1 er búið). 🔴 Hvaða key vantar? Bættu því við.
const djupid: Kvikmynd = {
  titill: "Djúpið",
  ar: 2012,
  einkunn: 6.9
};

console.log(djupid.einkunn);


// E4 ⭐ Takið kommentin af. 🔴 Hvað er stafsett vitlaust? Lagaðu.
const lamb: Kvikmynd = { 
  titill: "Lamb",
   ar: 2021,
    einkunn: 6.2 };



// E5 ⭐⭐ Búðu til `kvikmyndir: Kvikmynd[]` með þremur myndum.
// Notaðu filter til að finna myndir með einkunn yfir 7. Prentaðu titlana.
const kvikmyndir: Kvikmynd[] = [
  { titill: "Inception", ar: 2010, einkunn: 8.8 },
  { titill: "random movie", ar: 2023, einkunn: 5 },
  { titill: "Interstellar", ar: 2014, einkunn: 8.7 }
];

const yfirSjo = kvikmyndir.filter (mynd => mynd.einkunn > 7);

for (const mynd of yfirSjo) {
  console.log (mynd.titill);
}



// E6 ⭐⭐ Bættu `leikstjori?: string` við type-ið. Spurningarmerkið þýðir
// að key-ið má vanta. Búðu til eina mynd með og eina án leikstjóra.

//type Kvikmynd = {
  //titill: string;
  //ar: number;
  //einkunn: number;
  //leikstjori?: string;
//};

const myndMedLeikstjora: Kvikmynd = {
  titill: "Hrútar",
  ar: 2015,
  einkunn: 7.1,
  leikstjori: "Grímur Hákonarson"
};

const myndAnLeikstjora: Kvikmynd = {
  titill: "Lamb",
  ar: 2021,
  einkunn: 6.2
};


// E7 ⭐⭐ Skrifaðu function `lysing(m: Kvikmynd): string` sem skilar
// "Hrútar (2015) ★ 7.1"

function lysing(m: Kvikmynd): string {
  return `${m.titill} (${m.ar}) ★ ${m.einkunn}`;
}

console.log(lysing(hrutar));
// Hrútar (2015) ★ 7.1
// m er kvikmyndin sem fallið tekur við. Við lesum upplýsingarnar hennar og setjum saman einn texta með bakkommum og ${...}.


// =====================================================
// HLUTI F — Union types: aðeins ákveðin gildi leyfð
//   type Erfidleiki = "Easy" | "Medium" | "Hard";
// =====================================================

// F1 ⭐ Búðu til `type Erfidleiki = "Easy" | "Medium" | "Hard";`
// og breytu `let stig: Erfidleiki = "Easy";`

type Erfidleiki = "Easy" | "Medium" | "Hard";

let stig: Erfidleiki = "Easy";
console.log(stig); 


// F2 ⭐ Takið kommentin af. 🔴 Af hverju má þetta ekki? Lagaðu.
stig = "Hard";
console.log(stig);
//mjög erfitt er ekki gildi 

// F3 ⭐⭐ Skrifaðu function `litur(e: Erfidleiki): string` sem skilar
// "grænn" fyrir Easy, "gulur" fyrir Medium og "rauður" fyrir Hard.
// Taktu eftir: VS Code stingur upp á gildunum þegar þú skrifar e === "

function litur(e: Erfidleiki): string {
  if (e === "Easy") {
    return "grænn";
  }

  if (e === "Medium") {
    return "gulur";
  }

  return "rauður";
}

console.log(litur("Easy"));   // grænn
console.log(litur("Medium")); // gulur
console.log(litur("Hard"));   // rauður

//VS Code upp á Easy, Medium og Hard. Það veit hvaða gildi koma til greina því e er af týpunni Erfidleiki.




// F4 ⭐⭐ Búðu til `type Id = number | string;` og function `synaId(id: Id): string`
// sem skilar "Id: 42" eða "Id: abc".

type Id = number | string;

function synaId(id: Id): string {
  return `Id: ${id}`;
}

console.log(synaId(42));    // Id: 42
console.log(synaId("abc")); // Id: abc


// =====================================================
// HLUTI G — TypeScript + fetch
// Gögn frá fetch eru `any`: TypeScript veit ekki hvað er í þeim.
// Við segjum því það með type:
//
//   type Uppskrift = { id: number; name: string; rating: number };
//   const uppskrift: Uppskrift = await response.json();
//
// Nú veit VS Code hvaða keys eru til, og stingur upp á þeim!
// =====================================================

async function hlutiG() {
  // G1 ⭐ Búðu til `type Uppskrift` með id, name, cuisine og rating.
  // Sæktu /recipes/1 og settu svarið í breytu af type Uppskrift. Prentaðu name.
  // Skrifaðu svo  uppskrift.  og sjáðu hvað VS Code stingur upp á.

  type Uppskrift = {
    id: number;
    name: string;
    cuisine: string;
    rating: number;
  }; 

  const response = await fetch("https://dummyjson.com/recipes/1");
  const uppskrift: Uppskrift = await response.json();
  
 console.log("G1:", uppskrift.name);

 // Classic Margherita Pizza 🤌
 


  // G2 ⭐⭐ Reyndu að prenta uppskrift.title. 🔴 Hvað segir TypeScript?
  // (Þetta er sama villa og í debug-æfingunni á miðvikudaginn,
  //  nema núna sést hún ÁÐUR en kóðinn keyrir.)

  console.log("G2:", uppskrift.name);
  // TypeScript segir: Property 'title' does not exist on type 'Uppskrift'.
  // Það er rétt, því type-ið okkar heitir name, ekki title. Þess vegna stingur TypeScript upp á name.
  // Lagaði það með því að nota uppskrift.name í stað uppskrift.title.



  // G3 ⭐⭐ Sæktu /recipes?limit=10. Svarið er object með recipes inni í.
  // Búðu til type fyrir það:
  //   type UppskriftaSvar = { recipes: Uppskrift[]; total: number };
  // Prentaðu nöfnin með map.

  type UppskriftaSvar = {
    recipes: Uppskrift[];
    total: number;
  };
  
  const response2 = await fetch("https://dummyjson.com/recipes?limit=10");
  const uppskriftaSvar: UppskriftaSvar = await response2.json();

  const uppskriftNofn = uppskriftaSvar.recipes.map((uppskrift) => uppskrift.name);
  console.log("G3:", uppskriftNofn);


  // G4 ⭐⭐ Búðu til `type Vara` (id, title, price, category) og sæktu
  // https://dummyjson.com/products?limit=20
  // Prentaðu ódýrustu vöruna. Hint: reduce eða sort.

  type Vara = {
  id: number;
  title: string;
  price: number;
  category: string;
};

const varaSvar = await fetch("https://dummyjson.com/products?limit=20");
const varaGogn: { products: Vara[] } = await varaSvar.json();

const odyrasta = varaGogn.products.reduce((odyrustHingadTil, vara) => {
  if (vara.price < odyrustHingadTil.price) {
    return vara;
  }

  return odyrustHingadTil;
});

console.log("G4:", odyrasta.title, odyrasta.price);

//G4: Apple 1.99
//[
    //9.99,  19.99,   14.99,   12.99,
    //8.99,  49.99,  129.99,   89.99,
    //69.99,  79.99, 1899.99, 2499.99,
    //299.99, 499.99,  799.99,  1.99,
    //12.99,   8.99,    9.99,   4.99,
    //1.49,  10.99,    2.99,   14.99,
    //1.29,   0.99,    6.99,    5.49,
    //  3.99,   2.49
//]


  // G5 ⭐⭐⭐ Skrifaðu function
  //   async function saekjaUppskrift(id: number): Promise<Uppskrift>
  // sem sækir og SKILAR uppskriftinni. Kallaðu á hana:
  //   const u = await saekjaUppskrift(5);
  //   console.log(u.name);
  // Á að gefa: Mango Salsa Chicken


  // G6 ⭐⭐⭐ Bættu `difficulty: Erfidleiki` við Uppskrift (type-ið úr F1).
  // Sæktu 50 uppskriftir og teldu hversu margar eru "Easy".
  // Á að gefa: 30

  async function saekjaUppskrift(id: number): Promise<Uppskrift> {
  const svar = await fetch(`https://dummyjson.com/recipes/${id}`);
  const rettur: Uppskrift = await svar.json();

  return rettur;
}

const u = await saekjaUppskrift(5);
console.log("G5:", u.name);

// G5: Mango Salsa Chicken

}

hlutiG();


// =====================================================
// 🚀 BÓNUS
// =====================================================

// X1 ⭐⭐ `interface` er næstum það sama og `type` fyrir objects:
//   interface Notandi { firstName: string; lastName: string; age: number; }
// Sæktu https://dummyjson.com/users?limit=10 og prentaðu fullt nafn allra.

interface Notandi {
  firstName: string;
  lastName: string;
  age: number;
}

async function saekjaNotendur() {
  const svar = await fetch("https://dummyjson.com/users?limit=10");
  const notendaGogn: { users: Notandi[] } = await svar.json();

  for (const notandi of notendaGogn.users) {
    console.log(`${notandi.firstName} ${notandi.lastName}`);
  }
}

saekjaNotendur();

//Emily Johnson
//Michael Williams
//Sophia Brown
//James Davis
//Emma Miller
//Olivia Wilson
//Alexander Jones
//Ava Taylor
//Ethan Martinez
//Isabella Anderson

//interface Notandi lýsir einum notanda. Svarið inniheldur listann undir users, svo við gefum gogn týpuna { users: Notandi[] }.


// X2 ⭐⭐⭐ Taktu Uppskriftabókina frá miðvikudeginum (main.js), endurnefndu
// hana main.ts og bættu types við: Uppskrift, uppskriftir: Uppskrift[], og
// types á parameters. Hversu margar villur finnur TypeScript?

//// Þarf aðstoð við þetta dæmi.. 🤔


// X3 ⭐⭐⭐ Hvað er munurinn á `any` og `unknown`? Prófaðu:
//   let a: any = "halló";      a.toUpperCase();   a.flyga();
//   let b: unknown = "halló";  b.toUpperCase();
// Hvor gefur villu? Af hverju er það gott?


let a: any = "halló";
a.toUpperCase();
a.flyga();

let b: unknown = "halló";
b.toUpperCase(); // TypeScript merkir þessa línu sem villu

// `any` leyfir þér að kalla á hvaða aðferð sem er, jafnvel ef hún er ekki til. Þetta getur leitt til keyrsluvillu.

// `unknown` er öruggari því þú verður að athuga týpu áður en þú kallar á aðferð. Þetta hjálpar til við að forðast villur í keyrslu.

// Þess vegna er `unknown` oft betri kostur en `any` þegar þú vilt tryggja týpuöryggi.

🎉🎉🎉
