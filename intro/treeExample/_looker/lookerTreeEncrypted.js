! function(t, n) {
	"object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.collapsible_tree = n() : t.collapsible_tree = n()
}("undefined" != typeof self ? self : this, function() {
	return function(t) {
		var n = {};

		function e(r) {
			if (n[r]) return n[r].exports;
			var i = n[r] = {
				i: r,
				l: !1,
				exports: {}
			};
			return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
		}
		return e.m = t, e.c = n, e.d = function(t, n, r) {
			e.o(t, n) || Object.defineProperty(t, n, {
				configurable: !1,
				enumerable: !0,
				get: r
			})
		}, e.n = function(t) {
			var n = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return e.d(n, "a", n), n
		}, e.o = function(t, n) {
			return Object.prototype.hasOwnProperty.call(t, n)
		}, e.p = "", e(e.s = 504)
	}([function(t, n, e) {
		"use strict";
		e.d(n, "i", function() {
			return r
		}), e.d(n, "j", function() {
			return i
		}), e.d(n, "o", function() {
			return u
		}), e.d(n, "l", function() {
			return c
		}), e.d(n, "q", function() {
			return o
		}), e.d(n, "w", function() {
			return a
		}), e.d(n, "h", function() {
			return f
		}), e.d(n, "r", function() {
			return s
		}), e.d(n, "a", function() {
			return l
		}), e.d(n, "d", function() {
			return h
		}), e.d(n, "e", function() {
			return d
		}), e.d(n, "g", function() {
			return b
		}), e.d(n, "f", function() {
			return v
		}), e.d(n, "k", function() {
			return p
		}), e.d(n, "n", function() {
			return g
		}), e.d(n, "p", function() {
			return _
		}), e.d(n, "t", function() {
			return y
		}), e.d(n, "s", function() {
			return m
		}), e.d(n, "u", function() {
			return O
		}), e.d(n, "v", function() {
			return j
		}), n.b = function(t) {
			return t > 1 ? 0 : t < -1 ? u : Math.acos(t)
		}, n.c = function(t) {
			return t > 1 ? c : t < -1 ? -c : Math.asin(t)
		}, n.m = function(t) {
			return (t = y(t / 2)) * t
		};
		var r = 1e-6,
			i = 1e-12,
			u = Math.PI,
			c = u / 2,
			o = u / 4,
			a = 2 * u,
			f = 180 / u,
			s = u / 180,
			l = Math.abs,
			h = Math.atan,
			d = Math.atan2,
			b = Math.cos,
			v = Math.ceil,
			p = Math.exp,
			g = (Math.floor, Math.log),
			_ = Math.pow,
			y = Math.sin,
			m = Math.sign || function(t) {
				return t > 0 ? 1 : t < 0 ? -1 : 0
			},
			O = Math.sqrt,
			j = Math.tan
	}, function(t, n, e) {
		"use strict";
		var r = e(199);
		e.d(n, "b", function() {
			return r.a
		});
		var i = e(33);
		e.d(n, "c", function() {
			return i.a
		});
		var u = e(228);
		e.d(n, "f", function() {
			return u.a
		});
		var c = e(104);
		e.d(n, "g", function() {
			return c.a
		});
		var o = e(229);
		e.d(n, "h", function() {
			return o.a
		});
		var a = e(52);
		e.d(n, "i", function() {
			return a.a
		});
		var f = e(53);
		e.d(n, "j", function() {
			return f.a
		});
		var s = e(34);
		e.d(n, "a", function() {
			return s.a
		});
		var l = e(102);
		e.d(n, "k", function() {
			return l.a
		});
		var h = e(230);
		e.d(n, "l", function() {
			return h.a
		});
		var d = e(4);
		e.d(n, "m", function() {
			return d.b
		});
		var b = e(54);
		e.d(n, "n", function() {
			return b.a
		});
		var v = e(103);
		e.d(n, "o", function() {
			return v.a
		});
		var p = e(107);
		e.d(n, "p", function() {
			return p.b
		});
		var g = e(231);
		e.d(n, "q", function() {
			return g.a
		});
		var _ = e(232);
		e.d(n, "r", function() {
			return _.a
		});
		var y = e(55);
		e.d(n, "s", function() {
			return y.a
		});
		var m = e(56);
		e.d(n, "e", function() {
			return m.c
		}), e.d(n, "d", function() {
			return m.a
		})
	}, function(t, n, e) {
		"use strict";
		n.a = function t(n, e, u, c) {
			function o(t) {
				return n(t = new Date(+t)), t
			}
			o.floor = o;
			o.ceil = function(t) {
				return n(t = new Date(t - 1)), e(t, 1), n(t), t
			};
			o.round = function(t) {
				var n = o(t),
					e = o.ceil(t);
				return t - n < e - t ? n : e
			};
			o.offset = function(t, n) {
				return e(t = new Date(+t), null == n ? 1 : Math.floor(n)), t
			};
			o.range = function(t, r, i) {
				var u, c = [];
				if (t = o.ceil(t), i = null == i ? 1 : Math.floor(i), !(t < r && i > 0)) return c;
				do {
					c.push(u = new Date(+t)), e(t, i), n(t)
				} while (u < t && t < r);
				return c
			};
			o.filter = function(r) {
				return t(function(t) {
					if (t >= t)
						for (; n(t), !r(t);) t.setTime(t - 1)
				}, function(t, n) {
					if (t >= t)
						if (n < 0)
							for (; ++n <= 0;)
								for (; e(t, -1), !r(t););
						else
							for (; --n >= 0;)
								for (; e(t, 1), !r(t););
				})
			};
			u && (o.count = function(t, e) {
				return r.setTime(+t), i.setTime(+e), n(r), n(i), Math.floor(u(r, i))
			}, o.every = function(t) {
				return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? o.filter(c ? function(n) {
					return c(n) % t == 0
				} : function(n) {
					return o.count(0, n) % t == 0
				}) : o : null
			});
			return o
		};
		var r = new Date,
			i = new Date
	}, function(t, n, e) {
		"use strict";
		var r = e(90);
		e.d(n, "b", function() {
			return r.c
		}), e.d(n, "d", function() {
			return r.b
		}), e.d(n, "c", function() {
			return r.a
		});
		var i = e(17);
		e.d(n, "a", function() {
			return i.a
		});
		var u = e(91);
		e.d(n, "e", function() {
			return u.a
		});
		var c = e(175);
		e.d(n, "f", function() {
			return c.a
		});
		var o = e(176);
		e.d(n, "g", function() {
			return o.a
		});
		var a = e(93);
		e.d(n, "h", function() {
			return a.a
		});
		var f = e(95);
		e.d(n, "i", function() {
			return f.a
		});
		var s = e(177);
		e.d(n, "j", function() {
			return s.a
		});
		var l = e(180);
		e.d(n, "w", function() {
			return l.a
		});
		var h = e(181);
		e.d(n, "x", function() {
			return h.a
		});
		var d = e(99);
		e.d(n, "y", function() {
			return d.a
		});
		var b = e(182);
		e.d(n, "k", function() {
			return b.a
		});
		var v = e(183);
		e.d(n, "l", function() {
			return v.a
		});
		var p = e(184);
		e.d(n, "m", function() {
			return p.a
		});
		var g = e(185);
		e.d(n, "n", function() {
			return g.a
		});
		var _ = e(100);
		e.d(n, "o", function() {
			return _.a
		});
		var y = e(92);
		e.d(n, "p", function() {
			return y.a
		});
		var m = e(186);
		e.d(n, "q", function() {
			return m.a
		});
		var O = e(50);
		e.d(n, "r", function() {
			return O.a
		});
		var j = e(97);
		e.d(n, "s", function() {
			return j.a
		});
		var x = e(187);
		e.d(n, "t", function() {
			return x.a
		});
		var w = e(188);
		e.d(n, "u", function() {
			return w.a
		});
		var M = e(189);
		e.d(n, "v", function() {
			return M.a
		});
		var k = e(98);
		e.d(n, "B", function() {
			return k.a
		}), e.d(n, "z", function() {
			return k.b
		}), e.d(n, "A", function() {
			return k.c
		});
		var T = e(101);
		e.d(n, "C", function() {
			return T.a
		});
		var N = e(94);
		e.d(n, "D", function() {
			return N.a
		});
		var E = e(190);
		e.d(n, "E", function() {
			return E.a
		})
	}, function(t, n, e) {
		"use strict";
		e.d(n, "c", function() {
			return z
		}), n.a = P;
		var r = e(200),
			i = e(201),
			u = e(202),
			c = e(203),
			o = e(105),
			a = e(205),
			f = e(206),
			s = e(207),
			l = e(208),
			h = e(209),
			d = e(210),
			b = e(211),
			v = e(212),
			p = e(213),
			g = e(214),
			_ = e(215),
			y = e(107),
			m = e(216),
			O = e(217),
			j = e(218),
			x = e(219),
			w = e(220),
			M = e(221),
			k = e(222),
			T = e(223),
			N = e(224),
			E = e(225),
			S = e(226),
			A = e(56),
			C = e(227),
			z = [null];

		function P(t, n) {
			this._groups = t, this._parents = n
		}

		function q() {
			return new P([
				[document.documentElement]
			], z)
		}
		P.prototype = q.prototype = {
			constructor: P,
			select: r.a,
			selectAll: i.a,
			filter: u.a,
			data: c.a,
			enter: o.b,
			exit: a.a,
			merge: f.a,
			order: s.a,
			sort: l.a,
			call: h.a,
			nodes: d.a,
			node: b.a,
			size: v.a,
			empty: p.a,
			each: g.a,
			attr: _.a,
			style: y.a,
			property: m.a,
			classed: O.a,
			text: j.a,
			html: x.a,
			raise: w.a,
			lower: M.a,
			append: k.a,
			insert: T.a,
			remove: N.a,
			clone: E.a,
			datum: S.a,
			on: A.b,
			dispatch: C.a
		}, n.b = q
	}, function(t, n, e) {
		"use strict";
		var r = e(58);
		e.d(n, "a", function() {
			return r.a
		});
		var i = e(114);
		e.d(n, "b", function() {
			return i.a
		});
		var u = e(61);
		e.d(n, "c", function() {
			return u.b
		});
		var c = e(112);
		e.d(n, "d", function() {
			return c.a
		});
		var o = e(115);
		e.d(n, "g", function() {
			return o.a
		});
		var a = e(35);
		e.d(n, "m", function() {
			return a.a
		});
		var f = e(116);
		e.d(n, "n", function() {
			return f.a
		});
		var s = e(237);
		e.d(n, "r", function() {
			return s.a
		});
		var l = e(117);
		e.d(n, "s", function() {
			return l.a
		});
		var h = e(238);
		e.d(n, "t", function() {
			return h.a
		}), e.d(n, "u", function() {
			return h.b
		});
		var d = e(241);
		e.d(n, "v", function() {
			return d.a
		});
		var b = e(111);
		e.d(n, "o", function() {
			return b.a
		}), e.d(n, "p", function() {
			return b.b
		}), e.d(n, "q", function() {
			return b.c
		});
		var v = e(242);
		e.d(n, "j", function() {
			return v.a
		}), e.d(n, "k", function() {
			return v.b
		});
		var p = e(243);
		e.d(n, "l", function() {
			return p.a
		});
		var g = e(244);
		e.d(n, "h", function() {
			return g.a
		}), e.d(n, "i", function() {
			return g.b
		});
		var _ = e(245);
		e.d(n, "e", function() {
			return _.b
		}), e.d(n, "f", function() {
			return _.a
		});
		var y = e(246);
		e.d(n, "w", function() {
			return y.a
		})
	}, function(t, n, e) {
		"use strict";
		e.d(n, "c", function() {
			return a
		}), e.d(n, "d", function() {
			return f
		}), e.d(n, "b", function() {
			return h
		}), e.d(n, "a", function() {
			return d
		}), n.g = function(t, n) {
			var e = b(t, n);
			if (e.state > o) throw new Error("too late; already scheduled");
			return e
		}, n.h = function(t, n) {
			var e = b(t, n);
			if (e.state > f) throw new Error("too late; already started");
			return e
		}, n.f = b;
		var r = e(12),
			i = e(36),
			u = Object(r.a)("start", "end", "interrupt"),
			c = [],
			o = 0,
			a = 1,
			f = 2,
			s = 3,
			l = 4,
			h = 5,
			d = 6;

		function b(t, n) {
			var e = t.__transition;
			if (!e || !(e = e[n])) throw new Error("transition not found");
			return e
		}
		n.e = function(t, n, e, r, b, v) {
			var p = t.__transition;
			if (p) {
				if (e in p) return
			} else t.__transition = {};
			! function(t, n, e) {
				var r, u = t.__transition;

				function c(h) {
					var v, p, g, _;
					if (e.state !== a) return b();
					for (v in u)
						if ((_ = u[v]).name === e.name) {
							if (_.state === s) return Object(i.c)(c);
							_.state === l ? (_.state = d, _.timer.stop(), _.on.call("interrupt", t, t.__data__, _.index, _.group), delete u[v]) : +v < n && (_.state = d, _.timer.stop(), delete u[v])
						} if (Object(i.c)(function() {
							e.state === s && (e.state = l, e.timer.restart(o, e.delay, e.time), o(h))
						}), e.state = f, e.on.call("start", t, t.__data__, e.index, e.group), e.state === f) {
						for (e.state = s, r = new Array(g = e.tween.length), v = 0, p = -1; v < g; ++v)(_ = e.tween[v].value.call(t, t.__data__, e.index, e.group)) && (r[++p] = _);
						r.length = p + 1
					}
				}

				function o(n) {
					for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(b), e.state = h, 1), u = -1, c = r.length; ++u < c;) r[u].call(null, i);
					e.state === h && (e.on.call("end", t, t.__data__, e.index, e.group), b())
				}

				function b() {
					for (var r in e.state = d, e.timer.stop(), delete u[n], u) return;
					delete t.__transition
				}
				u[n] = e, e.timer = Object(i.d)(function(t) {
					e.state = a, e.timer.restart(c, e.delay, e.time), e.delay <= t && c(t - e.delay)
				}, 0, e.time)
			}(t, e, {
				name: n,
				index: r,
				group: b,
				on: u,
				tween: c,
				time: v.time,
				delay: v.delay,
				duration: v.duration,
				ease: v.ease,
				timer: null,
				state: o
			})
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(59);
		e.d(n, "a", function() {
			return r.e
		}), e.d(n, "f", function() {
			return r.g
		}), e.d(n, "d", function() {
			return r.f
		});
		var i = e(235);
		e.d(n, "e", function() {
			return i.a
		}), e.d(n, "c", function() {
			return i.b
		});
		var u = e(236);
		e.d(n, "b", function() {
			return u.a
		})
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return b(function() {
				return t
			})()
		}, n.b = b;
		var r = e(130),
			i = e(136),
			u = e(40),
			c = e(129),
			o = e(72),
			a = e(0),
			f = e(39),
			s = e(41),
			l = e(75),
			h = e(340),
			d = Object(s.b)({
				point: function(t, n) {
					this.stream.point(t * a.r, n * a.r)
				}
			});

		function b(t) {
			var n, e, b, v, p, g, _, y, m, O, j = 150,
				x = 480,
				w = 250,
				M = 0,
				k = 0,
				T = 0,
				N = 0,
				E = 0,
				S = null,
				A = r.a,
				C = null,
				z = o.a,
				P = .5,
				q = Object(h.a)(L, P);

			function R(t) {
				return [(t = p(t[0] * a.r, t[1] * a.r))[0] * j + e, b - t[1] * j]
			}

			function D(t) {
				return (t = p.invert((t[0] - e) / j, (b - t[1]) / j)) && [t[0] * a.h, t[1] * a.h]
			}

			function L(t, r) {
				return [(t = n(t, r))[0] * j + e, b - t[1] * j]
			}

			function U() {
				p = Object(c.a)(v = Object(f.b)(T, N, E), n);
				var t = n(M, k);
				return e = x - t[0] * j, b = w + t[1] * j, F()
			}

			function F() {
				return m = O = null, R
			}
			return R.stream = function(t) {
					return m && O === t ? m : m = d(function(t) {
						return Object(s.b)({
							point: function(n, e) {
								var r = t(n, e);
								return this.stream.point(r[0], r[1])
							}
						})
					}(v)(A(q(z(O = t)))))
				}, R.preclip = function(t) {
					return arguments.length ? (A = t, S = void 0, F()) : A
				}, R.postclip = function(t) {
					return arguments.length ? (z = t, C = g = _ = y = null, F()) : z
				}, R.clipAngle = function(t) {
					return arguments.length ? (A = +t ? Object(i.a)(S = t * a.r) : (S = null, r.a), F()) : S * a.h
				}, R.clipExtent = function(t) {
					return arguments.length ? (z = null == t ? (C = g = _ = y = null, o.a) : Object(u.a)(C = +t[0][0], g = +t[0][1], _ = +t[1][0], y = +t[1][1]), F()) : null == C ? null : [
						[C, g],
						[_, y]
					]
				}, R.scale = function(t) {
					return arguments.length ? (j = +t, U()) : j
				}, R.translate = function(t) {
					return arguments.length ? (x = +t[0], w = +t[1], U()) : [x, w]
				}, R.center = function(t) {
					return arguments.length ? (M = t[0] % 360 * a.r, k = t[1] % 360 * a.r, U()) : [M * a.h, k * a.h]
				}, R.rotate = function(t) {
					return arguments.length ? (T = t[0] % 360 * a.r, N = t[1] % 360 * a.r, E = t.length > 2 ? t[2] % 360 * a.r : 0, U()) : [T * a.h, N * a.h, E * a.h]
				}, R.precision = function(t) {
					return arguments.length ? (q = Object(h.a)(L, P = t * t), F()) : Object(a.u)(P)
				}, R.fitExtent = function(t, n) {
					return Object(l.a)(R, t, n)
				}, R.fitSize = function(t, n) {
					return Object(l.c)(R, t, n)
				}, R.fitWidth = function(t, n) {
					return Object(l.d)(R, t, n)
				}, R.fitHeight = function(t, n) {
					return Object(l.b)(R, t, n)
				},
				function() {
					return n = t.apply(this, arguments), R.invert = n.invert && D, U()
				}
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "d", function() {
			return r
		}), e.d(n, "c", function() {
			return i
		}), e.d(n, "b", function() {
			return u
		}), e.d(n, "a", function() {
			return c
		}), e.d(n, "e", function() {
			return o
		});
		var r = 1e3,
			i = 6e4,
			u = 36e5,
			c = 864e5,
			o = 6048e5
	}, function(t, n, e) {
		"use strict";
		n.a = j, n.b = x, n.c = function() {
			return ++O
		};
		var r = e(1),
			i = e(252),
			u = e(253),
			c = e(254),
			o = e(255),
			a = e(256),
			f = e(257),
			s = e(258),
			l = e(259),
			h = e(260),
			d = e(261),
			b = e(262),
			v = e(263),
			p = e(264),
			g = e(265),
			_ = e(266),
			y = e(267),
			m = e(37),
			O = 0;

		function j(t, n, e, r) {
			this._groups = t, this._parents = n, this._name = e, this._id = r
		}

		function x(t) {
			return Object(r.m)().transition(t)
		}
		var w = r.m.prototype;
		j.prototype = x.prototype = {
			constructor: j,
			select: d.a,
			selectAll: b.a,
			filter: f.a,
			merge: s.a,
			selection: v.a,
			transition: y.a,
			call: w.call,
			nodes: w.nodes,
			node: w.node,
			size: w.size,
			empty: w.empty,
			each: w.each,
			on: l.a,
			attr: i.a,
			attrTween: u.a,
			style: p.a,
			styleTween: g.a,
			text: _.a,
			remove: h.a,
			tween: m.a,
			delay: c.a,
			duration: o.a,
			ease: a.a
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function() {}
	}, function(t, n, e) {
		"use strict";
		var r = e(197);
		e.d(n, "a", function() {
			return r.a
		})
	}, function(t, n, e) {
		"use strict";
		var r = e(287);
		e.d(n, "a", function() {
			return r.a
		})
	}, function(t, n, e) {
		"use strict";

		function r(t, n) {
			t && u.hasOwnProperty(t.type) && u[t.type](t, n)
		}
		var i = {
				Feature: function(t, n) {
					r(t.geometry, n)
				},
				FeatureCollection: function(t, n) {
					for (var e = t.features, i = -1, u = e.length; ++i < u;) r(e[i].geometry, n)
				}
			},
			u = {
				Sphere: function(t, n) {
					n.sphere()
				},
				Point: function(t, n) {
					t = t.coordinates, n.point(t[0], t[1], t[2])
				},
				MultiPoint: function(t, n) {
					for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) t = e[r], n.point(t[0], t[1], t[2])
				},
				LineString: function(t, n) {
					c(t.coordinates, n, 0)
				},
				MultiLineString: function(t, n) {
					for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) c(e[r], n, 0)
				},
				Polygon: function(t, n) {
					o(t.coordinates, n)
				},
				MultiPolygon: function(t, n) {
					for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) o(e[r], n)
				},
				GeometryCollection: function(t, n) {
					for (var e = t.geometries, i = -1, u = e.length; ++i < u;) r(e[i], n)
				}
			};

		function c(t, n, e) {
			var r, i = -1,
				u = t.length - e;
			for (n.lineStart(); ++i < u;) r = t[i], n.point(r[0], r[1], r[2]);
			n.lineEnd()
		}

		function o(t, n) {
			var e = -1,
				r = t.length;
			for (n.polygonStart(); ++e < r;) c(t[e], n, 1);
			n.polygonEnd()
		}
		n.a = function(t, n) {
			t && i.hasOwnProperty(t.type) ? i[t.type](t, n) : r(t, n)
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "a", function() {
			return i
		}), e.d(n, "b", function() {
			return u
		});
		var r = Array.prototype,
			i = r.map,
			u = r.slice
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return function() {
				return t
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return function() {
				return t
			}
		}
	}, function(t, n, e) {
		"use strict";

		function r() {
			this.reset()
		}
		n.a = function() {
			return new r
		}, r.prototype = {
			constructor: r,
			reset: function() {
				this.s = this.t = 0
			},
			add: function(t) {
				u(i, t, this.t), u(this, i.s, this.s), this.s ? this.t += i.t : this.s = i.t
			},
			valueOf: function() {
				return this.s
			}
		};
		var i = new r;

		function u(t, n, e) {
			var r = t.s = n + e,
				i = r - n,
				u = r - i;
			t.t = n - u + (e - i)
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function() {
			return Math.random()
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(288);
		e.d(n, "d", function() {
			return r.a
		});
		var i = e(289);
		e.d(n, "e", function() {
			return i.a
		});
		var u = e(64);
		e.d(n, "c", function() {
			return u.a
		});
		var c = e(290);
		e.d(n, "b", function() {
			return c.a
		});
		var o = e(291);
		e.d(n, "f", function() {
			return o.a
		});
		var a = e(292);
		e.d(n, "a", function() {
			return a.a
		})
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return null === t ? NaN : +t
		}
	}, function(t, n, e) {
		"use strict";
		n.c = function(t, n) {
			var e = n - t;
			return e ? i(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Object(r.a)(isNaN(t) ? n : t)
		}, n.b = function(t) {
			return 1 == (t = +t) ? u : function(n, e) {
				return e - n ? function(t, n, e) {
					return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
						function(r) {
							return Math.pow(t + r * n, e)
						}
				}(n, e, t) : Object(r.a)(isNaN(n) ? e : n)
			}
		}, n.a = u;
		var r = e(113);

		function i(t, n) {
			return function(e) {
				return t + e * n
			}
		}

		function u(t, n) {
			var e = n - t;
			return e ? i(t, e) : Object(r.a)(isNaN(t) ? n : t)
		}
	}, function(t, n, e) {
		"use strict";
		n.g = function(t) {
			return [Object(r.e)(t[1], t[0]), Object(r.c)(t[2])]
		}, n.a = function(t) {
			var n = t[0],
				e = t[1],
				i = Object(r.g)(e);
			return [i * Object(r.g)(n), i * Object(r.t)(n), Object(r.t)(e)]
		}, n.d = function(t, n) {
			return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
		}, n.c = function(t, n) {
			return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
		}, n.b = function(t, n) {
			t[0] += n[0], t[1] += n[1], t[2] += n[2]
		}, n.f = function(t, n) {
			return [t[0] * n, t[1] * n, t[2] * n]
		}, n.e = function(t) {
			var n = Object(r.u)(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
			t[0] /= n, t[1] /= n, t[2] /= n
		};
		var r = e(0)
	}, function(t, n, e) {
		"use strict";
		n.b = function(t) {
			return function(n, e) {
				var i = Object(r.g)(n),
					u = Object(r.g)(e),
					c = t(i * u);
				return [c * u * Object(r.t)(n), c * Object(r.t)(e)]
			}
		}, n.a = function(t) {
			return function(n, e) {
				var i = Object(r.u)(n * n + e * e),
					u = t(i),
					c = Object(r.t)(u),
					o = Object(r.g)(u);
				return [Object(r.e)(n * c, i * o), Object(r.c)(i && e * c / i)]
			}
		};
		var r = e(0)
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n, e, r, i) {
			for (var u, c = t.children, o = -1, a = c.length, f = t.value && (r - n) / t.value; ++o < a;)(u = c[o]).y0 = e, u.y1 = i, u.x0 = n, u.x1 = n += u.value * f
		}
	}, function(t, n, e) {
		"use strict";
		n.b = o, n.a = function t() {
			var n = Object(u.b)(u.c, i.m);
			n.copy = function() {
				return Object(u.a)(n, t())
			};
			return o(n)
		};
		var r = e(3),
			i = e(5),
			u = e(44),
			c = e(400);

		function o(t) {
			var n = t.domain;
			return t.ticks = function(t) {
				var e = n();
				return Object(r.B)(e[0], e[e.length - 1], null == t ? 10 : t)
			}, t.tickFormat = function(t, e) {
				return Object(c.a)(n(), t, e)
			}, t.nice = function(e) {
				null == e && (e = 10);
				var i, u = n(),
					c = 0,
					o = u.length - 1,
					a = u[c],
					f = u[o];
				return f < a && (i = a, a = f, f = i, i = c, c = o, o = i), (i = Object(r.z)(a, f, e)) > 0 ? (a = Math.floor(a / i) * i, f = Math.ceil(f / i) * i, i = Object(r.z)(a, f, e)) : i < 0 && (a = Math.ceil(a * i) / i, f = Math.floor(f * i) / i, i = Object(r.z)(a, f, e)), i > 0 ? (u[c] = Math.floor(a / i) * i, u[o] = Math.ceil(f / i) * i, n(u)) : i < 0 && (u[c] = Math.ceil(a * i) / i, u[o] = Math.floor(f * i) / i, n(u)), t
			}, t
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return t.match(/.{6}/g).map(function(t) {
				return "#" + t
			})
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "a", function() {
			return r
		}), e.d(n, "d", function() {
			return i
		}), e.d(n, "e", function() {
			return u
		}), e.d(n, "h", function() {
			return c
		}), e.d(n, "i", function() {
			return o
		}), e.d(n, "k", function() {
			return a
		}), e.d(n, "l", function() {
			return f
		}), e.d(n, "f", function() {
			return s
		}), e.d(n, "j", function() {
			return l
		}), e.d(n, "g", function() {
			return h
		}), e.d(n, "m", function() {
			return d
		}), n.b = function(t) {
			return t > 1 ? 0 : t < -1 ? l : Math.acos(t)
		}, n.c = function(t) {
			return t >= 1 ? h : t <= -1 ? -h : Math.asin(t)
		};
		var r = Math.abs,
			i = Math.atan2,
			u = Math.cos,
			c = Math.max,
			o = Math.min,
			a = Math.sin,
			f = Math.sqrt,
			s = 1e-12,
			l = Math.PI,
			h = l / 2,
			d = 2 * l
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			if ((i = t.length) > 1)
				for (var e, r, i, u = 1, c = t[n[0]], o = c.length; u < i; ++u)
					for (r = c, c = t[n[u]], e = 0; e < o; ++e) c[e][1] += c[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1]
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			for (var n = t.length, e = new Array(n); --n >= 0;) e[n] = n;
			return e
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "f", function() {
			return h
		}), e.d(n, "g", function() {
			return d
		}), e.d(n, "a", function() {
			return r
		}), e.d(n, "b", function() {
			return i
		}), e.d(n, "c", function() {
			return u
		}), e.d(n, "e", function() {
			return c
		}), n.d = v;
		var r, i, u, c, o = e(458),
			a = e(169),
			f = e(170),
			s = e(89),
			l = e(88),
			h = 1e-6,
			d = 1e-12;

		function b(t, n) {
			return n[1] - t[1] || n[0] - t[0]
		}

		function v(t, n) {
			var e, h, d, v = t.sort(b).pop();
			for (c = [], i = new Array(t.length), r = new l.b, u = new l.b;;)
				if (d = f.c, v && (!d || v[1] < d.y || v[1] === d.y && v[0] < d.x)) v[0] === e && v[1] === h || (Object(o.a)(v), e = v[0], h = v[1]), v = t.pop();
				else {
					if (!d) break;
					Object(o.b)(d.arc)
				} if (Object(a.d)(), n) {
				var p = +n[0][0],
					g = +n[0][1],
					_ = +n[1][0],
					y = +n[1][1];
				Object(s.a)(p, g, _, y), Object(a.b)(p, g, _, y)
			}
			this.edges = c, this.cells = i, r = u = c = i = null
		}
		v.prototype = {
			constructor: v,
			polygons: function() {
				var t = this.edges;
				return this.cells.map(function(n) {
					var e = n.halfedges.map(function(e) {
						return Object(a.a)(n, t[e])
					});
					return e.data = n.site.data, e
				})
			},
			triangles: function() {
				var t = [],
					n = this.edges;
				return this.cells.forEach(function(e, r) {
					if (u = (i = e.halfedges).length)
						for (var i, u, c, o, a, f, s = e.site, l = -1, h = n[i[u - 1]], d = h.left === s ? h.right : h.left; ++l < u;) c = d, d = (h = n[i[l]]).left === s ? h.right : h.left, c && d && r < c.index && r < d.index && (a = c, f = d, ((o = s)[0] - f[0]) * (a[1] - o[1]) - (o[0] - a[0]) * (f[1] - o[1]) < 0) && t.push([s.data, c.data, d.data])
				}), t
			},
			links: function() {
				return this.edges.filter(function(t) {
					return t.right
				}).map(function(t) {
					return {
						source: t.left.data,
						target: t.right.data
					}
				})
			},
			find: function(t, n, e) {
				for (var r, i, u = this, c = u._found || 0, o = u.cells.length; !(i = u.cells[c]);)
					if (++c >= o) return null;
				var a = t - i.site[0],
					f = n - i.site[1],
					s = a * a + f * f;
				do {
					i = u.cells[r = c], c = null, i.halfedges.forEach(function(e) {
						var r = u.edges[e],
							o = r.left;
						if (o !== i.site && o || (o = r.right)) {
							var a = t - o[0],
								f = n - o[1],
								l = a * a + f * f;
							l < s && (s = l, c = o.index)
						}
					})
				} while (null !== c);
				return u._found = r, null == e || s <= e * e ? i.site : null
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(52),
			i = e(53);
		n.a = function(t) {
			var n = Object(r.a)(t);
			return (n.local ? function(t) {
				return function() {
					return this.ownerDocument.createElementNS(t.space, t.local)
				}
			} : function(t) {
				return function() {
					var n = this.ownerDocument,
						e = this.namespaceURI;
					return e === i.b && n.documentElement.namespaceURI === i.b ? n.createElement(t) : n.createElementNS(e, t)
				}
			})(n)
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			var e = t.ownerSVGElement || t;
			if (e.createSVGPoint) {
				var r = e.createSVGPoint();
				return r.x = n.clientX, r.y = n.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
			}
			var i = t.getBoundingClientRect();
			return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			return n -= t = +t,
				function(e) {
					return t + n * e
				}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(63);
		e.d(n, "b", function() {
			return r.b
		}), e.d(n, "d", function() {
			return r.c
		}), e.d(n, "e", function() {
			return r.d
		});
		var i = e(249);
		e.d(n, "c", function() {
			return i.a
		});
		var u = e(250);
		e.d(n, "a", function() {
			return u.a
		})
	}, function(t, n, e) {
		"use strict";
		n.b = function(t, n, e) {
			var i = t._id;
			return t.each(function() {
					var t = Object(r.h)(this, i);
					(t.value || (t.value = {}))[n] = e.apply(this, arguments)
				}),
				function(t) {
					return Object(r.f)(t, i).value[n]
				}
		};
		var r = e(6);
		n.a = function(t, n) {
			var e = this._id;
			if (t += "", arguments.length < 2) {
				for (var i, u = Object(r.f)(this.node(), e).tween, c = 0, o = u.length; c < o; ++c)
					if ((i = u[c]).name === t) return i.value;
				return null
			}
			return this.each((null == n ? function(t, n) {
				var e, i;
				return function() {
					var u = Object(r.h)(this, t),
						c = u.tween;
					if (c !== e)
						for (var o = 0, a = (i = e = c).length; o < a; ++o)
							if (i[o].name === n) {
								(i = i.slice()).splice(o, 1);
								break
							} u.tween = i
				}
			} : function(t, n, e) {
				var i, u;
				if ("function" != typeof e) throw new Error;
				return function() {
					var c = Object(r.h)(this, t),
						o = c.tween;
					if (o !== i) {
						u = (i = o).slice();
						for (var a = {
								name: n,
								value: e
							}, f = 0, s = u.length; f < s; ++f)
							if (u[f].name === n) {
								u[f] = a;
								break
							} f === s && u.push(a)
					}
					c.tween = u
				}
			})(e, t, n))
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(71);
		n.a = function(t) {
			return (t = Object(r.a)(Math.abs(t))) ? t[1] : NaN
		}
	}, function(t, n, e) {
		"use strict";
		n.b = c;
		var r = e(129),
			i = e(0);

		function u(t, n) {
			return [t > i.o ? t - i.w : t < -i.o ? t + i.w : t, n]
		}

		function c(t, n, e) {
			return (t %= i.w) ? n || e ? Object(r.a)(a(t), f(n, e)) : a(t) : n || e ? f(n, e) : u
		}

		function o(t) {
			return function(n, e) {
				return [(n += t) > i.o ? n - i.w : n < -i.o ? n + i.w : n, e]
			}
		}

		function a(t) {
			var n = o(t);
			return n.invert = o(-t), n
		}

		function f(t, n) {
			var e = Object(i.g)(t),
				r = Object(i.t)(t),
				u = Object(i.g)(n),
				c = Object(i.t)(n);

			function o(t, n) {
				var o = Object(i.g)(n),
					a = Object(i.g)(t) * o,
					f = Object(i.t)(t) * o,
					s = Object(i.t)(n),
					l = s * e + a * r;
				return [Object(i.e)(f * u - l * c, a * e - s * r), Object(i.c)(l * u + f * c)]
			}
			return o.invert = function(t, n) {
				var o = Object(i.g)(n),
					a = Object(i.g)(t) * o,
					f = Object(i.t)(t) * o,
					s = Object(i.t)(n),
					l = s * u - f * c;
				return [Object(i.e)(f * u + s * c, a * e + l * r), Object(i.c)(l * e - a * r)]
			}, o
		}
		u.invert = u, n.a = function(t) {
			function n(n) {
				return (n = t(n[0] * i.r, n[1] * i.r))[0] *= i.h, n[1] *= i.h, n
			}
			return t = c(t[0] * i.r, t[1] * i.r, t.length > 2 ? t[2] * i.r : 0), n.invert = function(n) {
				return (n = t.invert(n[0] * i.r, n[1] * i.r))[0] *= i.h, n[1] *= i.h, n
			}, n
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n, e, s) {
			function l(r, i) {
				return t <= r && r <= e && n <= i && i <= s
			}

			function h(r, i, u, c) {
				var o = 0,
					a = 0;
				if (null == r || (o = d(r, u)) !== (a = d(i, u)) || v(r, i) < 0 ^ u > 0)
					do {
						c.point(0 === o || 3 === o ? t : e, o > 1 ? s : n)
					} while ((o = (o + u + 4) % 4) !== a);
				else c.point(i[0], i[1])
			}

			function d(i, u) {
				return Object(r.a)(i[0] - t) < r.i ? u > 0 ? 0 : 3 : Object(r.a)(i[0] - e) < r.i ? u > 0 ? 2 : 1 : Object(r.a)(i[1] - n) < r.i ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2
			}

			function b(t, n) {
				return v(t.x, n.x)
			}

			function v(t, n) {
				var e = d(t, 1),
					r = d(n, 1);
				return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
			}
			return function(r) {
				var d, v, p, g, _, y, m, O, j, x, w, M = r,
					k = Object(i.a)(),
					T = {
						point: N,
						lineStart: function() {
							T.point = E, v && v.push(p = []);
							x = !0, j = !1, m = O = NaN
						},
						lineEnd: function() {
							d && (E(g, _), y && j && k.rejoin(), d.push(k.result()));
							T.point = N, j && M.lineEnd()
						},
						polygonStart: function() {
							M = k, d = [], v = [], w = !0
						},
						polygonEnd: function() {
							var n = function() {
									for (var n = 0, e = 0, r = v.length; e < r; ++e)
										for (var i, u, c = v[e], o = 1, a = c.length, f = c[0], l = f[0], h = f[1]; o < a; ++o) i = l, u = h, f = c[o], l = f[0], h = f[1], u <= s ? h > s && (l - i) * (s - u) > (h - u) * (t - i) && ++n : h <= s && (l - i) * (s - u) < (h - u) * (t - i) && --n;
									return n
								}(),
								e = w && n,
								i = (d = Object(o.n)(d)).length;
							(e || i) && (r.polygonStart(), e && (r.lineStart(), h(null, null, 1, r), r.lineEnd()), i && Object(c.a)(d, b, n, h, r), r.polygonEnd());
							M = r, d = v = p = null
						}
					};

				function N(t, n) {
					l(t, n) && M.point(t, n)
				}

				function E(r, i) {
					var c = l(r, i);
					if (v && p.push([r, i]), x) g = r, _ = i, y = c, x = !1, c && (M.lineStart(), M.point(r, i));
					else if (c && j) M.point(r, i);
					else {
						var o = [m = Math.max(f, Math.min(a, m)), O = Math.max(f, Math.min(a, O))],
							h = [r = Math.max(f, Math.min(a, r)), i = Math.max(f, Math.min(a, i))];
						Object(u.a)(o, h, t, n, e, s) ? (j || (M.lineStart(), M.point(o[0], o[1])), M.point(h[0], h[1]), c || M.lineEnd(), w = !1) : c && (M.lineStart(), M.point(r, i), w = !1)
					}
					m = r, O = i, j = c
				}
				return T
			}
		};
		var r = e(0),
			i = e(132),
			u = e(330),
			c = e(133),
			o = e(3),
			a = 1e9,
			f = -a
	}, function(t, n, e) {
		"use strict";

		function r(t) {
			return function(n) {
				var e = new i;
				for (var r in t) e[r] = t[r];
				return e.stream = n, e
			}
		}

		function i() {}
		n.b = r, n.a = function(t) {
			return {
				stream: r(t)
			}
		}, i.prototype = {
			constructor: i,
			point: function(t, n) {
				this.stream.point(t, n)
			},
			sphere: function() {
				this.stream.sphere()
			},
			lineStart: function() {
				this.stream.lineStart()
			},
			lineEnd: function() {
				this.stream.lineEnd()
			},
			polygonStart: function() {
				this.stream.polygonStart()
			},
			polygonEnd: function() {
				this.stream.polygonEnd()
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n, e, r, i) {
			for (var u, c = t.children, o = -1, a = c.length, f = t.value && (i - e) / t.value; ++o < a;)(u = c[o]).x0 = n, u.x1 = r, u.y0 = e, u.y1 = e += u.value * f
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(80);
		n.a = function(t, n) {
			return function(e, i) {
				var u = Object(r.a)(e).mimeType(t).response(n);
				if (null != i) {
					if ("function" != typeof i) throw new Error("invalid callback: " + i);
					return u.get(i)
				}
				return u
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.c = f, n.a = function(t, n) {
			return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
		}, n.b = function(t, n) {
			var e, r, c, h = a,
				d = a,
				b = i.a,
				v = !1;

			function p() {
				return e = Math.min(h.length, d.length) > 2 ? l : s, r = c = null, g
			}

			function g(n) {
				return (r || (r = e(h, d, v ? function(t) {
					return function(n, e) {
						var r = t(n = +n, e = +e);
						return function(t) {
							return t <= n ? 0 : t >= e ? 1 : r(t)
						}
					}
				}(t) : t, b)))(+n)
			}
			return g.invert = function(t) {
				return (c || (c = e(d, h, f, v ? function(t) {
					return function(n, e) {
						var r = t(n = +n, e = +e);
						return function(t) {
							return t <= 0 ? n : t >= 1 ? e : r(t)
						}
					}
				}(n) : n)))(+t)
			}, g.domain = function(t) {
				return arguments.length ? (h = u.a.call(t, o.a), p()) : h.slice()
			}, g.range = function(t) {
				return arguments.length ? (d = u.b.call(t), p()) : d.slice()
			}, g.rangeRound = function(t) {
				return d = u.b.call(t), b = i.r, p()
			}, g.clamp = function(t) {
				return arguments.length ? (v = !!t, p()) : v
			}, g.interpolate = function(t) {
				return arguments.length ? (b = t, p()) : b
			}, p()
		};
		var r = e(3),
			i = e(5),
			u = e(15),
			c = e(81),
			o = e(150),
			a = [0, 1];

		function f(t, n) {
			return (n -= t = +t) ? function(e) {
				return (e - t) / n
			} : Object(c.a)(n)
		}

		function s(t, n, e, r) {
			var i = t[0],
				u = t[1],
				c = n[0],
				o = n[1];
			return u < i ? (i = e(u, i), c = r(o, c)) : (i = e(i, u), c = r(c, o)),
				function(t) {
					return c(i(t))
				}
		}

		function l(t, n, e, i) {
			var u = Math.min(t.length, n.length) - 1,
				c = new Array(u),
				o = new Array(u),
				a = -1;
			for (t[u] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < u;) c[a] = e(t[a], t[a + 1]), o[a] = i(n[a], n[a + 1]);
			return function(n) {
				var e = Object(r.b)(t, n, 1, u) - 1;
				return o[e](c[e](n))
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(2);
		e.d(n, "g", function() {
			return r.a
		});
		var i = e(406);
		e.d(n, "h", function() {
			return i.a
		}), e.d(n, "i", function() {
			return i.b
		}), e.d(n, "L", function() {
			return i.a
		}), e.d(n, "M", function() {
			return i.b
		});
		var u = e(407);
		e.d(n, "r", function() {
			return u.a
		}), e.d(n, "s", function() {
			return u.b
		}), e.d(n, "V", function() {
			return u.a
		}), e.d(n, "W", function() {
			return u.b
		});
		var c = e(408);
		e.d(n, "j", function() {
			return c.a
		}), e.d(n, "k", function() {
			return c.b
		});
		var o = e(409);
		e.d(n, "e", function() {
			return o.a
		}), e.d(n, "f", function() {
			return o.b
		});
		var a = e(410);
		e.d(n, "a", function() {
			return a.b
		}), e.d(n, "b", function() {
			return a.a
		});
		var f = e(411);
		e.d(n, "B", function() {
			return f.g
		}), e.d(n, "C", function() {
			return f.h
		}), e.d(n, "t", function() {
			return f.g
		}), e.d(n, "u", function() {
			return f.h
		}), e.d(n, "l", function() {
			return f.c
		}), e.d(n, "m", function() {
			return f.d
		}), e.d(n, "x", function() {
			return f.k
		}), e.d(n, "y", function() {
			return f.l
		}), e.d(n, "z", function() {
			return f.m
		}), e.d(n, "A", function() {
			return f.n
		}), e.d(n, "v", function() {
			return f.i
		}), e.d(n, "w", function() {
			return f.j
		}), e.d(n, "c", function() {
			return f.a
		}), e.d(n, "d", function() {
			return f.b
		}), e.d(n, "p", function() {
			return f.e
		}), e.d(n, "q", function() {
			return f.f
		});
		var s = e(412);
		e.d(n, "n", function() {
			return s.a
		}), e.d(n, "o", function() {
			return s.b
		});
		var l = e(413);
		e.d(n, "D", function() {
			return l.a
		}), e.d(n, "E", function() {
			return l.b
		});
		var h = e(414);
		e.d(n, "N", function() {
			return h.a
		}), e.d(n, "O", function() {
			return h.b
		});
		var d = e(415);
		e.d(n, "J", function() {
			return d.a
		}), e.d(n, "K", function() {
			return d.b
		});
		var b = e(416);
		e.d(n, "F", function() {
			return b.a
		}), e.d(n, "G", function() {
			return b.b
		});
		var v = e(417);
		e.d(n, "_5", function() {
			return v.g
		}), e.d(n, "_6", function() {
			return v.h
		}), e.d(n, "X", function() {
			return v.g
		}), e.d(n, "Y", function() {
			return v.h
		}), e.d(n, "P", function() {
			return v.c
		}), e.d(n, "Q", function() {
			return v.d
		}), e.d(n, "_1", function() {
			return v.k
		}), e.d(n, "_2", function() {
			return v.l
		}), e.d(n, "_3", function() {
			return v.m
		}), e.d(n, "_4", function() {
			return v.n
		}), e.d(n, "Z", function() {
			return v.i
		}), e.d(n, "_0", function() {
			return v.j
		}), e.d(n, "H", function() {
			return v.a
		}), e.d(n, "I", function() {
			return v.b
		}), e.d(n, "T", function() {
			return v.e
		}), e.d(n, "U", function() {
			return v.f
		});
		var p = e(418);
		e.d(n, "R", function() {
			return p.a
		}), e.d(n, "S", function() {
			return p.b
		});
		var g = e(419);
		e.d(n, "_7", function() {
			return g.a
		}), e.d(n, "_8", function() {
			return g.b
		})
	}, function(t, n, e) {
		"use strict";

		function r(t) {
			this._context = t
		}
		r.prototype = {
			areaStart: function() {
				this._line = 0
			},
			areaEnd: function() {
				this._line = NaN
			},
			lineStart: function() {
				this._point = 0
			},
			lineEnd: function() {
				(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
			},
			point: function(t, n) {
				switch (t = +t, n = +n, this._point) {
					case 0:
						this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
						break;
					case 1:
						this._point = 2;
					default:
						this._context.lineTo(t, n)
				}
			}
		}, n.a = function(t) {
			return new r(t)
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function() {}
	}, function(t, n, e) {
		"use strict";

		function r(t, n, e) {
			t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
		}

		function i(t) {
			this._context = t
		}
		n.c = r, n.a = i, i.prototype = {
			areaStart: function() {
				this._line = 0
			},
			areaEnd: function() {
				this._line = NaN
			},
			lineStart: function() {
				this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
			},
			lineEnd: function() {
				switch (this._point) {
					case 3:
						r(this, this._x1, this._y1);
					case 2:
						this._context.lineTo(this._x1, this._y1)
				}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
			},
			point: function(t, n) {
				switch (t = +t, n = +n, this._point) {
					case 0:
						this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
					default:
						r(this, t, n)
				}
				this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
			}
		}, n.b = function(t) {
			return new i(t)
		}
	}, function(t, n, e) {
		"use strict";

		function r(t, n, e) {
			t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
		}

		function i(t, n) {
			this._context = t, this._k = (1 - n) / 6
		}
		n.c = r, n.a = i, i.prototype = {
			areaStart: function() {
				this._line = 0
			},
			areaEnd: function() {
				this._line = NaN
			},
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
			},
			lineEnd: function() {
				switch (this._point) {
					case 2:
						this._context.lineTo(this._x2, this._y2);
						break;
					case 3:
						r(this, this._x1, this._y1)
				}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
			},
			point: function(t, n) {
				switch (t = +t, n = +n, this._point) {
					case 0:
						this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
						break;
					case 1:
						this._point = 2, this._x1 = t, this._y1 = n;
						break;
					case 2:
						this._point = 3;
					default:
						r(this, t, n)
				}
				this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
			}
		}, n.b = function t(n) {
			function e(t) {
				return new i(t, n)
			}
			return e.tension = function(n) {
				return t(+n)
			}, e
		}(0)
	}, function(t, n, e) {
		"use strict";
		var r = e(22);
		n.a = function(t, n, e) {
			if (null == e && (e = r.a), i = t.length) {
				if ((n = +n) <= 0 || i < 2) return +e(t[0], 0, t);
				if (n >= 1) return +e(t[i - 1], i - 1, t);
				var i, u = (i - 1) * n,
					c = Math.floor(u),
					o = +e(t[c], c, t);
				return o + (+e(t[c + 1], c + 1, t) - o) * (u - c)
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(198);
		e.d(n, "a", function() {
			return r.a
		});
		var i = e(108);
		e.d(n, "b", function() {
			return i.a
		}), e.d(n, "c", function() {
			return i.b
		})
	}, function(t, n, e) {
		"use strict";
		var r = e(53);
		n.a = function(t) {
			var n = t += "",
				e = n.indexOf(":");
			return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), r.a.hasOwnProperty(n) ? {
				space: r.a[n],
				local: t
			} : t
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return r
		});
		var r = "http://www.w3.org/1999/xhtml";
		n.a = {
			svg: "http://www.w3.org/2000/svg",
			xhtml: r,
			xlink: "http://www.w3.org/1999/xlink",
			xml: "http://www.w3.org/XML/1998/namespace",
			xmlns: "http://www.w3.org/2000/xmlns/"
		}
	}, function(t, n, e) {
		"use strict";

		function r() {}
		n.a = function(t) {
			return null == t ? r : function() {
				return this.querySelector(t)
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "c", function() {
			return i
		}), n.a = function(t, n, e, r) {
			var u = i;
			t.sourceEvent = i, i = t;
			try {
				return n.apply(e, r)
			} finally {
				i = u
			}
		};
		var r = {},
			i = null;
		"undefined" != typeof document && ("onmouseenter" in document.documentElement || (r = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		}));

		function u(t, n, e) {
			return t = c(t, n, e),
				function(n) {
					var e = n.relatedTarget;
					e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
				}
		}

		function c(t, n, e) {
			return function(r) {
				var u = i;
				i = r;
				try {
					t.call(this, this.__data__, n, e)
				} finally {
					i = u
				}
			}
		}

		function o(t) {
			return function() {
				var n = this.__on;
				if (n) {
					for (var e, r = 0, i = -1, u = n.length; r < u; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
					++i ? n.length = i : delete this.__on
				}
			}
		}

		function a(t, n, e) {
			var i = r.hasOwnProperty(t.type) ? u : c;
			return function(r, u, c) {
				var o, a = this.__on,
					f = i(n, u, c);
				if (a)
					for (var s = 0, l = a.length; s < l; ++s)
						if ((o = a[s]).type === t.type && o.name === t.name) return this.removeEventListener(o.type, o.listener, o.capture), this.addEventListener(o.type, o.listener = f, o.capture = e), void(o.value = n);
				this.addEventListener(t.type, f, e), o = {
					type: t.type,
					name: t.name,
					value: n,
					listener: f,
					capture: e
				}, a ? a.push(o) : this.__on = [o]
			}
		}
		n.b = function(t, n, e) {
			var r, i, u = function(t) {
					return t.trim().split(/^|\s+/).map(function(t) {
						var n = "",
							e = t.indexOf(".");
						return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
							type: t,
							name: n
						}
					})
				}(t + ""),
				c = u.length;
			if (!(arguments.length < 2)) {
				for (f = n ? a : o, null == e && (e = !1), r = 0; r < c; ++r) this.each(f(u[r], n, e));
				return this
			}
			var f = this.node().__on;
			if (f)
				for (var s, l = 0, h = f.length; l < h; ++l)
					for (r = 0, s = f[l]; r < c; ++r)
						if ((i = u[r]).type === s.type && i.name === s.name) return s.value
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(56);
		n.a = function() {
			for (var t, n = r.c; t = n.sourceEvent;) n = t;
			return n
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(7),
			i = e(111),
			u = e(114),
			c = e(115),
			o = e(35),
			a = e(116),
			f = e(117),
			s = e(113);
		n.a = function(t, n) {
			var e, l = typeof n;
			return null == n || "boolean" === l ? Object(s.a)(n) : ("number" === l ? o.a : "string" === l ? (e = Object(r.a)(n)) ? (n = e, i.a) : f.a : n instanceof r.a ? i.a : n instanceof Date ? c.a : Array.isArray(n) ? u.a : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? a.a : o.a)(t, n)
		}
	}, function(t, n, e) {
		"use strict";
		n.a = i, e.d(n, "d", function() {
			return u
		}), e.d(n, "c", function() {
			return c
		}), n.e = y, n.h = j, n.g = x, n.b = w, n.f = k;
		var r = e(60);

		function i() {}
		var u = .7,
			c = 1 / u,
			o = "\\s*([+-]?\\d+)\\s*",
			a = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
			f = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
			s = /^#([0-9a-f]{3})$/,
			l = /^#([0-9a-f]{6})$/,
			h = new RegExp("^rgb\\(" + [o, o, o] + "\\)$"),
			d = new RegExp("^rgb\\(" + [f, f, f] + "\\)$"),
			b = new RegExp("^rgba\\(" + [o, o, o, a] + "\\)$"),
			v = new RegExp("^rgba\\(" + [f, f, f, a] + "\\)$"),
			p = new RegExp("^hsl\\(" + [a, f, f] + "\\)$"),
			g = new RegExp("^hsla\\(" + [a, f, f, a] + "\\)$"),
			_ = {
				aliceblue: 15792383,
				antiquewhite: 16444375,
				aqua: 65535,
				aquamarine: 8388564,
				azure: 15794175,
				beige: 16119260,
				bisque: 16770244,
				black: 0,
				blanchedalmond: 16772045,
				blue: 255,
				blueviolet: 9055202,
				brown: 10824234,
				burlywood: 14596231,
				cadetblue: 6266528,
				chartreuse: 8388352,
				chocolate: 13789470,
				coral: 16744272,
				cornflowerblue: 6591981,
				cornsilk: 16775388,
				crimson: 14423100,
				cyan: 65535,
				darkblue: 139,
				darkcyan: 35723,
				darkgoldenrod: 12092939,
				darkgray: 11119017,
				darkgreen: 25600,
				darkgrey: 11119017,
				darkkhaki: 12433259,
				darkmagenta: 9109643,
				darkolivegreen: 5597999,
				darkorange: 16747520,
				darkorchid: 10040012,
				darkred: 9109504,
				darksalmon: 15308410,
				darkseagreen: 9419919,
				darkslateblue: 4734347,
				darkslategray: 3100495,
				darkslategrey: 3100495,
				darkturquoise: 52945,
				darkviolet: 9699539,
				deeppink: 16716947,
				deepskyblue: 49151,
				dimgray: 6908265,
				dimgrey: 6908265,
				dodgerblue: 2003199,
				firebrick: 11674146,
				floralwhite: 16775920,
				forestgreen: 2263842,
				fuchsia: 16711935,
				gainsboro: 14474460,
				ghostwhite: 16316671,
				gold: 16766720,
				goldenrod: 14329120,
				gray: 8421504,
				green: 32768,
				greenyellow: 11403055,
				grey: 8421504,
				honeydew: 15794160,
				hotpink: 16738740,
				indianred: 13458524,
				indigo: 4915330,
				ivory: 16777200,
				khaki: 15787660,
				lavender: 15132410,
				lavenderblush: 16773365,
				lawngreen: 8190976,
				lemonchiffon: 16775885,
				lightblue: 11393254,
				lightcoral: 15761536,
				lightcyan: 14745599,
				lightgoldenrodyellow: 16448210,
				lightgray: 13882323,
				lightgreen: 9498256,
				lightgrey: 13882323,
				lightpink: 16758465,
				lightsalmon: 16752762,
				lightseagreen: 2142890,
				lightskyblue: 8900346,
				lightslategray: 7833753,
				lightslategrey: 7833753,
				lightsteelblue: 11584734,
				lightyellow: 16777184,
				lime: 65280,
				limegreen: 3329330,
				linen: 16445670,
				magenta: 16711935,
				maroon: 8388608,
				mediumaquamarine: 6737322,
				mediumblue: 205,
				mediumorchid: 12211667,
				mediumpurple: 9662683,
				mediumseagreen: 3978097,
				mediumslateblue: 8087790,
				mediumspringgreen: 64154,
				mediumturquoise: 4772300,
				mediumvioletred: 13047173,
				midnightblue: 1644912,
				mintcream: 16121850,
				mistyrose: 16770273,
				moccasin: 16770229,
				navajowhite: 16768685,
				navy: 128,
				oldlace: 16643558,
				olive: 8421376,
				olivedrab: 7048739,
				orange: 16753920,
				orangered: 16729344,
				orchid: 14315734,
				palegoldenrod: 15657130,
				palegreen: 10025880,
				paleturquoise: 11529966,
				palevioletred: 14381203,
				papayawhip: 16773077,
				peachpuff: 16767673,
				peru: 13468991,
				pink: 16761035,
				plum: 14524637,
				powderblue: 11591910,
				purple: 8388736,
				rebeccapurple: 6697881,
				red: 16711680,
				rosybrown: 12357519,
				royalblue: 4286945,
				saddlebrown: 9127187,
				salmon: 16416882,
				sandybrown: 16032864,
				seagreen: 3050327,
				seashell: 16774638,
				sienna: 10506797,
				silver: 12632256,
				skyblue: 8900331,
				slateblue: 6970061,
				slategray: 7372944,
				slategrey: 7372944,
				snow: 16775930,
				springgreen: 65407,
				steelblue: 4620980,
				tan: 13808780,
				teal: 32896,
				thistle: 14204888,
				tomato: 16737095,
				turquoise: 4251856,
				violet: 15631086,
				wheat: 16113331,
				white: 16777215,
				whitesmoke: 16119285,
				yellow: 16776960,
				yellowgreen: 10145074
			};

		function y(t) {
			var n;
			return t = (t + "").trim().toLowerCase(), (n = s.exec(t)) ? new w((n = parseInt(n[1], 16)) >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : (n = l.exec(t)) ? m(parseInt(n[1], 16)) : (n = h.exec(t)) ? new w(n[1], n[2], n[3], 1) : (n = d.exec(t)) ? new w(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = b.exec(t)) ? O(n[1], n[2], n[3], n[4]) : (n = v.exec(t)) ? O(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = p.exec(t)) ? M(n[1], n[2] / 100, n[3] / 100, 1) : (n = g.exec(t)) ? M(n[1], n[2] / 100, n[3] / 100, n[4]) : _.hasOwnProperty(t) ? m(_[t]) : "transparent" === t ? new w(NaN, NaN, NaN, 0) : null
		}

		function m(t) {
			return new w(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
		}

		function O(t, n, e, r) {
			return r <= 0 && (t = n = e = NaN), new w(t, n, e, r)
		}

		function j(t) {
			return t instanceof i || (t = y(t)), t ? new w((t = t.rgb()).r, t.g, t.b, t.opacity) : new w
		}

		function x(t, n, e, r) {
			return 1 === arguments.length ? j(t) : new w(t, n, e, null == r ? 1 : r)
		}

		function w(t, n, e, r) {
			this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
		}

		function M(t, n, e, r) {
			return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new T(t, n, e, r)
		}

		function k(t, n, e, r) {
			return 1 === arguments.length ? function(t) {
				if (t instanceof T) return new T(t.h, t.s, t.l, t.opacity);
				if (t instanceof i || (t = y(t)), !t) return new T;
				if (t instanceof T) return t;
				var n = (t = t.rgb()).r / 255,
					e = t.g / 255,
					r = t.b / 255,
					u = Math.min(n, e, r),
					c = Math.max(n, e, r),
					o = NaN,
					a = c - u,
					f = (c + u) / 2;
				return a ? (o = n === c ? (e - r) / a + 6 * (e < r) : e === c ? (r - n) / a + 2 : (n - e) / a + 4, a /= f < .5 ? c + u : 2 - c - u, o *= 60) : a = f > 0 && f < 1 ? 0 : o, new T(o, a, f, t.opacity)
			}(t) : new T(t, n, e, null == r ? 1 : r)
		}

		function T(t, n, e, r) {
			this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
		}

		function N(t, n, e) {
			return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
		}
		Object(r.a)(i, y, {
			displayable: function() {
				return this.rgb().displayable()
			},
			toString: function() {
				return this.rgb() + ""
			}
		}), Object(r.a)(w, x, Object(r.b)(i, {
			brighter: function(t) {
				return t = null == t ? c : Math.pow(c, t), new w(this.r * t, this.g * t, this.b * t, this.opacity)
			},
			darker: function(t) {
				return t = null == t ? u : Math.pow(u, t), new w(this.r * t, this.g * t, this.b * t, this.opacity)
			},
			rgb: function() {
				return this
			},
			displayable: function() {
				return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
			},
			toString: function() {
				var t = this.opacity;
				return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
			}
		})), Object(r.a)(T, k, Object(r.b)(i, {
			brighter: function(t) {
				return t = null == t ? c : Math.pow(c, t), new T(this.h, this.s, this.l * t, this.opacity)
			},
			darker: function(t) {
				return t = null == t ? u : Math.pow(u, t), new T(this.h, this.s, this.l * t, this.opacity)
			},
			rgb: function() {
				var t = this.h % 360 + 360 * (this.h < 0),
					n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
					e = this.l,
					r = e + (e < .5 ? e : 1 - e) * n,
					i = 2 * e - r;
				return new w(N(t >= 240 ? t - 240 : t + 120, i, r), N(t, i, r), N(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
			},
			displayable: function() {
				return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
			}
		}))
	}, function(t, n, e) {
		"use strict";
		n.b = function(t, n) {
			var e = Object.create(t.prototype);
			for (var r in n) e[r] = n[r];
			return e
		}, n.a = function(t, n, e) {
			t.prototype = n.prototype = e, e.constructor = t
		}
	}, function(t, n, e) {
		"use strict";

		function r(t, n, e, r, i) {
			var u = t * t,
				c = u * t;
			return ((1 - 3 * t + 3 * u - c) * n + (4 - 6 * u + 3 * c) * e + (1 + 3 * t + 3 * u - 3 * c) * r + c * i) / 6
		}
		n.a = r, n.b = function(t) {
			var n = t.length - 1;
			return function(e) {
				var i = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
					u = t[i],
					c = t[i + 1],
					o = i > 0 ? t[i - 1] : 2 * u - c,
					a = i < n - 1 ? t[i + 2] : 2 * c - u;
				return r((e - i / n) * n, o, u, c, a)
			}
		}
	}, function(t, n, e) {
		"use strict";
		e(247);
		var r = e(10);
		e.d(n, "c", function() {
			return r.b
		});
		var i = e(278);
		e.d(n, "a", function() {
			return i.a
		});
		var u = e(118);
		e.d(n, "b", function() {
			return u.a
		})
	}, function(t, n, e) {
		"use strict";
		n.b = b, n.a = p, n.c = g, n.d = _;
		var r, i, u = 0,
			c = 0,
			o = 0,
			a = 1e3,
			f = 0,
			s = 0,
			l = 0,
			h = "object" == typeof performance && performance.now ? performance : Date,
			d = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
				setTimeout(t, 17)
			};

		function b() {
			return s || (d(v), s = h.now() + l)
		}

		function v() {
			s = 0
		}

		function p() {
			this._call = this._time = this._next = null
		}

		function g(t, n, e) {
			var r = new p;
			return r.restart(t, n, e), r
		}

		function _() {
			b(), ++u;
			for (var t, n = r; n;)(t = s - n._time) >= 0 && n._call.call(null, t), n = n._next;
			--u
		}

		function y() {
			s = (f = h.now()) + l, u = c = 0;
			try {
				_()
			} finally {
				u = 0,
					function() {
						var t, n, e = r,
							u = 1 / 0;
						for (; e;) e._call ? (u > e._time && (u = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : r = n);
						i = t, O(u)
					}(), s = 0
			}
		}

		function m() {
			var t = h.now(),
				n = t - f;
			n > a && (l -= n, f = t)
		}

		function O(t) {
			u || (c && (c = clearTimeout(c)), t - s > 24 ? (t < 1 / 0 && (c = setTimeout(y, t - h.now() - l)), o && (o = clearInterval(o))) : (o || (f = h.now(), o = setInterval(m, a)), u = 1, d(y)))
		}
		p.prototype = g.prototype = {
			constructor: p,
			restart: function(t, n, e) {
				if ("function" != typeof t) throw new TypeError("callback is not a function");
				e = (null == e ? b() : +e) + (null == n ? 0 : +n), this._next || i === this || (i ? i._next = this : r = this, i = this), this._call = t, this._time = e, O()
			},
			stop: function() {
				this._call && (this._call = null, this._time = 1 / 0, O())
			}
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return r
		});
		var r = "$";

		function i() {}

		function u(t, n) {
			var e = new i;
			if (t instanceof i) t.each(function(t, n) {
				e.set(n, t)
			});
			else if (Array.isArray(t)) {
				var r, u = -1,
					c = t.length;
				if (null == n)
					for (; ++u < c;) e.set(u, t[u]);
				else
					for (; ++u < c;) e.set(n(r = t[u], u, t), r)
			} else if (t)
				for (var o in t) e.set(o, t[o]);
			return e
		}
		i.prototype = u.prototype = {
			constructor: i,
			has: function(t) {
				return r + t in this
			},
			get: function(t) {
				return this[r + t]
			},
			set: function(t, n) {
				return this[r + t] = n, this
			},
			remove: function(t) {
				var n = r + t;
				return n in this && delete this[n]
			},
			clear: function() {
				for (var t in this) t[0] === r && delete this[t]
			},
			keys: function() {
				var t = [];
				for (var n in this) n[0] === r && t.push(n.slice(1));
				return t
			},
			values: function() {
				var t = [];
				for (var n in this) n[0] === r && t.push(this[n]);
				return t
			},
			entries: function() {
				var t = [];
				for (var n in this) n[0] === r && t.push({
					key: n.slice(1),
					value: this[n]
				});
				return t
			},
			size: function() {
				var t = 0;
				for (var n in this) n[0] === r && ++t;
				return t
			},
			empty: function() {
				for (var t in this)
					if (t[0] === r) return !1;
				return !0
			},
			each: function(t) {
				for (var n in this) n[0] === r && t(this[n], n.slice(1), this)
			}
		}, n.a = u
	}, function(t, n, e) {
		"use strict";
		var r = e(66);
		e.d(n, "e", function() {
			return r.a
		});
		var i = e(293);
		e.d(n, "c", function() {
			return i.c
		}), e.d(n, "d", function() {
			return i.d
		}), e.d(n, "a", function() {
			return i.a
		}), e.d(n, "b", function() {
			return i.b
		});
		var u = e(294);
		e.d(n, "h", function() {
			return u.c
		}), e.d(n, "i", function() {
			return u.d
		}), e.d(n, "f", function() {
			return u.a
		}), e.d(n, "g", function() {
			return u.b
		})
	}, function(t, n, e) {
		"use strict";
		var r = {},
			i = {},
			u = 34,
			c = 10,
			o = 13;

		function a(t) {
			return new Function("d", "return {" + t.map(function(t, n) {
				return JSON.stringify(t) + ": d[" + n + "]"
			}).join(",") + "}")
		}
		n.a = function(t) {
			var n = new RegExp('["' + t + "\n\r]"),
				e = t.charCodeAt(0);

			function f(t, n) {
				var a, f = [],
					s = t.length,
					l = 0,
					h = 0,
					d = s <= 0,
					b = !1;

				function v() {
					if (d) return i;
					if (b) return b = !1, r;
					var n, a, f = l;
					if (t.charCodeAt(f) === u) {
						for (; l++ < s && t.charCodeAt(l) !== u || t.charCodeAt(++l) === u;);
						return (n = l) >= s ? d = !0 : (a = t.charCodeAt(l++)) === c ? b = !0 : a === o && (b = !0, t.charCodeAt(l) === c && ++l), t.slice(f + 1, n - 1).replace(/""/g, '"')
					}
					for (; l < s;) {
						if ((a = t.charCodeAt(n = l++)) === c) b = !0;
						else if (a === o) b = !0, t.charCodeAt(l) === c && ++l;
						else if (a !== e) continue;
						return t.slice(f, n)
					}
					return d = !0, t.slice(f, s)
				}
				for (t.charCodeAt(s - 1) === c && --s, t.charCodeAt(s - 1) === o && --s;
					(a = v()) !== i;) {
					for (var p = []; a !== r && a !== i;) p.push(a), a = v();
					n && null == (p = n(p, h++)) || f.push(p)
				}
				return f
			}

			function s(n) {
				return n.map(l).join(t)
			}

			function l(t) {
				return null == t ? "" : n.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t
			}
			return {
				parse: function(t, n) {
					var e, r, i = f(t, function(t, i) {
						if (e) return e(t, i - 1);
						r = t, e = n ? function(t, n) {
							var e = a(t);
							return function(r, i) {
								return n(e(r), i, t)
							}
						}(t, n) : a(t)
					});
					return i.columns = r || [], i
				},
				parseRows: f,
				format: function(n, e) {
					return null == e && (e = function(t) {
						var n = Object.create(null),
							e = [];
						return t.forEach(function(t) {
							for (var r in t) r in n || e.push(n[r] = r)
						}), e
					}(n)), [e.map(l).join(t)].concat(n.map(function(n) {
						return e.map(function(t) {
							return l(n[t])
						}).join(t)
					})).join("\n")
				},
				formatRows: function(t) {
					return t.map(s).join("\n")
				}
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function() {
			return 1e-6 * (Math.random() - .5)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(298);
		e.d(n, "a", function() {
			return r.a
		})
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n, e, r, i) {
			this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(316);
		e.d(n, "b", function() {
			return r.a
		}), e.d(n, "a", function() {
			return r.b
		}), e.d(n, "d", function() {
			return r.c
		});
		var i = e(123);
		e.d(n, "c", function() {
			return i.a
		});
		var u = e(124);
		e.d(n, "e", function() {
			return u.a
		});
		var c = e(322);
		e.d(n, "f", function() {
			return c.a
		});
		var o = e(323);
		e.d(n, "g", function() {
			return o.a
		});
		var a = e(324);
		e.d(n, "h", function() {
			return a.a
		})
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
			var e, r = t.slice(0, e);
			return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return t
		}
	}, function(t, n, e) {
		"use strict";
		n.a = c;
		var r = e(0),
			i = e(74),
			u = e(341);

		function c(t, n) {
			var e = Object(r.t)(t),
				i = (e + Object(r.t)(n)) / 2;
			if (Object(r.a)(i) < r.i) return Object(u.a)(t);
			var c = 1 + e * (2 * i - e),
				o = Object(r.u)(c) / i;

			function a(t, n) {
				var e = Object(r.u)(c - 2 * i * Object(r.t)(n)) / i;
				return [e * Object(r.t)(t *= i), o - e * Object(r.g)(t)]
			}
			return a.invert = function(t, n) {
				var e = o - n;
				return [Object(r.e)(t, Object(r.a)(e)) / i * Object(r.s)(e), Object(r.c)((c - (t * t + e * e) * i * i) / (2 * i))]
			}, a
		}
		n.b = function() {
			return Object(i.a)(c).scale(155.424).center([0, 33.6442])
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			var n = 0,
				e = r.o / 3,
				u = Object(i.b)(t),
				c = u(n, e);
			return c.parallels = function(t) {
				return arguments.length ? u(n = t[0] * r.r, e = t[1] * r.r) : [n * r.h, e * r.h]
			}, c
		};
		var r = e(0),
			i = e(8)
	}, function(t, n, e) {
		"use strict";
		n.a = c, n.c = function(t, n, e) {
			return c(t, [
				[0, 0], n
			], e)
		}, n.d = function(t, n, e) {
			return u(t, function(e) {
				var r = +n,
					i = r / (e[1][0] - e[0][0]),
					u = (r - i * (e[1][0] + e[0][0])) / 2,
					c = -i * e[0][1];
				t.scale(150 * i).translate([u, c])
			}, e)
		}, n.b = function(t, n, e) {
			return u(t, function(e) {
				var r = +n,
					i = r / (e[1][1] - e[0][1]),
					u = -i * e[0][0],
					c = (r - i * (e[1][1] + e[0][1])) / 2;
				t.scale(150 * i).translate([u, c])
			}, e)
		};
		var r = e(14),
			i = e(139);

		function u(t, n, e) {
			var u = t.clipExtent && t.clipExtent();
			return t.scale(150).translate([0, 0]), null != u && t.clipExtent(null), Object(r.a)(e, t.stream(i.a)), n(i.a.result()), null != u && t.clipExtent(u), t
		}

		function c(t, n, e) {
			return u(t, function(e) {
				var r = n[1][0] - n[0][0],
					i = n[1][1] - n[0][1],
					u = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
					c = +n[0][0] + (r - u * (e[1][0] + e[0][0])) / 2,
					o = +n[0][1] + (i - u * (e[1][1] + e[0][1])) / 2;
				t.scale(150 * u).translate([c, o])
			}, e)
		}
	}, function(t, n, e) {
		"use strict";
		n.c = c, n.b = o;
		var r = e(0),
			i = e(39),
			u = e(8);

		function c(t, n) {
			return [t, Object(r.n)(Object(r.v)((r.l + n) / 2))]
		}

		function o(t) {
			var n, e, o, a = Object(u.a)(t),
				f = a.center,
				s = a.scale,
				l = a.translate,
				h = a.clipExtent,
				d = null;

			function b() {
				var u = r.o * s(),
					f = a(Object(i.a)(a.rotate()).invert([0, 0]));
				return h(null == d ? [
					[f[0] - u, f[1] - u],
					[f[0] + u, f[1] + u]
				] : t === c ? [
					[Math.max(f[0] - u, d), n],
					[Math.min(f[0] + u, e), o]
				] : [
					[d, Math.max(f[1] - u, n)],
					[e, Math.min(f[1] + u, o)]
				])
			}
			return a.scale = function(t) {
				return arguments.length ? (s(t), b()) : s()
			}, a.translate = function(t) {
				return arguments.length ? (l(t), b()) : l()
			}, a.center = function(t) {
				return arguments.length ? (f(t), b()) : f()
			}, a.clipExtent = function(t) {
				return arguments.length ? (null == t ? d = n = e = o = null : (d = +t[0][0], n = +t[0][1], e = +t[1][0], o = +t[1][1]), b()) : null == d ? null : [
					[d, n],
					[e, o]
				]
			}, b()
		}
		c.invert = function(t, n) {
			return [t, 2 * Object(r.d)(Object(r.k)(n)) - r.l]
		}, n.a = function() {
			return o(c).scale(961 / r.w)
		}
	}, function(t, n, e) {
		"use strict";
		n.c = b, n.b = g, n.a = _;
		var r = e(355),
			i = e(356),
			u = e(357),
			c = e(358),
			o = e(359),
			a = e(360),
			f = e(361),
			s = e(362),
			l = e(363),
			h = e(364),
			d = e(365);

		function b(t, n) {
			var e, r, i, u, c, o = new _(t),
				a = +t.value && (o.value = t.value),
				f = [o];
			for (null == n && (n = v); e = f.pop();)
				if (a && (e.value = +e.data.value), (i = n(e.data)) && (c = i.length))
					for (e.children = new Array(c), u = c - 1; u >= 0; --u) f.push(r = e.children[u] = new _(i[u])), r.parent = e, r.depth = e.depth + 1;
			return o.eachBefore(g)
		}

		function v(t) {
			return t.children
		}

		function p(t) {
			t.data = t.data.data
		}

		function g(t) {
			var n = 0;
			do {
				t.height = n
			} while ((t = t.parent) && t.height < ++n)
		}

		function _(t) {
			this.data = t, this.depth = this.height = 0, this.parent = null
		}
		_.prototype = b.prototype = {
			constructor: _,
			count: r.a,
			each: i.a,
			eachAfter: c.a,
			eachBefore: u.a,
			sum: o.a,
			sort: a.a,
			path: f.a,
			ancestors: s.a,
			descendants: l.a,
			leaves: h.a,
			links: d.a,
			copy: function() {
				return b(this).eachBefore(p)
			}
		}
	}, function(t, n, e) {
		"use strict";

		function r(t) {
			if ("function" != typeof t) throw new Error;
			return t
		}
		n.a = function(t) {
			return null == t ? null : r(t)
		}, n.b = r
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return u
		}), n.c = c;
		var r = e(26),
			i = e(42),
			u = (1 + Math.sqrt(5)) / 2;

		function c(t, n, e, u, c, o) {
			for (var a, f, s, l, h, d, b, v, p, g, _, y = [], m = n.children, O = 0, j = 0, x = m.length, w = n.value; O < x;) {
				s = c - e, l = o - u;
				do {
					h = m[j++].value
				} while (!h && j < x);
				for (d = b = h, _ = h * h * (g = Math.max(l / s, s / l) / (w * t)), p = Math.max(b / _, _ / d); j < x; ++j) {
					if (h += f = m[j].value, f < d && (d = f), f > b && (b = f), _ = h * h * g, (v = Math.max(b / _, _ / d)) > p) {
						h -= f;
						break
					}
					p = v
				}
				y.push(a = {
					value: h,
					dice: s < l,
					children: m.slice(O, j)
				}), a.dice ? Object(r.a)(a, e, u, c, w ? u += l * h / w : o) : Object(i.a)(a, e, u, w ? e += s * h / w : c, o), w -= h, O = j
			}
			return y
		}
		n.a = function t(n) {
			function e(t, e, r, i, u) {
				c(n, t, e, r, i, u)
			}
			return e.ratio = function(n) {
				return t((n = +n) > 1 ? n : 1)
			}, e
		}(u)
	}, function(t, n, e) {
		"use strict";
		var r = e(21),
			i = e(12);
		n.a = function(t, n) {
			var e, u, c, o, a = Object(i.a)("beforesend", "progress", "load", "error"),
				f = Object(r.c)(),
				s = new XMLHttpRequest,
				l = null,
				h = null,
				d = 0;

			function b(t) {
				var n, r = s.status;
				if (!r && function(t) {
						var n = t.responseType;
						return n && "text" !== n ? t.response : t.responseText
					}(s) || r >= 200 && r < 300 || 304 === r) {
					if (c) try {
						n = c.call(e, s)
					} catch (t) {
						return void a.call("error", e, t)
					} else n = s;
					a.call("load", e, n)
				} else a.call("error", e, t)
			}
			if ("undefined" == typeof XDomainRequest || "withCredentials" in s || !/^(http(s)?:)?\/\//.test(t) || (s = new XDomainRequest), "onload" in s ? s.onload = s.onerror = s.ontimeout = b : s.onreadystatechange = function(t) {
					s.readyState > 3 && b(t)
				}, s.onprogress = function(t) {
					a.call("progress", e, t)
				}, e = {
					header: function(t, n) {
						return t = (t + "").toLowerCase(), arguments.length < 2 ? f.get(t) : (null == n ? f.remove(t) : f.set(t, n + ""), e)
					},
					mimeType: function(t) {
						return arguments.length ? (u = null == t ? null : t + "", e) : u
					},
					responseType: function(t) {
						return arguments.length ? (o = t, e) : o
					},
					timeout: function(t) {
						return arguments.length ? (d = +t, e) : d
					},
					user: function(t) {
						return arguments.length < 1 ? l : (l = null == t ? null : t + "", e)
					},
					password: function(t) {
						return arguments.length < 1 ? h : (h = null == t ? null : t + "", e)
					},
					response: function(t) {
						return c = t, e
					},
					get: function(t, n) {
						return e.send("GET", t, n)
					},
					post: function(t, n) {
						return e.send("POST", t, n)
					},
					send: function(n, r, i) {
						return s.open(n, t, !0, l, h), null == u || f.has("accept") || f.set("accept", u + ",*/*"), s.setRequestHeader && f.each(function(t, n) {
							s.setRequestHeader(n, t)
						}), null != u && s.overrideMimeType && s.overrideMimeType(u), null != o && (s.responseType = o), d > 0 && (s.timeout = d), null == i && "function" == typeof r && (i = r, r = null), null != i && 1 === i.length && (i = function(t) {
							return function(n, e) {
								t(null == n ? e : null)
							}
						}(i)), null != i && e.on("error", i).on("load", function(t) {
							i(null, t)
						}), a.call("beforesend", e, s), s.send(null == r ? null : r), e
					},
					abort: function() {
						return s.abort(), e
					},
					on: function() {
						var t = a.on.apply(a, arguments);
						return t === a ? e : t
					}
				}, null != n) {
				if ("function" != typeof n) throw new Error("invalid callback: " + n);
				return e.get(n)
			}
			return e
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return function() {
				return t
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(83);
		e.d(n, "d", function() {
			return r.a
		}), e.d(n, "c", function() {
			return r.b
		}), e.d(n, "f", function() {
			return r.c
		}), e.d(n, "g", function() {
			return r.d
		}), e.d(n, "h", function() {
			return r.e
		});
		var i = e(153);
		e.d(n, "e", function() {
			return i.a
		});
		var u = e(154);
		e.d(n, "a", function() {
			return u.a
		});
		var c = e(420);
		e.d(n, "b", function() {
			return c.a
		})
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return i
		}), e.d(n, "c", function() {
			return u
		}), e.d(n, "d", function() {
			return c
		}), e.d(n, "e", function() {
			return o
		}), n.a = f;
		var r, i, u, c, o, a = e(153);

		function f(t) {
			return r = Object(a.a)(t), i = r.format, u = r.parse, c = r.utcFormat, o = r.utcParse, r
		}
		f({
			dateTime: "%x, %X",
			date: "%-m/%-d/%Y",
			time: "%-I:%M:%S %p",
			periods: ["AM", "PM"],
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		})
	}, function(t, n, e) {
		"use strict";
		var r = e(13),
			i = e(16),
			u = e(46),
			c = e(85);
		n.a = function() {
			var t = c.a,
				n = c.b,
				e = Object(i.a)(!0),
				o = null,
				a = u.a,
				f = null;

			function s(i) {
				var u, c, s, l = i.length,
					h = !1;
				for (null == o && (f = a(s = Object(r.a)())), u = 0; u <= l; ++u) !(u < l && e(c = i[u], u, i)) === h && ((h = !h) ? f.lineStart() : f.lineEnd()), h && f.point(+t(c, u, i), +n(c, u, i));
				if (s) return f = null, s + "" || null
			}
			return s.x = function(n) {
				return arguments.length ? (t = "function" == typeof n ? n : Object(i.a)(+n), s) : t
			}, s.y = function(t) {
				return arguments.length ? (n = "function" == typeof t ? t : Object(i.a)(+t), s) : n
			}, s.defined = function(t) {
				return arguments.length ? (e = "function" == typeof t ? t : Object(i.a)(!!t), s) : e
			}, s.curve = function(t) {
				return arguments.length ? (a = t, null != o && (f = a(o)), s) : a
			}, s.context = function(t) {
				return arguments.length ? (null == t ? o = f = null : f = a(o = t), s) : o
			}, s
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return t[0]
		}, n.b = function(t) {
			return t[1]
		}
	}, function(t, n, e) {
		"use strict";
		n.b = u;
		var r = e(29),
			i = e(49);

		function u(t, n, e) {
			var i = t._x1,
				u = t._y1,
				c = t._x2,
				o = t._y2;
			if (t._l01_a > r.f) {
				var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
					f = 3 * t._l01_a * (t._l01_a + t._l12_a);
				i = (i * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / f, u = (u * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / f
			}
			if (t._l23_a > r.f) {
				var s = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
					l = 3 * t._l23_a * (t._l23_a + t._l12_a);
				c = (c * s + t._x1 * t._l23_2a - n * t._l12_2a) / l, o = (o * s + t._y1 * t._l23_2a - e * t._l12_2a) / l
			}
			t._context.bezierCurveTo(i, u, c, o, t._x2, t._y2)
		}

		function c(t, n) {
			this._context = t, this._alpha = n
		}
		c.prototype = {
			areaStart: function() {
				this._line = 0
			},
			areaEnd: function() {
				this._line = NaN
			},
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
			},
			lineEnd: function() {
				switch (this._point) {
					case 2:
						this._context.lineTo(this._x2, this._y2);
						break;
					case 3:
						this.point(this._x2, this._y2)
				}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
			},
			point: function(t, n) {
				if (t = +t, n = +n, this._point) {
					var e = this._x2 - t,
						r = this._y2 - n;
					this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
				}
				switch (this._point) {
					case 0:
						this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3;
					default:
						u(this, t, n)
				}
				this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
			}
		}, n.a = function t(n) {
			function e(t) {
				return n ? new c(t, n) : new i.a(t, 0)
			}
			return e.alpha = function(n) {
				return t(+n)
			}, e
		}(.5)
	}, function(t, n, e) {
		"use strict";
		n.b = i;
		var r = e(31);

		function i(t) {
			for (var n, e = 0, r = -1, i = t.length; ++r < i;)(n = +t[r][1]) && (e += n);
			return e
		}
		n.a = function(t) {
			var n = t.map(i);
			return Object(r.a)(t).sort(function(t, e) {
				return n[t] - n[e]
			})
		}
	}, function(t, n, e) {
		"use strict";

		function r() {
			this._ = null
		}

		function i(t, n) {
			var e = n,
				r = n.R,
				i = e.U;
			i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
		}

		function u(t, n) {
			var e = n,
				r = n.L,
				i = e.U;
			i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
		}

		function c(t) {
			for (; t.L;) t = t.L;
			return t
		}
		n.a = function(t) {
			t.U = t.C = t.L = t.R = t.P = t.N = null
		}, r.prototype = {
			constructor: r,
			insert: function(t, n) {
				var e, r, o;
				if (t) {
					if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
						for (t = t.R; t.L;) t = t.L;
						t.L = n
					} else t.R = n;
					e = t
				} else this._ ? (t = c(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
				for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) e === (r = e.U).L ? (o = r.R) && o.C ? (e.C = o.C = !1, r.C = !0, t = r) : (t === e.R && (i(this, e), e = (t = e).U), e.C = !1, r.C = !0, u(this, r)) : (o = r.L) && o.C ? (e.C = o.C = !1, r.C = !0, t = r) : (t === e.L && (u(this, e), e = (t = e).U), e.C = !1, r.C = !0, i(this, r)), e = t.U;
				this._.C = !1
			},
			remove: function(t) {
				t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
				var n, e, r, o = t.U,
					a = t.L,
					f = t.R;
				if (e = a ? f ? c(f) : a : f, o ? o.L === t ? o.L = e : o.R = e : this._ = e, a && f ? (r = e.C, e.C = t.C, e.L = a, a.U = e, e !== f ? (o = e.U, e.U = t.U, t = e.R, o.L = t, e.R = f, f.U = e) : (e.U = o, o = e, t = e.R)) : (r = t.C, t = e), t && (t.U = o), !r)
					if (t && t.C) t.C = !1;
					else {
						do {
							if (t === this._) break;
							if (t === o.L) {
								if ((n = o.R).C && (n.C = !1, o.C = !0, i(this, o), n = o.R), n.L && n.L.C || n.R && n.R.C) {
									n.R && n.R.C || (n.L.C = !1, n.C = !0, u(this, n), n = o.R), n.C = o.C, o.C = n.R.C = !1, i(this, o), t = this._;
									break
								}
							} else if ((n = o.L).C && (n.C = !1, o.C = !0, u(this, o), n = o.L), n.L && n.L.C || n.R && n.R.C) {
								n.L && n.L.C || (n.R.C = !1, n.C = !0, i(this, n), n = o.L), n.C = o.C, o.C = n.L.C = !1, u(this, o), t = this._;
								break
							}
							n.C = !0, t = o, o = o.U
						} while (!t.C);
						t && (t.C = !1)
					}
			}
		}, n.b = r
	}, function(t, n, e) {
		"use strict";
		n.c = function(t, n, e, u) {
			var c = [null, null],
				o = r.e.push(c) - 1;
			c.left = t, c.right = n, e && i(c, t, n, e);
			u && i(c, n, t, u);
			return r.b[t.index].halfedges.push(o), r.b[n.index].halfedges.push(o), c
		}, n.b = function(t, n, e) {
			var r = [n, e];
			return r.left = t, r
		}, n.d = i, n.a = function(t, n, e, i) {
			var o, a = r.e.length;
			for (; a--;) c(o = r.e[a], t, n, e, i) && u(o, t, n, e, i) && (Math.abs(o[0][0] - o[1][0]) > r.f || Math.abs(o[0][1] - o[1][1]) > r.f) || delete r.e[a]
		};
		var r = e(32);

		function i(t, n, e, r) {
			t[0] || t[1] ? t.left === e ? t[1] = r : t[0] = r : (t[0] = r, t.left = n, t.right = e)
		}

		function u(t, n, e, r, i) {
			var u, c = t[0],
				o = t[1],
				a = c[0],
				f = c[1],
				s = 0,
				l = 1,
				h = o[0] - a,
				d = o[1] - f;
			if (u = n - a, h || !(u > 0)) {
				if (u /= h, h < 0) {
					if (u < s) return;
					u < l && (l = u)
				} else if (h > 0) {
					if (u > l) return;
					u > s && (s = u)
				}
				if (u = r - a, h || !(u < 0)) {
					if (u /= h, h < 0) {
						if (u > l) return;
						u > s && (s = u)
					} else if (h > 0) {
						if (u < s) return;
						u < l && (l = u)
					}
					if (u = e - f, d || !(u > 0)) {
						if (u /= d, d < 0) {
							if (u < s) return;
							u < l && (l = u)
						} else if (d > 0) {
							if (u > l) return;
							u > s && (s = u)
						}
						if (u = i - f, d || !(u < 0)) {
							if (u /= d, d < 0) {
								if (u > l) return;
								u > s && (s = u)
							} else if (d > 0) {
								if (u < s) return;
								u < l && (l = u)
							}
							return !(s > 0 || l < 1) || (s > 0 && (t[0] = [a + s * h, f + s * d]), l < 1 && (t[1] = [a + l * h, f + l * d]), !0)
						}
					}
				}
			}
		}

		function c(t, n, e, r, i) {
			var u = t[1];
			if (u) return !0;
			var c, o, a = t[0],
				f = t.left,
				s = t.right,
				l = f[0],
				h = f[1],
				d = s[0],
				b = s[1],
				v = (l + d) / 2,
				p = (h + b) / 2;
			if (b === h) {
				if (v < n || v >= r) return;
				if (l > d) {
					if (a) {
						if (a[1] >= i) return
					} else a = [v, e];
					u = [v, i]
				} else {
					if (a) {
						if (a[1] < e) return
					} else a = [v, i];
					u = [v, e]
				}
			} else if (o = p - (c = (l - d) / (b - h)) * v, c < -1 || c > 1)
				if (l > d) {
					if (a) {
						if (a[1] >= i) return
					} else a = [(e - o) / c, e];
					u = [(i - o) / c, i]
				} else {
					if (a) {
						if (a[1] < e) return
					} else a = [(i - o) / c, i];
					u = [(e - o) / c, e]
				}
			else if (h < b) {
				if (a) {
					if (a[0] >= r) return
				} else a = [n, c * n + o];
				u = [r, c * r + o]
			} else {
				if (a) {
					if (a[0] < n) return
				} else a = [r, c * r + o];
				u = [n, c * n + o]
			}
			return t[0] = a, t[1] = u, !0
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return c
		}), e.d(n, "a", function() {
			return o
		});
		var r = e(17),
			i = e(91),
			u = Object(i.a)(r.a),
			c = u.right,
			o = u.left;
		n.c = c
	}, function(t, n, e) {
		"use strict";
		var r = e(17);
		n.a = function(t) {
			var n;
			return 1 === t.length && (n = t, t = function(t, e) {
				return Object(r.a)(n(t), e)
			}), {
				left: function(n, e, r, i) {
					for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
						var u = r + i >>> 1;
						t(n[u], e) < 0 ? r = u + 1 : i = u
					}
					return r
				},
				right: function(n, e, r, i) {
					for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
						var u = r + i >>> 1;
						t(n[u], e) > 0 ? i = u : r = u + 1
					}
					return r
				}
			}
		}
	}, function(t, n, e) {
		"use strict";

		function r(t, n) {
			return [t, n]
		}
		n.b = r, n.a = function(t, n) {
			null == n && (n = r);
			for (var e = 0, i = t.length - 1, u = t[0], c = new Array(i < 0 ? 0 : i); e < i;) c[e] = n(u, u = t[++e]);
			return c
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(94);
		n.a = function(t, n) {
			var e = Object(r.a)(t, n);
			return e ? Math.sqrt(e) : e
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(22);
		n.a = function(t, n) {
			var e, i, u = t.length,
				c = 0,
				o = -1,
				a = 0,
				f = 0;
			if (null == n)
				for (; ++o < u;) isNaN(e = Object(r.a)(t[o])) || (f += (i = e - a) * (e - (a += i / ++c)));
			else
				for (; ++o < u;) isNaN(e = Object(r.a)(n(t[o], o, t))) || (f += (i = e - a) * (e - (a += i / ++c)));
			if (c > 1) return f / (c - 1)
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			var e, r, i, u = t.length,
				c = -1;
			if (null == n) {
				for (; ++c < u;)
					if (null != (e = t[c]) && e >= e)
						for (r = i = e; ++c < u;) null != (e = t[c]) && (r > e && (r = e), i < e && (i = e))
			} else
				for (; ++c < u;)
					if (null != (e = n(t[c], c, t)) && e >= e)
						for (r = i = e; ++c < u;) null != (e = n(t[c], c, t)) && (r > e && (r = e), i < e && (i = e));
			return [r, i]
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return i
		}), e.d(n, "a", function() {
			return u
		});
		var r = Array.prototype,
			i = r.slice,
			u = r.map
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n, e) {
			t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
			for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), u = new Array(i); ++r < i;) u[r] = t + r * e;
			return u
		}
	}, function(t, n, e) {
		"use strict";
		n.b = c, n.c = function(t, n, e) {
			var c = Math.abs(n - t) / Math.max(0, e),
				o = Math.pow(10, Math.floor(Math.log(c) / Math.LN10)),
				a = c / o;
			a >= r ? o *= 10 : a >= i ? o *= 5 : a >= u && (o *= 2);
			return n < t ? -o : o
		};
		var r = Math.sqrt(50),
			i = Math.sqrt(10),
			u = Math.sqrt(2);

		function c(t, n, e) {
			var c = (n - t) / Math.max(0, e),
				o = Math.floor(Math.log(c) / Math.LN10),
				a = c / Math.pow(10, o);
			return o >= 0 ? (a >= r ? 10 : a >= i ? 5 : a >= u ? 2 : 1) * Math.pow(10, o) : -Math.pow(10, -o) / (a >= r ? 10 : a >= i ? 5 : a >= u ? 2 : 1)
		}
		n.a = function(t, n, e) {
			var r, i, u, o, a = -1;
			if (e = +e, (t = +t) === (n = +n) && e > 0) return [t];
			if ((r = n < t) && (i = t, t = n, n = i), 0 === (o = c(t, n, e)) || !isFinite(o)) return [];
			if (o > 0)
				for (t = Math.ceil(t / o), n = Math.floor(n / o), u = new Array(i = Math.ceil(n - t + 1)); ++a < i;) u[a] = (t + a) * o;
			else
				for (t = Math.floor(t * o), n = Math.ceil(n * o), u = new Array(i = Math.ceil(t - n + 1)); ++a < i;) u[a] = (t - a) / o;
			return r && u.reverse(), u
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return Math.ceil(Math.log(t.length) / Math.LN2) + 1
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			var e, r, i = t.length,
				u = -1;
			if (null == n) {
				for (; ++u < i;)
					if (null != (e = t[u]) && e >= e)
						for (r = e; ++u < i;) null != (e = t[u]) && r > e && (r = e)
			} else
				for (; ++u < i;)
					if (null != (e = n(t[u], u, t)) && e >= e)
						for (r = e; ++u < i;) null != (e = n(t[u], u, t)) && r > e && (r = e);
			return r
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(100);

		function i(t) {
			return t.length
		}
		n.a = function(t) {
			if (!(c = t.length)) return [];
			for (var n = -1, e = Object(r.a)(t, i), u = new Array(e); ++n < e;)
				for (var c, o = -1, a = u[n] = new Array(c); ++o < c;) a[o] = t[o][n];
			return u
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(4);
		n.a = function(t) {
			return "string" == typeof t ? new r.a([
				[document.querySelector(t)]
			], [document.documentElement]) : new r.a([
				[t]
			], r.c)
		}
	}, function(t, n, e) {
		"use strict";

		function r() {
			return []
		}
		n.a = function(t) {
			return null == t ? r : function() {
				return this.querySelectorAll(t)
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = function(t) {
			return function() {
				return this.matches(t)
			}
		};
		if ("undefined" != typeof document) {
			var i = document.documentElement;
			if (!i.matches) {
				var u = i.webkitMatchesSelector || i.msMatchesSelector || i.mozMatchesSelector || i.oMatchesSelector;
				r = function(t) {
					return function() {
						return u.call(this, t)
					}
				}
			}
		}
		n.a = r
	}, function(t, n, e) {
		"use strict";
		n.a = u;
		var r = e(106),
			i = e(4);

		function u(t, n) {
			this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
		}
		n.b = function() {
			return new i.a(this._enter || this._groups.map(r.a), this._parents)
		}, u.prototype = {
			constructor: u,
			appendChild: function(t) {
				return this._parent.insertBefore(t, this._next)
			},
			insertBefore: function(t, n) {
				return this._parent.insertBefore(t, n)
			},
			querySelector: function(t) {
				return this._parent.querySelector(t)
			},
			querySelectorAll: function(t) {
				return this._parent.querySelectorAll(t)
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return new Array(t.length)
		}
	}, function(t, n, e) {
		"use strict";
		n.b = i;
		var r = e(55);

		function i(t, n) {
			return t.style.getPropertyValue(n) || Object(r.a)(t).getComputedStyle(t, null).getPropertyValue(n)
		}
		n.a = function(t, n, e) {
			return arguments.length > 1 ? this.each((null == n ? function(t) {
				return function() {
					this.style.removeProperty(t)
				}
			} : "function" == typeof n ? function(t, n, e) {
				return function() {
					var r = n.apply(this, arguments);
					null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
				}
			} : function(t, n, e) {
				return function() {
					this.style.setProperty(t, n, e)
				}
			})(t, n, null == e ? "" : e)) : i(this.node(), t)
		}
	}, function(t, n, e) {
		"use strict";
		n.b = function(t, n) {
			var e = t.document.documentElement,
				u = Object(r.k)(t).on("dragstart.drag", null);
			n && (u.on("click.drag", i.a, !0), setTimeout(function() {
				u.on("click.drag", null)
			}, 0));
			"onselectstart" in e ? u.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
		};
		var r = e(1),
			i = e(109);
		n.a = function(t) {
			var n = t.document.documentElement,
				e = Object(r.k)(t).on("dragstart.drag", i.a, !0);
			"onselectstart" in n ? e.on("selectstart.drag", i.a, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
		}
	}, function(t, n, e) {
		"use strict";
		n.b = function() {
			r.e.stopImmediatePropagation()
		};
		var r = e(1);
		n.a = function() {
			r.e.preventDefault(), r.e.stopImmediatePropagation()
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "a", function() {
			return r
		}), e.d(n, "b", function() {
			return i
		});
		var r = Math.PI / 180,
			i = 180 / Math.PI
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return a
		}), e.d(n, "c", function() {
			return f
		});
		var r = e(7),
			i = e(61),
			u = e(112),
			c = e(23);

		function o(t) {
			return function(n) {
				var e, i, u = n.length,
					c = new Array(u),
					o = new Array(u),
					a = new Array(u);
				for (e = 0; e < u; ++e) i = Object(r.f)(n[e]), c[e] = i.r || 0, o[e] = i.g || 0, a[e] = i.b || 0;
				return c = t(c), o = t(o), a = t(a), i.opacity = 1,
					function(t) {
						return i.r = c(t), i.g = o(t), i.b = a(t), i + ""
					}
			}
		}
		n.a = function t(n) {
			var e = Object(c.b)(n);

			function i(t, n) {
				var i = e((t = Object(r.f)(t)).r, (n = Object(r.f)(n)).r),
					u = e(t.g, n.g),
					o = e(t.b, n.b),
					a = Object(c.a)(t.opacity, n.opacity);
				return function(n) {
					return t.r = i(n), t.g = u(n), t.b = o(n), t.opacity = a(n), t + ""
				}
			}
			return i.gamma = t, i
		}(1);
		var a = o(i.b),
			f = o(u.a)
	}, function(t, n, e) {
		"use strict";
		var r = e(61);
		n.a = function(t) {
			var n = t.length;
			return function(e) {
				var i = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
					u = t[(i + n - 1) % n],
					c = t[i % n],
					o = t[(i + 1) % n],
					a = t[(i + 2) % n];
				return Object(r.a)((e - i / n) * n, u, c, o, a)
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return function() {
				return t
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(58);
		n.a = function(t, n) {
			var e, i = n ? n.length : 0,
				u = t ? Math.min(i, t.length) : 0,
				c = new Array(u),
				o = new Array(i);
			for (e = 0; e < u; ++e) c[e] = Object(r.a)(t[e], n[e]);
			for (; e < i; ++e) o[e] = n[e];
			return function(t) {
				for (e = 0; e < u; ++e) o[e] = c[e](t);
				return o
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			var e = new Date;
			return n -= t = +t,
				function(r) {
					return e.setTime(t + n * r), e
				}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(58);
		n.a = function(t, n) {
			var e, i = {},
				u = {};
			for (e in null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {}), n) e in t ? i[e] = Object(r.a)(t[e], n[e]) : u[e] = n[e];
			return function(t) {
				for (e in i) u[e] = i[e](t);
				return u
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(35),
			i = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
			u = new RegExp(i.source, "g");
		n.a = function(t, n) {
			var e, c, o, a = i.lastIndex = u.lastIndex = 0,
				f = -1,
				s = [],
				l = [];
			for (t += "", n += "";
				(e = i.exec(t)) && (c = u.exec(n));)(o = c.index) > a && (o = n.slice(a, o), s[f] ? s[f] += o : s[++f] = o), (e = e[0]) === (c = c[0]) ? s[f] ? s[f] += c : s[++f] = c : (s[++f] = null, l.push({
				i: f,
				x: Object(r.a)(e, c)
			})), a = u.lastIndex;
			return a < n.length && (o = n.slice(a), s[f] ? s[f] += o : s[++f] = o), s.length < 2 ? l[0] ? function(t) {
				return function(n) {
					return t(n) + ""
				}
			}(l[0].x) : function(t) {
				return function() {
					return t
				}
			}(n) : (n = l.length, function(t) {
				for (var e, r = 0; r < n; ++r) s[(e = l[r]).i] = e.x(t);
				return s.join("")
			})
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(6);
		n.a = function(t, n) {
			var e, i, u, c = t.__transition,
				o = !0;
			if (c) {
				for (u in n = null == n ? null : n + "", c)(e = c[u]).name === n ? (i = e.state > r.d && e.state < r.b, e.state = r.a, e.timer.stop(), i && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete c[u]) : o = !1;
				o && delete t.__transition
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(7),
			i = e(5);
		n.a = function(t, n) {
			var e;
			return ("number" == typeof n ? i.m : n instanceof r.a ? i.o : (e = Object(r.a)(n)) ? (n = e, i.o) : i.s)(t, n)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(268);
		e.d(n, "y", function() {
			return r.a
		});
		var i = e(269);
		e.d(n, "D", function() {
			return i.b
		}), e.d(n, "E", function() {
			return i.a
		}), e.d(n, "G", function() {
			return i.c
		}), e.d(n, "F", function() {
			return i.b
		});
		var u = e(270);
		e.d(n, "m", function() {
			return u.b
		}), e.d(n, "n", function() {
			return u.a
		}), e.d(n, "p", function() {
			return u.c
		}), e.d(n, "o", function() {
			return u.b
		});
		var c = e(271);
		e.d(n, "z", function() {
			return c.b
		}), e.d(n, "A", function() {
			return c.a
		}), e.d(n, "C", function() {
			return c.c
		}), e.d(n, "B", function() {
			return c.b
		});
		var o = e(272);
		e.d(n, "H", function() {
			return o.b
		}), e.d(n, "I", function() {
			return o.a
		}), e.d(n, "K", function() {
			return o.c
		}), e.d(n, "J", function() {
			return o.b
		});
		var a = e(273);
		e.d(n, "u", function() {
			return a.b
		}), e.d(n, "v", function() {
			return a.a
		}), e.d(n, "x", function() {
			return a.c
		}), e.d(n, "w", function() {
			return a.b
		});
		var f = e(274);
		e.d(n, "i", function() {
			return f.b
		}), e.d(n, "j", function() {
			return f.a
		}), e.d(n, "l", function() {
			return f.c
		}), e.d(n, "k", function() {
			return f.b
		});
		var s = e(275);
		e.d(n, "e", function() {
			return s.c
		}), e.d(n, "f", function() {
			return s.a
		}), e.d(n, "h", function() {
			return s.c
		}), e.d(n, "g", function() {
			return s.b
		});
		var l = e(276);
		e.d(n, "a", function() {
			return l.b
		}), e.d(n, "b", function() {
			return l.a
		}), e.d(n, "d", function() {
			return l.c
		}), e.d(n, "c", function() {
			return l.b
		});
		var h = e(277);
		e.d(n, "q", function() {
			return h.c
		}), e.d(n, "r", function() {
			return h.a
		}), e.d(n, "t", function() {
			return h.c
		}), e.d(n, "s", function() {
			return h.b
		})
	}, function(t, n, e) {
		"use strict";
		e.d(n, "a", function() {
			return r
		}), e.d(n, "d", function() {
			return i
		}), e.d(n, "b", function() {
			return c
		}), e.d(n, "e", function() {
			return o
		}), e.d(n, "c", function() {
			return a
		});
		var r = Math.cos,
			i = Math.sin,
			u = Math.PI,
			c = u / 2,
			o = 2 * u,
			a = Math.max
	}, function(t, n, e) {
		"use strict";
		n.b = function(t) {
			return t.x
		}, n.c = function(t) {
			return t.y
		};
		var r = e(12),
			i = e(21),
			u = e(36);
		var c = 10,
			o = Math.PI * (3 - Math.sqrt(5));
		n.a = function(t) {
			var n, e = 1,
				a = .001,
				f = 1 - Math.pow(a, 1 / 300),
				s = 0,
				l = .6,
				h = Object(i.c)(),
				d = Object(u.d)(v),
				b = Object(r.a)("tick", "end");

			function v() {
				p(), b.call("tick", n), e < a && (d.stop(), b.call("end", n))
			}

			function p() {
				var n, r, i = t.length;
				for (e += (s - e) * f, h.each(function(t) {
						t(e)
					}), n = 0; n < i; ++n) null == (r = t[n]).fx ? r.x += r.vx *= l : (r.x = r.fx, r.vx = 0), null == r.fy ? r.y += r.vy *= l : (r.y = r.fy, r.vy = 0)
			}

			function g() {
				for (var n, e = 0, r = t.length; e < r; ++e) {
					if ((n = t[e]).index = e, isNaN(n.x) || isNaN(n.y)) {
						var i = c * Math.sqrt(e),
							u = e * o;
						n.x = i * Math.cos(u), n.y = i * Math.sin(u)
					}(isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0)
				}
			}

			function _(n) {
				return n.initialize && n.initialize(t), n
			}
			return null == t && (t = []), g(), n = {
				tick: p,
				restart: function() {
					return d.restart(v), n
				},
				stop: function() {
					return d.stop(), n
				},
				nodes: function(e) {
					return arguments.length ? (t = e, g(), h.each(_), n) : t
				},
				alpha: function(t) {
					return arguments.length ? (e = +t, n) : e
				},
				alphaMin: function(t) {
					return arguments.length ? (a = +t, n) : a
				},
				alphaDecay: function(t) {
					return arguments.length ? (f = +t, n) : +f
				},
				alphaTarget: function(t) {
					return arguments.length ? (s = +t, n) : s
				},
				velocityDecay: function(t) {
					return arguments.length ? (l = 1 - t, n) : 1 - l
				},
				force: function(t, e) {
					return arguments.length > 1 ? (null == e ? h.remove(t) : h.set(t, _(e)), n) : h.get(t)
				},
				find: function(n, e, r) {
					var i, u, c, o, a, f = 0,
						s = t.length;
					for (null == r ? r = 1 / 0 : r *= r, f = 0; f < s; ++f)(c = (i = n - (o = t[f]).x) * i + (u = e - o.y) * u) < r && (a = o, r = c);
					return a
				},
				on: function(t, e) {
					return arguments.length > 1 ? (b.on(t, e), n) : b.on(t)
				}
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(38),
			i = e(317),
			u = e(318),
			c = e(124),
			o = e(125),
			a = e(126),
			f = e(321),
			s = ["y", "z", "a", "f", "p", "n", "Âµ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
		n.a = function(t) {
			var n = t.grouping && t.thousands ? Object(i.a)(t.grouping, t.thousands) : f.a,
				e = t.currency,
				l = t.decimal,
				h = t.numerals ? Object(u.a)(t.numerals) : f.a,
				d = t.percent || "%";

			function b(t) {
				var r = (t = Object(c.a)(t)).fill,
					i = t.align,
					u = t.sign,
					f = t.symbol,
					b = t.zero,
					v = t.width,
					p = t.comma,
					g = t.precision,
					_ = t.type,
					y = "$" === f ? e[0] : "#" === f && /[boxX]/.test(_) ? "0" + _.toLowerCase() : "",
					m = "$" === f ? e[1] : /[%p]/.test(_) ? d : "",
					O = o.a[_],
					j = !_ || /[defgprs%]/.test(_);

				function x(t) {
					var e, c, o, f = y,
						d = m;
					if ("c" === _) d = O(t) + d, t = "";
					else {
						var x = (t = +t) < 0;
						if (t = O(Math.abs(t), g), x && 0 == +t && (x = !1), f = (x ? "(" === u ? u : "-" : "-" === u || "(" === u ? "" : u) + f, d = ("s" === _ ? s[8 + a.b / 3] : "") + d + (x && "(" === u ? ")" : ""), j)
							for (e = -1, c = t.length; ++e < c;)
								if (48 > (o = t.charCodeAt(e)) || o > 57) {
									d = (46 === o ? l + t.slice(e + 1) : t.slice(e)) + d, t = t.slice(0, e);
									break
								}
					}
					p && !b && (t = n(t, 1 / 0));
					var w = f.length + t.length + d.length,
						M = w < v ? new Array(v - w + 1).join(r) : "";
					switch (p && b && (t = n(M + t, M.length ? v - d.length : 1 / 0), M = ""), i) {
						case "<":
							t = f + t + d + M;
							break;
						case "=":
							t = f + M + t + d;
							break;
						case "^":
							t = M.slice(0, w = M.length >> 1) + f + t + d + M.slice(w);
							break;
						default:
							t = M + f + t + d
					}
					return h(t)
				}
				return g = null == g ? _ ? 6 : 12 : /[gprs]/.test(_) ? Math.max(1, Math.min(21, g)) : Math.max(0, Math.min(20, g)), x.toString = function() {
					return t + ""
				}, x
			}
			return {
				format: b,
				formatPrefix: function(t, n) {
					var e = b(((t = Object(c.a)(t)).type = "f", t)),
						i = 3 * Math.max(-8, Math.min(8, Math.floor(Object(r.a)(n) / 3))),
						u = Math.pow(10, -i),
						o = s[8 + i / 3];
					return function(t) {
						return e(u * t) + o
					}
				}
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.a = u;
		var r = e(125),
			i = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;

		function u(t) {
			return new c(t)
		}

		function c(t) {
			if (!(n = i.exec(t))) throw new Error("invalid format: " + t);
			var n, e = n[1] || " ",
				u = n[2] || ">",
				c = n[3] || "-",
				o = n[4] || "",
				a = !!n[5],
				f = n[6] && +n[6],
				s = !!n[7],
				l = n[8] && +n[8].slice(1),
				h = n[9] || "";
			"n" === h ? (s = !0, h = "g") : r.a[h] || (h = ""), (a || "0" === e && "=" === u) && (a = !0, e = "0", u = "="), this.fill = e, this.align = u, this.sign = c, this.symbol = o, this.zero = a, this.width = f, this.comma = s, this.precision = l, this.type = h
		}
		u.prototype = c.prototype, c.prototype.toString = function() {
			return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(319),
			i = e(126),
			u = e(320);
		n.a = {
			"": r.a,
			"%": function(t, n) {
				return (100 * t).toFixed(n)
			},
			b: function(t) {
				return Math.round(t).toString(2)
			},
			c: function(t) {
				return t + ""
			},
			d: function(t) {
				return Math.round(t).toString(10)
			},
			e: function(t, n) {
				return t.toExponential(n)
			},
			f: function(t, n) {
				return t.toFixed(n)
			},
			g: function(t, n) {
				return t.toPrecision(n)
			},
			o: function(t) {
				return Math.round(t).toString(8)
			},
			p: function(t, n) {
				return Object(u.a)(100 * t, n)
			},
			r: u.a,
			s: i.a,
			X: function(t) {
				return Math.round(t).toString(16).toUpperCase()
			},
			x: function(t) {
				return Math.round(t).toString(16)
			}
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return r
		});
		var r, i = e(71);
		n.a = function(t, n) {
			var e = Object(i.a)(t, n);
			if (!e) return t + "";
			var u = e[0],
				c = e[1],
				o = c - (r = 3 * Math.max(-8, Math.min(8, Math.floor(c / 3)))) + 1,
				a = u.length;
			return o === a ? u : o > a ? u + new Array(o - a + 1).join("0") : o > 0 ? u.slice(0, o) + "." + u.slice(o) : "0." + new Array(1 - o).join("0") + Object(i.a)(t, Math.max(0, n + o - 1))[0]
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "a", function() {
			return h
		}), e.d(n, "b", function() {
			return b
		});
		var r, i, u, c, o, a = e(19),
			f = e(0),
			s = e(11),
			l = e(14),
			h = Object(a.a)(),
			d = Object(a.a)(),
			b = {
				point: s.a,
				lineStart: s.a,
				lineEnd: s.a,
				polygonStart: function() {
					h.reset(), b.lineStart = v, b.lineEnd = p
				},
				polygonEnd: function() {
					var t = +h;
					d.add(t < 0 ? f.w + t : t), this.lineStart = this.lineEnd = this.point = s.a
				},
				sphere: function() {
					d.add(f.w)
				}
			};

		function v() {
			b.point = g
		}

		function p() {
			_(r, i)
		}

		function g(t, n) {
			b.point = _, r = t, i = n, t *= f.r, n *= f.r, u = t, c = Object(f.g)(n = n / 2 + f.q), o = Object(f.t)(n)
		}

		function _(t, n) {
			t *= f.r, n = (n *= f.r) / 2 + f.q;
			var e = t - u,
				r = e >= 0 ? 1 : -1,
				i = r * e,
				a = Object(f.g)(n),
				s = Object(f.t)(n),
				l = o * s,
				d = c * a + l * Object(f.g)(i),
				b = l * r * Object(f.t)(i);
			h.add(Object(f.e)(b, d)), u = t, c = a, o = s
		}
		n.c = function(t) {
			return d.reset(), Object(l.a)(t, b), 2 * d
		}
	}, function(t, n, e) {
		"use strict";
		n.a = o;
		var r = e(24),
			i = e(328),
			u = e(0),
			c = e(39);

		function o(t, n, e, i, c, o) {
			if (e) {
				var f = Object(u.g)(n),
					s = Object(u.t)(n),
					l = i * e;
				null == c ? (c = n + i * u.w, o = n - l / 2) : (c = a(f, c), o = a(f, o), (i > 0 ? c < o : c > o) && (c += i * u.w));
				for (var h, d = c; i > 0 ? d > o : d < o; d -= l) h = Object(r.g)([f, -s * Object(u.g)(d), -s * Object(u.t)(d)]), t.point(h[0], h[1])
			}
		}

		function a(t, n) {
			(n = Object(r.a)(n))[0] -= t, Object(r.e)(n);
			var e = Object(u.b)(-n[1]);
			return ((-n[2] < 0 ? -e : e) + u.w - u.i) % u.w
		}
		n.b = function() {
			var t, n, e = Object(i.a)([0, 0]),
				r = Object(i.a)(90),
				a = Object(i.a)(6),
				f = {
					point: function(e, r) {
						t.push(e = n(e, r)), e[0] *= u.h, e[1] *= u.h
					}
				};

			function s() {
				var i = e.apply(this, arguments),
					s = r.apply(this, arguments) * u.r,
					l = a.apply(this, arguments) * u.r;
				return t = [], n = Object(c.b)(-i[0] * u.r, -i[1] * u.r, 0).invert, o(f, s, l, 1), i = {
					type: "Polygon",
					coordinates: [t]
				}, t = n = null, i
			}
			return s.center = function(t) {
				return arguments.length ? (e = "function" == typeof t ? t : Object(i.a)([+t[0], +t[1]]), s) : e
			}, s.radius = function(t) {
				return arguments.length ? (r = "function" == typeof t ? t : Object(i.a)(+t), s) : r
			}, s.precision = function(t) {
				return arguments.length ? (a = "function" == typeof t ? t : Object(i.a)(+t), s) : a
			}, s
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			function e(e, r) {
				return e = t(e, r), n(e[0], e[1])
			}
			return t.invert && n.invert && (e.invert = function(e, r) {
				return (e = n.invert(e, r)) && t.invert(e[0], e[1])
			}), e
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(131),
			i = e(0);
		n.a = Object(r.a)(function() {
			return !0
		}, function(t) {
			var n, e = NaN,
				r = NaN,
				u = NaN;
			return {
				lineStart: function() {
					t.lineStart(), n = 1
				},
				point: function(c, o) {
					var a = c > 0 ? i.o : -i.o,
						f = Object(i.a)(c - e);
					Object(i.a)(f - i.o) < i.i ? (t.point(e, r = (r + o) / 2 > 0 ? i.l : -i.l), t.point(u, r), t.lineEnd(), t.lineStart(), t.point(a, r), t.point(c, r), n = 0) : u !== a && f >= i.o && (Object(i.a)(e - u) < i.i && (e -= u * i.i), Object(i.a)(c - a) < i.i && (c -= a * i.i), r = function(t, n, e, r) {
						var u, c, o = Object(i.t)(t - e);
						return Object(i.a)(o) > i.i ? Object(i.d)((Object(i.t)(n) * (c = Object(i.g)(r)) * Object(i.t)(e) - Object(i.t)(r) * (u = Object(i.g)(n)) * Object(i.t)(t)) / (u * c * o)) : (n + r) / 2
					}(e, r, c, o), t.point(u, r), t.lineEnd(), t.lineStart(), t.point(a, r), n = 0), t.point(e = c, r = o), u = a
				},
				lineEnd: function() {
					t.lineEnd(), e = r = NaN
				},
				clean: function() {
					return 2 - n
				}
			}
		}, function(t, n, e, r) {
			var u;
			if (null == t) u = e * i.l, r.point(-i.o, u), r.point(0, u), r.point(i.o, u), r.point(i.o, 0), r.point(i.o, -u), r.point(0, -u), r.point(-i.o, -u), r.point(-i.o, 0), r.point(-i.o, u);
			else if (Object(i.a)(t[0] - n[0]) > i.i) {
				var c = t[0] < n[0] ? i.o : -i.o;
				u = e * c / 2, r.point(-c, u), r.point(0, u), r.point(c, u)
			} else r.point(n[0], n[1])
		}, [-i.o, -i.l])
	}, function(t, n, e) {
		"use strict";
		var r = e(132),
			i = e(133),
			u = e(0),
			c = e(135),
			o = e(3);

		function a(t) {
			return t.length > 1
		}

		function f(t, n) {
			return ((t = t.x)[0] < 0 ? t[1] - u.l - u.i : u.l - t[1]) - ((n = n.x)[0] < 0 ? n[1] - u.l - u.i : u.l - n[1])
		}
		n.a = function(t, n, e, u) {
			return function(s) {
				var l, h, d, b = n(s),
					v = Object(r.a)(),
					p = n(v),
					g = !1,
					_ = {
						point: y,
						lineStart: O,
						lineEnd: j,
						polygonStart: function() {
							_.point = x, _.lineStart = w, _.lineEnd = M, h = [], l = []
						},
						polygonEnd: function() {
							_.point = y, _.lineStart = O, _.lineEnd = j, h = Object(o.n)(h);
							var t = Object(c.a)(l, u);
							h.length ? (g || (s.polygonStart(), g = !0), Object(i.a)(h, f, t, e, s)) : t && (g || (s.polygonStart(), g = !0), s.lineStart(), e(null, null, 1, s), s.lineEnd()), g && (s.polygonEnd(), g = !1), h = l = null
						},
						sphere: function() {
							s.polygonStart(), s.lineStart(), e(null, null, 1, s), s.lineEnd(), s.polygonEnd()
						}
					};

				function y(n, e) {
					t(n, e) && s.point(n, e)
				}

				function m(t, n) {
					b.point(t, n)
				}

				function O() {
					_.point = m, b.lineStart()
				}

				function j() {
					_.point = y, b.lineEnd()
				}

				function x(t, n) {
					d.push([t, n]), p.point(t, n)
				}

				function w() {
					p.lineStart(), d = []
				}

				function M() {
					x(d[0][0], d[0][1]), p.lineEnd();
					var t, n, e, r, i = p.clean(),
						u = v.result(),
						c = u.length;
					if (d.pop(), l.push(d), d = null, c)
						if (1 & i) {
							if ((n = (e = u[0]).length - 1) > 0) {
								for (g || (s.polygonStart(), g = !0), s.lineStart(), t = 0; t < n; ++t) s.point((r = e[t])[0], r[1]);
								s.lineEnd()
							}
						} else c > 1 && 2 & i && u.push(u.pop().concat(u.shift())), h.push(u.filter(a))
				}
				return _
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(11);
		n.a = function() {
			var t, n = [];
			return {
				point: function(n, e) {
					t.push([n, e])
				},
				lineStart: function() {
					n.push(t = [])
				},
				lineEnd: r.a,
				rejoin: function() {
					n.length > 1 && n.push(n.pop().concat(n.shift()))
				},
				result: function() {
					var e = n;
					return n = [], t = null, e
				}
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(134);

		function i(t, n, e, r) {
			this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
		}

		function u(t) {
			if (n = t.length) {
				for (var n, e, r = 0, i = t[0]; ++r < n;) i.n = e = t[r], e.p = i, i = e;
				i.n = e = t[0], e.p = i
			}
		}
		n.a = function(t, n, e, c, o) {
			var a, f, s = [],
				l = [];
			if (t.forEach(function(t) {
					if (!((n = t.length - 1) <= 0)) {
						var n, e, u = t[0],
							c = t[n];
						if (Object(r.a)(u, c)) {
							for (o.lineStart(), a = 0; a < n; ++a) o.point((u = t[a])[0], u[1]);
							o.lineEnd()
						} else s.push(e = new i(u, t, null, !0)), l.push(e.o = new i(u, null, e, !1)), s.push(e = new i(c, t, null, !1)), l.push(e.o = new i(c, null, e, !0))
					}
				}), s.length) {
				for (l.sort(n), u(s), u(l), a = 0, f = l.length; a < f; ++a) l[a].e = e = !e;
				for (var h, d, b = s[0];;) {
					for (var v = b, p = !0; v.v;)
						if ((v = v.n) === b) return;
					h = v.z, o.lineStart();
					do {
						if (v.v = v.o.v = !0, v.e) {
							if (p)
								for (a = 0, f = h.length; a < f; ++a) o.point((d = h[a])[0], d[1]);
							else c(v.x, v.n.x, 1, o);
							v = v.n
						} else {
							if (p)
								for (h = v.p.z, a = h.length - 1; a >= 0; --a) o.point((d = h[a])[0], d[1]);
							else c(v.x, v.p.x, -1, o);
							v = v.p
						}
						h = (v = v.o).z, p = !p
					} while (!v.v);
					o.lineEnd()
				}
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(0);
		n.a = function(t, n) {
			return Object(r.a)(t[0] - n[0]) < r.i && Object(r.a)(t[1] - n[1]) < r.i
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(19),
			i = e(24),
			u = e(0),
			c = Object(r.a)();
		n.a = function(t, n) {
			var e = n[0],
				r = n[1],
				o = [Object(u.t)(e), -Object(u.g)(e), 0],
				a = 0,
				f = 0;
			c.reset();
			for (var s = 0, l = t.length; s < l; ++s)
				if (d = (h = t[s]).length)
					for (var h, d, b = h[d - 1], v = b[0], p = b[1] / 2 + u.q, g = Object(u.t)(p), _ = Object(u.g)(p), y = 0; y < d; ++y, v = O, g = x, _ = w, b = m) {
						var m = h[y],
							O = m[0],
							j = m[1] / 2 + u.q,
							x = Object(u.t)(j),
							w = Object(u.g)(j),
							M = O - v,
							k = M >= 0 ? 1 : -1,
							T = k * M,
							N = T > u.o,
							E = g * x;
						if (c.add(Object(u.e)(E * k * Object(u.t)(T), _ * w + E * Object(u.g)(T))), a += N ? M + k * u.w : M, N ^ v >= e ^ O >= e) {
							var S = Object(i.c)(Object(i.a)(b), Object(i.a)(m));
							Object(i.e)(S);
							var A = Object(i.c)(o, S);
							Object(i.e)(A);
							var C = (N ^ M >= 0 ? -1 : 1) * Object(u.c)(A[2]);
							(r > C || r === C && (S[0] || S[1])) && (f += N ^ M >= 0 ? 1 : -1)
						}
					}
			return (a < -u.i || a < u.i && c < -u.i) ^ 1 & f
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(24),
			i = e(128),
			u = e(0),
			c = e(134),
			o = e(131);
		n.a = function(t) {
			var n = Object(u.g)(t),
				e = 6 * u.r,
				a = n > 0,
				f = Object(u.a)(n) > u.i;

			function s(t, e) {
				return Object(u.g)(t) * Object(u.g)(e) > n
			}

			function l(t, e, i) {
				var c = Object(r.a)(t),
					o = Object(r.a)(e),
					a = [1, 0, 0],
					f = Object(r.c)(c, o),
					s = Object(r.d)(f, f),
					l = f[0],
					h = s - l * l;
				if (!h) return !i && t;
				var d = n * s / h,
					b = -n * l / h,
					v = Object(r.c)(a, f),
					p = Object(r.f)(a, d),
					g = Object(r.f)(f, b);
				Object(r.b)(p, g);
				var _ = v,
					y = Object(r.d)(p, _),
					m = Object(r.d)(_, _),
					O = y * y - m * (Object(r.d)(p, p) - 1);
				if (!(O < 0)) {
					var j = Object(u.u)(O),
						x = Object(r.f)(_, (-y - j) / m);
					if (Object(r.b)(x, p), x = Object(r.g)(x), !i) return x;
					var w, M = t[0],
						k = e[0],
						T = t[1],
						N = e[1];
					k < M && (w = M, M = k, k = w);
					var E = k - M,
						S = Object(u.a)(E - u.o) < u.i;
					if (!S && N < T && (w = T, T = N, N = w), S || E < u.i ? S ? T + N > 0 ^ x[1] < (Object(u.a)(x[0] - M) < u.i ? T : N) : T <= x[1] && x[1] <= N : E > u.o ^ (M <= x[0] && x[0] <= k)) {
						var A = Object(r.f)(_, (-y + j) / m);
						return Object(r.b)(A, p), [x, Object(r.g)(A)]
					}
				}
			}

			function h(n, e) {
				var r = a ? t : u.o - t,
					i = 0;
				return n < -r ? i |= 1 : n > r && (i |= 2), e < -r ? i |= 4 : e > r && (i |= 8), i
			}
			return Object(o.a)(s, function(t) {
				var n, e, r, i, o;
				return {
					lineStart: function() {
						i = r = !1, o = 1
					},
					point: function(d, b) {
						var v, p = [d, b],
							g = s(d, b),
							_ = a ? g ? 0 : h(d, b) : g ? h(d + (d < 0 ? u.o : -u.o), b) : 0;
						if (!n && (i = r = g) && t.lineStart(), g !== r && (!(v = l(n, p)) || Object(c.a)(n, v) || Object(c.a)(p, v)) && (p[0] += u.i, p[1] += u.i, g = s(p[0], p[1])), g !== r) o = 0, g ? (t.lineStart(), v = l(p, n), t.point(v[0], v[1])) : (v = l(n, p), t.point(v[0], v[1]), t.lineEnd()), n = v;
						else if (f && n && a ^ g) {
							var y;
							_ & e || !(y = l(p, n, !0)) || (o = 0, a ? (t.lineStart(), t.point(y[0][0], y[0][1]), t.point(y[1][0], y[1][1]), t.lineEnd()) : (t.point(y[1][0], y[1][1]), t.lineEnd(), t.lineStart(), t.point(y[0][0], y[0][1])))
						}!g || n && Object(c.a)(n, p) || t.point(p[0], p[1]), n = p, r = g, e = _
					},
					lineEnd: function() {
						r && t.lineEnd(), n = null
					},
					clean: function() {
						return o | (i && r) << 1
					}
				}
			}, function(n, r, u, c) {
				Object(i.a)(c, t, e, u, n, r)
			}, a ? [0, -t] : [-u.o, t - u.o])
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(138),
			i = [null, null],
			u = {
				type: "LineString",
				coordinates: i
			};
		n.a = function(t, n) {
			return i[0] = t, i[1] = n, Object(r.a)(u)
		}
	}, function(t, n, e) {
		"use strict";
		var r, i, u, c = e(19),
			o = e(0),
			a = e(11),
			f = e(14),
			s = Object(c.a)(),
			l = {
				sphere: a.a,
				point: a.a,
				lineStart: function() {
					l.point = d, l.lineEnd = h
				},
				lineEnd: a.a,
				polygonStart: a.a,
				polygonEnd: a.a
			};

		function h() {
			l.point = l.lineEnd = a.a
		}

		function d(t, n) {
			t *= o.r, n *= o.r, r = t, i = Object(o.t)(n), u = Object(o.g)(n), l.point = b
		}

		function b(t, n) {
			t *= o.r, n *= o.r;
			var e = Object(o.t)(n),
				c = Object(o.g)(n),
				a = Object(o.a)(t - r),
				f = Object(o.g)(a),
				l = c * Object(o.t)(a),
				h = u * e - i * c * f,
				d = i * e + u * c * f;
			s.add(Object(o.e)(Object(o.u)(l * l + h * h), d)), r = t, i = e, u = c
		}
		n.a = function(t) {
			return s.reset(), Object(f.a)(t, l), +s
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(11),
			i = 1 / 0,
			u = i,
			c = -i,
			o = c,
			a = {
				point: function(t, n) {
					t < i && (i = t);
					t > c && (c = t);
					n < u && (u = n);
					n > o && (o = n)
				},
				lineStart: r.a,
				lineEnd: r.a,
				polygonStart: r.a,
				polygonEnd: r.a,
				result: function() {
					var t = [
						[i, u],
						[c, o]
					];
					return c = o = -(u = i = 1 / 0), t
				}
			};
		n.a = a
	}, function(t, n, e) {
		"use strict";
		var r = e(73);
		n.a = function() {
			return Object(r.b)().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
		}
	}, function(t, n, e) {
		"use strict";
		n.b = i;
		var r = e(8);

		function i(t, n) {
			return [t, n]
		}
		i.invert = i, n.a = function() {
			return Object(r.a)(i).scale(152.63)
		}
	}, function(t, n, e) {
		"use strict";
		n.b = a;
		var r = e(143);

		function i(t, n, e) {
			var r = t.x,
				i = t.y,
				u = n.r + e.r,
				c = t.r + e.r,
				o = n.x - r,
				a = n.y - i,
				f = o * o + a * a;
			if (f) {
				var s = .5 + ((c *= c) - (u *= u)) / (2 * f),
					l = Math.sqrt(Math.max(0, 2 * u * (c + f) - (c -= f) * c - u * u)) / (2 * f);
				e.x = r + s * o + l * a, e.y = i + s * a - l * o
			} else e.x = r + c, e.y = i
		}

		function u(t, n) {
			var e = n.x - t.x,
				r = n.y - t.y,
				i = t.r + n.r;
			return i * i - 1e-6 > e * e + r * r
		}

		function c(t) {
			var n = t._,
				e = t.next._,
				r = n.r + e.r,
				i = (n.x * e.r + e.x * n.r) / r,
				u = (n.y * e.r + e.y * n.r) / r;
			return i * i + u * u
		}

		function o(t) {
			this._ = t, this.next = null, this.previous = null
		}

		function a(t) {
			if (!(f = t.length)) return 0;
			var n, e, a, f, s, l, h, d, b, v, p;
			if ((n = t[0]).x = 0, n.y = 0, !(f > 1)) return n.r;
			if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(f > 2)) return n.r + e.r;
			i(e, n, a = t[2]), n = new o(n), e = new o(e), a = new o(a), n.next = a.previous = e, e.next = n.previous = a, a.next = e.previous = n;
			t: for (h = 3; h < f; ++h) {
				i(n._, e._, a = t[h]), a = new o(a), d = e.next, b = n.previous, v = e._.r, p = n._.r;
				do {
					if (v <= p) {
						if (u(d._, a._)) {
							e = d, n.next = e, e.previous = n, --h;
							continue t
						}
						v += d._.r, d = d.next
					} else {
						if (u(b._, a._)) {
							(n = b).next = e, e.previous = n, --h;
							continue t
						}
						p += b._.r, b = b.previous
					}
				} while (d !== b.next);
				for (a.previous = n, a.next = e, n.next = e.previous = e = a, s = c(n);
					(a = a.next) !== e;)(l = c(a)) < s && (n = a, s = l);
				e = n.next
			}
			for (n = [e._], a = e;
				(a = a.next) !== e;) n.push(a._);
			for (a = Object(r.a)(n), h = 0; h < f; ++h)(n = t[h]).x -= a.x, n.y -= a.y;
			return a.r
		}
		n.a = function(t) {
			return a(t), t
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(367);

		function i(t, n) {
			var e, r;
			if (o(n, t)) return [n];
			for (e = 0; e < t.length; ++e)
				if (u(n, t[e]) && o(f(t[e], n), t)) return [t[e], n];
			for (e = 0; e < t.length - 1; ++e)
				for (r = e + 1; r < t.length; ++r)
					if (u(f(t[e], t[r]), n) && u(f(t[e], n), t[r]) && u(f(t[r], n), t[e]) && o(s(t[e], t[r], n), t)) return [t[e], t[r], n];
			throw new Error
		}

		function u(t, n) {
			var e = t.r - n.r,
				r = n.x - t.x,
				i = n.y - t.y;
			return e < 0 || e * e < r * r + i * i
		}

		function c(t, n) {
			var e = t.r - n.r + 1e-6,
				r = n.x - t.x,
				i = n.y - t.y;
			return e > 0 && e * e > r * r + i * i
		}

		function o(t, n) {
			for (var e = 0; e < n.length; ++e)
				if (!c(t, n[e])) return !1;
			return !0
		}

		function a(t) {
			switch (t.length) {
				case 1:
					return {
						x: (n = t[0]).x, y: n.y, r: n.r
					};
				case 2:
					return f(t[0], t[1]);
				case 3:
					return s(t[0], t[1], t[2])
			}
			var n
		}

		function f(t, n) {
			var e = t.x,
				r = t.y,
				i = t.r,
				u = n.x,
				c = n.y,
				o = n.r,
				a = u - e,
				f = c - r,
				s = o - i,
				l = Math.sqrt(a * a + f * f);
			return {
				x: (e + u + a / l * s) / 2,
				y: (r + c + f / l * s) / 2,
				r: (l + i + o) / 2
			}
		}

		function s(t, n, e) {
			var r = t.x,
				i = t.y,
				u = t.r,
				c = n.x,
				o = n.y,
				a = n.r,
				f = e.x,
				s = e.y,
				l = e.r,
				h = r - c,
				d = r - f,
				b = i - o,
				v = i - s,
				p = a - u,
				g = l - u,
				_ = r * r + i * i - u * u,
				y = _ - c * c - o * o + a * a,
				m = _ - f * f - s * s + l * l,
				O = d * b - h * v,
				j = (b * m - v * y) / (2 * O) - r,
				x = (v * p - b * g) / O,
				w = (d * y - h * m) / (2 * O) - i,
				M = (h * g - d * p) / O,
				k = x * x + M * M - 1,
				T = 2 * (u + j * x + w * M),
				N = j * j + w * w - u * u,
				E = -(k ? (T + Math.sqrt(T * T - 4 * k * N)) / (2 * k) : N / T);
			return {
				x: r + j + x * E,
				y: i + w + M * E,
				r: E
			}
		}
		n.a = function(t) {
			for (var n, e, u = 0, o = (t = Object(r.a)(r.b.call(t))).length, f = []; u < o;) n = t[u], e && c(e, n) ? ++u : (e = a(f = i(f, n)), u = 0);
			return e
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function() {
			return 0
		}, n.b = function(t) {
			return function() {
				return t
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(20);
		n.a = function t(n) {
			function e(t, e) {
				var r, i;
				return t = null == t ? 0 : +t, e = null == e ? 1 : +e,
					function() {
						var u;
						if (null != r) u = r, r = null;
						else
							do {
								r = 2 * n() - 1, u = 2 * n() - 1, i = r * r + u * u
							} while (!i || i > 1);
						return t + e * u * Math.sqrt(-2 * Math.log(i) / i)
					}
			}
			return e.source = t, e
		}(r.a)
	}, function(t, n, e) {
		"use strict";
		var r = e(20);
		n.a = function t(n) {
			function e(t) {
				return function() {
					for (var e = 0, r = 0; r < t; ++r) e += n();
					return e
				}
			}
			return e.source = t, e
		}(r.a)
	}, function(t, n, e) {
		"use strict";
		var r = e(80);
		n.a = function(t, n) {
			return function(e, i, u) {
				arguments.length < 3 && (u = i, i = null);
				var c = Object(r.a)(e).mimeType(t);
				return c.row = function(t) {
					return arguments.length ? c.response(function(t, n) {
						return function(e) {
							return t(e.responseText, n)
						}
					}(n, i = t)) : i
				}, c.row(i), u ? c.get(u) : c
			}
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return u
		}), n.a = function t(n) {
			var e = Object(r.c)(),
				c = [],
				o = u;
			n = null == n ? [] : i.b.call(n);

			function a(t) {
				var r = t + "",
					i = e.get(r);
				if (!i) {
					if (o !== u) return o;
					e.set(r, i = c.push(t))
				}
				return n[(i - 1) % n.length]
			}
			a.domain = function(t) {
				if (!arguments.length) return c.slice();
				c = [], e = Object(r.c)();
				for (var n, i, u = -1, o = t.length; ++u < o;) e.has(i = (n = t[u]) + "") || e.set(i, c.push(n));
				return a
			};
			a.range = function(t) {
				return arguments.length ? (n = i.b.call(t), a) : n.slice()
			};
			a.unknown = function(t) {
				return arguments.length ? (o = t, a) : o
			};
			a.copy = function() {
				return t().domain(c).range(n).unknown(o)
			};
			return a
		};
		var r = e(21),
			i = e(15),
			u = {
				name: "implicit"
			}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return +t
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			var e, r = 0,
				i = (t = t.slice()).length - 1,
				u = t[r],
				c = t[i];
			return c < u && (e = r, r = i, i = e, e = u, u = c, c = e), t[r] = n.floor(u), t[i] = n.ceil(c), t
		}
	}, function(t, n, e) {
		"use strict";
		n.a = y;
		var r = e(3),
			i = e(5),
			u = e(45),
			c = e(82),
			o = e(15),
			a = e(44),
			f = e(151),
			s = 1e3,
			l = 60 * s,
			h = 60 * l,
			d = 24 * h,
			b = 7 * d,
			v = 30 * d,
			p = 365 * d;

		function g(t) {
			return new Date(t)
		}

		function _(t) {
			return t instanceof Date ? +t : +new Date(+t)
		}

		function y(t, n, e, u, c, m, O, j, x) {
			var w = Object(a.b)(a.c, i.m),
				M = w.invert,
				k = w.domain,
				T = x(".%L"),
				N = x(":%S"),
				E = x("%I:%M"),
				S = x("%I %p"),
				A = x("%a %d"),
				C = x("%b %d"),
				z = x("%B"),
				P = x("%Y"),
				q = [
					[O, 1, s],
					[O, 5, 5 * s],
					[O, 15, 15 * s],
					[O, 30, 30 * s],
					[m, 1, l],
					[m, 5, 5 * l],
					[m, 15, 15 * l],
					[m, 30, 30 * l],
					[c, 1, h],
					[c, 3, 3 * h],
					[c, 6, 6 * h],
					[c, 12, 12 * h],
					[u, 1, d],
					[u, 2, 2 * d],
					[e, 1, b],
					[n, 1, v],
					[n, 3, 3 * v],
					[t, 1, p]
				];

			function R(r) {
				return (O(r) < r ? T : m(r) < r ? N : c(r) < r ? E : u(r) < r ? S : n(r) < r ? e(r) < r ? A : C : t(r) < r ? z : P)(r)
			}

			function D(n, e, i, u) {
				if (null == n && (n = 10), "number" == typeof n) {
					var c = Math.abs(i - e) / n,
						o = Object(r.e)(function(t) {
							return t[2]
						}).right(q, c);
					o === q.length ? (u = Object(r.A)(e / p, i / p, n), n = t) : o ? (u = (o = q[c / q[o - 1][2] < q[o][2] / c ? o - 1 : o])[1], n = o[0]) : (u = Math.max(Object(r.A)(e, i, n), 1), n = j)
				}
				return null == u ? n : n.every(u)
			}
			return w.invert = function(t) {
				return new Date(M(t))
			}, w.domain = function(t) {
				return arguments.length ? k(o.a.call(t, _)) : k().map(g)
			}, w.ticks = function(t, n) {
				var e, r = k(),
					i = r[0],
					u = r[r.length - 1],
					c = u < i;
				return c && (e = i, i = u, u = e), e = (e = D(t, i, u, n)) ? e.range(i, u + 1) : [], c ? e.reverse() : e
			}, w.tickFormat = function(t, n) {
				return null == n ? R : x(n)
			}, w.nice = function(t, n) {
				var e = k();
				return (t = D(t, e[0], e[e.length - 1], n)) ? k(Object(f.a)(e, t)) : w
			}, w.copy = function() {
				return Object(a.a)(w, y(t, n, e, u, c, m, O, j, x))
			}, w
		}
		n.b = function() {
			return y(u.D, u.n, u.B, u.a, u.e, u.j, u.r, u.h, c.c).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)])
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			var n = t.dateTime,
				e = t.date,
				a = t.time,
				f = t.periods,
				s = t.days,
				l = t.shortDays,
				h = t.months,
				gt = t.shortMonths,
				_t = d(f),
				yt = b(f),
				mt = d(s),
				Ot = b(s),
				jt = d(l),
				xt = b(l),
				wt = d(h),
				Mt = b(h),
				kt = d(gt),
				Tt = b(gt),
				Nt = {
					a: function(t) {
						return l[t.getDay()]
					},
					A: function(t) {
						return s[t.getDay()]
					},
					b: function(t) {
						return gt[t.getMonth()]
					},
					B: function(t) {
						return h[t.getMonth()]
					},
					c: null,
					d: P,
					e: P,
					f: U,
					H: q,
					I: R,
					j: D,
					L: L,
					m: F,
					M: I,
					p: function(t) {
						return f[+(t.getHours() >= 12)]
					},
					Q: vt,
					s: pt,
					S: Y,
					u: B,
					U: H,
					V: X,
					w: V,
					W: W,
					x: null,
					X: null,
					y: G,
					Y: Z,
					Z: Q,
					"%": bt
				},
				Et = {
					a: function(t) {
						return l[t.getUTCDay()]
					},
					A: function(t) {
						return s[t.getUTCDay()]
					},
					b: function(t) {
						return gt[t.getUTCMonth()]
					},
					B: function(t) {
						return h[t.getUTCMonth()]
					},
					c: null,
					d: $,
					e: $,
					f: et,
					H: J,
					I: K,
					j: tt,
					L: nt,
					m: rt,
					M: it,
					p: function(t) {
						return f[+(t.getUTCHours() >= 12)]
					},
					Q: vt,
					s: pt,
					S: ut,
					u: ct,
					U: ot,
					V: at,
					w: ft,
					W: st,
					x: null,
					X: null,
					y: lt,
					Y: ht,
					Z: dt,
					"%": bt
				},
				St = {
					a: function(t, n, e) {
						var r = jt.exec(n.slice(e));
						return r ? (t.w = xt[r[0].toLowerCase()], e + r[0].length) : -1
					},
					A: function(t, n, e) {
						var r = mt.exec(n.slice(e));
						return r ? (t.w = Ot[r[0].toLowerCase()], e + r[0].length) : -1
					},
					b: function(t, n, e) {
						var r = kt.exec(n.slice(e));
						return r ? (t.m = Tt[r[0].toLowerCase()], e + r[0].length) : -1
					},
					B: function(t, n, e) {
						var r = wt.exec(n.slice(e));
						return r ? (t.m = Mt[r[0].toLowerCase()], e + r[0].length) : -1
					},
					c: function(t, e, r) {
						return zt(t, n, e, r)
					},
					d: w,
					e: w,
					f: S,
					H: k,
					I: k,
					j: M,
					L: E,
					m: x,
					M: T,
					p: function(t, n, e) {
						var r = _t.exec(n.slice(e));
						return r ? (t.p = yt[r[0].toLowerCase()], e + r[0].length) : -1
					},
					Q: C,
					s: z,
					S: N,
					u: p,
					U: g,
					V: _,
					w: v,
					W: y,
					x: function(t, n, r) {
						return zt(t, e, n, r)
					},
					X: function(t, n, e) {
						return zt(t, a, n, e)
					},
					y: O,
					Y: m,
					Z: j,
					"%": A
				};

			function At(t, n) {
				return function(e) {
					var r, i, u, c = [],
						a = -1,
						f = 0,
						s = t.length;
					for (e instanceof Date || (e = new Date(+e)); ++a < s;) 37 === t.charCodeAt(a) && (c.push(t.slice(f, a)), null != (i = o[r = t.charAt(++a)]) ? r = t.charAt(++a) : i = "e" === r ? " " : "0", (u = n[r]) && (r = u(e, i)), c.push(r), f = a + 1);
					return c.push(t.slice(f, a)), c.join("")
				}
			}

			function Ct(t, n) {
				return function(e) {
					var i, o, a = c(1900),
						f = zt(a, t, e += "", 0);
					if (f != e.length) return null;
					if ("Q" in a) return new Date(a.Q);
					if ("p" in a && (a.H = a.H % 12 + 12 * a.p), "V" in a) {
						if (a.V < 1 || a.V > 53) return null;
						"w" in a || (a.w = 1), "Z" in a ? (i = u(c(a.y)), o = i.getUTCDay(), i = o > 4 || 0 === o ? r.P.ceil(i) : Object(r.P)(i), i = r.F.offset(i, 7 * (a.V - 1)), a.y = i.getUTCFullYear(), a.m = i.getUTCMonth(), a.d = i.getUTCDate() + (a.w + 6) % 7) : (i = n(c(a.y)), o = i.getDay(), i = o > 4 || 0 === o ? r.l.ceil(i) : Object(r.l)(i), i = r.a.offset(i, 7 * (a.V - 1)), a.y = i.getFullYear(), a.m = i.getMonth(), a.d = i.getDate() + (a.w + 6) % 7)
					} else("W" in a || "U" in a) && ("w" in a || (a.w = "u" in a ? a.u % 7 : "W" in a ? 1 : 0), o = "Z" in a ? u(c(a.y)).getUTCDay() : n(c(a.y)).getDay(), a.m = 0, a.d = "W" in a ? (a.w + 6) % 7 + 7 * a.W - (o + 5) % 7 : a.w + 7 * a.U - (o + 6) % 7);
					return "Z" in a ? (a.H += a.Z / 100 | 0, a.M += a.Z % 100, u(a)) : n(a)
				}
			}

			function zt(t, n, e, r) {
				for (var i, u, c = 0, a = n.length, f = e.length; c < a;) {
					if (r >= f) return -1;
					if (37 === (i = n.charCodeAt(c++))) {
						if (i = n.charAt(c++), !(u = St[i in o ? n.charAt(c++) : i]) || (r = u(t, e, r)) < 0) return -1
					} else if (i != e.charCodeAt(r++)) return -1
				}
				return r
			}
			return Nt.x = At(e, Nt), Nt.X = At(a, Nt), Nt.c = At(n, Nt), Et.x = At(e, Et), Et.X = At(a, Et), Et.c = At(n, Et), {
				format: function(t) {
					var n = At(t += "", Nt);
					return n.toString = function() {
						return t
					}, n
				},
				parse: function(t) {
					var n = Ct(t += "", i);
					return n.toString = function() {
						return t
					}, n
				},
				utcFormat: function(t) {
					var n = At(t += "", Et);
					return n.toString = function() {
						return t
					}, n
				},
				utcParse: function(t) {
					var n = Ct(t, u);
					return n.toString = function() {
						return t
					}, n
				}
			}
		};
		var r = e(45);

		function i(t) {
			if (0 <= t.y && t.y < 100) {
				var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
				return n.setFullYear(t.y), n
			}
			return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
		}

		function u(t) {
			if (0 <= t.y && t.y < 100) {
				var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
				return n.setUTCFullYear(t.y), n
			}
			return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
		}

		function c(t) {
			return {
				y: t,
				m: 0,
				d: 1,
				H: 0,
				M: 0,
				S: 0,
				L: 0
			}
		}
		var o = {
				"-": "",
				_: " ",
				0: "0"
			},
			a = /^\s*\d+/,
			f = /^%/,
			s = /[\\^$*+?|[\]().{}]/g;

		function l(t, n, e) {
			var r = t < 0 ? "-" : "",
				i = (r ? -t : t) + "",
				u = i.length;
			return r + (u < e ? new Array(e - u + 1).join(n) + i : i)
		}

		function h(t) {
			return t.replace(s, "\\$&")
		}

		function d(t) {
			return new RegExp("^(?:" + t.map(h).join("|") + ")", "i")
		}

		function b(t) {
			for (var n = {}, e = -1, r = t.length; ++e < r;) n[t[e].toLowerCase()] = e;
			return n
		}

		function v(t, n, e) {
			var r = a.exec(n.slice(e, e + 1));
			return r ? (t.w = +r[0], e + r[0].length) : -1
		}

		function p(t, n, e) {
			var r = a.exec(n.slice(e, e + 1));
			return r ? (t.u = +r[0], e + r[0].length) : -1
		}

		function g(t, n, e) {
			var r = a.exec(n.slice(e, e + 2));
			return r ? (t.U = +r[0], e + r[0].length) : -1
		}

		function _(t, n, e) {
			var r = a.exec(n.slice(e, e + 2));
			return r ? (t.V = +r[0], e + r[0].length) : -1
		}

		function y(t, n, e) {
			var r = a.exec(n.slice(e, e + 2));
			return r ? (t.W = +r[0], e + r[0].length) : -1
		}

		function m(t, n, e) {
			var r = a.exec(n.slice(e, e + 4));
			return r ? (t.y = +r[0], e + r[0].length) : -1
		}

		function O(t, n, e) {
			var r = a.exec(n.slice(e, e + 2));
			return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
		}

		function j(t, n, e) {
			var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
			return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
		}

		function x(t, n, e) {
			var r = a.exec(n.slice(e, e + 2));
			return r ? (t.m = r[0] - 1, e + r[0].length) : -1
		}

		function w(t, n, e) {
			var r = a.exec(n.slice(e, e + 2));
			return r ? (t.d = +r[0], e + r[0].length) : -1
		}

		function M(t, n, e) {
			var r = a.exec(n.slice(e, e + 3));
			return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
		}

		function k(t, n, e) {
			var r = a.exec(n.slice(e, e + 2));
			return r ? (t.H = +r[0], e + r[0].length) : -1
		}

		function T(t, n, e) {
			var r = a.exec(n.slice(e, e + 2));
			return r ? (t.M = +r[0], e + r[0].length) : -1
		}

		function N(t, n, e) {
			var r = a.exec(n.slice(e, e + 2));
			return r ? (t.S = +r[0], e + r[0].length) : -1
		}

		function E(t, n, e) {
			var r = a.exec(n.slice(e, e + 3));
			return r ? (t.L = +r[0], e + r[0].length) : -1
		}

		function S(t, n, e) {
			var r = a.exec(n.slice(e, e + 6));
			return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1
		}

		function A(t, n, e) {
			var r = f.exec(n.slice(e, e + 1));
			return r ? e + r[0].length : -1
		}

		function C(t, n, e) {
			var r = a.exec(n.slice(e));
			return r ? (t.Q = +r[0], e + r[0].length) : -1
		}

		function z(t, n, e) {
			var r = a.exec(n.slice(e));
			return r ? (t.Q = 1e3 * +r[0], e + r[0].length) : -1
		}

		function P(t, n) {
			return l(t.getDate(), n, 2)
		}

		function q(t, n) {
			return l(t.getHours(), n, 2)
		}

		function R(t, n) {
			return l(t.getHours() % 12 || 12, n, 2)
		}

		function D(t, n) {
			return l(1 + r.a.count(Object(r.D)(t), t), n, 3)
		}

		function L(t, n) {
			return l(t.getMilliseconds(), n, 3)
		}

		function U(t, n) {
			return L(t, n) + "000"
		}

		function F(t, n) {
			return l(t.getMonth() + 1, n, 2)
		}

		function I(t, n) {
			return l(t.getMinutes(), n, 2)
		}

		function Y(t, n) {
			return l(t.getSeconds(), n, 2)
		}

		function B(t) {
			var n = t.getDay();
			return 0 === n ? 7 : n
		}

		function H(t, n) {
			return l(r.t.count(Object(r.D)(t), t), n, 2)
		}

		function X(t, n) {
			var e = t.getDay();
			return t = e >= 4 || 0 === e ? Object(r.v)(t) : r.v.ceil(t), l(r.v.count(Object(r.D)(t), t) + (4 === Object(r.D)(t).getDay()), n, 2)
		}

		function V(t) {
			return t.getDay()
		}

		function W(t, n) {
			return l(r.l.count(Object(r.D)(t), t), n, 2)
		}

		function G(t, n) {
			return l(t.getFullYear() % 100, n, 2)
		}

		function Z(t, n) {
			return l(t.getFullYear() % 1e4, n, 4)
		}

		function Q(t) {
			var n = t.getTimezoneOffset();
			return (n > 0 ? "-" : (n *= -1, "+")) + l(n / 60 | 0, "0", 2) + l(n % 60, "0", 2)
		}

		function $(t, n) {
			return l(t.getUTCDate(), n, 2)
		}

		function J(t, n) {
			return l(t.getUTCHours(), n, 2)
		}

		function K(t, n) {
			return l(t.getUTCHours() % 12 || 12, n, 2)
		}

		function tt(t, n) {
			return l(1 + r.F.count(Object(r._7)(t), t), n, 3)
		}

		function nt(t, n) {
			return l(t.getUTCMilliseconds(), n, 3)
		}

		function et(t, n) {
			return nt(t, n) + "000"
		}

		function rt(t, n) {
			return l(t.getUTCMonth() + 1, n, 2)
		}

		function it(t, n) {
			return l(t.getUTCMinutes(), n, 2)
		}

		function ut(t, n) {
			return l(t.getUTCSeconds(), n, 2)
		}

		function ct(t) {
			var n = t.getUTCDay();
			return 0 === n ? 7 : n
		}

		function ot(t, n) {
			return l(r.X.count(Object(r._7)(t), t), n, 2)
		}

		function at(t, n) {
			var e = t.getUTCDay();
			return t = e >= 4 || 0 === e ? Object(r.Z)(t) : r.Z.ceil(t), l(r.Z.count(Object(r._7)(t), t) + (4 === Object(r._7)(t).getUTCDay()), n, 2)
		}

		function ft(t) {
			return t.getUTCDay()
		}

		function st(t, n) {
			return l(r.P.count(Object(r._7)(t), t), n, 2)
		}

		function lt(t, n) {
			return l(t.getUTCFullYear() % 100, n, 2)
		}

		function ht(t, n) {
			return l(t.getUTCFullYear() % 1e4, n, 4)
		}

		function dt() {
			return "+0000"
		}

		function bt() {
			return "%"
		}

		function vt(t) {
			return +t
		}

		function pt(t) {
			return Math.floor(+t / 1e3)
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return i
		});
		var r = e(83),
			i = "%Y-%m-%dT%H:%M:%S.%LZ";
		var u = Date.prototype.toISOString ? function(t) {
			return t.toISOString()
		} : Object(r.d)(i);
		n.a = u
	}, function(t, n, e) {
		"use strict";
		var r = e(13),
			i = e(16),
			u = e(46),
			c = e(84),
			o = e(85);
		n.a = function() {
			var t = o.a,
				n = null,
				e = Object(i.a)(0),
				a = o.b,
				f = Object(i.a)(!0),
				s = null,
				l = u.a,
				h = null;

			function d(i) {
				var u, c, o, d, b, v = i.length,
					p = !1,
					g = new Array(v),
					_ = new Array(v);
				for (null == s && (h = l(b = Object(r.a)())), u = 0; u <= v; ++u) {
					if (!(u < v && f(d = i[u], u, i)) === p)
						if (p = !p) c = u, h.areaStart(), h.lineStart();
						else {
							for (h.lineEnd(), h.lineStart(), o = u - 1; o >= c; --o) h.point(g[o], _[o]);
							h.lineEnd(), h.areaEnd()
						} p && (g[u] = +t(d, u, i), _[u] = +e(d, u, i), h.point(n ? +n(d, u, i) : g[u], a ? +a(d, u, i) : _[u]))
				}
				if (b) return h = null, b + "" || null
			}

			function b() {
				return Object(c.a)().defined(f).curve(l).context(s)
			}
			return d.x = function(e) {
				return arguments.length ? (t = "function" == typeof e ? e : Object(i.a)(+e), n = null, d) : t
			}, d.x0 = function(n) {
				return arguments.length ? (t = "function" == typeof n ? n : Object(i.a)(+n), d) : t
			}, d.x1 = function(t) {
				return arguments.length ? (n = null == t ? null : "function" == typeof t ? t : Object(i.a)(+t), d) : n
			}, d.y = function(t) {
				return arguments.length ? (e = "function" == typeof t ? t : Object(i.a)(+t), a = null, d) : e
			}, d.y0 = function(t) {
				return arguments.length ? (e = "function" == typeof t ? t : Object(i.a)(+t), d) : e
			}, d.y1 = function(t) {
				return arguments.length ? (a = null == t ? null : "function" == typeof t ? t : Object(i.a)(+t), d) : a
			}, d.lineX0 = d.lineY0 = function() {
				return b().x(t).y(e)
			}, d.lineY1 = function() {
				return b().x(t).y(a)
			}, d.lineX1 = function() {
				return b().x(n).y(e)
			}, d.defined = function(t) {
				return arguments.length ? (f = "function" == typeof t ? t : Object(i.a)(!!t), d) : f
			}, d.curve = function(t) {
				return arguments.length ? (l = t, null != s && (h = l(s)), d) : l
			}, d.context = function(t) {
				return arguments.length ? (null == t ? s = h = null : h = l(s = t), d) : s
			}, d
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "a", function() {
			return r
		}), n.b = u;
		var r = u(e(46).a);

		function i(t) {
			this._curve = t
		}

		function u(t) {
			function n(n) {
				return new i(t(n))
			}
			return n._curve = t, n
		}
		i.prototype = {
			areaStart: function() {
				this._curve.areaStart()
			},
			areaEnd: function() {
				this._curve.areaEnd()
			},
			lineStart: function() {
				this._curve.lineStart()
			},
			lineEnd: function() {
				this._curve.lineEnd()
			},
			point: function(t, n) {
				this._curve.point(n * Math.sin(t), n * -Math.cos(t))
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.b = u;
		var r = e(156),
			i = e(84);

		function u(t) {
			var n = t.curve;
			return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function(t) {
				return arguments.length ? n(Object(r.b)(t)) : n()._curve
			}, t
		}
		n.a = function() {
			return u(Object(i.a)().curve(r.a))
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)]
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "a", function() {
			return r
		});
		var r = Array.prototype.slice
	}, function(t, n, e) {
		"use strict";
		var r = e(29);
		n.a = {
			draw: function(t, n) {
				var e = Math.sqrt(n / r.j);
				t.moveTo(e, 0), t.arc(0, 0, e, 0, r.m)
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.a = {
			draw: function(t, n) {
				var e = Math.sqrt(n / 5) / 2;
				t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath()
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = Math.sqrt(1 / 3),
			i = 2 * r;
		n.a = {
			draw: function(t, n) {
				var e = Math.sqrt(n / i),
					u = e * r;
				t.moveTo(0, -e), t.lineTo(u, 0), t.lineTo(0, e), t.lineTo(-u, 0), t.closePath()
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(29),
			i = Math.sin(r.j / 10) / Math.sin(7 * r.j / 10),
			u = Math.sin(r.m / 10) * i,
			c = -Math.cos(r.m / 10) * i;
		n.a = {
			draw: function(t, n) {
				var e = Math.sqrt(.8908130915292852 * n),
					i = u * e,
					o = c * e;
				t.moveTo(0, -e), t.lineTo(i, o);
				for (var a = 1; a < 5; ++a) {
					var f = r.m * a / 5,
						s = Math.cos(f),
						l = Math.sin(f);
					t.lineTo(l * e, -s * e), t.lineTo(s * i - l * o, l * i + s * o)
				}
				t.closePath()
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.a = {
			draw: function(t, n) {
				var e = Math.sqrt(n),
					r = -e / 2;
				t.rect(r, r, e, e)
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = Math.sqrt(3);
		n.a = {
			draw: function(t, n) {
				var e = -Math.sqrt(n / (3 * r));
				t.moveTo(0, 2 * e), t.lineTo(-r * e, -e), t.lineTo(r * e, -e), t.closePath()
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = -.5,
			i = Math.sqrt(3) / 2,
			u = 1 / Math.sqrt(12),
			c = 3 * (u / 2 + 1);
		n.a = {
			draw: function(t, n) {
				var e = Math.sqrt(n / c),
					o = e / 2,
					a = e * u,
					f = o,
					s = e * u + e,
					l = -f,
					h = s;
				t.moveTo(o, a), t.lineTo(f, s), t.lineTo(l, h), t.lineTo(r * o - i * a, i * o + r * a), t.lineTo(r * f - i * s, i * f + r * s), t.lineTo(r * l - i * h, i * l + r * h), t.lineTo(r * o + i * a, r * a - i * o), t.lineTo(r * f + i * s, r * s - i * f), t.lineTo(r * l + i * h, r * h - i * l), t.closePath()
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.a = u;
		var r = e(47),
			i = e(49);

		function u(t, n) {
			this._context = t, this._k = (1 - n) / 6
		}
		u.prototype = {
			areaStart: r.a,
			areaEnd: r.a,
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
			},
			lineEnd: function() {
				switch (this._point) {
					case 1:
						this._context.moveTo(this._x3, this._y3), this._context.closePath();
						break;
					case 2:
						this._context.lineTo(this._x3, this._y3), this._context.closePath();
						break;
					case 3:
						this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
				}
			},
			point: function(t, n) {
				switch (t = +t, n = +n, this._point) {
					case 0:
						this._point = 1, this._x3 = t, this._y3 = n;
						break;
					case 1:
						this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
						break;
					case 2:
						this._point = 3, this._x5 = t, this._y5 = n;
						break;
					default:
						Object(i.c)(this, t, n)
				}
				this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
			}
		}, n.b = function t(n) {
			function e(t) {
				return new u(t, n)
			}
			return e.tension = function(n) {
				return t(+n)
			}, e
		}(0)
	}, function(t, n, e) {
		"use strict";
		n.a = i;
		var r = e(49);

		function i(t, n) {
			this._context = t, this._k = (1 - n) / 6
		}
		i.prototype = {
			areaStart: function() {
				this._line = 0
			},
			areaEnd: function() {
				this._line = NaN
			},
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
			},
			lineEnd: function() {
				(this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
			},
			point: function(t, n) {
				switch (t = +t, n = +n, this._point) {
					case 0:
						this._point = 1;
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
						break;
					case 3:
						this._point = 4;
					default:
						Object(r.c)(this, t, n)
				}
				this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
			}
		}, n.b = function t(n) {
			function e(t) {
				return new i(t, n)
			}
			return e.tension = function(n) {
				return t(+n)
			}, e
		}(0)
	}, function(t, n, e) {
		"use strict";
		n.c = function(t) {
			return i.b[t.index] = {
				site: t,
				halfedges: []
			}
		}, n.a = c, n.d = function() {
			for (var t, n, e, r, c = 0, o = i.b.length; c < o; ++c)
				if ((t = i.b[c]) && (r = (n = t.halfedges).length)) {
					var a = new Array(r),
						f = new Array(r);
					for (e = 0; e < r; ++e) a[e] = e, f[e] = u(t, i.e[n[e]]);
					for (a.sort(function(t, n) {
							return f[n] - f[t]
						}), e = 0; e < r; ++e) f[e] = n[a[e]];
					for (e = 0; e < r; ++e) n[e] = f[e]
				}
		}, n.b = function(t, n, e, u) {
			var a, f, s, l, h, d, b, v, p, g, _, y, m = i.b.length,
				O = !0;
			for (a = 0; a < m; ++a)
				if (f = i.b[a]) {
					for (s = f.site, h = f.halfedges, l = h.length; l--;) i.e[h[l]] || h.splice(l, 1);
					for (l = 0, d = h.length; l < d;) g = o(f, i.e[h[l]]), _ = g[0], y = g[1], b = c(f, i.e[h[++l % d]]), v = b[0], p = b[1], (Math.abs(_ - v) > i.f || Math.abs(y - p) > i.f) && (h.splice(l, 0, i.e.push(Object(r.b)(s, g, Math.abs(_ - t) < i.f && u - y > i.f ? [t, Math.abs(v - t) < i.f ? p : u] : Math.abs(y - u) < i.f && e - _ > i.f ? [Math.abs(p - u) < i.f ? v : e, u] : Math.abs(_ - e) < i.f && y - n > i.f ? [e, Math.abs(v - e) < i.f ? p : n] : Math.abs(y - n) < i.f && _ - t > i.f ? [Math.abs(p - n) < i.f ? v : t, n] : null)) - 1), ++d);
					d && (O = !1)
				} if (O) {
				var j, x, w, M = 1 / 0;
				for (a = 0, O = null; a < m; ++a)(f = i.b[a]) && (s = f.site, j = s[0] - t, x = s[1] - n, (w = j * j + x * x) < M && (M = w, O = f));
				if (O) {
					var k = [t, n],
						T = [t, u],
						N = [e, u],
						E = [e, n];
					O.halfedges.push(i.e.push(Object(r.b)(s = O.site, k, T)) - 1, i.e.push(Object(r.b)(s, T, N)) - 1, i.e.push(Object(r.b)(s, N, E)) - 1, i.e.push(Object(r.b)(s, E, k)) - 1)
				}
			}
			for (a = 0; a < m; ++a)(f = i.b[a]) && (f.halfedges.length || delete i.b[a])
		};
		var r = e(89),
			i = e(32);

		function u(t, n) {
			var e = t.site,
				r = n.left,
				i = n.right;
			return e === i && (i = r, r = e), i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1], i = n[0]) : (r = n[0], i = n[1]), Math.atan2(r[0] - i[0], i[1] - r[1]))
		}

		function c(t, n) {
			return n[+(n.left !== t.site)]
		}

		function o(t, n) {
			return n[+(n.left === t.site)]
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "c", function() {
			return r
		}), n.a = function(t) {
			var n = t.P,
				e = t.N;
			if (!n || !e) return;
			var o = n.site,
				a = t.site,
				f = e.site;
			if (o === f) return;
			var s = a[0],
				l = a[1],
				h = o[0] - s,
				d = o[1] - l,
				b = f[0] - s,
				v = f[1] - l,
				p = 2 * (h * v - d * b);
			if (p >= -u.g) return;
			var g = h * h + d * d,
				_ = b * b + v * v,
				y = (v * g - d * _) / p,
				m = (h * _ - b * g) / p,
				O = c.pop() || new function() {
					Object(i.a)(this), this.x = this.y = this.arc = this.site = this.cy = null
				};
			O.arc = t, O.site = a, O.x = y + s, O.y = (O.cy = m + l) + Math.sqrt(y * y + m * m), t.circle = O;
			var j = null,
				x = u.c._;
			for (; x;)
				if (O.y < x.y || O.y === x.y && O.x <= x.x) {
					if (!x.L) {
						j = x.P;
						break
					}
					x = x.L
				} else {
					if (!x.R) {
						j = x;
						break
					}
					x = x.R
				} u.c.insert(j, O), j || (r = O)
		}, n.b = function(t) {
			var n = t.circle;
			n && (n.P || (r = n.N), u.c.remove(n), c.push(n), Object(i.a)(n), t.circle = null)
		};
		var r, i = e(88),
			u = e(32),
			c = []
	}, function(t, n, e) {
		"use strict";

		function r(t, n, e) {
			this.k = t, this.x = n, this.y = e
		}
		n.a = r, e.d(n, "c", function() {
			return i
		}), n.b = u, r.prototype = {
			constructor: r,
			scale: function(t) {
				return 1 === t ? this : new r(this.k * t, this.x, this.y)
			},
			translate: function(t, n) {
				return 0 === t & 0 === n ? this : new r(this.k, this.x + this.k * t, this.y + this.k * n)
			},
			apply: function(t) {
				return [t[0] * this.k + this.x, t[1] * this.k + this.y]
			},
			applyX: function(t) {
				return t * this.k + this.x
			},
			applyY: function(t) {
				return t * this.k + this.y
			},
			invert: function(t) {
				return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
			},
			invertX: function(t) {
				return (t - this.x) / this.k
			},
			invertY: function(t) {
				return (t - this.y) / this.k
			},
			rescaleX: function(t) {
				return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
			},
			rescaleY: function(t) {
				return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
			},
			toString: function() {
				return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
			}
		};
		var i = new r(1, 0, 0);

		function u(t) {
			return t.__zoom || i
		}
		u.prototype = r.prototype
	}, function(t, n, e) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = e(174);
		e.d(n, "version", function() {
			return r.a
		});
		var i = e(3);
		e.d(n, "bisect", function() {
			return i.b
		}), e.d(n, "bisectRight", function() {
			return i.d
		}), e.d(n, "bisectLeft", function() {
			return i.c
		}), e.d(n, "ascending", function() {
			return i.a
		}), e.d(n, "bisector", function() {
			return i.e
		}), e.d(n, "cross", function() {
			return i.f
		}), e.d(n, "descending", function() {
			return i.g
		}), e.d(n, "deviation", function() {
			return i.h
		}), e.d(n, "extent", function() {
			return i.i
		}), e.d(n, "histogram", function() {
			return i.j
		}), e.d(n, "thresholdFreedmanDiaconis", function() {
			return i.w
		}), e.d(n, "thresholdScott", function() {
			return i.x
		}), e.d(n, "thresholdSturges", function() {
			return i.y
		}), e.d(n, "max", function() {
			return i.k
		}), e.d(n, "mean", function() {
			return i.l
		}), e.d(n, "median", function() {
			return i.m
		}), e.d(n, "merge", function() {
			return i.n
		}), e.d(n, "min", function() {
			return i.o
		}), e.d(n, "pairs", function() {
			return i.p
		}), e.d(n, "permute", function() {
			return i.q
		}), e.d(n, "quantile", function() {
			return i.r
		}), e.d(n, "range", function() {
			return i.s
		}), e.d(n, "scan", function() {
			return i.t
		}), e.d(n, "shuffle", function() {
			return i.u
		}), e.d(n, "sum", function() {
			return i.v
		}), e.d(n, "ticks", function() {
			return i.B
		}), e.d(n, "tickIncrement", function() {
			return i.z
		}), e.d(n, "tickStep", function() {
			return i.A
		}), e.d(n, "transpose", function() {
			return i.C
		}), e.d(n, "variance", function() {
			return i.D
		}), e.d(n, "zip", function() {
			return i.E
		});
		var u = e(191);
		e.d(n, "axisTop", function() {
			return u.d
		}), e.d(n, "axisRight", function() {
			return u.c
		}), e.d(n, "axisBottom", function() {
			return u.a
		}), e.d(n, "axisLeft", function() {
			return u.b
		});
		var c = e(195);
		e.d(n, "brush", function() {
			return c.a
		}), e.d(n, "brushX", function() {
			return c.c
		}), e.d(n, "brushY", function() {
			return c.d
		}), e.d(n, "brushSelection", function() {
			return c.b
		});
		var o = e(282);
		e.d(n, "chord", function() {
			return o.a
		}), e.d(n, "ribbon", function() {
			return o.b
		});
		var a = e(21);
		e.d(n, "nest", function() {
			return a.d
		}), e.d(n, "set", function() {
			return a.e
		}), e.d(n, "map", function() {
			return a.c
		}), e.d(n, "keys", function() {
			return a.b
		}), e.d(n, "values", function() {
			return a.f
		}), e.d(n, "entries", function() {
			return a.a
		});
		var f = e(7);
		e.d(n, "color", function() {
			return f.a
		}), e.d(n, "rgb", function() {
			return f.f
		}), e.d(n, "hsl", function() {
			return f.d
		}), e.d(n, "lab", function() {
			return f.e
		}), e.d(n, "hcl", function() {
			return f.c
		}), e.d(n, "cubehelix", function() {
			return f.b
		});
		var s = e(12);
		e.d(n, "dispatch", function() {
			return s.a
		});
		var l = e(51);
		e.d(n, "drag", function() {
			return l.a
		}), e.d(n, "dragDisable", function() {
			return l.b
		}), e.d(n, "dragEnable", function() {
			return l.c
		});
		var h = e(65);
		e.d(n, "dsvFormat", function() {
			return h.e
		}), e.d(n, "csvParse", function() {
			return h.c
		}), e.d(n, "csvParseRows", function() {
			return h.d
		}), e.d(n, "csvFormat", function() {
			return h.a
		}), e.d(n, "csvFormatRows", function() {
			return h.b
		}), e.d(n, "tsvParse", function() {
			return h.h
		}), e.d(n, "tsvParseRows", function() {
			return h.i
		}), e.d(n, "tsvFormat", function() {
			return h.f
		}), e.d(n, "tsvFormatRows", function() {
			return h.g
		});
		var d = e(120);
		e.d(n, "easeLinear", function() {
			return d.y
		}), e.d(n, "easeQuad", function() {
			return d.D
		}), e.d(n, "easeQuadIn", function() {
			return d.E
		}), e.d(n, "easeQuadOut", function() {
			return d.G
		}), e.d(n, "easeQuadInOut", function() {
			return d.F
		}), e.d(n, "easeCubic", function() {
			return d.m
		}), e.d(n, "easeCubicIn", function() {
			return d.n
		}), e.d(n, "easeCubicOut", function() {
			return d.p
		}), e.d(n, "easeCubicInOut", function() {
			return d.o
		}), e.d(n, "easePoly", function() {
			return d.z
		}), e.d(n, "easePolyIn", function() {
			return d.A
		}), e.d(n, "easePolyOut", function() {
			return d.C
		}), e.d(n, "easePolyInOut", function() {
			return d.B
		}), e.d(n, "easeSin", function() {
			return d.H
		}), e.d(n, "easeSinIn", function() {
			return d.I
		}), e.d(n, "easeSinOut", function() {
			return d.K
		}), e.d(n, "easeSinInOut", function() {
			return d.J
		}), e.d(n, "easeExp", function() {
			return d.u
		}), e.d(n, "easeExpIn", function() {
			return d.v
		}), e.d(n, "easeExpOut", function() {
			return d.x
		}), e.d(n, "easeExpInOut", function() {
			return d.w
		}), e.d(n, "easeCircle", function() {
			return d.i
		}), e.d(n, "easeCircleIn", function() {
			return d.j
		}), e.d(n, "easeCircleOut", function() {
			return d.l
		}), e.d(n, "easeCircleInOut", function() {
			return d.k
		}), e.d(n, "easeBounce", function() {
			return d.e
		}), e.d(n, "easeBounceIn", function() {
			return d.f
		}), e.d(n, "easeBounceOut", function() {
			return d.h
		}), e.d(n, "easeBounceInOut", function() {
			return d.g
		}), e.d(n, "easeBack", function() {
			return d.a
		}), e.d(n, "easeBackIn", function() {
			return d.b
		}), e.d(n, "easeBackOut", function() {
			return d.d
		}), e.d(n, "easeBackInOut", function() {
			return d.c
		}), e.d(n, "easeElastic", function() {
			return d.q
		}), e.d(n, "easeElasticIn", function() {
			return d.r
		}), e.d(n, "easeElasticOut", function() {
			return d.t
		}), e.d(n, "easeElasticInOut", function() {
			return d.s
		});
		var b = e(295);
		e.d(n, "forceCenter", function() {
			return b.a
		}), e.d(n, "forceCollide", function() {
			return b.b
		}), e.d(n, "forceLink", function() {
			return b.c
		}), e.d(n, "forceManyBody", function() {
			return b.d
		}), e.d(n, "forceRadial", function() {
			return b.e
		}), e.d(n, "forceSimulation", function() {
			return b.f
		}), e.d(n, "forceX", function() {
			return b.g
		}), e.d(n, "forceY", function() {
			return b.h
		});
		var v = e(70);
		e.d(n, "formatDefaultLocale", function() {
			return v.b
		}), e.d(n, "format", function() {
			return v.a
		}), e.d(n, "formatPrefix", function() {
			return v.d
		}), e.d(n, "formatLocale", function() {
			return v.c
		}), e.d(n, "formatSpecifier", function() {
			return v.e
		}), e.d(n, "precisionFixed", function() {
			return v.f
		}), e.d(n, "precisionPrefix", function() {
			return v.g
		}), e.d(n, "precisionRound", function() {
			return v.h
		});
		var p = e(325);
		e.d(n, "geoArea", function() {
			return p.c
		}), e.d(n, "geoBounds", function() {
			return p.h
		}), e.d(n, "geoCentroid", function() {
			return p.i
		}), e.d(n, "geoCircle", function() {
			return p.j
		}), e.d(n, "geoClipAntimeridian", function() {
			return p.k
		}), e.d(n, "geoClipCircle", function() {
			return p.l
		}), e.d(n, "geoClipExtent", function() {
			return p.m
		}), e.d(n, "geoClipRectangle", function() {
			return p.n
		}), e.d(n, "geoContains", function() {
			return p.u
		}), e.d(n, "geoDistance", function() {
			return p.v
		}), e.d(n, "geoGraticule", function() {
			return p.A
		}), e.d(n, "geoGraticule10", function() {
			return p.B
		}), e.d(n, "geoInterpolate", function() {
			return p.D
		}), e.d(n, "geoLength", function() {
			return p.E
		}), e.d(n, "geoPath", function() {
			return p.L
		}), e.d(n, "geoAlbers", function() {
			return p.a
		}), e.d(n, "geoAlbersUsa", function() {
			return p.b
		}), e.d(n, "geoAzimuthalEqualArea", function() {
			return p.d
		}), e.d(n, "geoAzimuthalEqualAreaRaw", function() {
			return p.e
		}), e.d(n, "geoAzimuthalEquidistant", function() {
			return p.f
		}), e.d(n, "geoAzimuthalEquidistantRaw", function() {
			return p.g
		}), e.d(n, "geoConicConformal", function() {
			return p.o
		}), e.d(n, "geoConicConformalRaw", function() {
			return p.p
		}), e.d(n, "geoConicEqualArea", function() {
			return p.q
		}), e.d(n, "geoConicEqualAreaRaw", function() {
			return p.r
		}), e.d(n, "geoConicEquidistant", function() {
			return p.s
		}), e.d(n, "geoConicEquidistantRaw", function() {
			return p.t
		}), e.d(n, "geoEquirectangular", function() {
			return p.w
		}), e.d(n, "geoEquirectangularRaw", function() {
			return p.x
		}), e.d(n, "geoGnomonic", function() {
			return p.y
		}), e.d(n, "geoGnomonicRaw", function() {
			return p.z
		}), e.d(n, "geoIdentity", function() {
			return p.C
		}), e.d(n, "geoProjection", function() {
			return p.M
		}), e.d(n, "geoProjectionMutator", function() {
			return p.N
		}), e.d(n, "geoMercator", function() {
			return p.F
		}), e.d(n, "geoMercatorRaw", function() {
			return p.G
		}), e.d(n, "geoNaturalEarth1", function() {
			return p.H
		}), e.d(n, "geoNaturalEarth1Raw", function() {
			return p.I
		}), e.d(n, "geoOrthographic", function() {
			return p.J
		}), e.d(n, "geoOrthographicRaw", function() {
			return p.K
		}), e.d(n, "geoStereographic", function() {
			return p.P
		}), e.d(n, "geoStereographicRaw", function() {
			return p.Q
		}), e.d(n, "geoTransverseMercator", function() {
			return p.T
		}), e.d(n, "geoTransverseMercatorRaw", function() {
			return p.U
		}), e.d(n, "geoRotation", function() {
			return p.O
		}), e.d(n, "geoStream", function() {
			return p.R
		}), e.d(n, "geoTransform", function() {
			return p.S
		});
		var g = e(353);
		e.d(n, "cluster", function() {
			return g.a
		}), e.d(n, "hierarchy", function() {
			return g.b
		}), e.d(n, "pack", function() {
			return g.c
		}), e.d(n, "packSiblings", function() {
			return g.e
		}), e.d(n, "packEnclose", function() {
			return g.d
		}), e.d(n, "partition", function() {
			return g.f
		}), e.d(n, "stratify", function() {
			return g.g
		}), e.d(n, "tree", function() {
			return g.h
		}), e.d(n, "treemap", function() {
			return g.i
		}), e.d(n, "treemapBinary", function() {
			return g.j
		}), e.d(n, "treemapDice", function() {
			return g.k
		}), e.d(n, "treemapSlice", function() {
			return g.m
		}), e.d(n, "treemapSliceDice", function() {
			return g.n
		}), e.d(n, "treemapSquarify", function() {
			return g.o
		}), e.d(n, "treemapResquarify", function() {
			return g.l
		});
		var _ = e(5);
		e.d(n, "interpolate", function() {
			return _.a
		}), e.d(n, "interpolateArray", function() {
			return _.b
		}), e.d(n, "interpolateBasis", function() {
			return _.c
		}), e.d(n, "interpolateBasisClosed", function() {
			return _.d
		}), e.d(n, "interpolateDate", function() {
			return _.g
		}), e.d(n, "interpolateNumber", function() {
			return _.m
		}), e.d(n, "interpolateObject", function() {
			return _.n
		}), e.d(n, "interpolateRound", function() {
			return _.r
		}), e.d(n, "interpolateString", function() {
			return _.s
		}), e.d(n, "interpolateTransformCss", function() {
			return _.t
		}), e.d(n, "interpolateTransformSvg", function() {
			return _.u
		}), e.d(n, "interpolateZoom", function() {
			return _.v
		}), e.d(n, "interpolateRgb", function() {
			return _.o
		}), e.d(n, "interpolateRgbBasis", function() {
			return _.p
		}), e.d(n, "interpolateRgbBasisClosed", function() {
			return _.q
		}), e.d(n, "interpolateHsl", function() {
			return _.j
		}), e.d(n, "interpolateHslLong", function() {
			return _.k
		}), e.d(n, "interpolateLab", function() {
			return _.l
		}), e.d(n, "interpolateHcl", function() {
			return _.h
		}), e.d(n, "interpolateHclLong", function() {
			return _.i
		}), e.d(n, "interpolateCubehelix", function() {
			return _.e
		}), e.d(n, "interpolateCubehelixLong", function() {
			return _.f
		}), e.d(n, "quantize", function() {
			return _.w
		});
		var y = e(13);
		e.d(n, "path", function() {
			return y.a
		});
		var m = e(375);
		e.d(n, "polygonArea", function() {
			return m.a
		}), e.d(n, "polygonCentroid", function() {
			return m.b
		}), e.d(n, "polygonHull", function() {
			return m.d
		}), e.d(n, "polygonContains", function() {
			return m.c
		}), e.d(n, "polygonLength", function() {
			return m.e
		});
		var O = e(68);
		e.d(n, "quadtree", function() {
			return O.a
		});
		var j = e(382);
		e.d(n, "queue", function() {
			return j.a
		});
		var x = e(385);
		e.d(n, "randomUniform", function() {
			return x.f
		}), e.d(n, "randomNormal", function() {
			return x.e
		}), e.d(n, "randomLogNormal", function() {
			return x.d
		}), e.d(n, "randomBates", function() {
			return x.a
		}), e.d(n, "randomIrwinHall", function() {
			return x.c
		}), e.d(n, "randomExponential", function() {
			return x.b
		});
		var w = e(390);
		e.d(n, "request", function() {
			return w.d
		}), e.d(n, "html", function() {
			return w.b
		}), e.d(n, "json", function() {
			return w.c
		}), e.d(n, "text", function() {
			return w.e
		}), e.d(n, "xml", function() {
			return w.g
		}), e.d(n, "csv", function() {
			return w.a
		}), e.d(n, "tsv", function() {
			return w.f
		});
		var M = e(397);
		e.d(n, "scaleBand", function() {
			return M.i
		}), e.d(n, "scalePoint", function() {
			return M.o
		}), e.d(n, "scaleIdentity", function() {
			return M.j
		}), e.d(n, "scaleLinear", function() {
			return M.l
		}), e.d(n, "scaleLog", function() {
			return M.m
		}), e.d(n, "scaleOrdinal", function() {
			return M.n
		}), e.d(n, "scaleImplicit", function() {
			return M.k
		}), e.d(n, "scalePow", function() {
			return M.p
		}), e.d(n, "scaleSqrt", function() {
			return M.t
		}), e.d(n, "scaleQuantile", function() {
			return M.q
		}), e.d(n, "scaleQuantize", function() {
			return M.r
		}), e.d(n, "scaleThreshold", function() {
			return M.u
		}), e.d(n, "scaleTime", function() {
			return M.v
		}), e.d(n, "scaleUtc", function() {
			return M.w
		}), e.d(n, "schemeCategory10", function() {
			return M.x
		}), e.d(n, "schemeCategory20b", function() {
			return M.z
		}), e.d(n, "schemeCategory20c", function() {
			return M.A
		}), e.d(n, "schemeCategory20", function() {
			return M.y
		}), e.d(n, "interpolateCubehelixDefault", function() {
			return M.b
		}), e.d(n, "interpolateRainbow", function() {
			return M.f
		}), e.d(n, "interpolateWarm", function() {
			return M.h
		}), e.d(n, "interpolateCool", function() {
			return M.a
		}), e.d(n, "interpolateViridis", function() {
			return M.g
		}), e.d(n, "interpolateMagma", function() {
			return M.d
		}), e.d(n, "interpolateInferno", function() {
			return M.c
		}), e.d(n, "interpolatePlasma", function() {
			return M.e
		}), e.d(n, "scaleSequential", function() {
			return M.s
		});
		var k = e(1);
		e.d(n, "create", function() {
			return k.b
		}), e.d(n, "creator", function() {
			return k.c
		}), e.d(n, "local", function() {
			return k.f
		}), e.d(n, "matcher", function() {
			return k.g
		}), e.d(n, "mouse", function() {
			return k.h
		}), e.d(n, "namespace", function() {
			return k.i
		}), e.d(n, "namespaces", function() {
			return k.j
		}), e.d(n, "clientPoint", function() {
			return k.a
		}), e.d(n, "select", function() {
			return k.k
		}), e.d(n, "selectAll", function() {
			return k.l
		}), e.d(n, "selection", function() {
			return k.m
		}), e.d(n, "selector", function() {
			return k.n
		}), e.d(n, "selectorAll", function() {
			return k.o
		}), e.d(n, "style", function() {
			return k.p
		}), e.d(n, "touch", function() {
			return k.q
		}), e.d(n, "touches", function() {
			return k.r
		}), e.d(n, "window", function() {
			return k.s
		}), e.d(n, "event", function() {
			return k.e
		}), e.d(n, "customEvent", function() {
			return k.d
		});
		var T = e(173);
		e.d(n, "arc", function() {
			return T.a
		}), e.d(n, "area", function() {
			return T.b
		}), e.d(n, "line", function() {
			return T.v
		}), e.d(n, "pie", function() {
			return T.A
		}), e.d(n, "areaRadial", function() {
			return T.c
		}), e.d(n, "radialArea", function() {
			return T.C
		}), e.d(n, "lineRadial", function() {
			return T.w
		}), e.d(n, "radialLine", function() {
			return T.D
		}), e.d(n, "pointRadial", function() {
			return T.B
		}), e.d(n, "linkHorizontal", function() {
			return T.x
		}), e.d(n, "linkVertical", function() {
			return T.z
		}), e.d(n, "linkRadial", function() {
			return T.y
		}), e.d(n, "symbol", function() {
			return T.P
		}), e.d(n, "symbols", function() {
			return T.X
		}), e.d(n, "symbolCircle", function() {
			return T.Q
		}), e.d(n, "symbolCross", function() {
			return T.R
		}), e.d(n, "symbolDiamond", function() {
			return T.S
		}), e.d(n, "symbolSquare", function() {
			return T.T
		}), e.d(n, "symbolStar", function() {
			return T.U
		}), e.d(n, "symbolTriangle", function() {
			return T.V
		}), e.d(n, "symbolWye", function() {
			return T.W
		}), e.d(n, "curveBasisClosed", function() {
			return T.e
		}), e.d(n, "curveBasisOpen", function() {
			return T.f
		}), e.d(n, "curveBasis", function() {
			return T.d
		}), e.d(n, "curveBundle", function() {
			return T.g
		}), e.d(n, "curveCardinalClosed", function() {
			return T.i
		}), e.d(n, "curveCardinalOpen", function() {
			return T.j
		}), e.d(n, "curveCardinal", function() {
			return T.h
		}), e.d(n, "curveCatmullRomClosed", function() {
			return T.l
		}), e.d(n, "curveCatmullRomOpen", function() {
			return T.m
		}), e.d(n, "curveCatmullRom", function() {
			return T.k
		}), e.d(n, "curveLinearClosed", function() {
			return T.o
		}), e.d(n, "curveLinear", function() {
			return T.n
		}), e.d(n, "curveMonotoneX", function() {
			return T.p
		}), e.d(n, "curveMonotoneY", function() {
			return T.q
		}), e.d(n, "curveNatural", function() {
			return T.r
		}), e.d(n, "curveStep", function() {
			return T.s
		}), e.d(n, "curveStepAfter", function() {
			return T.t
		}), e.d(n, "curveStepBefore", function() {
			return T.u
		}), e.d(n, "stack", function() {
			return T.E
		}), e.d(n, "stackOffsetExpand", function() {
			return T.G
		}), e.d(n, "stackOffsetDiverging", function() {
			return T.F
		}), e.d(n, "stackOffsetNone", function() {
			return T.H
		}), e.d(n, "stackOffsetSilhouette", function() {
			return T.I
		}), e.d(n, "stackOffsetWiggle", function() {
			return T.J
		}), e.d(n, "stackOrderAscending", function() {
			return T.K
		}), e.d(n, "stackOrderDescending", function() {
			return T.L
		}), e.d(n, "stackOrderInsideOut", function() {
			return T.M
		}), e.d(n, "stackOrderNone", function() {
			return T.N
		}), e.d(n, "stackOrderReverse", function() {
			return T.O
		});
		var N = e(45);
		e.d(n, "timeInterval", function() {
			return N.g
		}), e.d(n, "timeMillisecond", function() {
			return N.h
		}), e.d(n, "timeMilliseconds", function() {
			return N.i
		}), e.d(n, "utcMillisecond", function() {
			return N.L
		}), e.d(n, "utcMilliseconds", function() {
			return N.M
		}), e.d(n, "timeSecond", function() {
			return N.r
		}), e.d(n, "timeSeconds", function() {
			return N.s
		}), e.d(n, "utcSecond", function() {
			return N.V
		}), e.d(n, "utcSeconds", function() {
			return N.W
		}), e.d(n, "timeMinute", function() {
			return N.j
		}), e.d(n, "timeMinutes", function() {
			return N.k
		}), e.d(n, "timeHour", function() {
			return N.e
		}), e.d(n, "timeHours", function() {
			return N.f
		}), e.d(n, "timeDay", function() {
			return N.a
		}), e.d(n, "timeDays", function() {
			return N.b
		}), e.d(n, "timeWeek", function() {
			return N.B
		}), e.d(n, "timeWeeks", function() {
			return N.C
		}), e.d(n, "timeSunday", function() {
			return N.t
		}), e.d(n, "timeSundays", function() {
			return N.u
		}), e.d(n, "timeMonday", function() {
			return N.l
		}), e.d(n, "timeMondays", function() {
			return N.m
		}), e.d(n, "timeTuesday", function() {
			return N.x
		}), e.d(n, "timeTuesdays", function() {
			return N.y
		}), e.d(n, "timeWednesday", function() {
			return N.z
		}), e.d(n, "timeWednesdays", function() {
			return N.A
		}), e.d(n, "timeThursday", function() {
			return N.v
		}), e.d(n, "timeThursdays", function() {
			return N.w
		}), e.d(n, "timeFriday", function() {
			return N.c
		}), e.d(n, "timeFridays", function() {
			return N.d
		}), e.d(n, "timeSaturday", function() {
			return N.p
		}), e.d(n, "timeSaturdays", function() {
			return N.q
		}), e.d(n, "timeMonth", function() {
			return N.n
		}), e.d(n, "timeMonths", function() {
			return N.o
		}), e.d(n, "timeYear", function() {
			return N.D
		}), e.d(n, "timeYears", function() {
			return N.E
		}), e.d(n, "utcMinute", function() {
			return N.N
		}), e.d(n, "utcMinutes", function() {
			return N.O
		}), e.d(n, "utcHour", function() {
			return N.J
		}), e.d(n, "utcHours", function() {
			return N.K
		}), e.d(n, "utcDay", function() {
			return N.F
		}), e.d(n, "utcDays", function() {
			return N.G
		}), e.d(n, "utcWeek", function() {
			return N._5
		}), e.d(n, "utcWeeks", function() {
			return N._6
		}), e.d(n, "utcSunday", function() {
			return N.X
		}), e.d(n, "utcSundays", function() {
			return N.Y
		}), e.d(n, "utcMonday", function() {
			return N.P
		}), e.d(n, "utcMondays", function() {
			return N.Q
		}), e.d(n, "utcTuesday", function() {
			return N._1
		}), e.d(n, "utcTuesdays", function() {
			return N._2
		}), e.d(n, "utcWednesday", function() {
			return N._3
		}), e.d(n, "utcWednesdays", function() {
			return N._4
		}), e.d(n, "utcThursday", function() {
			return N.Z
		}), e.d(n, "utcThursdays", function() {
			return N._0
		}), e.d(n, "utcFriday", function() {
			return N.H
		}), e.d(n, "utcFridays", function() {
			return N.I
		}), e.d(n, "utcSaturday", function() {
			return N.T
		}), e.d(n, "utcSaturdays", function() {
			return N.U
		}), e.d(n, "utcMonth", function() {
			return N.R
		}), e.d(n, "utcMonths", function() {
			return N.S
		}), e.d(n, "utcYear", function() {
			return N._7
		}), e.d(n, "utcYears", function() {
			return N._8
		});
		var E = e(82);
		e.d(n, "timeFormatDefaultLocale", function() {
			return E.d
		}), e.d(n, "timeFormat", function() {
			return E.c
		}), e.d(n, "timeParse", function() {
			return E.f
		}), e.d(n, "utcFormat", function() {
			return E.g
		}), e.d(n, "utcParse", function() {
			return E.h
		}), e.d(n, "timeFormatLocale", function() {
			return E.e
		}), e.d(n, "isoFormat", function() {
			return E.a
		}), e.d(n, "isoParse", function() {
			return E.b
		});
		var S = e(36);
		e.d(n, "now", function() {
			return S.b
		}), e.d(n, "timer", function() {
			return S.d
		}), e.d(n, "timerFlush", function() {
			return S.e
		}), e.d(n, "timeout", function() {
			return S.c
		}), e.d(n, "interval", function() {
			return S.a
		});
		var A = e(62);
		e.d(n, "transition", function() {
			return A.c
		}), e.d(n, "active", function() {
			return A.a
		}), e.d(n, "interrupt", function() {
			return A.b
		});
		var C = e(454);
		e.d(n, "voronoi", function() {
			return C.a
		});
		var z = e(459);
		e.d(n, "zoom", function() {
			return z.a
		}), e.d(n, "zoomTransform", function() {
			return z.c
		}), e.d(n, "zoomIdentity", function() {
			return z.b
		})
	}, function(t, n, e) {
		"use strict";
		var r = e(430);
		e.d(n, "a", function() {
			return r.a
		});
		var i = e(155);
		e.d(n, "b", function() {
			return i.a
		});
		var u = e(84);
		e.d(n, "v", function() {
			return u.a
		});
		var c = e(431);
		e.d(n, "A", function() {
			return c.a
		});
		var o = e(434);
		e.d(n, "c", function() {
			return o.a
		}), e.d(n, "C", function() {
			return o.a
		});
		var a = e(157);
		e.d(n, "w", function() {
			return a.a
		}), e.d(n, "D", function() {
			return a.a
		});
		var f = e(158);
		e.d(n, "B", function() {
			return f.a
		});
		var s = e(435);
		e.d(n, "x", function() {
			return s.a
		}), e.d(n, "z", function() {
			return s.c
		}), e.d(n, "y", function() {
			return s.b
		});
		var l = e(436);
		e.d(n, "P", function() {
			return l.a
		}), e.d(n, "X", function() {
			return l.b
		});
		var h = e(160);
		e.d(n, "Q", function() {
			return h.a
		});
		var d = e(161);
		e.d(n, "R", function() {
			return d.a
		});
		var b = e(162);
		e.d(n, "S", function() {
			return b.a
		});
		var v = e(164);
		e.d(n, "T", function() {
			return v.a
		});
		var p = e(163);
		e.d(n, "U", function() {
			return p.a
		});
		var g = e(165);
		e.d(n, "V", function() {
			return g.a
		});
		var _ = e(166);
		e.d(n, "W", function() {
			return _.a
		});
		var y = e(437);
		e.d(n, "e", function() {
			return y.a
		});
		var m = e(438);
		e.d(n, "f", function() {
			return m.a
		});
		var O = e(48);
		e.d(n, "d", function() {
			return O.b
		});
		var j = e(439);
		e.d(n, "g", function() {
			return j.a
		});
		var x = e(167);
		e.d(n, "i", function() {
			return x.b
		});
		var w = e(168);
		e.d(n, "j", function() {
			return w.b
		});
		var M = e(49);
		e.d(n, "h", function() {
			return M.b
		});
		var k = e(440);
		e.d(n, "l", function() {
			return k.a
		});
		var T = e(441);
		e.d(n, "m", function() {
			return T.a
		});
		var N = e(86);
		e.d(n, "k", function() {
			return N.a
		});
		var E = e(442);
		e.d(n, "o", function() {
			return E.a
		});
		var S = e(46);
		e.d(n, "n", function() {
			return S.a
		});
		var A = e(443);
		e.d(n, "p", function() {
			return A.a
		}), e.d(n, "q", function() {
			return A.b
		});
		var C = e(444);
		e.d(n, "r", function() {
			return C.a
		});
		var z = e(445);
		e.d(n, "s", function() {
			return z.a
		}), e.d(n, "t", function() {
			return z.b
		}), e.d(n, "u", function() {
			return z.c
		});
		var P = e(446);
		e.d(n, "E", function() {
			return P.a
		});
		var q = e(447);
		e.d(n, "G", function() {
			return q.a
		});
		var R = e(448);
		e.d(n, "F", function() {
			return R.a
		});
		var D = e(30);
		e.d(n, "H", function() {
			return D.a
		});
		var L = e(449);
		e.d(n, "I", function() {
			return L.a
		});
		var U = e(450);
		e.d(n, "J", function() {
			return U.a
		});
		var F = e(87);
		e.d(n, "K", function() {
			return F.a
		});
		var I = e(451);
		e.d(n, "L", function() {
			return I.a
		});
		var Y = e(452);
		e.d(n, "M", function() {
			return Y.a
		});
		var B = e(31);
		e.d(n, "N", function() {
			return B.a
		});
		var H = e(453);
		e.d(n, "O", function() {
			return H.a
		})
	}, function(t, n, e) {
		"use strict";
		e.d(n, "a", function() {
			return r
		});
		var r = "4.13.0"
	}, function(t, n, e) {
		"use strict";
		var r = e(92);
		n.a = function(t, n, e) {
			var i, u, c, o, a = t.length,
				f = n.length,
				s = new Array(a * f);
			for (null == e && (e = r.b), i = c = 0; i < a; ++i)
				for (o = t[i], u = 0; u < f; ++u, ++c) s[c] = e(o, n[u]);
			return s
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(96),
			i = e(90),
			u = e(178),
			c = e(95),
			o = e(179),
			a = e(97),
			f = e(98),
			s = e(99);
		n.a = function() {
			var t = o.a,
				n = c.a,
				e = s.a;

			function l(r) {
				var u, c, o = r.length,
					s = new Array(o);
				for (u = 0; u < o; ++u) s[u] = t(r[u], u, r);
				var l = n(s),
					h = l[0],
					d = l[1],
					b = e(s, h, d);
				Array.isArray(b) || (b = Object(f.c)(h, d, b), b = Object(a.a)(Math.ceil(h / b) * b, Math.floor(d / b) * b, b));
				for (var v = b.length; b[0] <= h;) b.shift(), --v;
				for (; b[v - 1] > d;) b.pop(), --v;
				var p, g = new Array(v + 1);
				for (u = 0; u <= v; ++u)(p = g[u] = []).x0 = u > 0 ? b[u - 1] : h, p.x1 = u < v ? b[u] : d;
				for (u = 0; u < o; ++u) h <= (c = s[u]) && c <= d && g[Object(i.c)(b, c, 0, v)].push(r[u]);
				return g
			}
			return l.value = function(n) {
				return arguments.length ? (t = "function" == typeof n ? n : Object(u.a)(n), l) : t
			}, l.domain = function(t) {
				return arguments.length ? (n = "function" == typeof t ? t : Object(u.a)([t[0], t[1]]), l) : n
			}, l.thresholds = function(t) {
				return arguments.length ? (e = "function" == typeof t ? t : Array.isArray(t) ? Object(u.a)(r.b.call(t)) : Object(u.a)(t), l) : e
			}, l
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return function() {
				return t
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return t
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(96),
			i = e(17),
			u = e(22),
			c = e(50);
		n.a = function(t, n, e) {
			return t = r.a.call(t, u.a).sort(i.a), Math.ceil((e - n) / (2 * (Object(c.a)(t, .75) - Object(c.a)(t, .25)) * Math.pow(t.length, -1 / 3)))
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(93);
		n.a = function(t, n, e) {
			return Math.ceil((e - n) / (3.5 * Object(r.a)(t) * Math.pow(t.length, -1 / 3)))
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			var e, r, i = t.length,
				u = -1;
			if (null == n) {
				for (; ++u < i;)
					if (null != (e = t[u]) && e >= e)
						for (r = e; ++u < i;) null != (e = t[u]) && e > r && (r = e)
			} else
				for (; ++u < i;)
					if (null != (e = n(t[u], u, t)) && e >= e)
						for (r = e; ++u < i;) null != (e = n(t[u], u, t)) && e > r && (r = e);
			return r
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(22);
		n.a = function(t, n) {
			var e, i = t.length,
				u = i,
				c = -1,
				o = 0;
			if (null == n)
				for (; ++c < i;) isNaN(e = Object(r.a)(t[c])) ? --u : o += e;
			else
				for (; ++c < i;) isNaN(e = Object(r.a)(n(t[c], c, t))) ? --u : o += e;
			if (u) return o / u
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(17),
			i = e(22),
			u = e(50);
		n.a = function(t, n) {
			var e, c = t.length,
				o = -1,
				a = [];
			if (null == n)
				for (; ++o < c;) isNaN(e = Object(i.a)(t[o])) || a.push(e);
			else
				for (; ++o < c;) isNaN(e = Object(i.a)(n(t[o], o, t))) || a.push(e);
			return Object(u.a)(a.sort(r.a), .5)
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			for (var n, e, r, i = t.length, u = -1, c = 0; ++u < i;) c += t[u].length;
			for (e = new Array(c); --i >= 0;)
				for (n = (r = t[i]).length; --n >= 0;) e[--c] = r[n];
			return e
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			for (var e = n.length, r = new Array(e); e--;) r[e] = t[n[e]];
			return r
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(17);
		n.a = function(t, n) {
			if (e = t.length) {
				var e, i, u = 0,
					c = 0,
					o = t[c];
				for (null == n && (n = r.a); ++u < e;)(n(i = t[u], o) < 0 || 0 !== n(o, o)) && (o = i, c = u);
				return 0 === n(o, o) ? c : void 0
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n, e) {
			for (var r, i, u = (null == e ? t.length : e) - (n = null == n ? 0 : +n); u;) i = Math.random() * u-- | 0, r = t[u + n], t[u + n] = t[i + n], t[i + n] = r;
			return t
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			var e, r = t.length,
				i = -1,
				u = 0;
			if (null == n)
				for (; ++i < r;)(e = +t[i]) && (u += e);
			else
				for (; ++i < r;)(e = +n(t[i], i, t)) && (u += e);
			return u
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(101);
		n.a = function() {
			return Object(r.a)(arguments)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(192);
		e.d(n, "d", function() {
			return r.d
		}), e.d(n, "c", function() {
			return r.c
		}), e.d(n, "a", function() {
			return r.a
		}), e.d(n, "b", function() {
			return r.b
		})
	}, function(t, n, e) {
		"use strict";
		n.d = function(t) {
			return d(u, t)
		}, n.c = function(t) {
			return d(c, t)
		}, n.a = function(t) {
			return d(o, t)
		}, n.b = function(t) {
			return d(a, t)
		};
		var r = e(193),
			i = e(194),
			u = 1,
			c = 2,
			o = 3,
			a = 4,
			f = 1e-6;

		function s(t) {
			return "translate(" + (t + .5) + ",0)"
		}

		function l(t) {
			return "translate(0," + (t + .5) + ")"
		}

		function h() {
			return !this.__axis
		}

		function d(t, n) {
			var e = [],
				d = null,
				b = null,
				v = 6,
				p = 6,
				g = 3,
				_ = t === u || t === a ? -1 : 1,
				y = t === a || t === c ? "x" : "y",
				m = t === u || t === o ? s : l;

			function O(r) {
				var s = null == d ? n.ticks ? n.ticks.apply(n, e) : n.domain() : d,
					l = null == b ? n.tickFormat ? n.tickFormat.apply(n, e) : i.a : b,
					O = Math.max(v, 0) + g,
					j = n.range(),
					x = +j[0] + .5,
					w = +j[j.length - 1] + .5,
					M = (n.bandwidth ? function(t) {
						var n = Math.max(0, t.bandwidth() - 1) / 2;
						return t.round() && (n = Math.round(n)),
							function(e) {
								return +t(e) + n
							}
					} : function(t) {
						return function(n) {
							return +t(n)
						}
					})(n.copy()),
					k = r.selection ? r.selection() : r,
					T = k.selectAll(".domain").data([null]),
					N = k.selectAll(".tick").data(s, n).order(),
					E = N.exit(),
					S = N.enter().append("g").attr("class", "tick"),
					A = N.select("line"),
					C = N.select("text");
				T = T.merge(T.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), N = N.merge(S), A = A.merge(S.append("line").attr("stroke", "#000").attr(y + "2", _ * v)), C = C.merge(S.append("text").attr("fill", "#000").attr(y, _ * O).attr("dy", t === u ? "0em" : t === o ? "0.71em" : "0.32em")), r !== k && (T = T.transition(r), N = N.transition(r), A = A.transition(r), C = C.transition(r), E = E.transition(r).attr("opacity", f).attr("transform", function(t) {
					return isFinite(t = M(t)) ? m(t) : this.getAttribute("transform")
				}), S.attr("opacity", f).attr("transform", function(t) {
					var n = this.parentNode.__axis;
					return m(n && isFinite(n = n(t)) ? n : M(t))
				})), E.remove(), T.attr("d", t === a || t == c ? "M" + _ * p + "," + x + "H0.5V" + w + "H" + _ * p : "M" + x + "," + _ * p + "V0.5H" + w + "V" + _ * p), N.attr("opacity", 1).attr("transform", function(t) {
					return m(M(t))
				}), A.attr(y + "2", _ * v), C.attr(y, _ * O).text(l), k.filter(h).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === c ? "start" : t === a ? "end" : "middle"), k.each(function() {
					this.__axis = M
				})
			}
			return O.scale = function(t) {
				return arguments.length ? (n = t, O) : n
			}, O.ticks = function() {
				return e = r.a.call(arguments), O
			}, O.tickArguments = function(t) {
				return arguments.length ? (e = null == t ? [] : r.a.call(t), O) : e.slice()
			}, O.tickValues = function(t) {
				return arguments.length ? (d = null == t ? null : r.a.call(t), O) : d && d.slice()
			}, O.tickFormat = function(t) {
				return arguments.length ? (b = t, O) : b
			}, O.tickSize = function(t) {
				return arguments.length ? (v = p = +t, O) : v
			}, O.tickSizeInner = function(t) {
				return arguments.length ? (v = +t, O) : v
			}, O.tickSizeOuter = function(t) {
				return arguments.length ? (p = +t, O) : p
			}, O.tickPadding = function(t) {
				return arguments.length ? (g = +t, O) : g
			}, O
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "a", function() {
			return r
		});
		var r = Array.prototype.slice
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return t
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(196);
		e.d(n, "a", function() {
			return r.d
		}), e.d(n, "c", function() {
			return r.b
		}), e.d(n, "d", function() {
			return r.c
		}), e.d(n, "b", function() {
			return r.a
		})
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			var n = t.__brush;
			return n ? n.dim.output(n.selection) : null
		}, n.b = function() {
			return N(v)
		}, n.c = function() {
			return N(p)
		};
		var r = e(12),
			i = e(51),
			u = e(5),
			c = e(1),
			o = e(62),
			a = e(279),
			f = e(280),
			s = e(281),
			l = {
				name: "drag"
			},
			h = {
				name: "space"
			},
			d = {
				name: "handle"
			},
			b = {
				name: "center"
			},
			v = {
				name: "x",
				handles: ["e", "w"].map(x),
				input: function(t, n) {
					return t && [
						[t[0], n[0][1]],
						[t[1], n[1][1]]
					]
				},
				output: function(t) {
					return t && [t[0][0], t[1][0]]
				}
			},
			p = {
				name: "y",
				handles: ["n", "s"].map(x),
				input: function(t, n) {
					return t && [
						[n[0][0], t[0]],
						[n[1][0], t[1]]
					]
				},
				output: function(t) {
					return t && [t[0][1], t[1][1]]
				}
			},
			g = {
				name: "xy",
				handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(x),
				input: function(t) {
					return t
				},
				output: function(t) {
					return t
				}
			},
			_ = {
				overlay: "crosshair",
				selection: "move",
				n: "ns-resize",
				e: "ew-resize",
				s: "ns-resize",
				w: "ew-resize",
				nw: "nwse-resize",
				ne: "nesw-resize",
				se: "nwse-resize",
				sw: "nesw-resize"
			},
			y = {
				e: "w",
				w: "e",
				nw: "ne",
				ne: "nw",
				se: "sw",
				sw: "se"
			},
			m = {
				n: "s",
				s: "n",
				nw: "sw",
				ne: "se",
				se: "ne",
				sw: "nw"
			},
			O = {
				overlay: 1,
				selection: 1,
				n: null,
				e: 1,
				s: null,
				w: -1,
				nw: -1,
				ne: 1,
				se: 1,
				sw: -1
			},
			j = {
				overlay: 1,
				selection: 1,
				n: -1,
				e: null,
				s: 1,
				w: null,
				nw: -1,
				ne: -1,
				se: 1,
				sw: 1
			};

		function x(t) {
			return {
				type: t
			}
		}

		function w() {
			return !c.e.button
		}

		function M() {
			var t = this.ownerSVGElement || this;
			return [
				[0, 0],
				[t.width.baseVal.value, t.height.baseVal.value]
			]
		}

		function k(t) {
			for (; !t.__brush;)
				if (!(t = t.parentNode)) return;
			return t.__brush
		}

		function T(t) {
			return t[0][0] === t[1][0] || t[0][1] === t[1][1]
		}

		function N(t) {
			var n, e = M,
				g = w,
				N = Object(r.a)(S, "start", "brush", "end"),
				E = 6;

			function S(n) {
				var e = n.property("__brush", q).selectAll(".overlay").data([x("overlay")]);
				e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", _.overlay).merge(e).each(function() {
					var t = k(this).extent;
					Object(c.k)(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1])
				}), n.selectAll(".selection").data([x("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", _.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
				var r = n.selectAll(".handle").data(t.handles, function(t) {
					return t.type
				});
				r.exit().remove(), r.enter().append("rect").attr("class", function(t) {
					return "handle handle--" + t.type
				}).attr("cursor", function(t) {
					return _[t.type]
				}), n.each(A).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", P)
			}

			function A() {
				var t = Object(c.k)(this),
					n = k(this).selection;
				n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x", function(t) {
					return "e" === t.type[t.type.length - 1] ? n[1][0] - E / 2 : n[0][0] - E / 2
				}).attr("y", function(t) {
					return "s" === t.type[0] ? n[1][1] - E / 2 : n[0][1] - E / 2
				}).attr("width", function(t) {
					return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + E : E
				}).attr("height", function(t) {
					return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + E : E
				})) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
			}

			function C(t, n) {
				return t.__brush.emitter || new z(t, n)
			}

			function z(t, n) {
				this.that = t, this.args = n, this.state = t.__brush, this.active = 0
			}

			function P() {
				if (c.e.touches) {
					if (c.e.changedTouches.length < c.e.touches.length) return Object(s.a)()
				} else if (n) return;
				if (g.apply(this, arguments)) {
					var e, r, u, a, f, x, w, M, N, E, S, z, P, q = this,
						R = c.e.target.__data__.type,
						D = "selection" === (c.e.metaKey ? R = "overlay" : R) ? l : c.e.altKey ? b : d,
						L = t === p ? null : O[R],
						U = t === v ? null : j[R],
						F = k(q),
						I = F.extent,
						Y = F.selection,
						B = I[0][0],
						H = I[0][1],
						X = I[1][0],
						V = I[1][1],
						W = L && U && c.e.shiftKey,
						G = Object(c.h)(q),
						Z = G,
						Q = C(q, arguments).beforestart();
					"overlay" === R ? F.selection = Y = [
						[e = t === p ? B : G[0], u = t === v ? H : G[1]],
						[f = t === p ? X : e, w = t === v ? V : u]
					] : (e = Y[0][0], u = Y[0][1], f = Y[1][0], w = Y[1][1]), r = e, a = u, x = f, M = w;
					var $ = Object(c.k)(q).attr("pointer-events", "none"),
						J = $.selectAll(".overlay").attr("cursor", _[R]);
					if (c.e.touches) $.on("touchmove.brush", tt, !0).on("touchend.brush touchcancel.brush", et, !0);
					else {
						var K = Object(c.k)(c.e.view).on("keydown.brush", function() {
							switch (c.e.keyCode) {
								case 16:
									W = L && U;
									break;
								case 18:
									D === d && (L && (f = x - N * L, e = r + N * L), U && (w = M - E * U, u = a + E * U), D = b, nt());
									break;
								case 32:
									D !== d && D !== b || (L < 0 ? f = x - N : L > 0 && (e = r - N), U < 0 ? w = M - E : U > 0 && (u = a - E), D = h, J.attr("cursor", _.selection), nt());
									break;
								default:
									return
							}
							Object(s.a)()
						}, !0).on("keyup.brush", function() {
							switch (c.e.keyCode) {
								case 16:
									W && (z = P = W = !1, nt());
									break;
								case 18:
									D === b && (L < 0 ? f = x : L > 0 && (e = r), U < 0 ? w = M : U > 0 && (u = a), D = d, nt());
									break;
								case 32:
									D === h && (c.e.altKey ? (L && (f = x - N * L, e = r + N * L), U && (w = M - E * U, u = a + E * U), D = b) : (L < 0 ? f = x : L > 0 && (e = r), U < 0 ? w = M : U > 0 && (u = a), D = d), J.attr("cursor", _[R]), nt());
									break;
								default:
									return
							}
							Object(s.a)()
						}, !0).on("mousemove.brush", tt, !0).on("mouseup.brush", et, !0);
						Object(i.b)(c.e.view)
					}
					Object(s.b)(), Object(o.b)(q), A.call(q), Q.start()
				}

				function tt() {
					var t = Object(c.h)(q);
					!W || z || P || (Math.abs(t[0] - Z[0]) > Math.abs(t[1] - Z[1]) ? P = !0 : z = !0), Z = t, S = !0, Object(s.a)(), nt()
				}

				function nt() {
					var t;
					switch (N = Z[0] - G[0], E = Z[1] - G[1], D) {
						case h:
						case l:
							L && (N = Math.max(B - e, Math.min(X - f, N)), r = e + N, x = f + N), U && (E = Math.max(H - u, Math.min(V - w, E)), a = u + E, M = w + E);
							break;
						case d:
							L < 0 ? (N = Math.max(B - e, Math.min(X - e, N)), r = e + N, x = f) : L > 0 && (N = Math.max(B - f, Math.min(X - f, N)), r = e, x = f + N), U < 0 ? (E = Math.max(H - u, Math.min(V - u, E)), a = u + E, M = w) : U > 0 && (E = Math.max(H - w, Math.min(V - w, E)), a = u, M = w + E);
							break;
						case b:
							L && (r = Math.max(B, Math.min(X, e - N * L)), x = Math.max(B, Math.min(X, f + N * L))), U && (a = Math.max(H, Math.min(V, u - E * U)), M = Math.max(H, Math.min(V, w + E * U)))
					}
					x < r && (L *= -1, t = e, e = f, f = t, t = r, r = x, x = t, R in y && J.attr("cursor", _[R = y[R]])), M < a && (U *= -1, t = u, u = w, w = t, t = a, a = M, M = t, R in m && J.attr("cursor", _[R = m[R]])), F.selection && (Y = F.selection), z && (r = Y[0][0], x = Y[1][0]), P && (a = Y[0][1], M = Y[1][1]), Y[0][0] === r && Y[0][1] === a && Y[1][0] === x && Y[1][1] === M || (F.selection = [
						[r, a],
						[x, M]
					], A.call(q), Q.brush())
				}

				function et() {
					if (Object(s.b)(), c.e.touches) {
						if (c.e.touches.length) return;
						n && clearTimeout(n), n = setTimeout(function() {
							n = null
						}, 500), $.on("touchmove.brush touchend.brush touchcancel.brush", null)
					} else Object(i.c)(c.e.view, S), K.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
					$.attr("pointer-events", "all"), J.attr("cursor", _.overlay), F.selection && (Y = F.selection), T(Y) && (F.selection = null, A.call(q)), Q.end()
				}
			}

			function q() {
				var n = this.__brush || {
					selection: null
				};
				return n.extent = e.apply(this, arguments), n.dim = t, n
			}
			return S.move = function(n, e) {
				n.selection ? n.on("start.brush", function() {
					C(this, arguments).beforestart().start()
				}).on("interrupt.brush end.brush", function() {
					C(this, arguments).end()
				}).tween("brush", function() {
					var n = this,
						r = n.__brush,
						i = C(n, arguments),
						c = r.selection,
						o = t.input("function" == typeof e ? e.apply(this, arguments) : e, r.extent),
						a = Object(u.a)(c, o);

					function f(t) {
						r.selection = 1 === t && T(o) ? null : a(t), A.call(n), i.brush()
					}
					return c && o ? f : f(1)
				}) : n.each(function() {
					var n = arguments,
						r = this.__brush,
						i = t.input("function" == typeof e ? e.apply(this, n) : e, r.extent),
						u = C(this, n).beforestart();
					Object(o.b)(this), r.selection = null == i || T(i) ? null : i, A.call(this), u.start().brush().end()
				})
			}, z.prototype = {
				beforestart: function() {
					return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this
				},
				start: function() {
					return this.starting && (this.starting = !1, this.emit("start")), this
				},
				brush: function() {
					return this.emit("brush"), this
				},
				end: function() {
					return 0 == --this.active && (delete this.state.emitter, this.emit("end")), this
				},
				emit: function(n) {
					Object(c.d)(new f.a(S, n, t.output(this.state.selection)), N.apply, N, [n, this.that, this.args])
				}
			}, S.extent = function(t) {
				return arguments.length ? (e = "function" == typeof t ? t : Object(a.a)([
					[+t[0][0], +t[0][1]],
					[+t[1][0], +t[1][1]]
				]), S) : e
			}, S.filter = function(t) {
				return arguments.length ? (g = "function" == typeof t ? t : Object(a.a)(!!t), S) : g
			}, S.handleSize = function(t) {
				return arguments.length ? (E = +t, S) : E
			}, S.on = function() {
				var t = N.on.apply(N, arguments);
				return t === N ? S : t
			}, S
		}
		n.d = function() {
			return N(g)
		}
	}, function(t, n, e) {
		"use strict";
		var r = {
			value: function() {}
		};

		function i() {
			for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
				if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
				r[t] = []
			}
			return new u(r)
		}

		function u(t) {
			this._ = t
		}

		function c(t, n) {
			for (var e, r = 0, i = t.length; r < i; ++r)
				if ((e = t[r]).name === n) return e.value
		}

		function o(t, n, e) {
			for (var i = 0, u = t.length; i < u; ++i)
				if (t[i].name === n) {
					t[i] = r, t = t.slice(0, i).concat(t.slice(i + 1));
					break
				} return null != e && t.push({
				name: n,
				value: e
			}), t
		}
		u.prototype = i.prototype = {
			constructor: u,
			on: function(t, n) {
				var e, r, i = this._,
					u = (r = i, (t + "").trim().split(/^|\s+/).map(function(t) {
						var n = "",
							e = t.indexOf(".");
						if (e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), t && !r.hasOwnProperty(t)) throw new Error("unknown type: " + t);
						return {
							type: t,
							name: n
						}
					})),
					a = -1,
					f = u.length;
				if (!(arguments.length < 2)) {
					if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
					for (; ++a < f;)
						if (e = (t = u[a]).type) i[e] = o(i[e], t.name, n);
						else if (null == n)
						for (e in i) i[e] = o(i[e], t.name, null);
					return this
				}
				for (; ++a < f;)
					if ((e = (t = u[a]).type) && (e = c(i[e], t.name))) return e
			},
			copy: function() {
				var t = {},
					n = this._;
				for (var e in n) t[e] = n[e].slice();
				return new u(t)
			},
			call: function(t, n) {
				if ((e = arguments.length - 2) > 0)
					for (var e, r, i = new Array(e), u = 0; u < e; ++u) i[u] = arguments[u + 2];
				if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
				for (u = 0, e = (r = this._[t]).length; u < e; ++u) r[u].value.apply(n, i)
			},
			apply: function(t, n, e) {
				if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
				for (var r = this._[t], i = 0, u = r.length; i < u; ++i) r[i].value.apply(n, e)
			}
		}, n.a = i
	}, function(t, n, e) {
		"use strict";
		var r = e(12),
			i = e(1),
			u = e(108),
			c = e(109),
			o = e(233),
			a = e(234);

		function f() {
			return !i.e.button
		}

		function s() {
			return this.parentNode
		}

		function l(t) {
			return null == t ? {
				x: i.e.x,
				y: i.e.y
			} : t
		}

		function h() {
			return "ontouchstart" in this
		}
		n.a = function() {
			var t, n, e, d, b = f,
				v = s,
				p = l,
				g = h,
				_ = {},
				y = Object(r.a)("start", "drag", "end"),
				m = 0,
				O = 0;

			function j(t) {
				t.on("mousedown.drag", x).filter(g).on("touchstart.drag", k).on("touchmove.drag", T).on("touchend.drag touchcancel.drag", N).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
			}

			function x() {
				if (!d && b.apply(this, arguments)) {
					var r = E("mouse", v.apply(this, arguments), i.h, this, arguments);
					r && (Object(i.k)(i.e.view).on("mousemove.drag", w, !0).on("mouseup.drag", M, !0), Object(u.a)(i.e.view), Object(c.b)(), e = !1, t = i.e.clientX, n = i.e.clientY, r("start"))
				}
			}

			function w() {
				if (Object(c.a)(), !e) {
					var r = i.e.clientX - t,
						u = i.e.clientY - n;
					e = r * r + u * u > O
				}
				_.mouse("drag")
			}

			function M() {
				Object(i.k)(i.e.view).on("mousemove.drag mouseup.drag", null), Object(u.b)(i.e.view, e), Object(c.a)(), _.mouse("end")
			}

			function k() {
				if (b.apply(this, arguments)) {
					var t, n, e = i.e.changedTouches,
						r = v.apply(this, arguments),
						u = e.length;
					for (t = 0; t < u; ++t)(n = E(e[t].identifier, r, i.q, this, arguments)) && (Object(c.b)(), n("start"))
				}
			}

			function T() {
				var t, n, e = i.e.changedTouches,
					r = e.length;
				for (t = 0; t < r; ++t)(n = _[e[t].identifier]) && (Object(c.a)(), n("drag"))
			}

			function N() {
				var t, n, e = i.e.changedTouches,
					r = e.length;
				for (d && clearTimeout(d), d = setTimeout(function() {
						d = null
					}, 500), t = 0; t < r; ++t)(n = _[e[t].identifier]) && (Object(c.b)(), n("end"))
			}

			function E(t, n, e, r, u) {
				var c, o, f, s = e(n, t),
					l = y.copy();
				if (Object(i.d)(new a.a(j, "beforestart", c, t, m, s[0], s[1], 0, 0, l), function() {
						return null != (i.e.subject = c = p.apply(r, u)) && (o = c.x - s[0] || 0, f = c.y - s[1] || 0, !0)
					})) return function h(d) {
					var b, v = s;
					switch (d) {
						case "start":
							_[t] = h, b = m++;
							break;
						case "end":
							delete _[t], --m;
						case "drag":
							s = e(n, t), b = m
					}
					Object(i.d)(new a.a(j, d, c, t, b, s[0] + o, s[1] + f, s[0] - v[0], s[1] - v[1], l), l.apply, l, [d, r, u])
				}
			}
			return j.filter = function(t) {
				return arguments.length ? (b = "function" == typeof t ? t : Object(o.a)(!!t), j) : b
			}, j.container = function(t) {
				return arguments.length ? (v = "function" == typeof t ? t : Object(o.a)(t), j) : v
			}, j.subject = function(t) {
				return arguments.length ? (p = "function" == typeof t ? t : Object(o.a)(t), j) : p
			}, j.touchable = function(t) {
				return arguments.length ? (g = "function" == typeof t ? t : Object(o.a)(!!t), j) : g
			}, j.on = function() {
				var t = y.on.apply(y, arguments);
				return t === y ? j : t
			}, j.clickDistance = function(t) {
				return arguments.length ? (O = (t = +t) * t, j) : Math.sqrt(O)
			}, j
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(33),
			i = e(102);
		n.a = function(t) {
			return Object(i.a)(Object(r.a)(t).call(document.documentElement))
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(4),
			i = e(54);
		n.a = function(t) {
			"function" != typeof t && (t = Object(i.a)(t));
			for (var n = this._groups, e = n.length, u = new Array(e), c = 0; c < e; ++c)
				for (var o, a, f = n[c], s = f.length, l = u[c] = new Array(s), h = 0; h < s; ++h)(o = f[h]) && (a = t.call(o, o.__data__, h, f)) && ("__data__" in o && (a.__data__ = o.__data__), l[h] = a);
			return new r.a(u, this._parents)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(4),
			i = e(103);
		n.a = function(t) {
			"function" != typeof t && (t = Object(i.a)(t));
			for (var n = this._groups, e = n.length, u = [], c = [], o = 0; o < e; ++o)
				for (var a, f = n[o], s = f.length, l = 0; l < s; ++l)(a = f[l]) && (u.push(t.call(a, a.__data__, l, f)), c.push(a));
			return new r.a(u, c)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(4),
			i = e(104);
		n.a = function(t) {
			"function" != typeof t && (t = Object(i.a)(t));
			for (var n = this._groups, e = n.length, u = new Array(e), c = 0; c < e; ++c)
				for (var o, a = n[c], f = a.length, s = u[c] = [], l = 0; l < f; ++l)(o = a[l]) && t.call(o, o.__data__, l, a) && s.push(o);
			return new r.a(u, this._parents)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(4),
			i = e(105),
			u = e(204),
			c = "$";

		function o(t, n, e, r, u, c) {
			for (var o, a = 0, f = n.length, s = c.length; a < s; ++a)(o = n[a]) ? (o.__data__ = c[a], r[a] = o) : e[a] = new i.a(t, c[a]);
			for (; a < f; ++a)(o = n[a]) && (u[a] = o)
		}

		function a(t, n, e, r, u, o, a) {
			var f, s, l, h = {},
				d = n.length,
				b = o.length,
				v = new Array(d);
			for (f = 0; f < d; ++f)(s = n[f]) && (v[f] = l = c + a.call(s, s.__data__, f, n), l in h ? u[f] = s : h[l] = s);
			for (f = 0; f < b; ++f)(s = h[l = c + a.call(t, o[f], f, o)]) ? (r[f] = s, s.__data__ = o[f], h[l] = null) : e[f] = new i.a(t, o[f]);
			for (f = 0; f < d; ++f)(s = n[f]) && h[v[f]] === s && (u[f] = s)
		}
		n.a = function(t, n) {
			if (!t) return g = new Array(this.size()), d = -1, this.each(function(t) {
				g[++d] = t
			}), g;
			var e = n ? a : o,
				i = this._parents,
				c = this._groups;
			"function" != typeof t && (t = Object(u.a)(t));
			for (var f = c.length, s = new Array(f), l = new Array(f), h = new Array(f), d = 0; d < f; ++d) {
				var b = i[d],
					v = c[d],
					p = v.length,
					g = t.call(b, b && b.__data__, d, i),
					_ = g.length,
					y = l[d] = new Array(_),
					m = s[d] = new Array(_);
				e(b, v, y, m, h[d] = new Array(p), g, n);
				for (var O, j, x = 0, w = 0; x < _; ++x)
					if (O = y[x]) {
						for (x >= w && (w = x + 1); !(j = m[w]) && ++w < _;);
						O._next = j || null
					}
			}
			return (s = new r.a(s, i))._enter = l, s._exit = h, s
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return function() {
				return t
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(106),
			i = e(4);
		n.a = function() {
			return new i.a(this._exit || this._groups.map(r.a), this._parents)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(4);
		n.a = function(t) {
			for (var n = this._groups, e = t._groups, i = n.length, u = e.length, c = Math.min(i, u), o = new Array(i), a = 0; a < c; ++a)
				for (var f, s = n[a], l = e[a], h = s.length, d = o[a] = new Array(h), b = 0; b < h; ++b)(f = s[b] || l[b]) && (d[b] = f);
			for (; a < i; ++a) o[a] = n[a];
			return new r.a(o, this._parents)
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function() {
			for (var t = this._groups, n = -1, e = t.length; ++n < e;)
				for (var r, i = t[n], u = i.length - 1, c = i[u]; --u >= 0;)(r = i[u]) && (c && c !== r.nextSibling && c.parentNode.insertBefore(r, c), c = r);
			return this
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(4);

		function i(t, n) {
			return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
		}
		n.a = function(t) {
			function n(n, e) {
				return n && e ? t(n.__data__, e.__data__) : !n - !e
			}
			t || (t = i);
			for (var e = this._groups, u = e.length, c = new Array(u), o = 0; o < u; ++o) {
				for (var a, f = e[o], s = f.length, l = c[o] = new Array(s), h = 0; h < s; ++h)(a = f[h]) && (l[h] = a);
				l.sort(n)
			}
			return new r.a(c, this._parents).order()
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function() {
			var t = arguments[0];
			return arguments[0] = this, t.apply(null, arguments), this
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function() {
			var t = new Array(this.size()),
				n = -1;
			return this.each(function() {
				t[++n] = this
			}), t
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function() {
			for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
				for (var r = t[n], i = 0, u = r.length; i < u; ++i) {
					var c = r[i];
					if (c) return c
				}
			return null
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function() {
			var t = 0;
			return this.each(function() {
				++t
			}), t
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function() {
			return !this.node()
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
				for (var i, u = n[e], c = 0, o = u.length; c < o; ++c)(i = u[c]) && t.call(i, i.__data__, c, u);
			return this
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(52);
		n.a = function(t, n) {
			var e = Object(r.a)(t);
			if (arguments.length < 2) {
				var i = this.node();
				return e.local ? i.getAttributeNS(e.space, e.local) : i.getAttribute(e)
			}
			return this.each((null == n ? e.local ? function(t) {
				return function() {
					this.removeAttributeNS(t.space, t.local)
				}
			} : function(t) {
				return function() {
					this.removeAttribute(t)
				}
			} : "function" == typeof n ? e.local ? function(t, n) {
				return function() {
					var e = n.apply(this, arguments);
					null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
				}
			} : function(t, n) {
				return function() {
					var e = n.apply(this, arguments);
					null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
				}
			} : e.local ? function(t, n) {
				return function() {
					this.setAttributeNS(t.space, t.local, n)
				}
			} : function(t, n) {
				return function() {
					this.setAttribute(t, n)
				}
			})(e, n))
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			return arguments.length > 1 ? this.each((null == n ? function(t) {
				return function() {
					delete this[t]
				}
			} : "function" == typeof n ? function(t, n) {
				return function() {
					var e = n.apply(this, arguments);
					null == e ? delete this[t] : this[t] = e
				}
			} : function(t, n) {
				return function() {
					this[t] = n
				}
			})(t, n)) : this.node()[t]
		}
	}, function(t, n, e) {
		"use strict";

		function r(t) {
			return t.trim().split(/^|\s+/)
		}

		function i(t) {
			return t.classList || new u(t)
		}

		function u(t) {
			this._node = t, this._names = r(t.getAttribute("class") || "")
		}

		function c(t, n) {
			for (var e = i(t), r = -1, u = n.length; ++r < u;) e.add(n[r])
		}

		function o(t, n) {
			for (var e = i(t), r = -1, u = n.length; ++r < u;) e.remove(n[r])
		}
		u.prototype = {
			add: function(t) {
				this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
			},
			remove: function(t) {
				var n = this._names.indexOf(t);
				n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
			},
			contains: function(t) {
				return this._names.indexOf(t) >= 0
			}
		}, n.a = function(t, n) {
			var e = r(t + "");
			if (arguments.length < 2) {
				for (var u = i(this.node()), a = -1, f = e.length; ++a < f;)
					if (!u.contains(e[a])) return !1;
				return !0
			}
			return this.each(("function" == typeof n ? function(t, n) {
				return function() {
					(n.apply(this, arguments) ? c : o)(this, t)
				}
			} : n ? function(t) {
				return function() {
					c(this, t)
				}
			} : function(t) {
				return function() {
					o(this, t)
				}
			})(e, n))
		}
	}, function(t, n, e) {
		"use strict";

		function r() {
			this.textContent = ""
		}
		n.a = function(t) {
			return arguments.length ? this.each(null == t ? r : ("function" == typeof t ? function(t) {
				return function() {
					var n = t.apply(this, arguments);
					this.textContent = null == n ? "" : n
				}
			} : function(t) {
				return function() {
					this.textContent = t
				}
			})(t)) : this.node().textContent
		}
	}, function(t, n, e) {
		"use strict";

		function r() {
			this.innerHTML = ""
		}
		n.a = function(t) {
			return arguments.length ? this.each(null == t ? r : ("function" == typeof t ? function(t) {
				return function() {
					var n = t.apply(this, arguments);
					this.innerHTML = null == n ? "" : n
				}
			} : function(t) {
				return function() {
					this.innerHTML = t
				}
			})(t)) : this.node().innerHTML
		}
	}, function(t, n, e) {
		"use strict";

		function r() {
			this.nextSibling && this.parentNode.appendChild(this)
		}
		n.a = function() {
			return this.each(r)
		}
	}, function(t, n, e) {
		"use strict";

		function r() {
			this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
		}
		n.a = function() {
			return this.each(r)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(33);
		n.a = function(t) {
			var n = "function" == typeof t ? t : Object(r.a)(t);
			return this.select(function() {
				return this.appendChild(n.apply(this, arguments))
			})
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(33),
			i = e(54);

		function u() {
			return null
		}
		n.a = function(t, n) {
			var e = "function" == typeof t ? t : Object(r.a)(t),
				c = null == n ? u : "function" == typeof n ? n : Object(i.a)(n);
			return this.select(function() {
				return this.insertBefore(e.apply(this, arguments), c.apply(this, arguments) || null)
			})
		}
	}, function(t, n, e) {
		"use strict";

		function r() {
			var t = this.parentNode;
			t && t.removeChild(this)
		}
		n.a = function() {
			return this.each(r)
		}
	}, function(t, n, e) {
		"use strict";

		function r() {
			return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
		}

		function i() {
			return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
		}
		n.a = function(t) {
			return this.select(t ? i : r)
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return arguments.length ? this.property("__data__", t) : this.node().__data__
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(55);

		function i(t, n, e) {
			var i = Object(r.a)(t),
				u = i.CustomEvent;
			"function" == typeof u ? u = new u(n, e) : (u = i.document.createEvent("Event"), e ? (u.initEvent(n, e.bubbles, e.cancelable), u.detail = e.detail) : u.initEvent(n, !1, !1)), t.dispatchEvent(u)
		}
		n.a = function(t, n) {
			return this.each(("function" == typeof n ? function(t, n) {
				return function() {
					return i(this, t, n.apply(this, arguments))
				}
			} : function(t, n) {
				return function() {
					return i(this, t, n)
				}
			})(t, n))
		}
	}, function(t, n, e) {
		"use strict";
		n.a = i;
		var r = 0;

		function i() {
			return new u
		}

		function u() {
			this._ = "@" + (++r).toString(36)
		}
		u.prototype = i.prototype = {
			constructor: u,
			get: function(t) {
				for (var n = this._; !(n in t);)
					if (!(t = t.parentNode)) return;
				return t[n]
			},
			set: function(t, n) {
				return t[this._] = n
			},
			remove: function(t) {
				return this._ in t && delete t[this._]
			},
			toString: function() {
				return this._
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(57),
			i = e(34);
		n.a = function(t) {
			var n = Object(r.a)();
			return n.changedTouches && (n = n.changedTouches[0]), Object(i.a)(t, n)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(4);
		n.a = function(t) {
			return "string" == typeof t ? new r.a([document.querySelectorAll(t)], [document.documentElement]) : new r.a([null == t ? [] : t], r.c)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(57),
			i = e(34);
		n.a = function(t, n, e) {
			arguments.length < 3 && (e = n, n = Object(r.a)().changedTouches);
			for (var u, c = 0, o = n ? n.length : 0; c < o; ++c)
				if ((u = n[c]).identifier === e) return Object(i.a)(t, u);
			return null
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(57),
			i = e(34);
		n.a = function(t, n) {
			null == n && (n = Object(r.a)().touches);
			for (var e = 0, u = n ? n.length : 0, c = new Array(u); e < u; ++e) c[e] = Object(i.a)(t, n[e]);
			return c
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return function() {
				return t
			}
		}
	}, function(t, n, e) {
		"use strict";

		function r(t, n, e, r, i, u, c, o, a, f) {
			this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = u, this.y = c, this.dx = o, this.dy = a, this._ = f
		}
		n.a = r, r.prototype.on = function() {
			var t = this._.on.apply(this._, arguments);
			return t === this._ ? this : t
		}
	}, function(t, n, e) {
		"use strict";
		n.a = b, n.b = m;
		var r = e(60),
			i = e(59),
			u = e(110),
			c = .95047,
			o = 1,
			a = 1.08883,
			f = 4 / 29,
			s = 6 / 29,
			l = 3 * s * s,
			h = s * s * s;

		function d(t) {
			if (t instanceof v) return new v(t.l, t.a, t.b, t.opacity);
			if (t instanceof O) {
				var n = t.h * u.a;
				return new v(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
			}
			t instanceof i.b || (t = Object(i.h)(t));
			var e = y(t.r),
				r = y(t.g),
				f = y(t.b),
				s = p((.4124564 * e + .3575761 * r + .1804375 * f) / c),
				l = p((.2126729 * e + .7151522 * r + .072175 * f) / o);
			return new v(116 * l - 16, 500 * (s - l), 200 * (l - p((.0193339 * e + .119192 * r + .9503041 * f) / a)), t.opacity)
		}

		function b(t, n, e, r) {
			return 1 === arguments.length ? d(t) : new v(t, n, e, null == r ? 1 : r)
		}

		function v(t, n, e, r) {
			this.l = +t, this.a = +n, this.b = +e, this.opacity = +r
		}

		function p(t) {
			return t > h ? Math.pow(t, 1 / 3) : t / l + f
		}

		function g(t) {
			return t > s ? t * t * t : l * (t - f)
		}

		function _(t) {
			return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
		}

		function y(t) {
			return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
		}

		function m(t, n, e, r) {
			return 1 === arguments.length ? function(t) {
				if (t instanceof O) return new O(t.h, t.c, t.l, t.opacity);
				t instanceof v || (t = d(t));
				var n = Math.atan2(t.b, t.a) * u.b;
				return new O(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
			}(t) : new O(t, n, e, null == r ? 1 : r)
		}

		function O(t, n, e, r) {
			this.h = +t, this.c = +n, this.l = +e, this.opacity = +r
		}
		Object(r.a)(v, b, Object(r.b)(i.a, {
			brighter: function(t) {
				return new v(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
			},
			darker: function(t) {
				return new v(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
			},
			rgb: function() {
				var t = (this.l + 16) / 116,
					n = isNaN(this.a) ? t : t + this.a / 500,
					e = isNaN(this.b) ? t : t - this.b / 200;
				return t = o * g(t), n = c * g(n), e = a * g(e), new i.b(_(3.2404542 * n - 1.5371385 * t - .4985314 * e), _(-.969266 * n + 1.8760108 * t + .041556 * e), _(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity)
			}
		})), Object(r.a)(O, m, Object(r.b)(i.a, {
			brighter: function(t) {
				return new O(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
			},
			darker: function(t) {
				return new O(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
			},
			rgb: function() {
				return d(this).rgb()
			}
		}))
	}, function(t, n, e) {
		"use strict";
		n.a = b;
		var r = e(60),
			i = e(59),
			u = e(110),
			c = -.14861,
			o = 1.78277,
			a = -.29227,
			f = -.90649,
			s = 1.97294,
			l = s * f,
			h = s * o,
			d = o * a - f * c;

		function b(t, n, e, r) {
			return 1 === arguments.length ? function(t) {
				if (t instanceof v) return new v(t.h, t.s, t.l, t.opacity);
				t instanceof i.b || (t = Object(i.h)(t));
				var n = t.r / 255,
					e = t.g / 255,
					r = t.b / 255,
					c = (d * r + l * n - h * e) / (d + l - h),
					o = r - c,
					b = (s * (e - c) - a * o) / f,
					p = Math.sqrt(b * b + o * o) / (s * c * (1 - c)),
					g = p ? Math.atan2(b, o) * u.b - 120 : NaN;
				return new v(g < 0 ? g + 360 : g, p, c, t.opacity)
			}(t) : new v(t, n, e, null == r ? 1 : r)
		}

		function v(t, n, e, r) {
			this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
		}
		Object(r.a)(v, b, Object(r.b)(i.a, {
			brighter: function(t) {
				return t = null == t ? i.c : Math.pow(i.c, t), new v(this.h, this.s, this.l * t, this.opacity)
			},
			darker: function(t) {
				return t = null == t ? i.d : Math.pow(i.d, t), new v(this.h, this.s, this.l * t, this.opacity)
			},
			rgb: function() {
				var t = isNaN(this.h) ? 0 : (this.h + 120) * u.a,
					n = +this.l,
					e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
					r = Math.cos(t),
					l = Math.sin(t);
				return new i.b(255 * (n + e * (c * r + o * l)), 255 * (n + e * (a * r + f * l)), 255 * (n + e * (s * r)), this.opacity)
			}
		}))
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			return n -= t = +t,
				function(e) {
					return Math.round(t + n * e)
				}
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "a", function() {
			return c
		}), e.d(n, "b", function() {
			return o
		});
		var r = e(35),
			i = e(239);

		function u(t, n, e, i) {
			function u(t) {
				return t.length ? t.pop() + " " : ""
			}
			return function(c, o) {
				var a = [],
					f = [];
				return c = t(c), o = t(o),
					function(t, i, u, c, o, a) {
						if (t !== u || i !== c) {
							var f = o.push("translate(", null, n, null, e);
							a.push({
								i: f - 4,
								x: Object(r.a)(t, u)
							}, {
								i: f - 2,
								x: Object(r.a)(i, c)
							})
						} else(u || c) && o.push("translate(" + u + n + c + e)
					}(c.translateX, c.translateY, o.translateX, o.translateY, a, f),
					function(t, n, e, c) {
						t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), c.push({
							i: e.push(u(e) + "rotate(", null, i) - 2,
							x: Object(r.a)(t, n)
						})) : n && e.push(u(e) + "rotate(" + n + i)
					}(c.rotate, o.rotate, a, f),
					function(t, n, e, c) {
						t !== n ? c.push({
							i: e.push(u(e) + "skewX(", null, i) - 2,
							x: Object(r.a)(t, n)
						}) : n && e.push(u(e) + "skewX(" + n + i)
					}(c.skewX, o.skewX, a, f),
					function(t, n, e, i, c, o) {
						if (t !== e || n !== i) {
							var a = c.push(u(c) + "scale(", null, ",", null, ")");
							o.push({
								i: a - 4,
								x: Object(r.a)(t, e)
							}, {
								i: a - 2,
								x: Object(r.a)(n, i)
							})
						} else 1 === e && 1 === i || c.push(u(c) + "scale(" + e + "," + i + ")")
					}(c.scaleX, c.scaleY, o.scaleX, o.scaleY, a, f), c = o = null,
					function(t) {
						for (var n, e = -1, r = f.length; ++e < r;) a[(n = f[e]).i] = n.x(t);
						return a.join("")
					}
			}
		}
		var c = u(i.a, "px, ", "px)", "deg)"),
			o = u(i.b, ", ", ")", ")")
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			if ("none" === t) return o.b;
			r || (r = document.createElement("DIV"), i = document.documentElement, u = document.defaultView);
			return r.style.transform = t, t = u.getComputedStyle(i.appendChild(r), null).getPropertyValue("transform"), i.removeChild(r), t = t.slice(7, -1).split(","), Object(o.a)(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5])
		}, n.b = function(t) {
			if (null == t) return o.b;
			c || (c = document.createElementNS("http://www.w3.org/2000/svg", "g"));
			return c.setAttribute("transform", t), (t = c.transform.baseVal.consolidate()) ? (t = t.matrix, Object(o.a)(t.a, t.b, t.c, t.d, t.e, t.f)) : o.b
		};
		var r, i, u, c, o = e(240)
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return i
		});
		var r = 180 / Math.PI,
			i = {
				translateX: 0,
				translateY: 0,
				rotate: 0,
				skewX: 0,
				scaleX: 1,
				scaleY: 1
			};
		n.a = function(t, n, e, i, u, c) {
			var o, a, f;
			return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (f = t * e + n * i) && (e -= t * f, i -= n * f), (a = Math.sqrt(e * e + i * i)) && (e /= a, i /= a, f /= a), t * i < n * e && (t = -t, n = -n, f = -f, o = -o), {
				translateX: u,
				translateY: c,
				rotate: Math.atan2(n, t) * r,
				skewX: Math.atan(f) * r,
				scaleX: o,
				scaleY: a
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = Math.SQRT2;

		function i(t) {
			return ((t = Math.exp(t)) + 1 / t) / 2
		}
		n.a = function(t, n) {
			var e, u, c = t[0],
				o = t[1],
				a = t[2],
				f = n[0],
				s = n[1],
				l = n[2],
				h = f - c,
				d = s - o,
				b = h * h + d * d;
			if (b < 1e-12) u = Math.log(l / a) / r, e = function(t) {
				return [c + t * h, o + t * d, a * Math.exp(r * t * u)]
			};
			else {
				var v = Math.sqrt(b),
					p = (l * l - a * a + 4 * b) / (2 * a * 2 * v),
					g = (l * l - a * a - 4 * b) / (2 * l * 2 * v),
					_ = Math.log(Math.sqrt(p * p + 1) - p),
					y = Math.log(Math.sqrt(g * g + 1) - g);
				u = (y - _) / r, e = function(t) {
					var n, e = t * u,
						f = i(_),
						s = a / (2 * v) * (f * (n = r * e + _, ((n = Math.exp(2 * n)) - 1) / (n + 1)) - function(t) {
							return ((t = Math.exp(t)) - 1 / t) / 2
						}(_));
					return [c + s * h, o + s * d, a * f / i(r * e + _)]
				}
			}
			return e.duration = 1e3 * u, e
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return c
		});
		var r = e(7),
			i = e(23);

		function u(t) {
			return function(n, e) {
				var u = t((n = Object(r.d)(n)).h, (e = Object(r.d)(e)).h),
					c = Object(i.a)(n.s, e.s),
					o = Object(i.a)(n.l, e.l),
					a = Object(i.a)(n.opacity, e.opacity);
				return function(t) {
					return n.h = u(t), n.s = c(t), n.l = o(t), n.opacity = a(t), n + ""
				}
			}
		}
		n.a = u(i.c);
		var c = u(i.a)
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			var e = Object(i.a)((t = Object(r.e)(t)).l, (n = Object(r.e)(n)).l),
				u = Object(i.a)(t.a, n.a),
				c = Object(i.a)(t.b, n.b),
				o = Object(i.a)(t.opacity, n.opacity);
			return function(n) {
				return t.l = e(n), t.a = u(n), t.b = c(n), t.opacity = o(n), t + ""
			}
		};
		var r = e(7),
			i = e(23)
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return c
		});
		var r = e(7),
			i = e(23);

		function u(t) {
			return function(n, e) {
				var u = t((n = Object(r.c)(n)).h, (e = Object(r.c)(e)).h),
					c = Object(i.a)(n.c, e.c),
					o = Object(i.a)(n.l, e.l),
					a = Object(i.a)(n.opacity, e.opacity);
				return function(t) {
					return n.h = u(t), n.c = c(t), n.l = o(t), n.opacity = a(t), n + ""
				}
			}
		}
		n.a = u(i.c);
		var c = u(i.a)
	}, function(t, n, e) {
		"use strict";
		e.d(n, "a", function() {
			return c
		});
		var r = e(7),
			i = e(23);

		function u(t) {
			return function n(e) {
				function u(n, u) {
					var c = t((n = Object(r.b)(n)).h, (u = Object(r.b)(u)).h),
						o = Object(i.a)(n.s, u.s),
						a = Object(i.a)(n.l, u.l),
						f = Object(i.a)(n.opacity, u.opacity);
					return function(t) {
						return n.h = c(t), n.s = o(t), n.l = a(Math.pow(t, e)), n.opacity = f(t), n + ""
					}
				}
				return e = +e, u.gamma = n, u
			}(1)
		}
		n.b = u(i.c);
		var c = u(i.a)
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
			return e
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(1),
			i = e(248),
			u = e(251);
		r.m.prototype.interrupt = i.a, r.m.prototype.transition = u.a
	}, function(t, n, e) {
		"use strict";
		var r = e(118);
		n.a = function(t) {
			return this.each(function() {
				Object(r.a)(this, t)
			})
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(63);
		n.a = function(t, n, e) {
			var i = new r.a;
			return n = null == n ? 0 : +n, i.restart(function(e) {
				i.stop(), t(e + n)
			}, n, e), i
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(63);
		n.a = function(t, n, e) {
			var i = new r.a,
				u = n;
			return null == n ? (i.restart(t, n, e), i) : (n = +n, e = null == e ? Object(r.b)() : +e, i.restart(function r(c) {
				c += u, i.restart(r, u += n, e), t(c)
			}, n, e), i)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(10),
			i = e(6),
			u = e(120),
			c = e(36),
			o = {
				time: null,
				delay: 0,
				duration: 250,
				ease: u.o
			};

		function a(t, n) {
			for (var e; !(e = t.__transition) || !(e = e[n]);)
				if (!(t = t.parentNode)) return o.time = Object(c.b)(), o;
			return e
		}
		n.a = function(t) {
			var n, e;
			t instanceof r.a ? (n = t._id, t = t._name) : (n = Object(r.c)(), (e = o).time = Object(c.b)(), t = null == t ? null : t + "");
			for (var u = this._groups, f = u.length, s = 0; s < f; ++s)
				for (var l, h = u[s], d = h.length, b = 0; b < d; ++b)(l = h[b]) && Object(i.e)(l, t, n, b, h, e || a(l, n));
			return new r.a(u, this._parents, t, n)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(5),
			i = e(1),
			u = e(37),
			c = e(119);
		n.a = function(t, n) {
			var e = Object(i.i)(t),
				o = "transform" === e ? r.u : c.a;
			return this.attrTween(t, "function" == typeof n ? (e.local ? function(t, n, e) {
				var r, i, u;
				return function() {
					var c, o = e(this);
					if (null != o) return (c = this.getAttributeNS(t.space, t.local)) === o ? null : c === r && o === i ? u : u = n(r = c, i = o);
					this.removeAttributeNS(t.space, t.local)
				}
			} : function(t, n, e) {
				var r, i, u;
				return function() {
					var c, o = e(this);
					if (null != o) return (c = this.getAttribute(t)) === o ? null : c === r && o === i ? u : u = n(r = c, i = o);
					this.removeAttribute(t)
				}
			})(e, o, Object(u.b)(this, "attr." + t, n)) : null == n ? (e.local ? function(t) {
				return function() {
					this.removeAttributeNS(t.space, t.local)
				}
			} : function(t) {
				return function() {
					this.removeAttribute(t)
				}
			})(e) : (e.local ? function(t, n, e) {
				var r, i;
				return function() {
					var u = this.getAttributeNS(t.space, t.local);
					return u === e ? null : u === r ? i : i = n(r = u, e)
				}
			} : function(t, n, e) {
				var r, i;
				return function() {
					var u = this.getAttribute(t);
					return u === e ? null : u === r ? i : i = n(r = u, e)
				}
			})(e, o, n + ""))
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(1);
		n.a = function(t, n) {
			var e = "attr." + t;
			if (arguments.length < 2) return (e = this.tween(e)) && e._value;
			if (null == n) return this.tween(e, null);
			if ("function" != typeof n) throw new Error;
			var i = Object(r.i)(t);
			return this.tween(e, (i.local ? function(t, n) {
				function e() {
					var e = this,
						r = n.apply(e, arguments);
					return r && function(n) {
						e.setAttributeNS(t.space, t.local, r(n))
					}
				}
				return e._value = n, e
			} : function(t, n) {
				function e() {
					var e = this,
						r = n.apply(e, arguments);
					return r && function(n) {
						e.setAttribute(t, r(n))
					}
				}
				return e._value = n, e
			})(i, n))
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(6);
		n.a = function(t) {
			var n = this._id;
			return arguments.length ? this.each(("function" == typeof t ? function(t, n) {
				return function() {
					Object(r.g)(this, t).delay = +n.apply(this, arguments)
				}
			} : function(t, n) {
				return n = +n,
					function() {
						Object(r.g)(this, t).delay = n
					}
			})(n, t)) : Object(r.f)(this.node(), n).delay
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(6);
		n.a = function(t) {
			var n = this._id;
			return arguments.length ? this.each(("function" == typeof t ? function(t, n) {
				return function() {
					Object(r.h)(this, t).duration = +n.apply(this, arguments)
				}
			} : function(t, n) {
				return n = +n,
					function() {
						Object(r.h)(this, t).duration = n
					}
			})(n, t)) : Object(r.f)(this.node(), n).duration
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(6);
		n.a = function(t) {
			var n = this._id;
			return arguments.length ? this.each(function(t, n) {
				if ("function" != typeof n) throw new Error;
				return function() {
					Object(r.h)(this, t).ease = n
				}
			}(n, t)) : Object(r.f)(this.node(), n).ease
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(1),
			i = e(10);
		n.a = function(t) {
			"function" != typeof t && (t = Object(r.g)(t));
			for (var n = this._groups, e = n.length, u = new Array(e), c = 0; c < e; ++c)
				for (var o, a = n[c], f = a.length, s = u[c] = [], l = 0; l < f; ++l)(o = a[l]) && t.call(o, o.__data__, l, a) && s.push(o);
			return new i.a(u, this._parents, this._name, this._id)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(10);
		n.a = function(t) {
			if (t._id !== this._id) throw new Error;
			for (var n = this._groups, e = t._groups, i = n.length, u = e.length, c = Math.min(i, u), o = new Array(i), a = 0; a < c; ++a)
				for (var f, s = n[a], l = e[a], h = s.length, d = o[a] = new Array(h), b = 0; b < h; ++b)(f = s[b] || l[b]) && (d[b] = f);
			for (; a < i; ++a) o[a] = n[a];
			return new r.a(o, this._parents, this._name, this._id)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(6);
		n.a = function(t, n) {
			var e = this._id;
			return arguments.length < 2 ? Object(r.f)(this.node(), e).on.on(t) : this.each(function(t, n, e) {
				var i, u, c = function(t) {
					return (t + "").trim().split(/^|\s+/).every(function(t) {
						var n = t.indexOf(".");
						return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
					})
				}(n) ? r.g : r.h;
				return function() {
					var r = c(this, t),
						o = r.on;
					o !== i && (u = (i = o).copy()).on(n, e), r.on = u
				}
			}(e, t, n))
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function() {
			return this.on("end.remove", (t = this._id, function() {
				var n = this.parentNode;
				for (var e in this.__transition)
					if (+e !== t) return;
				n && n.removeChild(this)
			}));
			var t
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(1),
			i = e(10),
			u = e(6);
		n.a = function(t) {
			var n = this._name,
				e = this._id;
			"function" != typeof t && (t = Object(r.n)(t));
			for (var c = this._groups, o = c.length, a = new Array(o), f = 0; f < o; ++f)
				for (var s, l, h = c[f], d = h.length, b = a[f] = new Array(d), v = 0; v < d; ++v)(s = h[v]) && (l = t.call(s, s.__data__, v, h)) && ("__data__" in s && (l.__data__ = s.__data__), b[v] = l, Object(u.e)(b[v], n, e, v, b, Object(u.f)(s, e)));
			return new i.a(a, this._parents, n, e)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(1),
			i = e(10),
			u = e(6);
		n.a = function(t) {
			var n = this._name,
				e = this._id;
			"function" != typeof t && (t = Object(r.o)(t));
			for (var c = this._groups, o = c.length, a = [], f = [], s = 0; s < o; ++s)
				for (var l, h = c[s], d = h.length, b = 0; b < d; ++b)
					if (l = h[b]) {
						for (var v, p = t.call(l, l.__data__, b, h), g = Object(u.f)(l, e), _ = 0, y = p.length; _ < y; ++_)(v = p[_]) && Object(u.e)(v, n, e, _, p, g);
						a.push(p), f.push(l)
					} return new i.a(a, f, n, e)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(1).m.prototype.constructor;
		n.a = function() {
			return new r(this._groups, this._parents)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(5),
			i = e(1),
			u = e(37),
			c = e(119);
		n.a = function(t, n, e) {
			var o = "transform" == (t += "") ? r.t : c.a;
			return null == n ? this.styleTween(t, function(t, n) {
				var e, r, u;
				return function() {
					var c = Object(i.p)(this, t),
						o = (this.style.removeProperty(t), Object(i.p)(this, t));
					return c === o ? null : c === e && o === r ? u : u = n(e = c, r = o)
				}
			}(t, o)).on("end.style." + t, function(t) {
				return function() {
					this.style.removeProperty(t)
				}
			}(t)) : this.styleTween(t, "function" == typeof n ? function(t, n, e) {
				var r, u, c;
				return function() {
					var o = Object(i.p)(this, t),
						a = e(this);
					return null == a && (this.style.removeProperty(t), a = Object(i.p)(this, t)), o === a ? null : o === r && a === u ? c : c = n(r = o, u = a)
				}
			}(t, o, Object(u.b)(this, "style." + t, n)) : function(t, n, e) {
				var r, u;
				return function() {
					var c = Object(i.p)(this, t);
					return c === e ? null : c === r ? u : u = n(r = c, e)
				}
			}(t, o, n + ""), e)
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n, e) {
			var r = "style." + (t += "");
			if (arguments.length < 2) return (r = this.tween(r)) && r._value;
			if (null == n) return this.tween(r, null);
			if ("function" != typeof n) throw new Error;
			return this.tween(r, function(t, n, e) {
				function r() {
					var r = this,
						i = n.apply(r, arguments);
					return i && function(n) {
						r.style.setProperty(t, i(n), e)
					}
				}
				return r._value = n, r
			}(t, n, null == e ? "" : e))
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(37);
		n.a = function(t) {
			return this.tween("text", "function" == typeof t ? function(t) {
				return function() {
					var n = t(this);
					this.textContent = null == n ? "" : n
				}
			}(Object(r.b)(this, "text", t)) : function(t) {
				return function() {
					this.textContent = t
				}
			}(null == t ? "" : t + ""))
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(10),
			i = e(6);
		n.a = function() {
			for (var t = this._name, n = this._id, e = Object(r.c)(), u = this._groups, c = u.length, o = 0; o < c; ++o)
				for (var a, f = u[o], s = f.length, l = 0; l < s; ++l)
					if (a = f[l]) {
						var h = Object(i.f)(a, n);
						Object(i.e)(a, t, e, l, f, {
							time: h.time + h.delay + h.duration,
							delay: 0,
							duration: h.duration,
							ease: h.ease
						})
					} return new r.a(u, this._parents, t, e)
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return +t
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return t * t
		}, n.c = function(t) {
			return t * (2 - t)
		}, n.b = function(t) {
			return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return t * t * t
		}, n.c = function(t) {
			return --t * t * t + 1
		}, n.b = function(t) {
			return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "a", function() {
			return r
		}), e.d(n, "c", function() {
			return i
		}), e.d(n, "b", function() {
			return u
		});
		var r = function t(n) {
				function e(t) {
					return Math.pow(t, n)
				}
				return n = +n, e.exponent = t, e
			}(3),
			i = function t(n) {
				function e(t) {
					return 1 - Math.pow(1 - t, n)
				}
				return n = +n, e.exponent = t, e
			}(3),
			u = function t(n) {
				function e(t) {
					return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
				}
				return n = +n, e.exponent = t, e
			}(3)
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return 1 - Math.cos(t * i)
		}, n.c = function(t) {
			return Math.sin(t * i)
		}, n.b = function(t) {
			return (1 - Math.cos(r * t)) / 2
		};
		var r = Math.PI,
			i = r / 2
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return Math.pow(2, 10 * t - 10)
		}, n.c = function(t) {
			return 1 - Math.pow(2, -10 * t)
		}, n.b = function(t) {
			return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return 1 - Math.sqrt(1 - t * t)
		}, n.c = function(t) {
			return Math.sqrt(1 - --t * t)
		}, n.b = function(t) {
			return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return 1 - d(1 - t)
		}, n.c = d, n.b = function(t) {
			return ((t *= 2) <= 1 ? 1 - d(1 - t) : d(t - 1) + 1) / 2
		};
		var r = 4 / 11,
			i = 6 / 11,
			u = 8 / 11,
			c = .75,
			o = 9 / 11,
			a = 10 / 11,
			f = .9375,
			s = 21 / 22,
			l = 63 / 64,
			h = 1 / r / r;

		function d(t) {
			return (t = +t) < r ? h * t * t : t < u ? h * (t -= i) * t + c : t < a ? h * (t -= o) * t + f : h * (t -= s) * t + l
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "a", function() {
			return r
		}), e.d(n, "c", function() {
			return i
		}), e.d(n, "b", function() {
			return u
		});
		var r = function t(n) {
				function e(t) {
					return t * t * ((n + 1) * t - n)
				}
				return n = +n, e.overshoot = t, e
			}(1.70158),
			i = function t(n) {
				function e(t) {
					return --t * t * ((n + 1) * t + n) + 1
				}
				return n = +n, e.overshoot = t, e
			}(1.70158),
			u = function t(n) {
				function e(t) {
					return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
				}
				return n = +n, e.overshoot = t, e
			}(1.70158)
	}, function(t, n, e) {
		"use strict";
		e.d(n, "a", function() {
			return i
		}), e.d(n, "c", function() {
			return u
		}), e.d(n, "b", function() {
			return c
		});
		var r = 2 * Math.PI,
			i = function t(n, e) {
				var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= r);

				function u(t) {
					return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e)
				}
				return u.amplitude = function(n) {
					return t(n, e * r)
				}, u.period = function(e) {
					return t(n, e)
				}, u
			}(1, .3),
			u = function t(n, e) {
				var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= r);

				function u(t) {
					return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e)
				}
				return u.amplitude = function(n) {
					return t(n, e * r)
				}, u.period = function(e) {
					return t(n, e)
				}, u
			}(1, .3),
			c = function t(n, e) {
				var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= r);

				function u(t) {
					return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2
				}
				return u.amplitude = function(n) {
					return t(n, e * r)
				}, u.period = function(e) {
					return t(n, e)
				}, u
			}(1, .3)
	}, function(t, n, e) {
		"use strict";
		var r = e(10),
			i = e(6),
			u = [null];
		n.a = function(t, n) {
			var e, c, o = t.__transition;
			if (o)
				for (c in n = null == n ? null : n + "", o)
					if ((e = o[c]).state > i.c && e.name === n) return new r.a([
						[t]
					], u, n, +c);
			return null
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return function() {
				return t
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n, e) {
			this.target = t, this.type = n, this.selection = e
		}
	}, function(t, n, e) {
		"use strict";
		n.b = function() {
			r.e.stopImmediatePropagation()
		};
		var r = e(1);
		n.a = function() {
			r.e.preventDefault(), r.e.stopImmediatePropagation()
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(283);
		e.d(n, "a", function() {
			return r.a
		});
		var i = e(284);
		e.d(n, "b", function() {
			return i.a
		})
	}, function(t, n, e) {
		"use strict";
		var r = e(3),
			i = e(121);
		n.a = function() {
			var t = 0,
				n = null,
				e = null,
				u = null;

			function c(c) {
				var o, a, f, s, l, h, d = c.length,
					b = [],
					v = Object(r.s)(d),
					p = [],
					g = [],
					_ = g.groups = new Array(d),
					y = new Array(d * d);
				for (o = 0, l = -1; ++l < d;) {
					for (a = 0, h = -1; ++h < d;) a += c[l][h];
					b.push(a), p.push(Object(r.s)(d)), o += a
				}
				for (n && v.sort(function(t, e) {
						return n(b[t], b[e])
					}), e && p.forEach(function(t, n) {
						t.sort(function(t, r) {
							return e(c[n][t], c[n][r])
						})
					}), s = (o = Object(i.c)(0, i.e - t * d) / o) ? t : i.e / d, a = 0, l = -1; ++l < d;) {
					for (f = a, h = -1; ++h < d;) {
						var m = v[l],
							O = p[m][h],
							j = c[m][O],
							x = a,
							w = a += j * o;
						y[O * d + m] = {
							index: m,
							subindex: O,
							startAngle: x,
							endAngle: w,
							value: j
						}
					}
					_[m] = {
						index: m,
						startAngle: f,
						endAngle: a,
						value: b[m]
					}, a += s
				}
				for (l = -1; ++l < d;)
					for (h = l - 1; ++h < d;) {
						var M = y[h * d + l],
							k = y[l * d + h];
						(M.value || k.value) && g.push(M.value < k.value ? {
							source: k,
							target: M
						} : {
							source: M,
							target: k
						})
					}
				return u ? g.sort(u) : g
			}
			return c.padAngle = function(n) {
				return arguments.length ? (t = Object(i.c)(0, n), c) : t
			}, c.sortGroups = function(t) {
				return arguments.length ? (n = t, c) : n
			}, c.sortSubgroups = function(t) {
				return arguments.length ? (e = t, c) : e
			}, c.sortChords = function(t) {
				return arguments.length ? (null == t ? u = null : (n = t, u = function(t, e) {
					return n(t.source.value + t.target.value, e.source.value + e.target.value)
				})._ = t, c) : u && u._;
				var n
			}, c
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(285),
			i = e(286),
			u = e(121),
			c = e(13);

		function o(t) {
			return t.source
		}

		function a(t) {
			return t.target
		}

		function f(t) {
			return t.radius
		}

		function s(t) {
			return t.startAngle
		}

		function l(t) {
			return t.endAngle
		}
		n.a = function() {
			var t = o,
				n = a,
				e = f,
				h = s,
				d = l,
				b = null;

			function v() {
				var i, o = r.a.call(arguments),
					a = t.apply(this, o),
					f = n.apply(this, o),
					s = +e.apply(this, (o[0] = a, o)),
					l = h.apply(this, o) - u.b,
					v = d.apply(this, o) - u.b,
					p = s * Object(u.a)(l),
					g = s * Object(u.d)(l),
					_ = +e.apply(this, (o[0] = f, o)),
					y = h.apply(this, o) - u.b,
					m = d.apply(this, o) - u.b;
				if (b || (b = i = Object(c.a)()), b.moveTo(p, g), b.arc(0, 0, s, l, v), l === y && v === m || (b.quadraticCurveTo(0, 0, _ * Object(u.a)(y), _ * Object(u.d)(y)), b.arc(0, 0, _, y, m)), b.quadraticCurveTo(0, 0, p, g), b.closePath(), i) return b = null, i + "" || null
			}
			return v.radius = function(t) {
				return arguments.length ? (e = "function" == typeof t ? t : Object(i.a)(+t), v) : e
			}, v.startAngle = function(t) {
				return arguments.length ? (h = "function" == typeof t ? t : Object(i.a)(+t), v) : h
			}, v.endAngle = function(t) {
				return arguments.length ? (d = "function" == typeof t ? t : Object(i.a)(+t), v) : d
			}, v.source = function(n) {
				return arguments.length ? (t = n, v) : t
			}, v.target = function(t) {
				return arguments.length ? (n = t, v) : n
			}, v.context = function(t) {
				return arguments.length ? (b = null == t ? null : t, v) : b
			}, v
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "a", function() {
			return r
		});
		var r = Array.prototype.slice
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return function() {
				return t
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = Math.PI,
			i = 2 * r,
			u = i - 1e-6;

		function c() {
			this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
		}

		function o() {
			return new c
		}
		c.prototype = o.prototype = {
			constructor: c,
			moveTo: function(t, n) {
				this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
			},
			closePath: function() {
				null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
			},
			lineTo: function(t, n) {
				this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
			},
			quadraticCurveTo: function(t, n, e, r) {
				this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r)
			},
			bezierCurveTo: function(t, n, e, r, i, u) {
				this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +u)
			},
			arcTo: function(t, n, e, i, u) {
				t = +t, n = +n, e = +e, i = +i, u = +u;
				var c = this._x1,
					o = this._y1,
					a = e - t,
					f = i - n,
					s = c - t,
					l = o - n,
					h = s * s + l * l;
				if (u < 0) throw new Error("negative radius: " + u);
				if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
				else if (h > 1e-6)
					if (Math.abs(l * a - f * s) > 1e-6 && u) {
						var d = e - c,
							b = i - o,
							v = a * a + f * f,
							p = d * d + b * b,
							g = Math.sqrt(v),
							_ = Math.sqrt(h),
							y = u * Math.tan((r - Math.acos((v + h - p) / (2 * g * _))) / 2),
							m = y / _,
							O = y / g;
						Math.abs(m - 1) > 1e-6 && (this._ += "L" + (t + m * s) + "," + (n + m * l)), this._ += "A" + u + "," + u + ",0,0," + +(l * d > s * b) + "," + (this._x1 = t + O * a) + "," + (this._y1 = n + O * f)
					} else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
				else;
			},
			arc: function(t, n, e, c, o, a) {
				t = +t, n = +n;
				var f = (e = +e) * Math.cos(c),
					s = e * Math.sin(c),
					l = t + f,
					h = n + s,
					d = 1 ^ a,
					b = a ? c - o : o - c;
				if (e < 0) throw new Error("negative radius: " + e);
				null === this._x1 ? this._ += "M" + l + "," + h : (Math.abs(this._x1 - l) > 1e-6 || Math.abs(this._y1 - h) > 1e-6) && (this._ += "L" + l + "," + h), e && (b < 0 && (b = b % i + i), b > u ? this._ += "A" + e + "," + e + ",0,1," + d + "," + (t - f) + "," + (n - s) + "A" + e + "," + e + ",0,1," + d + "," + (this._x1 = l) + "," + (this._y1 = h) : b > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(b >= r) + "," + d + "," + (this._x1 = t + e * Math.cos(o)) + "," + (this._y1 = n + e * Math.sin(o))))
			},
			rect: function(t, n, e, r) {
				this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z"
			},
			toString: function() {
				return this._
			}
		}, n.a = o
	}, function(t, n, e) {
		"use strict";
		var r = e(64);

		function i() {
			return {}
		}

		function u(t, n, e) {
			t[n] = e
		}

		function c() {
			return Object(r.a)()
		}

		function o(t, n, e) {
			t.set(n, e)
		}
		n.a = function() {
			var t, n, e, a = [],
				f = [];

			function s(e, i, u, c) {
				if (i >= a.length) return null != t && e.sort(t), null != n ? n(e) : e;
				for (var o, f, l, h = -1, d = e.length, b = a[i++], v = Object(r.a)(), p = u(); ++h < d;)(l = v.get(o = b(f = e[h]) + "")) ? l.push(f) : v.set(o, [f]);
				return v.each(function(t, n) {
					c(p, n, s(t, i, u, c))
				}), p
			}
			return e = {
				object: function(t) {
					return s(t, 0, i, u)
				},
				map: function(t) {
					return s(t, 0, c, o)
				},
				entries: function(t) {
					return function t(e, r) {
						if (++r > a.length) return e;
						var i, u = f[r - 1];
						return null != n && r >= a.length ? i = e.entries() : (i = [], e.each(function(n, e) {
							i.push({
								key: e,
								values: t(n, r)
							})
						})), null != u ? i.sort(function(t, n) {
							return u(t.key, n.key)
						}) : i
					}(s(t, 0, c, o), 0)
				},
				key: function(t) {
					return a.push(t), e
				},
				sortKeys: function(t) {
					return f[a.length - 1] = t, e
				},
				sortValues: function(n) {
					return t = n, e
				},
				rollup: function(t) {
					return n = t, e
				}
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(64);

		function i() {}
		var u = r.a.prototype;

		function c(t, n) {
			var e = new i;
			if (t instanceof i) t.each(function(t) {
				e.add(t)
			});
			else if (t) {
				var r = -1,
					u = t.length;
				if (null == n)
					for (; ++r < u;) e.add(t[r]);
				else
					for (; ++r < u;) e.add(n(t[r], r, t))
			}
			return e
		}
		i.prototype = c.prototype = {
			constructor: i,
			has: u.has,
			add: function(t) {
				return t += "", this[r.b + t] = t, this
			},
			remove: u.remove,
			clear: u.clear,
			values: u.keys,
			size: u.size,
			empty: u.empty,
			each: u.each
		}, n.a = c
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			var n = [];
			for (var e in t) n.push(e);
			return n
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			var n = [];
			for (var e in t) n.push(t[e]);
			return n
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			var n = [];
			for (var e in t) n.push({
				key: e,
				value: t[e]
			});
			return n
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "c", function() {
			return u
		}), e.d(n, "d", function() {
			return c
		}), e.d(n, "a", function() {
			return o
		}), e.d(n, "b", function() {
			return a
		});
		var r = e(66),
			i = Object(r.a)(","),
			u = i.parse,
			c = i.parseRows,
			o = i.format,
			a = i.formatRows
	}, function(t, n, e) {
		"use strict";
		e.d(n, "c", function() {
			return u
		}), e.d(n, "d", function() {
			return c
		}), e.d(n, "a", function() {
			return o
		}), e.d(n, "b", function() {
			return a
		});
		var r = e(66),
			i = Object(r.a)("\t"),
			u = i.parse,
			c = i.parseRows,
			o = i.format,
			a = i.formatRows
	}, function(t, n, e) {
		"use strict";
		var r = e(296);
		e.d(n, "a", function() {
			return r.a
		});
		var i = e(297);
		e.d(n, "b", function() {
			return i.a
		});
		var u = e(311);
		e.d(n, "c", function() {
			return u.a
		});
		var c = e(312);
		e.d(n, "d", function() {
			return c.a
		});
		var o = e(313);
		e.d(n, "e", function() {
			return o.a
		});
		var a = e(122);
		e.d(n, "f", function() {
			return a.a
		});
		var f = e(314);
		e.d(n, "g", function() {
			return f.a
		});
		var s = e(315);
		e.d(n, "h", function() {
			return s.a
		})
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			var e;

			function r() {
				var r, i, u = e.length,
					c = 0,
					o = 0;
				for (r = 0; r < u; ++r) c += (i = e[r]).x, o += i.y;
				for (c = c / u - t, o = o / u - n, r = 0; r < u; ++r)(i = e[r]).x -= c, i.y -= o
			}
			return null == t && (t = 0), null == n && (n = 0), r.initialize = function(t) {
				e = t
			}, r.x = function(n) {
				return arguments.length ? (t = +n, r) : t
			}, r.y = function(t) {
				return arguments.length ? (n = +t, r) : n
			}, r
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(18),
			i = e(67),
			u = e(68);

		function c(t) {
			return t.x + t.vx
		}

		function o(t) {
			return t.y + t.vy
		}
		n.a = function(t) {
			var n, e, a = 1,
				f = 1;

			function s() {
				for (var t, r, s, h, d, b, v, p = n.length, g = 0; g < f; ++g)
					for (r = Object(u.a)(n, c, o).visitAfter(l), t = 0; t < p; ++t) s = n[t], b = e[s.index], v = b * b, h = s.x + s.vx, d = s.y + s.vy, r.visit(_);

				function _(t, n, e, r, u) {
					var c = t.data,
						o = t.r,
						f = b + o;
					if (!c) return n > h + f || r < h - f || e > d + f || u < d - f;
					if (c.index > s.index) {
						var l = h - c.x - c.vx,
							p = d - c.y - c.vy,
							g = l * l + p * p;
						g < f * f && (0 === l && (g += (l = Object(i.a)()) * l), 0 === p && (g += (p = Object(i.a)()) * p), g = (f - (g = Math.sqrt(g))) / g * a, s.vx += (l *= g) * (f = (o *= o) / (v + o)), s.vy += (p *= g) * f, c.vx -= l * (f = 1 - f), c.vy -= p * f)
					}
				}
			}

			function l(t) {
				if (t.data) return t.r = e[t.data.index];
				for (var n = t.r = 0; n < 4; ++n) t[n] && t[n].r > t.r && (t.r = t[n].r)
			}

			function h() {
				if (n) {
					var r, i, u = n.length;
					for (e = new Array(u), r = 0; r < u; ++r) i = n[r], e[i.index] = +t(i, r, n)
				}
			}
			return "function" != typeof t && (t = Object(r.a)(null == t ? 1 : +t)), s.initialize = function(t) {
				n = t, h()
			}, s.iterations = function(t) {
				return arguments.length ? (f = +t, s) : f
			}, s.strength = function(t) {
				return arguments.length ? (a = +t, s) : a
			}, s.radius = function(n) {
				return arguments.length ? (t = "function" == typeof n ? n : Object(r.a)(+n), h(), s) : t
			}, s
		}
	}, function(t, n, e) {
		"use strict";
		n.a = v;
		var r = e(299),
			i = e(300),
			u = e(301),
			c = e(302),
			o = e(303),
			a = e(304),
			f = e(305),
			s = e(306),
			l = e(307),
			h = e(308),
			d = e(309),
			b = e(310);

		function v(t, n, e) {
			var r = new p(null == n ? d.b : n, null == e ? b.b : e, NaN, NaN, NaN, NaN);
			return null == t ? r : r.addAll(t)
		}

		function p(t, n, e, r, i, u) {
			this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = u, this._root = void 0
		}

		function g(t) {
			for (var n = {
					data: t.data
				}, e = n; t = t.next;) e = e.next = {
				data: t.data
			};
			return n
		}
		var _ = v.prototype = p.prototype;
		_.copy = function() {
			var t, n, e = new p(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
				r = this._root;
			if (!r) return e;
			if (!r.length) return e._root = g(r), e;
			for (t = [{
					source: r,
					target: e._root = new Array(4)
				}]; r = t.pop();)
				for (var i = 0; i < 4; ++i)(n = r.source[i]) && (n.length ? t.push({
					source: n,
					target: r.target[i] = new Array(4)
				}) : r.target[i] = g(n));
			return e
		}, _.add = r.b, _.addAll = r.a, _.cover = i.a, _.data = u.a, _.extent = c.a, _.find = o.a, _.remove = a.a, _.removeAll = a.b, _.root = f.a, _.size = s.a, _.visit = l.a, _.visitAfter = h.a, _.x = d.a, _.y = b.a
	}, function(t, n, e) {
		"use strict";

		function r(t, n, e, r) {
			if (isNaN(n) || isNaN(e)) return t;
			var i, u, c, o, a, f, s, l, h, d = t._root,
				b = {
					data: r
				},
				v = t._x0,
				p = t._y0,
				g = t._x1,
				_ = t._y1;
			if (!d) return t._root = b, t;
			for (; d.length;)
				if ((f = n >= (u = (v + g) / 2)) ? v = u : g = u, (s = e >= (c = (p + _) / 2)) ? p = c : _ = c, i = d, !(d = d[l = s << 1 | f])) return i[l] = b, t;
			if (o = +t._x.call(null, d.data), a = +t._y.call(null, d.data), n === o && e === a) return b.next = d, i ? i[l] = b : t._root = b, t;
			do {
				i = i ? i[l] = new Array(4) : t._root = new Array(4), (f = n >= (u = (v + g) / 2)) ? v = u : g = u, (s = e >= (c = (p + _) / 2)) ? p = c : _ = c
			} while ((l = s << 1 | f) == (h = (a >= c) << 1 | o >= u));
			return i[h] = d, i[l] = b, t
		}
		n.a = function(t) {
			var n, e, i, u, c = t.length,
				o = new Array(c),
				a = new Array(c),
				f = 1 / 0,
				s = 1 / 0,
				l = -1 / 0,
				h = -1 / 0;
			for (e = 0; e < c; ++e) isNaN(i = +this._x.call(null, n = t[e])) || isNaN(u = +this._y.call(null, n)) || (o[e] = i, a[e] = u, i < f && (f = i), i > l && (l = i), u < s && (s = u), u > h && (h = u));
			l < f && (f = this._x0, l = this._x1);
			h < s && (s = this._y0, h = this._y1);
			for (this.cover(f, s).cover(l, h), e = 0; e < c; ++e) r(this, o[e], a[e], t[e]);
			return this
		}, n.b = function(t) {
			var n = +this._x.call(null, t),
				e = +this._y.call(null, t);
			return r(this.cover(n, e), n, e, t)
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			if (isNaN(t = +t) || isNaN(n = +n)) return this;
			var e = this._x0,
				r = this._y0,
				i = this._x1,
				u = this._y1;
			if (isNaN(e)) i = (e = Math.floor(t)) + 1, u = (r = Math.floor(n)) + 1;
			else {
				if (!(e > t || t > i || r > n || n > u)) return this;
				var c, o, a = i - e,
					f = this._root;
				switch (o = (n < (r + u) / 2) << 1 | t < (e + i) / 2) {
					case 0:
						do {
							(c = new Array(4))[o] = f, f = c
						} while (u = r + (a *= 2), t > (i = e + a) || n > u);
						break;
					case 1:
						do {
							(c = new Array(4))[o] = f, f = c
						} while (u = r + (a *= 2), (e = i - a) > t || n > u);
						break;
					case 2:
						do {
							(c = new Array(4))[o] = f, f = c
						} while (r = u - (a *= 2), t > (i = e + a) || r > n);
						break;
					case 3:
						do {
							(c = new Array(4))[o] = f, f = c
						} while (r = u - (a *= 2), (e = i - a) > t || r > n)
				}
				this._root && this._root.length && (this._root = f)
			}
			return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = u, this
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function() {
			var t = [];
			return this.visit(function(n) {
				if (!n.length)
					do {
						t.push(n.data)
					} while (n = n.next)
			}), t
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [
				[this._x0, this._y0],
				[this._x1, this._y1]
			]
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(69);
		n.a = function(t, n, e) {
			var i, u, c, o, a, f, s, l = this._x0,
				h = this._y0,
				d = this._x1,
				b = this._y1,
				v = [],
				p = this._root;
			for (p && v.push(new r.a(p, l, h, d, b)), null == e ? e = 1 / 0 : (l = t - e, h = n - e, d = t + e, b = n + e, e *= e); f = v.pop();)
				if (!(!(p = f.node) || (u = f.x0) > d || (c = f.y0) > b || (o = f.x1) < l || (a = f.y1) < h))
					if (p.length) {
						var g = (u + o) / 2,
							_ = (c + a) / 2;
						v.push(new r.a(p[3], g, _, o, a), new r.a(p[2], u, _, g, a), new r.a(p[1], g, c, o, _), new r.a(p[0], u, c, g, _)), (s = (n >= _) << 1 | t >= g) && (f = v[v.length - 1], v[v.length - 1] = v[v.length - 1 - s], v[v.length - 1 - s] = f)
					} else {
						var y = t - +this._x.call(null, p.data),
							m = n - +this._y.call(null, p.data),
							O = y * y + m * m;
						if (O < e) {
							var j = Math.sqrt(e = O);
							l = t - j, h = n - j, d = t + j, b = n + j, i = p.data
						}
					} return i
		}
	}, function(t, n, e) {
		"use strict";
		n.b = function(t) {
			for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
			return this
		}, n.a = function(t) {
			if (isNaN(u = +this._x.call(null, t)) || isNaN(c = +this._y.call(null, t))) return this;
			var n, e, r, i, u, c, o, a, f, s, l, h, d = this._root,
				b = this._x0,
				v = this._y0,
				p = this._x1,
				g = this._y1;
			if (!d) return this;
			if (d.length)
				for (;;) {
					if ((f = u >= (o = (b + p) / 2)) ? b = o : p = o, (s = c >= (a = (v + g) / 2)) ? v = a : g = a, n = d, !(d = d[l = s << 1 | f])) return this;
					if (!d.length) break;
					(n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l)
				}
			for (; d.data !== t;)
				if (r = d, !(d = d.next)) return this;
			return (i = d.next) && delete d.next, r ? (i ? r.next = i : delete r.next, this) : n ? (i ? n[l] = i : delete n[l], (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? e[h] = d : this._root = d), this) : (this._root = i, this)
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function() {
			return this._root
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function() {
			var t = 0;
			return this.visit(function(n) {
				if (!n.length)
					do {
						++t
					} while (n = n.next)
			}), t
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(69);
		n.a = function(t) {
			var n, e, i, u, c, o, a = [],
				f = this._root;
			for (f && a.push(new r.a(f, this._x0, this._y0, this._x1, this._y1)); n = a.pop();)
				if (!t(f = n.node, i = n.x0, u = n.y0, c = n.x1, o = n.y1) && f.length) {
					var s = (i + c) / 2,
						l = (u + o) / 2;
					(e = f[3]) && a.push(new r.a(e, s, l, c, o)), (e = f[2]) && a.push(new r.a(e, i, l, s, o)), (e = f[1]) && a.push(new r.a(e, s, u, c, l)), (e = f[0]) && a.push(new r.a(e, i, u, s, l))
				} return this
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(69);
		n.a = function(t) {
			var n, e = [],
				i = [];
			for (this._root && e.push(new r.a(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
				var u = n.node;
				if (u.length) {
					var c, o = n.x0,
						a = n.y0,
						f = n.x1,
						s = n.y1,
						l = (o + f) / 2,
						h = (a + s) / 2;
					(c = u[0]) && e.push(new r.a(c, o, a, l, h)), (c = u[1]) && e.push(new r.a(c, l, a, f, h)), (c = u[2]) && e.push(new r.a(c, o, h, l, s)), (c = u[3]) && e.push(new r.a(c, l, h, f, s))
				}
				i.push(n)
			}
			for (; n = i.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);
			return this
		}
	}, function(t, n, e) {
		"use strict";
		n.b = function(t) {
			return t[0]
		}, n.a = function(t) {
			return arguments.length ? (this._x = t, this) : this._x
		}
	}, function(t, n, e) {
		"use strict";
		n.b = function(t) {
			return t[1]
		}, n.a = function(t) {
			return arguments.length ? (this._y = t, this) : this._y
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(18),
			i = e(67),
			u = e(21);

		function c(t) {
			return t.index
		}

		function o(t, n) {
			var e = t.get(n);
			if (!e) throw new Error("missing: " + n);
			return e
		}
		n.a = function(t) {
			var n, e, a, f, s, l = c,
				h = function(t) {
					return 1 / Math.min(f[t.source.index], f[t.target.index])
				},
				d = Object(r.a)(30),
				b = 1;

			function v(r) {
				for (var u = 0, c = t.length; u < b; ++u)
					for (var o, a, f, l, h, d, v, p = 0; p < c; ++p) a = (o = t[p]).source, l = (f = o.target).x + f.vx - a.x - a.vx || Object(i.a)(), h = f.y + f.vy - a.y - a.vy || Object(i.a)(), l *= d = ((d = Math.sqrt(l * l + h * h)) - e[p]) / d * r * n[p], h *= d, f.vx -= l * (v = s[p]), f.vy -= h * v, a.vx += l * (v = 1 - v), a.vy += h * v
			}

			function p() {
				if (a) {
					var r, i, c = a.length,
						h = t.length,
						d = Object(u.c)(a, l);
					for (r = 0, f = new Array(c); r < h; ++r)(i = t[r]).index = r, "object" != typeof i.source && (i.source = o(d, i.source)), "object" != typeof i.target && (i.target = o(d, i.target)), f[i.source.index] = (f[i.source.index] || 0) + 1, f[i.target.index] = (f[i.target.index] || 0) + 1;
					for (r = 0, s = new Array(h); r < h; ++r) i = t[r], s[r] = f[i.source.index] / (f[i.source.index] + f[i.target.index]);
					n = new Array(h), g(), e = new Array(h), _()
				}
			}

			function g() {
				if (a)
					for (var e = 0, r = t.length; e < r; ++e) n[e] = +h(t[e], e, t)
			}

			function _() {
				if (a)
					for (var n = 0, r = t.length; n < r; ++n) e[n] = +d(t[n], n, t)
			}
			return null == t && (t = []), v.initialize = function(t) {
				a = t, p()
			}, v.links = function(n) {
				return arguments.length ? (t = n, p(), v) : t
			}, v.id = function(t) {
				return arguments.length ? (l = t, v) : l
			}, v.iterations = function(t) {
				return arguments.length ? (b = +t, v) : b
			}, v.strength = function(t) {
				return arguments.length ? (h = "function" == typeof t ? t : Object(r.a)(+t), g(), v) : h
			}, v.distance = function(t) {
				return arguments.length ? (d = "function" == typeof t ? t : Object(r.a)(+t), _(), v) : d
			}, v
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(18),
			i = e(67),
			u = e(68),
			c = e(122);
		n.a = function() {
			var t, n, e, o, a = Object(r.a)(-30),
				f = 1,
				s = 1 / 0,
				l = .81;

			function h(r) {
				var i, o = t.length,
					a = Object(u.a)(t, c.b, c.c).visitAfter(b);
				for (e = r, i = 0; i < o; ++i) n = t[i], a.visit(v)
			}

			function d() {
				if (t) {
					var n, e, r = t.length;
					for (o = new Array(r), n = 0; n < r; ++n) e = t[n], o[e.index] = +a(e, n, t)
				}
			}

			function b(t) {
				var n, e, r, i, u, c = 0,
					a = 0;
				if (t.length) {
					for (r = i = u = 0; u < 4; ++u)(n = t[u]) && (e = Math.abs(n.value)) && (c += n.value, a += e, r += e * n.x, i += e * n.y);
					t.x = r / a, t.y = i / a
				} else {
					(n = t).x = n.data.x, n.y = n.data.y;
					do {
						c += o[n.data.index]
					} while (n = n.next)
				}
				t.value = c
			}

			function v(t, r, u, c) {
				if (!t.value) return !0;
				var a = t.x - n.x,
					h = t.y - n.y,
					d = c - r,
					b = a * a + h * h;
				if (d * d / l < b) return b < s && (0 === a && (b += (a = Object(i.a)()) * a), 0 === h && (b += (h = Object(i.a)()) * h), b < f && (b = Math.sqrt(f * b)), n.vx += a * t.value * e / b, n.vy += h * t.value * e / b), !0;
				if (!(t.length || b >= s)) {
					(t.data !== n || t.next) && (0 === a && (b += (a = Object(i.a)()) * a), 0 === h && (b += (h = Object(i.a)()) * h), b < f && (b = Math.sqrt(f * b)));
					do {
						t.data !== n && (d = o[t.data.index] * e / b, n.vx += a * d, n.vy += h * d)
					} while (t = t.next)
				}
			}
			return h.initialize = function(n) {
				t = n, d()
			}, h.strength = function(t) {
				return arguments.length ? (a = "function" == typeof t ? t : Object(r.a)(+t), d(), h) : a
			}, h.distanceMin = function(t) {
				return arguments.length ? (f = t * t, h) : Math.sqrt(f)
			}, h.distanceMax = function(t) {
				return arguments.length ? (s = t * t, h) : Math.sqrt(s)
			}, h.theta = function(t) {
				return arguments.length ? (l = t * t, h) : Math.sqrt(l)
			}, h
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(18);
		n.a = function(t, n, e) {
			var i, u, c, o = Object(r.a)(.1);

			function a(t) {
				for (var r = 0, o = i.length; r < o; ++r) {
					var a = i[r],
						f = a.x - n || 1e-6,
						s = a.y - e || 1e-6,
						l = Math.sqrt(f * f + s * s),
						h = (c[r] - l) * u[r] * t / l;
					a.vx += f * h, a.vy += s * h
				}
			}

			function f() {
				if (i) {
					var n, e = i.length;
					for (u = new Array(e), c = new Array(e), n = 0; n < e; ++n) c[n] = +t(i[n], n, i), u[n] = isNaN(c[n]) ? 0 : +o(i[n], n, i)
				}
			}
			return "function" != typeof t && (t = Object(r.a)(+t)), null == n && (n = 0), null == e && (e = 0), a.initialize = function(t) {
				i = t, f()
			}, a.strength = function(t) {
				return arguments.length ? (o = "function" == typeof t ? t : Object(r.a)(+t), f(), a) : o
			}, a.radius = function(n) {
				return arguments.length ? (t = "function" == typeof n ? n : Object(r.a)(+n), f(), a) : t
			}, a.x = function(t) {
				return arguments.length ? (n = +t, a) : n
			}, a.y = function(t) {
				return arguments.length ? (e = +t, a) : e
			}, a
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(18);
		n.a = function(t) {
			var n, e, i, u = Object(r.a)(.1);

			function c(t) {
				for (var r, u = 0, c = n.length; u < c; ++u)(r = n[u]).vx += (i[u] - r.x) * e[u] * t
			}

			function o() {
				if (n) {
					var r, c = n.length;
					for (e = new Array(c), i = new Array(c), r = 0; r < c; ++r) e[r] = isNaN(i[r] = +t(n[r], r, n)) ? 0 : +u(n[r], r, n)
				}
			}
			return "function" != typeof t && (t = Object(r.a)(null == t ? 0 : +t)), c.initialize = function(t) {
				n = t, o()
			}, c.strength = function(t) {
				return arguments.length ? (u = "function" == typeof t ? t : Object(r.a)(+t), o(), c) : u
			}, c.x = function(n) {
				return arguments.length ? (t = "function" == typeof n ? n : Object(r.a)(+n), o(), c) : t
			}, c
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(18);
		n.a = function(t) {
			var n, e, i, u = Object(r.a)(.1);

			function c(t) {
				for (var r, u = 0, c = n.length; u < c; ++u)(r = n[u]).vy += (i[u] - r.y) * e[u] * t
			}

			function o() {
				if (n) {
					var r, c = n.length;
					for (e = new Array(c), i = new Array(c), r = 0; r < c; ++r) e[r] = isNaN(i[r] = +t(n[r], r, n)) ? 0 : +u(n[r], r, n)
				}
			}
			return "function" != typeof t && (t = Object(r.a)(null == t ? 0 : +t)), c.initialize = function(t) {
				n = t, o()
			}, c.strength = function(t) {
				return arguments.length ? (u = "function" == typeof t ? t : Object(r.a)(+t), o(), c) : u
			}, c.y = function(n) {
				return arguments.length ? (t = "function" == typeof n ? n : Object(r.a)(+n), o(), c) : t
			}, c
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return i
		}), e.d(n, "c", function() {
			return u
		}), n.a = o;
		var r, i, u, c = e(123);

		function o(t) {
			return r = Object(c.a)(t), i = r.format, u = r.formatPrefix, r
		}
		o({
			decimal: ".",
			thousands: ",",
			grouping: [3],
			currency: ["$", ""]
		})
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			return function(e, r) {
				for (var i = e.length, u = [], c = 0, o = t[0], a = 0; i > 0 && o > 0 && (a + o + 1 > r && (o = Math.max(1, r - a)), u.push(e.substring(i -= o, i + o)), !((a += o + 1) > r));) o = t[c = (c + 1) % t.length];
				return u.reverse().join(n)
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return function(n) {
				return n.replace(/[0-9]/g, function(n) {
					return t[+n]
				})
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			t: for (var e, r = (t = t.toPrecision(n)).length, i = 1, u = -1; i < r; ++i) switch (t[i]) {
				case ".":
					u = e = i;
					break;
				case "0":
					0 === u && (u = i), e = i;
					break;
				case "e":
					break t;
				default:
					u > 0 && (u = 0)
			}
			return u > 0 ? t.slice(0, u) + t.slice(e + 1) : t
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(71);
		n.a = function(t, n) {
			var e = Object(r.a)(t, n);
			if (!e) return t + "";
			var i = e[0],
				u = e[1];
			return u < 0 ? "0." + new Array(-u).join("0") + i : i.length > u + 1 ? i.slice(0, u + 1) + "." + i.slice(u + 1) : i + new Array(u - i.length + 2).join("0")
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return t
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(38);
		n.a = function(t) {
			return Math.max(0, -Object(r.a)(Math.abs(t)))
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(38);
		n.a = function(t, n) {
			return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Object(r.a)(n) / 3))) - Object(r.a)(Math.abs(t)))
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(38);
		n.a = function(t, n) {
			return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Object(r.a)(n) - Object(r.a)(t)) + 1
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(127);
		e.d(n, "c", function() {
			return r.c
		});
		var i = e(326);
		e.d(n, "h", function() {
			return i.a
		});
		var u = e(327);
		e.d(n, "i", function() {
			return u.a
		});
		var c = e(128);
		e.d(n, "j", function() {
			return c.b
		});
		var o = e(130);
		e.d(n, "k", function() {
			return o.a
		});
		var a = e(136);
		e.d(n, "l", function() {
			return a.a
		});
		var f = e(329);
		e.d(n, "m", function() {
			return f.a
		});
		var s = e(40);
		e.d(n, "n", function() {
			return s.a
		});
		var l = e(331);
		e.d(n, "u", function() {
			return l.a
		});
		var h = e(137);
		e.d(n, "v", function() {
			return h.a
		});
		var d = e(332);
		e.d(n, "A", function() {
			return d.a
		}), e.d(n, "B", function() {
			return d.b
		});
		var b = e(333);
		e.d(n, "D", function() {
			return b.a
		});
		var v = e(138);
		e.d(n, "E", function() {
			return v.a
		});
		var p = e(334);
		e.d(n, "L", function() {
			return p.a
		});
		var g = e(140);
		e.d(n, "a", function() {
			return g.a
		});
		var _ = e(342);
		e.d(n, "b", function() {
			return _.a
		});
		var y = e(343);
		e.d(n, "d", function() {
			return y.b
		}), e.d(n, "e", function() {
			return y.a
		});
		var m = e(344);
		e.d(n, "f", function() {
			return m.b
		}), e.d(n, "g", function() {
			return m.a
		});
		var O = e(345);
		e.d(n, "o", function() {
			return O.b
		}), e.d(n, "p", function() {
			return O.a
		});
		var j = e(73);
		e.d(n, "q", function() {
			return j.b
		}), e.d(n, "r", function() {
			return j.a
		});
		var x = e(346);
		e.d(n, "s", function() {
			return x.b
		}), e.d(n, "t", function() {
			return x.a
		});
		var w = e(141);
		e.d(n, "w", function() {
			return w.a
		}), e.d(n, "x", function() {
			return w.b
		});
		var M = e(347);
		e.d(n, "y", function() {
			return M.a
		}), e.d(n, "z", function() {
			return M.b
		});
		var k = e(348);
		e.d(n, "C", function() {
			return k.a
		});
		var T = e(8);
		e.d(n, "M", function() {
			return T.a
		}), e.d(n, "N", function() {
			return T.b
		});
		var N = e(76);
		e.d(n, "F", function() {
			return N.a
		}), e.d(n, "G", function() {
			return N.c
		});
		var E = e(349);
		e.d(n, "H", function() {
			return E.a
		}), e.d(n, "I", function() {
			return E.b
		});
		var S = e(350);
		e.d(n, "J", function() {
			return S.a
		}), e.d(n, "K", function() {
			return S.b
		});
		var A = e(351);
		e.d(n, "P", function() {
			return A.a
		}), e.d(n, "Q", function() {
			return A.b
		});
		var C = e(352);
		e.d(n, "T", function() {
			return C.a
		}), e.d(n, "U", function() {
			return C.b
		});
		var z = e(39);
		e.d(n, "O", function() {
			return z.a
		});
		var P = e(14);
		e.d(n, "R", function() {
			return P.a
		});
		var q = e(41);
		e.d(n, "S", function() {
			return q.a
		})
	}, function(t, n, e) {
		"use strict";
		var r, i, u, c, o, a, f, s, l, h, d = e(19),
			b = e(127),
			v = e(24),
			p = e(0),
			g = e(14),
			_ = Object(d.a)(),
			y = {
				point: m,
				lineStart: j,
				lineEnd: x,
				polygonStart: function() {
					y.point = w, y.lineStart = M, y.lineEnd = k, _.reset(), b.b.polygonStart()
				},
				polygonEnd: function() {
					b.b.polygonEnd(), y.point = m, y.lineStart = j, y.lineEnd = x, b.a < 0 ? (r = -(u = 180), i = -(c = 90)) : _ > p.i ? c = 90 : _ < -p.i && (i = -90), h[0] = r, h[1] = u
				}
			};

		function m(t, n) {
			l.push(h = [r = t, u = t]), n < i && (i = n), n > c && (c = n)
		}

		function O(t, n) {
			var e = Object(v.a)([t * p.r, n * p.r]);
			if (s) {
				var a = Object(v.c)(s, e),
					f = [a[1], -a[0], 0],
					d = Object(v.c)(f, a);
				Object(v.e)(d), d = Object(v.g)(d);
				var b, g = t - o,
					_ = g > 0 ? 1 : -1,
					y = d[0] * p.h * _,
					m = Object(p.a)(g) > 180;
				m ^ (_ * o < y && y < _ * t) ? (b = d[1] * p.h) > c && (c = b) : m ^ (_ * o < (y = (y + 360) % 360 - 180) && y < _ * t) ? (b = -d[1] * p.h) < i && (i = b) : (n < i && (i = n), n > c && (c = n)), m ? t < o ? T(r, t) > T(r, u) && (u = t) : T(t, u) > T(r, u) && (r = t) : u >= r ? (t < r && (r = t), t > u && (u = t)) : t > o ? T(r, t) > T(r, u) && (u = t) : T(t, u) > T(r, u) && (r = t)
			} else l.push(h = [r = t, u = t]);
			n < i && (i = n), n > c && (c = n), s = e, o = t
		}

		function j() {
			y.point = O
		}

		function x() {
			h[0] = r, h[1] = u, y.point = m, s = null
		}

		function w(t, n) {
			if (s) {
				var e = t - o;
				_.add(Object(p.a)(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
			} else a = t, f = n;
			b.b.point(t, n), O(t, n)
		}

		function M() {
			b.b.lineStart()
		}

		function k() {
			w(a, f), b.b.lineEnd(), Object(p.a)(_) > p.i && (r = -(u = 180)), h[0] = r, h[1] = u, s = null
		}

		function T(t, n) {
			return (n -= t) < 0 ? n + 360 : n
		}

		function N(t, n) {
			return t[0] - n[0]
		}

		function E(t, n) {
			return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
		}
		n.a = function(t) {
			var n, e, o, a, f, s, d;
			if (c = u = -(r = i = 1 / 0), l = [], Object(g.a)(t, y), e = l.length) {
				for (l.sort(N), n = 1, f = [o = l[0]]; n < e; ++n) E(o, (a = l[n])[0]) || E(o, a[1]) ? (T(o[0], a[1]) > T(o[0], o[1]) && (o[1] = a[1]), T(a[0], o[1]) > T(o[0], o[1]) && (o[0] = a[0])) : f.push(o = a);
				for (s = -1 / 0, n = 0, o = f[e = f.length - 1]; n <= e; o = a, ++n) a = f[n], (d = T(o[1], a[0])) > s && (s = d, r = a[0], u = o[1])
			}
			return l = h = null, r === 1 / 0 || i === 1 / 0 ? [
				[NaN, NaN],
				[NaN, NaN]
			] : [
				[r, i],
				[u, c]
			]
		}
	}, function(t, n, e) {
		"use strict";
		var r, i, u, c, o, a, f, s, l, h, d, b, v, p, g, _, y = e(0),
			m = e(11),
			O = e(14),
			j = {
				sphere: m.a,
				point: x,
				lineStart: M,
				lineEnd: N,
				polygonStart: function() {
					j.lineStart = E, j.lineEnd = S
				},
				polygonEnd: function() {
					j.lineStart = M, j.lineEnd = N
				}
			};

		function x(t, n) {
			t *= y.r, n *= y.r;
			var e = Object(y.g)(n);
			w(e * Object(y.g)(t), e * Object(y.t)(t), Object(y.t)(n))
		}

		function w(t, n, e) {
			u += (t - u) / ++r, c += (n - c) / r, o += (e - o) / r
		}

		function M() {
			j.point = k
		}

		function k(t, n) {
			t *= y.r, n *= y.r;
			var e = Object(y.g)(n);
			p = e * Object(y.g)(t), g = e * Object(y.t)(t), _ = Object(y.t)(n), j.point = T, w(p, g, _)
		}

		function T(t, n) {
			t *= y.r, n *= y.r;
			var e = Object(y.g)(n),
				r = e * Object(y.g)(t),
				u = e * Object(y.t)(t),
				c = Object(y.t)(n),
				o = Object(y.e)(Object(y.u)((o = g * c - _ * u) * o + (o = _ * r - p * c) * o + (o = p * u - g * r) * o), p * r + g * u + _ * c);
			i += o, a += o * (p + (p = r)), f += o * (g + (g = u)), s += o * (_ + (_ = c)), w(p, g, _)
		}

		function N() {
			j.point = x
		}

		function E() {
			j.point = A
		}

		function S() {
			C(b, v), j.point = x
		}

		function A(t, n) {
			b = t, v = n, t *= y.r, n *= y.r, j.point = C;
			var e = Object(y.g)(n);
			p = e * Object(y.g)(t), g = e * Object(y.t)(t), _ = Object(y.t)(n), w(p, g, _)
		}

		function C(t, n) {
			t *= y.r, n *= y.r;
			var e = Object(y.g)(n),
				r = e * Object(y.g)(t),
				u = e * Object(y.t)(t),
				c = Object(y.t)(n),
				o = g * c - _ * u,
				b = _ * r - p * c,
				v = p * u - g * r,
				m = Object(y.u)(o * o + b * b + v * v),
				O = Object(y.c)(m),
				j = m && -O / m;
			l += j * o, h += j * b, d += j * v, i += O, a += O * (p + (p = r)), f += O * (g + (g = u)), s += O * (_ + (_ = c)), w(p, g, _)
		}
		n.a = function(t) {
			r = i = u = c = o = a = f = s = l = h = d = 0, Object(O.a)(t, j);
			var n = l,
				e = h,
				b = d,
				v = n * n + e * e + b * b;
			return v < y.j && (n = a, e = f, b = s, i < y.i && (n = u, e = c, b = o), (v = n * n + e * e + b * b) < y.j) ? [NaN, NaN] : [Object(y.e)(e, n) * y.h, Object(y.c)(b / Object(y.u)(v)) * y.h]
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return function() {
				return t
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(40);
		n.a = function() {
			var t, n, e, i = 0,
				u = 0,
				c = 960,
				o = 500;
			return e = {
				stream: function(e) {
					return t && n === e ? t : t = Object(r.a)(i, u, c, o)(n = e)
				},
				extent: function(r) {
					return arguments.length ? (i = +r[0][0], u = +r[0][1], c = +r[1][0], o = +r[1][1], t = n = null, e) : [
						[i, u],
						[c, o]
					]
				}
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n, e, r, i, u) {
			var c, o = t[0],
				a = t[1],
				f = 0,
				s = 1,
				l = n[0] - o,
				h = n[1] - a;
			if (c = e - o, l || !(c > 0)) {
				if (c /= l, l < 0) {
					if (c < f) return;
					c < s && (s = c)
				} else if (l > 0) {
					if (c > s) return;
					c > f && (f = c)
				}
				if (c = i - o, l || !(c < 0)) {
					if (c /= l, l < 0) {
						if (c > s) return;
						c > f && (f = c)
					} else if (l > 0) {
						if (c < f) return;
						c < s && (s = c)
					}
					if (c = r - a, h || !(c > 0)) {
						if (c /= h, h < 0) {
							if (c < f) return;
							c < s && (s = c)
						} else if (h > 0) {
							if (c > s) return;
							c > f && (f = c)
						}
						if (c = u - a, h || !(c < 0)) {
							if (c /= h, h < 0) {
								if (c > s) return;
								c > f && (f = c)
							} else if (h > 0) {
								if (c < f) return;
								c < s && (s = c)
							}
							return f > 0 && (t[0] = o + f * l, t[1] = a + f * h), s < 1 && (n[0] = o + s * l, n[1] = a + s * h), !0
						}
					}
				}
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(135),
			i = e(137),
			u = e(0),
			c = {
				Feature: function(t, n) {
					return a(t.geometry, n)
				},
				FeatureCollection: function(t, n) {
					for (var e = t.features, r = -1, i = e.length; ++r < i;)
						if (a(e[r].geometry, n)) return !0;
					return !1
				}
			},
			o = {
				Sphere: function() {
					return !0
				},
				Point: function(t, n) {
					return f(t.coordinates, n)
				},
				MultiPoint: function(t, n) {
					for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
						if (f(e[r], n)) return !0;
					return !1
				},
				LineString: function(t, n) {
					return s(t.coordinates, n)
				},
				MultiLineString: function(t, n) {
					for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
						if (s(e[r], n)) return !0;
					return !1
				},
				Polygon: function(t, n) {
					return l(t.coordinates, n)
				},
				MultiPolygon: function(t, n) {
					for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
						if (l(e[r], n)) return !0;
					return !1
				},
				GeometryCollection: function(t, n) {
					for (var e = t.geometries, r = -1, i = e.length; ++r < i;)
						if (a(e[r], n)) return !0;
					return !1
				}
			};

		function a(t, n) {
			return !(!t || !o.hasOwnProperty(t.type)) && o[t.type](t, n)
		}

		function f(t, n) {
			return 0 === Object(i.a)(t, n)
		}

		function s(t, n) {
			var e = Object(i.a)(t[0], t[1]);
			return Object(i.a)(t[0], n) + Object(i.a)(n, t[1]) <= e + u.i
		}

		function l(t, n) {
			return !!Object(r.a)(t.map(h), d(n))
		}

		function h(t) {
			return (t = t.map(d)).pop(), t
		}

		function d(t) {
			return [t[0] * u.r, t[1] * u.r]
		}
		n.a = function(t, n) {
			return (t && c.hasOwnProperty(t.type) ? c[t.type] : a)(t, n)
		}
	}, function(t, n, e) {
		"use strict";
		n.a = o, n.b = function() {
			return o()()
		};
		var r = e(3),
			i = e(0);

		function u(t, n, e) {
			var u = Object(r.s)(t, n - i.i, e).concat(n);
			return function(t) {
				return u.map(function(n) {
					return [t, n]
				})
			}
		}

		function c(t, n, e) {
			var u = Object(r.s)(t, n - i.i, e).concat(n);
			return function(t) {
				return u.map(function(n) {
					return [n, t]
				})
			}
		}

		function o() {
			var t, n, e, o, a, f, s, l, h, d, b, v, p = 10,
				g = p,
				_ = 90,
				y = 360,
				m = 2.5;

			function O() {
				return {
					type: "MultiLineString",
					coordinates: j()
				}
			}

			function j() {
				return Object(r.s)(Object(i.f)(o / _) * _, e, _).map(b).concat(Object(r.s)(Object(i.f)(l / y) * y, s, y).map(v)).concat(Object(r.s)(Object(i.f)(n / p) * p, t, p).filter(function(t) {
					return Object(i.a)(t % _) > i.i
				}).map(h)).concat(Object(r.s)(Object(i.f)(f / g) * g, a, g).filter(function(t) {
					return Object(i.a)(t % y) > i.i
				}).map(d))
			}
			return O.lines = function() {
				return j().map(function(t) {
					return {
						type: "LineString",
						coordinates: t
					}
				})
			}, O.outline = function() {
				return {
					type: "Polygon",
					coordinates: [b(o).concat(v(s).slice(1), b(e).reverse().slice(1), v(l).reverse().slice(1))]
				}
			}, O.extent = function(t) {
				return arguments.length ? O.extentMajor(t).extentMinor(t) : O.extentMinor()
			}, O.extentMajor = function(t) {
				return arguments.length ? (o = +t[0][0], e = +t[1][0], l = +t[0][1], s = +t[1][1], o > e && (t = o, o = e, e = t), l > s && (t = l, l = s, s = t), O.precision(m)) : [
					[o, l],
					[e, s]
				]
			}, O.extentMinor = function(e) {
				return arguments.length ? (n = +e[0][0], t = +e[1][0], f = +e[0][1], a = +e[1][1], n > t && (e = n, n = t, t = e), f > a && (e = f, f = a, a = e), O.precision(m)) : [
					[n, f],
					[t, a]
				]
			}, O.step = function(t) {
				return arguments.length ? O.stepMajor(t).stepMinor(t) : O.stepMinor()
			}, O.stepMajor = function(t) {
				return arguments.length ? (_ = +t[0], y = +t[1], O) : [_, y]
			}, O.stepMinor = function(t) {
				return arguments.length ? (p = +t[0], g = +t[1], O) : [p, g]
			}, O.precision = function(r) {
				return arguments.length ? (m = +r, h = u(f, a, 90), d = c(n, t, m), b = u(l, s, 90), v = c(o, e, m), O) : m
			}, O.extentMajor([
				[-180, -90 + i.i],
				[180, 90 - i.i]
			]).extentMinor([
				[-180, -80 - i.i],
				[180, 80 + i.i]
			])
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(0);
		n.a = function(t, n) {
			var e = t[0] * r.r,
				i = t[1] * r.r,
				u = n[0] * r.r,
				c = n[1] * r.r,
				o = Object(r.g)(i),
				a = Object(r.t)(i),
				f = Object(r.g)(c),
				s = Object(r.t)(c),
				l = o * Object(r.g)(e),
				h = o * Object(r.t)(e),
				d = f * Object(r.g)(u),
				b = f * Object(r.t)(u),
				v = 2 * Object(r.c)(Object(r.u)(Object(r.m)(c - i) + o * f * Object(r.m)(u - e))),
				p = Object(r.t)(v),
				g = v ? function(t) {
					var n = Object(r.t)(t *= v) / p,
						e = Object(r.t)(v - t) / p,
						i = e * l + n * d,
						u = e * h + n * b,
						c = e * a + n * s;
					return [Object(r.e)(u, i) * r.h, Object(r.e)(c, Object(r.u)(i * i + u * u)) * r.h]
				} : function() {
					return [e * r.h, i * r.h]
				};
			return g.distance = v, g
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(72),
			i = e(14),
			u = e(335),
			c = e(139),
			o = e(336),
			a = e(337),
			f = e(338),
			s = e(339);
		n.a = function(t, n) {
			var e, l, h = 4.5;

			function d(t) {
				return t && ("function" == typeof h && l.pointRadius(+h.apply(this, arguments)), Object(i.a)(t, e(l))), l.result()
			}
			return d.area = function(t) {
				return Object(i.a)(t, e(u.a)), u.a.result()
			}, d.measure = function(t) {
				return Object(i.a)(t, e(f.a)), f.a.result()
			}, d.bounds = function(t) {
				return Object(i.a)(t, e(c.a)), c.a.result()
			}, d.centroid = function(t) {
				return Object(i.a)(t, e(o.a)), o.a.result()
			}, d.projection = function(n) {
				return arguments.length ? (e = null == n ? (t = null, r.a) : (t = n).stream, d) : t
			}, d.context = function(t) {
				return arguments.length ? (l = null == t ? (n = null, new s.a) : new a.a(n = t), "function" != typeof h && l.pointRadius(h), d) : n
			}, d.pointRadius = function(t) {
				return arguments.length ? (h = "function" == typeof t ? t : (l.pointRadius(+t), +t), d) : h
			}, d.projection(t).context(n)
		}
	}, function(t, n, e) {
		"use strict";
		var r, i, u, c, o = e(19),
			a = e(0),
			f = e(11),
			s = Object(o.a)(),
			l = Object(o.a)(),
			h = {
				point: f.a,
				lineStart: f.a,
				lineEnd: f.a,
				polygonStart: function() {
					h.lineStart = d, h.lineEnd = p
				},
				polygonEnd: function() {
					h.lineStart = h.lineEnd = h.point = f.a, s.add(Object(a.a)(l)), l.reset()
				},
				result: function() {
					var t = s / 2;
					return s.reset(), t
				}
			};

		function d() {
			h.point = b
		}

		function b(t, n) {
			h.point = v, r = u = t, i = c = n
		}

		function v(t, n) {
			l.add(c * t - u * n), u = t, c = n
		}

		function p() {
			v(r, i)
		}
		n.a = h
	}, function(t, n, e) {
		"use strict";
		var r, i, u, c, o = e(0),
			a = 0,
			f = 0,
			s = 0,
			l = 0,
			h = 0,
			d = 0,
			b = 0,
			v = 0,
			p = 0,
			g = {
				point: _,
				lineStart: y,
				lineEnd: j,
				polygonStart: function() {
					g.lineStart = x, g.lineEnd = w
				},
				polygonEnd: function() {
					g.point = _, g.lineStart = y, g.lineEnd = j
				},
				result: function() {
					var t = p ? [b / p, v / p] : d ? [l / d, h / d] : s ? [a / s, f / s] : [NaN, NaN];
					return a = f = s = l = h = d = b = v = p = 0, t
				}
			};

		function _(t, n) {
			a += t, f += n, ++s
		}

		function y() {
			g.point = m
		}

		function m(t, n) {
			g.point = O, _(u = t, c = n)
		}

		function O(t, n) {
			var e = t - u,
				r = n - c,
				i = Object(o.u)(e * e + r * r);
			l += i * (u + t) / 2, h += i * (c + n) / 2, d += i, _(u = t, c = n)
		}

		function j() {
			g.point = _
		}

		function x() {
			g.point = M
		}

		function w() {
			k(r, i)
		}

		function M(t, n) {
			g.point = k, _(r = u = t, i = c = n)
		}

		function k(t, n) {
			var e = t - u,
				r = n - c,
				i = Object(o.u)(e * e + r * r);
			l += i * (u + t) / 2, h += i * (c + n) / 2, d += i, b += (i = c * t - u * n) * (u + t), v += i * (c + n), p += 3 * i, _(u = t, c = n)
		}
		n.a = g
	}, function(t, n, e) {
		"use strict";
		n.a = u;
		var r = e(0),
			i = e(11);

		function u(t) {
			this._context = t
		}
		u.prototype = {
			_radius: 4.5,
			pointRadius: function(t) {
				return this._radius = t, this
			},
			polygonStart: function() {
				this._line = 0
			},
			polygonEnd: function() {
				this._line = NaN
			},
			lineStart: function() {
				this._point = 0
			},
			lineEnd: function() {
				0 === this._line && this._context.closePath(), this._point = NaN
			},
			point: function(t, n) {
				switch (this._point) {
					case 0:
						this._context.moveTo(t, n), this._point = 1;
						break;
					case 1:
						this._context.lineTo(t, n);
						break;
					default:
						this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, r.w)
				}
			},
			result: i.a
		}
	}, function(t, n, e) {
		"use strict";
		var r, i, u, c, o, a = e(19),
			f = e(0),
			s = e(11),
			l = Object(a.a)(),
			h = {
				point: s.a,
				lineStart: function() {
					h.point = d
				},
				lineEnd: function() {
					r && b(i, u), h.point = s.a
				},
				polygonStart: function() {
					r = !0
				},
				polygonEnd: function() {
					r = null
				},
				result: function() {
					var t = +l;
					return l.reset(), t
				}
			};

		function d(t, n) {
			h.point = b, i = c = t, u = o = n
		}

		function b(t, n) {
			c -= t, o -= n, l.add(Object(f.u)(c * c + o * o)), c = t, o = n
		}
		n.a = h
	}, function(t, n, e) {
		"use strict";

		function r() {
			this._string = []
		}

		function i(t) {
			return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
		}
		n.a = r, r.prototype = {
			_radius: 4.5,
			_circle: i(4.5),
			pointRadius: function(t) {
				return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this
			},
			polygonStart: function() {
				this._line = 0
			},
			polygonEnd: function() {
				this._line = NaN
			},
			lineStart: function() {
				this._point = 0
			},
			lineEnd: function() {
				0 === this._line && this._string.push("Z"), this._point = NaN
			},
			point: function(t, n) {
				switch (this._point) {
					case 0:
						this._string.push("M", t, ",", n), this._point = 1;
						break;
					case 1:
						this._string.push("L", t, ",", n);
						break;
					default:
						null == this._circle && (this._circle = i(this._radius)), this._string.push("M", t, ",", n, this._circle)
				}
			},
			result: function() {
				if (this._string.length) {
					var t = this._string.join("");
					return this._string = [], t
				}
				return null
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(24),
			i = e(0),
			u = e(41),
			c = 16,
			o = Object(i.g)(30 * i.r);
		n.a = function(t, n) {
			return +n ? function(t, n) {
				function e(r, u, c, a, f, s, l, h, d, b, v, p, g, _) {
					var y = l - r,
						m = h - u,
						O = y * y + m * m;
					if (O > 4 * n && g--) {
						var j = a + b,
							x = f + v,
							w = s + p,
							M = Object(i.u)(j * j + x * x + w * w),
							k = Object(i.c)(w /= M),
							T = Object(i.a)(Object(i.a)(w) - 1) < i.i || Object(i.a)(c - d) < i.i ? (c + d) / 2 : Object(i.e)(x, j),
							N = t(T, k),
							E = N[0],
							S = N[1],
							A = E - r,
							C = S - u,
							z = m * A - y * C;
						(z * z / O > n || Object(i.a)((y * A + m * C) / O - .5) > .3 || a * b + f * v + s * p < o) && (e(r, u, c, a, f, s, E, S, T, j /= M, x /= M, w, g, _), _.point(E, S), e(E, S, T, j, x, w, l, h, d, b, v, p, g, _))
					}
				}
				return function(n) {
					var i, u, o, a, f, s, l, h, d, b, v, p, g = {
						point: _,
						lineStart: y,
						lineEnd: O,
						polygonStart: function() {
							n.polygonStart(), g.lineStart = j
						},
						polygonEnd: function() {
							n.polygonEnd(), g.lineStart = y
						}
					};

					function _(e, r) {
						e = t(e, r), n.point(e[0], e[1])
					}

					function y() {
						h = NaN, g.point = m, n.lineStart()
					}

					function m(i, u) {
						var o = Object(r.a)([i, u]),
							a = t(i, u);
						e(h, d, l, b, v, p, h = a[0], d = a[1], l = i, b = o[0], v = o[1], p = o[2], c, n), n.point(h, d)
					}

					function O() {
						g.point = _, n.lineEnd()
					}

					function j() {
						y(), g.point = x, g.lineEnd = w
					}

					function x(t, n) {
						m(i = t, n), u = h, o = d, a = b, f = v, s = p, g.point = m
					}

					function w() {
						e(h, d, l, b, v, p, u, o, i, a, f, s, c, n), g.lineEnd = O, O()
					}
					return g
				}
			}(t, n) : function(t) {
				return Object(u.b)({
					point: function(n, e) {
						n = t(n, e), this.stream.point(n[0], n[1])
					}
				})
			}(t)
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			var n = Object(r.g)(t);

			function e(t, e) {
				return [t * n, Object(r.t)(e) / n]
			}
			return e.invert = function(t, e) {
				return [t / n, Object(r.c)(e * n)]
			}, e
		};
		var r = e(0)
	}, function(t, n, e) {
		"use strict";
		var r = e(0),
			i = e(140),
			u = e(73),
			c = e(75);
		n.a = function() {
			var t, n, e, o, a, f, s = Object(i.a)(),
				l = Object(u.b)().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
				h = Object(u.b)().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
				d = {
					point: function(t, n) {
						f = [t, n]
					}
				};

			function b(t) {
				var n = t[0],
					r = t[1];
				return f = null, e.point(n, r), f || (o.point(n, r), f) || (a.point(n, r), f)
			}

			function v() {
				return t = n = null, b
			}
			return b.invert = function(t) {
				var n = s.scale(),
					e = s.translate(),
					r = (t[0] - e[0]) / n,
					i = (t[1] - e[1]) / n;
				return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? l : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? h : s).invert(t)
			}, b.stream = function(e) {
				return t && n === e ? t : (r = [s.stream(n = e), l.stream(e), h.stream(e)], i = r.length, t = {
					point: function(t, n) {
						for (var e = -1; ++e < i;) r[e].point(t, n)
					},
					sphere: function() {
						for (var t = -1; ++t < i;) r[t].sphere()
					},
					lineStart: function() {
						for (var t = -1; ++t < i;) r[t].lineStart()
					},
					lineEnd: function() {
						for (var t = -1; ++t < i;) r[t].lineEnd()
					},
					polygonStart: function() {
						for (var t = -1; ++t < i;) r[t].polygonStart()
					},
					polygonEnd: function() {
						for (var t = -1; ++t < i;) r[t].polygonEnd()
					}
				});
				var r, i
			}, b.precision = function(t) {
				return arguments.length ? (s.precision(t), l.precision(t), h.precision(t), v()) : s.precision()
			}, b.scale = function(t) {
				return arguments.length ? (s.scale(t), l.scale(.35 * t), h.scale(t), b.translate(s.translate())) : s.scale()
			}, b.translate = function(t) {
				if (!arguments.length) return s.translate();
				var n = s.scale(),
					i = +t[0],
					u = +t[1];
				return e = s.translate(t).clipExtent([
					[i - .455 * n, u - .238 * n],
					[i + .455 * n, u + .238 * n]
				]).stream(d), o = l.translate([i - .307 * n, u + .201 * n]).clipExtent([
					[i - .425 * n + r.i, u + .12 * n + r.i],
					[i - .214 * n - r.i, u + .234 * n - r.i]
				]).stream(d), a = h.translate([i - .205 * n, u + .212 * n]).clipExtent([
					[i - .214 * n + r.i, u + .166 * n + r.i],
					[i - .115 * n - r.i, u + .234 * n - r.i]
				]).stream(d), v()
			}, b.fitExtent = function(t, n) {
				return Object(c.a)(b, t, n)
			}, b.fitSize = function(t, n) {
				return Object(c.c)(b, t, n)
			}, b.fitWidth = function(t, n) {
				return Object(c.d)(b, t, n)
			}, b.fitHeight = function(t, n) {
				return Object(c.b)(b, t, n)
			}, b.scale(1070)
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "a", function() {
			return c
		});
		var r = e(0),
			i = e(25),
			u = e(8),
			c = Object(i.b)(function(t) {
				return Object(r.u)(2 / (1 + t))
			});
		c.invert = Object(i.a)(function(t) {
			return 2 * Object(r.c)(t / 2)
		}), n.b = function() {
			return Object(u.a)(c).scale(124.75).clipAngle(179.999)
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "a", function() {
			return c
		});
		var r = e(0),
			i = e(25),
			u = e(8),
			c = Object(i.b)(function(t) {
				return (t = Object(r.b)(t)) && t / Object(r.t)(t)
			});
		c.invert = Object(i.a)(function(t) {
			return t
		}), n.b = function() {
			return Object(u.a)(c).scale(79.4188).clipAngle(179.999)
		}
	}, function(t, n, e) {
		"use strict";
		n.a = o;
		var r = e(0),
			i = e(74),
			u = e(76);

		function c(t) {
			return Object(r.v)((r.l + t) / 2)
		}

		function o(t, n) {
			var e = Object(r.g)(t),
				i = t === n ? Object(r.t)(t) : Object(r.n)(e / Object(r.g)(n)) / Object(r.n)(c(n) / c(t)),
				o = e * Object(r.p)(c(t), i) / i;
			if (!i) return u.c;

			function a(t, n) {
				o > 0 ? n < -r.l + r.i && (n = -r.l + r.i) : n > r.l - r.i && (n = r.l - r.i);
				var e = o / Object(r.p)(c(n), i);
				return [e * Object(r.t)(i * t), o - e * Object(r.g)(i * t)]
			}
			return a.invert = function(t, n) {
				var e = o - n,
					u = Object(r.s)(i) * Object(r.u)(t * t + e * e);
				return [Object(r.e)(t, Object(r.a)(e)) / i * Object(r.s)(e), 2 * Object(r.d)(Object(r.p)(o / u, 1 / i)) - r.l]
			}, a
		}
		n.b = function() {
			return Object(i.a)(o).scale(109.5).parallels([30, 30])
		}
	}, function(t, n, e) {
		"use strict";
		n.a = c;
		var r = e(0),
			i = e(74),
			u = e(141);

		function c(t, n) {
			var e = Object(r.g)(t),
				i = t === n ? Object(r.t)(t) : (e - Object(r.g)(n)) / (n - t),
				c = e / i + t;
			if (Object(r.a)(i) < r.i) return u.b;

			function o(t, n) {
				var e = c - n,
					u = i * t;
				return [e * Object(r.t)(u), c - e * Object(r.g)(u)]
			}
			return o.invert = function(t, n) {
				var e = c - n;
				return [Object(r.e)(t, Object(r.a)(e)) / i * Object(r.s)(e), c - Object(r.s)(i) * Object(r.u)(t * t + e * e)]
			}, o
		}
		n.b = function() {
			return Object(i.a)(c).scale(131.154).center([0, 13.9389])
		}
	}, function(t, n, e) {
		"use strict";
		n.b = c;
		var r = e(0),
			i = e(25),
			u = e(8);

		function c(t, n) {
			var e = Object(r.g)(n),
				i = Object(r.g)(t) * e;
			return [e * Object(r.t)(t) / i, Object(r.t)(n) / i]
		}
		c.invert = Object(i.a)(r.d), n.a = function() {
			return Object(u.a)(c).scale(144.049).clipAngle(60)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(40),
			i = e(72),
			u = e(41),
			c = e(75);

		function o(t, n, e, r) {
			return 1 === t && 1 === n && 0 === e && 0 === r ? i.a : Object(u.b)({
				point: function(i, u) {
					this.stream.point(i * t + e, u * n + r)
				}
			})
		}
		n.a = function() {
			var t, n, e, u, a, f, s = 1,
				l = 0,
				h = 0,
				d = 1,
				b = 1,
				v = i.a,
				p = null,
				g = i.a;

			function _() {
				return u = a = null, f
			}
			return f = {
				stream: function(t) {
					return u && a === t ? u : u = v(g(a = t))
				},
				postclip: function(r) {
					return arguments.length ? (g = r, p = t = n = e = null, _()) : g
				},
				clipExtent: function(u) {
					return arguments.length ? (g = null == u ? (p = t = n = e = null, i.a) : Object(r.a)(p = +u[0][0], t = +u[0][1], n = +u[1][0], e = +u[1][1]), _()) : null == p ? null : [
						[p, t],
						[n, e]
					]
				},
				scale: function(t) {
					return arguments.length ? (v = o((s = +t) * d, s * b, l, h), _()) : s
				},
				translate: function(t) {
					return arguments.length ? (v = o(s * d, s * b, l = +t[0], h = +t[1]), _()) : [l, h]
				},
				reflectX: function(t) {
					return arguments.length ? (v = o(s * (d = t ? -1 : 1), s * b, l, h), _()) : d < 0
				},
				reflectY: function(t) {
					return arguments.length ? (v = o(s * d, s * (b = t ? -1 : 1), l, h), _()) : b < 0
				},
				fitExtent: function(t, n) {
					return Object(c.a)(f, t, n)
				},
				fitSize: function(t, n) {
					return Object(c.c)(f, t, n)
				},
				fitWidth: function(t, n) {
					return Object(c.d)(f, t, n)
				},
				fitHeight: function(t, n) {
					return Object(c.b)(f, t, n)
				}
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.b = u;
		var r = e(8),
			i = e(0);

		function u(t, n) {
			var e = n * n,
				r = e * e;
			return [t * (.8707 - .131979 * e + r * (r * (.003971 * e - .001529 * r) - .013791)), n * (1.007226 + e * (.015085 + r * (.028874 * e - .044475 - .005916 * r)))]
		}
		u.invert = function(t, n) {
			var e, r = n,
				u = 25;
			do {
				var c = r * r,
					o = c * c;
				r -= e = (r * (1.007226 + c * (.015085 + o * (.028874 * c - .044475 - .005916 * o))) - n) / (1.007226 + c * (.045255 + o * (.259866 * c - .311325 - .005916 * 11 * o)))
			} while (Object(i.a)(e) > i.i && --u > 0);
			return [t / (.8707 + (c = r * r) * (c * (c * c * c * (.003971 - .001529 * c) - .013791) - .131979)), r]
		}, n.a = function() {
			return Object(r.a)(u).scale(175.295)
		}
	}, function(t, n, e) {
		"use strict";
		n.b = c;
		var r = e(0),
			i = e(25),
			u = e(8);

		function c(t, n) {
			return [Object(r.g)(n) * Object(r.t)(t), Object(r.t)(n)]
		}
		c.invert = Object(i.a)(r.c), n.a = function() {
			return Object(u.a)(c).scale(249.5).clipAngle(90 + r.i)
		}
	}, function(t, n, e) {
		"use strict";
		n.b = c;
		var r = e(0),
			i = e(25),
			u = e(8);

		function c(t, n) {
			var e = Object(r.g)(n),
				i = 1 + Object(r.g)(t) * e;
			return [e * Object(r.t)(t) / i, Object(r.t)(n) / i]
		}
		c.invert = Object(i.a)(function(t) {
			return 2 * Object(r.d)(t)
		}), n.a = function() {
			return Object(u.a)(c).scale(250).clipAngle(142)
		}
	}, function(t, n, e) {
		"use strict";
		n.b = u;
		var r = e(0),
			i = e(76);

		function u(t, n) {
			return [Object(r.n)(Object(r.v)((r.l + n) / 2)), -t]
		}
		u.invert = function(t, n) {
			return [-n, 2 * Object(r.d)(Object(r.k)(t)) - r.l]
		}, n.a = function() {
			var t = Object(i.b)(u),
				n = t.center,
				e = t.rotate;
			return t.center = function(t) {
				return arguments.length ? n([-t[1], t[0]]) : [(t = n())[1], -t[0]]
			}, t.rotate = function(t) {
				return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : [(t = e())[0], t[1], t[2] - 90]
			}, e([0, 0, 90]).scale(159.155)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(354);
		e.d(n, "a", function() {
			return r.a
		});
		var i = e(77);
		e.d(n, "b", function() {
			return i.c
		});
		var u = e(366);
		e.d(n, "c", function() {
			return u.a
		});
		var c = e(142);
		e.d(n, "e", function() {
			return c.a
		});
		var o = e(143);
		e.d(n, "d", function() {
			return o.a
		});
		var a = e(368);
		e.d(n, "f", function() {
			return a.a
		});
		var f = e(369);
		e.d(n, "g", function() {
			return f.a
		});
		var s = e(370);
		e.d(n, "h", function() {
			return s.a
		});
		var l = e(371);
		e.d(n, "i", function() {
			return l.a
		});
		var h = e(372);
		e.d(n, "j", function() {
			return h.a
		});
		var d = e(26);
		e.d(n, "k", function() {
			return d.a
		});
		var b = e(42);
		e.d(n, "m", function() {
			return b.a
		});
		var v = e(373);
		e.d(n, "n", function() {
			return v.a
		});
		var p = e(79);
		e.d(n, "o", function() {
			return p.a
		});
		var g = e(374);
		e.d(n, "l", function() {
			return g.a
		})
	}, function(t, n, e) {
		"use strict";

		function r(t, n) {
			return t.parent === n.parent ? 1 : 2
		}

		function i(t, n) {
			return t + n.x
		}

		function u(t, n) {
			return Math.max(t, n.y)
		}
		n.a = function() {
			var t = r,
				n = 1,
				e = 1,
				c = !1;

			function o(r) {
				var o, a = 0;
				r.eachAfter(function(n) {
					var e = n.children;
					e ? (n.x = function(t) {
						return t.reduce(i, 0) / t.length
					}(e), n.y = function(t) {
						return 1 + t.reduce(u, 0)
					}(e)) : (n.x = o ? a += t(n, o) : 0, n.y = 0, o = n)
				});
				var f = function(t) {
						for (var n; n = t.children;) t = n[0];
						return t
					}(r),
					s = function(t) {
						for (var n; n = t.children;) t = n[n.length - 1];
						return t
					}(r),
					l = f.x - t(f, s) / 2,
					h = s.x + t(s, f) / 2;
				return r.eachAfter(c ? function(t) {
					t.x = (t.x - r.x) * n, t.y = (r.y - t.y) * e
				} : function(t) {
					t.x = (t.x - l) / (h - l) * n, t.y = (1 - (r.y ? t.y / r.y : 1)) * e
				})
			}
			return o.separation = function(n) {
				return arguments.length ? (t = n, o) : t
			}, o.size = function(t) {
				return arguments.length ? (c = !1, n = +t[0], e = +t[1], o) : c ? null : [n, e]
			}, o.nodeSize = function(t) {
				return arguments.length ? (c = !0, n = +t[0], e = +t[1], o) : c ? [n, e] : null
			}, o
		}
	}, function(t, n, e) {
		"use strict";

		function r(t) {
			var n = 0,
				e = t.children,
				r = e && e.length;
			if (r)
				for (; --r >= 0;) n += e[r].value;
			else n = 1;
			t.value = n
		}
		n.a = function() {
			return this.eachAfter(r)
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			var n, e, r, i, u = this,
				c = [u];
			do {
				for (n = c.reverse(), c = []; u = n.pop();)
					if (t(u), e = u.children)
						for (r = 0, i = e.length; r < i; ++r) c.push(e[r])
			} while (c.length);
			return this
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			for (var n, e, r = this, i = [r]; r = i.pop();)
				if (t(r), n = r.children)
					for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
			return this
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			for (var n, e, r, i = this, u = [i], c = []; i = u.pop();)
				if (c.push(i), n = i.children)
					for (e = 0, r = n.length; e < r; ++e) u.push(n[e]);
			for (; i = c.pop();) t(i);
			return this
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return this.eachAfter(function(n) {
				for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) e += r[i].value;
				n.value = e
			})
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return this.eachBefore(function(n) {
				n.children && n.children.sort(t)
			})
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			for (var n = this, e = function(t, n) {
					if (t === n) return t;
					var e = t.ancestors(),
						r = n.ancestors(),
						i = null;
					t = e.pop(), n = r.pop();
					for (; t === n;) i = t, t = e.pop(), n = r.pop();
					return i
				}(n, t), r = [n]; n !== e;) n = n.parent, r.push(n);
			for (var i = r.length; t !== e;) r.splice(i, 0, t), t = t.parent;
			return r
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function() {
			for (var t = this, n = [t]; t = t.parent;) n.push(t);
			return n
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function() {
			var t = [];
			return this.each(function(n) {
				t.push(n)
			}), t
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function() {
			var t = [];
			return this.eachBefore(function(n) {
				n.children || t.push(n)
			}), t
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function() {
			var t = this,
				n = [];
			return t.each(function(e) {
				e !== t && n.push({
					source: e.parent,
					target: e
				})
			}), n
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(142),
			i = e(78),
			u = e(144);

		function c(t) {
			return Math.sqrt(t.value)
		}

		function o(t) {
			return function(n) {
				n.children || (n.r = Math.max(0, +t(n) || 0))
			}
		}

		function a(t, n) {
			return function(e) {
				if (i = e.children) {
					var i, u, c, o = i.length,
						a = t(e) * n || 0;
					if (a)
						for (u = 0; u < o; ++u) i[u].r += a;
					if (c = Object(r.b)(i), a)
						for (u = 0; u < o; ++u) i[u].r -= a;
					e.r = c + a
				}
			}
		}

		function f(t) {
			return function(n) {
				var e = n.parent;
				n.r *= t, e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y)
			}
		}
		n.a = function() {
			var t = null,
				n = 1,
				e = 1,
				r = u.a;

			function s(i) {
				return i.x = n / 2, i.y = e / 2, t ? i.eachBefore(o(t)).eachAfter(a(r, .5)).eachBefore(f(1)) : i.eachBefore(o(c)).eachAfter(a(u.a, 1)).eachAfter(a(r, i.r / Math.min(n, e))).eachBefore(f(Math.min(n, e) / (2 * i.r))), i
			}
			return s.radius = function(n) {
				return arguments.length ? (t = Object(i.a)(n), s) : t
			}, s.size = function(t) {
				return arguments.length ? (n = +t[0], e = +t[1], s) : [n, e]
			}, s.padding = function(t) {
				return arguments.length ? (r = "function" == typeof t ? t : Object(u.b)(+t), s) : r
			}, s
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return r
		}), n.a = function(t) {
			var n, e, r = t.length;
			for (; r;) e = Math.random() * r-- | 0, n = t[r], t[r] = t[e], t[e] = n;
			return t
		};
		var r = Array.prototype.slice
	}, function(t, n, e) {
		"use strict";
		var r = e(145),
			i = e(26);
		n.a = function() {
			var t = 1,
				n = 1,
				e = 0,
				u = !1;

			function c(c) {
				var o = c.height + 1;
				return c.x0 = c.y0 = e, c.x1 = t, c.y1 = n / o, c.eachBefore(function(t, n) {
					return function(r) {
						r.children && Object(i.a)(r, r.x0, t * (r.depth + 1) / n, r.x1, t * (r.depth + 2) / n);
						var u = r.x0,
							c = r.y0,
							o = r.x1 - e,
							a = r.y1 - e;
						o < u && (u = o = (u + o) / 2), a < c && (c = a = (c + a) / 2), r.x0 = u, r.y0 = c, r.x1 = o, r.y1 = a
					}
				}(n, o)), u && c.eachBefore(r.a), c
			}
			return c.round = function(t) {
				return arguments.length ? (u = !!t, c) : u
			}, c.size = function(e) {
				return arguments.length ? (t = +e[0], n = +e[1], c) : [t, n]
			}, c.padding = function(t) {
				return arguments.length ? (e = +t, c) : e
			}, c
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(78),
			i = e(77),
			u = "$",
			c = {
				depth: -1
			},
			o = {};

		function a(t) {
			return t.id
		}

		function f(t) {
			return t.parentId
		}
		n.a = function() {
			var t = a,
				n = f;

			function e(e) {
				var r, a, f, s, l, h, d, b = e.length,
					v = new Array(b),
					p = {};
				for (a = 0; a < b; ++a) r = e[a], l = v[a] = new i.a(r), null != (h = t(r, a, e)) && (h += "") && (p[d = u + (l.id = h)] = d in p ? o : l);
				for (a = 0; a < b; ++a)
					if (l = v[a], null != (h = n(e[a], a, e)) && (h += "")) {
						if (!(s = p[u + h])) throw new Error("missing: " + h);
						if (s === o) throw new Error("ambiguous: " + h);
						s.children ? s.children.push(l) : s.children = [l], l.parent = s
					} else {
						if (f) throw new Error("multiple roots");
						f = l
					} if (!f) throw new Error("no root");
				if (f.parent = c, f.eachBefore(function(t) {
						t.depth = t.parent.depth + 1, --b
					}).eachBefore(i.b), f.parent = null, b > 0) throw new Error("cycle");
				return f
			}
			return e.id = function(n) {
				return arguments.length ? (t = Object(r.b)(n), e) : t
			}, e.parentId = function(t) {
				return arguments.length ? (n = Object(r.b)(t), e) : n
			}, e
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(77);

		function i(t, n) {
			return t.parent === n.parent ? 1 : 2
		}

		function u(t) {
			var n = t.children;
			return n ? n[0] : t.t
		}

		function c(t) {
			var n = t.children;
			return n ? n[n.length - 1] : t.t
		}

		function o(t, n, e) {
			var r = e / (n.i - t.i);
			n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e
		}

		function a(t, n, e) {
			return t.a.parent === n.parent ? t.a : e
		}

		function f(t, n) {
			this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n
		}
		f.prototype = Object.create(r.a.prototype), n.a = function() {
			var t = i,
				n = 1,
				e = 1,
				r = null;

			function s(i) {
				var u = function(t) {
					for (var n, e, r, i, u, c = new f(t, 0), o = [c]; n = o.pop();)
						if (r = n._.children)
							for (n.children = new Array(u = r.length), i = u - 1; i >= 0; --i) o.push(e = n.children[i] = new f(r[i], i)), e.parent = n;
					return (c.parent = new f(null, 0)).children = [c], c
				}(i);
				if (u.eachAfter(l), u.parent.m = -u.z, u.eachBefore(h), r) i.eachBefore(d);
				else {
					var c = i,
						o = i,
						a = i;
					i.eachBefore(function(t) {
						t.x < c.x && (c = t), t.x > o.x && (o = t), t.depth > a.depth && (a = t)
					});
					var s = c === o ? 1 : t(c, o) / 2,
						b = s - c.x,
						v = n / (o.x + s + b),
						p = e / (a.depth || 1);
					i.eachBefore(function(t) {
						t.x = (t.x + b) * v, t.y = t.depth * p
					})
				}
				return i
			}

			function l(n) {
				var e = n.children,
					r = n.parent.children,
					i = n.i ? r[n.i - 1] : null;
				if (e) {
					! function(t) {
						for (var n, e = 0, r = 0, i = t.children, u = i.length; --u >= 0;)(n = i[u]).z += e, n.m += e, e += n.s + (r += n.c)
					}(n);
					var f = (e[0].z + e[e.length - 1].z) / 2;
					i ? (n.z = i.z + t(n._, i._), n.m = n.z - f) : n.z = f
				} else i && (n.z = i.z + t(n._, i._));
				n.parent.A = function(n, e, r) {
					if (e) {
						for (var i, f = n, s = n, l = e, h = f.parent.children[0], d = f.m, b = s.m, v = l.m, p = h.m; l = c(l), f = u(f), l && f;) h = u(h), (s = c(s)).a = n, (i = l.z + v - f.z - d + t(l._, f._)) > 0 && (o(a(l, n, r), n, i), d += i, b += i), v += l.m, d += f.m, p += h.m, b += s.m;
						l && !c(s) && (s.t = l, s.m += v - b), f && !u(h) && (h.t = f, h.m += d - p, r = n)
					}
					return r
				}(n, i, n.parent.A || r[0])
			}

			function h(t) {
				t._.x = t.z + t.parent.m, t.m += t.parent.m
			}

			function d(t) {
				t.x *= n, t.y = t.depth * e
			}
			return s.separation = function(n) {
				return arguments.length ? (t = n, s) : t
			}, s.size = function(t) {
				return arguments.length ? (r = !1, n = +t[0], e = +t[1], s) : r ? null : [n, e]
			}, s.nodeSize = function(t) {
				return arguments.length ? (r = !0, n = +t[0], e = +t[1], s) : r ? [n, e] : null
			}, s
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(145),
			i = e(79),
			u = e(78),
			c = e(144);
		n.a = function() {
			var t = i.a,
				n = !1,
				e = 1,
				o = 1,
				a = [0],
				f = c.a,
				s = c.a,
				l = c.a,
				h = c.a,
				d = c.a;

			function b(t) {
				return t.x0 = t.y0 = 0, t.x1 = e, t.y1 = o, t.eachBefore(v), a = [0], n && t.eachBefore(r.a), t
			}

			function v(n) {
				var e = a[n.depth],
					r = n.x0 + e,
					i = n.y0 + e,
					u = n.x1 - e,
					c = n.y1 - e;
				u < r && (r = u = (r + u) / 2), c < i && (i = c = (i + c) / 2), n.x0 = r, n.y0 = i, n.x1 = u, n.y1 = c, n.children && (e = a[n.depth + 1] = f(n) / 2, r += d(n) - e, i += s(n) - e, (u -= l(n) - e) < r && (r = u = (r + u) / 2), (c -= h(n) - e) < i && (i = c = (i + c) / 2), t(n, r, i, u, c))
			}
			return b.round = function(t) {
				return arguments.length ? (n = !!t, b) : n
			}, b.size = function(t) {
				return arguments.length ? (e = +t[0], o = +t[1], b) : [e, o]
			}, b.tile = function(n) {
				return arguments.length ? (t = Object(u.b)(n), b) : t
			}, b.padding = function(t) {
				return arguments.length ? b.paddingInner(t).paddingOuter(t) : b.paddingInner()
			}, b.paddingInner = function(t) {
				return arguments.length ? (f = "function" == typeof t ? t : Object(c.b)(+t), b) : f
			}, b.paddingOuter = function(t) {
				return arguments.length ? b.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : b.paddingTop()
			}, b.paddingTop = function(t) {
				return arguments.length ? (s = "function" == typeof t ? t : Object(c.b)(+t), b) : s
			}, b.paddingRight = function(t) {
				return arguments.length ? (l = "function" == typeof t ? t : Object(c.b)(+t), b) : l
			}, b.paddingBottom = function(t) {
				return arguments.length ? (h = "function" == typeof t ? t : Object(c.b)(+t), b) : h
			}, b.paddingLeft = function(t) {
				return arguments.length ? (d = "function" == typeof t ? t : Object(c.b)(+t), b) : d
			}, b
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n, e, r, i) {
			var u, c, o = t.children,
				a = o.length,
				f = new Array(a + 1);
			for (f[0] = c = u = 0; u < a; ++u) f[u + 1] = c += o[u].value;
			! function t(n, e, r, i, u, c, a) {
				if (n >= e - 1) {
					var s = o[n];
					return s.x0 = i, s.y0 = u, s.x1 = c, void(s.y1 = a)
				}
				var l = f[n],
					h = r / 2 + l,
					d = n + 1,
					b = e - 1;
				for (; d < b;) {
					var v = d + b >>> 1;
					f[v] < h ? d = v + 1 : b = v
				}
				h - f[d - 1] < f[d] - h && n + 1 < d && --d;
				var p = f[d] - l,
					g = r - p;
				if (c - i > a - u) {
					var _ = (i * g + c * p) / r;
					t(n, d, p, i, u, _, a), t(d, e, g, _, u, c, a)
				} else {
					var y = (u * g + a * p) / r;
					t(n, d, p, i, u, c, y), t(d, e, g, i, y, c, a)
				}
			}(0, a, t.value, n, e, r, i)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(26),
			i = e(42);
		n.a = function(t, n, e, u, c) {
			(1 & t.depth ? i.a : r.a)(t, n, e, u, c)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(26),
			i = e(42),
			u = e(79);
		n.a = function t(n) {
			function e(t, e, c, o, a) {
				if ((f = t._squarify) && f.ratio === n)
					for (var f, s, l, h, d, b = -1, v = f.length, p = t.value; ++b < v;) {
						for (l = (s = f[b]).children, h = s.value = 0, d = l.length; h < d; ++h) s.value += l[h].value;
						s.dice ? Object(r.a)(s, e, c, o, c += (a - c) * s.value / p) : Object(i.a)(s, e, c, e += (o - e) * s.value / p, a), p -= s.value
					} else t._squarify = f = Object(u.c)(n, t, e, c, o, a), f.ratio = n
			}
			return e.ratio = function(n) {
				return t((n = +n) > 1 ? n : 1)
			}, e
		}(u.b)
	}, function(t, n, e) {
		"use strict";
		var r = e(376);
		e.d(n, "a", function() {
			return r.a
		});
		var i = e(377);
		e.d(n, "b", function() {
			return i.a
		});
		var u = e(378);
		e.d(n, "d", function() {
			return u.a
		});
		var c = e(380);
		e.d(n, "c", function() {
			return c.a
		});
		var o = e(381);
		e.d(n, "e", function() {
			return o.a
		})
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			for (var n, e = -1, r = t.length, i = t[r - 1], u = 0; ++e < r;) n = i, i = t[e], u += n[1] * i[0] - n[0] * i[1];
			return u / 2
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			for (var n, e, r = -1, i = t.length, u = 0, c = 0, o = t[i - 1], a = 0; ++r < i;) n = o, o = t[r], a += e = n[0] * o[1] - o[0] * n[1], u += (n[0] + o[0]) * e, c += (n[1] + o[1]) * e;
			return [u / (a *= 3), c / a]
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(379);

		function i(t, n) {
			return t[0] - n[0] || t[1] - n[1]
		}

		function u(t) {
			for (var n = t.length, e = [0, 1], i = 2, u = 2; u < n; ++u) {
				for (; i > 1 && Object(r.a)(t[e[i - 2]], t[e[i - 1]], t[u]) <= 0;) --i;
				e[i++] = u
			}
			return e.slice(0, i)
		}
		n.a = function(t) {
			if ((e = t.length) < 3) return null;
			var n, e, r = new Array(e),
				c = new Array(e);
			for (n = 0; n < e; ++n) r[n] = [+t[n][0], +t[n][1], n];
			for (r.sort(i), n = 0; n < e; ++n) c[n] = [r[n][0], -r[n][1]];
			var o = u(r),
				a = u(c),
				f = a[0] === o[0],
				s = a[a.length - 1] === o[o.length - 1],
				l = [];
			for (n = o.length - 1; n >= 0; --n) l.push(t[r[o[n]][2]]);
			for (n = +f; n < a.length - s; ++n) l.push(t[r[a[n]][2]]);
			return l
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n, e) {
			return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0])
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			for (var e, r, i = t.length, u = t[i - 1], c = n[0], o = n[1], a = u[0], f = u[1], s = !1, l = 0; l < i; ++l) e = (u = t[l])[0], (r = u[1]) > o != f > o && c < (a - e) * (o - r) / (f - r) + e && (s = !s), a = e, f = r;
			return s
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			for (var n, e, r = -1, i = t.length, u = t[i - 1], c = u[0], o = u[1], a = 0; ++r < i;) n = c, e = o, n -= c = (u = t[r])[0], e -= o = u[1], a += Math.sqrt(n * n + e * e);
			return a
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(383);
		e.d(n, "a", function() {
			return r.a
		})
	}, function(t, n, e) {
		"use strict";
		n.a = s;
		var r = e(384),
			i = {};

		function u(t) {
			this._size = t, this._call = this._error = null, this._tasks = [], this._data = [], this._waiting = this._active = this._ended = this._start = 0
		}

		function c(t) {
			if (!t._start) try {
				! function(t) {
					for (; t._start = t._waiting && t._active < t._size;) {
						var n = t._ended + t._active,
							e = t._tasks[n],
							r = e.length - 1,
							u = e[r];
						e[r] = o(t, n), --t._waiting, ++t._active, e = u.apply(null, e), t._tasks[n] && (t._tasks[n] = e || i)
					}
				}(t)
			} catch (n) {
				if (t._tasks[t._ended + t._active - 1]) a(t, n);
				else if (!t._data) throw n
			}
		}

		function o(t, n) {
			return function(e, r) {
				t._tasks[n] && (--t._active, ++t._ended, t._tasks[n] = null, null == t._error && (null != e ? a(t, e) : (t._data[n] = r, t._waiting ? c(t) : f(t))))
			}
		}

		function a(t, n) {
			var e, r = t._tasks.length;
			for (t._error = n, t._data = void 0, t._waiting = NaN; --r >= 0;)
				if ((e = t._tasks[r]) && (t._tasks[r] = null, e.abort)) try {
					e.abort()
				} catch (n) {}
			t._active = NaN, f(t)
		}

		function f(t) {
			if (!t._active && t._call) {
				var n = t._data;
				t._data = void 0, t._call(t._error, n)
			}
		}

		function s(t) {
			if (null == t) t = 1 / 0;
			else if (!((t = +t) >= 1)) throw new Error("invalid concurrency");
			return new u(t)
		}
		u.prototype = s.prototype = {
			constructor: u,
			defer: function(t) {
				if ("function" != typeof t) throw new Error("invalid callback");
				if (this._call) throw new Error("defer after await");
				if (null != this._error) return this;
				var n = r.a.call(arguments, 1);
				return n.push(t), ++this._waiting, this._tasks.push(n), c(this), this
			},
			abort: function() {
				return null == this._error && a(this, new Error("abort")), this
			},
			await: function(t) {
				if ("function" != typeof t) throw new Error("invalid callback");
				if (this._call) throw new Error("multiple await");
				return this._call = function(n, e) {
					t.apply(null, [n].concat(e))
				}, f(this), this
			},
			awaitAll: function(t) {
				if ("function" != typeof t) throw new Error("invalid callback");
				if (this._call) throw new Error("multiple await");
				return this._call = t, f(this), this
			}
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "a", function() {
			return r
		});
		var r = [].slice
	}, function(t, n, e) {
		"use strict";
		var r = e(386);
		e.d(n, "f", function() {
			return r.a
		});
		var i = e(146);
		e.d(n, "e", function() {
			return i.a
		});
		var u = e(387);
		e.d(n, "d", function() {
			return u.a
		});
		var c = e(388);
		e.d(n, "a", function() {
			return c.a
		});
		var o = e(147);
		e.d(n, "c", function() {
			return o.a
		});
		var a = e(389);
		e.d(n, "b", function() {
			return a.a
		})
	}, function(t, n, e) {
		"use strict";
		var r = e(20);
		n.a = function t(n) {
			function e(t, e) {
				return t = null == t ? 0 : +t, e = null == e ? 1 : +e, 1 === arguments.length ? (e = t, t = 0) : e -= t,
					function() {
						return n() * e + t
					}
			}
			return e.source = t, e
		}(r.a)
	}, function(t, n, e) {
		"use strict";
		var r = e(20),
			i = e(146);
		n.a = function t(n) {
			function e() {
				var t = i.a.source(n).apply(this, arguments);
				return function() {
					return Math.exp(t())
				}
			}
			return e.source = t, e
		}(r.a)
	}, function(t, n, e) {
		"use strict";
		var r = e(20),
			i = e(147);
		n.a = function t(n) {
			function e(t) {
				var e = i.a.source(n)(t);
				return function() {
					return e() / t
				}
			}
			return e.source = t, e
		}(r.a)
	}, function(t, n, e) {
		"use strict";
		var r = e(20);
		n.a = function t(n) {
			function e(t) {
				return function() {
					return -Math.log(1 - n()) / t
				}
			}
			return e.source = t, e
		}(r.a)
	}, function(t, n, e) {
		"use strict";
		var r = e(80);
		e.d(n, "d", function() {
			return r.a
		});
		var i = e(391);
		e.d(n, "b", function() {
			return i.a
		});
		var u = e(392);
		e.d(n, "c", function() {
			return u.a
		});
		var c = e(393);
		e.d(n, "e", function() {
			return c.a
		});
		var o = e(394);
		e.d(n, "g", function() {
			return o.a
		});
		var a = e(395);
		e.d(n, "a", function() {
			return a.a
		});
		var f = e(396);
		e.d(n, "f", function() {
			return f.a
		})
	}, function(t, n, e) {
		"use strict";
		var r = e(43);
		n.a = Object(r.a)("text/html", function(t) {
			return document.createRange().createContextualFragment(t.responseText)
		})
	}, function(t, n, e) {
		"use strict";
		var r = e(43);
		n.a = Object(r.a)("application/json", function(t) {
			return JSON.parse(t.responseText)
		})
	}, function(t, n, e) {
		"use strict";
		var r = e(43);
		n.a = Object(r.a)("text/plain", function(t) {
			return t.responseText
		})
	}, function(t, n, e) {
		"use strict";
		var r = e(43);
		n.a = Object(r.a)("application/xml", function(t) {
			var n = t.responseXML;
			if (!n) throw new Error("parse error");
			return n
		})
	}, function(t, n, e) {
		"use strict";
		var r = e(65),
			i = e(148);
		n.a = Object(i.a)("text/csv", r.c)
	}, function(t, n, e) {
		"use strict";
		var r = e(65),
			i = e(148);
		n.a = Object(i.a)("text/tab-separated-values", r.h)
	}, function(t, n, e) {
		"use strict";
		var r = e(398);
		e.d(n, "i", function() {
			return r.a
		}), e.d(n, "o", function() {
			return r.b
		});
		var i = e(399);
		e.d(n, "j", function() {
			return i.a
		});
		var u = e(27);
		e.d(n, "l", function() {
			return u.a
		});
		var c = e(401);
		e.d(n, "m", function() {
			return c.a
		});
		var o = e(149);
		e.d(n, "n", function() {
			return o.a
		}), e.d(n, "k", function() {
			return o.b
		});
		var a = e(402);
		e.d(n, "p", function() {
			return a.a
		}), e.d(n, "t", function() {
			return a.b
		});
		var f = e(403);
		e.d(n, "q", function() {
			return f.a
		});
		var s = e(404);
		e.d(n, "r", function() {
			return s.a
		});
		var l = e(405);
		e.d(n, "u", function() {
			return l.a
		});
		var h = e(152);
		e.d(n, "v", function() {
			return h.b
		});
		var d = e(421);
		e.d(n, "w", function() {
			return d.a
		});
		var b = e(422);
		e.d(n, "x", function() {
			return b.a
		});
		var v = e(423);
		e.d(n, "z", function() {
			return v.a
		});
		var p = e(424);
		e.d(n, "A", function() {
			return p.a
		});
		var g = e(425);
		e.d(n, "y", function() {
			return g.a
		});
		var _ = e(426);
		e.d(n, "b", function() {
			return _.a
		});
		var y = e(427);
		e.d(n, "f", function() {
			return y.b
		}), e.d(n, "h", function() {
			return y.c
		}), e.d(n, "a", function() {
			return y.a
		});
		var m = e(428);
		e.d(n, "g", function() {
			return m.a
		}), e.d(n, "d", function() {
			return m.c
		}), e.d(n, "c", function() {
			return m.b
		}), e.d(n, "e", function() {
			return m.d
		});
		var O = e(429);
		e.d(n, "s", function() {
			return O.a
		})
	}, function(t, n, e) {
		"use strict";
		n.a = u, n.b = function() {
			return function t(n) {
				var e = n.copy;
				n.padding = n.paddingOuter;
				delete n.paddingInner;
				delete n.paddingOuter;
				n.copy = function() {
					return t(e())
				};
				return n
			}(u().paddingInner(1))
		};
		var r = e(3),
			i = e(149);

		function u() {
			var t, n, e = Object(i.a)().unknown(void 0),
				c = e.domain,
				o = e.range,
				a = [0, 1],
				f = !1,
				s = 0,
				l = 0,
				h = .5;

			function d() {
				var e = c().length,
					i = a[1] < a[0],
					u = a[i - 0],
					d = a[1 - i];
				t = (d - u) / Math.max(1, e - s + 2 * l), f && (t = Math.floor(t)), u += (d - u - t * (e - s)) * h, n = t * (1 - s), f && (u = Math.round(u), n = Math.round(n));
				var b = Object(r.s)(e).map(function(n) {
					return u + t * n
				});
				return o(i ? b.reverse() : b)
			}
			return delete e.unknown, e.domain = function(t) {
				return arguments.length ? (c(t), d()) : c()
			}, e.range = function(t) {
				return arguments.length ? (a = [+t[0], +t[1]], d()) : a.slice()
			}, e.rangeRound = function(t) {
				return a = [+t[0], +t[1]], f = !0, d()
			}, e.bandwidth = function() {
				return n
			}, e.step = function() {
				return t
			}, e.round = function(t) {
				return arguments.length ? (f = !!t, d()) : f
			}, e.padding = function(t) {
				return arguments.length ? (s = l = Math.max(0, Math.min(1, t)), d()) : s
			}, e.paddingInner = function(t) {
				return arguments.length ? (s = Math.max(0, Math.min(1, t)), d()) : s
			}, e.paddingOuter = function(t) {
				return arguments.length ? (l = Math.max(0, Math.min(1, t)), d()) : l
			}, e.align = function(t) {
				return arguments.length ? (h = Math.max(0, Math.min(1, t)), d()) : h
			}, e.copy = function() {
				return u().domain(c()).range(a).round(f).paddingInner(s).paddingOuter(l).align(h)
			}, d()
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function t() {
			var n = [0, 1];

			function e(t) {
				return +t
			}
			e.invert = e;
			e.domain = e.range = function(t) {
				return arguments.length ? (n = r.a.call(t, u.a), e) : n.slice()
			};
			e.copy = function() {
				return t().domain(n)
			};
			return Object(i.b)(e)
		};
		var r = e(15),
			i = e(27),
			u = e(150)
	}, function(t, n, e) {
		"use strict";
		var r = e(3),
			i = e(70);
		n.a = function(t, n, e) {
			var u, c = t[0],
				o = t[t.length - 1],
				a = Object(r.A)(c, o, null == n ? 10 : n);
			switch ((e = Object(i.e)(null == e ? ",f" : e)).type) {
				case "s":
					var f = Math.max(Math.abs(c), Math.abs(o));
					return null != e.precision || isNaN(u = Object(i.g)(a, f)) || (e.precision = u), Object(i.d)(e, f);
				case "":
				case "e":
				case "g":
				case "p":
				case "r":
					null != e.precision || isNaN(u = Object(i.h)(a, Math.max(Math.abs(c), Math.abs(o)))) || (e.precision = u - ("e" === e.type));
					break;
				case "f":
				case "%":
					null != e.precision || isNaN(u = Object(i.f)(a)) || (e.precision = u - 2 * ("%" === e.type))
			}
			return Object(i.a)(e)
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function t() {
			var n = Object(o.b)(a, f).domain([1, 10]),
				e = n.domain,
				u = 10,
				s = h(10),
				b = l(10);

			function v() {
				return s = h(u), b = l(u), e()[0] < 0 && (s = d(s), b = d(b)), n
			}
			n.base = function(t) {
				return arguments.length ? (u = +t, v()) : u
			};
			n.domain = function(t) {
				return arguments.length ? (e(t), v()) : e()
			};
			n.ticks = function(t) {
				var n, i = e(),
					c = i[0],
					o = i[i.length - 1];
				(n = o < c) && (h = c, c = o, o = h);
				var a, f, l, h = s(c),
					d = s(o),
					v = null == t ? 10 : +t,
					p = [];
				if (!(u % 1) && d - h < v) {
					if (h = Math.round(h) - 1, d = Math.round(d) + 1, c > 0) {
						for (; h < d; ++h)
							for (f = 1, a = b(h); f < u; ++f)
								if (!((l = a * f) < c)) {
									if (l > o) break;
									p.push(l)
								}
					} else
						for (; h < d; ++h)
							for (f = u - 1, a = b(h); f >= 1; --f)
								if (!((l = a * f) < c)) {
									if (l > o) break;
									p.push(l)
								}
				} else p = Object(r.B)(h, d, Math.min(d - h, v)).map(b);
				return n ? p.reverse() : p
			};
			n.tickFormat = function(t, e) {
				if (null == e && (e = 10 === u ? ".0e" : ","), "function" != typeof e && (e = Object(i.a)(e)), t === 1 / 0) return e;
				null == t && (t = 10);
				var r = Math.max(1, u * t / n.ticks().length);
				return function(t) {
					var n = t / b(Math.round(s(t)));
					return n * u < u - .5 && (n *= u), n <= r ? e(t) : ""
				}
			};
			n.nice = function() {
				return e(Object(c.a)(e(), {
					floor: function(t) {
						return b(Math.floor(s(t)))
					},
					ceil: function(t) {
						return b(Math.ceil(s(t)))
					}
				}))
			};
			n.copy = function() {
				return Object(o.a)(n, t().base(u))
			};
			return n
		};
		var r = e(3),
			i = e(70),
			u = e(81),
			c = e(151),
			o = e(44);

		function a(t, n) {
			return (n = Math.log(n / t)) ? function(e) {
				return Math.log(e / t) / n
			} : Object(u.a)(n)
		}

		function f(t, n) {
			return t < 0 ? function(e) {
				return -Math.pow(-n, e) * Math.pow(-t, 1 - e)
			} : function(e) {
				return Math.pow(n, e) * Math.pow(t, 1 - e)
			}
		}

		function s(t) {
			return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
		}

		function l(t) {
			return 10 === t ? s : t === Math.E ? Math.exp : function(n) {
				return Math.pow(t, n)
			}
		}

		function h(t) {
			return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function(n) {
				return Math.log(n) / t
			})
		}

		function d(t) {
			return function(n) {
				return -t(-n)
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.a = o, n.b = function() {
			return o().exponent(.5)
		};
		var r = e(81),
			i = e(27),
			u = e(44);

		function c(t, n) {
			return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n)
		}

		function o() {
			var t = 1,
				n = Object(u.b)(function(n, e) {
					return (e = c(e, t) - (n = c(n, t))) ? function(r) {
						return (c(r, t) - n) / e
					} : Object(r.a)(e)
				}, function(n, e) {
					return e = c(e, t) - (n = c(n, t)),
						function(r) {
							return c(n + e * r, 1 / t)
						}
				}),
				e = n.domain;
			return n.exponent = function(n) {
				return arguments.length ? (t = +n, e(e())) : t
			}, n.copy = function() {
				return Object(u.a)(n, o().exponent(t))
			}, Object(i.b)(n)
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function t() {
			var n = [],
				e = [],
				u = [];

			function c() {
				var t = 0,
					i = Math.max(1, e.length);
				for (u = new Array(i - 1); ++t < i;) u[t - 1] = Object(r.r)(n, t / i);
				return o
			}

			function o(t) {
				if (!isNaN(t = +t)) return e[Object(r.b)(u, t)]
			}
			o.invertExtent = function(t) {
				var r = e.indexOf(t);
				return r < 0 ? [NaN, NaN] : [r > 0 ? u[r - 1] : n[0], r < u.length ? u[r] : n[n.length - 1]]
			};
			o.domain = function(t) {
				if (!arguments.length) return n.slice();
				n = [];
				for (var e, i = 0, u = t.length; i < u; ++i) null == (e = t[i]) || isNaN(e = +e) || n.push(e);
				return n.sort(r.a), c()
			};
			o.range = function(t) {
				return arguments.length ? (e = i.b.call(t), c()) : e.slice()
			};
			o.quantiles = function() {
				return u.slice()
			};
			o.copy = function() {
				return t().domain(n).range(e)
			};
			return o
		};
		var r = e(3),
			i = e(15)
	}, function(t, n, e) {
		"use strict";
		n.a = function t() {
			var n = 0,
				e = 1,
				c = 1,
				o = [.5],
				a = [0, 1];

			function f(t) {
				if (t <= t) return a[Object(r.b)(o, t, 0, c)]
			}

			function s() {
				var t = -1;
				for (o = new Array(c); ++t < c;) o[t] = ((t + 1) * e - (t - c) * n) / (c + 1);
				return f
			}
			f.domain = function(t) {
				return arguments.length ? (n = +t[0], e = +t[1], s()) : [n, e]
			};
			f.range = function(t) {
				return arguments.length ? (c = (a = i.b.call(t)).length - 1, s()) : a.slice()
			};
			f.invertExtent = function(t) {
				var r = a.indexOf(t);
				return r < 0 ? [NaN, NaN] : r < 1 ? [n, o[0]] : r >= c ? [o[c - 1], e] : [o[r - 1], o[r]]
			};
			f.copy = function() {
				return t().domain([n, e]).range(a)
			};
			return Object(u.b)(f)
		};
		var r = e(3),
			i = e(15),
			u = e(27)
	}, function(t, n, e) {
		"use strict";
		n.a = function t() {
			var n = [.5],
				e = [0, 1],
				u = 1;

			function c(t) {
				if (t <= t) return e[Object(r.b)(n, t, 0, u)]
			}
			c.domain = function(t) {
				return arguments.length ? (n = i.b.call(t), u = Math.min(n.length, e.length - 1), c) : n.slice()
			};
			c.range = function(t) {
				return arguments.length ? (e = i.b.call(t), u = Math.min(n.length, e.length - 1), c) : e.slice()
			};
			c.invertExtent = function(t) {
				var r = e.indexOf(t);
				return [n[r - 1], n[r]]
			};
			c.copy = function() {
				return t().domain(n).range(e)
			};
			return c
		};
		var r = e(3),
			i = e(15)
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return u
		});
		var r = e(2),
			i = Object(r.a)(function() {}, function(t, n) {
				t.setTime(+t + n)
			}, function(t, n) {
				return n - t
			});
		i.every = function(t) {
			return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Object(r.a)(function(n) {
				n.setTime(Math.floor(n / t) * t)
			}, function(n, e) {
				n.setTime(+n + e * t)
			}, function(n, e) {
				return (e - n) / t
			}) : i : null
		}, n.a = i;
		var u = i.range
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return c
		});
		var r = e(2),
			i = e(9),
			u = Object(r.a)(function(t) {
				t.setTime(Math.floor(t / i.d) * i.d)
			}, function(t, n) {
				t.setTime(+t + n * i.d)
			}, function(t, n) {
				return (n - t) / i.d
			}, function(t) {
				return t.getUTCSeconds()
			});
		n.a = u;
		var c = u.range
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return c
		});
		var r = e(2),
			i = e(9),
			u = Object(r.a)(function(t) {
				t.setTime(Math.floor(t / i.c) * i.c)
			}, function(t, n) {
				t.setTime(+t + n * i.c)
			}, function(t, n) {
				return (n - t) / i.c
			}, function(t) {
				return t.getMinutes()
			});
		n.a = u;
		var c = u.range
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return c
		});
		var r = e(2),
			i = e(9),
			u = Object(r.a)(function(t) {
				var n = t.getTimezoneOffset() * i.c % i.b;
				n < 0 && (n += i.b), t.setTime(Math.floor((+t - n) / i.b) * i.b + n)
			}, function(t, n) {
				t.setTime(+t + n * i.b)
			}, function(t, n) {
				return (n - t) / i.b
			}, function(t) {
				return t.getHours()
			});
		n.a = u;
		var c = u.range
	}, function(t, n, e) {
		"use strict";
		e.d(n, "a", function() {
			return c
		});
		var r = e(2),
			i = e(9),
			u = Object(r.a)(function(t) {
				t.setHours(0, 0, 0, 0)
			}, function(t, n) {
				t.setDate(t.getDate() + n)
			}, function(t, n) {
				return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * i.c) / i.a
			}, function(t) {
				return t.getDate() - 1
			});
		n.b = u;
		var c = u.range
	}, function(t, n, e) {
		"use strict";
		e.d(n, "g", function() {
			return c
		}), e.d(n, "c", function() {
			return o
		}), e.d(n, "k", function() {
			return a
		}), e.d(n, "m", function() {
			return f
		}), e.d(n, "i", function() {
			return s
		}), e.d(n, "a", function() {
			return l
		}), e.d(n, "e", function() {
			return h
		}), e.d(n, "h", function() {
			return d
		}), e.d(n, "d", function() {
			return b
		}), e.d(n, "l", function() {
			return v
		}), e.d(n, "n", function() {
			return p
		}), e.d(n, "j", function() {
			return g
		}), e.d(n, "b", function() {
			return _
		}), e.d(n, "f", function() {
			return y
		});
		var r = e(2),
			i = e(9);

		function u(t) {
			return Object(r.a)(function(n) {
				n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
			}, function(t, n) {
				t.setDate(t.getDate() + 7 * n)
			}, function(t, n) {
				return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * i.c) / i.e
			})
		}
		var c = u(0),
			o = u(1),
			a = u(2),
			f = u(3),
			s = u(4),
			l = u(5),
			h = u(6),
			d = c.range,
			b = o.range,
			v = a.range,
			p = f.range,
			g = s.range,
			_ = l.range,
			y = h.range
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return u
		});
		var r = e(2),
			i = Object(r.a)(function(t) {
				t.setDate(1), t.setHours(0, 0, 0, 0)
			}, function(t, n) {
				t.setMonth(t.getMonth() + n)
			}, function(t, n) {
				return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
			}, function(t) {
				return t.getMonth()
			});
		n.a = i;
		var u = i.range
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return u
		});
		var r = e(2),
			i = Object(r.a)(function(t) {
				t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
			}, function(t, n) {
				t.setFullYear(t.getFullYear() + n)
			}, function(t, n) {
				return n.getFullYear() - t.getFullYear()
			}, function(t) {
				return t.getFullYear()
			});
		i.every = function(t) {
			return isFinite(t = Math.floor(t)) && t > 0 ? Object(r.a)(function(n) {
				n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
			}, function(n, e) {
				n.setFullYear(n.getFullYear() + e * t)
			}) : null
		}, n.a = i;
		var u = i.range
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return c
		});
		var r = e(2),
			i = e(9),
			u = Object(r.a)(function(t) {
				t.setUTCSeconds(0, 0)
			}, function(t, n) {
				t.setTime(+t + n * i.c)
			}, function(t, n) {
				return (n - t) / i.c
			}, function(t) {
				return t.getUTCMinutes()
			});
		n.a = u;
		var c = u.range
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return c
		});
		var r = e(2),
			i = e(9),
			u = Object(r.a)(function(t) {
				t.setUTCMinutes(0, 0, 0)
			}, function(t, n) {
				t.setTime(+t + n * i.b)
			}, function(t, n) {
				return (n - t) / i.b
			}, function(t) {
				return t.getUTCHours()
			});
		n.a = u;
		var c = u.range
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return c
		});
		var r = e(2),
			i = e(9),
			u = Object(r.a)(function(t) {
				t.setUTCHours(0, 0, 0, 0)
			}, function(t, n) {
				t.setUTCDate(t.getUTCDate() + n)
			}, function(t, n) {
				return (n - t) / i.a
			}, function(t) {
				return t.getUTCDate() - 1
			});
		n.a = u;
		var c = u.range
	}, function(t, n, e) {
		"use strict";
		e.d(n, "g", function() {
			return c
		}), e.d(n, "c", function() {
			return o
		}), e.d(n, "k", function() {
			return a
		}), e.d(n, "m", function() {
			return f
		}), e.d(n, "i", function() {
			return s
		}), e.d(n, "a", function() {
			return l
		}), e.d(n, "e", function() {
			return h
		}), e.d(n, "h", function() {
			return d
		}), e.d(n, "d", function() {
			return b
		}), e.d(n, "l", function() {
			return v
		}), e.d(n, "n", function() {
			return p
		}), e.d(n, "j", function() {
			return g
		}), e.d(n, "b", function() {
			return _
		}), e.d(n, "f", function() {
			return y
		});
		var r = e(2),
			i = e(9);

		function u(t) {
			return Object(r.a)(function(n) {
				n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
			}, function(t, n) {
				t.setUTCDate(t.getUTCDate() + 7 * n)
			}, function(t, n) {
				return (n - t) / i.e
			})
		}
		var c = u(0),
			o = u(1),
			a = u(2),
			f = u(3),
			s = u(4),
			l = u(5),
			h = u(6),
			d = c.range,
			b = o.range,
			v = a.range,
			p = f.range,
			g = s.range,
			_ = l.range,
			y = h.range
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return u
		});
		var r = e(2),
			i = Object(r.a)(function(t) {
				t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
			}, function(t, n) {
				t.setUTCMonth(t.getUTCMonth() + n)
			}, function(t, n) {
				return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
			}, function(t) {
				return t.getUTCMonth()
			});
		n.a = i;
		var u = i.range
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return u
		});
		var r = e(2),
			i = Object(r.a)(function(t) {
				t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
			}, function(t, n) {
				t.setUTCFullYear(t.getUTCFullYear() + n)
			}, function(t, n) {
				return n.getUTCFullYear() - t.getUTCFullYear()
			}, function(t) {
				return t.getUTCFullYear()
			});
		i.every = function(t) {
			return isFinite(t = Math.floor(t)) && t > 0 ? Object(r.a)(function(n) {
				n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
			}, function(n, e) {
				n.setUTCFullYear(n.getUTCFullYear() + e * t)
			}) : null
		}, n.a = i;
		var u = i.range
	}, function(t, n, e) {
		"use strict";
		var r = e(154),
			i = e(83);
		var u = +new Date("2000-01-01T00:00:00.000Z") ? function(t) {
			var n = new Date(t);
			return isNaN(n) ? null : n
		} : Object(i.e)(r.b);
		n.a = u
	}, function(t, n, e) {
		"use strict";
		var r = e(152),
			i = e(82),
			u = e(45);
		n.a = function() {
			return Object(r.a)(u._7, u.R, u._5, u.F, u.J, u.N, u.V, u.L, i.g).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)])
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(28);
		n.a = Object(r.a)("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf")
	}, function(t, n, e) {
		"use strict";
		var r = e(28);
		n.a = Object(r.a)("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6")
	}, function(t, n, e) {
		"use strict";
		var r = e(28);
		n.a = Object(r.a)("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9")
	}, function(t, n, e) {
		"use strict";
		var r = e(28);
		n.a = Object(r.a)("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5")
	}, function(t, n, e) {
		"use strict";
		var r = e(7),
			i = e(5);
		n.a = Object(i.f)(Object(r.b)(300, .5, 0), Object(r.b)(-240, .5, 1))
	}, function(t, n, e) {
		"use strict";
		e.d(n, "c", function() {
			return u
		}), e.d(n, "a", function() {
			return c
		});
		var r = e(7),
			i = e(5),
			u = Object(i.f)(Object(r.b)(-100, .75, .35), Object(r.b)(80, 1.5, .8)),
			c = Object(i.f)(Object(r.b)(260, .75, .35), Object(r.b)(80, 1.5, .8)),
			o = Object(r.b)();
		n.b = function(t) {
			(t < 0 || t > 1) && (t -= Math.floor(t));
			var n = Math.abs(t - .5);
			return o.h = 360 * t - 100, o.s = 1.5 - 1.5 * n, o.l = .8 - .9 * n, o + ""
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "c", function() {
			return u
		}), e.d(n, "b", function() {
			return c
		}), e.d(n, "d", function() {
			return o
		});
		var r = e(28);

		function i(t) {
			var n = t.length;
			return function(e) {
				return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
			}
		}
		n.a = i(Object(r.a)("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
		var u = i(Object(r.a)("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
			c = i(Object(r.a)("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
			o = i(Object(r.a)("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"))
	}, function(t, n, e) {
		"use strict";
		n.a = function t(n) {
			var e = 0,
				i = 1,
				u = !1;

			function c(t) {
				var r = (t - e) / (i - e);
				return n(u ? Math.max(0, Math.min(1, r)) : r)
			}
			c.domain = function(t) {
				return arguments.length ? (e = +t[0], i = +t[1], c) : [e, i]
			};
			c.clamp = function(t) {
				return arguments.length ? (u = !!t, c) : u
			};
			c.interpolator = function(t) {
				return arguments.length ? (n = t, c) : n
			};
			c.copy = function() {
				return t(n).domain([e, i]).clamp(u)
			};
			return Object(r.b)(c)
		};
		var r = e(27)
	}, function(t, n, e) {
		"use strict";
		var r = e(13),
			i = e(16),
			u = e(29);

		function c(t) {
			return t.innerRadius
		}

		function o(t) {
			return t.outerRadius
		}

		function a(t) {
			return t.startAngle
		}

		function f(t) {
			return t.endAngle
		}

		function s(t) {
			return t && t.padAngle
		}

		function l(t, n, e, r, i, c, o) {
			var a = t - e,
				f = n - r,
				s = (o ? c : -c) / Object(u.l)(a * a + f * f),
				l = s * f,
				h = -s * a,
				d = t + l,
				b = n + h,
				v = e + l,
				p = r + h,
				g = (d + v) / 2,
				_ = (b + p) / 2,
				y = v - d,
				m = p - b,
				O = y * y + m * m,
				j = i - c,
				x = d * p - v * b,
				w = (m < 0 ? -1 : 1) * Object(u.l)(Object(u.h)(0, j * j * O - x * x)),
				M = (x * m - y * w) / O,
				k = (-x * y - m * w) / O,
				T = (x * m + y * w) / O,
				N = (-x * y + m * w) / O,
				E = M - g,
				S = k - _,
				A = T - g,
				C = N - _;
			return E * E + S * S > A * A + C * C && (M = T, k = N), {
				cx: M,
				cy: k,
				x01: -l,
				y01: -h,
				x11: M * (i / j - 1),
				y11: k * (i / j - 1)
			}
		}
		n.a = function() {
			var t = c,
				n = o,
				e = Object(i.a)(0),
				h = null,
				d = a,
				b = f,
				v = s,
				p = null;

			function g() {
				var i, c, o = +t.apply(this, arguments),
					a = +n.apply(this, arguments),
					f = d.apply(this, arguments) - u.g,
					s = b.apply(this, arguments) - u.g,
					g = Object(u.a)(s - f),
					_ = s > f;
				if (p || (p = i = Object(r.a)()), a < o && (c = a, a = o, o = c), a > u.f)
					if (g > u.m - u.f) p.moveTo(a * Object(u.e)(f), a * Object(u.k)(f)), p.arc(0, 0, a, f, s, !_), o > u.f && (p.moveTo(o * Object(u.e)(s), o * Object(u.k)(s)), p.arc(0, 0, o, s, f, _));
					else {
						var y, m, O = f,
							j = s,
							x = f,
							w = s,
							M = g,
							k = g,
							T = v.apply(this, arguments) / 2,
							N = T > u.f && (h ? +h.apply(this, arguments) : Object(u.l)(o * o + a * a)),
							E = Object(u.i)(Object(u.a)(a - o) / 2, +e.apply(this, arguments)),
							S = E,
							A = E;
						if (N > u.f) {
							var C = Object(u.c)(N / o * Object(u.k)(T)),
								z = Object(u.c)(N / a * Object(u.k)(T));
							(M -= 2 * C) > u.f ? (x += C *= _ ? 1 : -1, w -= C) : (M = 0, x = w = (f + s) / 2), (k -= 2 * z) > u.f ? (O += z *= _ ? 1 : -1, j -= z) : (k = 0, O = j = (f + s) / 2)
						}
						var P = a * Object(u.e)(O),
							q = a * Object(u.k)(O),
							R = o * Object(u.e)(w),
							D = o * Object(u.k)(w);
						if (E > u.f) {
							var L = a * Object(u.e)(j),
								U = a * Object(u.k)(j),
								F = o * Object(u.e)(x),
								I = o * Object(u.k)(x);
							if (g < u.j) {
								var Y = M > u.f ? function(t, n, e, r, i, u, c, o) {
										var a = e - t,
											f = r - n,
											s = c - i,
											l = o - u,
											h = (s * (n - u) - l * (t - i)) / (l * a - s * f);
										return [t + h * a, n + h * f]
									}(P, q, F, I, L, U, R, D) : [R, D],
									B = P - Y[0],
									H = q - Y[1],
									X = L - Y[0],
									V = U - Y[1],
									W = 1 / Object(u.k)(Object(u.b)((B * X + H * V) / (Object(u.l)(B * B + H * H) * Object(u.l)(X * X + V * V))) / 2),
									G = Object(u.l)(Y[0] * Y[0] + Y[1] * Y[1]);
								S = Object(u.i)(E, (o - G) / (W - 1)), A = Object(u.i)(E, (a - G) / (W + 1))
							}
						}
						k > u.f ? A > u.f ? (y = l(F, I, P, q, a, A, _), m = l(L, U, R, D, a, A, _), p.moveTo(y.cx + y.x01, y.cy + y.y01), A < E ? p.arc(y.cx, y.cy, A, Object(u.d)(y.y01, y.x01), Object(u.d)(m.y01, m.x01), !_) : (p.arc(y.cx, y.cy, A, Object(u.d)(y.y01, y.x01), Object(u.d)(y.y11, y.x11), !_), p.arc(0, 0, a, Object(u.d)(y.cy + y.y11, y.cx + y.x11), Object(u.d)(m.cy + m.y11, m.cx + m.x11), !_), p.arc(m.cx, m.cy, A, Object(u.d)(m.y11, m.x11), Object(u.d)(m.y01, m.x01), !_))) : (p.moveTo(P, q), p.arc(0, 0, a, O, j, !_)) : p.moveTo(P, q), o > u.f && M > u.f ? S > u.f ? (y = l(R, D, L, U, o, -S, _), m = l(P, q, F, I, o, -S, _), p.lineTo(y.cx + y.x01, y.cy + y.y01), S < E ? p.arc(y.cx, y.cy, S, Object(u.d)(y.y01, y.x01), Object(u.d)(m.y01, m.x01), !_) : (p.arc(y.cx, y.cy, S, Object(u.d)(y.y01, y.x01), Object(u.d)(y.y11, y.x11), !_), p.arc(0, 0, o, Object(u.d)(y.cy + y.y11, y.cx + y.x11), Object(u.d)(m.cy + m.y11, m.cx + m.x11), _), p.arc(m.cx, m.cy, S, Object(u.d)(m.y11, m.x11), Object(u.d)(m.y01, m.x01), !_))) : p.arc(0, 0, o, w, x, _) : p.lineTo(R, D)
					}
				else p.moveTo(0, 0);
				if (p.closePath(), i) return p = null, i + "" || null
			}
			return g.centroid = function() {
				var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
					r = (+d.apply(this, arguments) + +b.apply(this, arguments)) / 2 - u.j / 2;
				return [Object(u.e)(r) * e, Object(u.k)(r) * e]
			}, g.innerRadius = function(n) {
				return arguments.length ? (t = "function" == typeof n ? n : Object(i.a)(+n), g) : t
			}, g.outerRadius = function(t) {
				return arguments.length ? (n = "function" == typeof t ? t : Object(i.a)(+t), g) : n
			}, g.cornerRadius = function(t) {
				return arguments.length ? (e = "function" == typeof t ? t : Object(i.a)(+t), g) : e
			}, g.padRadius = function(t) {
				return arguments.length ? (h = null == t ? null : "function" == typeof t ? t : Object(i.a)(+t), g) : h
			}, g.startAngle = function(t) {
				return arguments.length ? (d = "function" == typeof t ? t : Object(i.a)(+t), g) : d
			}, g.endAngle = function(t) {
				return arguments.length ? (b = "function" == typeof t ? t : Object(i.a)(+t), g) : b
			}, g.padAngle = function(t) {
				return arguments.length ? (v = "function" == typeof t ? t : Object(i.a)(+t), g) : v
			}, g.context = function(t) {
				return arguments.length ? (p = null == t ? null : t, g) : p
			}, g
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(16),
			i = e(432),
			u = e(433),
			c = e(29);
		n.a = function() {
			var t = u.a,
				n = i.a,
				e = null,
				o = Object(r.a)(0),
				a = Object(r.a)(c.m),
				f = Object(r.a)(0);

			function s(r) {
				var i, u, s, l, h, d = r.length,
					b = 0,
					v = new Array(d),
					p = new Array(d),
					g = +o.apply(this, arguments),
					_ = Math.min(c.m, Math.max(-c.m, a.apply(this, arguments) - g)),
					y = Math.min(Math.abs(_) / d, f.apply(this, arguments)),
					m = y * (_ < 0 ? -1 : 1);
				for (i = 0; i < d; ++i)(h = p[v[i] = i] = +t(r[i], i, r)) > 0 && (b += h);
				for (null != n ? v.sort(function(t, e) {
						return n(p[t], p[e])
					}) : null != e && v.sort(function(t, n) {
						return e(r[t], r[n])
					}), i = 0, s = b ? (_ - d * m) / b : 0; i < d; ++i, g = l) u = v[i], l = g + ((h = p[u]) > 0 ? h * s : 0) + m, p[u] = {
					data: r[u],
					index: i,
					value: h,
					startAngle: g,
					endAngle: l,
					padAngle: y
				};
				return p
			}
			return s.value = function(n) {
				return arguments.length ? (t = "function" == typeof n ? n : Object(r.a)(+n), s) : t
			}, s.sortValues = function(t) {
				return arguments.length ? (n = t, e = null, s) : n
			}, s.sort = function(t) {
				return arguments.length ? (e = t, n = null, s) : e
			}, s.startAngle = function(t) {
				return arguments.length ? (o = "function" == typeof t ? t : Object(r.a)(+t), s) : o
			}, s.endAngle = function(t) {
				return arguments.length ? (a = "function" == typeof t ? t : Object(r.a)(+t), s) : a
			}, s.padAngle = function(t) {
				return arguments.length ? (f = "function" == typeof t ? t : Object(r.a)(+t), s) : f
			}, s
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return t
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(156),
			i = e(155),
			u = e(157);
		n.a = function() {
			var t = Object(i.a)().curve(r.a),
				n = t.curve,
				e = t.lineX0,
				c = t.lineX1,
				o = t.lineY0,
				a = t.lineY1;
			return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function() {
				return Object(u.b)(e())
			}, delete t.lineX0, t.lineEndAngle = function() {
				return Object(u.b)(c())
			}, delete t.lineX1, t.lineInnerRadius = function() {
				return Object(u.b)(o())
			}, delete t.lineY0, t.lineOuterRadius = function() {
				return Object(u.b)(a())
			}, delete t.lineY1, t.curve = function(t) {
				return arguments.length ? n(Object(r.b)(t)) : n()._curve
			}, t
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function() {
			return s(l)
		}, n.c = function() {
			return s(h)
		}, n.b = function() {
			var t = s(d);
			return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t
		};
		var r = e(13),
			i = e(159),
			u = e(16),
			c = e(85),
			o = e(158);

		function a(t) {
			return t.source
		}

		function f(t) {
			return t.target
		}

		function s(t) {
			var n = a,
				e = f,
				o = c.a,
				s = c.b,
				l = null;

			function h() {
				var u, c = i.a.call(arguments),
					a = n.apply(this, c),
					f = e.apply(this, c);
				if (l || (l = u = Object(r.a)()), t(l, +o.apply(this, (c[0] = a, c)), +s.apply(this, c), +o.apply(this, (c[0] = f, c)), +s.apply(this, c)), u) return l = null, u + "" || null
			}
			return h.source = function(t) {
				return arguments.length ? (n = t, h) : n
			}, h.target = function(t) {
				return arguments.length ? (e = t, h) : e
			}, h.x = function(t) {
				return arguments.length ? (o = "function" == typeof t ? t : Object(u.a)(+t), h) : o
			}, h.y = function(t) {
				return arguments.length ? (s = "function" == typeof t ? t : Object(u.a)(+t), h) : s
			}, h.context = function(t) {
				return arguments.length ? (l = null == t ? null : t, h) : l
			}, h
		}

		function l(t, n, e, r, i) {
			t.moveTo(n, e), t.bezierCurveTo(n = (n + r) / 2, e, n, i, r, i)
		}

		function h(t, n, e, r, i) {
			t.moveTo(n, e), t.bezierCurveTo(n, e = (e + i) / 2, r, e, r, i)
		}

		function d(t, n, e, r, i) {
			var u = Object(o.a)(n, e),
				c = Object(o.a)(n, e = (e + i) / 2),
				a = Object(o.a)(r, e),
				f = Object(o.a)(r, i);
			t.moveTo(u[0], u[1]), t.bezierCurveTo(c[0], c[1], a[0], a[1], f[0], f[1])
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "b", function() {
			return h
		});
		var r = e(13),
			i = e(160),
			u = e(161),
			c = e(162),
			o = e(163),
			a = e(164),
			f = e(165),
			s = e(166),
			l = e(16),
			h = [i.a, u.a, c.a, a.a, o.a, f.a, s.a];
		n.a = function() {
			var t = Object(l.a)(i.a),
				n = Object(l.a)(64),
				e = null;

			function u() {
				var i;
				if (e || (e = i = Object(r.a)()), t.apply(this, arguments).draw(e, +n.apply(this, arguments)), i) return e = null, i + "" || null
			}
			return u.type = function(n) {
				return arguments.length ? (t = "function" == typeof n ? n : Object(l.a)(n), u) : t
			}, u.size = function(t) {
				return arguments.length ? (n = "function" == typeof t ? t : Object(l.a)(+t), u) : n
			}, u.context = function(t) {
				return arguments.length ? (e = null == t ? null : t, u) : e
			}, u
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(47),
			i = e(48);

		function u(t) {
			this._context = t
		}
		u.prototype = {
			areaStart: r.a,
			areaEnd: r.a,
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
			},
			lineEnd: function() {
				switch (this._point) {
					case 1:
						this._context.moveTo(this._x2, this._y2), this._context.closePath();
						break;
					case 2:
						this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
						break;
					case 3:
						this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
				}
			},
			point: function(t, n) {
				switch (t = +t, n = +n, this._point) {
					case 0:
						this._point = 1, this._x2 = t, this._y2 = n;
						break;
					case 1:
						this._point = 2, this._x3 = t, this._y3 = n;
						break;
					case 2:
						this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
						break;
					default:
						Object(i.c)(this, t, n)
				}
				this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
			}
		}, n.a = function(t) {
			return new u(t)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(48);

		function i(t) {
			this._context = t
		}
		i.prototype = {
			areaStart: function() {
				this._line = 0
			},
			areaEnd: function() {
				this._line = NaN
			},
			lineStart: function() {
				this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
			},
			lineEnd: function() {
				(this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
			},
			point: function(t, n) {
				switch (t = +t, n = +n, this._point) {
					case 0:
						this._point = 1;
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3;
						var e = (this._x0 + 4 * this._x1 + t) / 6,
							i = (this._y0 + 4 * this._y1 + n) / 6;
						this._line ? this._context.lineTo(e, i) : this._context.moveTo(e, i);
						break;
					case 3:
						this._point = 4;
					default:
						Object(r.c)(this, t, n)
				}
				this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
			}
		}, n.a = function(t) {
			return new i(t)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(48);

		function i(t, n) {
			this._basis = new r.a(t), this._beta = n
		}
		i.prototype = {
			lineStart: function() {
				this._x = [], this._y = [], this._basis.lineStart()
			},
			lineEnd: function() {
				var t = this._x,
					n = this._y,
					e = t.length - 1;
				if (e > 0)
					for (var r, i = t[0], u = n[0], c = t[e] - i, o = n[e] - u, a = -1; ++a <= e;) r = a / e, this._basis.point(this._beta * t[a] + (1 - this._beta) * (i + r * c), this._beta * n[a] + (1 - this._beta) * (u + r * o));
				this._x = this._y = null, this._basis.lineEnd()
			},
			point: function(t, n) {
				this._x.push(+t), this._y.push(+n)
			}
		}, n.a = function t(n) {
			function e(t) {
				return 1 === n ? new r.a(t) : new i(t, n)
			}
			return e.beta = function(n) {
				return t(+n)
			}, e
		}(.85)
	}, function(t, n, e) {
		"use strict";
		var r = e(167),
			i = e(47),
			u = e(86);

		function c(t, n) {
			this._context = t, this._alpha = n
		}
		c.prototype = {
			areaStart: i.a,
			areaEnd: i.a,
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
			},
			lineEnd: function() {
				switch (this._point) {
					case 1:
						this._context.moveTo(this._x3, this._y3), this._context.closePath();
						break;
					case 2:
						this._context.lineTo(this._x3, this._y3), this._context.closePath();
						break;
					case 3:
						this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
				}
			},
			point: function(t, n) {
				if (t = +t, n = +n, this._point) {
					var e = this._x2 - t,
						r = this._y2 - n;
					this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
				}
				switch (this._point) {
					case 0:
						this._point = 1, this._x3 = t, this._y3 = n;
						break;
					case 1:
						this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
						break;
					case 2:
						this._point = 3, this._x5 = t, this._y5 = n;
						break;
					default:
						Object(u.b)(this, t, n)
				}
				this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
			}
		}, n.a = function t(n) {
			function e(t) {
				return n ? new c(t, n) : new r.a(t, 0)
			}
			return e.alpha = function(n) {
				return t(+n)
			}, e
		}(.5)
	}, function(t, n, e) {
		"use strict";
		var r = e(168),
			i = e(86);

		function u(t, n) {
			this._context = t, this._alpha = n
		}
		u.prototype = {
			areaStart: function() {
				this._line = 0
			},
			areaEnd: function() {
				this._line = NaN
			},
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
			},
			lineEnd: function() {
				(this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
			},
			point: function(t, n) {
				if (t = +t, n = +n, this._point) {
					var e = this._x2 - t,
						r = this._y2 - n;
					this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
				}
				switch (this._point) {
					case 0:
						this._point = 1;
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
						break;
					case 3:
						this._point = 4;
					default:
						Object(i.b)(this, t, n)
				}
				this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
			}
		}, n.a = function t(n) {
			function e(t) {
				return n ? new u(t, n) : new r.a(t, 0)
			}
			return e.alpha = function(n) {
				return t(+n)
			}, e
		}(.5)
	}, function(t, n, e) {
		"use strict";
		var r = e(47);

		function i(t) {
			this._context = t
		}
		i.prototype = {
			areaStart: r.a,
			areaEnd: r.a,
			lineStart: function() {
				this._point = 0
			},
			lineEnd: function() {
				this._point && this._context.closePath()
			},
			point: function(t, n) {
				t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
			}
		}, n.a = function(t) {
			return new i(t)
		}
	}, function(t, n, e) {
		"use strict";

		function r(t) {
			return t < 0 ? -1 : 1
		}

		function i(t, n, e) {
			var i = t._x1 - t._x0,
				u = n - t._x1,
				c = (t._y1 - t._y0) / (i || u < 0 && -0),
				o = (e - t._y1) / (u || i < 0 && -0),
				a = (c * u + o * i) / (i + u);
			return (r(c) + r(o)) * Math.min(Math.abs(c), Math.abs(o), .5 * Math.abs(a)) || 0
		}

		function u(t, n) {
			var e = t._x1 - t._x0;
			return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
		}

		function c(t, n, e) {
			var r = t._x0,
				i = t._y0,
				u = t._x1,
				c = t._y1,
				o = (u - r) / 3;
			t._context.bezierCurveTo(r + o, i + o * n, u - o, c - o * e, u, c)
		}

		function o(t) {
			this._context = t
		}

		function a(t) {
			this._context = new f(t)
		}

		function f(t) {
			this._context = t
		}
		n.a = function(t) {
			return new o(t)
		}, n.b = function(t) {
			return new a(t)
		}, o.prototype = {
			areaStart: function() {
				this._line = 0
			},
			areaEnd: function() {
				this._line = NaN
			},
			lineStart: function() {
				this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
			},
			lineEnd: function() {
				switch (this._point) {
					case 2:
						this._context.lineTo(this._x1, this._y1);
						break;
					case 3:
						c(this, this._t0, u(this, this._t0))
				}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
			},
			point: function(t, n) {
				var e = NaN;
				if (n = +n, (t = +t) !== this._x1 || n !== this._y1) {
					switch (this._point) {
						case 0:
							this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
							break;
						case 1:
							this._point = 2;
							break;
						case 2:
							this._point = 3, c(this, u(this, e = i(this, t, n)), e);
							break;
						default:
							c(this, this._t0, e = i(this, t, n))
					}
					this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
				}
			}
		}, (a.prototype = Object.create(o.prototype)).point = function(t, n) {
			o.prototype.point.call(this, n, t)
		}, f.prototype = {
			moveTo: function(t, n) {
				this._context.moveTo(n, t)
			},
			closePath: function() {
				this._context.closePath()
			},
			lineTo: function(t, n) {
				this._context.lineTo(n, t)
			},
			bezierCurveTo: function(t, n, e, r, i, u) {
				this._context.bezierCurveTo(n, t, r, e, u, i)
			}
		}
	}, function(t, n, e) {
		"use strict";

		function r(t) {
			this._context = t
		}

		function i(t) {
			var n, e, r = t.length - 1,
				i = new Array(r),
				u = new Array(r),
				c = new Array(r);
			for (i[0] = 0, u[0] = 2, c[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) i[n] = 1, u[n] = 4, c[n] = 4 * t[n] + 2 * t[n + 1];
			for (i[r - 1] = 2, u[r - 1] = 7, c[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = i[n] / u[n - 1], u[n] -= e, c[n] -= e * c[n - 1];
			for (i[r - 1] = c[r - 1] / u[r - 1], n = r - 2; n >= 0; --n) i[n] = (c[n] - i[n + 1]) / u[n];
			for (u[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) u[n] = 2 * t[n + 1] - i[n + 1];
			return [i, u]
		}
		r.prototype = {
			areaStart: function() {
				this._line = 0
			},
			areaEnd: function() {
				this._line = NaN
			},
			lineStart: function() {
				this._x = [], this._y = []
			},
			lineEnd: function() {
				var t = this._x,
					n = this._y,
					e = t.length;
				if (e)
					if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);
					else
						for (var r = i(t), u = i(n), c = 0, o = 1; o < e; ++c, ++o) this._context.bezierCurveTo(r[0][c], u[0][c], r[1][c], u[1][c], t[o], n[o]);
				(this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
			},
			point: function(t, n) {
				this._x.push(+t), this._y.push(+n)
			}
		}, n.a = function(t) {
			return new r(t)
		}
	}, function(t, n, e) {
		"use strict";

		function r(t, n) {
			this._context = t, this._t = n
		}
		n.c = function(t) {
			return new r(t, 0)
		}, n.b = function(t) {
			return new r(t, 1)
		}, r.prototype = {
			areaStart: function() {
				this._line = 0
			},
			areaEnd: function() {
				this._line = NaN
			},
			lineStart: function() {
				this._x = this._y = NaN, this._point = 0
			},
			lineEnd: function() {
				0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
			},
			point: function(t, n) {
				switch (t = +t, n = +n, this._point) {
					case 0:
						this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
						break;
					case 1:
						this._point = 2;
					default:
						if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);
						else {
							var e = this._x * (1 - this._t) + t * this._t;
							this._context.lineTo(e, this._y), this._context.lineTo(e, n)
						}
				}
				this._x = t, this._y = n
			}
		}, n.a = function(t) {
			return new r(t, .5)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(159),
			i = e(16),
			u = e(30),
			c = e(31);

		function o(t, n) {
			return t[n]
		}
		n.a = function() {
			var t = Object(i.a)([]),
				n = c.a,
				e = u.a,
				a = o;

			function f(r) {
				var i, u, c = t.apply(this, arguments),
					o = r.length,
					f = c.length,
					s = new Array(f);
				for (i = 0; i < f; ++i) {
					for (var l, h = c[i], d = s[i] = new Array(o), b = 0; b < o; ++b) d[b] = l = [0, +a(r[b], h, b, r)], l.data = r[b];
					d.key = h
				}
				for (i = 0, u = n(s); i < f; ++i) s[u[i]].index = i;
				return e(s, u), s
			}
			return f.keys = function(n) {
				return arguments.length ? (t = "function" == typeof n ? n : Object(i.a)(r.a.call(n)), f) : t
			}, f.value = function(t) {
				return arguments.length ? (a = "function" == typeof t ? t : Object(i.a)(+t), f) : a
			}, f.order = function(t) {
				return arguments.length ? (n = null == t ? c.a : "function" == typeof t ? t : Object(i.a)(r.a.call(t)), f) : n
			}, f.offset = function(t) {
				return arguments.length ? (e = null == t ? u.a : t, f) : e
			}, f
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(30);
		n.a = function(t, n) {
			if ((i = t.length) > 0) {
				for (var e, i, u, c = 0, o = t[0].length; c < o; ++c) {
					for (u = e = 0; e < i; ++e) u += t[e][c][1] || 0;
					if (u)
						for (e = 0; e < i; ++e) t[e][c][1] /= u
				}
				Object(r.a)(t, n)
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n) {
			if ((o = t.length) > 1)
				for (var e, r, i, u, c, o, a = 0, f = t[n[0]].length; a < f; ++a)
					for (u = c = 0, e = 0; e < o; ++e)(i = (r = t[n[e]][a])[1] - r[0]) >= 0 ? (r[0] = u, r[1] = u += i) : i < 0 ? (r[1] = c, r[0] = c += i) : r[0] = u
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(30);
		n.a = function(t, n) {
			if ((e = t.length) > 0) {
				for (var e, i = 0, u = t[n[0]], c = u.length; i < c; ++i) {
					for (var o = 0, a = 0; o < e; ++o) a += t[o][i][1] || 0;
					u[i][1] += u[i][0] = -a / 2
				}
				Object(r.a)(t, n)
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(30);
		n.a = function(t, n) {
			if ((u = t.length) > 0 && (i = (e = t[n[0]]).length) > 0) {
				for (var e, i, u, c = 0, o = 1; o < i; ++o) {
					for (var a = 0, f = 0, s = 0; a < u; ++a) {
						for (var l = t[n[a]], h = l[o][1] || 0, d = (h - (l[o - 1][1] || 0)) / 2, b = 0; b < a; ++b) {
							var v = t[n[b]];
							d += (v[o][1] || 0) - (v[o - 1][1] || 0)
						}
						f += h, s += d * h
					}
					e[o - 1][1] += e[o - 1][0] = c, f && (c -= s / f)
				}
				e[o - 1][1] += e[o - 1][0] = c, Object(r.a)(t, n)
			}
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(87);
		n.a = function(t) {
			return Object(r.a)(t).reverse()
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(31),
			i = e(87);
		n.a = function(t) {
			var n, e, u = t.length,
				c = t.map(i.b),
				o = Object(r.a)(t).sort(function(t, n) {
					return c[n] - c[t]
				}),
				a = 0,
				f = 0,
				s = [],
				l = [];
			for (n = 0; n < u; ++n) e = o[n], a < f ? (a += c[e], s.push(e)) : (f += c[e], l.push(e));
			return l.reverse().concat(s)
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(31);
		n.a = function(t) {
			return Object(r.a)(t).reverse()
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(455);
		e.d(n, "a", function() {
			return r.a
		})
	}, function(t, n, e) {
		"use strict";
		var r = e(456),
			i = e(457),
			u = e(32);
		n.a = function() {
			var t = i.a,
				n = i.b,
				e = null;

			function c(r) {
				return new u.d(r.map(function(e, i) {
					var c = [Math.round(t(e, i, r) / u.f) * u.f, Math.round(n(e, i, r) / u.f) * u.f];
					return c.index = i, c.data = e, c
				}), e)
			}
			return c.polygons = function(t) {
				return c(t).polygons()
			}, c.links = function(t) {
				return c(t).links()
			}, c.triangles = function(t) {
				return c(t).triangles()
			}, c.x = function(n) {
				return arguments.length ? (t = "function" == typeof n ? n : Object(r.a)(+n), c) : t
			}, c.y = function(t) {
				return arguments.length ? (n = "function" == typeof t ? t : Object(r.a)(+t), c) : n
			}, c.extent = function(t) {
				return arguments.length ? (e = null == t ? null : [
					[+t[0][0], +t[0][1]],
					[+t[1][0], +t[1][1]]
				], c) : e && [
					[e[0][0], e[0][1]],
					[e[1][0], e[1][1]]
				]
			}, c.size = function(t) {
				return arguments.length ? (e = null == t ? null : [
					[0, 0],
					[+t[0], +t[1]]
				], c) : e && [e[1][0] - e[0][0], e[1][1] - e[0][1]]
			}, c
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return function() {
				return t
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return t[0]
		}, n.b = function(t) {
			return t[1]
		}
	}, function(t, n, e) {
		"use strict";
		n.b = function(t) {
			var n = t.circle,
				e = n.x,
				r = n.cy,
				i = [e, r],
				a = t.P,
				f = t.N,
				l = [t];
			s(t);
			var h = a;
			for (; h.circle && Math.abs(e - h.circle.x) < o.f && Math.abs(r - h.circle.cy) < o.f;) a = h.P, l.unshift(h), s(h), h = a;
			l.unshift(h), Object(u.b)(h);
			var d = f;
			for (; d.circle && Math.abs(e - d.circle.x) < o.f && Math.abs(r - d.circle.cy) < o.f;) f = d.N, l.push(d), s(d), d = f;
			l.push(d), Object(u.b)(d);
			var b, v = l.length;
			for (b = 1; b < v; ++b) d = l[b], h = l[b - 1], Object(c.d)(d.edge, h.site, d.site, i);
			h = l[0], (d = l[v - 1]).edge = Object(c.c)(h.site, d.site, null, i), Object(u.a)(h), Object(u.a)(d)
		}, n.a = function(t) {
			var n, e, r, a, s = t[0],
				d = t[1],
				b = o.a._;
			for (; b;)
				if ((r = l(b, d) - s) > o.f) b = b.L;
				else {
					if (!((a = s - h(b, d)) > o.f)) {
						r > -o.f ? (n = b.P, e = b) : a > -o.f ? (n = b, e = b.N) : n = e = b;
						break
					}
					if (!b.R) {
						n = b;
						break
					}
					b = b.R
				} Object(i.c)(t);
			var v = f(t);
			if (o.a.insert(n, v), !n && !e) return;
			if (n === e) return Object(u.b)(n), e = f(n.site), o.a.insert(v, e), v.edge = e.edge = Object(c.c)(n.site, v.site), Object(u.a)(n), void Object(u.a)(e);
			if (!e) return void(v.edge = Object(c.c)(n.site, v.site));
			Object(u.b)(n), Object(u.b)(e);
			var p = n.site,
				g = p[0],
				_ = p[1],
				y = t[0] - g,
				m = t[1] - _,
				O = e.site,
				j = O[0] - g,
				x = O[1] - _,
				w = 2 * (y * x - m * j),
				M = y * y + m * m,
				k = j * j + x * x,
				T = [(x * M - m * k) / w + g, (y * k - j * M) / w + _];
			Object(c.d)(e.edge, p, O, T), v.edge = Object(c.c)(p, t, null, T), e.edge = Object(c.c)(t, O, null, T), Object(u.a)(n), Object(u.a)(e)
		};
		var r = e(88),
			i = e(169),
			u = e(170),
			c = e(89),
			o = e(32),
			a = [];

		function f(t) {
			var n = a.pop() || new function() {
				Object(r.a)(this), this.edge = this.site = this.circle = null
			};
			return n.site = t, n
		}

		function s(t) {
			Object(u.b)(t), o.a.remove(t), a.push(t), Object(r.a)(t)
		}

		function l(t, n) {
			var e = t.site,
				r = e[0],
				i = e[1],
				u = i - n;
			if (!u) return r;
			var c = t.P;
			if (!c) return -1 / 0;
			var o = (e = c.site)[0],
				a = e[1],
				f = a - n;
			if (!f) return o;
			var s = o - r,
				l = 1 / u - 1 / f,
				h = s / f;
			return l ? (-h + Math.sqrt(h * h - 2 * l * (s * s / (-2 * f) - a + f / 2 + i - u / 2))) / l + r : (r + o) / 2
		}

		function h(t, n) {
			var e = t.N;
			if (e) return l(e, n);
			var r = t.site;
			return r[1] === n ? r[0] : 1 / 0
		}
	}, function(t, n, e) {
		"use strict";
		var r = e(460);
		e.d(n, "a", function() {
			return r.a
		});
		var i = e(171);
		e.d(n, "c", function() {
			return i.b
		}), e.d(n, "b", function() {
			return i.c
		})
	}, function(t, n, e) {
		"use strict";
		var r = e(12),
			i = e(51),
			u = e(5),
			c = e(1),
			o = e(62),
			a = e(461),
			f = e(462),
			s = e(171),
			l = e(463);

		function h() {
			return !c.e.button
		}

		function d() {
			var t, n, e = this;
			return e instanceof SVGElement ? (t = (e = e.ownerSVGElement || e).width.baseVal.value, n = e.height.baseVal.value) : (t = e.clientWidth, n = e.clientHeight), [
				[0, 0],
				[t, n]
			]
		}

		function b() {
			return this.__zoom || s.c
		}

		function v() {
			return -c.e.deltaY * (c.e.deltaMode ? 120 : 1) / 500
		}

		function p() {
			return "ontouchstart" in this
		}

		function g(t, n, e) {
			var r = t.invertX(n[0][0]) - e[0][0],
				i = t.invertX(n[1][0]) - e[1][0],
				u = t.invertY(n[0][1]) - e[0][1],
				c = t.invertY(n[1][1]) - e[1][1];
			return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), c > u ? (u + c) / 2 : Math.min(0, u) || Math.max(0, c))
		}
		n.a = function() {
			var t, n, e = h,
				_ = d,
				y = g,
				m = v,
				O = p,
				j = [0, 1 / 0],
				x = [
					[-1 / 0, -1 / 0],
					[1 / 0, 1 / 0]
				],
				w = 250,
				M = u.v,
				k = [],
				T = Object(r.a)("start", "zoom", "end"),
				N = 500,
				E = 150,
				S = 0;

			function A(t) {
				t.property("__zoom", b).on("wheel.zoom", L).on("mousedown.zoom", U).on("dblclick.zoom", F).filter(O).on("touchstart.zoom", I).on("touchmove.zoom", Y).on("touchend.zoom touchcancel.zoom", B).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
			}

			function C(t, n) {
				return (n = Math.max(j[0], Math.min(j[1], n))) === t.k ? t : new s.a(n, t.x, t.y)
			}

			function z(t, n, e) {
				var r = n[0] - e[0] * t.k,
					i = n[1] - e[1] * t.k;
				return r === t.x && i === t.y ? t : new s.a(t.k, r, i)
			}

			function P(t) {
				return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
			}

			function q(t, n, e) {
				t.on("start.zoom", function() {
					R(this, arguments).start()
				}).on("interrupt.zoom end.zoom", function() {
					R(this, arguments).end()
				}).tween("zoom", function() {
					var t = arguments,
						r = R(this, t),
						i = _.apply(this, t),
						u = e || P(i),
						c = Math.max(i[1][0] - i[0][0], i[1][1] - i[0][1]),
						o = this.__zoom,
						a = "function" == typeof n ? n.apply(this, t) : n,
						f = M(o.invert(u).concat(c / o.k), a.invert(u).concat(c / a.k));
					return function(t) {
						if (1 === t) t = a;
						else {
							var n = f(t),
								e = c / n[2];
							t = new s.a(e, u[0] - n[0] * e, u[1] - n[1] * e)
						}
						r.zoom(null, t)
					}
				})
			}

			function R(t, n) {
				for (var e, r = 0, i = k.length; r < i; ++r)
					if ((e = k[r]).that === t) return e;
				return new D(t, n)
			}

			function D(t, n) {
				this.that = t, this.args = n, this.index = -1, this.active = 0, this.extent = _.apply(t, n)
			}

			function L() {
				if (e.apply(this, arguments)) {
					var t = R(this, arguments),
						n = this.__zoom,
						r = Math.max(j[0], Math.min(j[1], n.k * Math.pow(2, m.apply(this, arguments)))),
						i = Object(c.h)(this);
					if (t.wheel) t.mouse[0][0] === i[0] && t.mouse[0][1] === i[1] || (t.mouse[1] = n.invert(t.mouse[0] = i)), clearTimeout(t.wheel);
					else {
						if (n.k === r) return;
						t.mouse = [i, n.invert(i)], Object(o.b)(this), t.start()
					}
					Object(l.a)(), t.wheel = setTimeout(function() {
						t.wheel = null, t.end()
					}, E), t.zoom("mouse", y(z(C(n, r), t.mouse[0], t.mouse[1]), t.extent, x))
				}
			}

			function U() {
				if (!n && e.apply(this, arguments)) {
					var t = R(this, arguments),
						r = Object(c.k)(c.e.view).on("mousemove.zoom", function() {
							if (Object(l.a)(), !t.moved) {
								var n = c.e.clientX - a,
									e = c.e.clientY - f;
								t.moved = n * n + e * e > S
							}
							t.zoom("mouse", y(z(t.that.__zoom, t.mouse[0] = Object(c.h)(t.that), t.mouse[1]), t.extent, x))
						}, !0).on("mouseup.zoom", function() {
							r.on("mousemove.zoom mouseup.zoom", null), Object(i.c)(c.e.view, t.moved), Object(l.a)(), t.end()
						}, !0),
						u = Object(c.h)(this),
						a = c.e.clientX,
						f = c.e.clientY;
					Object(i.b)(c.e.view), Object(l.b)(), t.mouse = [u, this.__zoom.invert(u)], Object(o.b)(this), t.start()
				}
			}

			function F() {
				if (e.apply(this, arguments)) {
					var t = this.__zoom,
						n = Object(c.h)(this),
						r = t.invert(n),
						i = t.k * (c.e.shiftKey ? .5 : 2),
						u = y(z(C(t, i), n, r), _.apply(this, arguments), x);
					Object(l.a)(), w > 0 ? Object(c.k)(this).transition().duration(w).call(q, u, n) : Object(c.k)(this).call(A.transform, u)
				}
			}

			function I() {
				if (e.apply(this, arguments)) {
					var n, r, i, u, a = R(this, arguments),
						f = c.e.changedTouches,
						s = f.length;
					for (Object(l.b)(), r = 0; r < s; ++r) i = f[r], u = [u = Object(c.q)(this, f, i.identifier), this.__zoom.invert(u), i.identifier], a.touch0 ? a.touch1 || (a.touch1 = u) : (a.touch0 = u, n = !0);
					if (t && (t = clearTimeout(t), !a.touch1)) return a.end(), void((u = Object(c.k)(this).on("dblclick.zoom")) && u.apply(this, arguments));
					n && (t = setTimeout(function() {
						t = null
					}, N), Object(o.b)(this), a.start())
				}
			}

			function Y() {
				var n, e, r, i, u = R(this, arguments),
					o = c.e.changedTouches,
					a = o.length;
				for (Object(l.a)(), t && (t = clearTimeout(t)), n = 0; n < a; ++n) e = o[n], r = Object(c.q)(this, o, e.identifier), u.touch0 && u.touch0[2] === e.identifier ? u.touch0[0] = r : u.touch1 && u.touch1[2] === e.identifier && (u.touch1[0] = r);
				if (e = u.that.__zoom, u.touch1) {
					var f = u.touch0[0],
						s = u.touch0[1],
						h = u.touch1[0],
						d = u.touch1[1],
						b = (b = h[0] - f[0]) * b + (b = h[1] - f[1]) * b,
						v = (v = d[0] - s[0]) * v + (v = d[1] - s[1]) * v;
					e = C(e, Math.sqrt(b / v)), r = [(f[0] + h[0]) / 2, (f[1] + h[1]) / 2], i = [(s[0] + d[0]) / 2, (s[1] + d[1]) / 2]
				} else {
					if (!u.touch0) return;
					r = u.touch0[0], i = u.touch0[1]
				}
				u.zoom("touch", y(z(e, r, i), u.extent, x))
			}

			function B() {
				var t, e, r = R(this, arguments),
					i = c.e.changedTouches,
					u = i.length;
				for (Object(l.b)(), n && clearTimeout(n), n = setTimeout(function() {
						n = null
					}, N), t = 0; t < u; ++t) e = i[t], r.touch0 && r.touch0[2] === e.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
				r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1), r.touch0 ? r.touch0[1] = this.__zoom.invert(r.touch0[0]) : r.end()
			}
			return A.transform = function(t, n) {
				var e = t.selection ? t.selection() : t;
				e.property("__zoom", b), t !== e ? q(t, n) : e.interrupt().each(function() {
					R(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
				})
			}, A.scaleBy = function(t, n) {
				A.scaleTo(t, function() {
					return this.__zoom.k * ("function" == typeof n ? n.apply(this, arguments) : n)
				})
			}, A.scaleTo = function(t, n) {
				A.transform(t, function() {
					var t = _.apply(this, arguments),
						e = this.__zoom,
						r = P(t),
						i = e.invert(r),
						u = "function" == typeof n ? n.apply(this, arguments) : n;
					return y(z(C(e, u), r, i), t, x)
				})
			}, A.translateBy = function(t, n, e) {
				A.transform(t, function() {
					return y(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), _.apply(this, arguments), x)
				})
			}, A.translateTo = function(t, n, e) {
				A.transform(t, function() {
					var t = _.apply(this, arguments),
						r = this.__zoom,
						i = P(t);
					return y(s.c.translate(i[0], i[1]).scale(r.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, x)
				})
			}, D.prototype = {
				start: function() {
					return 1 == ++this.active && (this.index = k.push(this) - 1, this.emit("start")), this
				},
				zoom: function(t, n) {
					return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this
				},
				end: function() {
					return 0 == --this.active && (k.splice(this.index, 1), this.index = -1, this.emit("end")), this
				},
				emit: function(t) {
					Object(c.d)(new f.a(A, t, this.that.__zoom), T.apply, T, [t, this.that, this.args])
				}
			}, A.wheelDelta = function(t) {
				return arguments.length ? (m = "function" == typeof t ? t : Object(a.a)(+t), A) : m
			}, A.filter = function(t) {
				return arguments.length ? (e = "function" == typeof t ? t : Object(a.a)(!!t), A) : e
			}, A.touchable = function(t) {
				return arguments.length ? (O = "function" == typeof t ? t : Object(a.a)(!!t), A) : O
			}, A.extent = function(t) {
				return arguments.length ? (_ = "function" == typeof t ? t : Object(a.a)([
					[+t[0][0], +t[0][1]],
					[+t[1][0], +t[1][1]]
				]), A) : _
			}, A.scaleExtent = function(t) {
				return arguments.length ? (j[0] = +t[0], j[1] = +t[1], A) : [j[0], j[1]]
			}, A.translateExtent = function(t) {
				return arguments.length ? (x[0][0] = +t[0][0], x[1][0] = +t[1][0], x[0][1] = +t[0][1], x[1][1] = +t[1][1], A) : [
					[x[0][0], x[0][1]],
					[x[1][0], x[1][1]]
				]
			}, A.constrain = function(t) {
				return arguments.length ? (y = t, A) : y
			}, A.duration = function(t) {
				return arguments.length ? (w = +t, A) : w
			}, A.interpolate = function(t) {
				return arguments.length ? (M = t, A) : M
			}, A.on = function() {
				var t = T.on.apply(T, arguments);
				return t === T ? A : t
			}, A.clickDistance = function(t) {
				return arguments.length ? (S = (t = +t) * t, A) : Math.sqrt(S)
			}, A
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t) {
			return function() {
				return t
			}
		}
	}, function(t, n, e) {
		"use strict";
		n.a = function(t, n, e) {
			this.target = t, this.type = n, this.transform = e
		}
	}, function(t, n, e) {
		"use strict";
		n.b = function() {
			r.e.stopImmediatePropagation()
		};
		var r = e(1);
		n.a = function() {
			r.e.preventDefault(), r.e.stopImmediatePropagation()
		}
	}, function(t, n, e) {
		"use strict";
		e.d(n, "a", function() {
			return i
		}), e.d(n, "b", function() {
			return u
		});
		var r = e(172),
			i = function(t) {
				if (t) {
					var n = "";
					switch (t.charAt(0)) {
						case "$":
							n += "$";
							break;
						case "Â£":
							n += "Â£";
							break;
						case "â‚¬":
							n += "â‚¬"
					}
					t.indexOf(",") > -1 && (n += ",");
					var e = t.split(".");
					switch (n += ".", n += e.length > 1 ? e[1].length : 0, t.slice(-1)) {
						case "%":
							n += "%";
							break;
						case "0":
							n += "f"
					}
					return r.format(n)
				}
			},
			u = function(t, n, e) {
				var r = function(n, e, r, i, u) {
						return !(!t.addError || !t.clearErrors) && (r < i ? (t.addError({
							title: "Not Enough " + e + "s",
							message: "This visualization requires " + (i === u ? "exactly" : "at least") + " " + i + " " + e.toLowerCase() + (1 === i ? "" : "s") + ".",
							group: n
						}), !1) : r > u ? (t.addError({
							title: "Too Many " + e + "s",
							message: "This visualization requires " + (i === u ? "exactly" : "no more than") + " " + u + " " + e.toLowerCase() + (1 === i ? "" : "s") + ".",
							group: n
						}), !1) : (t.clearErrors(n), !0))
					},
					i = n.fields,
					u = i.pivots,
					c = i.dimensions,
					o = i.measure_like;
				return r("pivot-req", "Pivot", u.length, e.min_pivots, e.max_pivots) && r("dim-req", "Dimension", c.length, e.min_dimensions, e.max_dimensions) && r("mes-req", "Measure", o.length, e.min_measures, e.max_measures)
			}
	}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, n, e) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = e(172),
			i = e(464);

		function u(t, n) {
			var e = {};
			return t.forEach(function(t) {
				var r = e;
				n.forEach(function(n) {
					var e = t[n.name].value;
					r[e] = e in r ? r[e] : {}, r = r[e]
				}), r.__data = t
			}), {
				name: "root",
				children: function t(n, e) {
					void 0 === e && (e = 0);
					var r = [];
					for (var i in n)
						if ("__data" !== i) {
							var u = {
								name: i,
								depth: e,
								children: t(n[i], e + 1)
							};
							"__data" in n[i] && (u.data = n[i].__data), r.push(u)
						} return r
				}(e, 1),
				depth: 0
			}
		}
		var c = {
			id: "collapsible_tree",
			label: "Collapsible Tree",
			options: {
				color_with_children: {
					label: "Node Color With Children",
					default: "#36c1b3",
					type: "string",
					display: "color"
				},
				color_empty: {
					label: "Empty Node Color",
					default: "#fff",
					type: "string",
					display: "color"
				}
			},
			create: function(t, n) {
				this.svg = r.select(t).append("svg")
			},
			update: function(t, n, e, c) {
				if (Object(i.b)(this, c, {
						min_pivots: 0,
						max_pivots: 0,
						min_dimensions: 2,
						max_dimensions: void 0,
						min_measures: 0,
						max_measures: void 0
					})) {
					var o = 0,
						a = {
							children: e && e.color_with_children || this.options.color_with_children.default,
							empty: e && e.color_empty || this.options.color_empty.default
						},
						f = 10,
						s = 4,
						l = 750,
						h = 10,
						d = 10,
						b = 10,
						v = 10,
						p = n.clientWidth - v - d,
						g = n.clientHeight - h - b,
						_ = u(t, c.fields.dimension_like),
						y = this.svg.html("").attr("width", p + d + v).attr("height", g + h + b).append("g").attr("transform", "translate(" + v + "," + h + ")"),
						m = r.tree().size([g, p]),
						O = r.hierarchy(_, function(t) {
							return t.children
						});
					O.x0 = g / 2, O.y0 = 0, O.children.forEach(function t(n) {
						n.children && (n._children = n.children, n._children.forEach(t), n.children = null)
					}), w(O)
				}

				function j(t, n) {
					return ("\n        M " + t.y + " " + t.x + "\n        C " + (t.y + n.y) / 2 + " " + t.x + ",\n          " + (t.y + n.y) / 2 + " " + n.x + ",\n          " + n.y + " " + n.x + "\n      ").trim()
				}

				function x(t) {
					t.children ? (t._children = t.children, t.children = null) : (t.children = t._children, t._children = null), w(t)
				}

				function w(t) {
					var n = m(O),
						e = n.descendants(),
						r = n.descendants().slice(1);
					e.forEach(function(t) {
						t.y = 180 * t.depth
					});
					var i = y.selectAll("g.node").data(e, function(t) {
							return t.id || (t.id = ++o)
						}),
						u = i.enter().append("g").attr("class", "node").attr("transform", function(n) {
							return "translate(" + t.y0 + "," + t.x0 + ")"
						}).on("click", x);
					u.append("circle").attr("class", "node").attr("r", 1e-6), u.append("text").attr("dy", ".35em").attr("x", function(t) {
						return t.children || t._children ? -f : f
					}).attr("text-anchor", function(t) {
						return t.children || t._children ? "end" : "start"
					}).style("font-family", "'Open Sans', Helvetica, sans-serif").style("font-size", f + "px").text(function(t) {
						return t.data.name
					});
					var c = u.merge(i);
					c.transition().duration(l).attr("transform", function(t) {
						return "translate(" + t.y + "," + t.x + ")"
					}), c.select("circle.node").attr("r", s).style("fill", function(t) {
						return t._children ? a.children : a.empty
					}).style("stroke", a.children).style("stroke-width", 1.5).attr("cursor", "pointer");
					var h = i.exit().transition().duration(l).attr("transform", function(n) {
						return "translate(" + t.y + "," + t.x + ")"
					}).remove();
					h.select("circle").attr("r", 1e-6), h.select("text").style("fill-opacity", 1e-6);
					var d = y.selectAll("path.link").data(r, function(t) {
						return t.id
					});
					d.enter().insert("path", "g").attr("class", "link").style("fill", "none").style("stroke", "#ddd").style("stroke-width", 1.5).attr("d", function(n) {
						var e = {
							x: t.x0,
							y: t.y0
						};
						return j(e, e)
					}).merge(d).transition().duration(l).attr("d", function(t) {
						return j(t, t.parent)
					}), d.exit().transition().duration(l).attr("d", function(n) {
						var e = {
							x: t.x,
							y: t.y
						};
						return j(e, e)
					}).remove(), e.forEach(function(t) {
						t.x0 = t.x, t.y0 = t.y
					})
				}
			}
		};
		looker.plugins.visualizations.add(c)
	}])
});