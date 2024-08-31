// const state = {
// earning:0,
// expense:0,
// net:0,
// transaction:[



// ]


// }


// let isUpdate = false;
// let tid;


// const renderTransaction = () => {
// const transactionsS = document.querySelector(".transactions");
// const btnEarnEl = document.getElementById("btnEarn");
// const btnExpEl = document.getElementById("btnExp");
// const netEl = document.getElementById("net");


// let earning =0;
// let expense =0;
// let net =0;


// const transaction = state.transaction;

// transactionsS.innerHTML =""

// transaction.forEach((trans) => {
//     const {id, text,amount,type} = trans;
//     const isCredit =type === "credit"? true:false;
//     const sign = isCredit? "+":"-";

//     const transactionChild = 
// `<div class="transaction" id ="${id}">

// <div class="content" onclick ="showtransaction(${id})">

// <div class="left">
// <p>${text}</p>
// <p>${sign} $${amount}</p>
// </div>    

// <div class="status ${isCredit? "credit":"debit"}">
// ${isCredit?"C":"D"}
// </div>

//     </div>

//         <div class="lower">
//         <div class="imgPen"><img src="pen.svg" alt="" onclick = "ReWriteTrans(${id})"></div>
//         <div class="imgDel"><img src="trash.svg" alt=""  onclick = "DelTrans(${id})"></div>


// </div>   



// </div>`


// earning += isCredit?amount:0;
// expense += !isCredit?amount:0;
// net = earning-expense;



// transactionsS.insertAdjacentHTML("afterbegin",transactionChild);
// });



// btnEarnEl.innerHTML= `$${earning}`;
// btnExpEl.innerHTML= `$${expense}`;
// netEl.innerHTML = `$${net}`;


// } 




// const formIdEl = document.getElementById("formId");

//  const getDataAndCreate = (event) => {
// const isEarn = event.submitter.id === "btnEarn"? true:false;


// event.preventDefault();

// const formData = new FormData(formIdEl);

// let tData = {};

// formData.forEach((value,key) => {
// tData[key] = value;
// });

// const {text,amount} = tData

// const transactionStored = {
//     id: isUpdate? tid:Math.floor(Math.random() * 1000),
//     text:text,
//     amount: +amount,
//     type:isEarn? "credit":"debit",
//     }

//     if(isUpdate){
//         const Gdata = state.transaction.findIndex((d)=>d.id ===tid);
//         state.transaction[Gdata] = transactionStored;
//         isUpdate =false;
//         tid = null;
//     }
//     else{
//         state.transaction.push(transactionStored);
//     }


// renderTransaction();

// console.log({state})
// }


// const showtransaction = (id) => {

//     const targidId = document.getElementById(id);
//     const lowerEl = targidId.querySelector(".lower");

//     lowerEl.classList.toggle("show")

// };

// const DelTrans = (id) => {

// const filterData = state.transaction.filter((t) => t.id !== id);
// state.transaction = filterData
// renderTransaction();

//  }

// const ReWriteTrans = (id) => {
//     const FindTran = state.transaction.find((f) => f.id === id);
//     const {text,amount} = FindTran;

//     const textInput = document.getElementById("text");
//     const amountInput = document.getElementById("amount");

//     textInput.innerHTML=text;
//     amountInput.innerHTML=amount;

//     isUpdate = true;
//     tid=id;
// }


// renderTransaction();
// formIdEl.addEventListener("submit",getDataAndCreate)

const state = {
    earning: 0,
    expense: 0,
    net: 0,
    Transaction: [
  
    ],
};


let isUpDate = false;
let tid;

const transaction_containerEL = document.querySelector(".transactions");

const ExporterData = () => {
    let netEl = document.getElementById("net");
    let earnEl = document.getElementById("earn");
    let expenEl = document.getElementById("expen");


    const Transaction = state.Transaction;


    let earning = 0;
    let expense = 0;
    let net = 0;


    transaction_containerEL.innerHTML = "";
    Transaction.forEach((transaction) => {

        const { id, text, amount, type } = transaction;

        const isCredit = type === "credit" ? true : false;
        const sign = isCredit ? "+" : "-";

        const transactionImport = `<div class="transaction" id ="${id}">
   
   <div class="content" onclick ="showIcon(${id})">
    
   <div class="left">
   <p>${text}</p>
   <p>${sign} $${amount}</p>
   </div>    
    
   <div class="status ${isCredit ? "credit" : "debit"}">
   ${isCredit ? "C" : "D"}
   </div>
    
       </div>


       <div class="lower">
                <div class="imgPen"><img src="pen.svg" alt="" onclick ="handleWrite(${id})"></div>
                <div class="imgDel"><img src="trash.svg" alt=""  onclick ="handleDelete(${id})"></div>
       
             
        </div>   
       


       <div>
    `;



        earning += isCredit ? amount : 0;
        expense += !isCredit ? amount : 0;
        net = earning - expense;



        transaction_containerEL.insertAdjacentHTML("afterbegin", transactionImport)



    })

    earnEl.innerHTML = `$ ${earning}`;
    expenEl.innerHTML = `$ ${expense}`;
    netEl.innerHTML = `$ ${net}`;

}










const formEl = document.getElementById("formId");

const ImporterData = (event) => {



    const IsbtnEarn = event.submitter.id === "btnEarn" ? true : false;
    console.log(IsbtnEarn)

    event.preventDefault();

    const formData = new FormData(formEl);
    let tData = {};

    formData.forEach((value, key) => {
        tData[key] = value;
    })



    const { text, amount } = tData;
    const transaction = {
        id:isUpDate?tid:Math.floor(Math.random() * 1000),
        text: text,
        amount: +amount,
        type: IsbtnEarn ? "credit" : "debit"

    }



 if(isUpDate){
    const tIndex = state.Transaction.findIndex((t)=> t.id ===tid);
    state.Transaction[tIndex] = transaction;
    isUpDate =false;
    tid = null;
 }else{
    state.Transaction.push(transaction);
 }



    ExporterData();





}



const showIcon = (id) => {

    const itemId = document.getElementById(id);
    const item = itemId.querySelector(".lower");

    item.classList.toggle("show");

}


const handleDelete = (id) => {

    const filterHandler = state.Transaction.filter((t)=> t.id !== id);

    state.Transaction=filterHandler;
    ExporterData();
}



const handleWrite = (id) => {
    const findhandler = state.Transaction.find((t)=> t.id === id);

    const {text,amount} = findhandler;

    const textEl = document.getElementById("text");
    const amountEl = document.getElementById("amount");

    textEl.value = text;
    amountEl.value = amount;

    isUpDate = true;
    tid = id;
}


ExporterData();

formEl.addEventListener("submit", ImporterData);

