# 登入系統網站 
### 一個模擬一般網站的登入系統，可以輸入預先提供的帳密進行測試。
### 網站是由node.js與express共同打造的，使用的是session的驗證方式。

---
![image](https://github.com/CoreyHuang/ALPHAcamp_restaurant_DB_refactor/blob/master/restaurantDB.png)
### Features(功能描述):
+ 使用者可以瀏覽登入頁面。
+ 使用者可以輸入帳號與密碼。
+ 使用者可以登入預設的帳戶並察看登入畫面。


### installation and execution(安裝與執行步驟):
#### `<安裝步驟>`
#### 1. 安裝git
```
https://git-scm.com/download/win
```
#### 2. 安裝nvm
```
Enter https://github.com/coreybutler/nvm-windows/releases
Click nvm-setup.zip to install
```
#### 3. 安裝node.js與使用指定版本
```
nvm install 10.15.0
nvm use 10.15.0
```
#### 4. 安裝npm nodemon
```
npm install -g nodemon
```

#### `<執行步驟>`
#### 1. 使用terminal下載專案
```
git clone https://github.com/CoreyHuang/ALPHAcamp_restaurant_DB_refactor.git
```
#### 2. 安裝npm套件(package.json)
```
npm install
```
#### 3. 創造DB資料(專案資料夾中)
```
nodemon npm run seed
```
#### 4. 開啟本地伺服(專案資料夾中)
```
nodemon app.js or npm run dev
```
#### 5. 執行
```
URL: http://localhost:3000/
```

|email|password|
|:---:|:------:|
|tony@stark.com|iamironman|
|captain@hotmail.com|icandothisallday|
|peter@parker.com|enajyram|
|natasha@gamil.com|parol|
|nick@shield.com|password|
|:---:|:------:|

### Prerequisites(環境建置與需求):
#### `<安裝需求>` : 版本為記錄用，並非必須
 1. git : v2.27.0.windows.1
 2. nvm : v1.1.7
 3. node : v10.15.0
 4. npm : v6.4.1
 5. nodemon : v2.0.4
#### `<npm套件>`
 1. express : v4.17.1
 2. express-handlebars : v5.1.0
 3. mongoose : v5.9.25
 4. body-parser : v1.19.0
 5. express-session : v1.17.1

