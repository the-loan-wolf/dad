let inputText;
let testSearchBtn = document.querySelector("#test-search-btn");

// all tests keyword stored here as an object for search

let tests = {
    "HS%": ["hs%"],
    TC: ["tc"],
    DC: ["dc"],
    Platelets: ["platelets"],
    CBC: ["cbc"],
    ESR: ["esr"],
    ReticulocyteCount: ["reticulocyte count"],
    ABO: ["abo blood group rh type","abo","rh", "blood group","blood"],
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
    Amylase: ["amylase"],
    Lipase: ["lipase"],
    Calcium: ["calcium"],
    Calcitonin: ["calcitonin"],
    IonizedCalcium: ["ionized calcium"],
    "25OHVitamin-D": ["25 oh vitamin-d","vitamin"],
    VitaminB12: ["vitamin b12","vitamin"],
    VitaminB1: ["vitamin b1","vitamin"],
    VitaminB6: ["vitamin b6","vitamin"],
    VitaminC: ["vitamin c","vitamin"],
    VitaminE: ["vitamin e","vitamin"],
    VitaminK: ["vitamin k","vitamin"],
    VitaminA: ["vitamin a","vitamin"],
    "ProthrombinTime(PT)": ["prothrombin time(pt)"],
    APTT: ["aptt"],
    LIPIDProfile: ["lipid profile"],
    PSATotal: ["psa total","psa"],
    FreePSA: ["free psa","psa"],
    AlphaFetoProtein: ["alpha fetoprotein","alpha","fetoprotein","protein"],
    TSH: ["tsh"],
    T3T4T5H: ["t3 t4 t5 h","t3","t4","t5","h"],
    FreeT3T4T5H: ["free t3 t4 t5 h","t3 t4 t5 h","t3","t4","t5","h"],
    FT3: ["ft3"],
    FT4: ["ft3"],
    LH: ["lh"],
    FSH: ["fsh"],
    Prolactin: ["prolactin"],
    "LH+FSH+PRL": ["lh + fsh + prl","prl","fsh","lh"],
    Testosterone: ["testosterone"],
    FreeTestosterone: ["free testosterone","testosterone"],
    "PTHIntact-Molecule": ["pth intact-molecule","pth"],
    TPO: ["tpo"],
    IGE: ["ige"],
    "TyphidotIgG/IgM": ["typhidot igg/igm"],
    AMH: ["amh"],
    "B-HCG": ["b-hcg"],
    widalTest: ["widal test","widal"],
    "MP(Antigen)": ["mp(antigen)","mp","mp antigen","antigen"],
    "MP(Salide)": ["mp(salide)","mp","mp salide","salide"],
    "UrineCulture/Sensitivity": ["urine culture/sensitivity","urine","culture","sensitivity","urine culture"],
    AFBCulture: ["afb culture","afb","culture"],
    AFBSmear: ["afb smear","smear","afb"],
    TBPCR: ["tbpcr"],
    FNAC: ["fnac"],
    TORCHSIgG: ["torch igg","igg","torch"],
    TORCHSIgM: ["torch igm","igm","torch"],
    Torch10: ["torch 10","torch"],
    HistoSmall: ["histo small","histo"],
    HistoMedium: ["histo medium","histo"],
    HistoLarge: ["histo large","histo"],
    HistoComplex: ["histo complex","histo"],
    "HIV1&2": ["hiv 1&2","hiv","hiv 1","hiv 2","hiv 1 and 2"],
    AntiHCV: ["anti hcv"],
    HBsAg: ["hbsag"],
    "CoombsTest(Direct)": ["coombs test","coombs","coombs test direct"],
    "CoombsTest(Indirect)": ["coombs test","coombs","coombs test indirect"],
    Ferritin: ["ferritin"],
    "D-Dimer": ["d-dimer","d dimer"],
    HBA1c: ["hba1c"],
    DengueNS1: ["dengue ns1, Igg/Igm","dengue","Igg","igm"],
    CRP: ["crp"],
    RAFactor: ["ra factor"],
    ASOTitre: ["aso titre"],
    ADA: ["ada"],
    "HLA-B27": ["hla-b27", "hla"],
    "HLA-B27(PCR)": ["hla","hla-b27"],
    "Anti-CCP": ["anti-ccp"],
    Electrolyte: ["electrolyte"],
    TBGold: ["tb gold"]
};

// adding event listner to our search button

testSearchBtn.addEventListener("click", searchFunction);

// search function
function searchFunction() {
    inputText = document.querySelector("#test-name").value.toLowerCase();
    for (let a = 0; a < document.getElementsByTagName("tr").length; a++) {
        document.getElementsByTagName("tr")[a].style.display = "none";
    }

    document.getElementsByTagName("tr")[0].style.display = "";
    for (let i = 0; i < Object.values(tests).length; i++) {
        for (let j = 0; j < Object.values(tests)[i].length; j++) {
            if (inputText == Object.values(tests)[i][j]) {
                let c = i + 1;
                document.getElementsByTagName("tr")[c].style.display = "";
            }
        }
        
    }
};