import { ObjectId } from "mongodb";

export default class  {
    constructor(
    public code_commune_INSEE: Number,
    public nom_commune_postal: String,
    public code_postal: Number,
    public libelle_acheminement: String,
    public ligne_5: String,
    public latitude: Number,
    public longitude: Number,
    public code_commune: Number,
    public article: String,
    public nom_commune: String,
    public nom_commune_complet: String,
    public code_departement: Number,
    public nom_departement: String,
    public code_region: Number,
    public nom_region: String,
		public id?: ObjectId,
) {}
}
