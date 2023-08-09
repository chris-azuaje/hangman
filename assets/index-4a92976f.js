(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : l.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function ic(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Ku = { exports: {} },
  el = {},
  Yu = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gn = Symbol.for('react.element'),
  uc = Symbol.for('react.portal'),
  sc = Symbol.for('react.fragment'),
  ac = Symbol.for('react.strict_mode'),
  cc = Symbol.for('react.profiler'),
  fc = Symbol.for('react.provider'),
  dc = Symbol.for('react.context'),
  pc = Symbol.for('react.forward_ref'),
  hc = Symbol.for('react.suspense'),
  mc = Symbol.for('react.memo'),
  vc = Symbol.for('react.lazy'),
  Di = Symbol.iterator;
function yc(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Di && e[Di]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Gu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Xu = Object.assign,
  Zu = {};
function ln(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zu),
    (this.updater = n || Gu);
}
ln.prototype.isReactComponent = {};
ln.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
ln.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Ju() {}
Ju.prototype = ln.prototype;
function Ao(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zu),
    (this.updater = n || Gu);
}
var Vo = (Ao.prototype = new Ju());
Vo.constructor = Ao;
Xu(Vo, ln.prototype);
Vo.isPureReactComponent = !0;
var Ii = Array.isArray,
  qu = Object.prototype.hasOwnProperty,
  Bo = { current: null },
  bu = { key: !0, ref: !0, __self: !0, __source: !0 };
function es(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      qu.call(t, r) && !bu.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Gn,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Bo.current,
  };
}
function gc(e, t) {
  return {
    $$typeof: Gn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ho(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Gn;
}
function wc(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Fi = /\/+/g;
function wl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? wc('' + e.key)
    : t.toString(36);
}
function gr(e, t, n, r, l) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Gn:
          case uc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === '' ? '.' + wl(i, 0) : r),
      Ii(l)
        ? ((n = ''),
          e != null && (n = e.replace(Fi, '$&/') + '/'),
          gr(l, t, n, '', function (c) {
            return c;
          }))
        : l != null &&
          (Ho(l) &&
            (l = gc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ''
                  : ('' + l.key).replace(Fi, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), Ii(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + wl(o, u);
      i += gr(o, t, n, s, l);
    }
  else if (((s = yc(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + wl(o, u++)), (i += gr(o, t, n, s, l));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return i;
}
function tr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    gr(e, r, '', '', function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function kc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  wr = { transition: null },
  Sc = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: wr,
    ReactCurrentOwner: Bo,
  };
L.Children = {
  map: tr,
  forEach: function (e, t, n) {
    tr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      tr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      tr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ho(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
L.Component = ln;
L.Fragment = sc;
L.Profiler = cc;
L.PureComponent = Ao;
L.StrictMode = ac;
L.Suspense = hc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sc;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Xu({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Bo.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      qu.call(t, s) &&
        !bu.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Gn, type: e.type, key: l, ref: o, props: r, _owner: i };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: dc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: fc, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = es;
L.createFactory = function (e) {
  var t = es.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: pc, render: e };
};
L.isValidElement = Ho;
L.lazy = function (e) {
  return { $$typeof: vc, _payload: { _status: -1, _result: e }, _init: kc };
};
L.memo = function (e, t) {
  return { $$typeof: mc, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = wr.transition;
  wr.transition = {};
  try {
    e();
  } finally {
    wr.transition = t;
  }
};
L.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
L.useCallback = function (e, t) {
  return ue.current.useCallback(e, t);
};
L.useContext = function (e) {
  return ue.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return ue.current.useEffect(e, t);
};
L.useId = function () {
  return ue.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return ue.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return ue.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return ue.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return ue.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return ue.current.useRef(e);
};
L.useState = function (e) {
  return ue.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return ue.current.useTransition();
};
L.version = '18.2.0';
Yu.exports = L;
var qe = Yu.exports;
const Ec = ic(qe);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xc = qe,
  _c = Symbol.for('react.element'),
  Cc = Symbol.for('react.fragment'),
  Pc = Object.prototype.hasOwnProperty,
  Nc = xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  zc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ts(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Pc.call(t, r) && !zc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: _c,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Nc.current,
  };
}
el.Fragment = Cc;
el.jsx = ts;
el.jsxs = ts;
Ku.exports = el;
var F = Ku.exports,
  Kl = {},
  ns = { exports: {} },
  ge = {},
  rs = { exports: {} },
  ls = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(x, N) {
    var z = x.length;
    x.push(N);
    e: for (; 0 < z; ) {
      var W = (z - 1) >>> 1,
        X = x[W];
      if (0 < l(X, N)) (x[W] = N), (x[z] = X), (z = W);
      else break e;
    }
  }
  function n(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var N = x[0],
      z = x.pop();
    if (z !== N) {
      x[0] = z;
      e: for (var W = 0, X = x.length, bn = X >>> 1; W < bn; ) {
        var vt = 2 * (W + 1) - 1,
          gl = x[vt],
          yt = vt + 1,
          er = x[yt];
        if (0 > l(gl, z))
          yt < X && 0 > l(er, gl)
            ? ((x[W] = er), (x[yt] = z), (W = yt))
            : ((x[W] = gl), (x[vt] = z), (W = vt));
        else if (yt < X && 0 > l(er, z)) (x[W] = er), (x[yt] = z), (W = yt);
        else break e;
      }
    }
    return N;
  }
  function l(x, N) {
    var z = x.sortIndex - N.sortIndex;
    return z !== 0 ? z : x.id - N.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    c = [],
    m = 1,
    h = null,
    p = 3,
    g = !1,
    w = !1,
    k = !1,
    I = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    a = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(x) {
    for (var N = n(c); N !== null; ) {
      if (N.callback === null) r(c);
      else if (N.startTime <= x)
        r(c), (N.sortIndex = N.expirationTime), t(s, N);
      else break;
      N = n(c);
    }
  }
  function v(x) {
    if (((k = !1), d(x), !w))
      if (n(s) !== null) (w = !0), vl(E);
      else {
        var N = n(c);
        N !== null && yl(v, N.startTime - x);
      }
  }
  function E(x, N) {
    (w = !1), k && ((k = !1), f(P), (P = -1)), (g = !0);
    var z = p;
    try {
      for (
        d(N), h = n(s);
        h !== null && (!(h.expirationTime > N) || (x && !Pe()));

      ) {
        var W = h.callback;
        if (typeof W == 'function') {
          (h.callback = null), (p = h.priorityLevel);
          var X = W(h.expirationTime <= N);
          (N = e.unstable_now()),
            typeof X == 'function' ? (h.callback = X) : h === n(s) && r(s),
            d(N);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var bn = !0;
      else {
        var vt = n(c);
        vt !== null && yl(v, vt.startTime - N), (bn = !1);
      }
      return bn;
    } finally {
      (h = null), (p = z), (g = !1);
    }
  }
  var _ = !1,
    C = null,
    P = -1,
    H = 5,
    T = -1;
  function Pe() {
    return !(e.unstable_now() - T < H);
  }
  function sn() {
    if (C !== null) {
      var x = e.unstable_now();
      T = x;
      var N = !0;
      try {
        N = C(!0, x);
      } finally {
        N ? an() : ((_ = !1), (C = null));
      }
    } else _ = !1;
  }
  var an;
  if (typeof a == 'function')
    an = function () {
      a(sn);
    };
  else if (typeof MessageChannel < 'u') {
    var Mi = new MessageChannel(),
      oc = Mi.port2;
    (Mi.port1.onmessage = sn),
      (an = function () {
        oc.postMessage(null);
      });
  } else
    an = function () {
      I(sn, 0);
    };
  function vl(x) {
    (C = x), _ || ((_ = !0), an());
  }
  function yl(x, N) {
    P = I(function () {
      x(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (x) {
      x.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), vl(E));
    }),
    (e.unstable_forceFrameRate = function (x) {
      0 > x || 125 < x
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (H = 0 < x ? Math.floor(1e3 / x) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (x) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = p;
      }
      var z = p;
      p = N;
      try {
        return x();
      } finally {
        p = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (x, N) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var z = p;
      p = x;
      try {
        return N();
      } finally {
        p = z;
      }
    }),
    (e.unstable_scheduleCallback = function (x, N, z) {
      var W = e.unstable_now();
      switch (
        (typeof z == 'object' && z !== null
          ? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? W + z : W))
          : (z = W),
        x)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = z + X),
        (x = {
          id: m++,
          callback: N,
          priorityLevel: x,
          startTime: z,
          expirationTime: X,
          sortIndex: -1,
        }),
        z > W
          ? ((x.sortIndex = z),
            t(c, x),
            n(s) === null &&
              x === n(c) &&
              (k ? (f(P), (P = -1)) : (k = !0), yl(v, z - W)))
          : ((x.sortIndex = X), t(s, x), w || g || ((w = !0), vl(E))),
        x
      );
    }),
    (e.unstable_shouldYield = Pe),
    (e.unstable_wrapCallback = function (x) {
      var N = p;
      return function () {
        var z = p;
        p = N;
        try {
          return x.apply(this, arguments);
        } finally {
          p = z;
        }
      };
    });
})(ls);
rs.exports = ls;
var Lc = rs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var os = qe,
  ye = Lc;
function y(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var is = new Set(),
  Rn = {};
function Tt(e, t) {
  Jt(e, t), Jt(e + 'Capture', t);
}
function Jt(e, t) {
  for (Rn[e] = t, e = 0; e < t.length; e++) is.add(t[e]);
}
var We = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Yl = Object.prototype.hasOwnProperty,
  Tc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ui = {},
  $i = {};
function Rc(e) {
  return Yl.call($i, e)
    ? !0
    : Yl.call(Ui, e)
    ? !1
    : Tc.test(e)
    ? ($i[e] = !0)
    : ((Ui[e] = !0), !1);
}
function Oc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function jc(e, t, n, r) {
  if (t === null || typeof t > 'u' || Oc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function se(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ee = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ee[e] = new se(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  ee[t] = new se(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Wo = /[\-:]([a-z])/g;
function Qo(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Wo, Qo);
    ee[t] = new se(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Wo, Qo);
    ee[t] = new se(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Wo, Qo);
  ee[t] = new se(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ko(e, t, n, r) {
  var l = ee.hasOwnProperty(t) ? ee[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (jc(t, n, l, r) && (n = null),
    r || l === null
      ? Rc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ge = os.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  nr = Symbol.for('react.element'),
  jt = Symbol.for('react.portal'),
  Mt = Symbol.for('react.fragment'),
  Yo = Symbol.for('react.strict_mode'),
  Gl = Symbol.for('react.profiler'),
  us = Symbol.for('react.provider'),
  ss = Symbol.for('react.context'),
  Go = Symbol.for('react.forward_ref'),
  Xl = Symbol.for('react.suspense'),
  Zl = Symbol.for('react.suspense_list'),
  Xo = Symbol.for('react.memo'),
  Ze = Symbol.for('react.lazy'),
  as = Symbol.for('react.offscreen'),
  Ai = Symbol.iterator;
function cn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ai && e[Ai]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var V = Object.assign,
  kl;
function gn(e) {
  if (kl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      kl = (t && t[1]) || '';
    }
  return (
    `
` +
    kl +
    e
  );
}
var Sl = !1;
function El(e, t) {
  if (!e || Sl) return '';
  Sl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Sl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? gn(e) : '';
}
function Mc(e) {
  switch (e.tag) {
    case 5:
      return gn(e.type);
    case 16:
      return gn('Lazy');
    case 13:
      return gn('Suspense');
    case 19:
      return gn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = El(e.type, !1)), e;
    case 11:
      return (e = El(e.type.render, !1)), e;
    case 1:
      return (e = El(e.type, !0)), e;
    default:
      return '';
  }
}
function Jl(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Mt:
      return 'Fragment';
    case jt:
      return 'Portal';
    case Gl:
      return 'Profiler';
    case Yo:
      return 'StrictMode';
    case Xl:
      return 'Suspense';
    case Zl:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case ss:
        return (e.displayName || 'Context') + '.Consumer';
      case us:
        return (e._context.displayName || 'Context') + '.Provider';
      case Go:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Xo:
        return (
          (t = e.displayName || null), t !== null ? t : Jl(e.type) || 'Memo'
        );
      case Ze:
        (t = e._payload), (e = e._init);
        try {
          return Jl(e(t));
        } catch {}
    }
  return null;
}
function Dc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Jl(t);
    case 8:
      return t === Yo ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function ft(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function cs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Ic(e) {
  var t = cs(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = '' + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function rr(e) {
  e._valueTracker || (e._valueTracker = Ic(e));
}
function fs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = cs(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Tr(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ql(e, t) {
  var n = t.checked;
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Vi(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function ds(e, t) {
  (t = t.checked), t != null && Ko(e, 'checked', t, !1);
}
function bl(e, t) {
  ds(e, t);
  var n = ft(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? eo(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && eo(e, t.type, ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Bi(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function eo(e, t, n) {
  (t !== 'number' || Tr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var wn = Array.isArray;
function Qt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function to(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Hi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (wn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: ft(n) };
}
function ps(e, t) {
  var n = ft(t.value),
    r = ft(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Wi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function hs(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function no(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? hs(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var lr,
  ms = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        lr = lr || document.createElement('div'),
          lr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = lr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function On(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var En = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Fc = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(En).forEach(function (e) {
  Fc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (En[t] = En[e]);
  });
});
function vs(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (En.hasOwnProperty(e) && En[e])
    ? ('' + t).trim()
    : t + 'px';
}
function ys(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = vs(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Uc = V(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ro(e, t) {
  if (t) {
    if (Uc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(y(62));
  }
}
function lo(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var oo = null;
function Zo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var io = null,
  Kt = null,
  Yt = null;
function Qi(e) {
  if ((e = Jn(e))) {
    if (typeof io != 'function') throw Error(y(280));
    var t = e.stateNode;
    t && ((t = ol(t)), io(e.stateNode, e.type, t));
  }
}
function gs(e) {
  Kt ? (Yt ? Yt.push(e) : (Yt = [e])) : (Kt = e);
}
function ws() {
  if (Kt) {
    var e = Kt,
      t = Yt;
    if (((Yt = Kt = null), Qi(e), t)) for (e = 0; e < t.length; e++) Qi(t[e]);
  }
}
function ks(e, t) {
  return e(t);
}
function Ss() {}
var xl = !1;
function Es(e, t, n) {
  if (xl) return e(t, n);
  xl = !0;
  try {
    return ks(e, t, n);
  } finally {
    (xl = !1), (Kt !== null || Yt !== null) && (Ss(), ws());
  }
}
function jn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ol(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(y(231, t, typeof n));
  return n;
}
var uo = !1;
if (We)
  try {
    var fn = {};
    Object.defineProperty(fn, 'passive', {
      get: function () {
        uo = !0;
      },
    }),
      window.addEventListener('test', fn, fn),
      window.removeEventListener('test', fn, fn);
  } catch {
    uo = !1;
  }
function $c(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var xn = !1,
  Rr = null,
  Or = !1,
  so = null,
  Ac = {
    onError: function (e) {
      (xn = !0), (Rr = e);
    },
  };
function Vc(e, t, n, r, l, o, i, u, s) {
  (xn = !1), (Rr = null), $c.apply(Ac, arguments);
}
function Bc(e, t, n, r, l, o, i, u, s) {
  if ((Vc.apply(this, arguments), xn)) {
    if (xn) {
      var c = Rr;
      (xn = !1), (Rr = null);
    } else throw Error(y(198));
    Or || ((Or = !0), (so = c));
  }
}
function Rt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function xs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ki(e) {
  if (Rt(e) !== e) throw Error(y(188));
}
function Hc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Rt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Ki(l), e;
        if (o === r) return Ki(l), t;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function _s(e) {
  return (e = Hc(e)), e !== null ? Cs(e) : null;
}
function Cs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Cs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ps = ye.unstable_scheduleCallback,
  Yi = ye.unstable_cancelCallback,
  Wc = ye.unstable_shouldYield,
  Qc = ye.unstable_requestPaint,
  Q = ye.unstable_now,
  Kc = ye.unstable_getCurrentPriorityLevel,
  Jo = ye.unstable_ImmediatePriority,
  Ns = ye.unstable_UserBlockingPriority,
  jr = ye.unstable_NormalPriority,
  Yc = ye.unstable_LowPriority,
  zs = ye.unstable_IdlePriority,
  tl = null,
  Fe = null;
function Gc(e) {
  if (Fe && typeof Fe.onCommitFiberRoot == 'function')
    try {
      Fe.onCommitFiberRoot(tl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Re = Math.clz32 ? Math.clz32 : Jc,
  Xc = Math.log,
  Zc = Math.LN2;
function Jc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Xc(e) / Zc) | 0)) | 0;
}
var or = 64,
  ir = 4194304;
function kn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Mr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = kn(u)) : ((o &= i), o !== 0 && (r = kn(o)));
  } else (i = n & ~l), i !== 0 ? (r = kn(i)) : o !== 0 && (r = kn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Re(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function qc(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function bc(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Re(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = qc(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function ao(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ls() {
  var e = or;
  return (or <<= 1), !(or & 4194240) && (or = 64), e;
}
function _l(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Xn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Re(t)),
    (e[t] = n);
}
function ef(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Re(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function qo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Re(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var O = 0;
function Ts(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Rs,
  bo,
  Os,
  js,
  Ms,
  co = !1,
  ur = [],
  rt = null,
  lt = null,
  ot = null,
  Mn = new Map(),
  Dn = new Map(),
  be = [],
  tf =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Gi(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      rt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      lt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      ot = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Mn.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Dn.delete(t.pointerId);
  }
}
function dn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Jn(t)), t !== null && bo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function nf(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (rt = dn(rt, e, t, n, r, l)), !0;
    case 'dragenter':
      return (lt = dn(lt, e, t, n, r, l)), !0;
    case 'mouseover':
      return (ot = dn(ot, e, t, n, r, l)), !0;
    case 'pointerover':
      var o = l.pointerId;
      return Mn.set(o, dn(Mn.get(o) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (o = l.pointerId), Dn.set(o, dn(Dn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ds(e) {
  var t = kt(e.target);
  if (t !== null) {
    var n = Rt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = xs(n)), t !== null)) {
          (e.blockedOn = t),
            Ms(e.priority, function () {
              Os(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function kr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = fo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (oo = r), n.target.dispatchEvent(r), (oo = null);
    } else return (t = Jn(n)), t !== null && bo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Xi(e, t, n) {
  kr(e) && n.delete(t);
}
function rf() {
  (co = !1),
    rt !== null && kr(rt) && (rt = null),
    lt !== null && kr(lt) && (lt = null),
    ot !== null && kr(ot) && (ot = null),
    Mn.forEach(Xi),
    Dn.forEach(Xi);
}
function pn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    co ||
      ((co = !0),
      ye.unstable_scheduleCallback(ye.unstable_NormalPriority, rf)));
}
function In(e) {
  function t(l) {
    return pn(l, e);
  }
  if (0 < ur.length) {
    pn(ur[0], e);
    for (var n = 1; n < ur.length; n++) {
      var r = ur[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rt !== null && pn(rt, e),
      lt !== null && pn(lt, e),
      ot !== null && pn(ot, e),
      Mn.forEach(t),
      Dn.forEach(t),
      n = 0;
    n < be.length;
    n++
  )
    (r = be[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < be.length && ((n = be[0]), n.blockedOn === null); )
    Ds(n), n.blockedOn === null && be.shift();
}
var Gt = Ge.ReactCurrentBatchConfig,
  Dr = !0;
function lf(e, t, n, r) {
  var l = O,
    o = Gt.transition;
  Gt.transition = null;
  try {
    (O = 1), ei(e, t, n, r);
  } finally {
    (O = l), (Gt.transition = o);
  }
}
function of(e, t, n, r) {
  var l = O,
    o = Gt.transition;
  Gt.transition = null;
  try {
    (O = 4), ei(e, t, n, r);
  } finally {
    (O = l), (Gt.transition = o);
  }
}
function ei(e, t, n, r) {
  if (Dr) {
    var l = fo(e, t, n, r);
    if (l === null) Ml(e, t, r, Ir, n), Gi(e, r);
    else if (nf(l, e, t, n, r)) r.stopPropagation();
    else if ((Gi(e, r), t & 4 && -1 < tf.indexOf(e))) {
      for (; l !== null; ) {
        var o = Jn(l);
        if (
          (o !== null && Rs(o),
          (o = fo(e, t, n, r)),
          o === null && Ml(e, t, r, Ir, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Ml(e, t, r, null, n);
  }
}
var Ir = null;
function fo(e, t, n, r) {
  if (((Ir = null), (e = Zo(r)), (e = kt(e)), e !== null))
    if (((t = Rt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = xs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ir = e), null;
}
function Is(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Kc()) {
        case Jo:
          return 1;
        case Ns:
          return 4;
        case jr:
        case Yc:
          return 16;
        case zs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tt = null,
  ti = null,
  Sr = null;
function Fs() {
  if (Sr) return Sr;
  var e,
    t = ti,
    n = t.length,
    r,
    l = 'value' in tt ? tt.value : tt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Sr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Er(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function sr() {
  return !0;
}
function Zi() {
  return !1;
}
function we(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? sr
        : Zi),
      (this.isPropagationStopped = Zi),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = sr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = sr));
      },
      persist: function () {},
      isPersistent: sr,
    }),
    t
  );
}
var on = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ni = we(on),
  Zn = V({}, on, { view: 0, detail: 0 }),
  uf = we(Zn),
  Cl,
  Pl,
  hn,
  nl = V({}, Zn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ri,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== hn &&
            (hn && e.type === 'mousemove'
              ? ((Cl = e.screenX - hn.screenX), (Pl = e.screenY - hn.screenY))
              : (Pl = Cl = 0),
            (hn = e)),
          Cl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Pl;
    },
  }),
  Ji = we(nl),
  sf = V({}, nl, { dataTransfer: 0 }),
  af = we(sf),
  cf = V({}, Zn, { relatedTarget: 0 }),
  Nl = we(cf),
  ff = V({}, on, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  df = we(ff),
  pf = V({}, on, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  hf = we(pf),
  mf = V({}, on, { data: 0 }),
  qi = we(mf),
  vf = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  yf = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  gf = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function wf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gf[e]) ? !!t[e] : !1;
}
function ri() {
  return wf;
}
var kf = V({}, Zn, {
    key: function (e) {
      if (e.key) {
        var t = vf[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Er(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? yf[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ri,
    charCode: function (e) {
      return e.type === 'keypress' ? Er(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Er(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  Sf = we(kf),
  Ef = V({}, nl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  bi = we(Ef),
  xf = V({}, Zn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ri,
  }),
  _f = we(xf),
  Cf = V({}, on, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Pf = we(Cf),
  Nf = V({}, nl, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  zf = we(Nf),
  Lf = [9, 13, 27, 32],
  li = We && 'CompositionEvent' in window,
  _n = null;
We && 'documentMode' in document && (_n = document.documentMode);
var Tf = We && 'TextEvent' in window && !_n,
  Us = We && (!li || (_n && 8 < _n && 11 >= _n)),
  eu = String.fromCharCode(32),
  tu = !1;
function $s(e, t) {
  switch (e) {
    case 'keyup':
      return Lf.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function As(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Dt = !1;
function Rf(e, t) {
  switch (e) {
    case 'compositionend':
      return As(t);
    case 'keypress':
      return t.which !== 32 ? null : ((tu = !0), eu);
    case 'textInput':
      return (e = t.data), e === eu && tu ? null : e;
    default:
      return null;
  }
}
function Of(e, t) {
  if (Dt)
    return e === 'compositionend' || (!li && $s(e, t))
      ? ((e = Fs()), (Sr = ti = tt = null), (Dt = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Us && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var jf = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function nu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!jf[e.type] : t === 'textarea';
}
function Vs(e, t, n, r) {
  gs(r),
    (t = Fr(t, 'onChange')),
    0 < t.length &&
      ((n = new ni('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Cn = null,
  Fn = null;
function Mf(e) {
  qs(e, 0);
}
function rl(e) {
  var t = Ut(e);
  if (fs(t)) return e;
}
function Df(e, t) {
  if (e === 'change') return t;
}
var Bs = !1;
if (We) {
  var zl;
  if (We) {
    var Ll = 'oninput' in document;
    if (!Ll) {
      var ru = document.createElement('div');
      ru.setAttribute('oninput', 'return;'),
        (Ll = typeof ru.oninput == 'function');
    }
    zl = Ll;
  } else zl = !1;
  Bs = zl && (!document.documentMode || 9 < document.documentMode);
}
function lu() {
  Cn && (Cn.detachEvent('onpropertychange', Hs), (Fn = Cn = null));
}
function Hs(e) {
  if (e.propertyName === 'value' && rl(Fn)) {
    var t = [];
    Vs(t, Fn, e, Zo(e)), Es(Mf, t);
  }
}
function If(e, t, n) {
  e === 'focusin'
    ? (lu(), (Cn = t), (Fn = n), Cn.attachEvent('onpropertychange', Hs))
    : e === 'focusout' && lu();
}
function Ff(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return rl(Fn);
}
function Uf(e, t) {
  if (e === 'click') return rl(t);
}
function $f(e, t) {
  if (e === 'input' || e === 'change') return rl(t);
}
function Af(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var je = typeof Object.is == 'function' ? Object.is : Af;
function Un(e, t) {
  if (je(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Yl.call(t, l) || !je(e[l], t[l])) return !1;
  }
  return !0;
}
function ou(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function iu(e, t) {
  var n = ou(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ou(n);
  }
}
function Ws(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ws(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Qs() {
  for (var e = window, t = Tr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Tr(e.document);
  }
  return t;
}
function oi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Vf(e) {
  var t = Qs(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ws(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && oi(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = iu(n, o));
        var i = iu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Bf = We && 'documentMode' in document && 11 >= document.documentMode,
  It = null,
  po = null,
  Pn = null,
  ho = !1;
function uu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ho ||
    It == null ||
    It !== Tr(r) ||
    ((r = It),
    'selectionStart' in r && oi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pn && Un(Pn, r)) ||
      ((Pn = r),
      (r = Fr(po, 'onSelect')),
      0 < r.length &&
        ((t = new ni('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = It))));
}
function ar(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Ft = {
    animationend: ar('Animation', 'AnimationEnd'),
    animationiteration: ar('Animation', 'AnimationIteration'),
    animationstart: ar('Animation', 'AnimationStart'),
    transitionend: ar('Transition', 'TransitionEnd'),
  },
  Tl = {},
  Ks = {};
We &&
  ((Ks = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Ft.animationend.animation,
    delete Ft.animationiteration.animation,
    delete Ft.animationstart.animation),
  'TransitionEvent' in window || delete Ft.transitionend.transition);
function ll(e) {
  if (Tl[e]) return Tl[e];
  if (!Ft[e]) return e;
  var t = Ft[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ks) return (Tl[e] = t[n]);
  return e;
}
var Ys = ll('animationend'),
  Gs = ll('animationiteration'),
  Xs = ll('animationstart'),
  Zs = ll('transitionend'),
  Js = new Map(),
  su =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function pt(e, t) {
  Js.set(e, t), Tt(t, [e]);
}
for (var Rl = 0; Rl < su.length; Rl++) {
  var Ol = su[Rl],
    Hf = Ol.toLowerCase(),
    Wf = Ol[0].toUpperCase() + Ol.slice(1);
  pt(Hf, 'on' + Wf);
}
pt(Ys, 'onAnimationEnd');
pt(Gs, 'onAnimationIteration');
pt(Xs, 'onAnimationStart');
pt('dblclick', 'onDoubleClick');
pt('focusin', 'onFocus');
pt('focusout', 'onBlur');
pt(Zs, 'onTransitionEnd');
Jt('onMouseEnter', ['mouseout', 'mouseover']);
Jt('onMouseLeave', ['mouseout', 'mouseover']);
Jt('onPointerEnter', ['pointerout', 'pointerover']);
Jt('onPointerLeave', ['pointerout', 'pointerover']);
Tt(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Tt(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Tt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Tt(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Tt(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Tt(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Sn =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Qf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Sn));
function au(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Bc(r, t, void 0, e), (e.currentTarget = null);
}
function qs(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          au(l, u, c), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          au(l, u, c), (o = s);
        }
    }
  }
  if (Or) throw ((e = so), (Or = !1), (so = null), e);
}
function M(e, t) {
  var n = t[wo];
  n === void 0 && (n = t[wo] = new Set());
  var r = e + '__bubble';
  n.has(r) || (bs(t, e, 2, !1), n.add(r));
}
function jl(e, t, n) {
  var r = 0;
  t && (r |= 4), bs(n, e, r, t);
}
var cr = '_reactListening' + Math.random().toString(36).slice(2);
function $n(e) {
  if (!e[cr]) {
    (e[cr] = !0),
      is.forEach(function (n) {
        n !== 'selectionchange' && (Qf.has(n) || jl(n, !1, e), jl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[cr] || ((t[cr] = !0), jl('selectionchange', !1, t));
  }
}
function bs(e, t, n, r) {
  switch (Is(t)) {
    case 1:
      var l = lf;
      break;
    case 4:
      l = of;
      break;
    default:
      l = ei;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !uo ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Ml(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = kt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Es(function () {
    var c = o,
      m = Zo(n),
      h = [];
    e: {
      var p = Js.get(e);
      if (p !== void 0) {
        var g = ni,
          w = e;
        switch (e) {
          case 'keypress':
            if (Er(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = Sf;
            break;
          case 'focusin':
            (w = 'focus'), (g = Nl);
            break;
          case 'focusout':
            (w = 'blur'), (g = Nl);
            break;
          case 'beforeblur':
          case 'afterblur':
            g = Nl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = Ji;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = af;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = _f;
            break;
          case Ys:
          case Gs:
          case Xs:
            g = df;
            break;
          case Zs:
            g = Pf;
            break;
          case 'scroll':
            g = uf;
            break;
          case 'wheel':
            g = zf;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = hf;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = bi;
        }
        var k = (t & 4) !== 0,
          I = !k && e === 'scroll',
          f = k ? (p !== null ? p + 'Capture' : null) : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = jn(a, f)), v != null && k.push(An(a, v, d)))),
            I)
          )
            break;
          a = a.return;
        }
        0 < k.length &&
          ((p = new g(p, w, null, n, m)), h.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          p &&
            n !== oo &&
            (w = n.relatedTarget || n.fromElement) &&
            (kt(w) || w[Qe]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            m.window === m
              ? m
              : (p = m.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = c),
              (w = w ? kt(w) : null),
              w !== null &&
                ((I = Rt(w)), w !== I || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = c)),
          g !== w)
        ) {
          if (
            ((k = Ji),
            (v = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (a = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((k = bi),
              (v = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (a = 'pointer')),
            (I = g == null ? p : Ut(g)),
            (d = w == null ? p : Ut(w)),
            (p = new k(v, a + 'leave', g, n, m)),
            (p.target = I),
            (p.relatedTarget = d),
            (v = null),
            kt(m) === c &&
              ((k = new k(f, a + 'enter', w, n, m)),
              (k.target = d),
              (k.relatedTarget = I),
              (v = k)),
            (I = v),
            g && w)
          )
            t: {
              for (k = g, f = w, a = 0, d = k; d; d = Ot(d)) a++;
              for (d = 0, v = f; v; v = Ot(v)) d++;
              for (; 0 < a - d; ) (k = Ot(k)), a--;
              for (; 0 < d - a; ) (f = Ot(f)), d--;
              for (; a--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t;
                (k = Ot(k)), (f = Ot(f));
              }
              k = null;
            }
          else k = null;
          g !== null && cu(h, p, g, k, !1),
            w !== null && I !== null && cu(h, I, w, k, !0);
        }
      }
      e: {
        if (
          ((p = c ? Ut(c) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && p.type === 'file'))
        )
          var E = Df;
        else if (nu(p))
          if (Bs) E = $f;
          else {
            E = Ff;
            var _ = If;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (E = Uf);
        if (E && (E = E(e, c))) {
          Vs(h, E, n, m);
          break e;
        }
        _ && _(e, p, c),
          e === 'focusout' &&
            (_ = p._wrapperState) &&
            _.controlled &&
            p.type === 'number' &&
            eo(p, 'number', p.value);
      }
      switch (((_ = c ? Ut(c) : window), e)) {
        case 'focusin':
          (nu(_) || _.contentEditable === 'true') &&
            ((It = _), (po = c), (Pn = null));
          break;
        case 'focusout':
          Pn = po = It = null;
          break;
        case 'mousedown':
          ho = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (ho = !1), uu(h, n, m);
          break;
        case 'selectionchange':
          if (Bf) break;
        case 'keydown':
        case 'keyup':
          uu(h, n, m);
      }
      var C;
      if (li)
        e: {
          switch (e) {
            case 'compositionstart':
              var P = 'onCompositionStart';
              break e;
            case 'compositionend':
              P = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              P = 'onCompositionUpdate';
              break e;
          }
          P = void 0;
        }
      else
        Dt
          ? $s(e, n) && (P = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart');
      P &&
        (Us &&
          n.locale !== 'ko' &&
          (Dt || P !== 'onCompositionStart'
            ? P === 'onCompositionEnd' && Dt && (C = Fs())
            : ((tt = m),
              (ti = 'value' in tt ? tt.value : tt.textContent),
              (Dt = !0))),
        (_ = Fr(c, P)),
        0 < _.length &&
          ((P = new qi(P, e, null, n, m)),
          h.push({ event: P, listeners: _ }),
          C ? (P.data = C) : ((C = As(n)), C !== null && (P.data = C)))),
        (C = Tf ? Rf(e, n) : Of(e, n)) &&
          ((c = Fr(c, 'onBeforeInput')),
          0 < c.length &&
            ((m = new qi('onBeforeInput', 'beforeinput', null, n, m)),
            h.push({ event: m, listeners: c }),
            (m.data = C)));
    }
    qs(h, t);
  });
}
function An(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Fr(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = jn(e, n)),
      o != null && r.unshift(An(e, o, l)),
      (o = jn(e, t)),
      o != null && r.push(An(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Ot(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function cu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = jn(n, o)), s != null && i.unshift(An(n, s, u)))
        : l || ((s = jn(n, o)), s != null && i.push(An(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Kf = /\r\n?/g,
  Yf = /\u0000|\uFFFD/g;
function fu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Kf,
      `
`
    )
    .replace(Yf, '');
}
function fr(e, t, n) {
  if (((t = fu(t)), fu(e) !== t && n)) throw Error(y(425));
}
function Ur() {}
var mo = null,
  vo = null;
function yo(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var go = typeof setTimeout == 'function' ? setTimeout : void 0,
  Gf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  du = typeof Promise == 'function' ? Promise : void 0,
  Xf =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof du < 'u'
      ? function (e) {
          return du.resolve(null).then(e).catch(Zf);
        }
      : go;
function Zf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Dl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), In(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  In(t);
}
function it(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function pu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var un = Math.random().toString(36).slice(2),
  Ie = '__reactFiber$' + un,
  Vn = '__reactProps$' + un,
  Qe = '__reactContainer$' + un,
  wo = '__reactEvents$' + un,
  Jf = '__reactListeners$' + un,
  qf = '__reactHandles$' + un;
function kt(e) {
  var t = e[Ie];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Qe] || n[Ie])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = pu(e); e !== null; ) {
          if ((n = e[Ie])) return n;
          e = pu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Jn(e) {
  return (
    (e = e[Ie] || e[Qe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ut(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function ol(e) {
  return e[Vn] || null;
}
var ko = [],
  $t = -1;
function ht(e) {
  return { current: e };
}
function D(e) {
  0 > $t || ((e.current = ko[$t]), (ko[$t] = null), $t--);
}
function j(e, t) {
  $t++, (ko[$t] = e.current), (e.current = t);
}
var dt = {},
  le = ht(dt),
  fe = ht(!1),
  Ct = dt;
function qt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function de(e) {
  return (e = e.childContextTypes), e != null;
}
function $r() {
  D(fe), D(le);
}
function hu(e, t, n) {
  if (le.current !== dt) throw Error(y(168));
  j(le, t), j(fe, n);
}
function ea(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Dc(e) || 'Unknown', l));
  return V({}, n, r);
}
function Ar(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dt),
    (Ct = le.current),
    j(le, e),
    j(fe, fe.current),
    !0
  );
}
function mu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = ea(e, t, Ct)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      D(fe),
      D(le),
      j(le, e))
    : D(fe),
    j(fe, n);
}
var Ae = null,
  il = !1,
  Il = !1;
function ta(e) {
  Ae === null ? (Ae = [e]) : Ae.push(e);
}
function bf(e) {
  (il = !0), ta(e);
}
function mt() {
  if (!Il && Ae !== null) {
    Il = !0;
    var e = 0,
      t = O;
    try {
      var n = Ae;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ae = null), (il = !1);
    } catch (l) {
      throw (Ae !== null && (Ae = Ae.slice(e + 1)), Ps(Jo, mt), l);
    } finally {
      (O = t), (Il = !1);
    }
  }
  return null;
}
var At = [],
  Vt = 0,
  Vr = null,
  Br = 0,
  ke = [],
  Se = 0,
  Pt = null,
  Ve = 1,
  Be = '';
function gt(e, t) {
  (At[Vt++] = Br), (At[Vt++] = Vr), (Vr = e), (Br = t);
}
function na(e, t, n) {
  (ke[Se++] = Ve), (ke[Se++] = Be), (ke[Se++] = Pt), (Pt = e);
  var r = Ve;
  e = Be;
  var l = 32 - Re(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Re(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Ve = (1 << (32 - Re(t) + l)) | (n << l) | r),
      (Be = o + e);
  } else (Ve = (1 << o) | (n << l) | r), (Be = e);
}
function ii(e) {
  e.return !== null && (gt(e, 1), na(e, 1, 0));
}
function ui(e) {
  for (; e === Vr; )
    (Vr = At[--Vt]), (At[Vt] = null), (Br = At[--Vt]), (At[Vt] = null);
  for (; e === Pt; )
    (Pt = ke[--Se]),
      (ke[Se] = null),
      (Be = ke[--Se]),
      (ke[Se] = null),
      (Ve = ke[--Se]),
      (ke[Se] = null);
}
var ve = null,
  me = null,
  U = !1,
  Te = null;
function ra(e, t) {
  var n = Ee(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function vu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ve = e), (me = it(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ve = e), (me = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Pt !== null ? { id: Ve, overflow: Be } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ee(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ve = e),
            (me = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function So(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Eo(e) {
  if (U) {
    var t = me;
    if (t) {
      var n = t;
      if (!vu(e, t)) {
        if (So(e)) throw Error(y(418));
        t = it(n.nextSibling);
        var r = ve;
        t && vu(e, t)
          ? ra(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ve = e));
      }
    } else {
      if (So(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ve = e);
    }
  }
}
function yu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function dr(e) {
  if (e !== ve) return !1;
  if (!U) return yu(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !yo(e.type, e.memoizedProps))),
    t && (t = me))
  ) {
    if (So(e)) throw (la(), Error(y(418)));
    for (; t; ) ra(e, t), (t = it(t.nextSibling));
  }
  if ((yu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              me = it(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      me = null;
    }
  } else me = ve ? it(e.stateNode.nextSibling) : null;
  return !0;
}
function la() {
  for (var e = me; e; ) e = it(e.nextSibling);
}
function bt() {
  (me = ve = null), (U = !1);
}
function si(e) {
  Te === null ? (Te = [e]) : Te.push(e);
}
var ed = Ge.ReactCurrentBatchConfig;
function ze(e, t) {
  if (e && e.defaultProps) {
    (t = V({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Hr = ht(null),
  Wr = null,
  Bt = null,
  ai = null;
function ci() {
  ai = Bt = Wr = null;
}
function fi(e) {
  var t = Hr.current;
  D(Hr), (e._currentValue = t);
}
function xo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Xt(e, t) {
  (Wr = e),
    (ai = Bt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ce = !0), (e.firstContext = null));
}
function _e(e) {
  var t = e._currentValue;
  if (ai !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Bt === null)) {
      if (Wr === null) throw Error(y(308));
      (Bt = e), (Wr.dependencies = { lanes: 0, firstContext: e });
    } else Bt = Bt.next = e;
  return t;
}
var St = null;
function di(e) {
  St === null ? (St = [e]) : St.push(e);
}
function oa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), di(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ke(e, r)
  );
}
function Ke(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Je = !1;
function pi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ia(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function He(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ke(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), di(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ke(e, n)
  );
}
function xr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qo(e, n);
  }
}
function gu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Qr(e, t, n, r) {
  var l = e.updateQueue;
  Je = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), i === null ? (o = c) : (i.next = c), (i = s);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (u = m.lastBaseUpdate),
      u !== i &&
        (u === null ? (m.firstBaseUpdate = c) : (u.next = c),
        (m.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (m = c = s = null), (u = o);
    do {
      var p = u.lane,
        g = u.eventTime;
      if ((r & p) === p) {
        m !== null &&
          (m = m.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            k = u;
          switch (((p = t), (g = n), k.tag)) {
            case 1:
              if (((w = k.payload), typeof w == 'function')) {
                h = w.call(g, h, p);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = k.payload),
                (p = typeof w == 'function' ? w.call(g, h, p) : w),
                p == null)
              )
                break e;
              h = V({}, h, p);
              break e;
            case 2:
              Je = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          m === null ? ((c = m = g), (s = h)) : (m = m.next = g),
          (i |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (m === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (zt |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function wu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var ua = new os.Component().refs;
function _o(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ul = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Rt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ie(),
      l = at(e),
      o = He(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ut(e, o, l)),
      t !== null && (Oe(t, e, l, r), xr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ie(),
      l = at(e),
      o = He(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ut(e, o, l)),
      t !== null && (Oe(t, e, l, r), xr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ie(),
      r = at(e),
      l = He(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ut(e, l, r)),
      t !== null && (Oe(t, e, r, n), xr(t, e, r));
  },
};
function ku(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Un(n, r) || !Un(l, o)
      : !0
  );
}
function sa(e, t, n) {
  var r = !1,
    l = dt,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = _e(o))
      : ((l = de(t) ? Ct : le.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? qt(e, l) : dt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ul),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Su(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ul.enqueueReplaceState(t, t.state, null);
}
function Co(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = ua), pi(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (l.context = _e(o))
    : ((o = de(t) ? Ct : le.current), (l.context = qt(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (_o(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && ul.enqueueReplaceState(l, l.state, null),
      Qr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function mn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === ua && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function pr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Eu(e) {
  var t = e._init;
  return t(e._payload);
}
function aa(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = ct(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6
      ? ((a = Hl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, v) {
    var E = d.type;
    return E === Mt
      ? m(f, a, d.props.children, v, d.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E == 'object' &&
            E !== null &&
            E.$$typeof === Ze &&
            Eu(E) === a.type))
      ? ((v = l(a, d.props)), (v.ref = mn(f, a, d)), (v.return = f), v)
      : ((v = Lr(d.type, d.key, d.props, null, f.mode, v)),
        (v.ref = mn(f, a, d)),
        (v.return = f),
        v);
  }
  function c(f, a, d, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Wl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function m(f, a, d, v, E) {
    return a === null || a.tag !== 7
      ? ((a = _t(d, f.mode, v, E)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function h(f, a, d) {
    if ((typeof a == 'string' && a !== '') || typeof a == 'number')
      return (a = Hl('' + a, f.mode, d)), (a.return = f), a;
    if (typeof a == 'object' && a !== null) {
      switch (a.$$typeof) {
        case nr:
          return (
            (d = Lr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = mn(f, null, a)),
            (d.return = f),
            d
          );
        case jt:
          return (a = Wl(a, f.mode, d)), (a.return = f), a;
        case Ze:
          var v = a._init;
          return h(f, v(a._payload), d);
      }
      if (wn(a) || cn(a))
        return (a = _t(a, f.mode, d, null)), (a.return = f), a;
      pr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var E = a !== null ? a.key : null;
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return E !== null ? null : u(f, a, '' + d, v);
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case nr:
          return d.key === E ? s(f, a, d, v) : null;
        case jt:
          return d.key === E ? c(f, a, d, v) : null;
        case Ze:
          return (E = d._init), p(f, a, E(d._payload), v);
      }
      if (wn(d) || cn(d)) return E !== null ? null : m(f, a, d, v, null);
      pr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, E) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return (f = f.get(d) || null), u(a, f, '' + v, E);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case nr:
          return (f = f.get(v.key === null ? d : v.key) || null), s(a, f, v, E);
        case jt:
          return (f = f.get(v.key === null ? d : v.key) || null), c(a, f, v, E);
        case Ze:
          var _ = v._init;
          return g(f, a, d, _(v._payload), E);
      }
      if (wn(v) || cn(v)) return (f = f.get(d) || null), m(a, f, v, E, null);
      pr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (
      var E = null, _ = null, C = a, P = (a = 0), H = null;
      C !== null && P < d.length;
      P++
    ) {
      C.index > P ? ((H = C), (C = null)) : (H = C.sibling);
      var T = p(f, C, d[P], v);
      if (T === null) {
        C === null && (C = H);
        break;
      }
      e && C && T.alternate === null && t(f, C),
        (a = o(T, a, P)),
        _ === null ? (E = T) : (_.sibling = T),
        (_ = T),
        (C = H);
    }
    if (P === d.length) return n(f, C), U && gt(f, P), E;
    if (C === null) {
      for (; P < d.length; P++)
        (C = h(f, d[P], v)),
          C !== null &&
            ((a = o(C, a, P)), _ === null ? (E = C) : (_.sibling = C), (_ = C));
      return U && gt(f, P), E;
    }
    for (C = r(f, C); P < d.length; P++)
      (H = g(C, f, P, d[P], v)),
        H !== null &&
          (e && H.alternate !== null && C.delete(H.key === null ? P : H.key),
          (a = o(H, a, P)),
          _ === null ? (E = H) : (_.sibling = H),
          (_ = H));
    return (
      e &&
        C.forEach(function (Pe) {
          return t(f, Pe);
        }),
      U && gt(f, P),
      E
    );
  }
  function k(f, a, d, v) {
    var E = cn(d);
    if (typeof E != 'function') throw Error(y(150));
    if (((d = E.call(d)), d == null)) throw Error(y(151));
    for (
      var _ = (E = null), C = a, P = (a = 0), H = null, T = d.next();
      C !== null && !T.done;
      P++, T = d.next()
    ) {
      C.index > P ? ((H = C), (C = null)) : (H = C.sibling);
      var Pe = p(f, C, T.value, v);
      if (Pe === null) {
        C === null && (C = H);
        break;
      }
      e && C && Pe.alternate === null && t(f, C),
        (a = o(Pe, a, P)),
        _ === null ? (E = Pe) : (_.sibling = Pe),
        (_ = Pe),
        (C = H);
    }
    if (T.done) return n(f, C), U && gt(f, P), E;
    if (C === null) {
      for (; !T.done; P++, T = d.next())
        (T = h(f, T.value, v)),
          T !== null &&
            ((a = o(T, a, P)), _ === null ? (E = T) : (_.sibling = T), (_ = T));
      return U && gt(f, P), E;
    }
    for (C = r(f, C); !T.done; P++, T = d.next())
      (T = g(C, f, P, T.value, v)),
        T !== null &&
          (e && T.alternate !== null && C.delete(T.key === null ? P : T.key),
          (a = o(T, a, P)),
          _ === null ? (E = T) : (_.sibling = T),
          (_ = T));
    return (
      e &&
        C.forEach(function (sn) {
          return t(f, sn);
        }),
      U && gt(f, P),
      E
    );
  }
  function I(f, a, d, v) {
    if (
      (typeof d == 'object' &&
        d !== null &&
        d.type === Mt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == 'object' && d !== null)
    ) {
      switch (d.$$typeof) {
        case nr:
          e: {
            for (var E = d.key, _ = a; _ !== null; ) {
              if (_.key === E) {
                if (((E = d.type), E === Mt)) {
                  if (_.tag === 7) {
                    n(f, _.sibling),
                      (a = l(_, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  _.elementType === E ||
                  (typeof E == 'object' &&
                    E !== null &&
                    E.$$typeof === Ze &&
                    Eu(E) === _.type)
                ) {
                  n(f, _.sibling),
                    (a = l(_, d.props)),
                    (a.ref = mn(f, _, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            d.type === Mt
              ? ((a = _t(d.props.children, f.mode, v, d.key)),
                (a.return = f),
                (f = a))
              : ((v = Lr(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = mn(f, a, d)),
                (v.return = f),
                (f = v));
          }
          return i(f);
        case jt:
          e: {
            for (_ = d.key; a !== null; ) {
              if (a.key === _)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Wl(d, f.mode, v)), (a.return = f), (f = a);
          }
          return i(f);
        case Ze:
          return (_ = d._init), I(f, a, _(d._payload), v);
      }
      if (wn(d)) return w(f, a, d, v);
      if (cn(d)) return k(f, a, d, v);
      pr(f, d);
    }
    return (typeof d == 'string' && d !== '') || typeof d == 'number'
      ? ((d = '' + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = Hl(d, f.mode, v)), (a.return = f), (f = a)),
        i(f))
      : n(f, a);
  }
  return I;
}
var en = aa(!0),
  ca = aa(!1),
  qn = {},
  Ue = ht(qn),
  Bn = ht(qn),
  Hn = ht(qn);
function Et(e) {
  if (e === qn) throw Error(y(174));
  return e;
}
function hi(e, t) {
  switch ((j(Hn, t), j(Bn, e), j(Ue, qn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : no(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = no(t, e));
  }
  D(Ue), j(Ue, t);
}
function tn() {
  D(Ue), D(Bn), D(Hn);
}
function fa(e) {
  Et(Hn.current);
  var t = Et(Ue.current),
    n = no(t, e.type);
  t !== n && (j(Bn, e), j(Ue, n));
}
function mi(e) {
  Bn.current === e && (D(Ue), D(Bn));
}
var $ = ht(0);
function Kr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Fl = [];
function vi() {
  for (var e = 0; e < Fl.length; e++)
    Fl[e]._workInProgressVersionPrimary = null;
  Fl.length = 0;
}
var _r = Ge.ReactCurrentDispatcher,
  Ul = Ge.ReactCurrentBatchConfig,
  Nt = 0,
  A = null,
  Y = null,
  Z = null,
  Yr = !1,
  Nn = !1,
  Wn = 0,
  td = 0;
function te() {
  throw Error(y(321));
}
function yi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!je(e[n], t[n])) return !1;
  return !0;
}
function gi(e, t, n, r, l, o) {
  if (
    ((Nt = o),
    (A = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (_r.current = e === null || e.memoizedState === null ? od : id),
    (e = n(r, l)),
    Nn)
  ) {
    o = 0;
    do {
      if (((Nn = !1), (Wn = 0), 25 <= o)) throw Error(y(301));
      (o += 1),
        (Z = Y = null),
        (t.updateQueue = null),
        (_r.current = ud),
        (e = n(r, l));
    } while (Nn);
  }
  if (
    ((_r.current = Gr),
    (t = Y !== null && Y.next !== null),
    (Nt = 0),
    (Z = Y = A = null),
    (Yr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function wi() {
  var e = Wn !== 0;
  return (Wn = 0), e;
}
function De() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (A.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function Ce() {
  if (Y === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = Z === null ? A.memoizedState : Z.next;
  if (t !== null) (Z = t), (Y = e);
  else {
    if (e === null) throw Error(y(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      Z === null ? (A.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Qn(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function $l(e) {
  var t = Ce(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      c = o;
    do {
      var m = c.lane;
      if ((Nt & m) === m)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (i = r)) : (s = s.next = h),
          (A.lanes |= m),
          (zt |= m);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (i = r) : (s.next = u),
      je(r, t.memoizedState) || (ce = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (A.lanes |= o), (zt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Al(e) {
  var t = Ce(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    je(o, t.memoizedState) || (ce = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function da() {}
function pa(e, t) {
  var n = A,
    r = Ce(),
    l = t(),
    o = !je(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ce = !0)),
    (r = r.queue),
    ki(va.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Kn(9, ma.bind(null, n, r, l, t), void 0, null),
      J === null)
    )
      throw Error(y(349));
    Nt & 30 || ha(n, t, l);
  }
  return l;
}
function ha(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ma(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ya(t) && ga(e);
}
function va(e, t, n) {
  return n(function () {
    ya(t) && ga(e);
  });
}
function ya(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !je(e, n);
  } catch {
    return !0;
  }
}
function ga(e) {
  var t = Ke(e, 1);
  t !== null && Oe(t, e, 1, -1);
}
function xu(e) {
  var t = De();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ld.bind(null, A, e)),
    [t.memoizedState, e]
  );
}
function Kn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function wa() {
  return Ce().memoizedState;
}
function Cr(e, t, n, r) {
  var l = De();
  (A.flags |= e),
    (l.memoizedState = Kn(1 | t, n, void 0, r === void 0 ? null : r));
}
function sl(e, t, n, r) {
  var l = Ce();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Y !== null) {
    var i = Y.memoizedState;
    if (((o = i.destroy), r !== null && yi(r, i.deps))) {
      l.memoizedState = Kn(t, n, o, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = Kn(1 | t, n, o, r));
}
function _u(e, t) {
  return Cr(8390656, 8, e, t);
}
function ki(e, t) {
  return sl(2048, 8, e, t);
}
function ka(e, t) {
  return sl(4, 2, e, t);
}
function Sa(e, t) {
  return sl(4, 4, e, t);
}
function Ea(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function xa(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), sl(4, 4, Ea.bind(null, t, e), n)
  );
}
function Si() {}
function _a(e, t) {
  var n = Ce();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ca(e, t) {
  var n = Ce();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Pa(e, t, n) {
  return Nt & 21
    ? (je(n, t) || ((n = Ls()), (A.lanes |= n), (zt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = n));
}
function nd(e, t) {
  var n = O;
  (O = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ul.transition;
  Ul.transition = {};
  try {
    e(!1), t();
  } finally {
    (O = n), (Ul.transition = r);
  }
}
function Na() {
  return Ce().memoizedState;
}
function rd(e, t, n) {
  var r = at(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    za(e))
  )
    La(t, n);
  else if (((n = oa(e, t, n, r)), n !== null)) {
    var l = ie();
    Oe(n, e, r, l), Ta(n, t, r);
  }
}
function ld(e, t, n) {
  var r = at(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (za(e)) La(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), je(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), di(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = oa(e, t, l, r)),
      n !== null && ((l = ie()), Oe(n, e, r, l), Ta(n, t, r));
  }
}
function za(e) {
  var t = e.alternate;
  return e === A || (t !== null && t === A);
}
function La(e, t) {
  Nn = Yr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ta(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qo(e, n);
  }
}
var Gr = {
    readContext: _e,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  od = {
    readContext: _e,
    useCallback: function (e, t) {
      return (De().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: _e,
    useEffect: _u,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Cr(4194308, 4, Ea.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Cr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Cr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = De();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = De();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = rd.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = De();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: xu,
    useDebugValue: Si,
    useDeferredValue: function (e) {
      return (De().memoizedState = e);
    },
    useTransition: function () {
      var e = xu(!1),
        t = e[0];
      return (e = nd.bind(null, e[1])), (De().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = A,
        l = De();
      if (U) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(y(349));
        Nt & 30 || ha(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        _u(va.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Kn(9, ma.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = De(),
        t = J.identifierPrefix;
      if (U) {
        var n = Be,
          r = Ve;
        (n = (r & ~(1 << (32 - Re(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Wn++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = td++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  id = {
    readContext: _e,
    useCallback: _a,
    useContext: _e,
    useEffect: ki,
    useImperativeHandle: xa,
    useInsertionEffect: ka,
    useLayoutEffect: Sa,
    useMemo: Ca,
    useReducer: $l,
    useRef: wa,
    useState: function () {
      return $l(Qn);
    },
    useDebugValue: Si,
    useDeferredValue: function (e) {
      var t = Ce();
      return Pa(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = $l(Qn)[0],
        t = Ce().memoizedState;
      return [e, t];
    },
    useMutableSource: da,
    useSyncExternalStore: pa,
    useId: Na,
    unstable_isNewReconciler: !1,
  },
  ud = {
    readContext: _e,
    useCallback: _a,
    useContext: _e,
    useEffect: ki,
    useImperativeHandle: xa,
    useInsertionEffect: ka,
    useLayoutEffect: Sa,
    useMemo: Ca,
    useReducer: Al,
    useRef: wa,
    useState: function () {
      return Al(Qn);
    },
    useDebugValue: Si,
    useDeferredValue: function (e) {
      var t = Ce();
      return Y === null ? (t.memoizedState = e) : Pa(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Al(Qn)[0],
        t = Ce().memoizedState;
      return [e, t];
    },
    useMutableSource: da,
    useSyncExternalStore: pa,
    useId: Na,
    unstable_isNewReconciler: !1,
  };
function nn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Mc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Vl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Po(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var sd = typeof WeakMap == 'function' ? WeakMap : Map;
function Ra(e, t, n) {
  (n = He(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Zr || ((Zr = !0), (Io = r)), Po(e, t);
    }),
    n
  );
}
function Oa(e, t, n) {
  (n = He(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Po(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Po(e, t),
          typeof r != 'function' &&
            (st === null ? (st = new Set([this])) : st.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function Cu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Ed.bind(null, e, t, n)), t.then(e, e));
}
function Pu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Nu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = He(-1, 1)), (t.tag = 2), ut(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ad = Ge.ReactCurrentOwner,
  ce = !1;
function oe(e, t, n, r) {
  t.child = e === null ? ca(t, null, n, r) : en(t, e.child, n, r);
}
function zu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Xt(t, l),
    (r = gi(e, t, n, r, o, l)),
    (n = wi()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ye(e, t, l))
      : (U && n && ii(t), (t.flags |= 1), oe(e, t, r, l), t.child)
  );
}
function Lu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !Li(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), ja(e, t, o, r, l))
      : ((e = Lr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Un), n(i, r) && e.ref === t.ref)
    )
      return Ye(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ct(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ja(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Un(o, r) && e.ref === t.ref)
      if (((ce = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ce = !0);
      else return (t.lanes = e.lanes), Ye(e, t, l);
  }
  return No(e, t, n, r, l);
}
function Ma(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        j(Wt, he),
        (he |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          j(Wt, he),
          (he |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        j(Wt, he),
        (he |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      j(Wt, he),
      (he |= r);
  return oe(e, t, l, n), t.child;
}
function Da(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function No(e, t, n, r, l) {
  var o = de(n) ? Ct : le.current;
  return (
    (o = qt(t, o)),
    Xt(t, l),
    (n = gi(e, t, n, r, o, l)),
    (r = wi()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ye(e, t, l))
      : (U && r && ii(t), (t.flags |= 1), oe(e, t, n, l), t.child)
  );
}
function Tu(e, t, n, r, l) {
  if (de(n)) {
    var o = !0;
    Ar(t);
  } else o = !1;
  if ((Xt(t, l), t.stateNode === null))
    Pr(e, t), sa(t, n, r), Co(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      c = n.contextType;
    typeof c == 'object' && c !== null
      ? (c = _e(c))
      : ((c = de(n) ? Ct : le.current), (c = qt(t, c)));
    var m = n.getDerivedStateFromProps,
      h =
        typeof m == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== c) && Su(t, i, r, c)),
      (Je = !1);
    var p = t.memoizedState;
    (i.state = p),
      Qr(t, r, i, l),
      (s = t.memoizedState),
      u !== r || p !== s || fe.current || Je
        ? (typeof m == 'function' && (_o(t, n, m, r), (s = t.memoizedState)),
          (u = Je || ku(t, n, u, r, p, s, c))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = c),
          (r = u))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      ia(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : ze(t.type, u)),
      (i.props = c),
      (h = t.pendingProps),
      (p = i.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = _e(s))
        : ((s = de(n) ? Ct : le.current), (s = qt(t, s)));
    var g = n.getDerivedStateFromProps;
    (m =
      typeof g == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== h || p !== s) && Su(t, i, r, s)),
      (Je = !1),
      (p = t.memoizedState),
      (i.state = p),
      Qr(t, r, i, l);
    var w = t.memoizedState;
    u !== h || p !== w || fe.current || Je
      ? (typeof g == 'function' && (_o(t, n, g, r), (w = t.memoizedState)),
        (c = Je || ku(t, n, c, r, p, w, s) || !1)
          ? (m ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, w, s),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, w, s)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = s),
        (r = c))
      : (typeof i.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return zo(e, t, n, r, o, l);
}
function zo(e, t, n, r, l, o) {
  Da(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && mu(t, n, !1), Ye(e, t, o);
  (r = t.stateNode), (ad.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = en(t, e.child, null, o)), (t.child = en(t, null, u, o)))
      : oe(e, t, u, o),
    (t.memoizedState = r.state),
    l && mu(t, n, !0),
    t.child
  );
}
function Ia(e) {
  var t = e.stateNode;
  t.pendingContext
    ? hu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && hu(e, t.context, !1),
    hi(e, t.containerInfo);
}
function Ru(e, t, n, r, l) {
  return bt(), si(l), (t.flags |= 256), oe(e, t, n, r), t.child;
}
var Lo = { dehydrated: null, treeContext: null, retryLane: 0 };
function To(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Fa(e, t, n) {
  var r = t.pendingProps,
    l = $.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    j($, l & 1),
    e === null)
  )
    return (
      Eo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = fl(i, r, 0, null)),
              (e = _t(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = To(n)),
              (t.memoizedState = Lo),
              e)
            : Ei(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return cd(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ct(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = ct(u, o)) : ((o = _t(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? To(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Lo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ct(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ei(e, t) {
  return (
    (t = fl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function hr(e, t, n, r) {
  return (
    r !== null && si(r),
    en(t, e.child, null, n),
    (e = Ei(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function cd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Vl(Error(y(422)))), hr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = fl({ mode: 'visible', children: r.children }, l, 0, null)),
        (o = _t(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && en(t, e.child, null, i),
        (t.child.memoizedState = To(i)),
        (t.memoizedState = Lo),
        o);
  if (!(t.mode & 1)) return hr(e, t, i, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(y(419))), (r = Vl(o, r, void 0)), hr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), ce || u)) {
    if (((r = J), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ke(e, l), Oe(r, e, l, -1));
    }
    return zi(), (r = Vl(Error(y(421)))), hr(e, t, i, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = xd.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (me = it(l.nextSibling)),
      (ve = t),
      (U = !0),
      (Te = null),
      e !== null &&
        ((ke[Se++] = Ve),
        (ke[Se++] = Be),
        (ke[Se++] = Pt),
        (Ve = e.id),
        (Be = e.overflow),
        (Pt = t)),
      (t = Ei(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ou(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), xo(e.return, t, n);
}
function Bl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Ua(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((oe(e, t, r.children, n), (r = $.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ou(e, n, t);
        else if (e.tag === 19) Ou(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((j($, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Kr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Bl(t, !1, l, n, o);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Kr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Bl(t, !0, n, null, o);
        break;
      case 'together':
        Bl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Pr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ye(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (zt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ct(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ct(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function fd(e, t, n) {
  switch (t.tag) {
    case 3:
      Ia(t), bt();
      break;
    case 5:
      fa(t);
      break;
    case 1:
      de(t.type) && Ar(t);
      break;
    case 4:
      hi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      j(Hr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (j($, $.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Fa(e, t, n)
          : (j($, $.current & 1),
            (e = Ye(e, t, n)),
            e !== null ? e.sibling : null);
      j($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ua(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        j($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ma(e, t, n);
  }
  return Ye(e, t, n);
}
var $a, Ro, Aa, Va;
$a = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ro = function () {};
Aa = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Et(Ue.current);
    var o = null;
    switch (n) {
      case 'input':
        (l = ql(e, l)), (r = ql(e, r)), (o = []);
        break;
      case 'select':
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (l = to(e, l)), (r = to(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Ur);
    }
    ro(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === 'style') {
          var u = l[c];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (Rn.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === 'style')
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = s);
        else
          c === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(c, s))
            : c === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (o = o || []).push(c, '' + s)
            : c !== 'suppressContentEditableWarning' &&
              c !== 'suppressHydrationWarning' &&
              (Rn.hasOwnProperty(c)
                ? (s != null && c === 'onScroll' && M('scroll', e),
                  o || u === s || (o = []))
                : (o = o || []).push(c, s));
    }
    n && (o = o || []).push('style', n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Va = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function vn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function dd(e, t, n) {
  var r = t.pendingProps;
  switch ((ui(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ne(t), null;
    case 1:
      return de(t.type) && $r(), ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        tn(),
        D(fe),
        D(le),
        vi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (dr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Te !== null && ($o(Te), (Te = null)))),
        Ro(e, t),
        ne(t),
        null
      );
    case 5:
      mi(t);
      var l = Et(Hn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Aa(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return ne(t), null;
        }
        if (((e = Et(Ue.current)), dr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ie] = t), (r[Vn] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              M('cancel', r), M('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              M('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < Sn.length; l++) M(Sn[l], r);
              break;
            case 'source':
              M('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              M('error', r), M('load', r);
              break;
            case 'details':
              M('toggle', r);
              break;
            case 'input':
              Vi(r, o), M('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                M('invalid', r);
              break;
            case 'textarea':
              Hi(r, o), M('invalid', r);
          }
          ro(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : Rn.hasOwnProperty(i) &&
                  u != null &&
                  i === 'onScroll' &&
                  M('scroll', r);
            }
          switch (n) {
            case 'input':
              rr(r), Bi(r, o, !0);
              break;
            case 'textarea':
              rr(r), Wi(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = Ur);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = hs(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === 'select' &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ie] = t),
            (e[Vn] = r),
            $a(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = lo(n, r)), n)) {
              case 'dialog':
                M('cancel', e), M('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                M('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Sn.length; l++) M(Sn[l], e);
                l = r;
                break;
              case 'source':
                M('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                M('error', e), M('load', e), (l = r);
                break;
              case 'details':
                M('toggle', e), (l = r);
                break;
              case 'input':
                Vi(e, r), (l = ql(e, r)), M('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  M('invalid', e);
                break;
              case 'textarea':
                Hi(e, r), (l = to(e, r)), M('invalid', e);
                break;
              default:
                l = r;
            }
            ro(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === 'style'
                  ? ys(e, s)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && ms(e, s))
                  : o === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && On(e, s)
                    : typeof s == 'number' && On(e, '' + s)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Rn.hasOwnProperty(o)
                      ? s != null && o === 'onScroll' && M('scroll', e)
                      : s != null && Ko(e, o, s, i));
              }
            switch (n) {
              case 'input':
                rr(e), Bi(e, r, !1);
                break;
              case 'textarea':
                rr(e), Wi(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + ft(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Qt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Qt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Ur);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ne(t), null;
    case 6:
      if (e && t.stateNode != null) Va(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(y(166));
        if (((n = Et(Hn.current)), Et(Ue.current), dr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ie] = t),
            (o = r.nodeValue !== n) && ((e = ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                fr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  fr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ie] = t),
            (t.stateNode = r);
      }
      return ne(t), null;
    case 13:
      if (
        (D($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && me !== null && t.mode & 1 && !(t.flags & 128))
          la(), bt(), (t.flags |= 98560), (o = !1);
        else if (((o = dr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(y(317));
            o[Ie] = t;
          } else
            bt(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ne(t), (o = !1);
        } else Te !== null && ($o(Te), (Te = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $.current & 1 ? G === 0 && (G = 3) : zi())),
          t.updateQueue !== null && (t.flags |= 4),
          ne(t),
          null);
    case 4:
      return (
        tn(), Ro(e, t), e === null && $n(t.stateNode.containerInfo), ne(t), null
      );
    case 10:
      return fi(t.type._context), ne(t), null;
    case 17:
      return de(t.type) && $r(), ne(t), null;
    case 19:
      if ((D($), (o = t.memoizedState), o === null)) return ne(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) vn(o, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Kr(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    vn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return j($, ($.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Q() > rn &&
            ((t.flags |= 128), (r = !0), vn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Kr(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              vn(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !U)
            )
              return ne(t), null;
          } else
            2 * Q() - o.renderingStartTime > rn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), vn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Q()),
          (t.sibling = null),
          (n = $.current),
          j($, r ? (n & 1) | 2 : n & 1),
          t)
        : (ne(t), null);
    case 22:
    case 23:
      return (
        Ni(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? he & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function pd(e, t) {
  switch ((ui(t), t.tag)) {
    case 1:
      return (
        de(t.type) && $r(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        tn(),
        D(fe),
        D(le),
        vi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return mi(t), null;
    case 13:
      if ((D($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        bt();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return D($), null;
    case 4:
      return tn(), null;
    case 10:
      return fi(t.type._context), null;
    case 22:
    case 23:
      return Ni(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var mr = !1,
  re = !1,
  hd = typeof WeakSet == 'function' ? WeakSet : Set,
  S = null;
function Ht(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        B(e, t, r);
      }
    else n.current = null;
}
function Oo(e, t, n) {
  try {
    n();
  } catch (r) {
    B(e, t, r);
  }
}
var ju = !1;
function md(e, t) {
  if (((mo = Dr), (e = Qs()), oi(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            c = 0,
            m = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (s = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (p = h), (h = g);
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++c === l && (u = i),
                p === o && ++m === r && (s = i),
                (g = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (vo = { focusedElem: e, selectionRange: n }, Dr = !1, S = t; S !== null; )
    if (((t = S), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (S = e);
    else
      for (; S !== null; ) {
        t = S;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps,
                    I = w.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : ze(t.type, k),
                      I
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = '')
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          B(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (S = e);
          break;
        }
        S = t.return;
      }
  return (w = ju), (ju = !1), w;
}
function zn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Oo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function al(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function jo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Ba(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ba(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ie], delete t[Vn], delete t[wo], delete t[Jf], delete t[qf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ha(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Mu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ha(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Mo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ur));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Mo(e, t, n), e = e.sibling; e !== null; ) Mo(e, t, n), (e = e.sibling);
}
function Do(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Do(e, t, n), e = e.sibling; e !== null; ) Do(e, t, n), (e = e.sibling);
}
var q = null,
  Le = !1;
function Xe(e, t, n) {
  for (n = n.child; n !== null; ) Wa(e, t, n), (n = n.sibling);
}
function Wa(e, t, n) {
  if (Fe && typeof Fe.onCommitFiberUnmount == 'function')
    try {
      Fe.onCommitFiberUnmount(tl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      re || Ht(n, t);
    case 6:
      var r = q,
        l = Le;
      (q = null),
        Xe(e, t, n),
        (q = r),
        (Le = l),
        q !== null &&
          (Le
            ? ((e = q),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null &&
        (Le
          ? ((e = q),
            (n = n.stateNode),
            e.nodeType === 8
              ? Dl(e.parentNode, n)
              : e.nodeType === 1 && Dl(e, n),
            In(e))
          : Dl(q, n.stateNode));
      break;
    case 4:
      (r = q),
        (l = Le),
        (q = n.stateNode.containerInfo),
        (Le = !0),
        Xe(e, t, n),
        (q = r),
        (Le = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Oo(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Xe(e, t, n);
      break;
    case 1:
      if (
        !re &&
        (Ht(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          B(n, t, u);
        }
      Xe(e, t, n);
      break;
    case 21:
      Xe(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((re = (r = re) || n.memoizedState !== null), Xe(e, t, n), (re = r))
        : Xe(e, t, n);
      break;
    default:
      Xe(e, t, n);
  }
}
function Du(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new hd()),
      t.forEach(function (r) {
        var l = _d.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ne(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (q = u.stateNode), (Le = !1);
              break e;
            case 3:
              (q = u.stateNode.containerInfo), (Le = !0);
              break e;
            case 4:
              (q = u.stateNode.containerInfo), (Le = !0);
              break e;
          }
          u = u.return;
        }
        if (q === null) throw Error(y(160));
        Wa(o, i, l), (q = null), (Le = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        B(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Qa(t, e), (t = t.sibling);
}
function Qa(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ne(t, e), Me(e), r & 4)) {
        try {
          zn(3, e, e.return), al(3, e);
        } catch (k) {
          B(e, e.return, k);
        }
        try {
          zn(5, e, e.return);
        } catch (k) {
          B(e, e.return, k);
        }
      }
      break;
    case 1:
      Ne(t, e), Me(e), r & 512 && n !== null && Ht(n, n.return);
      break;
    case 5:
      if (
        (Ne(t, e),
        Me(e),
        r & 512 && n !== null && Ht(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          On(l, '');
        } catch (k) {
          B(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && o.type === 'radio' && o.name != null && ds(l, o),
              lo(u, i);
            var c = lo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var m = s[i],
                h = s[i + 1];
              m === 'style'
                ? ys(l, h)
                : m === 'dangerouslySetInnerHTML'
                ? ms(l, h)
                : m === 'children'
                ? On(l, h)
                : Ko(l, m, h, c);
            }
            switch (u) {
              case 'input':
                bl(l, o);
                break;
              case 'textarea':
                ps(l, o);
                break;
              case 'select':
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Qt(l, !!o.multiple, g, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Qt(l, !!o.multiple, o.defaultValue, !0)
                      : Qt(l, !!o.multiple, o.multiple ? [] : '', !1));
            }
            l[Vn] = o;
          } catch (k) {
            B(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Ne(t, e), Me(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (k) {
          B(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Ne(t, e), Me(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          In(t.containerInfo);
        } catch (k) {
          B(e, e.return, k);
        }
      break;
    case 4:
      Ne(t, e), Me(e);
      break;
    case 13:
      Ne(t, e),
        Me(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ci = Q())),
        r & 4 && Du(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((re = (c = re) || m), Ne(t, e), (re = c)) : Ne(t, e),
        Me(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (S = e, m = e.child; m !== null; ) {
            for (h = S = m; S !== null; ) {
              switch (((p = S), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zn(4, p, p.return);
                  break;
                case 1:
                  Ht(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == 'function') {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (k) {
                      B(r, n, k);
                    }
                  }
                  break;
                case 5:
                  Ht(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Fu(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (S = g)) : Fu(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                (l = h.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (u.style.display = vs('display', i)));
              } catch (k) {
                B(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = c ? '' : h.memoizedProps;
              } catch (k) {
                B(e, e.return, k);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), (h = h.return);
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Ne(t, e), Me(e), r & 4 && Du(e);
      break;
    case 21:
      break;
    default:
      Ne(t, e), Me(e);
  }
}
function Me(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ha(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (On(l, ''), (r.flags &= -33));
          var o = Mu(e);
          Do(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Mu(e);
          Mo(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      B(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function vd(e, t, n) {
  (S = e), Ka(e);
}
function Ka(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || mr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || re;
        u = mr;
        var c = re;
        if (((mr = i), (re = s) && !c))
          for (S = l; S !== null; )
            (i = S),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Uu(l)
                : s !== null
                ? ((s.return = i), (S = s))
                : Uu(l);
        for (; o !== null; ) (S = o), Ka(o), (o = o.sibling);
        (S = l), (mr = u), (re = c);
      }
      Iu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (S = o)) : Iu(e);
  }
}
function Iu(e) {
  for (; S !== null; ) {
    var t = S;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              re || al(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !re)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && wu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                wu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && In(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        re || (t.flags & 512 && jo(t));
      } catch (p) {
        B(t, t.return, p);
      }
    }
    if (t === e) {
      S = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Fu(e) {
  for (; S !== null; ) {
    var t = S;
    if (t === e) {
      S = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Uu(e) {
  for (; S !== null; ) {
    var t = S;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            al(4, t);
          } catch (s) {
            B(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              B(t, l, s);
            }
          }
          var o = t.return;
          try {
            jo(t);
          } catch (s) {
            B(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            jo(t);
          } catch (s) {
            B(t, i, s);
          }
      }
    } catch (s) {
      B(t, t.return, s);
    }
    if (t === e) {
      S = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (S = u);
      break;
    }
    S = t.return;
  }
}
var yd = Math.ceil,
  Xr = Ge.ReactCurrentDispatcher,
  xi = Ge.ReactCurrentOwner,
  xe = Ge.ReactCurrentBatchConfig,
  R = 0,
  J = null,
  K = null,
  b = 0,
  he = 0,
  Wt = ht(0),
  G = 0,
  Yn = null,
  zt = 0,
  cl = 0,
  _i = 0,
  Ln = null,
  ae = null,
  Ci = 0,
  rn = 1 / 0,
  $e = null,
  Zr = !1,
  Io = null,
  st = null,
  vr = !1,
  nt = null,
  Jr = 0,
  Tn = 0,
  Fo = null,
  Nr = -1,
  zr = 0;
function ie() {
  return R & 6 ? Q() : Nr !== -1 ? Nr : (Nr = Q());
}
function at(e) {
  return e.mode & 1
    ? R & 2 && b !== 0
      ? b & -b
      : ed.transition !== null
      ? (zr === 0 && (zr = Ls()), zr)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Is(e.type))),
        e)
    : 1;
}
function Oe(e, t, n, r) {
  if (50 < Tn) throw ((Tn = 0), (Fo = null), Error(y(185)));
  Xn(e, n, r),
    (!(R & 2) || e !== J) &&
      (e === J && (!(R & 2) && (cl |= n), G === 4 && et(e, b)),
      pe(e, r),
      n === 1 && R === 0 && !(t.mode & 1) && ((rn = Q() + 500), il && mt()));
}
function pe(e, t) {
  var n = e.callbackNode;
  bc(e, t);
  var r = Mr(e, e === J ? b : 0);
  if (r === 0)
    n !== null && Yi(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Yi(n), t === 1))
      e.tag === 0 ? bf($u.bind(null, e)) : ta($u.bind(null, e)),
        Xf(function () {
          !(R & 6) && mt();
        }),
        (n = null);
    else {
      switch (Ts(r)) {
        case 1:
          n = Jo;
          break;
        case 4:
          n = Ns;
          break;
        case 16:
          n = jr;
          break;
        case 536870912:
          n = zs;
          break;
        default:
          n = jr;
      }
      n = ec(n, Ya.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ya(e, t) {
  if (((Nr = -1), (zr = 0), R & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (Zt() && e.callbackNode !== n) return null;
  var r = Mr(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = qr(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var o = Xa();
    (J !== e || b !== t) && (($e = null), (rn = Q() + 500), xt(e, t));
    do
      try {
        kd();
        break;
      } catch (u) {
        Ga(e, u);
      }
    while (1);
    ci(),
      (Xr.current = o),
      (R = l),
      K !== null ? (t = 0) : ((J = null), (b = 0), (t = G));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ao(e)), l !== 0 && ((r = l), (t = Uo(e, l)))), t === 1)
    )
      throw ((n = Yn), xt(e, 0), et(e, r), pe(e, Q()), n);
    if (t === 6) et(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !gd(l) &&
          ((t = qr(e, r)),
          t === 2 && ((o = ao(e)), o !== 0 && ((r = o), (t = Uo(e, o)))),
          t === 1))
      )
        throw ((n = Yn), xt(e, 0), et(e, r), pe(e, Q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          wt(e, ae, $e);
          break;
        case 3:
          if (
            (et(e, r), (r & 130023424) === r && ((t = Ci + 500 - Q()), 10 < t))
          ) {
            if (Mr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ie(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = go(wt.bind(null, e, ae, $e), t);
            break;
          }
          wt(e, ae, $e);
          break;
        case 4:
          if ((et(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Re(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * yd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = go(wt.bind(null, e, ae, $e), r);
            break;
          }
          wt(e, ae, $e);
          break;
        case 5:
          wt(e, ae, $e);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === n ? Ya.bind(null, e) : null;
}
function Uo(e, t) {
  var n = Ln;
  return (
    e.current.memoizedState.isDehydrated && (xt(e, t).flags |= 256),
    (e = qr(e, t)),
    e !== 2 && ((t = ae), (ae = n), t !== null && $o(t)),
    e
  );
}
function $o(e) {
  ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function gd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!je(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function et(e, t) {
  for (
    t &= ~_i,
      t &= ~cl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Re(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function $u(e) {
  if (R & 6) throw Error(y(327));
  Zt();
  var t = Mr(e, 0);
  if (!(t & 1)) return pe(e, Q()), null;
  var n = qr(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ao(e);
    r !== 0 && ((t = r), (n = Uo(e, r)));
  }
  if (n === 1) throw ((n = Yn), xt(e, 0), et(e, t), pe(e, Q()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wt(e, ae, $e),
    pe(e, Q()),
    null
  );
}
function Pi(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    (R = n), R === 0 && ((rn = Q() + 500), il && mt());
  }
}
function Lt(e) {
  nt !== null && nt.tag === 0 && !(R & 6) && Zt();
  var t = R;
  R |= 1;
  var n = xe.transition,
    r = O;
  try {
    if (((xe.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), (xe.transition = n), (R = t), !(R & 6) && mt();
  }
}
function Ni() {
  (he = Wt.current), D(Wt);
}
function xt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Gf(n)), K !== null))
    for (n = K.return; n !== null; ) {
      var r = n;
      switch ((ui(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && $r();
          break;
        case 3:
          tn(), D(fe), D(le), vi();
          break;
        case 5:
          mi(r);
          break;
        case 4:
          tn();
          break;
        case 13:
          D($);
          break;
        case 19:
          D($);
          break;
        case 10:
          fi(r.type._context);
          break;
        case 22:
        case 23:
          Ni();
      }
      n = n.return;
    }
  if (
    ((J = e),
    (K = e = ct(e.current, null)),
    (b = he = t),
    (G = 0),
    (Yn = null),
    (_i = cl = zt = 0),
    (ae = Ln = null),
    St !== null)
  ) {
    for (t = 0; t < St.length; t++)
      if (((n = St[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    St = null;
  }
  return e;
}
function Ga(e, t) {
  do {
    var n = K;
    try {
      if ((ci(), (_r.current = Gr), Yr)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Yr = !1;
      }
      if (
        ((Nt = 0),
        (Z = Y = A = null),
        (Nn = !1),
        (Wn = 0),
        (xi.current = null),
        n === null || n.return === null)
      ) {
        (G = 1), (Yn = t), (K = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = b),
          (u.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var c = s,
            m = u,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p
              ? ((m.updateQueue = p.updateQueue),
                (m.memoizedState = p.memoizedState),
                (m.lanes = p.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var g = Pu(i);
          if (g !== null) {
            (g.flags &= -257),
              Nu(g, i, u, o, t),
              g.mode & 1 && Cu(o, c, t),
              (t = g),
              (s = c);
            var w = t.updateQueue;
            if (w === null) {
              var k = new Set();
              k.add(s), (t.updateQueue = k);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Cu(o, c, t), zi();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var I = Pu(i);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256),
              Nu(I, i, u, o, t),
              si(nn(s, u));
            break e;
          }
        }
        (o = s = nn(s, u)),
          G !== 4 && (G = 2),
          Ln === null ? (Ln = [o]) : Ln.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Ra(o, s, t);
              gu(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == 'function' ||
                  (d !== null &&
                    typeof d.componentDidCatch == 'function' &&
                    (st === null || !st.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = Oa(o, u, t);
                gu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Ja(n);
    } catch (E) {
      (t = E), K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Xa() {
  var e = Xr.current;
  return (Xr.current = Gr), e === null ? Gr : e;
}
function zi() {
  (G === 0 || G === 3 || G === 2) && (G = 4),
    J === null || (!(zt & 268435455) && !(cl & 268435455)) || et(J, b);
}
function qr(e, t) {
  var n = R;
  R |= 2;
  var r = Xa();
  (J !== e || b !== t) && (($e = null), xt(e, t));
  do
    try {
      wd();
      break;
    } catch (l) {
      Ga(e, l);
    }
  while (1);
  if ((ci(), (R = n), (Xr.current = r), K !== null)) throw Error(y(261));
  return (J = null), (b = 0), G;
}
function wd() {
  for (; K !== null; ) Za(K);
}
function kd() {
  for (; K !== null && !Wc(); ) Za(K);
}
function Za(e) {
  var t = ba(e.alternate, e, he);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ja(e) : (K = t),
    (xi.current = null);
}
function Ja(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = pd(n, t)), n !== null)) {
        (n.flags &= 32767), (K = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (K = null);
        return;
      }
    } else if (((n = dd(n, t, he)), n !== null)) {
      K = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function wt(e, t, n) {
  var r = O,
    l = xe.transition;
  try {
    (xe.transition = null), (O = 1), Sd(e, t, n, r);
  } finally {
    (xe.transition = l), (O = r);
  }
  return null;
}
function Sd(e, t, n, r) {
  do Zt();
  while (nt !== null);
  if (R & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (ef(e, o),
    e === J && ((K = J = null), (b = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      vr ||
      ((vr = !0),
      ec(jr, function () {
        return Zt(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = xe.transition), (xe.transition = null);
    var i = O;
    O = 1;
    var u = R;
    (R |= 4),
      (xi.current = null),
      md(e, n),
      Qa(n, e),
      Vf(vo),
      (Dr = !!mo),
      (vo = mo = null),
      (e.current = n),
      vd(n),
      Qc(),
      (R = u),
      (O = i),
      (xe.transition = o);
  } else e.current = n;
  if (
    (vr && ((vr = !1), (nt = e), (Jr = l)),
    (o = e.pendingLanes),
    o === 0 && (st = null),
    Gc(n.stateNode),
    pe(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Zr) throw ((Zr = !1), (e = Io), (Io = null), e);
  return (
    Jr & 1 && e.tag !== 0 && Zt(),
    (o = e.pendingLanes),
    o & 1 ? (e === Fo ? Tn++ : ((Tn = 0), (Fo = e))) : (Tn = 0),
    mt(),
    null
  );
}
function Zt() {
  if (nt !== null) {
    var e = Ts(Jr),
      t = xe.transition,
      n = O;
    try {
      if (((xe.transition = null), (O = 16 > e ? 16 : e), nt === null))
        var r = !1;
      else {
        if (((e = nt), (nt = null), (Jr = 0), R & 6)) throw Error(y(331));
        var l = R;
        for (R |= 4, S = e.current; S !== null; ) {
          var o = S,
            i = o.child;
          if (S.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (S = c; S !== null; ) {
                  var m = S;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zn(8, m, o);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (S = h);
                  else
                    for (; S !== null; ) {
                      m = S;
                      var p = m.sibling,
                        g = m.return;
                      if ((Ba(m), m === c)) {
                        S = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (S = p);
                        break;
                      }
                      S = g;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var I = k.sibling;
                    (k.sibling = null), (k = I);
                  } while (k !== null);
                }
              }
              S = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (S = i);
          else
            e: for (; S !== null; ) {
              if (((o = S), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zn(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (S = f);
                break e;
              }
              S = o.return;
            }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          i = S;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (S = d);
          else
            e: for (i = a; S !== null; ) {
              if (((u = S), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      al(9, u);
                  }
                } catch (E) {
                  B(u, u.return, E);
                }
              if (u === i) {
                S = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (S = v);
                break e;
              }
              S = u.return;
            }
        }
        if (
          ((R = l), mt(), Fe && typeof Fe.onPostCommitFiberRoot == 'function')
        )
          try {
            Fe.onPostCommitFiberRoot(tl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = n), (xe.transition = t);
    }
  }
  return !1;
}
function Au(e, t, n) {
  (t = nn(n, t)),
    (t = Ra(e, t, 1)),
    (e = ut(e, t, 1)),
    (t = ie()),
    e !== null && (Xn(e, 1, t), pe(e, t));
}
function B(e, t, n) {
  if (e.tag === 3) Au(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Au(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (st === null || !st.has(r)))
        ) {
          (e = nn(n, e)),
            (e = Oa(t, e, 1)),
            (t = ut(t, e, 1)),
            (e = ie()),
            t !== null && (Xn(t, 1, e), pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ed(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ie()),
    (e.pingedLanes |= e.suspendedLanes & n),
    J === e &&
      (b & n) === n &&
      (G === 4 || (G === 3 && (b & 130023424) === b && 500 > Q() - Ci)
        ? xt(e, 0)
        : (_i |= n)),
    pe(e, t);
}
function qa(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ir), (ir <<= 1), !(ir & 130023424) && (ir = 4194304))
      : (t = 1));
  var n = ie();
  (e = Ke(e, t)), e !== null && (Xn(e, t, n), pe(e, n));
}
function xd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), qa(e, n);
}
function _d(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), qa(e, n);
}
var ba;
ba = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || fe.current) ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ce = !1), fd(e, t, n);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), U && t.flags & 1048576 && na(t, Br, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Pr(e, t), (e = t.pendingProps);
      var l = qt(t, le.current);
      Xt(t, n), (l = gi(null, t, r, e, l, n));
      var o = wi();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            de(r) ? ((o = !0), Ar(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            pi(t),
            (l.updater = ul),
            (t.stateNode = l),
            (l._reactInternals = t),
            Co(t, r, e, n),
            (t = zo(null, t, r, !0, o, n)))
          : ((t.tag = 0), U && o && ii(t), oe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Pr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Pd(r)),
          (e = ze(r, e)),
          l)
        ) {
          case 0:
            t = No(null, t, r, e, n);
            break e;
          case 1:
            t = Tu(null, t, r, e, n);
            break e;
          case 11:
            t = zu(null, t, r, e, n);
            break e;
          case 14:
            t = Lu(null, t, r, ze(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        No(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Tu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ia(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          ia(e, t),
          Qr(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = nn(Error(y(423)), t)), (t = Ru(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = nn(Error(y(424)), t)), (t = Ru(e, t, r, n, l));
            break e;
          } else
            for (
              me = it(t.stateNode.containerInfo.firstChild),
                ve = t,
                U = !0,
                Te = null,
                n = ca(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((bt(), r === l)) {
            t = Ye(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        fa(t),
        e === null && Eo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        yo(r, l) ? (i = null) : o !== null && yo(r, o) && (t.flags |= 32),
        Da(e, t),
        oe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Eo(t), null;
    case 13:
      return Fa(e, t, n);
    case 4:
      return (
        hi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = en(t, null, r, n)) : oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        zu(e, t, r, l, n)
      );
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          j(Hr, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (je(o.value, i)) {
            if (o.children === l.children && !fe.current) {
              t = Ye(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = He(-1, n & -n)), (s.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null
                          ? (s.next = s)
                          : ((s.next = m.next), (m.next = s)),
                          (c.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      xo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(y(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  xo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        oe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Xt(t, n),
        (l = _e(l)),
        (r = r(l)),
        (t.flags |= 1),
        oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ze(r, t.pendingProps)),
        (l = ze(r.type, l)),
        Lu(e, t, r, l, n)
      );
    case 15:
      return ja(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Pr(e, t),
        (t.tag = 1),
        de(r) ? ((e = !0), Ar(t)) : (e = !1),
        Xt(t, n),
        sa(t, r, l),
        Co(t, r, l, n),
        zo(null, t, r, !0, e, n)
      );
    case 19:
      return Ua(e, t, n);
    case 22:
      return Ma(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function ec(e, t) {
  return Ps(e, t);
}
function Cd(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ee(e, t, n, r) {
  return new Cd(e, t, n, r);
}
function Li(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Pd(e) {
  if (typeof e == 'function') return Li(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Go)) return 11;
    if (e === Xo) return 14;
  }
  return 2;
}
function ct(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ee(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Lr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == 'function')) Li(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case Mt:
        return _t(n.children, l, o, t);
      case Yo:
        (i = 8), (l |= 8);
        break;
      case Gl:
        return (
          (e = Ee(12, n, t, l | 2)), (e.elementType = Gl), (e.lanes = o), e
        );
      case Xl:
        return (e = Ee(13, n, t, l)), (e.elementType = Xl), (e.lanes = o), e;
      case Zl:
        return (e = Ee(19, n, t, l)), (e.elementType = Zl), (e.lanes = o), e;
      case as:
        return fl(n, l, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case us:
              i = 10;
              break e;
            case ss:
              i = 9;
              break e;
            case Go:
              i = 11;
              break e;
            case Xo:
              i = 14;
              break e;
            case Ze:
              (i = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Ee(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function _t(e, t, n, r) {
  return (e = Ee(7, e, r, t)), (e.lanes = n), e;
}
function fl(e, t, n, r) {
  return (
    (e = Ee(22, e, r, t)),
    (e.elementType = as),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Hl(e, t, n) {
  return (e = Ee(6, e, null, t)), (e.lanes = n), e;
}
function Wl(e, t, n) {
  return (
    (t = Ee(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Nd(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = _l(0)),
    (this.expirationTimes = _l(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = _l(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ti(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new Nd(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ee(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    pi(o),
    e
  );
}
function zd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: jt,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function tc(e) {
  if (!e) return dt;
  e = e._reactInternals;
  e: {
    if (Rt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (de(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (de(n)) return ea(e, n, t);
  }
  return t;
}
function nc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Ti(n, r, !0, e, l, o, i, u, s)),
    (e.context = tc(null)),
    (n = e.current),
    (r = ie()),
    (l = at(n)),
    (o = He(r, l)),
    (o.callback = t ?? null),
    ut(n, o, l),
    (e.current.lanes = l),
    Xn(e, l, r),
    pe(e, r),
    e
  );
}
function dl(e, t, n, r) {
  var l = t.current,
    o = ie(),
    i = at(l);
  return (
    (n = tc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = He(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ut(l, t, i)),
    e !== null && (Oe(e, l, i, o), xr(e, l, i)),
    i
  );
}
function br(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ri(e, t) {
  Vu(e, t), (e = e.alternate) && Vu(e, t);
}
function Ld() {
  return null;
}
var rc =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Oi(e) {
  this._internalRoot = e;
}
pl.prototype.render = Oi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  dl(e, t, null, null);
};
pl.prototype.unmount = Oi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Lt(function () {
      dl(null, e, null, null);
    }),
      (t[Qe] = null);
  }
};
function pl(e) {
  this._internalRoot = e;
}
pl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = js();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++);
    be.splice(n, 0, e), n === 0 && Ds(e);
  }
};
function ji(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function hl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Bu() {}
function Td(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var c = br(i);
        o.call(c);
      };
    }
    var i = nc(t, r, e, 0, null, !1, !1, '', Bu);
    return (
      (e._reactRootContainer = i),
      (e[Qe] = i.current),
      $n(e.nodeType === 8 ? e.parentNode : e),
      Lt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var c = br(s);
      u.call(c);
    };
  }
  var s = Ti(e, 0, !1, null, null, !1, !1, '', Bu);
  return (
    (e._reactRootContainer = s),
    (e[Qe] = s.current),
    $n(e.nodeType === 8 ? e.parentNode : e),
    Lt(function () {
      dl(t, s, n, r);
    }),
    s
  );
}
function ml(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == 'function') {
      var u = l;
      l = function () {
        var s = br(i);
        u.call(s);
      };
    }
    dl(t, i, e, l);
  } else i = Td(n, t, e, l, r);
  return br(i);
}
Rs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = kn(t.pendingLanes);
        n !== 0 &&
          (qo(t, n | 1), pe(t, Q()), !(R & 6) && ((rn = Q() + 500), mt()));
      }
      break;
    case 13:
      Lt(function () {
        var r = Ke(e, 1);
        if (r !== null) {
          var l = ie();
          Oe(r, e, 1, l);
        }
      }),
        Ri(e, 1);
  }
};
bo = function (e) {
  if (e.tag === 13) {
    var t = Ke(e, 134217728);
    if (t !== null) {
      var n = ie();
      Oe(t, e, 134217728, n);
    }
    Ri(e, 134217728);
  }
};
Os = function (e) {
  if (e.tag === 13) {
    var t = at(e),
      n = Ke(e, t);
    if (n !== null) {
      var r = ie();
      Oe(n, e, t, r);
    }
    Ri(e, t);
  }
};
js = function () {
  return O;
};
Ms = function (e, t) {
  var n = O;
  try {
    return (O = e), t();
  } finally {
    O = n;
  }
};
io = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((bl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ol(r);
            if (!l) throw Error(y(90));
            fs(r), bl(r, l);
          }
        }
      }
      break;
    case 'textarea':
      ps(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Qt(e, !!n.multiple, t, !1);
  }
};
ks = Pi;
Ss = Lt;
var Rd = { usingClientEntryPoint: !1, Events: [Jn, Ut, ol, gs, ws, Pi] },
  yn = {
    findFiberByHostInstance: kt,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Od = {
    bundleType: yn.bundleType,
    version: yn.version,
    rendererPackageName: yn.rendererPackageName,
    rendererConfig: yn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ge.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = _s(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: yn.findFiberByHostInstance || Ld,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yr.isDisabled && yr.supportsFiber)
    try {
      (tl = yr.inject(Od)), (Fe = yr);
    } catch {}
}
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rd;
ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ji(t)) throw Error(y(200));
  return zd(e, t, null, n);
};
ge.createRoot = function (e, t) {
  if (!ji(e)) throw Error(y(299));
  var n = !1,
    r = '',
    l = rc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ti(e, 1, !1, null, null, n, !1, r, l)),
    (e[Qe] = t.current),
    $n(e.nodeType === 8 ? e.parentNode : e),
    new Oi(t)
  );
};
ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(y(188))
      : ((e = Object.keys(e).join(',')), Error(y(268, e)));
  return (e = _s(t)), (e = e === null ? null : e.stateNode), e;
};
ge.flushSync = function (e) {
  return Lt(e);
};
ge.hydrate = function (e, t, n) {
  if (!hl(t)) throw Error(y(200));
  return ml(null, e, t, !0, n);
};
ge.hydrateRoot = function (e, t, n) {
  if (!ji(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = '',
    i = rc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = nc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Qe] = t.current),
    $n(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new pl(t);
};
ge.render = function (e, t, n) {
  if (!hl(t)) throw Error(y(200));
  return ml(null, e, t, !1, n);
};
ge.unmountComponentAtNode = function (e) {
  if (!hl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Lt(function () {
        ml(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Qe] = null);
        });
      }),
      !0)
    : !1;
};
ge.unstable_batchedUpdates = Pi;
ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!hl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return ml(e, t, n, !1, r);
};
ge.version = '18.2.0-next-9e3b772b8-20220608';
function lc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lc);
    } catch (e) {
      console.error(e);
    }
}
lc(), (ns.exports = ge);
var jd = ns.exports,
  Hu = jd;
(Kl.createRoot = Hu.createRoot), (Kl.hydrateRoot = Hu.hydrateRoot);
const Md = F.jsx('div', {
    style: {
      height: '50px',
      width: '50px',
      borderRadius: '100%',
      border: '10px solid black',
      position: 'absolute',
      top: '50px',
      right: '-30px',
    },
  }),
  Dd = F.jsx('div', {
    style: {
      height: '100px',
      width: '10px',
      background: 'black',
      position: 'absolute',
      top: '120px',
      right: 0,
    },
  }),
  Id = F.jsx('div', {
    style: {
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '150px',
      right: '-100px',
      rotate: '-30deg',
      transformOrigin: 'left bottom',
    },
  }),
  Fd = F.jsx('div', {
    style: {
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '150px',
      right: '10px',
      rotate: '30deg',
      transformOrigin: 'right bottom',
    },
  }),
  Ud = F.jsx('div', {
    style: {
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '210px',
      right: '-90px',
      rotate: '60deg',
      transformOrigin: 'left bottom',
    },
  }),
  $d = F.jsx('div', {
    style: {
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '210px',
      right: 0,
      rotate: '-60deg',
      transformOrigin: 'right bottom',
    },
  }),
  Ad = [Md, Dd, Id, Fd, Ud, $d];
function Vd({ numberOfGuesses: e }) {
  return F.jsxs('div', {
    style: { position: 'relative' },
    children: [
      Ad.slice(0, e),
      F.jsx('div', {
        style: {
          height: '50px',
          width: '10px',
          background: 'black',
          position: 'absolute',
          top: 0,
          right: 0,
        },
      }),
      F.jsx('div', {
        style: {
          height: '10px',
          width: '200px',
          background: 'black',
          marginLeft: '120px',
        },
      }),
      F.jsx('div', {
        style: {
          height: '400px',
          width: '10px',
          background: 'black',
          marginLeft: '120px',
        },
      }),
      F.jsx('div', {
        style: { height: '10px', width: '250px', background: 'black' },
      }),
    ],
  });
}
function Bd({ guessedLetters: e, wordToGuess: t, reveal: n = !1 }) {
  return F.jsx('div', {
    style: {
      display: 'flex',
      gap: '.25em',
      fontSize: '6rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontFamily: 'monospace',
    },
    children: t
      .split('')
      .map((r, l) =>
        F.jsx(
          'span',
          {
            style: { borderBottom: '.1em solid black' },
            children: F.jsx('span', {
              style: {
                visibility: e.includes(r) || n ? 'visible' : 'hidden',
                color: !e.includes(r) && n ? 'red' : 'black',
              },
              children: r,
            }),
          },
          l
        )
      ),
  });
}
const Hd = '_btn_1of7l_1',
  Wd = '_active_1of7l_27',
  Qd = '_inactive_1of7l_37',
  Ql = { btn: Hd, active: Wd, inactive: Qd },
  Kd = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
function Yd({
  activeLetters: e,
  inactiveLetters: t,
  addGuessedLetter: n,
  disabled: r = !1,
}) {
  return F.jsx('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
      gap: '.5rem',
    },
    children: Kd.map((l) => {
      const o = e.includes(l),
        i = t.includes(l);
      return F.jsx(
        'button',
        {
          onClick: () => n(l),
          className: `${Ql.btn} ${o ? Ql.active : ''} ${i ? Ql.inactive : ''}`,
          disabled: i || o || r,
          children: l,
        },
        l
      );
    }),
  });
}
const Wu = [
  'able',
  'about',
  'absolute',
  'accept',
  'account',
  'achieve',
  'across',
  'active',
  'actual',
  'address',
  'admit',
  'advertise',
  'affect',
  'afford',
  'after',
  'afternoon',
  'again',
  'against',
  'agent',
  'agree',
  'allow',
  'almost',
  'along',
  'already',
  'alright',
  'also',
  'although',
  'always',
  'america',
  'amount',
  'another',
  'answer',
  'apart',
  'apparent',
  'appear',
  'apply',
  'appoint',
  'approach',
  'appropriate',
  'area',
  'argue',
  'around',
  'arrange',
  'associate',
  'assume',
  'attend',
  'authority',
  'available',
  'aware',
  'away',
  'awful',
  'baby',
  'back',
  'balance',
  'ball',
  'bank',
  'base',
  'basis',
  'bear',
  'beat',
  'beauty',
  'because',
  'become',
  'before',
  'begin',
  'behind',
  'believe',
  'benefit',
  'best',
  'between',
  'bill',
  'birth',
  'black',
  'bloke',
  'blood',
  'blow',
  'blue',
  'board',
  'boat',
  'body',
  'book',
  'both',
  'bother',
  'bottle',
  'bottom',
  'break',
  'brief',
  'brilliant',
  'bring',
  'britain',
  'brother',
  'budget',
  'build',
  'business',
  'busy',
  'cake',
  'call',
  'card',
  'care',
  'carry',
  'case',
  'catch',
  'cause',
  'cent',
  'centre',
  'certain',
  'chair',
  'chairman',
  'chance',
  'change',
  'chap',
  'character',
  'charge',
  'cheap',
  'check',
  'child',
  'choice',
  'choose',
  'Christ',
  'Christmas',
  'church',
  'city',
  'claim',
  'class',
  'clean',
  'clear',
  'client',
  'clock',
  'close',
  'closes',
  'clothe',
  'club',
  'coffee',
  'cold',
  'colleague',
  'collect',
  'college',
  'colour',
  'come',
  'comment',
  'commit',
  'committee',
  'common',
  'community',
  'company',
  'compare',
  'complete',
  'compute',
  'concern',
  'condition',
  'confer',
  'consider',
  'consult',
  'contact',
  'continue',
  'contract',
  'control',
  'converse',
  'cook',
  'copy',
  'corner',
  'correct',
  'cost',
  'could',
  'council',
  'count',
  'country',
  'county',
  'couple',
  'course',
  'court',
  'cover',
  'create',
  'cross',
  'current',
  'danger',
  'date',
  'dead',
  'deal',
  'dear',
  'debate',
  'decide',
  'decision',
  'deep',
  'definite',
  'degree',
  'department',
  'depend',
  'describe',
  'design',
  'detail',
  'develop',
  'difference',
  'difficult',
  'dinner',
  'direct',
  'discuss',
  'district',
  'divide',
  'doctor',
  'document',
  'door',
  'double',
  'doubt',
  'down',
  'draw',
  'dress',
  'drink',
  'drive',
  'drop',
  'during',
  'each',
  'early',
  'east',
  'easy',
  'economy',
  'educate',
  'effect',
  'eight',
  'either',
  'elect',
  'electric',
  'eleven',
  'else',
  'employ',
  'encourage',
  'engine',
  'english',
  'enjoy',
  'enough',
  'enter',
  'environment',
  'equal',
  'especial',
  'europe',
  'even',
  'evening',
  'ever',
  'every',
  'evidence',
  'exact',
  'example',
  'except',
  'excuse',
  'exercise',
  'exist',
  'expect',
  'expense',
  'experience',
  'explain',
  'express',
  'extra',
  'face',
  'fact',
  'fair',
  'fall',
  'family',
  'farm',
  'fast',
  'father',
  'favour',
  'feed',
  'feel',
  'field',
  'fight',
  'figure',
  'file',
  'fill',
  'film',
  'final',
  'finance',
  'find',
  'fine',
  'finish',
  'fire',
  'first',
  'fish',
  'five',
  'flat',
  'floor',
  'follow',
  'food',
  'foot',
  'force',
  'forget',
  'form',
  'fortune',
  'forward',
  'four',
  'france',
  'free',
  'friday',
  'friend',
  'from',
  'front',
  'full',
  'function',
  'fund',
  'further',
  'future',
  'game',
  'garden',
  'general',
  'germany',
  'girl',
  'give',
  'glass',
  'good',
  'goodbye',
  'govern',
  'grand',
  'grant',
  'great',
  'green',
  'ground',
  'group',
  'grow',
  'guess',
  'hair',
  'half',
  'hall',
  'hand',
  'hang',
  'happen',
  'happy',
  'hard',
  'hate',
  'have',
  'head',
  'health',
  'hear',
  'heart',
  'heat',
  'heavy',
  'hell',
  'help',
  'here',
  'high',
  'history',
  'hold',
  'holiday',
  'home',
  'honest',
  'hope',
  'horse',
  'hospital',
  'hour',
  'house',
  'however',
  'hullo',
  'hundred',
  'husband',
  'idea',
  'identify',
  'imagine',
  'important',
  'improve',
  'include',
  'income',
  'increase',
  'indeed',
  'individual',
  'industry',
  'inform',
  'inside',
  'instead',
  'insure',
  'interest',
  'into',
  'introduce',
  'invest',
  'involve',
  'issue',
  'item',
  'jesus',
  'join',
  'judge',
  'jump',
  'just',
  'keep',
  'kill',
  'kind',
  'king',
  'kitchen',
  'knock',
  'know',
  'labour',
  'lady',
  'land',
  'language',
  'large',
  'last',
  'late',
  'laugh',
  'lead',
  'learn',
  'leave',
  'left',
  'less',
  'letter',
  'level',
  'life',
  'light',
  'like',
  'likely',
  'limit',
  'line',
  'link',
  'list',
  'listen',
  'little',
  'live',
  'load',
  'local',
  'lock',
  'london',
  'long',
  'look',
  'lord',
  'lose',
  'love',
  'luck',
  'lunch',
  'machine',
  'main',
  'major',
  'make',
  'manage',
  'many',
  'mark',
  'market',
  'marry',
  'match',
  'matter',
  'maybe',
  'mean',
  'meaning',
  'measure',
  'meet',
  'member',
  'mention',
  'middle',
  'might',
  'mile',
  'milk',
  'million',
  'mind',
  'minister',
  'minus',
  'minute',
  'miss',
  'mister',
  'moment',
  'monday',
  'money',
  'month',
  'more',
  'morning',
  'most',
  'mother',
  'motion',
  'move',
  'much',
  'music',
  'must',
  'name',
  'nation',
  'nature',
  'near',
  'necessary',
  'need',
  'never',
  'news',
  'next',
  'nice',
  'night',
  'nine',
  'none',
  'normal',
  'north',
  'note',
  'notice',
  'number',
  'obvious',
  'occasion',
  'offer',
  'office',
  'often',
  'okay',
  'once',
  'only',
  'open',
  'operate',
  'opportunity',
  'oppose',
  'order',
  'organize',
  'original',
  'other',
  'otherwise',
  'ought',
  'over',
  'pack',
  'page',
  'paint',
  'pair',
  'paper',
  'paragraph',
  'pardon',
  'parent',
  'park',
  'part',
  'particular',
  'party',
  'pass',
  'past',
  'pence',
  'pension',
  'people',
  'percent',
  'perfect',
  'perhaps',
  'period',
  'person',
  'photograph',
  'pick',
  'picture',
  'piece',
  'place',
  'plan',
  'play',
  'please',
  'plus',
  'point',
  'police',
  'policy',
  'politic',
  'poor',
  'position',
  'positive',
  'possible',
  'post',
  'pound',
  'power',
  'practise',
  'prepare',
  'present',
  'press',
  'pressure',
  'presume',
  'pretty',
  'previous',
  'price',
  'print',
  'private',
  'probable',
  'problem',
  'proceed',
  'process',
  'produce',
  'product',
  'programme',
  'project',
  'proper',
  'propose',
  'protect',
  'provide',
  'public',
  'pull',
  'purpose',
  'push',
  'quality',
  'quarter',
  'question',
  'quick',
  'quid',
  'quiet',
  'quite',
  'radio',
  'rail',
  'raise',
  'range',
  'rate',
  'rather',
  'read',
  'ready',
  'real',
  'realise',
  'really',
  'reason',
  'receive',
  'recent',
  'reckon',
  'recognize',
  'recommend',
  'record',
  'reduce',
  'refer',
  'regard',
  'region',
  'relation',
  'remember',
  'report',
  'represent',
  'require',
  'research',
  'resource',
  'respect',
  'responsible',
  'rest',
  'result',
  'return',
  'right',
  'ring',
  'rise',
  'road',
  'role',
  'roll',
  'room',
  'round',
  'rule',
  'safe',
  'sale',
  'same',
  'saturday',
  'save',
  'scheme',
  'school',
  'science',
  'score',
  'scotland',
  'seat',
  'second',
  'secretary',
  'section',
  'secure',
  'seem',
  'self',
  'sell',
  'send',
  'sense',
  'separate',
  'serious',
  'serve',
  'service',
  'settle',
  'seven',
  'shall',
  'share',
  'sheet',
  'shoe',
  'shoot',
  'shop',
  'short',
  'should',
  'show',
  'shut',
  'sick',
  'side',
  'sign',
  'similar',
  'simple',
  'since',
  'sing',
  'single',
  'sister',
  'site',
  'situate',
  'size',
  'sleep',
  'slight',
  'slow',
  'small',
  'smoke',
  'social',
  'society',
  'some',
  'soon',
  'sorry',
  'sort',
  'sound',
  'south',
  'space',
  'speak',
  'special',
  'specific',
  'speed',
  'spell',
  'spend',
  'square',
  'staff',
  'stage',
  'stairs',
  'stand',
  'standard',
  'start',
  'state',
  'station',
  'stay',
  'step',
  'stick',
  'still',
  'stop',
  'story',
  'straight',
  'strategy',
  'street',
  'strike',
  'strong',
  'structure',
  'student',
  'study',
  'stuff',
  'stupid',
  'subject',
  'succeed',
  'such',
  'sudden',
  'suggest',
  'suit',
  'summer',
  'sunday',
  'supply',
  'support',
  'suppose',
  'sure',
  'surprise',
  'switch',
  'system',
  'table',
  'take',
  'talk',
  'tape',
  'teach',
  'team',
  'telephone',
  'television',
  'tell',
  'tend',
  'term',
  'terrible',
  'test',
  'than',
  'thank',
  'then',
  'there',
  'therefore',
  'they',
  'thing',
  'think',
  'thirteen',
  'thirty',
  'this',
  'thou',
  'though',
  'thousand',
  'three',
  'through',
  'throw',
  'thursday',
  'time',
  'today',
  'together',
  'tomorrow',
  'tonight',
  'total',
  'touch',
  'toward',
  'town',
  'trade',
  'traffic',
  'train',
  'transport',
  'travel',
  'treat',
  'tree',
  'trouble',
  'true',
  'trust',
  'tuesday',
  'turn',
  'twelve',
  'twenty',
  'type',
  'under',
  'understand',
  'union',
  'unit',
  'unite',
  'university',
  'unless',
  'until',
  'upon',
  'usual',
  'value',
  'various',
  'very',
  'video',
  'view',
  'village',
  'visit',
  'vote',
  'wage',
  'wait',
  'walk',
  'wall',
  'want',
  'warm',
  'wash',
  'waste',
  'watch',
  'water',
  'wear',
  'wednesday',
  'week',
  'weigh',
  'welcome',
  'well',
  'west',
  'what',
  'when',
  'where',
  'whether',
  'which',
  'while',
  'white',
  'whole',
  'wide',
  'wife',
  'will',
  'wind',
  'window',
  'wish',
  'with',
  'within',
  'without',
  'woman',
  'wonder',
  'wood',
  'word',
  'work',
  'world',
  'worry',
  'worse',
  'worth',
  'would',
  'write',
  'wrong',
  'year',
  'yesterday',
  'young',
];
function Qu() {
  return Wu[Math.floor(Math.random() * Wu.length)];
}
function Gd() {
  const [e, t] = qe.useState(Qu),
    [n, r] = qe.useState([]),
    l = n.filter((s) => !e.includes(s)),
    o = l.length >= 6,
    i = e.split('').every((s) => n.includes(s)),
    u = qe.useCallback(
      (s) => {
        n.includes(s) || o || i || r((c) => [...c, s]);
      },
      [n, i, o]
    );
  return (
    qe.useEffect(() => {
      const s = (c) => {
        const m = c.key;
        m.match(/^[a-z]$/) && (c.preventDefault(), u(m));
      };
      return (
        document.addEventListener('keypress', s),
        () => {
          document.removeEventListener('keypress', s);
        }
      );
    }, [n]),
    qe.useEffect(() => {
      const s = (c) => {
        c.key === 'Enter' && (c.preventDefault(), r([]), t(Qu()));
      };
      return (
        document.addEventListener('keypress', s),
        () => {
          document.removeEventListener('keypress', s);
        }
      );
    }, []),
    F.jsxs('div', {
      style: {
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: 'center',
      },
      children: [
        F.jsxs('div', {
          style: { fontSize: '2rem', textAlign: 'center' },
          children: [
            i && 'Winner! - Refresh to try again',
            o && 'Nice Try - Refresh to try again',
          ],
        }),
        F.jsx(Vd, { numberOfGuesses: l.length }),
        F.jsx(Bd, { reveal: o, guessedLetters: n, wordToGuess: e }),
        F.jsx('div', {
          style: { alignSelf: 'stretch' },
          children: F.jsx(Yd, {
            disabled: i || o,
            activeLetters: n.filter((s) => e.includes(s)),
            inactiveLetters: l,
            addGuessedLetter: u,
          }),
        }),
      ],
    })
  );
}
Kl.createRoot(document.getElementById('root')).render(
  F.jsx(Ec.StrictMode, { children: F.jsx(Gd, {}) })
);
