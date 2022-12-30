const emailRegexp: RegExp = new RegExp('^(\\w*\\.?){1,3}[^\.]*@\\w{1,5}(.com|.co|.org|.us|.net)$');
const passwordRegexp: RegExp = /^(?=.*[A-Z])(?=.*\d)(?=.*[$%&!./-])[A-Za-z\d$%&!./-]{5,}$/;
const usernameRegexp: RegExp = /^(?:[a-z]+[- ][a-z]+)|(?:[a-z]+[A-Z][a-z]+)$/;

export function matchEmail(email: Readonly<string>): RegExpMatchArray | null {
  return email.match(emailRegexp);
}

export function matchPassword(password: Readonly<string>): RegExpMatchArray | null {
  return password.match(passwordRegexp);
}

export function matchUsername(username: Readonly<string>): RegExpMatchArray | null {
  return username.match(usernameRegexp);
}
