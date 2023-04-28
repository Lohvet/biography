function Get(){
    var fullname = document.getElementById('fullname').value;
    var gender = document.getElementById('gender').value;
    var occupation = document.getElementById('occupation').value;
    var age = document.getElementById('age').value;
    var telnumber = document.getElementById('telnumber').value;
    var country = document.getElementById('country').value;
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var email = document.getElementById('email').value;
    var sport = document.getElementById('sport').value;

    if(fullname == ''){
        alert ("Kindly enter your fullname");
        return false;
    }
    if(gender == ''){
        alert ("Kindly select your gender");
        return false;
    }
    if(occupation == ''){
        alert ("Kindly enter your occupation");
        return false;
    }
    if(age == ''){
        alert ("Kindly input your age");
        return false;
    }
    if(telnumber == ''){
        alert ("Enter your phone number");
        return false;
    }
    if(country == ''){
        alert ("Kindly enter your country");
        return false;
    }
    if(height == ''){
        alert ("Kindly enter your height");
        return false;
    }
    if(weight == ''){
        alert ("Kindly enter your weight");
        return false;
    }
    if(email == ''){
        alert ("Kindly enter your email");
        return false;
    }
    if(sport == ''){
        alert ("Kindly enter your favorite sport");
        return false;
    }

    var bio = 'My name is '+fullname+'. <br> I am '+height+' cm tall, weighing '+weight+' kg. <br> A '+gender+' of '+age+' years old who loves '+sport+'. <br> I live in '+country+' and Im a '+occupation+'. <br> I can be contacted through my email: '+email+' and tel: '+telnumber+'. <br> Thank you.'
    document.getElementById('bio').innerHTML = bio;
    document.getElementById('bio').style.display = "block";
} 