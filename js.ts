import { allowedNodeEnvironmentFlags } from "process"

export const Slides = ()=>{
    const submit=  document.querySelector('.slide')
    submit.addEventListener('click',()=>{
      submit.classList.toggle('active') 
    })
}

// export const openFile = (event)=>{ 
//   var input = event.target;
//   var readers = new FileReader();
//   readers.onload = function(){
//     var dataURL = readers.result;
//     var output = document.getElementById('output')  ;
//     output.src= dataURL;
//   };
//   if(input.files && input.files[0]){
//     readers.readAsDataURL(event.target.files['0']);
//   }
//   else{
//     console.log('fail');
//   }
// }

