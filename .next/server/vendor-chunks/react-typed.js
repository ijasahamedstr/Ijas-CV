"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-typed";
exports.ids = ["vendor-chunks/react-typed"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-typed/dist/mjs/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-typed/dist/mjs/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ReactTyped: () => (/* binding */ ReactTyped),\n/* harmony export */   Typed: () => (/* reexport safe */ typed_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typed.js */ \"(ssr)/./node_modules/typed.js/dist/typed.module.js\");\n\n\nconst ReactTyped = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(({ style, className, typedRef, parseRef: transformRef, stopped, children, startWhenVisible, ...typedOptions }) => {\n    const rootElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    const shouldUpdateArgs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [\n        ...Object.values(typedOptions).filter((v) => typeof v === \"boolean\" ||\n            typeof v === \"number\" ||\n            typeof v === \"string\"),\n        typedOptions.strings?.join(\",\"),\n    ], [typedOptions]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        const element = (transformRef && transformRef(rootElement)) || rootElement.current;\n        const typed = new typed_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](element, { ...typedOptions });\n        if (stopped || startWhenVisible) {\n            typed?.stop();\n        }\n        if (startWhenVisible) {\n            const observer = new IntersectionObserver(([entry]) => {\n                if (entry.isIntersecting) {\n                    typed?.start();\n                    observer.disconnect();\n                }\n            });\n            observer.observe(element);\n        }\n        if (typedRef && typed) {\n            typedRef(typed);\n        }\n        return () => {\n            typed.destroy();\n        };\n    }, shouldUpdateArgs);\n    const child = !children ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", { style: style, ref: rootElement })) : (react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {\n        ref: rootElement,\n    }));\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", { style: style, className: className, \"data-testid\": \"react-typed\" }, child));\n});\n\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdHlwZWQvZGlzdC9tanMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnRTtBQUNuQztBQUN0QixtQkFBbUIsMkNBQUksSUFBSSwwR0FBMEc7QUFDNUksd0JBQXdCLDZDQUFNO0FBQzlCLDZCQUE2Qiw4Q0FBTztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnREFBUztBQUNiO0FBQ0EsMEJBQTBCLGdEQUFLLFlBQVksaUJBQWlCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLCtCQUErQixnREFBbUIsV0FBVyxnQ0FBZ0MsTUFBTSwrQ0FBa0I7QUFDckg7QUFDQSxLQUFLO0FBQ0wsWUFBWSxnREFBbUIsV0FBVyxrRUFBa0U7QUFDNUcsQ0FBQztBQUNnQjtBQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2FydGVyLW5leHRqcy8uL25vZGVfbW9kdWxlcy9yZWFjdC10eXBlZC9kaXN0L21qcy9pbmRleC5qcz8xOGMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VNZW1vLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFR5cGVkIGZyb20gXCJ0eXBlZC5qc1wiO1xuZXhwb3J0IGNvbnN0IFJlYWN0VHlwZWQgPSBtZW1vKCh7IHN0eWxlLCBjbGFzc05hbWUsIHR5cGVkUmVmLCBwYXJzZVJlZjogdHJhbnNmb3JtUmVmLCBzdG9wcGVkLCBjaGlsZHJlbiwgc3RhcnRXaGVuVmlzaWJsZSwgLi4udHlwZWRPcHRpb25zIH0pID0+IHtcbiAgICBjb25zdCByb290RWxlbWVudCA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBzaG91bGRVcGRhdGVBcmdzID0gdXNlTWVtbygoKSA9PiBbXG4gICAgICAgIC4uLk9iamVjdC52YWx1ZXModHlwZWRPcHRpb25zKS5maWx0ZXIoKHYpID0+IHR5cGVvZiB2ID09PSBcImJvb2xlYW5cIiB8fFxuICAgICAgICAgICAgdHlwZW9mIHYgPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgICAgIHR5cGVvZiB2ID09PSBcInN0cmluZ1wiKSxcbiAgICAgICAgdHlwZWRPcHRpb25zLnN0cmluZ3M/LmpvaW4oXCIsXCIpLFxuICAgIF0sIFt0eXBlZE9wdGlvbnNdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gKHRyYW5zZm9ybVJlZiAmJiB0cmFuc2Zvcm1SZWYocm9vdEVsZW1lbnQpKSB8fCByb290RWxlbWVudC5jdXJyZW50O1xuICAgICAgICBjb25zdCB0eXBlZCA9IG5ldyBUeXBlZChlbGVtZW50LCB7IC4uLnR5cGVkT3B0aW9ucyB9KTtcbiAgICAgICAgaWYgKHN0b3BwZWQgfHwgc3RhcnRXaGVuVmlzaWJsZSkge1xuICAgICAgICAgICAgdHlwZWQ/LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRXaGVuVmlzaWJsZSkge1xuICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKFtlbnRyeV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZWQ/LnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVkUmVmICYmIHR5cGVkKSB7XG4gICAgICAgICAgICB0eXBlZFJlZih0eXBlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHR5cGVkLmRlc3Ryb3koKTtcbiAgICAgICAgfTtcbiAgICB9LCBzaG91bGRVcGRhdGVBcmdzKTtcbiAgICBjb25zdCBjaGlsZCA9ICFjaGlsZHJlbiA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlOiBzdHlsZSwgcmVmOiByb290RWxlbWVudCB9KSkgOiAoUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgIHJlZjogcm9vdEVsZW1lbnQsXG4gICAgfSkpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZTogc3R5bGUsIGNsYXNzTmFtZTogY2xhc3NOYW1lLCBcImRhdGEtdGVzdGlkXCI6IFwicmVhY3QtdHlwZWRcIiB9LCBjaGlsZCkpO1xufSk7XG5leHBvcnQgeyBUeXBlZCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-typed/dist/mjs/index.js\n");

/***/ })

};
;