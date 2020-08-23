$(function(){
	
	$('.demand_ipt :input').blur(function(){
		var $parent = $(this).parent();
		$parent.find(".formtips").remove();
		//姓名
		 if( $(this).is('#name') ){
			 $name=$(this).val();
			 if( this.value=="" ){
				var errorMsg = '姓名不能为空!';
				$parent.append('<div class="formtips onError">'+errorMsg+'</div>');
				$(this).css({'border-color':"#e00012",
					'box-shadow':'inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(224,0,18,.6)'
				})
			}else{
				$(this).css({'border-color':"#e8e8e8",
					'box-shadow':'none'
				})
			}
		 }
		    //电话
			 if($(this).is('#tell')){
				var mobile = $.trim($('#tell').val());
				var phoneReg=/^0?1[3584][0-9][0-9]{8}$/;
				if( this.value==""){
						var errorMsg = '电话不能为空！';
						$parent.append('<div class="formtips onError">'+errorMsg+'</div>');
						$(this).css({'border-color':"#e00012",
							'box-shadow':'inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(224,0,18,.6)'
						});
					}else if(!phoneReg.test(mobile)){
						var errorMsg = '请确认输入的手机号是否正确！';
						$parent.append('<div class="formtips onError">'+errorMsg+'</div>');
						$(this).css({'border-color':"#e00012",
							'box-shadow':'inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(224,0,18,.6)'
						})
					}else{
						$(this).css({'border-color':"#e8e8e8",
							'box-shadow':'none'
						})
					}
			 }
		//需求
		if( $(this).is('#message') ){
			 $message=$(this).val();
			 if( this.value=="" ){
				var errorMsg = '需求不能为空!';
				$parent.append('<div class="formtips onError">'+errorMsg+'</div>');
				$(this).css({'border-color':"#e00012",
					'box-shadow':'inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(224,0,18,.6)'
				})
			}else{
				$(this).css({'border-color':"#e8e8e8",
					'box-shadow':'none'
				})
			}
		 }
	});
	
	//提交，最终验证。
	$('.submit').click(function(){
		$("form :input").trigger('blur');
		var numError = $('form .onError').length;
		if(numError){
			alert("请完善表单信息！");
			return false;
		} else{ 
			if(confirm("您确认要提交表单吗？")){
				return true;
			}
				
			}
		});
})