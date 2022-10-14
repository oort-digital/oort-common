"use strict";Object.defineProperty(exports,"__esModule",{value:!0});class u{constructor(e){this.serialize=r=>[r],this.deserialize=r=>r[0],this.key=e}}class o{constructor(e){this.serialize=r=>[`${r}`],this.deserialize=r=>r[0]==="true",this.key=e}}class m{constructor(e){this.serialize=r=>[r.toString()],this.deserialize=r=>parseInt(r[0]),this.key=e}}const i=class{constructor(s){this.serialize=e=>{let r="";return i.isDefined(e[0])&&(r=e[0].toString()),i.isDefined(e[1])&&(r=`${r}${i.sep}${e[1].toString()}`),[r]},this.deserialize=e=>{const r=e[0].split(i.sep);return r.length===1?[i.deserializeItem(r[0]),void 0]:[i.deserializeItem(r[0]),i.deserializeItem(r[1])]},this.key=s}static deserializeItem(s){if(s)return parseFloat(s)}static isDefined(s){return s!=null}};let c=i;c.sep="-";class l{constructor(e,r){this._sep="-",this.key=e,this._parseFunc=r}serialize(e){return[e.join(this._sep)]}deserialize(e){return e[0].split(this._sep).map(r=>this._parseFunc(r))}}class h{get param(){return this._param}get isEmpty(){return this.isParamEmpty(this._param)}isParamEmpty(e){return Array.isArray(e)?e.length===0:!e}clear(){this._param=this._def,this._searchParams.delete(this._serializer.key),this._setter(this._searchParams)}setParam(e){this._param=e,this._searchParams.delete(this._serializer.key),this.isParamEmpty(e)||this._serializer.serialize(e).forEach(r=>this._searchParams.append(this._serializer.key,r)),this._setter(this._searchParams)}constructor(e,r,a,t){this._searchParams=e,this._setter=r,this._serializer=a;const n=e.getAll(a.key);this._def=t,this._param=n.length?a.deserialize(n):t}}const p=s=>s[0]!==void 0||s[1]!==void 0;class z extends h{constructor(e,r,a){super(r,a,new c(e),[void 0,void 0]),this.isParamEmpty=t=>!p(t)}}class d extends h{constructor(e,r,a){super(r,a,new l(e,parseInt),[])}}class S extends h{constructor(e,r,a){super(r,a,new l(e,t=>t),[])}}class _ extends h{constructor(e,r,a,t){super(a,t,new m(e),r)}}class P extends h{constructor(e,r,a,t){super(a,t,new o(e),r)}}exports.ArraySerializer=l,exports.BaseSearchParam=h,exports.BoolSearchParam=P,exports.BoolSerializer=o,exports.IntArrSearchParam=d,exports.IntSearchParam=_,exports.IntSerializer=m,exports.NumRangeSearchParam=z,exports.NumRangeSerializer=c,exports.StrArrSearchParam=S,exports.StringSerializer=u;
//# sourceMappingURL=index.cjs.js.map