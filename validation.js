const Ajv = require("ajv");
const ajv = new Ajv();

const hotelSchema = { /* insérer le schéma JSON ci-dessus ici */ };

const validate = ajv.compile(hotelSchema);

const hotelData = {
  // données de l'hôtel à valider
};

const valid = validate(hotelData);
if (!valid) {
  console.log(validate.errors);
}
