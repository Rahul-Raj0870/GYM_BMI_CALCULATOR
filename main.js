function selectmale(){
    document.getElementById('image').src =  './images/man.jpg';
}
function selectfemale(){
    document.getElementById('image').src = './images/women.avif';
}
function CalculateBMI (){
    const PersonWeight = document.getElementById('weight').value
   
    const PersonHeight = document.getElementById('height').value/100
    
    if(PersonWeight=="" && PersonHeight==""){
        alert("Please Enter the Weight and Height")
    }

   else{
    if(PersonWeight==""){
        alert("Please Enter the weight")
    }
    else if(PersonHeight==""){
        alert("Please Enter the Height")
    }
    else{
        console.log(`Weight: ${PersonWeight}`);
        console.log(`Height: ${PersonHeight}`);


        let result = PersonWeight/(PersonHeight**2)
        console.log(result);
        
        if(result<18.5){
            console.log("underweight");
            Package.innerHTML=`
            <h3 class="m-4 ">BMI Result = <span class="text-warning">Under Weight</span></h3>
            <hr>
            <h3 class="text-center ">GYM Package</h3>
            <h5 class="ms-5 my-4">Height = <span  class ="text-warning">${PersonHeight}</span></h5>
            <h5 class="ms-5">Weight = <span class ="text-warning">${PersonWeight}</span></h5>
            <h5 class="mx-5 my-4">Goal:Gain weight and muscle mass</h5>
            <ul class="ms-5">
                <li class="pe-5" >Cardio: 1-2 times a week (low-intensity)</li>
                <li class="pt-2 pe-5">Resistance Training: 2-3 times a week</li>
                <li class="pt-2 pe-5">Nutrition: Increase caloric intake by 250-500 calories per day</li>
            </ul>
            <button onclick="ReturnOk()" style="margin-left: 25%;" class="btn btn-light w-50 mt-3">Ok</button>
            `
            
            
        }else if(result >= 18.5 && result <= 24.9){
            console.log("normalweight");
            Package.innerHTML=`
            <h3 class="m-4">BMI Result = <span class="text-warning">Normal Weight</span></h3>
            <hr>
            <h3 class="text-center ">GYM Package</h3>
            <h5 class="ms-5 my-4">Height = <span class ="text-warning">${PersonHeight}</span></h5>
            <h5 class="ms-5">Weight = <span class ="text-warning">${PersonWeight}</span></h5>
            <h5 class="mx-5 my-4">Goal:Maintain weight and improve overall fitness</h5>
            <ul class="ms-5">
                <li class="pe-5" >Cardio: 2-3 times a week (moderate-intensity)</li>
                <li class="pt-2 pe-5">Resistance Training: 2-3 times a week</li>
                <li class="pt-2 pe-5">Nutrition: Balanced diet with a caloric intake that matches energy expenditure</li>
            </ul>
            <button onclick="ReturnOk()" style="margin-left: 25%;" class="btn btn-light w-50 mt-3">Ok</button>
            `
            
        }else if(result >= 25 && result <= 29.9){
            console.log("overweight");
            Package.innerHTML=`
            <h3 class="m-4 ">BMI Result = <span class="text-warning">Over Weight</span> </h3>
            <hr>
            <h3 class="text-center ">GYM Package</h3>
            <h5 class="ms-5 my-4">Height = <span class ="text-warning">${PersonHeight}</span></h5>
            <h5 class="ms-5">Weight = <span class ="text-warning">${PersonWeight}</span></h5>
            <h5 class="mx-5 my-4">Goal:Lose weight and improve overall fitness</h5>
            <ul class="ms-5">
                <li class="pe-5" >Cardio: 3-4 times a week (moderate- to high-intensity)</li>
                <li class="pt-2 pe-5">Resistance Training: 2-3 times a week</li>
                <li class="pt-2 pe-5">Nutrition: Reduce caloric intake by 500-750 calories per day</li>
            </ul>
            <button onclick="ReturnOk()" style="margin-left: 25%;" class="btn btn-light w-50 mt-3">Ok</button>
            `
            
        }else{
            //BMI >=30
            console.log("Obese");
            Package.innerHTML=`
            <h3 class="m-4 ">BMI Result = <span class="text-warning">Obese</span></h3>
            <hr>
            <h3 class="text-center ">GYM Package</h3>
            <h5 class="ms-5 my-4">Height = <span class ="text-light">${PersonHeight}</span></h5>
            <h5 class="ms-5">Weight = <span class ="text-light">${PersonWeight}</span></h5>
            <h5 class="mx-5 my-4">Goal:Gain weight and muscle mass</h5>
            <ul class="ms-5">
                <li class="pe-5" >Cardio: 4-5 times a week (high-intensity)</li>
                <li class="pt-2 pe-5">Resistance Training: 2-3 times a week</li>
                <li class="pt-2 pe-5">Nutrition: Reduce caloric intake by 750-1000 calories per day</li>
            </ul>
            <button onclick="ReturnOk()" style="margin-left: 25%;" class="btn btn-light w-50 mt-3">Ok</button>
            `
            

        }
        document.getElementById('Package').style.display = 'block';
        document.getElementById('BMI').style.display = 'none';
        
        
    }
    }
    
    
}

function ReturnOk(){
    document.getElementById('Package').style.display = 'none';
    document.getElementById('BMI').style.display = 'block';
}
