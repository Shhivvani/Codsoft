function signup()
{
    document.querySelector(".login").style.cssText="display:none;";
    
    document.querySelector(".signup-form-container").style.cssText="display:block;";

    document.querySelector(".button-1").style.cssText="display:block; margin-top:10px";
    
    document.querySelector(".button").style.cssText="display:none;";
}

function login()
{document.querySelector(".login").style.cssText="display:block;";
    
document.querySelector(".signup-form-container").style.cssText="display:none;";

document.querySelector(".button-1").style.cssText="display:none;";

document.querySelector(".button").style.cssText="display:block;";
}
