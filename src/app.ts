import {connectToDatabase, collections} from "./connectToDb";

let q6 = async () => {
	let cursor = collections.communes.find({});
	let timeJson = {};
	let time = Date.now();
	while(await cursor.hasNext()){
		console.log(await cursor.next());
	}
}

let q7 = async () => {
	//find all towns
	let townList = [];
	let cursor = collections.communes.find({});
	while(await cursor.hasNext()){
		townList.push((await cursor.next()).nom_commune);
	}
	console.log(townList);

	let timeJson = {};
	let timeList = [];
	for(let town of townList){
		let time = Date.now();
		//launch all at once, server becomes unresponsive immeiately
		//collections.communes.findOne({nom_commune: town}).then(()=>{
		//	console.log(time);
		//	timeJson[town] = Date.now() - time;
		//	timeList.push(timeJson[town]);
		//	//console.log(timeJson[town])
		//});

		//if(timeList.length > 2000) break;
		//150ms * 39000 ~ 2hours, cant be bothered
		await collections.communes.findOne({nom_commune: town})
		timeJson[town] = Date.now() - time;
		timeList.push(timeJson[town]);
		console.log(town, ":", timeJson[town])
		}
		
	console.log(timeJson);
	let total = 0;
	for(let k of timeList) {
			total += k;
	}
	console.log("Average time : ", total / timeList.length);
	//140ms, but my server is hosted in Torronto (approx 110ms ping)
}


connectToDatabase().then(async () => {
	//q6();
	q7();
	return;
});
