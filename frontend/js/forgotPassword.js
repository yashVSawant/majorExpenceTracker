const enter = document.getElementById('enter');

enter.addEventListener('click',async(e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const errorMsg = document.getElementById('errorMsg');
    errorMsg.innerText='';
    if(email){
        try{ 
            const callForgotPassword = await axios.post('http://localhost:3000/password/forgotPassword',{email})
            console.log(callForgotPassword);
            window.location.href='../html/login.html'
        }catch(err){
            console.log(err)
        }
    }else{
        
        errorMsg.innerText = 'please enter email !'
    }
    
})