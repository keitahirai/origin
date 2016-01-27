
/* 特殊文字
   ========================================================================== */
/*
	\n 改行
	\t タブ
	\ クォーテーションの挿入
*/



/* 算術演算子
   ========================================================================== */
/*
	+ - * / %
*/



/* 代入演算子
   ========================================================================== */
/*
	+=
	-=
*/



/* 単項演算子
   ========================================================================== */
/*
	++ --
*/



/* 三項演算子
   ========================================================================== */
/*
	var a, b, c;
	if (条件) {
		a = b;
	}
	else {
		a = c;
	}
	a = (条件) ? b : c;

	var a, b, c;
	a = (b > c) ? b : c;
*/



/* 比較演算子
   ========================================================================== */
/*
	> <　>= <=　
	=== 等しい
	!== 等しくない
*/



/* 論理演算子
   ========================================================================== */
/*
	&& and
	|| or
	! not
*/



/* 真偽値
   ========================================================================== */
/*
	文字列: 空文字 以外ならtrue
	数値: 0 or NaN 以外ならtrue
	true / false
	object: null 以外ならtrue
	undefined: null -> false
*/



/* 条件分岐
   ========================================================================== */
/*
var score = 90;
	if (score >= 80) {
		console.log('Good!');
	}
	else if(score >= 60) {
		console.log('OK!');
	}
	else {
		console.log('NG!');
	};
*/



/* switch
   ========================================================================== */
/*
var signal = "blue";
switch(signal) {
	case "red":
		console.log('stop!');
		break;
	case "blue":
		console.log('go!');
		break;
	case "yellow":
		console.log('slow down!');
		break;
	default:
		console.log('no signal');
		break;
}
*/



/* while ループ
   ========================================================================== */
/*
var i = 0;
while (i < 10) {
	document.write(i);
	i++;
}

var i = 100;
do {
	document.write(i);
	i++;
} while(i < 10)
*/



/* for ループ
   ========================================================================== */
/*
for (var i = 0; i < 10; i++) {
	if (i === 5) {
		// break;
		continue;
	};
	document.write(i);
};
*/



/* alert ダイアログボックス, confirm 確認ダイアログボックス, prompt 入力ダイアログボックス
   ========================================================================== */
/*
alert("ログアウトしました。");

if (confirm("削除してよろしいですか？")) {
	// 削除処理
};

var name = prompt("名前を入力してください。", "名無し");
document.write(name);
*/



/* 関数: 複数の処理を実行する
   ========================================================================== */
/*
function Hello(name) {
	document.write("Hello, " + name);
}
Hello("keita");
Hello("daichi");
*/



/* ローカル変数: 他の変数に影響を与えないため、ローカル限定で定義する
   ========================================================================== */
/*
function hello(name) {
	var message = "Hello, " + name;
	return message;
}
var greet = hello("Keita");
document.write(greet);

var hello = function(name) {
	var message = "Hello, " + name;
	return message;
};
var greet = hello("Keita");
document.write(greet);
*/



/* 即時関数
   ========================================================================== */
/*
(function(name) {
	document.write("Hello, " + name + "!");
})("Keita");

(function() {
	var x = 10,
		y = 20;
	document.write(x * y);
})();
*/



/* タイマー処理 setInterval, setTimeout
   ========================================================================== */
/*
var i = 10;
function show() {
	document.write(i++);
}
setInterval(function() {
	show();
}, 1000);

var i = 0;
function show() {
	document.write(i++);
	setTimeout(function() {
		show();
	}, 1000);
}
show(); // setIntervalと等しい

var i = 0;
function show() {
	document.write(i++);
	var Time = setTimeout(function() {
		show();
	}, 1000);
	if (i > 3) {
		clearTimeout(Time);
	};
}
show();
*/



/* 配列: グループ化されたデータ
   ========================================================================== */
/*
var point = [100, 200, 300];
document.write(point[0]); // 添字 0, 1, 2, ...
point[2] = 800;
document.write(point);

var point = [
	[624, 333, 994], // グループ0
	[522, 117, 847] // グループ1
];
document.write(point[0][2]);
*/



/* オブジェクト: 名前と値のペアがグループ化されたもの
   ========================================================================== */
/*
var user = {
	email: "keita@keitahirai.net", // プロパティ
	score: 100,
	greet: function(name) { // メソッド オブジェクトのプロパティが関数の場合に呼ぶ
		document.write("Hello, " + name + " from " + this.email);
	}
};
document.write(user.email); // . でプロパティにアクセス
user.score = 200;
document.write(user.score);
user.greet("Keita");
*/



/* 組み込みオブジェクト String, Array, Math, Date etc...
   ========================================================================== */
/* String
var text = new String("keita hirai"); // 文字列オブジェクト
var text = "keita hirai"; // 文字列リテラル
document.write(text.length);
document.write(text.replace("k", 'K'));
document.write(text.substring(2, 7));
*/


/* Array
var keita = new Array(100, 400, 200);
document.write(keita.length);

// unshift -> array <- push
// shift <- array -> pop
keita.push(800); // 末尾に800を追加
document.write(keita);

keita.splice(1, 2, 500, 1000) // 添字からいくつ削除して、値を挿入するか
document.write(keita);
*/


/* Math 変数なしで書ける
document.write(Math.PI + "<br>") // 円周率
document.write(Math.ceil(2.659) + "<br>"); // 小数点切り上げ
document.write(Math.floor(2.659) + "<br>"); // 小数点切り下げ
document.write(Math.round(2.659) + "<br>"); // 四捨五入
*/


/* Date
var day = new Date();
document.write(day.getFullYear());
document.write(day.getTime()); // 1970/1/1 からの経過ミリ秒
*/



/* Document Object Model (DOM)
   ========================================================================== */
/*
document.write(window.innerWidth);
// window.location.href = "//yahoo.co.jp";
var e = document.getElementById("block-lead");
e.textContent = "Hello!";
e.style.color = "red";
e.className = "inner-lead";

var greet = document.createElement("p"),
	text = document.createTextNode("Hello, world!");
document.body.appendChild(greet).appendChild(text);
*/



/* イベント
   ========================================================================== */
document.getElementById("block").addEventListener("click", function() {
	var greet = document.createElement("p"),
		text = document.createTextNode("Hello, world!");
	document.body.appendChild(greet).appendChild(text);
});

