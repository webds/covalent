function _defineProperties(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{fVCe:function(n,e,t){"use strict";t.r(e);var o,a,r,s,i,c=t("ofXK"),d=t("UBqq"),l=t("tyNb"),b=t("fXoL"),h=t("MJ5V"),m=t("H4p7"),u=((o=function n(){_classCallCheck(this,n),this.basicMarkdown="\n    # Heading (H1)\n\n    ## Sub Heading (H2)\n\n    ### Steps (H3)\n\n    ###List Items\n\n    - One\n    - Two\n    - Three\n        * 4 extra spaces for nested lists\n            * Another 4 spaces for a nested list\n\n    Emphasis, aka italics, with *asterisks* or _underscores_.\n\n    Strong emphasis, aka bold, with **asterisks** or __underscores__.\n\n    Combined emphasis with **asterisks and _underscores_**.\n  ",this.blockquoteMarkdown="\n    > Blockquotes are very handy in email to emulate reply text.\n    > This line is part of the same quote.\n\n    Quote break.\n\n    > This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure\n    this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.\n  ",this.dividerMarkdown="\n    Three or more...\n\n    ---\n\n    Hyphens\n\n    ***\n\n    Asterisks\n\n    ___\n\n    Underscores\n  ",this.codeblockMarkdown='\n    `this is an inline code snippet`\n\n    ```javascript\n    var s = "JavaScript syntax highlighting";\n    alert(s);\n    ```\n\n    ```python\n    s = "Python syntax highlighting"\n    print s\n    ```\n  ',this.linksMarkdown="\n    [I'm an inline-style link](https://teradata.github.io/)\n\n    [I'm a reference-style link case does not matter][Teradata Github Landing]\n\n    [teradata github Landing]: https://teradata.github.io/\n\n    Inline image:\n    ![alt text here](assets/icons/teradata-dark.svg)\n\n    Reference-style image:\n    ![alt text][logo]\n\n    [logo]: assets/icons/teradata-dark.svg \"Teradata Labs\"\n  "}).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=b.Nb({type:o,selectors:[["markdown-demo-basic"]],decls:29,vars:5,template:function(n,e){1&n&&(b.Zb(0,"h2"),b.Rc(1,"Basic Markdown"),b.Yb(),b.Zb(2,"td-markdown"),b.Rc(3),b.Yb(),b.Zb(4,"h2"),b.Rc(5,"Blockquotes"),b.Yb(),b.Zb(6,"td-markdown"),b.Rc(7),b.Yb(),b.Zb(8,"h2"),b.Rc(9,"Dividers"),b.Yb(),b.Zb(10,"td-markdown"),b.Rc(11),b.Yb(),b.Zb(12,"h2"),b.Rc(13,"Code Blocks"),b.Yb(),b.Zb(14,"p"),b.Rc(15,"Inline has `back-ticks` around it."),b.Yb(),b.Zb(16,"p"),b.Rc(17,"Blocks of code are either fenced by lines with three back-ticks "),b.Zb(18,"code"),b.Rc(19,"```"),b.Yb(),b.Rc(20,", or are indented with four spaces.\n"),b.Yb(),b.Zb(21,"td-markdown"),b.Rc(22),b.Yb(),b.Zb(23,"h2"),b.Rc(24,"Links & Images"),b.Yb(),b.Zb(25,"p"),b.Rc(26,"There are two ways to create links. Inline & reference:"),b.Yb(),b.Zb(27,"td-markdown"),b.Rc(28),b.Yb()),2&n&&(b.Fb(3),b.Sc(e.basicMarkdown),b.Fb(4),b.Sc(e.blockquoteMarkdown),b.Fb(4),b.Sc(e.dividerMarkdown),b.Fb(11),b.Sc(e.codeblockMarkdown),b.Fb(6),b.Sc(e.linksMarkdown))},directives:[m.a],styles:[""]}),o),p=t("Wp6s"),k=t("bTqV"),w=((r=function(){function n(){_classCallCheck(this,n),this.markdown="\n    * [Heading 1](#heading-1)\n    * [Heading 2](#heading-2)\n\n    # Heading 1\n\n    ## Heading 2"}return _createClass(n,[{key:"jumpToH1",value:function(){this.anchor="heading-1"}},{key:"jumpToH2",value:function(){this.anchor="heading-2"}}]),n}()).\u0275fac=function(n){return new(n||r)},r.\u0275cmp=b.Nb({type:r,selectors:[["markdown-demo-anchor-jumping"]],decls:8,vars:2,consts:[[3,"anchor"],["mat-button","","color","accent",1,"text-upper",3,"click"]],template:function(n,e){1&n&&(b.Zb(0,"mat-card-content"),b.Zb(1,"td-markdown",0),b.Rc(2),b.Yb(),b.Yb(),b.Zb(3,"mat-card-actions"),b.Zb(4,"button",1),b.hc("click",(function(n){return e.jumpToH1()})),b.Rc(5," Jump to heading 1 "),b.Yb(),b.Zb(6,"button",1),b.hc("click",(function(n){return e.jumpToH2()})),b.Rc(7," Jump to heading 2 "),b.Yb(),b.Yb()),2&n&&(b.Fb(1),b.rc("anchor",e.anchor),b.Fb(1),b.Sc(e.markdown))},directives:[p.c,m.a,p.b,k.b],styles:[""]}),r),f=((a=function n(){_classCallCheck(this,n)}).\u0275fac=function(n){return new(n||a)},a.\u0275cmp=b.Nb({type:a,selectors:[["markdown-demo-hosted-url"]],decls:4,vars:0,consts:[["hostedUrl","https://github.com/Teradata/covalent/blob/develop/README.md"]],template:function(n,e){1&n&&(b.Zb(0,"td-markdown",0),b.Rc(1," * [Relative path with a hostedUrl provided](docs/GETTING_STARTED.md)\n"),b.Yb(),b.Zb(2,"td-markdown"),b.Rc(3," * [Relative path without a hostedUrl provided](docs/GETTING_STARTED.md)\n"),b.Yb())},directives:[m.a],styles:[""]}),a),g=[{path:"",component:(s=function n(){_classCallCheck(this,n)},s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=b.Nb({type:s,selectors:[["markdown-demo"]],decls:6,vars:6,consts:[[3,"demoId","demoTitle"]],template:function(n,e){1&n&&(b.Zb(0,"demo-component",0),b.Ub(1,"markdown-demo-basic"),b.Yb(),b.Zb(2,"demo-component",0),b.Ub(3,"markdown-demo-anchor-jumping"),b.Yb(),b.Zb(4,"demo-component",0),b.Ub(5,"markdown-demo-hosted-url"),b.Yb()),2&n&&(b.rc("demoId","markdown-demo-basic")("demoTitle","Basic"),b.Fb(2),b.rc("demoId","markdown-demo-anchor-jumping")("demoTitle","Anchor Jumping"),b.Fb(2),b.rc("demoId","markdown-demo-hosted-url")("demoTitle","Hosted URL For Generating Absolute URLs"))},directives:[h.a,u,w,f],styles:[""]}),s)}],y=((i=function n(){_classCallCheck(this,n)}).\u0275mod=b.Rb({type:i}),i.\u0275inj=b.Qb({factory:function(n){return new(n||i)},imports:[[l.f.forChild(g)],l.f]}),i),v=t("Krbs");t.d(e,"MarkdownDemoModule",(function(){return T}));var R,T=((R=function n(){_classCallCheck(this,n)}).\u0275mod=b.Rb({type:R}),R.\u0275inj=b.Qb({factory:function(n){return new(n||R)},imports:[[v.a,y,d.a,c.c,k.c,p.e]]}),R)}}]);