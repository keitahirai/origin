
/* おみくじ
   ========================================================================== */
/*
・トリガー -> クリック
・テキスト書き換え
・乱数

(function(){
	"use strict"; // 厳密なエラーチェック
	document.getElementById("block-btn").addEventListener("click", function() {
		// 0- n
		// Math.floor(Math.random() * (n + 1)) <- 公式
		// 0 - 3
		// Math.floor(Math.random() * 4)
		// Math.random は、0 - 0.9999.... -> 1未満 の乱数を生成するので、
		// 0 - 3.9999.... の間で乱数を生成する
		// var results = ["大吉", "中吉", "小吉", "凶"],
		// 		result = Math.floor(Math.random() * results.length)
		// 	;
		document.getElementById("block-result").innerHTML = results[result];
	})
	document.getElementById("block-btn").addEventListener("mousedown", function() {
		this.className = "pushed";
	});
	document.getElementById("block-btn").addEventListener("mouseup", function() {
		this.className = "";
	});
})();
 */


/* ストップウォッチ
   ========================================================================== */
/*
・トリガー -> クリック
・オブジェクト -> 日付/時刻
・START, STOP, RESET
・ボタンのアクティブ/非アクティブ
・テキスト書き換え
・一時停止からの再開は、数字の続きから

(function() {
	"use strict";
	var timerText = document.getElementById("timer"),
		startButton = document.getElementById("start"),
		stopButton = document.getElementById("stop"),
		resetButton = document.getElementById("reset"),
		startTime,
		timerId,
		continueTime = 0,
		isRunning = false;

	// ボタンの状態
	function buttonStatus(start, stop, reset) {
		startButton.className = start ? "" : "inactive";
		stopButton.className = stop ? "" : "inactive";
		resetButton.className = reset ? "" : "inactive";
	}

	// デフォルト
	buttonStatus(true, false, false);

	// スタート
	startButton.addEventListener("click", function() {
		if (isRunning) return;
			isRunning = true;
		startTime = Date.now(); // 1970/1/1 00:00:00 からの経過ミリ秒を使うのが一般的
		updateTimer();
		buttonStatus(false, true, false);
	});

	// 一時停止
	stopButton.addEventListener("click", function() {
		if (! isRunning) return;
			isRunning = false;
		continueTime += Date.now() - startTime;
		clearTimeout(timerId);
		buttonStatus(true, false, true);
	});

	// リセット
	resetButton.addEventListener("click", function() {
		if (isRunning) return;
		timerText.innerHTML = "0.00";
		continueTime = 0;
		buttonStatus(true, false, false);
	});


	function updateTimer() {
		timerId = setTimeout(function() {
			var t = Date.now() - startTime + continueTime;
			timerText.innerHTML = (t / 1000).toFixed(2); // 1000ミリ秒で割って秒単位にする
			updateTimer();
		}, 10);
	}
})();
 */


/* 5秒当てゲーム
   ========================================================================== */
/*
・トリガー -> クリック
・オブジェクト -> 日付/時刻
・START, STOP
・テキスト書き換え
・誤差を計算

(function() {
	"use strict";
	var result = document.getElementById("result"),
		btn = document.getElementById("btn"),
		isStarted = false,
		startTime,
		diff
	;

	btn.addEventListener("click", function(){
		if (! isStarted) {
			isStarted = true;
			this.innerHTML = "STOP";
			result.innerHTML = "数えています...";
			startTime = Date.now();
		}
		else {
			isStarted = false;
			this.innerHTML = "START";
			diff = (Date.now() - startTime) / 1000 - 5;
			if (diff >= -0.1 && diff <= 0.1) {
				result.innerHTML = "Perfect!";
			}
			else if (diff > 0) {
				result.innerHTML = diff.toFixed(2) + "秒遅かった!";
			}
			else {
				result.innerHTML =  Math.abs(diff).toFixed(2) + "秒早かった!";
			}
		}
	});
})();
*/


/* 割り勘電卓
   ========================================================================== */
/*
・トリガー -> クリック
・入力値がおかしい場合のエラー処理
・完全に割り切れた場合の処理
・割り切れなかった場合の処理

(function(){
	"use strict";
	var priceForm = document.getElementById("price"),
		numForm = document.getElementById("num"),
		btn = document.getElementById("btn"),
		result = document.getElementById("result"),
		x1, x2, y1, y2,
		unit = 100
	;

	priceForm.addEventListener("click", function() {
		this.select();
	})
	numForm.addEventListener("click", function() {
		this.select();
	})

	btn.addEventListener("click", function() {
		var price = priceForm.value;
		var num = numForm.value;
		if (price.match(/^[1-9][0-9]*$/) && num.match(/^[1-9][0-9]*$/)) {
			// result.innerHTML = "OK!";
			if (price % num === 0) {
				result.innerHTML = "一人 " + (price / num) + "円 です。";
			}
			else {
				// result.innerHTML = "something";
				x1 = Math.floor(price / num / unit) * unit; // 小数点切捨て
				y1 = price - (x1 * num);
				x2 = Math.ceil(price / num / unit) * unit; // 小数点切り上げ
				y2 = Math.abs(price - (x2 * num)); // 絶対値
				result.innerHTML =
				"一人" + x1 + "円 だと" + y1 + "円 足りません。<br>" +
				"一人" + x2 + "円 だと" + y2 + "円 余ります。<br>";
			}
		}
		else {
			result.innerHTML = "入力値に誤りがあります。";
		}
	})
})();
*/


/* 誕生日診断
   ========================================================================== */
/*
・トリガー -> クリック
・Date
・year, month, day
・テキスト出力

function getAg() {
	var // 入力値の取得
		birthday = document.getElementById("birthday").value.split("-") ,

		// 日付オブジェクトの作成
		d1 = new Date(birthday[0], birthday[1]-1, birthday[2]),
		d2 = new Date(),

		// 日数、年齢の計算
		diff = d2.getTime() - d1.getTime(),
		daysPast = Math.floor(diff / (1000 * 60 * 60 * 24)),
		age = Math.floor(daysPast / 365.25),

		// テキスト出力
		result = document.getElementById("result")
	;

	result.innerHTML = "おおよそ " + daysPast + "日 経過した " + age + "歳 ですね。";
}
*/


/* 王様ゲーム
   ========================================================================== */
/*
・トリガー -> クリック
・テキスト出力
・乱数
・重複させない
・エラー防止処置

function kingSaid() {
	var orders = [
		"笑わせなさい",
		"感動させなさい",
		"褒めなさい",
		"甘い言葉をかけなさい"
	];

	var order = orders[Math.floor(Math.random() * orders.length)],
		num = document.getElementById("num").value,
		// 4 -> 1..4 = 0..3 + 1
		p1 = Math.floor(Math.random() * (num)) + 1,
		p2
	;

	// 無限ループ防止
	if (num < 2) {
		p2 = 1;
	}
	else {
		// どのような状況であろうと、必ず1回は処理を行う
		do {
			p2 = Math.floor(Math.random() * (num)) + 1;
		} while(p1 == p2);
	}

	document.getElementById("result").innerHTML = p1 + "番の人が " + p2 + "番の人へ　" + order;
}
*/
