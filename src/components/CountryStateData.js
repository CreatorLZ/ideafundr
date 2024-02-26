export const countryStateData = {
  "Nigeria": {
    states: ["Lagos", "Abuja", "Kano", "Rivers", "Enugu", "Edo"],
    phoneRegex: /^(\+234|0)[789][01]\d{8}$/,
  },
  "Ghana": {
    states: ["Greater Accra", "Ashanti", "Western", "Eastern", "Central"],
    phoneRegex: /^(\+233|0)[2357]\d{8}$/,
  },
  "South Africa": {
    states: ["Gauteng", "Western Cape", "KwaZulu-Natal", "Eastern Cape", "Mpumalanga"],
    phoneRegex: /^(\+27|0)[678]\d{8}$/,
  },
  "Ivory Coast": {
    states: ["Abidjan", "Yamoussoukro", "Bouaké", "Daloa", "Korhogo"],
    phoneRegex: /^(\+225|0)[01234567]\d{7}$/,
  },
  "Angola": {
    states: ["Luanda", "Huambo", "Lobito", "Benguela", "Namibe"],
    phoneRegex: /^(\+244|0)[12]\d{8}$/,
  },
  "Germany": {
    states: ["Bavaria", "North Rhine-Westphalia", "Baden-Württemberg", "Lower Saxony", "Hesse"],
    phoneRegex: /^(\+49|0)[1-9]\d{8,14}$/,
  },
  "United States": {
    states: ["California", "New York", "Texas", "Florida", "Illinois"],
    phoneRegex: /^(\+1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
  },
  "Canada": {
    states: ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba"],
    phoneRegex: /^(\+1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
  },
  "Australia": {
    states: ["New South Wales", "Victoria", "Queensland", "Western Australia", "South Australia"],
    phoneRegex: /^(\+61|0)4\d{8}$/,
  },
  "India": {
    states: ["Maharashtra", "Uttar Pradesh", "Tamil Nadu", "Karnataka", "Kerala"],
    phoneRegex: /^(\+91|0)?[6789]\d{9}$/,
  },
};
