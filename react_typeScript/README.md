# React/TypeScript 專案設定
## 資料夾及檔案結構
```
.
├── config - webpack 設定
│   └── webpack.dev.ts - webpack 開發環境設定
│   └── webpack.prod.ts - webpack 生產環境設定
├── public - 公共資源
├── src - 主要程式碼
│   └── components - 組件
│   └── App.tsx - 入口點
│   └── custom - 組件
├── babel.config.js - babel 設定檔
└── tsconfig.json - typescript 設定檔
```

## 使用套件

以下為專案使用套件說明以及理由，有打 💥 號的是我認為必裝的套件，底下有 npm 指令可以複製。

### 主要套件

專案主體為 React，並搭配 TypeScript 開發，以及使用 Webpack 打包；與其搭配的主要常用的使用套件有以下幾種，
主要會於客戶端使用的套件：

1. react💥
2. react-dom💥
3. react-router-dom💥
4. axios💥

而單純開發中使用，並不會跟著到客戶端的套件，從此以下全部都位於開發依賴：

1. typescript💥
2. sass💥
3. webpack💥

由於我們使用到 TypeScript 來協助開發，所以我們必須安裝預先定義好的 react 型別套件，來減輕我們的負擔：

1. @types/react💥
2. @types/react-dom💥

由於我們有使用到 Webpack，所以也必須安裝以下套件：

1. webpack-cli💥：讓我們可以使用 command line 的方式來操作 webpack，方便我們定義 script。
2. webpack-dev-server💥：可用於開發環境中生成 live server
3. webpack-bundle-analyzer：可於開發時查看打包狀況

### 次要套件

需要將我們寫的 JavaScript/TypeScript 轉換成瀏覽器可以讀懂的 JavaScript，所以我們需要使用 babel。
簡單來說，該套件已經幫我們寫了一套轉換方法，而我們只要使用它來搭配 webpack 轉換即可Ï：

1. @babel/core💥
2. @babel/preset-env💥
3. @babel/preset-react💥
4. @babel/preset-typescript💥

而為了能讓瀏覽器相容性提升，我們可以使用 postcss 這個套件；此套件可以幫我們根據各個瀏覽器的規則生成相對應的前綴，  
這樣就不需要一個一個手動添加，增添不必要的複雜度。但要注意的是，動態生成的 CSS 可能不會被轉換，  
也就是說，如果有某些 CSS 樣式是寫在 component 裡面，並且是透過某些動作來動態添加的話，可能會出問題，所以還是得稍微注意。

1. postcss💥：postcss 的核心套件
2. postcss-preset-env💥：主要轉換套件，

由於 Webpack 在做程式碼轉換時，需要有額外的套件來去做預處理，這些套件就叫做 loader，  
我們可以想像一包程式碼是由法語、英語、日語等等不同語言構成的書籍，  
而 loader 我們將其理解成各個翻譯人員，每個 loader 都負責特定語言，  
遇到該部分的程式就將其 "翻譯" 成相對應的程式碼：  

1. babel-loader💥：我們有使用 babel 來轉換 JavaScript，所以需要使用 babel loader，讓 webpack 知道要使用 babel 來工作
2. css-loader💥：解析 CSS 需要使用的 loader，會將 CSS 打包到 JavaScript 同一個檔案中
3. style-loader💥：讓 CSS 可以順利注入網頁的 loader
4. sass-loader💥：我們有使用 sass，所以也需要這個 loader
5. postcss-loader💥：我們有使用 postcss，所以需要使用這個 loader
6. react-refresh：專門提供 React 熱重載的 loader；Webpack 的熱重載會導致狀態消失，而使用這個插件可避免這個狀況。需同時安裝 @pmmmwh/react-refresh-webpack-plugin
7. @svgr/webpack：專門用來將 svg 轉換成 react component 的 loader。

除了上述的 loader 之外，plugin 也是整個環節很重要的一部分；我們可以透過許多 Webpack 提供，或任何第三方提供的 plugin  
來優化整體專案效能：

1. css-minimizer-webpack-plugin💥：如名稱所示，專門用來壓縮 css 的插件
2. html-webpack-plugin💥：用來自動生成 HTML 的插件
3. image-minimizer-webpack-plugin💥：用來壓縮圖片資源的插件，但是需要使用 import 來使用圖片才可壓縮
4. mini-css-extract-plugin💥：將 css-loader 處理完的 CSS 從 JavaScript 當中抽取出來的插件
5. terser-webpack-plugin💥：用來壓縮 build 後的 JavaScript 程式碼的插件

### 其餘套件

1. @pmmmwh/react-refresh-webpack-plugin：有裝 react-refresh 就要安裝這個
2. copy-webpack-plugin：有時我們會希望將某些沒被 webpack 打包的檔案放到 production 資料夾內，此時就可以使用這個插件
3. dotenv-webpack：協助建立環境變數的套件
4. imagemin：用來壓縮圖片的插件，若有使用 image-minimizer-webpack-plugin 就不需要這個。
5. imagemin-gifsicle：與 imagemin 一起裝的套件，專門用來處理 gif
6. imagemin-jpegtran：與 imagemin 一起裝的套件，專門用來處理 jpg
7. imagemin-optipng：與 imagemin 一起裝的套件，專門用來處理 png
8. imagemin-svgo：與 imagemin 一起裝的套件，專門用來處理 svgo

綜合以上，請複製以下指令來使用 npm 安裝上述套件 ( 版本請依需求更改 )：

```
npm i react react-dom react-router-dom axios
npm i -D typescript sass webpack webpack-bundle-analyzer webpack-cli webpack-dev-server @types/react @types/react-dom @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript postcss postcss-preset-env babel-loader css-loader style-loader sass-loader postcss-loader react-refresh @svgr/webpack css-minimizer-webpack-plugin html-webpack-plugin image-minimizer-webpack-plugin mini-css-extract-plugin terser-webpack-plugin @pmmmwh/react-refresh-webpack-plugin copy-webpack-plugin dotenv-webpack imagemin imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo
```