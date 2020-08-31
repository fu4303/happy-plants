const getLogoTag = (background: string): string =>
  `background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='34px' height='30px' viewBox='0 0 34 30' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 63.1 (92452) - https://sketch.com --%3E%3Ctitle%3ELogo%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Logo/Logo/White' transform='translate(1.000000, 1.000000)' stroke='%23FFFFFF'%3E%3Cg id='Logo'%3E%3Cpath d='M20.4662834,4.75086859 C23.5515568,2.66431524 26.8611225,1.43197933 29.0135474,2.67468245 C33.3183973,5.1600887 31.363742,16.6040261 28.8532306,20.9523593 C26.4691958,25.0816288 21.3673655,26.651373 17.1729107,24.6706792 C20.9738835,23.6063845 23.7635474,20.0870039 23.7635474,15.9090909 C23.7635474,13.0630956 22.4690492,8.33213468 20.4423186,4.76742693 Z' id='Combined-Shape' stroke-width='1.5' fill='%23FFFFFF'%3E%3C/path%3E%3Cpath d='M2.01354743,10.2727587 C3.22978594,9.57056303 4.90827417,9.86228161 6.64415658,10.6768902 C6.07962078,12.6362489 5.76354743,14.5027928 5.76354743,15.9090909 C5.76354743,20.5250687 9.16888772,24.3371764 13.5805679,24.9221814 C13.0338311,25.6318196 12.3401481,26.2500032 11.5135474,26.7272413 C8.16533084,28.6603351 3.90481279,27.5485264 1.99682415,24.2437931 C0.0888355144,20.9390598 -1.33466916,12.2058524 2.01354743,10.2727587 Z' id='Combined-Shape' stroke-width='2' fill='%23FFFFFF'%3E%3C/path%3E%3Cpath d='M14.7635474,25 C19.7343599,25 23.7635474,20.9301136 23.7635474,15.9090909 C23.7635474,10.8880682 19.7343599,0 14.7635474,0 C9.79273493,0 5.76354743,10.8880682 5.76354743,15.9090909 C5.76354743,20.9301136 9.79273493,25 14.7635474,25' id='Fill-3-Copy-2' stroke-width='1.5'%3E%3C/path%3E%3Cline x1='18.7635474' y1='16' x2='14.7799503' y2='20.9022217' id='Path-2' stroke-width='1.5' fill='%23FFFFFF' stroke-linecap='round'%3E%3C/line%3E%3Cline x1='14.7717489' y1='15.9837036' x2='10.7881517' y2='20.8859253' id='Path-2' stroke-width='1.5' fill='%23FFFFFF' stroke-linecap='round' transform='translate(12.755346, 18.451111) scale(-1, 1) translate(-12.755346, -18.451111) '%3E%3C/line%3E%3Cline x1='14.7163892' y1='10.9959259' x2='11.7696985' y2='14.873703' id='Path-2' stroke-width='1.5' fill='%23FFFFFF' stroke-linecap='round' transform='translate(13.236893, 12.938889) scale(-1, 1) translate(-13.236893, -12.938889) '%3E%3C/line%3E%3Cline x1='17.7163892' y1='10.9959259' x2='14.7696985' y2='14.873703' id='Path-2' stroke-width='1.5' fill='%23FFFFFF' stroke-linecap='round'%3E%3C/line%3E%3Cline x1='14.7635474' y1='5' x2='14.7635474' y2='25' id='Path-2' stroke-width='1.5' fill='%23FFFFFF' stroke-linecap='round'%3E%3C/line%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); background-color: ${background}; background-size: 13px; background-position: 4px 3px; background-repeat: no-repeat; padding: 2px 5px; padding-left: 15px; border-radius: 2px; color: white;`

export function errorHandler(error: Error, vm: Vue, info: string): void {
  const css = [
    getLogoTag('#E54B4B'),
    'background:transparent',
    'font-weight:bold',
    'background:transparent',
  ]
  console.log(`%c Global Error Handler%c Error in %c${info}%c: ${error}`, ...css)
}

export default function logger(message: string, error?: boolean): void {
  const background = error ? '#E54B4B' : '#0A3E2B'
  const css = [getLogoTag(background), 'background:transparent;']
  // eslint-disable-next-line
  console.log(`%c HappyPlants%c ${message}`, ...css)
}
