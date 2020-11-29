let inputText;
let testSearchBtn = document.querySelector("#test-search-btn");

testSearchBtn.addEventListener("click", searchFunction);

function searchFunction() {
    inputText = document.querySelector("#test-name").value.toLowerCase();
    console.log(inputText);
}

// all tests keyword stored here as an object for search

let tests = {

    "HS%": ["hs%"],
    TC: ["tc"],
    DC: ["dc"],
    Platelets: ["platelets"],
    CBC: ["cbc"],
    ESR: ["esr"],
    ReticulocyteCount: ["reticulocyte count"],
    ABO: ["abo blood group rh type","abo","rh"],
    BTCT: ["bt ct","bt"],
    Eosinophils: ["eosinophils", "eosinophils absolute count"],
    BloodSugarRandom: ["blood sugar random","sugar","blood sugar"],
    BloodSugarPP: ["blood sugar pp","sugar","blood sugar"],
    BloodSugarFasting: ["blood sugar fasting","blood sugar","sugar"],
    Urea: ["urea"],
    SCreatinine: ["s.creatinine","s creatinine"],
    Bilirubin: ["bilirubin"],
    SGPT: ["sgpt"],
    SGOT: ["sgot"],
    TotalProtein: ["total protein","protein"],
    "Albumin/globulin": ["albumin/globulin","globulin","albumin"],
    "Albumin/globulinRatio": ["albumin/globulin ratio","globulin","albumin"],
    AlkalinePhosphate: ["alkaline phosphate","phosphate"],
    "GGT-GammaGlutamylTransferase": ["ggt-gamma glutamyl transferase","transferase","glutamyl","ggt-gamma","gamma","ggt"],
    AcidPhosphate: ["acid phosphate","phosphate"],
    UricAcid: ["uric acid","uric"],
    Sodium: ["sodium"],
    Potassium: ["potassium"],
    Chloride: ["chloride"],
    "KFT/RFT": ["kft/rft","kft","rft"],
    LFT: ["lft"],
    
}