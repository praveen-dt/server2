(function(e) {
    function t(t) {
        for (var r, a, i = t[0], s = t[1], u = t[2], l = 0, d = []; l < i.length; l++) a = i[l], Object.prototype
            .hasOwnProperty.call(o, a) && o[a] && d.push(o[a][0]), o[a] = 0;
        for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
        m && m(t);
        while (d.length) d.shift()();
        return c.push.apply(c, u || []), n()
    }

    function n() {
        for (var e, t = 0; t < c.length; t++) {
            for (var n = c[t], r = !0, a = 1; a < n.length; a++) {
                var i = n[a];
                0 !== o[i] && (r = !1)
            }
            r && (c.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }
    var r = {},
        a = {
            app: 0
        },
        o = {
            app: 0
        },
        c = [];

    function i(e) {
        return s.p + "static/js/" + ({}[e] || e) + "." + {
            "chunk-0d0cc532": "87dbc266",
            "chunk-0fe78e49": "fb2a4300",
            "chunk-29bad05a": "3f6aca51",
            "chunk-33540560": "582562ad",
            "chunk-34fcf33a": "b83b06ca",
            "chunk-373175e9": "81c2f57e",
            "chunk-378b0433": "4c21c307",
            "chunk-509a5a7b": "4e32fc6a",
            "chunk-646f9dfd": "98a28bdf",
            "chunk-b9ee89d2": "7d9020a2",
            "chunk-151c11b3": "0450e334",
            "chunk-82499138": "a3b039a7",
            "chunk-55263db2": "d2c65451",
            "chunk-5ce77258": "fad53fa9",
            "chunk-69406bbe": "556b82be",
            "chunk-7186e0a7": "98e511dc",
            "chunk-8c769122": "fec0085a",
            "chunk-9b051aa4": "c3ee6d91",
            "chunk-9fd98634": "83e5fd09",
            "chunk-b4c01bce": "5b9bdc41",
            "chunk-cb33da04": "c0c43e43"
        }[e] + ".js"
    }

    function s(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.e = function(e) {
        var t = [],
            n = {
                "chunk-0d0cc532": 1,
                "chunk-0fe78e49": 1,
                "chunk-29bad05a": 1,
                "chunk-33540560": 1,
                "chunk-34fcf33a": 1,
                "chunk-373175e9": 1,
                "chunk-378b0433": 1,
                "chunk-646f9dfd": 1,
                "chunk-b9ee89d2": 1,
                "chunk-151c11b3": 1,
                "chunk-82499138": 1,
                "chunk-55263db2": 1,
                "chunk-5ce77258": 1,
                "chunk-69406bbe": 1,
                "chunk-7186e0a7": 1,
                "chunk-8c769122": 1,
                "chunk-9b051aa4": 1,
                "chunk-9fd98634": 1,
                "chunk-b4c01bce": 1,
                "chunk-cb33da04": 1
            };
        a[e] ? t.push(a[e]) : 0 !== a[e] && n[e] && t.push(a[e] = new Promise((function(t, n) {
            for (var r = "static/css/" + ({}[e] || e) + "." + {
                        "chunk-0d0cc532": "f78a3b40",
                        "chunk-0fe78e49": "56af5105",
                        "chunk-29bad05a": "65df04d5",
                        "chunk-33540560": "f6e786b1",
                        "chunk-34fcf33a": "f50cd09a",
                        "chunk-373175e9": "11540f3b",
                        "chunk-378b0433": "74fe7a03",
                        "chunk-509a5a7b": "31d6cfe0",
                        "chunk-646f9dfd": "7519715a",
                        "chunk-b9ee89d2": "9026d2a7",
                        "chunk-151c11b3": "1af5293e",
                        "chunk-82499138": "337854b2",
                        "chunk-55263db2": "afe43d53",
                        "chunk-5ce77258": "83b8e825",
                        "chunk-69406bbe": "644cb2c4",
                        "chunk-7186e0a7": "a7141955",
                        "chunk-8c769122": "0a873301",
                        "chunk-9b051aa4": "cfacd798",
                        "chunk-9fd98634": "5fc24d00",
                        "chunk-b4c01bce": "21491db4",
                        "chunk-cb33da04": "1e364a39"
                    }[e] + ".css", o = s.p + r, c = document.getElementsByTagName("link"), i =
                    0; i < c.length; i++) {
                var u = c[i],
                    l = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (l === r || l === o)) return t()
            }
            var d = document.getElementsByTagName("style");
            for (i = 0; i < d.length; i++) {
                u = d[i], l = u.getAttribute("data-href");
                if (l === r || l === o) return t()
            }
            var m = document.createElement("link");
            m.rel = "stylesheet", m.type = "text/css", m.onload = t, m.onerror = function(t) {
                var r = t && t.target && t.target.src || o,
                    c = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                c.code = "CSS_CHUNK_LOAD_FAILED", c.request = r, delete a[e], m.parentNode
                    .removeChild(m), n(c)
            }, m.href = o;
            var _ = document.getElementsByTagName("head")[0];
            _.appendChild(m)
        })).then((function() {
            a[e] = 0
        })));
        var r = o[e];
        if (0 !== r)
            if (r) t.push(r[2]);
            else {
                var c = new Promise((function(t, n) {
                    r = o[e] = [t, n]
                }));
                t.push(r[2] = c);
                var u, l = document.createElement("script");
                l.charset = "utf-8", l.timeout = 120, s.nc && l.setAttribute("nonce", s.nc), l.src = i(e);
                var d = new Error;
                u = function(t) {
                    l.onerror = l.onload = null, clearTimeout(m);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ("load" === t.type ? "missing" : t.type),
                                a = t && t.target && t.target.src;
                            d.message = "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")", d.name =
                                "ChunkLoadError", d.type = r, d.request = a, n[1](d)
                        }
                        o[e] = void 0
                    }
                };
                var m = setTimeout((function() {
                    u({
                        type: "timeout",
                        target: l
                    })
                }), 12e4);
                l.onerror = l.onload = u, document.head.appendChild(l)
            }
        return Promise.all(t)
    }, s.m = e, s.c = r, s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, s.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) s.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "/", s.oe = function(e) {
        throw console.error(e), e
    };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = u.push.bind(u);
    u.push = t, u = u.slice();
    for (var d = 0; d < u.length; d++) t(u[d]);
    var m = l;
    c.push([0, "chunk-vendors"]), n()
})({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    2395: function(e, t, n) {},
    "2ee0": function(e, t, n) {},
    5308: function(e, t, n) {
        "use strict";
        var r = {
            set: function(e, t) {
                window.sessionStorage.setItem(e, JSON.stringify(t))
            },
            get: function(e) {
                var t = window.sessionStorage.getItem(e);
                return t && void 0 !== t && null !== t && "undefined" !== t ? JSON.parse(t) : ""
            },
            remove: function(e) {
                if (e) window.sessionStorage.removeItem(e);
                else
                    for (var t in arguments) window.sessionStorage.removeItem(arguments[t])
            },
            seek: function(e) {
                if (e) return window.sessionStorage.hasOwnProperty(e)
            }
        };
        t["a"] = r
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = {};
        n.r(r), n.d(r, "formatMoney", (function() {
            return T
        })), n.d(r, "thousands", (function() {
            return v
        })), n.d(r, "bindStatus", (function() {
            return w
        })), n.d(r, "bankFormat", (function() {
            return M
        })), n.d(r, "hidePhone", (function() {
            return P
        }));
        var a = {};
        n.r(a), n.d(a, "increment", (function() {
            return D
        })), n.d(a, "decrement", (function() {
            return B
        }));
        var o = {};
        n.r(o), n.d(o, "getCount", (function() {
            return C
        }));
        n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("159b"), n("b64b"), n("4de4");
        var c = n("a026"),
            i = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [n("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [e.isRouterAlive ? n("router-view") : e._e()], 1)], 1)
            },
            s = [],
            u = (n("ac1f"), n("466d"), n("acc7"), n("d3b7"), n("caad"), n("2532"), n("bc3a")),
            l = n.n(u),
            d = n("5308"),
            m = n("5c96"),
            _ = n.n(m),
            h = n("ed08"),
            g = "/api/",
            f = l.a.create({
                baseURL: g,
                timeout: 8e3,
                responseType: "json",
                params: {}
            });
        f.interceptors.request.use((function(e) {
            e.data = e.data || {};
            var t = d["a"].get("token");
            if (t) {
                e.headers.Authorization = "Bearer " + t;
                var n = JSON.parse(d["a"].get("user")).agent_id,
                    r = "__cookie" + n;
                Object(h["d"])(r) && (e.data["__cookie"] = Object(h["b"])(r)), e.data["locale"] = d[
                    "a"].seek("i18n") && "en-US" == d["a"].get("i18n") ? "en" : "cn", e.data[
                    "timezone"] = d["a"].seek("timezone") ? d["a"].get("timezone") : "cst"
            }
            return e
        }), (function(e) {
            return Promise.reject(e)
        })), f.interceptors.response.use((function(e) {
            var t = e.data,
                n = t.status,
                r = t.msg;
            return 1 === n && m["Message"].error(r), 402 == n && m["MessageBox"].alert(
                "This backend is not available in your region.Sorry for the inconvenience.", {
                    confirmButtonText: "confirm",
                    callback: function(e) {
                        window.location.href = "/login"
                    }
                }), (400 == n && "invalid login status" == r || 401 == n) && (d["a"].remove(
                "user"), d["a"].remove("token"), d["a"].remove("notice_hidden"), m[
                "MessageBox"].alert("Login message timed out, please log in again!",
                "Login timeout", {
                    confirmButtonText: "confirm",
                    callback: function(e) {
                        window.location.href = "/login"
                    }
                })), e
        }), (function(e) {
            if (e && e.response) {
                var t = e.response.data.status;
                400 === t && m["Message"].error("Service exceptions"), 404 === t && m["Message"]
                    .error("Page request address error"), 500 === t && m["Message"].error(
                        "Service exceptions"), "canceled" === t && m["Message"].error(
                        "Service exceptions")
            }
            return e.message.includes("timeout") && console.log("The request timeout"), Promise
                .reject(e)
        })), c["default"].config.productionTip = !1, c["default"].prototype.$api = {
            agentLogin: function(e) {
                return f.post("agent/agentLogin", e)
            },
            reportCookie: function(e) {
                return f.get("agent/reportCookie", e)
            },
            agentList: function(e) {
                return f.post("agent/agentList", e)
            },
            authorizeList: function(e) {
                return f.post("agent/authorizeList", e)
            },
            editAuthorize: function(e) {
                return f.post("agent/editAuthorize", e)
            },
            addAgent: function(e) {
                return f.post("agent/addAgent", e)
            },
            balance: function(e) {
                return f.post("agent/balance", e)
            },
            rechargeRedeem: function(e) {
                return f.post("agent/rechargeRedeem", e)
            },
            updateinfo: function(e) {
                return f.post("agent/updateinfo", e)
            },
            levelList: function(e) {
                return f.post("agent/levelList", e)
            },
            operationRecord: function(e) {
                return f.post("agent/operationRecord", e)
            },
            agentTree: function(e) {
                return f.post("agent/agentTree", e)
            },
            statDataTotal: function(e) {
                return f.post("agent/statDataTotal", e)
            },
            statDataList: function(e) {
                return f.post("agent/statDataList", e)
            },
            userList: function(e) {
                return f.post("user/userList", e)
            },
            addUser: function(e) {
                return f.post("user/addUser", e)
            },
            setStatus: function(e) {
                return f.post("user/setStatus", e)
            },
            resetUserPwd: function(e) {
                return f.post("user/resetUserPwd", e)
            },
            rechargeList: function(e) {
                return f.post("user/rechargeList", e)
            },
            redeemList: function(e) {
                return f.post("user/redeemList", e)
            },
            gameRecordList: function(e) {
                return f.post("user/gameRecordList", e)
            },
            gameList: function(e) {
                return f.get("user/gameList", e)
            },
            userRechargeRedeem: function(e) {
                return f.post("user/rechargeRedeem", e)
            },
            userStatList: function(e) {
                return f.post("user/userStatList", e)
            },
            noticeList: function(e) {
                return f.post("agent/noticeList", e)
            },
            editNotice: function(e) {
                return f.post("agent/upNotice", e)
            },
            noticeStatus: function(e) {
                return f.post("agent/noticeStatus", e)
            },
            subsuggest: function(e) {
                return f.post("agent/subsuggest", e)
            },
            dowmloadCode: function(e) {
                return f.post("agent/dowmloadCode", e)
            },
            agentBanner: function(e) {
                return f.post("agent/agentBanner", e)
            },
            bannerList: function(e) {
                return f.post("agent/bannerList", e)
            },
            editBanner: function(e) {
                return f.post("agent/editBanner", e)
            },
            bannerStatus: function(e) {
                return f.post("agent/bannerStatus", e)
            },
            userWagerBonus: function(e) {
                return f.post("activity/userWagerBonus", e)
            },
            MonthlyStatistics: function(e) {
                return f.post("agent/MonthlyStatistics", e)
            },
            StoreConselStat: function(e) {
                return f.post("agent/StoreConselStat", e)
            },
            agentFrozenList: function(e) {
                return f.post("agent/agentFrozenList", e)
            },
            freezeAgent: function(e) {
                return f.post("agent/updateAgentFrozen", e)
            },
            wagerBonusConfig: function(e) {
                return f.post("activity/GetWagerBonus", e)
            },
            BonusRecord: function(e) {
                return f.post("activity/BonusRecord", e)
            },
            ChangeActivityStatus: function(e) {
                return f.post("activity/ChangeActivityStatus", e)
            },
            ChangeActivityTime: function(e) {
                return f.post("activity/ChangeActivityTime", e)
            },
            RewardRecord: function(e) {
                return f.post("activity/RewardRecord", e)
            }
        };
        var p = {
                name: "app",
                provide: function() {
                    return {
                        reload: this.reload
                    }
                },
                data: function() {
                    return {
                        isRouterAlive: !0
                    }
                },
                mounted: function() {
                    this._isMobile() ? this.beforeCreate() : this.beforeDestroy()
                },
                methods: {
                    reload: function() {
                        this.isRouterAlive = !1, this.$nextTick((function() {
                            this.isRouterAlive = !0
                        }))
                    },
                    _isMobile: function() {
                        var e = navigator.userAgent.match(
                            /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
                        );
                        return e
                    },
                    beforeCreate: function() {
                        document.querySelector("body").setAttribute("style", "zoom: 45%")
                    },
                    beforeDestroy: function() {
                        document.body.removeAttribute("style")
                    }
                }
            },
            b = p,
            R = (n("7c55"), n("2877")),
            A = Object(R["a"])(b, i, s, !1, null, null, null),
            k = A.exports,
            T = (n("b680"), n("5319"), function(e) {
                return "￥" + e.toFixed(2)
            }),
            v = function(e) {
                if ("number" === typeof e) return e.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
            },
            w = function(e) {
                switch (e) {
                    case 0:
                        return "未下发";
                    case 1:
                        return "已下发";
                    case 2:
                        return "绑定成功";
                    case 3:
                        return "绑定失败";
                    default:
                        return "未知"
                }
            },
            M = function(e) {
                return e += "", e = e.replace(/(\s)/g, "").replace(/(\d{4})/g, "$1 ").replace(/\s*$/, ""), e
            },
            P = function(e) {
                return e.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2")
            },
            O = (n("0fae"), n("b2d6")),
            E = n.n(O),
            y = n("2f62"),
            D = function(e) {
                var t = e.commit;
                t("INCREMENT")
            },
            B = function(e) {
                var t = e.commit;
                t("DECREMENT")
            },
            C = function(e) {
                return e.count
            };
        c["default"].use(y["a"]);
        var S, L = {
                count: 10,
                routes: ""
            },
            N = {
                INCREMENT: function(e) {
                    e.count++
                },
                DECREMENT: function(e) {
                    e.count--
                },
                onChangeRoutes: function(e, t) {
                    e.routes = t
                }
            },
            I = new y["a"].Store({
                actions: a,
                getters: o,
                state: L,
                mutations: N
            }),
            j = n("5530"),
            U = n("a925"),
            x = n("ade3"),
            W = {
                colorpicker: {
                    confirm: "确定",
                    clear: "清空"
                },
                datepicker: {
                    now: "此刻",
                    today: "今天",
                    cancel: "取消",
                    clear: "清空",
                    confirm: "确定",
                    selectDate: "选择日期",
                    selectTime: "选择时间",
                    startDate: "开始日期",
                    startTime: "开始时间",
                    endDate: "结束日期",
                    endTime: "结束时间",
                    prevYear: "前一年",
                    nextYear: "后一年",
                    prevMonth: "上个月",
                    nextMonth: "下个月",
                    year: "年",
                    month1: "1 月",
                    month2: "2 月",
                    month3: "3 月",
                    month4: "4 月",
                    month5: "5 月",
                    month6: "6 月",
                    month7: "7 月",
                    month8: "8 月",
                    month9: "9 月",
                    month10: "10 月",
                    month11: "11 月",
                    month12: "12 月",
                    weeks: {
                        sun: "日",
                        mon: "一",
                        tue: "二",
                        wed: "三",
                        thu: "四",
                        fri: "五",
                        sat: "六"
                    },
                    months: {
                        jan: "一月",
                        feb: "二月",
                        mar: "三月",
                        apr: "四月",
                        may: "五月",
                        jun: "六月",
                        jul: "七月",
                        aug: "八月",
                        sep: "九月",
                        oct: "十月",
                        nov: "十一月",
                        dec: "十二月"
                    }
                },
                form: {
                    searchBtn: "查询",
                    createBtn: "创建",
                    submit: "提交",
                    add: "添加",
                    edit: "编辑",
                    delete: "删除",
                    batchFreezeBtn: "批量冻结"
                },
                select: {
                    loading: "加载中",
                    noMatch: "无匹配数据",
                    noData: "无数据",
                    placeholder: "请选择"
                },
                cascader: {
                    noMatch: "无匹配数据",
                    loading: "加载中",
                    placeholder: "请选择",
                    noData: "暂无数据"
                },
                pagination: {
                    goto: "前往",
                    pagesize: "条/页",
                    total: "共 {total} 条",
                    pageClassifier: "页"
                },
                messagebox: {
                    title: "提示",
                    confirm: "确定",
                    cancel: "取消",
                    error: "输入的数据不合法!"
                },
                upload: {
                    deleteTip: "按 delete 键可删除",
                    delete: "删除",
                    preview: "查看图片",
                    continue: "继续上传"
                },
                table: {
                    emptyText: "暂无数据",
                    confirmFilter: "筛选",
                    resetFilter: "重置",
                    clearFilter: "全部",
                    sumText: "合计"
                },
                tree: {
                    emptyText: "暂无数据"
                },
                transfer: {
                    noMatch: "无匹配数据",
                    noData: "无数据",
                    titles: ["列表 1", "列表 2"],
                    filterPlaceholder: "请输入搜索内容",
                    noCheckedFormat: "共 {total} 项",
                    hasCheckedFormat: "已选 {checked}/{total} 项"
                },
                image: {
                    error: "加载失败"
                },
                pageHeader: {
                    title: "返回"
                },
                popconfirm: {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消"
                },
                common: {
                    title: "管理系统",
                    login: "登陆",
                    tip1: "请输入账号",
                    tip2: "请输入密码",
                    tip3: "请输入验证码",
                    tip4: "在电话号码前添加美国国家代码1,例如。1223336666,请仔细确认联系电话。所有安全代码都将基于联系电话",
                    tip5: "使用30个以下字母、下划线、数字",
                    tip6: "使用8个或更多字符,混合使用字母、下划线和数字。必须包括一个大写字母、一个小写字母和一个数字。",
                    tip7: "请确认您的提现信息!",
                    tip8: "请确认您的充值信息!",
                    tip9: "使用13个或更少的字符与字母，下划线和数字。",
                    tip10: "如果不填写会和账户一样",
                    tip11: "使用字母，下划线和数字。",
                    tip12: "请重新输入密码",
                    tip13: "请输入您的建议！",
                    tip14: "请勾选要冻结的代理 !",
                    remember: "记住密码",
                    ResetPassword: "重置密码",
                    editor: "编辑",
                    Redeem: "提现",
                    Permission: "权限",
                    LoginAccount: "登陆账号",
                    LoginPassword: "登陆密码",
                    NewPassword: "新密码",
                    ConfirmPassword: "确认密码",
                    ContactNumber: "联系方式",
                    RechargePermission: "充值权限",
                    RedeemPermission: "提现权限",
                    TestPermission: "测试账号",
                    Unauthorized: "未授权",
                    Authorized: "授权",
                    ActivateStatus: "激活状态",
                    Active: "激活",
                    Disabled: "不激活",
                    Cancel: "取消",
                    Save: "保存",
                    Confirm: "确认",
                    Account: "账号",
                    AgentLevel: "代理等级",
                    Originalpassword: "原始密码",
                    CustomerBalance: "客户余额",
                    AvailableBalance: "可用余额",
                    RedeemBalance: "提现金额",
                    RechargeBalance: "充值金额",
                    Recharge: "充值",
                    userMGT: "用户管理",
                    agentMGT: "代理管理",
                    date: "日期",
                    Note: "备注",
                    Nickname: "昵称",
                    redeemType: "提现类型",
                    logout: "退出登录",
                    logiTimes: "登陆次数",
                    yourBalance: "你的余额",
                    gameList: "游戏列表",
                    downloadCode: "苹果下载验证码",
                    AgentName: "代理名",
                    UpdateInfo: "更新信息",
                    authorize: "授权IP",
                    mainswitch: "是否打开授权IP登录",
                    UnderReview: "审核中",
                    Refresh: "刷新",
                    AlreadyOpened: "已审核",
                    ApplyForActivation: "申请激活",
                    WagerBonus: "奖金",
                    TotalNumberOfPlayersRegistered: "总用户数",
                    NumberOfPeopleRechargedYesterday: "昨天充值用户数",
                    NumberOfWithdrawalsYesterday: "昨天提款用户数",
                    ActivePopulation: "活跃用户数",
                    NumberOfNewRegistrationsYesterday: "昨天新增用户",
                    RechargeAmountYesterday: "昨天总充值额",
                    AmountWithdrawnYesterday: "昨天总提款额",
                    IncomeYesterday: "昨天收入",
                    AccumulatedRechargeAmount: "累计充值金额",
                    AccumulatedWithdrawal: "累计提款金额",
                    AllStatus: "所有状态",
                    Freeze: "冻结",
                    Unfreeze: "解除冻结",
                    Normal: "正常",
                    AllRoleLevel: "所有角色"
                },
                menu: {
                    Home: "首页",
                    adminmenu: "管理员管理",
                    adminList: "管理员",
                    agentMGT: "代理管理",
                    operationRecord: "操作记录",
                    managementTree: "管理树",
                    totalAccount: "总账户",
                    gameUser: "游戏用户",
                    userManagement: "用户管理",
                    redeemRecord: "兑换记录",
                    rechargeRecord: "充值记录",
                    bonusRecord: "奖金记录",
                    gameRecords: "游戏记录",
                    gameLog: "游戏日志",
                    announcement: "公告",
                    questionnaire: "问卷调查",
                    Authorize: "授权IP",
                    featureReview: "CS功能审查",
                    CustomerService: "客户服务部",
                    FAQ: "帮助",
                    WagerBonusFAQ: "Wager Bonus 帮助",
                    BannerList: "Banner列表",
                    AgentMonthlyStatistics: "代理月统计",
                    AgentFreezeList: "代理冻结列表",
                    RewardRecord: "奖励记录"
                },
                search_common: (S = {
                    tip1: "请选择",
                    tip2: "请输入搜索内容",
                    tip3: "输入关键词搜索",
                    sel1: "按ID搜索",
                    sel2: "按账号搜索",
                    sel3: "按日期搜索",
                    sel4: "选择游戏",
                    sel5: "按登录名搜索",
                    sel6: "玩家搜索",
                    sel7: "代理搜索",
                    sel8: "变动类型",
                    startDate: "开始日期",
                    endDate: "结束日期",
                    actor: "角色"
                }, Object(x["a"])(S, "sel5", "查询登录名"), Object(x["a"])(S, "Enterloginname", "请输入登录名"), S),
                table_common: {
                    No: "编号",
                    index: "编号",
                    management: "管理",
                    account: "账号",
                    actor: "角色",
                    status: "状态",
                    logiTimes: "登陆次数",
                    logonAddress: "本次登陆IP",
                    logonTime: "本次登陆时间",
                    lastLogonAddress: "上次登录IP",
                    lastLoginTime: "上次登录时间",
                    balance: "余额",
                    bonus: "奖金",
                    manager: "上级代理",
                    agentLevel: "代理等级",
                    remark: "备注",
                    operation: "操作",
                    date: "日期",
                    beforeRecharge: "充值前余额",
                    afterRecharge: "充值后余额",
                    Recharge: "充值",
                    IPAdd: "IP地址",
                    cashier: "出纳员",
                    BalanceBeforeRecharge: "充值前余额",
                    BalanceAfterRecharge: "充值后余额",
                    Note: "备注",
                    agent: "代理",
                    totalBonus: "游戏总赠送",
                    totalPlayed: "游戏总消耗",
                    totalWin: "游戏总盈利",
                    totalRecharge: "总充值",
                    totalRedeemed: "总提现",
                    totalIncome: "总盈利",
                    holding: "Holding",
                    total: "合计",
                    duration: "时间",
                    gameID: "用户ID",
                    registerDate: "注册时间",
                    registerIP: "注册IP",
                    RedeemAmount: "提现金额",
                    RechargeAmount: "充值金额",
                    UserData: "用户数据",
                    RedeemDate: "提现时间",
                    Redeemed: "提现金额",
                    beforeRedeem: "提现前余额",
                    afterRedeem: "提现后余额",
                    Ticket: "票据",
                    Print: "打印",
                    Recharged: "充值",
                    Offered: "赠送",
                    RechargeDate: "充值时间",
                    GameTitle: "游戏名称",
                    GameRoom: "游戏房间",
                    BalanceBeforeGame: "游戏前余额",
                    BalanceNow: "当前余额",
                    RecordingTime: "记录时间",
                    RewardName: "奖励名称",
                    title: "标题",
                    content: "内容",
                    Receivingobject: "接收对象",
                    createtime: "创建时间",
                    validatelogon: "登陆验证",
                    banner: "横幅",
                    description: "描述",
                    Ranking: "排名",
                    MonthTotalRecharge: "月充值总额",
                    MonthTotalRedeem: "月提款总额",
                    MonthTotalIncome: "月利润",
                    Month: "月份",
                    Nickname: "昵称",
                    FreezeOperation: "冻结操作",
                    FreezeStatus: "冻结状态",
                    ActivityName: "活动名称",
                    ChangeType: "变动类型",
                    ChangeAmount: "变动金额",
                    UserBalance: "用户余额"
                }
            },
            F = {
                colorpicker: {
                    confirm: "OK",
                    clear: "Clear"
                },
                datepicker: {
                    now: "Now",
                    today: "Today",
                    cancel: "Cancel",
                    clear: "Clear",
                    confirm: "OK",
                    selectDate: "Select date",
                    selectTime: "Select time",
                    startDate: "Start Date",
                    startTime: "Start Time",
                    endDate: "End Date",
                    endTime: "End Time",
                    prevYear: "Previous Year",
                    nextYear: "Next Year",
                    prevMonth: "Previous Month",
                    nextMonth: "Next Month",
                    year: "",
                    month1: "January",
                    month2: "February",
                    month3: "March",
                    month4: "April",
                    month5: "May",
                    month6: "June",
                    month7: "July",
                    month8: "August",
                    month9: "September",
                    month10: "October",
                    month11: "November",
                    month12: "December",
                    week: "week",
                    weeks: {
                        sun: "Sun",
                        mon: "Mon",
                        tue: "Tue",
                        wed: "Wed",
                        thu: "Thu",
                        fri: "Fri",
                        sat: "Sat"
                    },
                    months: {
                        jan: "Jan",
                        feb: "Feb",
                        mar: "Mar",
                        apr: "Apr",
                        may: "May",
                        jun: "Jun",
                        jul: "Jul",
                        aug: "Aug",
                        sep: "Sep",
                        oct: "Oct",
                        nov: "Nov",
                        dec: "Dec"
                    }
                },
                form: {
                    searchBtn: "search",
                    createBtn: "create",
                    submit: "submit",
                    add: "add",
                    edit: "edit",
                    delete: "delete",
                    batchFreezeBtn: "batch Freeze"
                },
                select: {
                    loading: "Loading",
                    noMatch: "No matching data",
                    noData: "No data",
                    placeholder: "Select"
                },
                cascader: {
                    noMatch: "No matching data",
                    loading: "Loading",
                    placeholder: "Select",
                    noData: "No data"
                },
                pagination: {
                    goto: "Go to",
                    pagesize: "/page",
                    total: "Total {total}",
                    pageClassifier: ""
                },
                messagebox: {
                    title: "Message",
                    confirm: "OK",
                    cancel: "Cancel",
                    error: "Illegal input"
                },
                upload: {
                    deleteTip: "press delete to remove",
                    delete: "Delete",
                    preview: "Preview",
                    continue: "Continue"
                },
                table: {
                    emptyText: "No Data",
                    confirmFilter: "Confirm",
                    resetFilter: "Reset",
                    clearFilter: "All",
                    sumText: "Sum"
                },
                tree: {
                    emptyText: "No Data"
                },
                transfer: {
                    noMatch: "No matching data",
                    noData: "No data",
                    titles: ["List 1", "List 2"],
                    filterPlaceholder: "Enter keyword",
                    noCheckedFormat: "{total} items",
                    hasCheckedFormat: "{checked}/{total} checked"
                },
                image: {
                    error: "FAILED"
                },
                pageHeader: {
                    title: "Back"
                },
                popconfirm: {
                    confirmButtonText: "Yes",
                    cancelButtonText: "No"
                },
                common: {
                    title: "Management System",
                    login: "Sign in",
                    tip1: "Please enter your account",
                    tip2: "Please enter your password",
                    tip3: "Please enter the verification code",
                    tip4: "Add US country code 1 before the phone number, ex. 12236 Please confirm the contact number carefully. All secure codes will be based on the contact number",
                    tip5: "Use 30 or less characters with letters, underscore & numbers.",
                    tip6: "Use 8 or more characters with a mix of letters, underscore & numbers. Must include a capital letter, a small letter and a number.",
                    tip7: "Please confirm your redeem & details!",
                    tip8: "Please confirm your recharge & details!",
                    tip9: "Use 13 or less characters with letters, underscore & numbers.",
                    tip10: "Will be same as the account if not fill it",
                    tip11: "Use letters, underscore & numbers.",
                    tip12: "Please re-enter the password",
                    tip13: "Please enter your suggest !",
                    tip14: "Please check the agents to be frozen !",
                    remember: "Remember password",
                    ResetPassword: "Reset Password",
                    editor: "editor",
                    Redeem: "Redeem",
                    Permission: "Permission",
                    LoginAccount: "Login account",
                    LoginPassword: "Login password",
                    NewPassword: "New password",
                    ConfirmPassword: "Confirm password",
                    ContactNumber: "Contact number",
                    RechargePermission: "Recharge permission",
                    RedeemPermission: "Redeem permission",
                    TestPermission: "Test Account",
                    Unauthorized: "Unauthorized",
                    Authorized: "Authorized",
                    ActivateStatus: "Activate status",
                    Active: "Active",
                    Disabled: "Disabled",
                    Cancel: "Cancel",
                    Save: "Save",
                    Confirm: "Confirm",
                    Account: "Account",
                    AgentLevel: "Agent Level",
                    Originalpassword: "Original password",
                    CustomerBalance: "Customer Balance",
                    AvailableBalance: "Available Balance",
                    RedeemBalance: "Redeem Balance",
                    RechargeBalance: "Recharge Balance",
                    Recharge: "Recharge",
                    userMGT: "User MGT",
                    agentMGT: "Agent MGT",
                    date: "Date",
                    Note: "Note",
                    Nickname: "Nickname",
                    redeemType: "Redeem Type",
                    logout: "log out",
                    logiTimes: "Login times",
                    yourBalance: "Your Balance",
                    gameList: "Game List",
                    downloadCode: "Iphone Download Code",
                    AgentName: "Agent Name",
                    UpdateInfo: "Update Info",
                    authorize: "Authorize IP",
                    mainswitch: "Whether open authorization IP login",
                    UnderReview: "Under Review",
                    Refresh: "Refresh",
                    AlreadyOpened: "Already Opened",
                    ApplyForActivation: "Apply for activation",
                    WagerBonus: "Wager Bonus",
                    TotalNumberOfPlayersRegistered: "Total Number Of Players Registered",
                    NumberOfPeopleRechargedYesterday: "Number Of People Recharged Yesterday",
                    NumberOfWithdrawalsYesterday: "Number Of Withdrawals Yesterday",
                    ActivePopulation: "Active Population",
                    NumberOfNewRegistrationsYesterday: "Number Of New Registrations Yesterday",
                    RechargeAmountYesterday: "Recharge Amount Yesterday",
                    AmountWithdrawnYesterday: "Amount Withdrawn Yesterday",
                    IncomeYesterday: "Income Yesterday",
                    AccumulatedRechargeAmount: "Accumulated Recharge Amount",
                    AccumulatedWithdrawal: "Accumulated Withdrawal",
                    AllStatus: "All Status",
                    Freeze: "Freeze",
                    Unfreeze: "Unfreeze",
                    Normal: "Normal",
                    AllRoleLevel: "All Role Level"
                },
                menu: {
                    Home: "Home",
                    adminmenu: "Admin Management",
                    adminList: "Admin",
                    agentMGT: "Agent MGT",
                    operationRecord: "Operation Record",
                    managementTree: "Management Tree",
                    totalAccount: "Total Account",
                    gameUser: "Game User",
                    userManagement: "User Management",
                    redeemRecord: "Redeem Record",
                    rechargeRecord: "Recharge Record",
                    bonusRecord: "Bonus Record",
                    gameRecords: "Game Records",
                    gameLog: "Game Log",
                    announcement: "Announcement",
                    questionnaire: "Questionnaire",
                    Authorize: "Authorize IP",
                    featureReview: "CS Feature Review",
                    CustomerService: "Customer Service",
                    FAQ: "FAQ",
                    WagerBonusFAQ: "Wager Bonus FAQ",
                    BannerList: "BannerList",
                    AgentMonthlyStatistics: "Agent Monthly Statistics",
                    AgentFreezeList: "Agent Freeze List",
                    RewardRecord: "Reward Record"
                },
                search_common: {
                    tip1: "Please select",
                    tip2: "Please enter your search content",
                    tip3: "Enter keyword search",
                    sel1: "Search by ID",
                    sel2: "Search by Account",
                    sel3: "Search by date",
                    sel4: "Select Game",
                    sel5: "Search by Login Name",
                    sel6: "User Search",
                    sel7: "Agent Search",
                    sel8: "Change Type",
                    Enterloginname: "Enter login name",
                    startDate: "Start date",
                    endDate: "End date",
                    actor: "Actor"
                },
                table_common: {
                    No: "No.",
                    index: "Index",
                    management: "Management",
                    account: "Account",
                    actor: "Actor",
                    status: "Status",
                    logiTimes: "Login times",
                    logonAddress: "logon address",
                    logonTime: "Logon time",
                    lastLogonAddress: "Last logon address",
                    lastLoginTime: "Last login time",
                    balance: "Balance",
                    bonus: "Bonus",
                    manager: "Manager",
                    agentLevel: "Agent Level",
                    remark: "Remark",
                    operation: "Operation",
                    date: "Date",
                    beforeRecharge: "Before recharge",
                    afterRecharge: "After recharge",
                    Recharge: "Recharge",
                    IPAdd: "IP Add",
                    cashier: "Cashier",
                    BalanceBeforeRecharge: "Balance before recharge",
                    BalanceAfterRecharge: "Balance after recharge",
                    Note: "Note",
                    agent: "Agent",
                    totalBonus: "Total bonus",
                    totalPlayed: "Total played",
                    totalWin: "Total win",
                    totalRecharge: "Total recharge",
                    totalRedeemed: "Total redeemed",
                    totalIncome: "Total income",
                    holding: "Holding",
                    total: "Total",
                    duration: "Duration",
                    gameID: "Game ID",
                    registerDate: "Register date",
                    registerIP: "Register ip",
                    RedeemAmount: "Redeem Amount",
                    RechargeAmount: "Recharge Amount",
                    UserData: "User Data",
                    RedeemDate: "Redeem date",
                    Redeemed: "Redeemed",
                    beforeRedeem: "Before Redeemed",
                    afterRedeem: "After Redeemed",
                    Ticket: "Ticket",
                    Print: "Print",
                    Recharged: "Recharged",
                    Offered: "Offered",
                    RechargeDate: "Recharge Date",
                    GameTitle: "Game title",
                    GameRoom: "Game room",
                    BalanceBeforeGame: "Balance before game",
                    BalanceNow: "Balance now",
                    RecordingTime: "Recording time",
                    RewardName: "Reward Name",
                    title: "Title",
                    content: "Content",
                    Receivingobject: "Receiving object",
                    createtime: "Create time",
                    validatelogon: "Validate logon",
                    banner: "Banner",
                    description: "Description",
                    Ranking: "Ranking",
                    MonthTotalRecharge: "Total Recharge",
                    MonthTotalRedeem: "Total Redeem",
                    MonthTotalIncome: "Total Income",
                    Month: "Month",
                    Nickname: "Nickname",
                    FreezeOperation: "Freeze operation",
                    FreezeStatus: "Freeze Status",
                    ActivityName: "Activity Name",
                    ChangeType: "Change Type",
                    ChangeAmount: "Change Amount",
                    UserBalance: "User Balance"
                }
            },
            z = {
                colorpicker: {
                    confirm: "확인",
                    clear: "초기화"
                },
                datepicker: {
                    now: "지금",
                    today: "오늘",
                    cancel: "취소",
                    clear: "초기화",
                    confirm: "확인",
                    selectDate: "날짜 선택",
                    selectTime: "시간 선택",
                    startDate: "시작 날짜",
                    startTime: "시작 시간",
                    endDate: "종료 날짜",
                    endTime: "종료 시간",
                    prevYear: "지난해",
                    nextYear: "다음해",
                    prevMonth: "지난달",
                    nextMonth: "다음달",
                    year: "년",
                    month1: "1월",
                    month2: "2월",
                    month3: "3월",
                    month4: "4월",
                    month5: "5월",
                    month6: "6월",
                    month7: "7월",
                    month8: "8월",
                    month9: "9월",
                    month10: "10월",
                    month11: "11월",
                    month12: "12월",
                    weeks: {
                        sun: "일",
                        mon: "월",
                        tue: "화",
                        wed: "수",
                        thu: "목",
                        fri: "금",
                        sat: "토"
                    },
                    months: {
                        jan: "1월",
                        feb: "2월",
                        mar: "3월",
                        apr: "4월",
                        may: "5월",
                        jun: "6월",
                        jul: "7월",
                        aug: "8월",
                        sep: "9월",
                        oct: "10월",
                        nov: "11월",
                        dec: "12월"
                    }
                },
                form: {
                    searchBtn: "검색",
                    createBtn: "생성",
                    submit: "제출",
                    add: "추가",
                    edit: "편집"
                },
                menu: {
                    configList: "목록 설정",
                    clientList: "고객 목록",
                    deployList: "실행 목록",
                    dockerConfig: "docker 설정",
                    nav2: "메뉴2",
                    editor: "편집기",
                    page3: "페이지3",
                    page5: "페이지5",
                    nav3: "메뉴3",
                    element: "Element",
                    funcList: "함수 목록",
                    echarts: "도표"
                },
                select: {
                    loading: "불러오는 중",
                    noMatch: "맞는 데이터가 없습니다",
                    noData: "데이터 없음",
                    placeholder: "선택"
                },
                cascader: {
                    noMatch: "맞는 데이터가 없습니다",
                    loading: "불러오는 중",
                    placeholder: "선택",
                    noData: "데이터 없음"
                },
                pagination: {
                    goto: "이동",
                    pagesize: "/page",
                    total: "총 {total}",
                    pageClassifier: ""
                },
                messagebox: {
                    title: "메시지",
                    confirm: "확인",
                    cancel: "취소",
                    error: "올바르지 않은 입력"
                },
                upload: {
                    deleteTip: "클릭시 삭제됩니다",
                    delete: "삭제",
                    preview: "미리보기",
                    continue: "계속하기"
                },
                table: {
                    emptyText: "데이터 없음",
                    confirmFilter: "확인",
                    resetFilter: "초기화",
                    clearFilter: "전체",
                    sumText: "합"
                },
                tree: {
                    emptyText: "데이터 없음"
                },
                transfer: {
                    noMatch: "맞는 데이터가 없습니다",
                    noData: "데이터 없음",
                    titles: ["리스트 1", "리스트 2"],
                    filterPlaceholder: " 입력하세요",
                    noCheckedFormat: "{total} 항목",
                    hasCheckedFormat: "{checked}/{total} 선택됨"
                },
                image: {
                    error: "FAILED"
                },
                pageHeader: {
                    title: "Back"
                },
                popconfirm: {
                    confirmButtonText: "Yes",
                    cancelButtonText: "No"
                }
            };
        c["default"].use(U["a"]);
        var Y = {
                en: Object(j["a"])({}, F),
                zh: Object(j["a"])({}, W),
                ko: Object(j["a"])({}, z)
            },
            K = new U["a"]({
                messages: Y
            }),
            q = K,
            G = n("ef55"),
            $ = n.n(G),
            H = n("953d"),
            J = n.n(H),
            Q = (n("a753"), n("8096"), n("14e1"), n("1f54"), n("2ee0"), n("2909")),
            Z = (n("3ca3"), n("ddb0"), n("99af"), n("8c4f")),
            V = [{
                path: "/",
                component: function() {
                    return n.e("chunk-b4c01bce").then(n.bind(null, "bb51"))
                },
                name: "menu.adminmenu",
                iconCls: "icon-font iconshuju",
                hidden: !1,
                meta: {
                    roles: ["COMPANY", "MASTER", "DISTRIBUTOR", "SUBDISTRIBUTOR", "STORE"]
                },
                children: [{
                    path: "/HomeDetail",
                    component: function() {
                        return n.e("chunk-34fcf33a").then(n.bind(null, "c48f"))
                    },
                    name: "menu.Home",
                    meta: {
                        roles: ["COMPANY", "MASTER", "DISTRIBUTOR", "SUBDISTRIBUTOR", "STORE"]
                    }
                }, {
                    path: "/adminList",
                    component: function() {
                        return n.e("chunk-9fd98634").then(n.bind(null, "894f"))
                    },
                    name: "menu.adminList",
                    meta: {
                        roles: ["COMPANY", "MASTER", "DISTRIBUTOR", "SUBDISTRIBUTOR"]
                    }
                }, {
                    path: "/agentMGT",
                    component: function() {
                        return n.e("chunk-378b0433").then(n.bind(null, "4c3d"))
                    },
                    name: "menu.agentMGT",
                    hidden: !0,
                    meta: {
                        roles: ["COMPANY", "MASTER", "DISTRIBUTOR", "SUBDISTRIBUTOR"]
                    }
                }, {
                    path: "/operationRecord",
                    component: function() {
                        return n.e("chunk-8c769122").then(n.bind(null, "4e54"))
                    },
                    name: "menu.operationRecord",
                    meta: {
                        roles: ["COMPANY", "MASTER", "DISTRIBUTOR", "SUBDISTRIBUTOR"]
                    }
                }, {
                    path: "/managementTree",
                    component: function() {
                        return n.e("chunk-0d0cc532").then(n.bind(null, "4a74"))
                    },
                    name: "menu.managementTree",
                    meta: {
                        roles: ["COMPANY", "MASTER", "DISTRIBUTOR", "SUBDISTRIBUTOR"]
                    }
                }, {
                    path: "/totalAccount",
                    component: function() {
                        return n.e("chunk-0fe78e49").then(n.bind(null, "e0cc"))
                    },
                    name: "menu.totalAccount",
                    meta: {
                        roles: ["COMPANY", "MASTER", "DISTRIBUTOR", "SUBDISTRIBUTOR", "STORE"]
                    }
                }, {
                    path: "/announcement",
                    component: function() {
                        return n.e("chunk-55263db2").then(n.bind(null, "fe55"))
                    },
                    name: "menu.announcement",
                    meta: {
                        roles: ["COMPANY"]
                    }
                }, {
                    path: "/bannerList",
                    component: function() {
                        return Promise.all([n.e("chunk-509a5a7b"), n.e("chunk-646f9dfd")]).then(
                            n.bind(null, "c260"))
                    },
                    name: "menu.BannerList",
                    meta: {
                        roles: ["COMPANY"]
                    }
                }, {
                    path: "/AgentMonthlyStatistics",
                    component: function() {
                        return n.e("chunk-29bad05a").then(n.bind(null, "659d"))
                    },
                    name: "menu.AgentMonthlyStatistics",
                    meta: {
                        roles: ["COMPANY"]
                    }
                }, {
                    path: "/agentFreezeList",
                    component: function() {
                        return n.e("chunk-5ce77258").then(n.bind(null, "d52d"))
                    },
                    name: "menu.AgentFreezeList",
                    meta: {
                        roles: ["COMPANY"]
                    }
                }]
            }, {
                path: "/",
                component: function() {
                    return n.e("chunk-b4c01bce").then(n.bind(null, "bb51"))
                },
                name: "menu.gameUser",
                iconCls: "icon-font iconshuju",
                hidden: !1,
                meta: {
                    roles: ["COMPANY", "STORE"]
                },
                children: [{
                    path: "/userManagement",
                    component: function() {
                        return Promise.all([n.e("chunk-509a5a7b"), n.e("chunk-b9ee89d2"), n.e(
                            "chunk-82499138")]).then(n.bind(null, "f26b"))
                    },
                    name: "menu.userManagement",
                    meta: {
                        roles: ["COMPANY", "STORE"]
                    }
                }, {
                    path: "/redeemRecord",
                    component: function() {
                        return n.e("chunk-33540560").then(n.bind(null, "c400"))
                    },
                    name: "menu.redeemRecord",
                    meta: {
                        roles: ["COMPANY", "STORE"]
                    }
                }, {
                    path: "/rechargeRecord",
                    component: function() {
                        return Promise.all([n.e("chunk-509a5a7b"), n.e("chunk-b9ee89d2"), n.e(
                            "chunk-151c11b3")]).then(n.bind(null, "70f6"))
                    },
                    name: "menu.rechargeRecord",
                    meta: {
                        roles: ["COMPANY", "STORE"]
                    }
                }, {
                    path: "/rewardRecord",
                    component: function() {
                        return n.e("chunk-cb33da04").then(n.bind(null, "8ec3"))
                    },
                    name: "menu.RewardRecord",
                    meta: {
                        roles: ["COMPANY", "STORE"]
                    }
                }, {
                    path: "/gameRecords",
                    component: function() {
                        return n.e("chunk-7186e0a7").then(n.bind(null, "3b88"))
                    },
                    name: "menu.gameRecords",
                    meta: {
                        roles: ["COMPANY", "STORE"]
                    }
                }, {
                    path: "/WagerBonusFAQ",
                    component: function() {
                        return n.e("chunk-373175e9").then(n.bind(null, "0d21"))
                    },
                    name: "menu.WagerBonusFAQ",
                    meta: {
                        roles: ["COMPANY", "STORE"]
                    }
                }]
            }],
            X = Z["a"].prototype.push;
        Z["a"].prototype.push = function(e) {
            return X.call(this, e).catch((function(e) {
                return e
            }))
        }, c["default"].use(Z["a"]);
        var ee = [{
                path: "/login",
                component: function() {
                    return n.e("chunk-9b051aa4").then(n.bind(null, "a55b"))
                },
                name: "",
                hidden: !0
            }, {
                path: "*",
                name: "404",
                hidden: !0,
                component: function() {
                    return n.e("chunk-69406bbe").then(n.bind(null, "8cdb"))
                }
            }],
            te = V;
        I.commit.apply(I, ["onChangeRoutes"].concat(Object(Q["a"])(te)));
        var ne = new Z["a"]({
                base: "/",
                mode: "history",
                routes: ee
            }),
            re = ne,
            ae = (n("1276"), !1);

        function oe(e, t) {
            var n = e.filter((function(e, n) {
                return !!ce(e, t) && (e.children && e.children.length && (e.children = oe(e
                    .children, t)), !0)
            }));
            return n
        }

        function ce(e, t) {
            return !e.meta || !e.meta.roles || t.some((function(t) {
                return e.meta.roles.indexOf(t) >= 0
            }))
        }
        re.beforeEach((function(e, t, n) {
            var r, a, o = d["a"].seek("user") ? JSON.parse(d["a"].get("user")) : "",
                c = null !== (r = o["role"]) && void 0 !== r ? r : "",
                i = null !== (a = d["a"].get("token")) && void 0 !== a ? a : "";
            if ("/login" === e.path) return n();
            if (!i) return n("/login");
            if (n(), !ae) {
                ae = !0;
                var s = oe(te, c.split(",")),
                    u = ee.concat(s);
                re.options.routes = u, re.addRoutes(u), re.push({
                    path: e.path
                })
            }
        })), c["default"].use(_.a, {
            locale: E.a
        }), c["default"].use(J.a), c["default"].use(y["a"]), c["default"].use($.a), c["default"].use(_.a, {
            I18n: function(e, t) {
                return q.t(e, t)
            }
        }), Object.keys(r).forEach((function(e) {
            c["default"].filter(e, r[e])
        })), new c["default"]({
            router: re,
            store: I,
            i18n: q,
            render: function(e) {
                return e(k)
            }
        }).$mount("#app")
    },
    "7c55": function(e, t, n) {
        "use strict";
        n("2395")
    },
    acc7: function(e, t, n) {},
    ed08: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "c", (function() {
            return getTodayTime
        })), __webpack_require__.d(__webpack_exports__, "a", (function() {
            return checkInputString
        })), __webpack_require__.d(__webpack_exports__, "e", (function() {
            return setCookie
        })), __webpack_require__.d(__webpack_exports__, "b", (function() {
            return getCookie
        })), __webpack_require__.d(__webpack_exports__, "d", (function() {
            return hasCookie
        }));
        var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ac1f"),
            core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
                core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__),
            core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("466d"),
            core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
                core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__),
            core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4d63"),
            core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__
            .n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_2__),
            core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("25f0"),
            core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
                core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__),
            core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("d3b7"),
            core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
                core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__),
            core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5319"),
            core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
                core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__),
            core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4d90"),
            core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
                core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_6__),
            core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("99af"),
            core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
                core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7__),
            core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("1276"),
            core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
                core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_8__),
            core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("2ca0"),
            core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__
            .n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_9__),
            core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("498a"),
            core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
                core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_10__);

        function isEmail(e) {
            return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(e)
        }

        function isPostcode(e) {
            return /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(e)
        }

        function isPhone(e) {
            return /^1[0-9]{10}$/.test(e)
        }

        function isUSPhone(e) {
            return /^(1\s?)?(\(\d{3}\)|\d{3})\s?-?\d{3}-?\s?\d{4}$/.test(e)
        }

        function isFixedphone(e) {
            return /^\d{3}-\d{8}|\d{4}-\d{7}$/g.test(e)
        }

        function isURL(e) {
            return /^http[s]?:\/\/.*/.test(e)
        }

        function isIdCard(e) {
            return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e)
        }

        function isMobile() {
            var e = navigator.userAgent.toLowerCase();
            return !!e.match(/AppleWebKit.*Mobile.*/)
        }

        function isWX() {
            var e = navigator.userAgent.toLowerCase();
            return -1 !== e.toLowerCase().indexOf("micromessenger")
        }

        function isIp(e) {
            var t = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;
            return !!(t.test(e) && RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256)
        }

        function isLicense(e) {
            return /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/.test(e)
        }

        function isThunderLink(e) {
            return /^thunderx?:\/\/[a-zA-Z\d]+=$/g.test(e)
        }

        function isIMEI(e) {
            return /^\d{15,17}$/.test(e)
        }

        function checkPwd(e) {
            var t = 0;
            return e.match(/[0-9]/) && t++, e.match(/[a-zA-Z]/) && t++, e.match(/[^0-9a-zA-Z]/) && t++, e
                .length < 6 && t--, t
        }

        function getRandomNumber(e, t) {
            var n = Math.floor(Math.random() * (t - e + 1)) + e;
            return n
        }

        function isCarNumber(e) {
            return /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/
                .test(e)
        }

        function isTrainNumber(e) {
            return /^(G|C|D|Z|S|T|K|D|X|P|L|\d{1})\d{1,4}$/.test(e)
        }

        function dateFormat(e, t) {
            var n, r = {
                "y+": t.getFullYear().toString(),
                "MM+": (t.getMonth() + 1).toString(),
                "dd+": t.getDate().toString(),
                "hh+": t.getHours().toString(),
                "mm+": t.getMinutes().toString(),
                "ss+": t.getSeconds().toString()
            };
            for (var a in r) n = new RegExp('(" + k + ")').exec(e), n && (e = e.replace(n[1], 1 === n[1]
                .length ? r[a] : r[a].padStart(n[1].length, "0")));
            return e
        }

        function getTodayTime(e) {
            var t = new Date(e),
                n = t.getFullYear(),
                r = t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1,
                a = t.getDate() < 10 ? "0" + t.getDate() : t.getDate();
            return n + "-" + r + "-" + a
        }

        function staArrNum(e) {
            for (var t = {}, n = 0; n < e.length; n++) {
                var r = e[n];
                t.hasOwnProperty(r) ? t[r] += 1 : t[r] = 1
            }
            return t
        }

        function getViewportOffset() {
            return window.innerWidth ? {
                w: window.innerWidth,
                h: window.innerHeight
            } : "BackCompat" === document.compatMode ? {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            } : {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        }

        function Debounce(e, t, n) {
            var r, a = t || 500;
            return function() {
                var t = this,
                    o = arguments;
                if (r && clearTimeout(r), n) {
                    var c = !r;
                    r = setTimeout((function() {
                        r = null
                    }), a), c && e.apply(t, o)
                } else r = setTimeout((function() {
                    e.apply(t, o)
                }), a)
            }
        }

        function Throttle(e, t) {
            var n, r, a = t || 500;
            return function() {
                var t = this,
                    o = arguments,
                    c = +new Date;
                n && c - n < a ? (clearTimeout(r), r = setTimeout((function() {
                    n = c, e.apply(t, o)
                }), a)) : (n = c, e.apply(this, o))
            }
        }

        function checkInputString(e, t, n) {
            t && (t.match(/^[\u4E00-\u9FA5A-Za-z0-9_]+?$/) ? n() : n(new Error(
                "special characters are not allowed")))
        }

        function checkDecimal(rule, value, callback) {
            if (value) {
                value += "";
                var negative = !!rule.isNegative && rule.isNegative,
                    maxValue = rule.maxValue ? rule.maxValue : 1e7,
                    minValue = 0,
                    decimal = rule.decimal ? rule.decimal : 7;
                0 === rule.decimal && (decimal = 0);
                var re = null;
                if (negative ? (minValue = "-" + maxValue, re = eval("/^(\\-)?(0|[1-9][0-9]*)(\\.\\d{0," +
                        decimal + "})?$/")) : re = eval("/^(([1-9]{1}\\d*)|(0{1}))(\\.\\d{0," + decimal +
                        "})?$/"), isNaN(value)) callback(new Error("请输⼊数字"));
                else if (value.match(re)) {
                    var num = parseFloat(value);
                    negative ? num > minValue && num < maxValue ? callback() : callback(new Error("超出有效输⼊范围")) :
                        num >= minValue && num < maxValue ? callback() : callback(new Error("超出有效输⼊范围"))
                } else callback(new Error("输⼊有误"))
            } else callback()
        }

        function setCookie(e, t, n) {
            document.cookie = "".concat(e, "=").concat(t, "; expires=").concat(n.toUTCString(), "; path=/")
        }

        function getCookie(e) {
            for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                var a = n[r];
                while (" " == a.charAt(0)) a = a.substring(1, a.length);
                if (0 == a.indexOf(t)) return a.substring(t.length, a.length)
            }
            return null
        }

        function deleteCookie(e) {
            document.cookie = e + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/"
        }

        function hasCookie(e) {
            return document.cookie.split(";").some((function(t) {
                return t.trim().startsWith(e + "=")
            }))
        }
    }
});