let student=[{name:"pavan", marks:75},
{name:"akhil",marks:90},
{name:"kondalrao", marks:80},
{name:"ramu", marks:50}]


function uppercase(klr){
    console.log(klr.map(AA=>AA.name.toUpperCase()))
   console.log(klr.filter(a=>a.marks>50));
    console.log(klr.map(b=>b.name.slice(0,3)))
   klr.forEach(element => {

        console.log(element.name,element.marks)
    });
}

uppercase(student)