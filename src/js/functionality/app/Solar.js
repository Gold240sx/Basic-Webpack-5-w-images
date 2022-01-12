
/*-----------------------------------------------------------------------------------------------------------
------------------------------------        System Objects      ---------------------------------------------
-----------------------------------------------------------------------------------------------------------*/
const system = {objectName: "system", moduleWattage: 340, annualConsumption: 36500, annualProduction: 26000, numberOfModules: 65, numberOfInverters: 1, adders:6500, ppW:3.6, sunHours:0, energyOffset: 0, essBackupDuration:""};
const customer = {objectName: "customer",name:"randy", address:"23000 W salmon Blvd", email:"yahoo@yahoo.com", taxLiability:23000, estMonthlyBill: 350};
const estProposal = {objectName: "estProposal",estReccomendedSystemSize: 0, estMonthlyConsumption: 0, estAnnualConsumption: 0, estAnnualProduction: 0, estReccomendedEssSystemSize: 0, estNumberOfModules: 0, estCashSystemPrice: 0, estCashITC: 0, estCashNetPrice: 0, estEnergyOffset: 0, estSunHours:3.62, chosenModule: "5", chosenInverter: "5"};
const proposal = {objectName: "proposal", financing: true, bank: "Mosaic", apr: 1.99, bankingFee: .125, term: 20, cashSystemPrice: 0, cashAvailableItc: 0, cashNetPrice: 0, financedSystemPrice: 0, financedITC: 0, financedNetSystemPrice: 0};
const designer = {objectName: "designer", name:"Michael Martell", designedOn:"12/22/2021", designCount:46, averageDesignEfficiency:.88};
const utility = {objectName: "utility", name:"TXU", ppkW: 0.135, deliveryFee: .042, monthlyFee:10, accountNumber:0};
const variables = {objectName: "variables", ITC: .26, ppW:0, estSunHours: 0};
const equipment = {objectName: "Equipment", 
                    moduleManufacturer:"", 
                    moduleProductNo:"", 
                    inverterManufacturer:"", 
                    inverterProductNo:"", 
                    inverterCount:"", 
                    dcOptimizerManufacturer:"",
                    dcOptimizerProductNo:"", 
                    dcOptimizerCount:"",
                    essManufacturer:"",
                    essPower:"",
                    essStorageSize:"",
                    evChargingCable:"",
                    inverterWarrantyExtension:"",
                    rebate:"",
};

// Import Product Library

/*-------------------------------------------------------------
-----------       Backend Variables (Inputs)      -------------
-------------------------------------------------------------*/
var ITC = variables.ITC;
var ppw = variables.ppW;
var estSunHours = variables.estSunHours;

/*-----------------------------------------------------------------------------------------------------------
------------------------------------        System + Proposal       -----------------------------------------
-----------------------------------------------------------------------------------------------------------*/
const systemSize = system.SystemSize = system.moduleWattage * system.numberOfModules /1000;
const annualConsumption = system.annualConsumption;
const annualProduction = system.annualProduction;
const energyOffset = system.energyOffset = (annualProduction / annualConsumption);
const systemSunHours = system.sunHours = (annualProduction / 365 / systemSize);
//Cash
const cashSystemPrice = proposal.cashSystemPrice = (systemSize * 1000 + system.adders) * system.ppW;
const availableCashItc = proposal.cashAvailableItc = cashSystemPrice * ITC;
const cashNetPrice = proposal.cashNetPrice = (cashSystemPrice - availableCashItc);
//Financed
const cheatNumber = proposal.cheatNumber = (1 - proposal.bankingFee);
const financedSystemPrice = proposal.financedSystemPrice = (cashSystemPrice / cheatNumber);
const financedITC = proposal.financedITC = (financedSystemPrice * ITC);
const financedNetSystemPrice = proposal.financedNetSystemPrice = (financedSystemPrice - financedITC);
//-------------------------- Energy Storage --------------------------------------------//





/*-----------------------------------------------------------------------------------------------------------
-----------------------------        Quick Tool Proposal Estimates       ------------------------------------
-----------------------------------------------------------------------------------------------------------*/
const estMonthlyConsumption = estProposal.estMonthlyConsumption = (customer.estMonthlyBill - utility.monthlyFee) / (utility.ppkW + utility.deliveryFee);
const estAnnualConsumption = estProposal.estAnnualConsumption = (estMonthlyConsumption * 12);
const estReccomendedSystemSize = estProposal.estReccomendedSystemSize = (estAnnualConsumption / 365 / estProposal.estSunHours);
const estNumberOfModules = estProposal.estNumberOfModules = Number(Math.ceil(estReccomendedSystemSize * 1000 / system.moduleWattage));
const estAnnualProduction = estProposal.estAnnualProduction = (((estNumberOfModules)*(system.moduleWattage) / 1000) * 365 * estProposal.estSunHours);
const estEnergyOffset = estProposal.estEnergyOffset = (estAnnualProduction / estAnnualConsumption);
// Est Cash
const estCashSystemPrice = estProposal.estCashSystemPrice = (estReccomendedSystemSize * 1000 * system.ppW);
const estCashITC = estProposal.estCashITC = (estCashSystemPrice * ITC);
const estCashNetPrice = estProposal.estCashNetPrice = (estCashSystemPrice - estCashITC);
// Est Financed
const estFinancedSystemPrice = estProposal.estFinancedSystemPrice = (estCashSystemPrice / cheatNumber);
const estFinancedITC = estProposal.estFinancedITC = (estFinancedSystemPrice * ITC);
const estfinancedNetPrice = estProposal.estfinancedNetPrice = (estFinancedSystemPrice - estFinancedITC);
//-------------------------- Energy Storage --------------------------------------------//


console.log(system)
console.log(customer)
console.log(estProposal)
console.log(proposal)

