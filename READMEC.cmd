npm config set proxy "http://45.32.108.173:54466"  
npm config set https-proxy "http://45.32.108.173:54466"
npm config rm proxy   
npm config rm https-proxy
npm config set strict-ssl false

npm config set registry "http://registry.npmjs.org/"

npm config get registry
npm config set registry "http://mirrors.cloud.tencent.com/npm/"

npm config rm registry "http://registry.npmjs.org/"


npm config set registry "https://registry.npmmirror.com/"


npm i web-vitals --save-dev

git config --global user.email "markbullnb@hotmail.com"

 git config --global user.name "Bing N"