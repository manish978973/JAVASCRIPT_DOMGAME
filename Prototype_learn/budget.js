//creating different modules


//budget controller

var budgetcontroller = (function(){
//functional constructor
        var Expense  = function(id,desciption,value){

          this.id = id;
          this.desciption=desciption;
          this.value=value;
        };

        var Income  = function(id,desciption,value){

          this.id = id;
          this.desciption=desciption;
          this.value=value;
        };

        var Buddi = function (type){
          var summi = 0;
          data.allitems[type].forEach(function(val){
            summi =  summi + val.value;
          });

         data.totals[type] = summi;



        };


        var data = {

          allitems : {
            add : [],
            sub : []
          },

          totals : {
            add : 0,
            sub : 0
          },

          budget : 0,
          percentage : -1

        };

        return {
          addItem : function(type, des, val){
//create new ID
            var ID ;
            if (data.allitems[type].length > 0){
            ID = data.allitems[type][data.allitems[type].length - 1 ].id +  1;
          }
          else{
            ID = 0;
          }
//create new item based on add or sub
            if (type==='add'){
              var newone = new Income(ID,des,val);
            }
            else if (type==='sub'){
              var newone = new Expense(ID,des,val);
            }

            data.allitems[type].push(newone);
            console.log(newone);
            return newone;






          },

          calculatebudget : function(){

            Buddi('add');
            Buddi('sub');

            data.budget = data.totals.add - data.totals.sub;

            if (data.totals.add > 0){
            data.percentage =  Math.round((data.totals.sub / data.totals.add) * 100 );
          }

          else{
            data.percentage = -1;
          }

          },


          getBudget : function(){


            return {

              budget: data.budget,
              totalinc : data.totals.add,
              totalExp : data.totals.sub,
              percentage : data.percentage

            };
          }
        };


  } )();




//ui controller

var UIcontroller = (function(){
//central place for all css classes
  var CentralCSS = {
    dropdowntype : '.add_dropdown',
    description : '.add_description',
    value : '.add_value',
    btn_value : '.add_btn',
    inc_list : '.income_list',
    exp_list : '.expense_list',
    buddyvalue : '.BudgetValue',
    buddyincomevalue : '.budget_income_value',
    buddyexpensevalue : '.budget_expense_value',
    budgetpercentage : '.budget_expense_percentage'

  };






  return{
    getInput: function(){
//returning as object rather than returning every variable
      return {
        type : document.querySelector(CentralCSS.dropdowntype).value,
        description : document.querySelector(CentralCSS.description).value,
        value : parseFloat(document.querySelector(CentralCSS.value).value)
      };


  },

  displayObject : function(){


    return function(obj){
      document.querySelector(CentralCSS.buddyvalue).textContent = obj.budget;
      document.querySelector(CentralCSS.buddyincomevalue).textContent = obj.totalinc;
      document.querySelector(CentralCSS.buddyexpensevalue).textContent = obj.totalExp;


      if (obj.percentage > 0){
          document.querySelector(CentralCSS.budgetpercentage).textContent = obj.percentage + '%';
      }

      else{
        document.querySelector(CentralCSS.budgetpercentage).textContent = '---';
      }
    };





  },

  clearfields : function(){

    //var fields =   document.querySelectorAll(CentralCSS.desciption + ', ' + CentralCSS.value);

   document.querySelector(CentralCSS.description).value = '';
   document.querySelector(CentralCSS.value).value = '';
   document.querySelector(CentralCSS.description).focus();



  },

  addListItem : function(obj,type){
   var html, newhtml, uk;
    if (type==='add'){
      uk = CentralCSS.inc_list;
      html =   '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';


                  }

else if (type==='sub') {



    uk = CentralCSS.exp_list;
    html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';




}


 newhtml = html.replace('%id%',obj.id);
 newhtml = newhtml.replace('%description%',obj.desciption);
 newhtml = newhtml.replace('%value%',obj.value);

 document.querySelector(uk).insertAdjacentHTML('beforeend',newhtml);






  },

  getDOMstrings: function(){

    return CentralCSS;


  }


  }


})();



//global app UIcontroller

var controller = (function(budgtctrl,uictrl){

  var receiveddomvalue = uictrl.getDOMstrings();

  var setupeventlistener = function(){

    document.querySelector(receiveddomvalue.btn_value).addEventListener('click',ctrlAddItem);

  //anywhere on the doc..not related to specific element
    document.addEventListener('keypress',function(event){
      //console.log(event);
      if(event.keyCode === 13 || event.which === 13){
        //console.log("Enter was pressed")
        ctrlAddItem();

      }
    });

 };


 var updateBudget = function(){

     budgetcontroller.calculatebudget();

     var budget = budgetcontroller.getBudget();

     console.log(budget);
     var kushu = uictrl.displayObject();
     kushu(budget);


 };


  var ctrlAddItem = function(){
    //this function will be used in both the click events. It takes the inout data , adds to budget controller, then UI controller, calculate the budget and display the budget.

  var inputreceived = uictrl.getInput();
  //console.log(inputreceived.description);

if (inputreceived !== "" && !isNaN(inputreceived.value) &&  inputreceived.value > 0) {

  var budgetcontroladd = budgtctrl.addItem(inputreceived.type,inputreceived.description,inputreceived.value);

  var uiadddata = uictrl.addListItem(budgetcontroladd,inputreceived.type );
  var field0 = uictrl.clearfields();
  uictrl.clearfields();

  //calculate and update budget
  updateBudget();

  //console.log(inputreceived.desciption);

  //field0.b = "";
}

};

 return {
   init : function(){
     console.log("Application started");
     
      uictrl.displayObject()({
        budget: 0,
        totalinc : 0,
        totalExp : 0,
        percentage : 0
      });
     setupeventlistener();
   }
 };



})(budgetcontroller,UIcontroller);


controller.init();
