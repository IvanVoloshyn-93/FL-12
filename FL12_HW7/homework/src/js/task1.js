const usersDB = {
	'user@gmail.com' : 'UserPass',
	'admin@gmail.com' : 'AdminPass'
}

const info = {};
let minLengthEmail = 5;
let minLengthPass = 6;
let password, change, oldPass, newPass, confirmPass;
let email = prompt('Enter yours email:');

if(!!(email === null) || !!(email.trim().length === 0)) {
	alert('Canceled.');
} else if(email.length < minLengthEmail) {
	alert(`I don't know any emails having name length less than 5 symbols`);
} else if(usersDB.hasOwnProperty(email)){
	info.email = email;
}else{
	alert('I don’t know you');
}if(info.hasOwnProperty('email')){
	password = prompt('password');
	if( !!(password === null) || !!(password.trim().length === 0)){
		alert('Canceled. ')
	}else if(password === usersDB[email]){
		info.password = password;
	}else{
		alert('Wrong password');
	}
}if(info.hasOwnProperty('password')){
	change = confirm('Do you want to change your password?');
	if(!change){
		alert('You have failed the change.')
	}else{
		oldPass = prompt('Enter old password:');
		if(!!(oldPass === null) || !!(oldPass.trim().length === 0)){
			alert('Canceled. ')
		}else if(oldPass !== info.password){
			alert('Wrong password');
		}else{
			newPass = prompt('Enter a new password:');
			if(!!(newPass === null) || !!(newPass.trim().length === 0)) {
				alert('Canceled.');
			} else if(newPass.length < minLengthPass) {
				alert('It’s too short password. Sorry.');
			}else{
				confirmPass = prompt('Confirm a new password:');
				if(newPass === confirmPass){
					alert('You have successfully changed your password.')
				}else{
					alert('You wrote the wrong password.')
				}
			}
		}
	}
}