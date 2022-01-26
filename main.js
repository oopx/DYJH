
var j=1;
var ori_name = $('#original').val();//請假師
    
//新增一欄
    function addnew(){
        
        $td=$(".cell").clone();
         $(this).val(""); 
         $td.attr('id',j);
         $td.children("div").attr('class',j);
         $td.children("div").attr('cell',"cell_in");
         

         $td.children("input").val(j);
         //$td.children("input").attr('class',$td.children("input").attr('class')+String(j));

         $td.removeClass();
         $td.removeAttr("style");
         //$td.children("div").attr('class',"cell_in");
         //$td.children().attr('required','required') ;
         for(i=0;i<11;i++){
            
            $td.children().children().eq(i).attr('name', ($td.children().children().eq(i).attr('name'))+String(j));
            //console.log($td.children().eq(2).eq(i).attr('name'));
            //$td.children().eq(1).eq(i).attr('name',($td.children().eq(1).eq(i).attr('name'))+String(j));
            //$td.children().eq(1).eq(i).attr('name', ($td.children().eq(1).eq(i).attr('name'))+String(j)); 
            
         }
         j=j+1;
	    $("form").append($td);
      
      //自動收合多於1的表格
      if(j!=2){
      var up="."+String(j-2);
      console.log(up);
      $(String(up)).slideUp( 1200,"swing",);
    }
     
	}
//刪除一欄
    function deleteNew() {
        if(confirmDelete()==false)
        return;
        
        if(j<=1)
        { j=1;
          return; }
        $td=$("#"+String(j-1));
        $td.detach();
        j=j-1;
    }

   
    // 一鍵開關函式
    function showAll(){
     
     
      act=$("img").attr('act')
      if(act!="action")
        {
          $("[cell=cell_in]").slideDown();
        //$(this).removeAttr('act');
          $("img").attr('act','action');
        }
      
      
      else if(act=="action")
      {
        $("[cell=cell_in]").slideUp();
        $("img").removeAttr('act');
        //$(this).attr('act','action');
      }
      
  }
  
  function addOption(){

    gmail.forEach(element => {
			
    var text=element.name;
		var value=element.name;
    $('.teacher').append('<option value='+value+'>'+text+'</option>');// 動態新增選項
    })
  }

//一戴入便執行
  $(document).ready(function(){
    
    addOption();// 動態新增請假師選項
    addnew();
    $("#btn1").click (addnew);
    
    $("#btn2").click (deleteNew);

    $("#submitButton").click ( function(){ $("[cell=cell_in]").slideDown();});
    $(".dyjh-img").click (showAll);
    
    
    
    //點擊後收合、開啟
    $("#myForm").on ("click",".num",function slide_down(){
      $(this).parent().children("div").slideToggle("slow");
      /*
      var act=$(this).attr('act')
      console.log(act);
      if(act!="action")
        {
          $(this).parent().children("div").slideDown();
        //$(this).removeAttr('act');
        console.log(act);
        $(this).attr('act','action');
        }
      
      
      else if(act=="action")
      {
        $(this).parent().children("div").slideUp();
        $(this).removeAttr('act')
        //$(this).attr('act','action');
      }
      console.log("click");
    
    */
    })
    $(".change").hide(); 

    //調課選擇後

    $("#myForm").on("change",".type",function(){
      
      a=$(this).val();
      //alert(a);
      //$(".change").hide();

      console.log("調課");
      console.log(ori_name);
      $(this).parent().find(".change").hide();
      $(this).parent().find(".change").removeAttr('required','required');
      if(a=="調課")
      {
        
        
        $(this).parent().find(".change").show();
        $(this).parent().find(".change").attr('required','required');
        
      }

      $(this).css("background-color","rgb(243, 206, 206)");
      
      

    
    
  });

  //自動帶入
  $('#original').on("input",function(event){
        
        var ori_name = $('#original').val();
        $('.original_name').val(ori_name);
        console.log(ori_name);

    });
      //console.log( $(".chnage").val() );
    

 

  })

  //按鍵警告
  function confirmExit()
        {
          //confirmExit("ok?");
          $("[cell=cell_in]").slideDown();
          if (confirm("確定要提交登記了嗎")==true){ 
          
          alert("成功上傳");
          return true; 
          }
          else{ 
            
           event.preventDefault();
           //window.history.back(); 
          
        }
      }

      function confirmDelete()
        {
          //confirmExit("ok?");
          if (confirm("確定要刪除嗎")==true){ 
          
          return true; 
          }
          else{ 
          return false;
           event.preventDefault();
           //window.history.back(); 
          
        }
      }



        function afterButtonClicked() {
          var jsonData = $('#myForm').serializeArray();
         // alert($.param(jsonData));
            //document.getElementById("myForm").reset();
            //google.script.run.addNewRow(rowData);
           // alert("成功上傳");
        }

    //document.getElementById("submitButton").addEventListener("click", afterButtonClicked);

    