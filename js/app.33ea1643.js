(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],u=0,h=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&h.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},s=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0552":function(e,t,r){"use strict";var a=r("9e3c"),n=r.n(a);n.a},"0943":function(e,t,r){"use strict";var a=r("3990"),n=r.n(a);n.a},"0a74":function(e,t,r){"use strict";var a=r("2c32"),n=r.n(a);n.a},"0cee":function(e,t,r){},"2c32":function(e,t,r){},"38cb":function(e,t,r){},3990:function(e,t,r){},4317:function(e,t,r){"use strict";var a=r("f290"),n=r.n(a);n.a},"49a4":function(e,t,r){},"55fb":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("a026"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content-window"},[r("router-view")],1)},s=[],i={name:"App"},o=i,c=(r("5c0b"),r("2877")),l=Object(c["a"])(o,n,s,!1,null,null,null),d=l.exports,u=r("8c4f"),h=(r("15f5"),r("85ff")),p=r.n(h),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("NavPage",[r("LinkTile",{attrs:{title:"Memory","nav-path":"/memory",src:"img/games/MemoryBackface.png",alt:"memory games"}}),r("LinkTile",{attrs:{title:"Bewegen","nav-path":"/dragdrop",src:"img/games/DD.png",alt:"drag and drop games"}})],1)},m=[],g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("Header",{attrs:{"nav-back-path":e.navBackPath}},[r("div",{staticClass:"game-button"},[r("a",{staticClass:"fab fa-github",attrs:{href:"https://github.com/timmalich/edukiz"}})])]),r("div",{staticClass:"link-area"},[e._t("default")],2)],1)},v=[],b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("div",{staticClass:"header-left"},[e.navBackPath?r("div",{staticClass:"game-button",on:{click:e.navBack}},[r("i",{staticClass:"fas fa-reply"})]):e._e(),e.sound?r("div",{staticClass:"game-button",on:{click:e.playGameExplanation}},[r("i",{staticClass:"fas fa-question",staticStyle:{"font-size":"1.3rem"}}),r("i",{staticClass:"fas fa-headphones",staticStyle:{"font-size":"1.2rem"}})]):e._e()]),r("div",{staticClass:"header-center"},[r("div",{staticClass:"reward",on:{click:function(t){return e.showRewardPreview()}}},[r("div",[e._v(e._s(e.rewards))]),r("img",{staticClass:"no-drag",class:[{"reward-final":e.isRewardFinalActive}],style:e.rewardFinal,attrs:{src:e.getRewardHeaderImage(),alt:"reward"}})])]),r("div",{staticClass:"header-right"},[e._t("default")],2),e.isRewardPreviewActive||e.isRewardShowActive?r("img",{staticClass:"no-drag",class:[{"reward-preview":e.isRewardPreviewActive},{"reward-show":e.isRewardShowActive}],attrs:{src:e.getNextRewardImage(),alt:"reward-preview"}}):e._e()])},w=[],C=(r("fb6a"),r("07ac"),r("b85c")),y={audios:{},eventListeners:[],preload:function(e){this.audios[e]=new Audio("sounds/"+e+".mp3")},stopAll:function(){var e,t=Object(C["a"])(this.eventListeners);try{for(t.s();!(e=t.n()).done;){var r=e.value;this.audios[r.src].removeEventListener("ended",r.listener)}}catch(i){t.e(i)}finally{t.f()}for(var a=0,n=Object.values(this.audios);a<n.length;a++){var s=n[a];s.pause(),s.currentTime=0}},getFromCache:function(e){var t=this.audios[e];if(t&&t.readyState)return t},playSoundsInRow:function(e){var t=e.shift();if(this.eventListeners.shift(),e.length>0){var r=this.playSoundsInRow.bind(this,e);return this.eventListeners.push({src:t,listener:r}),this.playSound(t).addEventListener("ended",r,{once:!0})}return this.playSound(t)},playSound:function(e){var t=this.getFromCache(e);return t||(t=new Audio("sounds/"+e+".mp3"),this.audios[e]=t),t.play(),t},playError:function(){return this.playSound("error1")},playSuccess:function(){return this.playSound("success1")},playBigSuccess:function(){return this.playSound("big_success1")},playCharacter:function(e){return this.playSound(this.getCharacterPath(e))},getCharacterPath:function(e){return"de/characters/"+e.toLowerCase()},playExplanation:function(e){return this.playSound("de/explanations/"+e)}},L={name:"Header",props:["navBackPath","sound","currentLevel"],data:function(){return{rewards:0,currentNewRewards:0,isRewardPreviewActive:!1,isRewardShowActive:!1,isRewardFinalActive:!1,rewardImages:["star1","star2","star3","star4","star5"]}},mounted:function(){this.$eventHub.$on("showRewardPreview",this.showRewardPreview),this.$eventHub.$on("showReward",this.showReward),this.rewards=localStorage.rewards?localStorage.rewards:0},watch:{rewards:function(e){localStorage.rewards=e}},beforeDestroy:function(){this.$eventHub.$off("showRewardPreview"),this.$eventHub.$off("showReward")},computed:{rewardFinal:function(){return{"animation-iteration-count":this.currentNewRewards}}},methods:{getDecimalPart:function(e){return e+="",parseInt(e.slice(e.length-2,e.length-1))||0},getRewardHeaderImage:function(){var e=this.getDecimalPart(this.rewards);return e%=this.rewardImages.length,"img/"+this.rewardImages[e]+".svg"},getNextRewardImage:function(){var e=this.rewards+"";e=parseInt(e.slice(e.length-1))||0;var t=this.getDecimalPart(this.rewards);return this.currentLevel+1+e>=10&&t++,t%=this.rewardImages.length,"img/"+this.rewardImages[t]+".svg"},navBack:function(){this.$router.push(this.navBackPath)},playGameExplanation:function(){y.playExplanation(this.sound)},showRewardPreview:function(){this.isRewardPreviewActive||(this.isRewardPreviewActive=!0,setTimeout(function(){this.isRewardPreviewActive=!1}.bind(this),2e3))},showReward:function(e){e=parseInt(e)||1,this.isRewardShowActive||(this.isRewardShowActive=!0,setTimeout(function(){this.isRewardShowActive=!1}.bind(this),4e3),setTimeout(function(){this.currentNewRewards=e;for(var t=1;t<=e;t++)setTimeout(function(){this.rewards=parseInt(this.rewards)+1||1}.bind(this),1e3*t);this.isRewardFinalActive||(this.isRewardFinalActive=!0,setTimeout(function(){this.isRewardFinalActive=!1}.bind(this),1e3*e+1e3))}.bind(this),3500))}}},A=L,k=(r("9b05"),Object(c["a"])(A,b,w,!1,null,"ef9f2c88",null)),_=k.exports,x={name:"NavPage",components:{Header:_},props:["navBackPath"]},S=x,O=(r("0943"),Object(c["a"])(S,g,v,!1,null,"11a79cec",null)),R=O.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"link-tile"},[r("figure",{staticClass:"link-tile-box"},[r("figcaption",[r("b",[e._v(e._s(e.title))])]),r("img",{staticClass:"link-tile clickable-elements",attrs:{src:this.src,alt:e.alt},on:{click:e.nav}})])])},$=[],E={name:"LinkTile",props:["navPath","src","alt","title"],methods:{nav:function(){this.$router.push(this.navPath)}}},G=E,F=(r("a12c"),Object(c["a"])(G,P,$,!1,null,"88608a24",null)),j=F.exports,D={name:"Home",components:{LinkTile:j,NavPage:R},props:{msg:String}},B=D,I=Object(c["a"])(B,f,m,!1,null,"4a42a2fd",null),M=I.exports,H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("NavPage",{attrs:{"nav-back-path":"/"}},[r("link-tile",{attrs:{title:"Bilder","nav-path":"/memory/animals",src:"img/games/MemoryAnimals.png",alt:"memory animals"}}),r("link-tile",{attrs:{title:"ABC & 123","nav-path":"/memory/characters",src:"img/games/MemoryCharacters.png",alt:"memory characters"}})],1)],1)},T=[],N={name:"Memory",components:{LinkTile:j,NavPage:R}},W=N,z=(r("0a74"),Object(c["a"])(W,H,T,!1,null,"0d197a9b",null)),U=z.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("MemoryGame",{attrs:{"possible-card-configs":e.possibleCardConfigs}})},Z=[],q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Game",{attrs:{"is-highlight-animation-running":e.isGameOver,explanation:e.explanation,"nav-back-path":"/memory","current-level":e.selectedLevel},on:{previous:e.previousLevel,restart:e.generateCards,next:e.nextLevel},scopedSlots:e._u([{key:"header",fn:function(){return[r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedLevel,expression:"selectedLevel"}],staticClass:"clickable-elements",attrs:{id:"levels"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedLevel=t.target.multiple?r:r[0]},function(t){return e.generateCards()}]}},e._l(e.levels,(function(t,a){return r("option",{key:a,domProps:{value:a}},[e._v(" "+e._s(a+1)+" ("+e._s(t.rows*t.columns)+" Cards) ")])})),0)]},proxy:!0}])},[r("div",{staticClass:"grid-container",style:e.gridContainer},[e.isGameStarted?e._e():r("button",{staticClass:"play-button",on:{click:e.startGame}},[r("i",{staticClass:"fas fa-play-circle"})]),e._l(e.cards,(function(t){return r("memory-card",{key:t.key,ref:"memoryCards",refInFor:!0,staticClass:"column",attrs:{"front-face":t.frontFace,sound:t.sound,"is-board-locked":e.isBoardLocked},on:{flipped:e.cardFlipped}})}))],2),r("ErrorAnimation",{ref:"errorAnimation"})],1)},K=[],V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"memory-card",on:{click:e.flipCard}},[r("div",[r("div",{staticClass:"front-face",class:[{flipped:!e.isFlipped}]},[r("img",{staticClass:"front-face-inner no-drag",attrs:{src:e.frontFace,alt:"front face"}})]),r("div",[r("img",{staticClass:"back-face no-drag",class:[{flipped:e.isFlipped}],attrs:{src:"img/cat_wallpaper.svg",alt:"back face"}})])])])},Y=[],Q={name:"MemoryCard",data:function(){return{isFlipped:!0,isFlippable:!0}},props:["frontFace","isBoardLocked","sound"],methods:{flipCard:function(){!this.isFlippable||this.isBoardLocked||this.isFlipped||(this.isFlipped=!this.isFlipped,this.$emit("flipped",this))},forceFlip:function(){this.isFlipped=!0},reset:function(){this.isFlipped=!1,this.isFlippable=!0}}},X=Q,ee=(r("9db1"),Object(c["a"])(X,V,Y,!1,null,"8e9811f2",null)),te=ee.exports,re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("Header",{attrs:{"nav-back-path":this.navBackPath,sound:this.explanation,"current-level":e.currentLevel}},[e._t("header")],2),r("div",{staticClass:"game-content"},[e._t("default")],2),r("Footer",{attrs:{"is-highlight-animation-running":e.isHighlightAnimationRunning},on:{previous:e.previous,restart:e.restart,next:e.next}})],1)},ae=[],ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"footer"},[r("div",{staticClass:"game-button",class:[{highlight:e.isHighlightAnimationRunning}],on:{click:function(t){return e.previous()}}},[r("i",{staticClass:"fas fa-arrow-alt-circle-left"})]),r("div",{staticClass:"game-button",class:[{highlight:e.isHighlightAnimationRunning}],on:{click:function(t){return e.restart()}}},[r("i",{staticClass:"fas fa-redo-alt"})]),r("div",{staticClass:"game-button",class:[{highlight:e.isHighlightAnimationRunning}],on:{click:function(t){return e.next()}}},[r("i",{staticClass:"fas fa-arrow-alt-circle-right"})]),e._t("default")],2)},se=[],ie={name:"Footer",props:["isHighlightAnimationRunning"],methods:{previous:function(){this.$emit("previous")},restart:function(){this.$emit("restart")},next:function(){this.$emit("next")}}},oe=ie,ce=(r("9ab1"),Object(c["a"])(oe,ne,se,!1,null,"21b5aafa",null)),le=ce.exports,de={name:"Game",components:{Header:_,Footer:le},props:["navBackPath","isHighlightAnimationRunning","explanation","currentLevel"],methods:{previous:function(){this.$emit("previous")},restart:function(){this.$emit("restart")},next:function(){this.$emit("next")}}},ue=de,he=(r("bd39"),Object(c["a"])(ue,re,ae,!1,null,"3446a0d2",null)),pe=he.exports,fe={shuffleArray:function(e,t){var r;r=t?new Array(e.length):e;for(var a=e.length-1;a>0;a--){var n=this.getRandomArrayIndex(e),s=[e[n],e[a]];r[a]=s[0],r[n]=s[1]}return r},getRandomArrayIndex:function(e){return Math.floor(Math.random()*e.length)},getRandomArrayElement:function(e){return e[this.getRandomArrayIndex(e)]}},me=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.errors,(function(e){return r("img",{key:e.key,staticClass:"error-animation",attrs:{src:e.image,alt:"error animation"}})})),0)},ge=[],ve={name:"ErrorAnimation",data:function(){return{errors:[],errorImages:["fish1.svg","fish3.svg","fish8.svg","snail2.svg","tractor1.svg","tractor2.svg","ambulance1.svg","ninja1.svg","penguin13.svg","fire_truck1.svg","fire_truck2.svg","dragon5.svg"]}},methods:{showError:function(e){var t=4e3,r=y.playError();"function"===typeof e&&r.addEventListener("ended",e,{once:!0}),this.errors.push({image:"img/"+fe.getRandomArrayElement(this.errorImages),key:(new Date).getTime()}),setTimeout(function(){this.errors.shift()}.bind(this),t)}}},be=ve,we=(r("6105"),Object(c["a"])(be,me,ge,!1,null,"40959355",null)),Ce=we.exports,ye={name:"MemoryGame",components:{MemoryCard:te,Game:pe,ErrorAnimation:Ce},data:function(){function e(){var e=11,t=1,r=2,a=[];while(t<e){var n=r-1;r*n%2===0&&(a.push({rows:n,columns:r}),t++),r*r%2===0&&(a.push({rows:r,columns:r}),t++),r++}return a}return{cards:void 0,flippedCard:void 0,isBoardLocked:!1,isGameStarted:!1,solvedCards:0,selectedLevel:4,levels:e(),timeoutUntilGameStarts:void 0,isGameOver:!1,explanation:"memory"}},created:function(){y.playExplanation(this.explanation),this.generateCards()},destroyed:function(){y.stopAll()},props:["possibleCardConfigs"],methods:{isCurrentLevelMaxLevel:function(){return this.selectedLevel===this.levels.length-1},isCurrentLevelMinLevel:function(){return 0===this.selectedLevel},nextLevel:function(){this.isCurrentLevelMaxLevel()||this.selectedLevel++,this.generateCards()},previousLevel:function(){this.isCurrentLevelMinLevel()||this.selectedLevel--,this.generateCards()},getCardAmount:function(e){return e.columns*e.rows},showAllCards:function(){if(this.$refs.memoryCards){var e,t=Object(C["a"])(this.$refs.memoryCards);try{for(t.s();!(e=t.n()).done;){var r=e.value;r.forceFlip()}}catch(a){t.e(a)}finally{t.f()}}},startGame:function(){if(!this.isGameStarted){if(this.solvedCards=0,this.$refs.memoryCards){var e,t=Object(C["a"])(this.$refs.memoryCards);try{for(t.s();!(e=t.n()).done;){var r=e.value;r.reset()}}catch(a){t.e(a)}finally{t.f()}}this.isGameStarted=!0,this.isBoardLocked=!1}},createCard:function(e,t){return{key:e,frontFace:t.image,sound:t.sound}},generateCards:function(){this.isBoardLocked=!0,this.isGameStarted=!1,this.isGameOver=!1,clearTimeout(this.timeoutUntilGameStarts),this.cards=[],this.flippedCard=null;var e=this.getCardAmount(this.levels[this.selectedLevel]);fe.shuffleArray(this.possibleCardConfigs);for(var t=0;t<e/2;t++){var r=this.possibleCardConfigs[t];this.cards.push(this.createCard(this.cards.length+"A",r)),this.cards.push(this.createCard(this.cards.length+"B",r)),y.preload(r.sound)}fe.shuffleArray(this.cards),this.showAllCards(),this.timeoutUntilGameStarts=setTimeout(function(){this.startGame()}.bind(this),1e4)},checkGameOver:function(){var e=this.getCardAmount(this.levels[this.selectedLevel]);return this.isGameOver=this.solvedCards===e,this.isGameOver},cardFlipped:function(e){this.isBoardLocked=!0;var t=function(e,t){return e.frontFace===t.frontFace},r=function(e,t){e.isFlippable=!1,t.isFlippable=!1};this.flippedCard?t(this.flippedCard,e)?(this.solvedCards+=2,this.checkGameOver()?(this.$eventHub.$emit("showReward",[this.selectedLevel+1]),y.playBigSuccess()):(this.$eventHub.$emit("showRewardPreview"),y.playSuccess()),r(this.flippedCard,e),this.flippedCard=null,this.isBoardLocked=!1):(y.playSound(e.sound),setTimeout(function(){this.$refs.errorAnimation.showError(),this.flippedCard&&(this.flippedCard.isFlipped=!1,this.flippedCard=null),e.isFlipped=!1,this.isBoardLocked=!1}.bind(this),1e3)):(y.playSound(e.sound),this.flippedCard=e,this.isBoardLocked=!1)}},computed:{gridContainer:function(){return{"grid-template-columns":"repeat("+this.levels[this.selectedLevel].columns+", minmax(20pt, 1fr))"}}}},Le=ye,Ae=(r("c66a"),Object(c["a"])(Le,q,K,!1,null,"3d97b4c6",null)),ke=Ae.exports,_e={name:"MemoryCharacters",components:{MemoryGame:ke},data:function(){var e=[],t=function(t,r,a){e.push({image:"img/"+t+"."+(a||"svg"),sound:"de/words/"+r})};return t("ambulance1","krankenwagen"),t("bird1","eule"),t("bird2","eule"),t("butterfly","schmetterling"),t("car1","auto"),t("car2","auto"),t("cat1","katze","png"),t("chicken1","huhn"),t("christmas_tree1","weihnachtsbaum"),t("christmas_tree2","weihnachtsbaum"),t("dino1","dino"),t("dino2","dino"),t("dog1","hund"),t("dragon1","dad/drache"),t("dragon2","dad/drache"),t("dragon3","dad/drache"),t("dragon4","dad/drache","png"),t("dragon5","dad/drache"),t("dragon6","dad/drache"),t("dragon7","dad/drache"),t("dragon8","dad/drache","png"),t("dragon9","dad/drache"),t("dragon1","dad/drache"),t("fire_truck1","feuerwehr"),t("fire_truck2","feuerwehrauto"),t("fish1","fisch"),t("fish2","fisch"),t("fish3","fisch"),t("fish4","regenbogenfisch"),t("fish5","fisch"),t("fish6","fisch"),t("fish7","fisch"),t("fish8","fisch"),t("frog1","frosch"),t("frog2","frosch"),t("goat1","ziege"),t("goat2","ziege"),t("ninja1","ninja"),t("penguin1","pinguin"),t("penguin2","pinguin"),t("penguin3","pinguin"),t("penguin5","pinguin"),t("penguin6","pinguin"),t("penguin7","pinguin"),t("penguin8","pinguin"),t("penguin9","pinguin"),t("penguin10","pinguin"),t("penguin11","pinguin"),t("penguin12","pinguin"),t("penguin13","pinguin"),t("penguin14","pinguin"),t("penguin15","pinguin"),t("police_car","polizei"),t("rabbit1","hase"),t("rainbow1","regenbogen"),t("santa1","weihnachtsmann"),t("snail1","schnecke"),t("snail2","schnecke"),t("snail3","schnecke"),t("snowman1","schneemann"),t("tractor1","traktor"),t("tractor2","traktor"),t("tree1","baum"),t("unicorn1","einhorn"),t("unicorn2","einhorn"),{possibleCardConfigs:e}}},xe=_e,Se=Object(c["a"])(xe,J,Z,!1,null,null,null),Oe=Se.exports,Re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("MemoryGame",{attrs:{"possible-card-configs":e.characterConfigs}})},Pe=[],$e=(r("ac1f"),r("1276"),{getCharacterImagePath:function(e){return"img/characters/"+e.toUpperCase()+".svg"}}),Ee={data:function(){var e,t="ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789".split(""),r=[],a=Object(C["a"])(t);try{for(a.s();!(e=a.n()).done;){var n=e.value;r.push({character:n,image:$e.getCharacterImagePath(n),sound:"de/characters/"+n.toLowerCase()})}}catch(s){a.e(s)}finally{a.f()}return{characterConfigs:r}}},Ge={name:"MemoryCharacters",components:{MemoryGame:ke},mixins:[Ee]},Fe=Ge,je=Object(c["a"])(Fe,Re,Pe,!1,null,null,null),De=je.exports,Be=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("NavPage",{attrs:{"nav-back-path":"/"}},[r("link-tile",{attrs:{title:"Zeichen Finden","nav-path":"/dragdrop/characters",src:"img/games/DDCharacters.png",alt:"memory characters"}}),r("link-tile",{attrs:{title:"Wörter Bauen","nav-path":"/dragdrop/build-words",src:"img/games/DDBuildWords.png",alt:"memory animals"}})],1)},Ie=[],Me={name:"DDNavPage",components:{LinkTile:j,NavPage:R}},He=Me,Te=Object(c["a"])(He,Be,Ie,!1,null,"4541fea6",null),Ne=Te.exports,We=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Game",{attrs:{"is-highlight-animation-running":e.isGameOver,"nav-back-path":"/dragdrop",explanation:e.explanation,"current-level":e.selectedLevel},on:{previous:e.previousLevel,restart:e.restart,next:e.nextLevel}},[r("div",{staticClass:"drop-section dropzone",class:[{"all-drops-successful":e.isGameOver}],style:e.gridContainer},e._l(e.droppedCharacters,(function(e,t){return r("ImageContainer",{key:t,staticClass:"drop-element",attrs:{src:e.image}})})),1),r("div",{staticClass:"spacer"},[e._v(e._s(e.currentWord))]),r("div",{ref:"dragSection",staticClass:"drag-section",style:e.gridContainer},e._l(e.draggableCharacters,(function(e,t){return r("ImageContainer",{key:t,ref:"draggables",refInFor:!0,staticClass:"draggable-element",attrs:{"data-identifier":e.character,"data-draggable-index":t,src:e.image}})})),1),r("ErrorAnimation",{ref:"errorAnimation"})],1)},ze=[],Ue=(r("a434"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper"},[r("img",{attrs:{src:e.src,alt:"containerized image"}})])}),Je=[],Ze={name:"ImageContainer",props:["src"]},qe=Ze,Ke=(r("0552"),Object(c["a"])(qe,Ue,Je,!1,null,"6d34d593",null)),Ve=Ke.exports,Ye=r("be4c"),Qe={destroyed:function(){Object(Ye["a"])(".dropzone").unset(),Object(Ye["a"])(".draggable-element").unset()},methods:{resetDragAndDropSuccessions:function(){var e,t=Object(C["a"])(document.getElementsByClassName("dropzone"));try{for(t.s();!(e=t.n()).done;){var r=e.value;this.resetSuccessionDropMark(r)}}catch(i){t.e(i)}finally{t.f()}var a,n=Object(C["a"])(document.getElementsByClassName("draggable-element"));try{for(n.s();!(a=n.n()).done;){var s=a.value;this.resetSuccessionDragMark(s)}}catch(i){n.e(i)}finally{n.f()}},markSuccess:function(e,t){e.classList.add("drop-success"),e.classList.remove("empty-droppable-element"),t.classList.add("drag-success")},resetSuccessionDropMark:function(e){e.classList.remove("drop-success"),e.classList.add("empty-droppable-element")},resetSuccessionDragMark:function(e){e.classList.remove("drag-success")},initDragDrop:function(e){function t(t){return!!e&&t.classList.contains("drop-success")}Object(Ye["a"])(".dropzone").dropzone({overlap:.5,ondropactivate:function(){},ondropdeactivate:function(){},ondropmove:function(){},ondragenter:function(e){var r=e.target;t(r)||(r.classList.add("drop-target-active"),r.classList.remove("empty-droppable-element"))},ondragleave:function(e){var r=e.target;t(r)||(r.classList.add("empty-droppable-element"),r.classList.remove("drop-target-active"))},ondrop:function(e){var r=e.target;if(!t(r)){r.classList.add("empty-droppable-element"),r.classList.remove("drop-target-active");var a=e.relatedTarget;"function"===typeof this.ondrop?this.ondrop(e)&&this.markSuccess(r,a):this.markSuccess(r,a)}}.bind(this)}),Object(Ye["a"])(".draggable-element").draggable({inertia:!1,modifiers:[],autoScroll:!1,listeners:{start:function(e){"function"===typeof this.ondragstart&&this.ondragstart(e)}.bind(this),move:function(e){var t=e.target,r=parseFloat(t.getAttribute("data-x"))||0,a=parseFloat(t.getAttribute("data-y"))||0,n=e.dx,s=e.dy,i=r+n,o=a+s;t.style.webkitTransform=t.style.transform="translate("+i+"px, "+o+"px)",t.setAttribute("data-x",i),t.setAttribute("data-y",o)},end:function(e){var t=e.target;t.style.webkitTransform=t.style.transform="",t.setAttribute("data-x",0),t.setAttribute("data-y",0)}}})}}},Xe={data:function(){return{wordConfigs:[{wordLength:2,words:["ja","au","da","du","ei","er","es","hi","Po","zu"]},{wordLength:3,words:["Opa","Oma","Zoo","Yan","Tim"]},{wordLength:4,words:["Mama","Papa","Huhn","Rudi","Affe"]},{wordLength:5,words:["Tiger","Pferd","Fisch","Panda","Vogel","Fuchs"]},{wordLength:6,words:["Drache","Milina","Damian","Katrin","Gudrun"]},{wordLength:7,words:["Pinguin","Elefant","Blauwal","Giraffe","Gorilla","Hamster","Nashorn"]}]}}},et={createConfig:function(e){return{character:e,sound:y.getCharacterPath(e),image:$e.getCharacterImagePath(e)}}},tt={name:"DDBuildWords",components:{ImageContainer:Ve,Game:pe,ErrorAnimation:Ce},mixins:[Qe,Xe],data:function(){return{selectedLevel:2,droppedCharacters:[],currentWordCharacters:[],currentWord:void 0,draggableCharacters:[],solvedCharacters:0,isGameOver:!1,explanation:"dragdrop_buildwords"}},created:function(){this.restart(!0),this.initDragDrop(!1),y.playExplanation(this.explanation).addEventListener("ended",this.playHelpWord.bind(this))},destroyed:function(){y.stopAll()},computed:{gridContainer:function(){var e=this.wordConfigs[this.selectedLevel].wordLength,t=2;return{"grid-template-columns":"repeat("+e+", minmax(20pt, 1fr))",display:"grid","grid-gap":t+"pt"}}},methods:{playHelpWord:function(){var e,t=["de/helpers/wir_schreiben_das_wort","de/words/dad/"+this.currentWord.toLowerCase()],r=Object(C["a"])(this.currentWordCharacters);try{for(r.s();!(e=r.n()).done;){var a=e.value;t.push("de/characters/dad/"+a.toLowerCase())}}catch(n){r.e(n)}finally{r.f()}y.playSoundsInRow(t)},ondragstart:function(e){var t=e.target;y.playCharacter(t.getAttribute("data-identifier"))},ondrop:function(e){y.stopAll();var t=e.relatedTarget,r=t.getAttribute("data-identifier").toLowerCase(),a=this.currentWordCharacters[this.solvedCharacters].toLowerCase();if(r===a){this.solvedCharacters++;var n=t.getAttribute("data-draggable-index"),s=this.draggableCharacters.splice(n,1)[0];if(this.droppedCharacters.push(s),this.solvedCharacters===this.wordConfigs[this.selectedLevel].wordLength)this.isGameOver=!0,this.$eventHub.$emit("showReward",[this.selectedLevel+1]),y.playSound("de/words/dad/"+this.currentWord.toLowerCase()).addEventListener("ended",y.playBigSuccess.bind(y),{once:!0});else{var i=this.currentWordCharacters[this.solvedCharacters].toLowerCase();this.$eventHub.$emit("showRewardPreview"),y.playSoundsInRow(["de/helpers/super_und_jetzt_ein","de/characters/dad/"+i])}return!0}return this.$refs.errorAnimation.showError((function(){y.playSoundsInRow(["de/helpers/du_hast_ein","de/characters/dad/"+r,"de/helpers/aber_wir_brauchen_ein","de/characters/dad/"+a])})),!1},restart:function(e){this.isGameOver=!1,this.solvedCharacters=0,this.droppedCharacters=[],this.draggableCharacters=[],y.stopAll(),this.currentWord=fe.getRandomArrayElement(this.wordConfigs[this.selectedLevel].words).toUpperCase(),this.currentWordCharacters=this.currentWord.split("");var t,r=Object(C["a"])(this.currentWordCharacters);try{for(r.s();!(t=r.n()).done;){var a=t.value;y.preload("de/characters/"+a.toLowerCase()),this.draggableCharacters.push(et.createConfig(a))}}catch(n){r.e(n)}finally{r.f()}fe.shuffleArray(this.draggableCharacters),this.resetGameComponents(),e||this.playHelpWord()},resetGameComponents:function(){this.resetDragAndDropSuccessions()},previousLevel:function(){this.selectedLevel>0&&this.selectedLevel--,this.restart()},nextLevel:function(){this.selectedLevel<this.wordConfigs.length-1&&this.selectedLevel++,this.restart()}}},rt=tt,at=(r("f36d"),Object(c["a"])(rt,We,ze,!1,null,"1b49a502",null)),nt=at.exports,st=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Game",{attrs:{"is-highlight-animation-running":e.isGameOver,"nav-back-path":"/dragdrop",explanation:e.explanation,"current-level":e.selectedLevel},on:{previous:e.previousLevel,restart:e.restart,next:e.nextLevel}},[r("div",{staticClass:"drop-section",style:e.gridContainer},e._l(e.droppableCharacters,(function(e){return r("ImageContainer",{key:e.character,staticClass:"dropzone empty-droppable-element",attrs:{"data-identifier":e.character,src:e.image}})})),1),r("div",{staticClass:"spacer"}),r("div",{staticClass:"drag-section",style:e.gridContainer},e._l(e.draggableCharacters,(function(e){return r("ImageContainer",{key:e.character,staticClass:"draggable-element",attrs:{"data-identifier":e.character,src:e.image}})})),1),r("ErrorAnimation",{ref:"errorAnimation"})],1)},it=[],ot={name:"DDCharacters",components:{ImageContainer:Ve,Game:pe,ErrorAnimation:Ce},mixins:[Qe,Ee],data:function(){return{selectedLevel:2,levels:[{elementAmount:2},{elementAmount:3},{elementAmount:4},{elementAmount:5},{elementAmount:6},{elementAmount:7},{elementAmount:8},{elementAmount:9},{elementAmount:10},{elementAmount:11},{elementAmount:12},{elementAmount:13},{elementAmount:14},{elementAmount:15},{elementAmount:16},{elementAmount:17},{elementAmount:18},{elementAmount:19},{elementAmount:20},{elementAmount:21}],droppableCharacters:[],draggableCharacters:[],solvedCharacters:0,isGameOver:!1,explanation:"dragdrop_characters"}},created:function(){y.playExplanation(this.explanation),this.restart(),this.initDragDrop(!0)},destroyed:function(){y.stopAll()},computed:{gridContainer:function(){var e,t=7,r=this.levels[this.selectedLevel].elementAmount,a=10;return r/t>2?a=3:r/t>1&&(a=7),e=r>t?t:r,{"grid-template-columns":"repeat("+e+", minmax(20pt, 1fr))",display:"grid","grid-gap":a+"pt"}}},methods:{ondragstart:function(e){var t=e.target;y.playCharacter(t.getAttribute("data-identifier"))},ondrop:function(e){var t=e.currentTarget,r=e.relatedTarget,a=t.getAttribute("data-identifier");return y.playCharacter(a),a===r.getAttribute("data-identifier")?(this.solvedCharacters++,this.solvedCharacters===this.levels[this.selectedLevel].elementAmount?setTimeout(function(){this.$eventHub.$emit("showReward",[this.selectedLevel+1]),this.isGameOver=!0,y.playBigSuccess()}.bind(this),800):this.$eventHub.$emit("showRewardPreview"),!0):(this.$refs.errorAnimation.showError(),!1)},restart:function(){this.isGameOver=!1,this.solvedCharacters=0,this.droppableCharacters=[],this.draggableCharacters=[],fe.shuffleArray(this.characterConfigs);for(var e=0;e<this.levels[this.selectedLevel].elementAmount;e++){var t=this.characterConfigs[e];y.preload("de/characters/"+t.character.toLowerCase()),this.droppableCharacters.push(t),this.draggableCharacters.push(t)}fe.shuffleArray(this.droppableCharacters),this.resetGameComponents()},resetGameComponents:function(){this.resetDragAndDropSuccessions()},previousLevel:function(){this.selectedLevel>0&&this.selectedLevel--,this.restart()},nextLevel:function(){this.selectedLevel<this.levels.length-1&&this.selectedLevel++,this.restart()}}},ct=ot,lt=(r("4317"),Object(c["a"])(ct,st,it,!1,null,"2702e9fe",null)),dt=lt.exports,ut=r("9483");Object(ut["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,a["a"].use(u["a"]),a["a"].use(p.a),a["a"].prototype.$eventHub=new a["a"],localStorage.rewards||(localStorage.rewards=0);var ht=new u["a"]({routes:[{path:"/",name:"Home",component:M},{path:"/memory",name:"Memory",component:U},{path:"/memory/animals",name:"MemoryAnimals",component:Oe},{path:"/memory/characters",name:"MemoryCharacters",component:De},{path:"/dragdrop",name:"DragDrop",component:Ne},{path:"/dragdrop/build-words",name:"DDBuildWords",component:nt},{path:"/dragdrop/characters",name:"DDCharacters",component:dt},{path:"/github",name:"github",beforeEnter:function(){location.href="https://github.com/timmalich/edukiz"}}]});new a["a"]({el:"#app",router:ht,render:function(e){return e(d)}})},"5c0b":function(e,t,r){"use strict";var a=r("9c0c"),n=r.n(a);n.a},6105:function(e,t,r){"use strict";var a=r("f5e0"),n=r.n(a);n.a},"9ab1":function(e,t,r){"use strict";var a=r("38cb"),n=r.n(a);n.a},"9b05":function(e,t,r){"use strict";var a=r("49a4"),n=r.n(a);n.a},"9c0c":function(e,t,r){},"9db1":function(e,t,r){"use strict";var a=r("e12b"),n=r.n(a);n.a},"9e3c":function(e,t,r){},a12c:function(e,t,r){"use strict";var a=r("d308"),n=r.n(a);n.a},bd39:function(e,t,r){"use strict";var a=r("0cee"),n=r.n(a);n.a},c66a:function(e,t,r){"use strict";var a=r("55fb"),n=r.n(a);n.a},d308:function(e,t,r){},e12b:function(e,t,r){},e4bd:function(e,t,r){},f290:function(e,t,r){},f36d:function(e,t,r){"use strict";var a=r("e4bd"),n=r.n(a);n.a},f5e0:function(e,t,r){}});
//# sourceMappingURL=app.33ea1643.js.map