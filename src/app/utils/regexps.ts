export class Regexps {
	static emailRegexp = new RegExp('^(\\w*\\.?){1,3}[^\.]*@\\w{1,5}(.com|.co|.org|.us|.net)$');
	static passwordRegexp = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$%.&!])[A-Za-z\\d$%.&!]{8,}$');
	static userNameRegexp = new RegExp('^([A-Z][a-z]*) ([A-Z][a-z]*)$|^([a-z]*)([A-Z]{})([a-z]*)$|^([a-z]+)-([a-z]+)$');
	
	static matchEmail(email: string): RegExpMatchArray | null {
		return email.match(Regexps.emailRegexp);
	};
	
	static matchPassword(password: string): RegExpMatchArray | null {
		return password.match(Regexps.passwordRegexp);
	};
	
	static matchUsername(username: string): RegExpMatchArray | null {
		return username.match(Regexps.userNameRegexp);
	};
}