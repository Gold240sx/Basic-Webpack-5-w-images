
var financingOptions = [
    //Mosaic
    {bank:"Mosaic", loanName: "Mosaic 12MoNP 25Yr 2.99", apr:"2.99", term: 25, bankingFee:.255},
    {bank:"Mosaic", loanName: "Mosaic 12MoNP 20Yr 2.99", apr:"2.99", term: 20, bankingFee:.245},
    {bank:"Mosaic", loanName: "Mosaic 12MoNP 20Yr 4.99", apr:"4.99", term: 20, bankingFee:.155},
    {bank:"Mosaic", loanName: "Mosaic 12MoNP 10Yr 2.99", apr:"2.99", term: 10, bankingFee:.185},
    {bank:"Mosaic", loanName: "Mosaic 12MoNP 10Yr 7.99", apr:"7.99", term: 10, bankingFee:0}
]

var modules = [
    //60Cell
    {manufacturer: "Canadian Solar", productNo: "CS3L-355MS", watts: 355, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Canadian Solar", productNo: "CS3L-360MS", watts: 360, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Canadian Solar", productNo: "CS3L-355MS", watts: 365, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Canadian Solar", productNo: "CS3L-370MS", watts: 370, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Hanwha Q-Cells", productNo: "Q.PEAK DUO BLK-G10.a+ 355", watts: 355, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Hanwha Q-Cells", productNo: "Q.PEAK DUO BLK-G10.a+ 360", watts: 360, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0}, 
    {manufacturer: "Hanwha Q-Cells", productNo: "Q.PEAK DUO BLK-G10.a+ 365", watts: 365, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Hanwha Q-Cells", productNo: "Q.PEAK DUO BLK-G10.a+ 370", watts: 370, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "LG Electronics Inc.", productNo: "LG365N1C-A6", watts: 365, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "LG Electronics Inc.", productNo: "LG370M1K-A6", watts: 370, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: true, adder: 0},
    {manufacturer: "LG Electronics Inc.", productNo: "LG375M1K-A6", watts: 375, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: true, adder: 0},
    {manufacturer: "LG Electronics Inc.", productNo: "LG375N1K-A6", watts: 375, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "LG Electronics Inc.", productNo: "LG375Q1K-A6", watts: 375, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "LG Electronics Inc.", productNo: "LG380M1C-A6", watts: 380, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: true, adder: 0},
    {manufacturer: "LG Electronics Inc.", productNo: "LG385M1C-A6", watts: 385, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Longi Solar", productNo: "LR4-60HPB-350M", watts: 350, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Longi Solar", productNo: "LR4-60HPB-355M", watts: 355, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Longi Solar", productNo: "LR4-60HPB-360M", watts: 360, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Longi Solar", productNo: "LR4-60HPB-360M", watts: 360, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Longi Solar", productNo: "LR4-60HPB-370M", watts: 370, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Longi Solar", productNo: "LR4-60HPB-375M", watts: 375, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Mission Solar Energy", productNo: "MSE330SX5T", watts: 330, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Mission Solar Energy", productNo: "MSE335SX5K", watts: 335, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Mission Solar Energy", productNo: "MSE340SX5K", watts: 340, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Mission Solar Energy", productNo: "MSE340SX5T", watts: 340, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Mission Solar Energy", productNo: "MSE345SX5K", watts: 345, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Mission Solar Energy", productNo: "MSE350SX5K", watts: 350, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC315TP3M", watts: 315, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC320TP3M", watts: 320, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC325TP3M Black", watts: 325, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC330TP3M Black", watts: 330, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC335TP3M Black", watts: 335, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC355NP2 Black", watts: 355, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC355TP4 Black", watts: 355, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC360NP2", watts: 360, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC360NP2 Black", watts: 360, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC360TP4", watts: 360, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC360TP4 Black", watts: 360, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC360AA BLACK", watts: 360, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC365NP2", watts: 365, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC365NP2 Black", watts: 365, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC365TP4", watts: 365, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC365TP4 Black", watts: 365, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC365AA BLACK", watts: 365, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC370NP2", watts: 370, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC370NP2 Black", watts: 370, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC370TP4", watts: 370, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC370TP4 Black", watts: 370, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC370AA BLACK", watts: 370, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC375NP2", watts: 375, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC375TP4", watts: 375, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC375AA BLACK", watts: 375, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Silfab Solar", productNo: "SIL-390 NT Mono PERC", watts: 390, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "SunPower Corp.", productNo: "A400-BLK-G-AC", watts: 400, cells: 66, warranty: 25, degredation: 0, volume: 0, smartModule: true, adder: 0},
    {manufacturer: "SunPower Corp.", productNo: "SPR-MAX5-A410-E3-AC", watts: 410, cells: 66, warranty: 25, degredation: 0, volume: 0, smartModule: true, adder: 0},
    {manufacturer: "SunPower Corp.", productNo: "SPR-A415", watts: 415, cells: 66, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "SunPower Corp.", productNo: "SPR-MAX5-A415-E3-AC", watts: 415, cells: 66, warranty: 25, degredation: 0, volume: 0, smartModule: true, adder: 0},
    {manufacturer: "SunPower Corp.", productNo: "SPR-A420", watts: 420, cells: 66, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "SunPower Corp.", productNo: "SPR-M420", watts: 420, cells: 66, warranty: 25, degredation: 0, volume: 0, smartModule: true, adder: 0},
    {manufacturer: "SunPower Corp.", productNo: "SPR-M420-H-AC (240V)", watts: 420, cells: 66, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "SunPower Corp.", productNo: "SPR-A420-G-AC", watts: 420, cells: 66, warranty: 25, degredation: 0, volume: 0, smartModule: true, adder: 0},
    {manufacturer: "SunPower Corp.", productNo: "SPR-M425", watts: 425, cells: 66, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0}, 
    {manufacturer: "SunPower Corp.", productNo: "SPR-M425-H-AC (240V)", watts: 425, cells: 66, warranty: 25, degredation: 0, volume: 0, smartModule: true, adder: 0},
    {manufacturer: "SunPower Corp.", productNo: "SPR-M430", watts: 430, cells: 66, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0}, 
    {manufacturer: "SunPower Corp.", productNo: "SPR-M430-H-AC (240V)", watts: 430, cells: 66, warranty: 25, degredation: 0, volume: 0, smartModule: true, adder: 0},
    {manufacturer: "SunPower Corp.", productNo: "SPR-M435", watts: 435, cells: 66, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0}, 
    {manufacturer: "SunPower Corp.", productNo: "SPR-M435-H-AC (240V)", watts: 435, cells: 66, warranty: 25, degredation: 0, volume: 0, smartModule: true, adder: 0},
    {manufacturer: "SunPower Corp.", productNo: "SPR-M440", watts: 440, cells: 66, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0}, 
    {manufacturer: "SunPower Corp.", productNo: "SPR-M440-H-AC (240V)", watts: 440, cells: 66, warranty: 25, degredation: 0, volume: 0, smartModule: true, adder: 0},
    {manufacturer: "Trina Solar Energy Co., Ltd", productNo: "TSM-365DD08M.08(II)", watts: 365, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Trina Solar Energy Co., Ltd", productNo: "TSM-370DD08M.08(II)", watts: 370, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Trina Solar Energy Co., Ltd", productNo: "TSM-375DD08M.08(II)", watts: 375, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Trina Solar Energy Co., Ltd", productNo: "TSM-380DD08M.08(II)", watts: 380, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Trina Solar Energy Co., Ltd", productNo: "TSM-395 DE09.08", watts: 395, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Trina Solar Energy Co., Ltd", productNo: "TSM-400 DE09.08", watts: 400, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Trina Solar Energy Co., Ltd", productNo: "TSM-405 DE09.08", watts: 405, cells: 60, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    //72Cell
    {manufacturer: "Hanwha Q-Cells", productNo: "Q.PEAK DUO L-g8 430", watts: 430, cells: 72, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Hanwha Q-Cells", productNo: "Q.PEAK DUO XL-G10.3 495W", watts: 495, cells: 72, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Mission Solar Energy", productNo: "MSE390SR9S", watts: 390, cells: 72, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "REC", productNo: "REC450AA 72", watts: 375, cells: 72, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Solaria", productNo: "PowerXT 430R-PL", watts: 430, cells: 72, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "Solaria", productNo: "PowerXT 400R-PM-AC", watts: 400, cells: 72, warranty: 25, degredation: 0, volume: 0, smartModule: true, adder: 0}, // Smart Module
    {manufacturer: "SunPower Corp.", productNo: "SPR-M460-COM", watts: 460, cells: 72, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "SunPower Corp.", productNo: "SPR-M460-COM-MLSD", watts: 460, cells: 72, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "SunPower Corp.", productNo: "SPR-M470-COM", watts: 470, cells: 72, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "SunPower Corp.", productNo: "SPR-M470-COM-MLSD", watts: 470, cells: 72, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "SunPower Corp.", productNo: "SPR-M475-COM", watts: 475, cells: 72, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
    {manufacturer: "SunPower Corp.", productNo: "SPR-M475-COM-MLSD", watts: 475, cells: 72, warranty: 25, degredation: 0, volume: 0, smartModule: false, adder: 0},
]

var inverters = [
    //Micro
    {manufacturer: "Enphase Energy", productNo: "IQ7-60-2-US (240V)", wattage: 240,cells: 60, warranty: 25, efficiency: 0, volume: 0},
    {manufacturer: "Enphase Energy", productNo: "IQ8-60-2-US (240V)", wattage: 240,cells: 60, warranty: 25, efficiency: 0, volume: 0},
    {manufacturer: "Enphase Energy", productNo: "IQ7PLUS-72-2-US (240V)", wattage: 295,cells: 72, warranty: 25, efficiency: 0, volume: 0},
    {manufacturer: "Enphase Energy", productNo: "IQ8A-72-2-US (240V)", wattage: 349,cells: 72, warranty: 25, efficiency: 0, volume: 0},
    //String
    {manufacturer: "SMA Solar Technology AG", productNo: "SB3.0-1SP-US-40 (240V)", wattage: 3000, warranty: 25, efficiency: 97.6},
    {manufacturer: "SMA Solar Technology AG", productNo: "SB3.8-1SP-US-40 (240V)", wattage: 3800, warranty: 25, efficiency: 97.5},
    {manufacturer: "SMA Solar Technology AG", productNo: "SB5.0-1SP-US-40 (240V)", wattage: 5000, warranty: 25, efficiency: 97.5},
    {manufacturer: "SMA Solar Technology AG", productNo: "SB6.0-1SP-US-40 (240V)", wattage: 6000, warranty: 25, efficiency: 97.5},
    {manufacturer: "SMA Solar Technology AG", productNo: "SB7.0-1SP-US-40 (240V)", wattage: 7000, warranty: 25, efficiency: 97.5},
    {manufacturer: "SMA Solar Technology AG", productNo: "SB7.7-1SP-US-40 (240V)", wattage: 7700, warranty: 25, efficiency: 97.5},
    {manufacturer: "SolarEdge Technologies Inc", productNo: "SE3000A-US", wattage: 3000, warranty: 25},
    {manufacturer: "SolarEdge Technologies Inc", productNo: "SE3800A-US", wattage: 3800, warranty: 25},
    {manufacturer: "SolarEdge Technologies Inc", productNo: "SE5000A-US", wattage: 5000, warranty: 25},
    {manufacturer: "SolarEdge Technologies Inc", productNo: "SE6000A-US", wattage: 6000, warranty: 25},
    {manufacturer: "SolarEdge Technologies Inc", productNo: "SE7600A-US", wattage: 7600, warranty: 25},
    {manufacturer: "SolarEdge Technologies Inc", productNo: "SE10000A-US", wattage: 10000, warranty: 25},
    {manufacturer: "SolarEdge Technologies Inc", productNo: "SE11400A-US", wattage: 11400, warranty: 25},
    // Additional items
    {manufacturer: "SolarEdge Technologies Inc", productNo: "25-Year Extension", warranty: 25},
    {manufacturer: "SolarEdge Technologies Inc", productNo: "HD Wave Charging Cable"},
]

var DCoptimizers = [
    {manufacturer: "SolarEdge Technologies Inc", productNo: "P350", wattage: 350},
    {manufacturer: "SolarEdge Technologies Inc", productNo: "P401", wattage: 400},
    {manufacturer: "SolarEdge Technologies Inc", productNo: "P404", wattage: 405},
    {manufacturer: "SolarEdge Technologies Inc", productNo: "P500", wattage: 500},
    {manufacturer: "SolarEdge Technologies Inc", productNo: "P600", wattage: 600},
    {manufacturer: "SolarEdge Technologies Inc", productNo: "P700", wattage: 700},
    {manufacturer: "SolarEdge Technologies Inc", productNo: "P850", wattage: 850},
]

var energyStorageSystemComponents = [
    // LG Electronics
    {manufacturer: "LG Electronics Inc.", productNo: "RESU3.3",type: "battery", kWh: 3.3, warranty: 10, volume: 0, price: 0},
    {manufacturer: "LG Electronics Inc.", productNo: "RESU6.5", type: "battery", kWh: 6.5, warranty: 10, volume: 0, price: 0},
    {manufacturer: "LG Electronics Inc.", productNo: "RESU7H", type: "battery", kWh: 7, warranty: 10, volume: 0, price: 0},
    {manufacturer: "LG Electronics Inc.", productNo: "RESU10", type: "battery", kWh: 10, warranty: 10, volume: 0, price: 0},
    {manufacturer: "LG Electronics Inc.", productNo: "RESU10H", type: "battery", kWh: 10, warranty: 10, volume: 0, price: 0},
    // Generac
    {manufacturer:"Generac", productName: "PWRCell 3.0kWh DCB Battery Module", productNo: "G0080040", type: "Battery", kWh: 3, volume: 0, price: 0}, //cost: $1,676.03
    {manufacturer:"Generac", productName: "600A Current Tranformer Kit", productNo: "APKE00006", type: "Transformer Upgrade", volume: 0, price: 0}, //cost: $200.43
    {manufacturer:"Generac", productName: "PWRCell Battery Cabinet", productNo: "APKE00007", type: "Battery Cabinet", volume: 0, price: 0}, //cost: $2,312.79
    {manufacturer:"Generac", productName: "PWRCell Spacer Kit", productNo: "APKE00008", type: "Battery Spacer", volume: 0, price: 0}, //cost: $98.98
    {manufacturer:"Generac", productName: "PWRCell Upgrade Kit", productNo: "APKE00009", type: "Battery Upgrade Kit", volume: 0, price: 0}, //cost: $130.32
    {manufacturer:"Generac", productName: "PV Link - 2500W MPPT Optimizer", productNo: "APKE00010", type: "PV Link", volume: 0, price: 0}, //cost: $452.00
    {manufacturer:"Generac", productName: "SnapRS - In-Line Disconnect Switch", productNo: "APKE00011", type: "ESS Disconnect", volume: 0, price: 0}, //cost: $29.69
    {manufacturer:"Generac", productName: "PWRCell Inverter - 7.6kW Single-Phase Inverter w/ CT's", productNo: "APKE00014", type: "ESS Inverter", kW: 7.6, volume: 0, price: 0}, //cost: $2,312.79
    {manufacturer:"Generac", productName: "PWRCell Cabinet", productNo: "APKE00028", type: "Battery Cabinet", volume: 0, price: 0}, //cost: $2,514.05
    {manufacturer:"Generac", productName: "PWRCell 200A Service Rated ATS", productNo: "CXSW200A3", type: "ATS", volume: 0, price: 0}, //cost: $29.69
    {manufacturer:"Generac", productName: "50A Smart Management Module (SMM)", productNo: "7000", type: "SMM", volume: 0, price: 0}, //cost: $29.69
    // ELM Residential
    {manufacturer:"ELM Fieldsight", productName: "Microgrid 1030", productNo: "Microgrid 1030", type: "ESS System", kWh:30, kW: 9, volume: 0, price: 0}, //cost:
    {manufacturer:"ELM Fieldsight", productName: "Microgrid 2030", productNo: "Microgrid 1030", type: "ESS System", kWh:30, kW: 18, volume: 0, price: 0}, //cost:
    {manufacturer:"ELM Fieldsight", productName: "Microgrid EXP", productNo: "EXP30", type: "Battery", kWh:30, volume: 0, price: 0}, //cost:
    // ELM Commercial
    {manufacturer:"ELM Fieldsight", productName: "Microgrid 30", productNo: "MG30", type: "ESS System", kWh:30, kW: 9, volume: 0, price: 0}, //cost:
    {manufacturer:"ELM Fieldsight", productName: "Microgrid 125", productNo: "MG125", type: "ESS System", kWh:30, kW: 18, volume: 0, price: 0}, //cost:
    {manufacturer:"ELM Fieldsight", productName: "Microgrid 250", productNo: "MG250", type: "ESS System", kWh:30, kW: 9, volume: 0, price: 0}, //cost:
    {manufacturer:"ELM Fieldsight", productName: "Microgrid 500", productNo: "MG500", type: "ESS System", kWh:30, kW: 18, volume: 0, price: 0}, //cost:
    {manufacturer:"ELM Fieldsight", productName: "Microgrid 1000", productNo: "MG1000", type: "ESS System", kWh:30, kW: 18, volume: 0, price: 0}, //cost:
];
