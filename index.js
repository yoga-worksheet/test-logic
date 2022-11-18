// Soal nomor 1
// Membuat fungsi faktorial

const factorial = (number) => {
	let result = 1;
	let process = "";
	for (let i = number; number > 0; number--) {
		result *= number;
		process +=
			number !== 1 ? `${number.toString()}*` : `${number.toString()}`;
	}
	return `${result} (prosesnya : ${process})`;
};

console.log("Soal 1 (Faktorial)\n===============================");
console.log(factorial(4)); // 24 (prosesnya : 4*3*2*1)
console.log(factorial(8)); // 40320 (prosesnya : 8*7*6*5*4*3*2*1)
console.log("===============================\n");

// Soal nomor 2
// Reverse string

const reverseString = (word) => {
	let newString = "";
	for (let i = word.length - 1; i >= 0; i--) {
		newString += word[i];
	}
	return newString;
};

console.log("Soal 2 (Reverse String)\n===============================");
console.log(`Reverse String "abcde" : "${reverseString("abcde")}"`); // "edcba"
console.log("===============================\n");

// Soal nomor 3
// Menampilkan digit angka

const printDigitVal = (word) => {
	let number = "";
	for (let i = 0; i < word.length; i++) {
		if (parseInt(word[i])) number += word[i];
	}
	console.log(number);
	for (let i = 0; i < number.length; i++) {
		let print = number[i];
		for (let j = i + 1; j < number.length; j++) {
			print += "0";
		}
		console.log(print);
	}
};

console.log("Soal 3 (Print Digit Value)\n===============================");
printDigitVal("9.86-A5.321");
// 9865321
// 9000000
// 800000
// 60000
// 5000
// 300
// 20
// 1
console.log("===============================\n");

// Soal nomor 4
// Swap integer tanpa variabel tambahan

let a = 3;
let b = 7;
[a, b] = [b, a];

console.log(
	"Soal 4 (Swap integer tanpa temp)\n==============================="
);
console.log(a, b); // 7 3
console.log("===============================\n");

// Soal nomor 5
// Menampilkan nominal huruf

const printWordVal = (number) => {
	const numList = [
		"Satu",
		"Dua",
		"Tiga",
		"Empat",
		"Lima",
		"Enam",
		"Tujuh",
		"Delapan",
		"Sembilan",
	];
	if (number > 100 || number === 0)
		return "Silahkan masukkan bilangan 1 - 100";
	if (number === 10) return "Sepuluh";
	if (number === 11) return "Sebelas";
	if (number === 100) return "Seratus";

	const stringNumber = number.toString();
	if (stringNumber.length === 1) return `${numList[number - 1]}`;

	if (number < 20) {
		return `${numList[parseInt(stringNumber[1]) - 1]} Belas`;
	}

	if (number % 10 === 0)
		return `${numList[parseInt(stringNumber[0]) - 1]} Puluh`;

	return `${numList[parseInt(stringNumber[0]) - 1]} Puluh ${
		numList[parseInt(stringNumber[1]) - 1]
	}`;
};

console.log(
	"Soal 5 (Menampilkan nominal huruf)\n==============================="
);
console.log(4, ":", printWordVal(4)); // Lima Puluh Lima
console.log(20, ":", printWordVal(20)); // Lima Puluh Lima
console.log(39, ":", printWordVal(39)); // Lima Puluh Lima
console.log(104, ":", printWordVal(104)); // Lima Puluh Lima
console.log("===============================\n");

// Soal nomor 6 dan 7
// Filter Array Element

const filterArray = (arr, low, high) => {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= low && arr[i] <= high) {
			newArr = [...newArr, arr[i]];
		}
	}
	return newArr;
};

const filtered = filterArray([1, 4, 7, 9, 12], 2, 15);

console.log("Soal 6 (Filter Element)\n===============================");
console.log(filtered); // [ 4, 7, 9, 12 ]
console.log("===============================\n");

console.log(
	"Soal 7 (Jumlah elemen terfilter)\n==============================="
);
console.log(filtered.length); // 4
console.log("===============================\n");

// Soal nomor 8
// Eduwork

const eduwork = (number) => {
	for (let i = 1; i <= number; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("Eduwork");
			continue;
		}
		if (i % 3 === 0) {
			console.log("Edu");
			continue;
		}
		if (i % 5 === 0) {
			console.log("Work");
			continue;
		}
		console.log(i);
	}
};
console.log("Soal 8 (Eduwork)\n===============================");
eduwork(15);
// 1
// 2
// Edu
// 4
// Work
// Edu
// 7
// 8
// Edu
// Work
// 11
// Edu
// 13
// 14
// Eduwork
console.log("===============================\n");

// Soal nomor 9
// Bilangan terkecil dan terbesar

const getLowestHighest = (arr) => {
	let lowest = arr[0];
	let highest = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < lowest) {
			lowest = arr[i];
		}
		if (arr[i] > highest) {
			highest = arr[i];
		}
	}
	return {
		low: lowest,
		high: highest,
	};
};

console.log(
	"Soal 9 (Bilangan terkecil dan terbesar)\n==============================="
);
console.log(getLowestHighest([4, 2, 6, 88, 3, 11])); // { low: 2, high: 88 }
console.log("===============================\n");

// Soal nomor 10
// Cek tahun kabisat

const getLeapYear = (year) => {
	if (year % 4 === 0) return `${year} adalah tahun kabisat`;
	return `${year} bukan tahun kabisat`;
};

console.log("Soal 10 (Cek Kabisat)\n===============================");
console.log(getLeapYear(2021));
console.log(getLeapYear(2024));
console.log("===============================\n");
