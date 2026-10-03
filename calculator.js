//后端接口地址
const BASE_URL = "http://localhost:8080/api";
let expression = "";
const inputDom = document.getElementById("exprInput");

//追加字符
function appendChar(ch) {
    expression += ch;
    inputDom.value = expression;
}

//清空
function clearAll() {
    expression = "";
    inputDom.value = "";
}

//提交算式到后端计算
async function calcSubmit() {
    if (!expression) return;
    try {
        const resp = await fetch(`${BASE_URL}/calc`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                expression: expression
            })
        });
        const result = await resp.json();
        if (result.success) {
            inputDom.value = result.result;
            expression = String(result.result);
            refreshHistory();
        } else {
            inputDom.value = result.msg;
        }
    } catch (err) {
        inputDom.value = "后端服务未启动";
        console.error(err);
    }
}

//加载历史记录
async function refreshHistory() {
    try {
        const resp = await fetch(`${BASE_URL}/history`);
        const list = await resp.json();
        const historyDom = document.getElementById("historyList");
        historyDom.innerHTML = "";
        list.forEach(item => {
            const div = document.createElement("div");
            div.innerText = `${item.expression} = ${item.result}`;
            //点击历史回填算式
            div.onclick = () => {
                expression = item.expression;
                inputDom.value = expression;
            };
            historyDom.appendChild(div);
        })
    } catch (e) {
        console.log("读取历史失败");
    }
}

//页面加载自动读取历史
refreshHistory();
