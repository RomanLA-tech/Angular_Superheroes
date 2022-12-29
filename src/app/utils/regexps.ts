const emailRegexp: RegExp = new RegExp('^(\\w*\\.?){1,3}[^\.]*@\\w{1,5}(.com|.co|.org|.us|.net)$');
const passwordRegexp: RegExp = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$%.&!])[A-Za-z\\d$%.&!]{8,}$');
const usernameRegexp: RegExp = new RegExp('^([A-Z][a-z]*) ([A-Z][a-z]*)$|^([a-z]*)([A-Z]{})([a-z]*)$|^([a-z]+)-([a-z]+)$');

export function matchEmail(email: string): RegExpMatchArray | null {
	return email.match(emailRegexp);
}

export function matchPassword(password: string): RegExpMatchArray | null {
	return password.match(passwordRegexp);
}

export function matchUsername(username: string): RegExpMatchArray | null {
	return username.match(usernameRegexp);
}
