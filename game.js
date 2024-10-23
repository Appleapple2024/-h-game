const moods = ["开心的", "惆怅的", "着急的", "享受的", "生气的", "隐忍的", "动情的", "羞耻的", "上瘾的", "颤抖着", "按耐不住的"];
const places = ["在车里", "在卧室里", "在书房里", "在私人海边", "在度假村", "在洗浴间", "在音乐会后台", "在试衣间", "在无人按摩室", "在房车里", "在阳台", "在医院更衣室", "在办公室", "在试衣间"];
const postures = ["跪下", "躺着", "站着", "蹲着", "被抱着", "跪趴着", "被吊着", "半侧身", "趴着"];
const actions = ["被按在腿上巴掌打屁股", "被温柔的搂着亲吻", "被仔细抚摸全身", "被脱下裤子羞耻展示", "被抱着细闻脖颈", "被轻轻抽手心要求认错", "被束缚双手等待惩罚", "被蒙住眼睛紧张放置", "被要求含住口球猜玩具", "被分开腿刺激骑乘", "被脱光检查身体情况", "被舔舐胸脯和下身嫩肉", "被轻柔的揉捏臀肉和腰间"];
const second_sentence_actions = ["静静地欣赏和鼓励", "严肃的训斥和拍打臀部", "隐藏快速的心跳然后命令之后进行下一步", "想着吃醋的时事所以冷淡的安抚", "低声抚慰和温柔亲吻", "心疼的搂住轻抚但继续进行", "诉说爱意并抱住细细品尝", "用正经的语调要求摆出更过分的姿势", "锁住双手然后继续按在膝盖上轻拍", "轻舔嘴唇欣赏着这一幕", "随即站在一旁喘息着故意刺激着她"];

// 根据出生年份确定人物
function determineCharacter(year) {
    return year % 10 % 2 === 0 ? "wan" : "pleng";
}

// 生成第一个句子
function generateFirstSentence(character) {
    const mood = moods[Math.floor(Math.random() * moods.length)];
    const place = places[Math.floor(Math.random() * places.length)];
    const posture = postures[Math.floor(Math.random() * postures.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    return `${character} ${mood} ${place} ${posture} ${action}`;
}

// 生成第二个句子
function generateSecondSentence(character) {
    const secondCharacter = character === "wan" ? "pleng" : "wan";
    const secondAction = second_sentence_actions[Math.floor(Math.random() * second_sentence_actions.length)];
    return `${secondCharacter} ${secondAction}`;
}

// 游戏逻辑
function playGame() {
    const birthYear = parseInt(document.getElementById("birthYear").value);
    if (isNaN(birthYear) || birthYear < 1970 || birthYear > 2008) {
        alert("请输入1970-2008之间的年份！");
        return;
    }

    // 确定主角
    const character = determineCharacter(birthYear);

    // 生成两个句子
    const firstSentence = generateFirstSentence(character);
    const secondSentence = generateSecondSentence(character);

    // 显示结果
    document.getElementById("output").innerHTML = `<p>${firstSentence}</p><p>${secondSentence}</p>`;
}
