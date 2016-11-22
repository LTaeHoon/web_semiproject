/**
 *login.js 
 */
$(document).ready(function(){
	$('#login_img').bind({
		click : function (){
			var match = false;
			if($.trim( $('#id').val()) == ''){ //$('선택자') : '태그', '#id', '.class'
				alert('아이디를 입력하세요'); // ID 미입력시 경고창
				frm.id.focus();
				return false;
			}
			
			if($.trim( $('#pwd').val()) == ''){
				alert('비밀번호를 입력하세요.'); // 비밀번호 미입력시 경고창
				$('#pwd').focus();
				return false;
			}
			$.ajax({
				
				url : 'data/member_id.json',
				dataType : 'json',
				data : {},
				success : function(data){
					
					$.each(data.member, function(index,item){
						if((item.id==frm.id.value) && (item.pwd==frm.pwd.value)){
							match = true;
							
						}
					}); // each end
						if(match==true){
							alert('로그인 성공');
							$('#id').val('');
							$('#pwd').val('');
							window.close();
							
						}else{
							alert('로그인 실패');
							$('#id').val('');
							$('#pwd').val('');
							$('#id').focus();
							return false;
						} // else end
					
				} // success end
					
			}) //ajax end
			
					
		} // click end
	
	}); // bind end
	
	$('#regist_img').click(function(){
		alert('회원가입으로 이동합니다.');
		window.open('../membership/membership.html','회원가입','width=600px, height=610px');
		window.close();
		
	});
	
	$('#cancle_img').click(function(){	
		window.close();
	});
	
			
}); // ready end

	


