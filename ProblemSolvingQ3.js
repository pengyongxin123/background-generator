function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
function toHex(n) {
	n = parseInt(n,10);
	if (isNaN(n)) return "00";n = Math.max(0,Math.min(n,255));
	return "0123456789ABCDEF".charAt((n-n%16)/16)
	+ "0123456789ABCDEF".charAt(n%16);
}

function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
const hexToRGB =(h) =>{
	R = hexToR(h);
	G = hexToG(h);
	B = hexToB(h);
	return `(${R},${G},${B})`
}

const hexRGB = () =>{
	let h = prompt("What do you wanna convert?");
	let h1 = h.includes(",");
	let h2 = h.includes("#");
	if (h1 === true){
		R = Number(h.substring(0,3));
		G = Number(h.substring(4,7));
		B = Number(h.substring(8,11));
		alert (`#${rgbToHex(R,G,B)}`);
	}
	if (h2 === true || h.length === 6){
		r = hexToRGB(h);
		if (isNaN(r.substring(1,4)) === true){
			alert("Error!! No RGB matched or HEX is wrong!");
		}else {
			alert(r);
		}
	}
} 

hexRGB();