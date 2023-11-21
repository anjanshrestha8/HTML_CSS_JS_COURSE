//Literal Method
const company ={
    Name:"Big Company",
    NoEmp:50,
    PanNo:123,
    Department:{
        D_name:"Finance",
        D_id:123
    },
    deal(){
        console.log("deal done");
    }
}

company.deal();
console.log(company.PanNo)


// Factory Function Method

function newCompany(Name,PanNo,NoEmp){
    const CompanyOne={
        Name:Name,
        PanNo:PanNo,
        NoEmp:NoEmp,
    }
    return CompanyOne;

}
const companySmall= newCompany("Small Company",234,55);
const companyBig= newCompany("Big Company",234,55);

console.log(companySmall.Name);
console.log(companyBig.Name);


// Constructor Function Method

function Company(Name,NoEmp,PanNo){
    this.Name=Name,
    this.NoEmp=NoEmp,
    this.PanNo=PanNo
}

const abcCompany= new Company("ABC Company",234,55);
const defCompany= new Company("DEF Company",234,55);

console.log(abcCompany.Name);
console.log(defCompany.Name);


