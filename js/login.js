// JavaScript Document
function $(id)
{
	return document.getElementById(id);	
}

function focusName()
{
	$("name").focus();
	$("name").select();
}

function focusPsw()
{
	$("password").focus();
	$("password").select();
}

function checkInfo()
{
	var name=$("name").value;
	var password=$("password").value;
	var checkright=true;
	if(name==""&&password=="")
	{
		checkright=false;
	}else
	{
		if(name.length<8)
		{
			alert("账户错误！");
			checkright=false;
			focusName();
		}
		else if(password.length<8)
		{
			alert("密码错误！");
			checkright=false;
			focusPsw();
		}
	}
	return checkright;
}

function clearInfo()
{
	var flag = confirm("确认要重置数据吗？");
	if(flag==true)
	{
		$("myname").value = "";
		$("mypwd1").value = "";
		$("mypwd2").value = "";
	}
		else return false;
}
	