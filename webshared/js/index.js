(function(){
     /**
      * 获取数据
      */
    function getData() {
         $.ajax({
             type :"GET",
             url : "https://www.fastmock.site/mock/48a2ecf0d5a46b6896af6b7266bc354e/webshare/share",
             success : function(data) {
                
                addDom(data.shareList);
             }
         })
     }
     getData();

     /**
      * 生成dom 添加到页面中
      */
     function addDom(data) {
         //所有的链接
        let itemList = "";
     
        for(const [index,item] of data.entries()) {
            itemList += `<div class="item">
            <h1>${item.classTitle}</h1>
            <ul class="item${index}">
               ${childLi(item.itemList)}
            </ul>
        </div>`;
        }
        console.log(itemList);
        $(".linkList").append(itemList);
        
     $(".linkList .item ul li").on("click",function(){
       let href =  $(this).find("a").attr("href");
       let dateTip = new Date().getTime();
        window.open(href,dateTip);
    })
     }
     /**
      * 
      * @param {*} list  传过来分类的数据 
      */
     function childLi(list) {
         let childList = ""
        for(const citem of list) {
            childList += `  <li>
            <a href="${citem.url}">
                <img src="${citem.img}" alt="">
                <div>
                    <h3>${citem.title}</h3>
                    <p>${citem.con}</p>
                </div>
            </a>
        </li>`;
   
        }
        return childList;
     }

}())