"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var R=require("axios");function _(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var d=_(R);function k(t){const g=t;return g.isAuthRequest=!0,g}function c(t,g,a){const e={signal:g};return a&&(e.params=a),t?k(e):e}class N{constructor({apiUrl:g}){this.dashboard=async a=>(await d.default.get(`${this._apiUrl}/dashboard/`,{signal:a})).data,this.nfts=async({pageNum:a,pageSize:e,chains:i,keywords:s,games:l,twitterFollowersRange:o,discordFollowersRange:f,floorPriceRange:b,marketCapRange:p,volumeRange:u,tradersRange:m,totalSupplyRange:h,orders:n,orderDirections:S,gamesOnly:P},w)=>{const r=new URLSearchParams([["filter-games",`${P}`]]);this.addPagingParams({pageNum:a,pageSize:e},r),s&&r.append("keywords",`${s}`),this.addArrParam(r,"block-chains",i),this.addArrParam(r,"game-ids",l),o&&o[0]&&o[1]&&(r.append("number-filter-starts",o[0].toString()),r.append("number-filter-ends",o[1].toString()),r.append("number-filters","twitterFollowers")),f&&f[0]&&f[1]&&(r.append("number-filter-starts",f[0].toString()),r.append("number-filter-ends",f[1].toString()),r.append("number-filters","discordFollowers")),b&&b[0]&&b[1]&&(r.append("number-filter-starts",b[0].toString()),r.append("number-filter-ends",b[1].toString()),r.append("number-filters","floorPrice")),u&&u[0]&&u[1]&&(r.append("number-filter-starts",u[0].toString()),r.append("number-filter-ends",u[1].toString()),r.append("number-filters","volume")),p&&p[0]&&p[1]&&(r.append("number-filter-starts",p[0].toString()),r.append("number-filter-ends",p[1].toString()),r.append("number-filters","marketCap")),m&&m[0]&&m[1]&&(r.append("number-filter-starts",m[0].toString()),r.append("number-filter-ends",m[1].toString()),r.append("number-filters","traders")),h&&h[0]&&h[1]&&(r.append("number-filter-starts",h[0].toString()),r.append("number-filter-ends",h[1].toString()),r.append("number-filters","totalSupply")),n&&n.length&&S&&S.length&&(this.addArrParam(r,"orders",n),this.addArrParam(r,"order-directions",S));const $=await d.default.get(`${this._apiUrl}/game-hub/nft-collections`,{params:r,signal:w});return w.aborted?{dataList:[],pageNum:0,pageSize:0,totalPage:0,totalNum:0}:$.data},this.games=async({pageNum:a,pageSize:e,chains:i,collectionIds:s,keywords:l,devices:o,status:f,genre:b,ratingRange:p,orders:u,orderDirections:m},h)=>{const n=this.addPagingParams({pageNum:a,pageSize:e});l&&n.append("keywords",l),s&&s.length&&this.addArrParam(n,"nft-collection-ids",s);const S=[],P=[],w=($,y)=>{y.length&&(S.push($),P.push(y.join(",")))};w("devices",o),w("status",f),w("genre",b),S.length&&P.length&&(this.addArrParam(n,"string-filters",S),this.addArrParam(n,"string-values",P)),p&&p[0]&&p[1]&&(this.addArrParam(n,"number-filter-starts",[p[0]]),this.addArrParam(n,"number-filter-ends",[p[1]]),this.addArrParam(n,"number-filters",["rating"])),u&&u.length&&m&&m.length&&(this.addArrParam(n,"orders",u),this.addArrParam(n,"order-directions",m)),this.addArrParam(n,"block-chains",i);const r=await d.default.get(`${this._apiUrl}/game-hub/games`,{params:n,signal:h});return h.aborted?{dataList:[],pageNum:0,pageSize:0,totalNum:0,totalPage:0}:r.data},this.gameDetail=async({gameUri:a},e)=>(await d.default.get(`${this._apiUrl}/game-hub/games/${a}`,c(!1,e,void 0))).data,this.nftDetail=async({nftCollectionId:a},e)=>(await d.default.get(`${this._apiUrl}/game-hub/nft-collections/${a}`,c(!1,e))).data,this.nftDetailByAddress=async({collectionAddress:a},e)=>(await d.default.get(`${this._apiUrl}/game-hub/nft-collections/address/${a}`,c(!1,e))).data,this.getSearch=async({keywords:a,url:e,pageSize:i,pageNum:s},l)=>{const o=this.addPagingParams({pageSize:i,pageNum:s});return a&&o.append("keywords",a),(await d.default.get(`${this._apiUrl}/game-hub/${e}`,{params:o,signal:l})).data},this.likeGame=async({gameUri:a,action:e},i)=>{const s=new URLSearchParams([["action",`${e}`]]);await d.default.put(`${this._apiUrl}/game-hub/games/${a}/like`,null,c(!0,i,s))},this.likeReview=async({gameUri:a,reviewId:e,action:i},s)=>{const l=new URLSearchParams([["action",`${i}`]]);await d.default.put(`${this._apiUrl}/game-hub/${a}/reviews/${e}/like`,null,c(!0,s,l))},this.saveReview=({content:a,gameUri:e},i)=>d.default.put(`${this._apiUrl}/game-hub/games/${e}/reviews`,{content:a},c(!0,i,void 0)),this.saveFeedback=({gameUri:a,isGameFun:e,isGameProfitable:i,rating:s},l)=>{const o=new URLSearchParams([["isGameFun",`${e}`],["isGameProfitable",`${i}`],["rating",`${s}`]]);return d.default.put(`${this._apiUrl}/game-hub/games/${a}/feedback`,null,c(!0,l,o))},this.getReviews=async({pageNum:a,pageSize:e,gameUri:i},s)=>{const l=this.addPagingParams({pageSize:e,pageNum:a});return(await d.default.get(`${this._apiUrl}/game-hub/games/${i}/reviews`,c(!1,s,l))).data},this.getCurrentUserReview=async(a,e)=>(await d.default.get(`${this._apiUrl}/game-hub/games/${a}/reviews/cur-user-review`,c(!0,e))).data,this._apiUrl=g}addArrParam(g,a,e){e.length&&e.forEach(i=>{g.append(a,i.toString())})}addPagingParams({pageNum:g,pageSize:a},e){return e=e||new URLSearchParams,e.append("page-num",`${g}`),e.append("page-size",`${a}`),e}}var v=(t=>(t.Live="Live",t.Alpha="Alpha",t.Beta="Beta",t.Development="Development",t.Cancelled="Cancelled",t.Presale="Presale",t))(v||{}),U=(t=>(t.Toturial="Toturial",t.Tournament="Tournament",t.Airdrop="Airdrop",t.IDO="IDO",t.INO="INO",t.MerchandiseSale="Merchandise Sale",t.DiscountOffer="Discount Offer",t))(U||{}),A=(t=>(t.SearchGames="search-games",t.searchNFTCollections="search-nft-collections",t))(A||{});exports.GameStatusEnum=v,exports.MissionType=U,exports.OortClient=N,exports.SearchGameHubType=A;
//# sourceMappingURL=index.cjs.js.map
