﻿/*
design by Voicu Apostol.
design: https://dribbble.com/shots/3533847-Mini-Music-Player
I can't find any open music api or mp3 api so i have to download all musics as mp3 file.
You can fork on github: https://github.com/muhammederdem/mini-player
*/

new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
{name: "ALin-给我一个理由忘记",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/ALin-给我一个理由忘记.mp3",url: "http://www.444.info",favorited: false},
{name: "ALin-有一种悲伤",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/ALin-有一种悲伤.mp3",url: "http://www.444.info",favorited: false},
{name: "阿悄-陪我去流浪",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/阿悄-陪我去流浪.mp3",url: "http://www.444.info",favorited: false},
{name: "阿桑-疯了",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/阿桑-疯了.mp3",url: "http://www.444.info",favorited: false},
{name: "阿桑-寂寞在唱歌",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/阿桑-寂寞在唱歌.mp3",url: "http://www.444.info",favorited: false},
{name: "阿桑-受了点伤",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/阿桑-受了点伤.mp3",url: "http://www.444.info",favorited: false},
{name: "岑宁儿-追光者",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/岑宁儿-追光者.mp3",url: "http://www.444.info",favorited: false},
{name: "岑雨桥、萧全-触电(爱的魔力转圈圈)",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/岑雨桥、萧全-触电(爱的魔力转圈圈).mp3",url: "http://www.444.info",favorited: false},
{name: "陈冠蒲-就让你走",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/陈冠蒲-就让你走.mp3",url: "http://www.444.info",favorited: false},
{name: "陈冠蒲-太多",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/陈冠蒲-太多.mp3",url: "http://www.444.info",favorited: false},
{name: "陈慧娴-千千阙歌",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/陈慧娴-千千阙歌.mp3",url: "http://www.444.info",favorited: false},
{name: "陈琳-爱就爱了",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/陈琳-爱就爱了.mp3",url: "http://www.444.info",favorited: false},
{name: "陈明-等你爱我",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/陈明-等你爱我.mp3",url: "http://www.444.info",favorited: false},
{name: "陈明-我要找到你",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/陈明-我要找到你.mp3",url: "http://www.444.info",favorited: false},
{name: "陈瑞-白狐",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/陈瑞-白狐.mp3",url: "http://www.444.info",favorited: false},
{name: "陈淑桦-情关",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/陈淑桦-情关.mp3",url: "http://www.444.info",favorited: false},
{name: "陈伟霆、宝石Gem-野狼Disco",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/陈伟霆、宝石Gem-野狼Disco.mp3",url: "http://www.444.info",favorited: false},
{name: "成龙、金喜善-无尽的爱",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/成龙、金喜善-无尽的爱.mp3",url: "http://www.444.info",favorited: false},
{name: "大壮-我们不一样",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/大壮-我们不一样.mp3",url: "http://www.444.info",favorited: false},
{name: "戴佩妮-爱疯了",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/戴佩妮-爱疯了.mp3",url: "http://www.444.info",favorited: false},
{name: "戴佩妮-街角的祝福",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/戴佩妮-街角的祝福.mp3",url: "http://www.444.info",favorited: false},
{name: "戴佩妮-你要的爱",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/戴佩妮-你要的爱.mp3",url: "http://www.444.info",favorited: false},
{name: "戴佩妮-怎样",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/戴佩妮-怎样.mp3",url: "http://www.444.info",favorited: false},
{name: "邓紫棋-倒数",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/邓紫棋-倒数.mp3",url: "http://www.444.info",favorited: false},
{name: "邓紫棋-光年之外",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/邓紫棋-光年之外.mp3",url: "http://www.444.info",favorited: false},
{name: "邓紫棋-你把我灌醉",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/邓紫棋-你把我灌醉.mp3",url: "http://www.444.info",favorited: false},
{name: "邓紫棋-泡沫",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/邓紫棋-泡沫.mp3",url: "http://www.444.info",favorited: false},
{name: "迪丽热巴、汪苏泷-偏偏",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/迪丽热巴、汪苏泷-偏偏.mp3",url: "http://www.444.info",favorited: false},
{name: "付笛声、任静-知心爱人",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/付笛声、任静-知心爱人.mp3",url: "http://www.444.info",favorited: false},
{name: "高胜美、左宏元-渡情",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/高胜美、左宏元-渡情.mp3",url: "http://www.444.info",favorited: false},
{name: "光良-第一次",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/光良-第一次.mp3",url: "http://www.444.info",favorited: false},
{name: "光良-都是你",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/光良-都是你.mp3",url: "http://www.444.info",favorited: false},
{name: "光良-童话",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/光良-童话.mp3",url: "http://www.444.info",favorited: false},
{name: "韩雪-飘雪",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/韩雪-飘雪.mp3",url: "http://www.444.info",favorited: false},
{name: "韩雪-想起",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/韩雪-想起.mp3",url: "http://www.444.info",favorited: false},
{name: "黑豹乐队-无地自容",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/黑豹乐队-无地自容.mp3",url: "http://www.444.info",favorited: false},
{name: "胡夏、郁可唯-知否知否",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/胡夏、郁可唯-知否知否.mp3",url: "http://www.444.info",favorited: false},
{name: "黄小琥-伴",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/黄小琥-伴.mp3",url: "http://www.444.info",favorited: false},
{name: "黄小琥-没那么简单",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/黄小琥-没那么简单.mp3",url: "http://www.444.info",favorited: false},
{name: "黄小琥-顺其自然",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/黄小琥-顺其自然.mp3",url: "http://www.444.info",favorited: false},
{name: "黄小琥-重来",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/黄小琥-重来.mp3",url: "http://www.444.info",favorited: false},
{name: "火箭少女101-卡路里",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/火箭少女101-卡路里.mp3",url: "http://www.444.info",favorited: false},
{name: "姜育恒-梅花三弄",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/姜育恒-梅花三弄.mp3",url: "http://www.444.info",favorited: false},
{name: "李健-贝加尔湖畔",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/李健-贝加尔湖畔.mp3",url: "http://www.444.info",favorited: false},
{name: "李健-当你老了(Live)",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/李健-当你老了(Live).mp3",url: "http://www.444.info",favorited: false},
{name: "李健-风吹麦浪",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/李健-风吹麦浪.mp3",url: "http://www.444.info",favorited: false},
{name: "李玟-想你的365天",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/李玟-想你的365天.mp3",url: "http://www.444.info",favorited: false},
{name: "李玟-月光爱人",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/李玟-月光爱人.mp3",url: "http://www.444.info",favorited: false},
{name: "李沁-小偷",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/李沁-小偷.mp3",url: "http://www.444.info",favorited: false},
{name: "李荣浩-麻雀",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/李荣浩-麻雀.mp3",url: "http://www.444.info",favorited: false},
{name: "李荣浩-模特",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/李荣浩-模特.mp3",url: "http://www.444.info",favorited: false},
{name: "李荣浩-年少有为",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/李荣浩-年少有为.mp3",url: "http://www.444.info",favorited: false},
{name: "李圣杰-痴心绝对",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/李圣杰-痴心绝对.mp3",url: "http://www.444.info",favorited: false},
{name: "李圣杰-手放开",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/李圣杰-手放开.mp3",url: "http://www.444.info",favorited: false},
{name: "李昕融、樊桐舟、李凯稠-你笑起来真好看",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/李昕融、樊桐舟、李凯稠-你笑起来真好看.mp3",url: "http://www.444.info",favorited: false},
{name: "李宇春-梨花香",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/李宇春-梨花香.mp3",url: "http://www.444.info",favorited: false},
{name: "李宇春-无价之姐",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/李宇春-无价之姐.mp3",url: "http://www.444.info",favorited: false},
{name: "梁静茹-爱你不是两三天",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/梁静茹-爱你不是两三天.mp3",url: "http://www.444.info",favorited: false},
{name: "梁静茹-可惜不是你",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/梁静茹-可惜不是你.mp3",url: "http://www.444.info",favorited: false},
{name: "梁静茹-勇气",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/梁静茹-勇气.mp3",url: "http://www.444.info",favorited: false},
{name: "林俊杰-江南",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/林俊杰-江南.mp3",url: "http://www.444.info",favorited: false},
{name: "林俊杰-一千年以后",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/林俊杰-一千年以后.mp3",url: "http://www.444.info",favorited: false},
{name: "林俊杰-醉赤壁",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/林俊杰-醉赤壁.mp3",url: "http://www.444.info",favorited: false},
{name: "林心如-落花",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/林心如-落花.mp3",url: "http://www.444.info",favorited: false},
{name: "林心如-倾听我",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/林心如-倾听我.mp3",url: "http://www.444.info",favorited: false},
{name: "林忆莲-不必在乎我是谁",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/林忆莲-不必在乎我是谁.mp3",url: "http://www.444.info",favorited: false},
{name: "林忆莲-伤痕",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/林忆莲-伤痕.mp3",url: "http://www.444.info",favorited: false},
{name: "林忆莲-至少还有你",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/林忆莲-至少还有你.mp3",url: "http://www.444.info",favorited: false},
{name: "林志炫-没离开过",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/林志炫-没离开过.mp3",url: "http://www.444.info",favorited: false},
{name: "林志炫-烟花易冷",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/林志炫-烟花易冷.mp3",url: "http://www.444.info",favorited: false},
{name: "零点乐队-相信自己",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/零点乐队-相信自己.mp3",url: "http://www.444.info",favorited: false},
{name: "刘德华-冰雨",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/刘德华-冰雨.mp3",url: "http://www.444.info",favorited: false},
{name: "刘珂矣-芙蓉雨",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/刘珂矣-芙蓉雨.mp3",url: "http://www.444.info",favorited: false},
{name: "刘若英-很爱很爱你",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/刘若英-很爱很爱你.mp3",url: "http://www.444.info",favorited: false},
{name: "刘若英-后来",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/刘若英-后来.mp3",url: "http://www.444.info",favorited: false},
{name: "刘若英-为爱痴狂",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/刘若英-为爱痴狂.mp3",url: "http://www.444.info",favorited: false},
{name: "刘若英-一辈子的孤单",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/刘若英-一辈子的孤单.mp3",url: "http://www.444.info",favorited: false},
{name: "卢冠廷-一生所爱",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/卢冠廷-一生所爱.mp3",url: "http://www.444.info",favorited: false},
{name: "罗文、甄妮-铁血丹心",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/罗文、甄妮-铁血丹心.mp3",url: "http://www.444.info",favorited: false},
{name: "满文军-懂你",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/满文军-懂你.mp3",url: "http://www.444.info",favorited: false},
{name: "梦然-少年",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/梦然-少年.mp3",url: "http://www.444.info",favorited: false},
{name: "莫文蔚-电台情歌",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/莫文蔚-电台情歌.mp3",url: "http://www.444.info",favorited: false},
{name: "莫文蔚-盛夏的果实",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/莫文蔚-盛夏的果实.mp3",url: "http://www.444.info",favorited: false},
{name: "潘玮柏-不得不爱",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/潘玮柏-不得不爱.mp3",url: "http://www.444.info",favorited: false},
{name: "潘玮柏-快乐崇拜",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/潘玮柏-快乐崇拜.mp3",url: "http://www.444.info",favorited: false},
{name: "潘越云-天天天蓝",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/潘越云-天天天蓝.mp3",url: "http://www.444.info",favorited: false},
{name: "潘越云-我是不是你最疼爱的人",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/潘越云-我是不是你最疼爱的人.mp3",url: "http://www.444.info",favorited: false},
{name: "齐秦-不让我的眼泪陪我过夜",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/齐秦-不让我的眼泪陪我过夜.mp3",url: "http://www.444.info",favorited: false},
{name: "齐秦-大约在冬季",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/齐秦-大约在冬季.mp3",url: "http://www.444.info",favorited: false},
{name: "齐秦-往事随风",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/齐秦-往事随风.mp3",url: "http://www.444.info",favorited: false},
{name: "齐秦-无情的雨无情的你",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/齐秦-无情的雨无情的你.mp3",url: "http://www.444.info",favorited: false},
{name: "齐秦-夜夜夜夜",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/齐秦-夜夜夜夜.mp3",url: "http://www.444.info",favorited: false},
{name: "齐豫-橄榄树",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/齐豫-橄榄树.mp3",url: "http://www.444.info",favorited: false},
{name: "邱永传-十一年",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/邱永传-十一年.mp3",url: "http://www.444.info",favorited: false},
{name: "裘海正-爱我的人和我爱的人",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/裘海正-爱我的人和我爱的人.mp3",url: "http://www.444.info",favorited: false},
{name: "裘海正-九千九百九十九滴眼泪",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/裘海正-九千九百九十九滴眼泪.mp3",url: "http://www.444.info",favorited: false},
{name: "任贤齐-小雪",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/任贤齐-小雪.mp3",url: "http://www.444.info",favorited: false},
{name: "任贤齐-心太软",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/任贤齐-心太软.mp3",url: "http://www.444.info",favorited: false},
{name: "容祖儿-小小",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/容祖儿-小小.mp3",url: "http://www.444.info",favorited: false},
{name: "沙宝亮-暗香",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/沙宝亮-暗香.mp3",url: "http://www.444.info",favorited: false},
{name: "沙宝亮-斑马斑马",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/沙宝亮-斑马斑马.mp3",url: "http://www.444.info",favorited: false},
{name: "苏芮-牵手",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/苏芮-牵手.mp3",url: "http://www.444.info",favorited: false},
{name: "孙燕姿-天黑黑",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/孙燕姿-天黑黑.mp3",url: "http://www.444.info",favorited: false},
{name: "孙燕姿-我要的幸福",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/孙燕姿-我要的幸福.mp3",url: "http://www.444.info",favorited: false},
{name: "孙燕姿-遇见",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/孙燕姿-遇见.mp3",url: "http://www.444.info",favorited: false},
{name: "孙燕姿-原来你什么都不要",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/孙燕姿-原来你什么都不要.mp3",url: "http://www.444.info",favorited: false},
{name: "孙悦-心情不错",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/孙悦-心情不错.mp3",url: "http://www.444.info",favorited: false},
{name: "邰正宵、孙悦-好人好梦",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/邰正宵、孙悦-好人好梦.mp3",url: "http://www.444.info",favorited: false},
{name: "邰正宵-九百九十九朵玫瑰",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/邰正宵-九百九十九朵玫瑰.mp3",url: "http://www.444.info",favorited: false},
{name: "邰正宵-千纸鹤",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/邰正宵-千纸鹤.mp3",url: "http://www.444.info",favorited: false},
{name: "邰正宵-心要让你听见",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/邰正宵-心要让你听见.mp3",url: "http://www.444.info",favorited: false},
{name: "邰正宵-一千零一夜",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/邰正宵-一千零一夜.mp3",url: "http://www.444.info",favorited: false},
{name: "邰正宵-找一个字代替",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/邰正宵-找一个字代替.mp3",url: "http://www.444.info",favorited: false},
{name: "田馥甄-小幸运",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/田馥甄-小幸运.mp3",url: "http://www.444.info",favorited: false},
{name: "汪峰-北京北京",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/汪峰-北京北京.mp3",url: "http://www.444.info",favorited: false},
{name: "汪峰-存在",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/汪峰-存在.mp3",url: "http://www.444.info",favorited: false},
{name: "汪峰-怒放的生命",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/汪峰-怒放的生命.mp3",url: "http://www.444.info",favorited: false},
{name: "汪正正-超越梦想",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/汪正正-超越梦想.mp3",url: "http://www.444.info",favorited: false},
{name: "汪正正-重头再来",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/汪正正-重头再来.mp3",url: "http://www.444.info",favorited: false},
{name: "王菲-传奇",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/王菲-传奇.mp3",url: "http://www.444.info",favorited: false},
{name: "王杰-伤心1999",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/王杰-伤心1999.mp3",url: "http://www.444.info",favorited: false},
{name: "王杰-忘记你不如忘记自己",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/王杰-忘记你不如忘记自己.mp3",url: "http://www.444.info",favorited: false},
{name: "王杰-忘了你忘了我",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/王杰-忘了你忘了我.mp3",url: "http://www.444.info",favorited: false},
{name: "王杰-为了爱梦一生",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/王杰-为了爱梦一生.mp3",url: "http://www.444.info",favorited: false},
{name: "王杰-一场游戏一场梦",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/王杰-一场游戏一场梦.mp3",url: "http://www.444.info",favorited: false},
{name: "王杰-一无所有",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/王杰-一无所有.mp3",url: "http://www.444.info",favorited: false},
{name: "王力宏-爱的就是你",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/王力宏-爱的就是你.mp3",url: "http://www.444.info",favorited: false},
{name: "王力宏-唯一",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/王力宏-唯一.mp3",url: "http://www.444.info",favorited: false},
{name: "王铮亮-时间都去哪儿了",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/王铮亮-时间都去哪儿了.mp3",url: "http://www.444.info",favorited: false},
{name: "萧煌奇-偷走",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/萧煌奇-偷走.mp3",url: "http://www.444.info",favorited: false},
{name: "萧亚轩-Cappuccino",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/萧亚轩-Cappuccino.mp3",url: "http://www.444.info",favorited: false},
{name: "萧亚轩-HoneyHoneyHoney",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/萧亚轩-HoneyHoneyHoney.mp3",url: "http://www.444.info",favorited: false},
{name: "萧亚轩-窗外的天气",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/萧亚轩-窗外的天气.mp3",url: "http://www.444.info",favorited: false},
{name: "萧亚轩-突然想起你",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/萧亚轩-突然想起你.mp3",url: "http://www.444.info",favorited: false},
{name: "萧亚轩-我爱你那么多",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/萧亚轩-我爱你那么多.mp3",url: "http://www.444.info",favorited: false},
{name: "萧亚轩-一个人的精彩",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/萧亚轩-一个人的精彩.mp3",url: "http://www.444.info",favorited: false},
{name: "萧亚轩-最熟悉的陌生人",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/萧亚轩-最熟悉的陌生人.mp3",url: "http://www.444.info",favorited: false},
{name: "小潘潘、小峰峰-学猫叫",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/小潘潘、小峰峰-学猫叫.mp3",url: "http://www.444.info",favorited: false},
{name: "辛晓琪-味道",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/辛晓琪-味道.mp3",url: "http://www.444.info",favorited: false},
{name: "信乐团-海阔天空",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/信乐团-海阔天空.mp3",url: "http://www.444.info",favorited: false},
{name: "信乐团-假如",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/信乐团-假如.mp3",url: "http://www.444.info",favorited: false},
{name: "信乐团-离歌",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/信乐团-离歌.mp3",url: "http://www.444.info",favorited: false},
{name: "信乐团-死了都要爱",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/信乐团-死了都要爱.mp3",url: "http://www.444.info",favorited: false},
{name: "徐佳莹-突然好想你",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/徐佳莹-突然好想你.mp3",url: "http://www.444.info",favorited: false},
{name: "许慧欣-七月七日晴",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/许慧欣-七月七日晴.mp3",url: "http://www.444.info",favorited: false},
{name: "许佳慧-预谋",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/许佳慧-预谋.mp3",url: "http://www.444.info",favorited: false},
{name: "许美静-荡漾",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/许美静-荡漾.mp3",url: "http://www.444.info",favorited: false},
{name: "许美静-都是夜归人",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/许美静-都是夜归人.mp3",url: "http://www.444.info",favorited: false},
{name: "许美静-快乐无罪",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/许美静-快乐无罪.mp3",url: "http://www.444.info",favorited: false},
{name: "许美静-蔓延",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/许美静-蔓延.mp3",url: "http://www.444.info",favorited: false},
{name: "许美静-迷乱",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/许美静-迷乱.mp3",url: "http://www.444.info",favorited: false},
{name: "许美静-迫在眉梢",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/许美静-迫在眉梢.mp3",url: "http://www.444.info",favorited: false},
{name: "许美静-铁窗",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/许美静-铁窗.mp3",url: "http://www.444.info",favorited: false},
{name: "许美静-阳光总在风雨后",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/许美静-阳光总在风雨后.mp3",url: "http://www.444.info",favorited: false},
{name: "许美静-遗憾",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/许美静-遗憾.mp3",url: "http://www.444.info",favorited: false},
{name: "许茹芸-独角戏",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/许茹芸-独角戏.mp3",url: "http://www.444.info",favorited: false},
{name: "许茹芸-泪海",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/许茹芸-泪海.mp3",url: "http://www.444.info",favorited: false},
{name: "许茹芸-日光机场",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/许茹芸-日光机场.mp3",url: "http://www.444.info",favorited: false},
{name: "许茹芸-如果云知道",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/许茹芸-如果云知道.mp3",url: "http://www.444.info",favorited: false},
{name: "许茹芸-一直是晴天",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/许茹芸-一直是晴天.mp3",url: "http://www.444.info",favorited: false},
{name: "许韶洋-花香",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/许韶洋-花香.mp3",url: "http://www.444.info",favorited: false},
{name: "许韶洋-幸福的瞬间",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/许韶洋-幸福的瞬间.mp3",url: "http://www.444.info",favorited: false},
{name: "许巍-曾经的你",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/许巍-曾经的你.mp3",url: "http://www.444.info",favorited: false},
{name: "薛之谦-暧昧",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/薛之谦-暧昧.mp3",url: "http://www.444.info",favorited: false},
{name: "薛之谦-丑八怪",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/薛之谦-丑八怪.mp3",url: "http://www.444.info",favorited: false},
{name: "薛之谦-你还要我怎样",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/薛之谦-你还要我怎样.mp3",url: "http://www.444.info",favorited: false},
{name: "薛之谦-演员",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/薛之谦-演员.mp3",url: "http://www.444.info",favorited: false},
{name: "严艺丹-三寸天堂",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/严艺丹-三寸天堂.mp3",url: "http://www.444.info",favorited: false},
{name: "杨宗纬 张碧晨-凉凉",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/杨宗纬 张碧晨-凉凉.mp3",url: "http://www.444.info",favorited: false},
{name: "叶丽仪-上海滩",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/叶丽仪-上海滩.mp3",url: "http://www.444.info",favorited: false},
{name: "叶倩文、林子祥-选择",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/叶倩文、林子祥-选择.mp3",url: "http://www.444.info",favorited: false},
{name: "叶倩文-真心真意过一生",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/叶倩文-真心真意过一生.mp3",url: "http://www.444.info",favorited: false},
{name: "于文文-体面",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/于文文-体面.mp3",url: "http://www.444.info",favorited: false},
{name: "俞静-红豆红",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/俞静-红豆红.mp3",url: "http://www.444.info",favorited: false},
{name: "羽·泉-感觉不到你",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/羽·泉-感觉不到你.mp3",url: "http://www.444.info",favorited: false},
{name: "羽·泉-冷酷到底",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/羽·泉-冷酷到底.mp3",url: "http://www.444.info",favorited: false},
{name: "羽·泉-深呼吸",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/羽·泉-深呼吸.mp3",url: "http://www.444.info",favorited: false},
{name: "羽·泉-最美",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/羽·泉-最美.mp3",url: "http://www.444.info",favorited: false},
{name: "庾澄庆-情非得已",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/庾澄庆-情非得已.mp3",url: "http://www.444.info",favorited: false},
{name: "郁可唯-时间煮雨",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/郁可唯-时间煮雨.mp3",url: "http://www.444.info",favorited: false},
{name: "郁可唯-思慕",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/郁可唯-思慕.mp3",url: "http://www.444.info",favorited: false},
{name: "袁娅维-说散就散",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/袁娅维-说散就散.mp3",url: "http://www.444.info",favorited: false},
{name: "张碧晨-年轮",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张碧晨-年轮.mp3",url: "http://www.444.info",favorited: false},
{name: "张惠妹-剪爱",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张惠妹-剪爱.mp3",url: "http://www.444.info",favorited: false},
{name: "张惠妹-哭不出来",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张惠妹-哭不出来.mp3",url: "http://www.444.info",favorited: false},
{name: "张惠妹-听海",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张惠妹-听海.mp3",url: "http://www.444.info",favorited: false},
{name: "张惠妹-站在高岗上",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张惠妹-站在高岗上.mp3",url: "http://www.444.info",favorited: false},
{name: "张靓颖-画心",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张靓颖-画心.mp3",url: "http://www.444.info",favorited: false},
{name: "张韶涵-呐喊",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张韶涵-呐喊.mp3",url: "http://www.444.info",favorited: false},
{name: "张韶涵-欧若拉",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张韶涵-欧若拉.mp3",url: "http://www.444.info",favorited: false},
{name: "张韶涵-隐形的翅膀",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张韶涵-隐形的翅膀.mp3",url: "http://www.444.info",favorited: false},
{name: "张韶涵-寓言",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张韶涵-寓言.mp3",url: "http://www.444.info",favorited: false},
{name: "张卫健-孤独不苦",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张卫健-孤独不苦.mp3",url: "http://www.444.info",favorited: false},
{name: "张卫健-虚虚实实",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张卫健-虚虚实实.mp3",url: "http://www.444.info",favorited: false},
{name: "张卫健-一辈子一场梦",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张卫健-一辈子一场梦.mp3",url: "http://www.444.info",favorited: false},
{name: "张信哲、范文芳-别让情两难",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张信哲、范文芳-别让情两难.mp3",url: "http://www.444.info",favorited: false},
{name: "张信哲、刘嘉玲-有一点动心",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张信哲、刘嘉玲-有一点动心.mp3",url: "http://www.444.info",favorited: false},
{name: "张信哲-爱不留",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张信哲-爱不留.mp3",url: "http://www.444.info",favorited: false},
{name: "张信哲-爱就一个字",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张信哲-爱就一个字.mp3",url: "http://www.444.info",favorited: false},
{name: "张信哲-爱如潮水",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张信哲-爱如潮水.mp3",url: "http://www.444.info",favorited: false},
{name: "张信哲-别怕我伤心",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张信哲-别怕我伤心.mp3",url: "http://www.444.info",favorited: false},
{name: "张信哲-不要对他说",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张信哲-不要对他说.mp3",url: "http://www.444.info",favorited: false},
{name: "张信哲-从开始到现在",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张信哲-从开始到现在.mp3",url: "http://www.444.info",favorited: false},
{name: "张信哲-过火",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张信哲-过火.mp3",url: "http://www.444.info",favorited: false},
{name: "张信哲-宽容",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张信哲-宽容.mp3",url: "http://www.444.info",favorited: false},
{name: "张信哲-某某某",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张信哲-某某某.mp3",url: "http://www.444.info",favorited: false},
{name: "张信哲-难以抗拒你容颜",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张信哲-难以抗拒你容颜.mp3",url: "http://www.444.info",favorited: false},
{name: "张信哲-太想爱你",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张信哲-太想爱你.mp3",url: "http://www.444.info",favorited: false},
{name: "张信哲-信仰",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张信哲-信仰.mp3",url: "http://www.444.info",favorited: false},
{name: "张信哲-用情",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张信哲-用情.mp3",url: "http://www.444.info",favorited: false},
{name: "张信哲-直觉",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张信哲-直觉.mp3",url: "http://www.444.info",favorited: false},
{name: "张学友-当我想起你",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张学友-当我想起你.mp3",url: "http://www.444.info",favorited: false},
{name: "张学友-分手总要在雨天",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张学友-分手总要在雨天.mp3",url: "http://www.444.info",favorited: false},
{name: "张学友-情书",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张学友-情书.mp3",url: "http://www.444.info",favorited: false},
{name: "张学友-秋意浓",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张学友-秋意浓.mp3",url: "http://www.444.info",favorited: false},
{name: "张学友-吻别",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张学友-吻别.mp3",url: "http://www.444.info",favorited: false},
{name: "张学友-心如刀割",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张学友-心如刀割.mp3",url: "http://www.444.info",favorited: false},
{name: "张学友-一千个伤心的理由",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张学友-一千个伤心的理由.mp3",url: "http://www.444.info",favorited: false},
{name: "张宇-一言难尽",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张宇-一言难尽.mp3",url: "http://www.444.info",favorited: false},
{name: "张宇-雨一直下",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张宇-雨一直下.mp3",url: "http://www.444.info",favorited: false},
{name: "张雨生-大海",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张雨生-大海.mp3",url: "http://www.444.info",favorited: false},
{name: "张云雷-探清水河",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/张云雷-探清水河.mp3",url: "http://www.444.info",favorited: false},
{name: "赵方婧-闭月",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/赵方婧-闭月.mp3",url: "http://www.444.info",favorited: false},
{name: "赵方婧-尽头",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/赵方婧-尽头.mp3",url: "http://www.444.info",favorited: false},
{name: "赵方婧-芒种",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/赵方婧-芒种.mp3",url: "http://www.444.info",favorited: false},
{name: "赵方婧-青灯",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/赵方婧-青灯.mp3",url: "http://www.444.info",favorited: false},
{name: "赵方婧-瑞鹤仙",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/赵方婧-瑞鹤仙.mp3",url: "http://www.444.info",favorited: false},
{name: "赵方婧-小暑",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/赵方婧-小暑.mp3",url: "http://www.444.info",favorited: false},
{name: "赵方婧-直觉",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/赵方婧-直觉.mp3",url: "http://www.444.info",favorited: false},
{name: "赵雷-成都",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/赵雷-成都.mp3",url: "http://www.444.info",favorited: false},
{name: "赵露思-时光话",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/赵露思-时光话.mp3",url: "http://www.444.info",favorited: false},
{name: "周笔畅-笔记",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周笔畅-笔记.mp3",url: "http://www.444.info",favorited: false},
{name: "周传雄-黄昏",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周传雄-黄昏.mp3",url: "http://www.444.info",favorited: false},
{name: "周华健-风雨无阻",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周华健-风雨无阻.mp3",url: "http://www.444.info",favorited: false},
{name: "周华健-难念的经",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周华健-难念的经.mp3",url: "http://www.444.info",favorited: false},
{name: "周蕙-不想让你知道",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周蕙-不想让你知道.mp3",url: "http://www.444.info",favorited: false},
{name: "周蕙-风铃",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周蕙-风铃.mp3",url: "http://www.444.info",favorited: false},
{name: "周蕙-好想好好爱你",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周蕙-好想好好爱你.mp3",url: "http://www.444.info",favorited: false},
{name: "周蕙-没有你",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周蕙-没有你.mp3",url: "http://www.444.info",favorited: false},
{name: "周蕙-我看",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周蕙-我看.mp3",url: "http://www.444.info",favorited: false},
{name: "周蕙-相遇太早",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周蕙-相遇太早.mp3",url: "http://www.444.info",favorited: false},
{name: "周蕙-约定",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周蕙-约定.mp3",url: "http://www.444.info",favorited: false},
{name: "周杰伦-稻香",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周杰伦-稻香.mp3",url: "http://www.444.info",favorited: false},
{name: "周杰伦-告白气球",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周杰伦-告白气球.mp3",url: "http://www.444.info",favorited: false},
{name: "周杰伦-菊花台",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周杰伦-菊花台.mp3",url: "http://www.444.info",favorited: false},
{name: "周杰伦-青花瓷",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周杰伦-青花瓷.mp3",url: "http://www.444.info",favorited: false},
{name: "周深-触不可及",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周深-触不可及.mp3",url: "http://www.444.info",favorited: false},
{name: "周深-此生惟你",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周深-此生惟你.mp3",url: "http://www.444.info",favorited: false},
{name: "周深-大鱼",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周深-大鱼.mp3",url: "http://www.444.info",favorited: false},
{name: "周深-欢颜",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周深-欢颜.mp3",url: "http://www.444.info",favorited: false},
{name: "周深-年轮(Live)",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周深-年轮(Live).mp3",url: "http://www.444.info",favorited: false},
{name: "周深-水形物语",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周深-水形物语.mp3",url: "http://www.444.info",favorited: false},
{name: "周深-微光海洋",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周深-微光海洋.mp3",url: "http://www.444.info",favorited: false},
{name: "周深-雪落下的声音(Live)",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周深-雪落下的声音(Live).mp3",url: "http://www.444.info",favorited: false},
{name: "周深-与卿",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周深-与卿.mp3",url: "http://www.444.info",favorited: false},
{name: "周深-愿得一心人",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周深-愿得一心人.mp3",url: "http://www.444.info",favorited: false},
{name: "周迅-飘摇",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/周迅-飘摇.mp3",url: "http://www.444.info",favorited: false},
{name: "庄心妍、祁隆-一万个舍不得",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/庄心妍、祁隆-一万个舍不得.mp3",url: "http://www.444.info",favorited: false},
{name: "庄心妍-爱囚",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/庄心妍-爱囚.mp3",url: "http://www.444.info",favorited: false},
{name: "庄心妍-以后的以后",artist: "",cover: "img/2.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/庄心妍-以后的以后.mp3",url: "http://www.444.info",favorited: false},
{name: "庄心妍-再见只是陌生人",artist: "",cover: "img/3.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/庄心妍-再见只是陌生人.mp3",url: "http://www.444.info",favorited: false},
{name: "庄心妍-走着走着就散了",artist: "",cover: "img/1.jpg",source: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/国语/庄心妍-走着走着就散了.mp3",url: "http://www.444.info",favorited: false}      


      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});