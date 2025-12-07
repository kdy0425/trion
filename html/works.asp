<!DOCTYPE html>
<html lang="ko" xml:lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 
<meta charset="UTF-8">
<meta name="author" content="">
<meta name="keywords" content="">
<meta name="description" content="">
<title>트라이언 리뉴얼</title>
<script
src="http://code.jquery.com/jquery-2.2.4.js"
integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
crossorigin="anonymous"></script>
<style type="text/css">
	#guide_wrap {padding:10px;width:1250px;margin:0 auto;}
	table {border-collapse:collapse;border-spacing:0;}
	table + table{margin-top:30px;}
	table caption{text-align:left;padding:10px 0;font-size:20px;font-weight:bold;}
	table th, strong {font-weight:normal;}
	h1{
		margin:0 0 10px 0;
		text-align:center;
		font-size:2em;
		color:#000
	}
	a {text-decoration:none;}
	a:hover {text-decoration:underline;}
	table {
		width:100%;
		margin-top:5px;
		border-top:2px solid #1e61a8;
	}
	table th, table td{
		padding:5px 7px;
		border-left:1px solid #ccc; border-bottom:1px solid #ccc;
	}
	table th:rowspan + th, table td:rowspan + td{border-left:1px solid #ccc;}
	td.lineli, th.lineli {border-left:1px solid #ccc !important;}
	table th:first-child, table td:first-child{border-left:0 none}
	table thead th {
		font-family:'ngB';
		font-size:13px;
		color:#000;
		border-bottom:1px solid #ccc;
		background-color:#f2f2f2;
	}
	table td{font-size:13px;}
	a{color:#444;}
	.no, .date, .work {
		text-align:center;
		padding:5px 0
	}

	tr.on {background-color: #f5fed0}

	.lastmdate {color: #1155CC;}
	.stand_by {color:#777;}
	.ing, .per_2 {color:#4848D4 !important;}
	.curr_n, .per, .end {color:#ff0000 !important;}

	.division td{border-top:2px solid #7e8e9e}
	table tr.division:first-child td{border-top:0 none;}
	.date{display:none;}
		table td.dd{background-color:#daf1ff}
		span.ss{background-color:#cff3ef;display:block;padding:3px 5px;}

</style>
</head>
<body>
<div id="wrap" class="wrap">
<!-- eniter wrap -->
<div id="guide_wrap">
	<div class="header">
		<h1>트라이언 리뉴얼</h1>
		<p>진행중 : <span class="ing_n"></span>p / 미완료 : <span class="notcurr_n"></span>p / 완료 : <span class="curr_n"></span>p / 전체 : <span class="total_n"></span>p</p>
		<p>진행율 : <span class="per_2"></span> / 완료율 : <span class="per"></span></p>
	</div>
	<div class="list_w">
		<table class="codinglist">
			<caption>작업 페이지</caption>
			<colgroup>
				<col style="width:40px">
				<col>
				<col>
				<col>
				<col>
				<col style="width:5%">
				<col style="width:50px">
				<col>
			</colgroup>
			<thead>
				<tr>
					<th rowspan="2">번호</th>
					<th colspan="4">네비</th>
					<th rowspan="2">파일명/링크</th>
					<th rowspan="2">퍼블상태</th>
					<th rowspan="2">기타</th>
				</tr>
				<tr>
					<th class="lineli">1depth</th>
					<th>2depth</th>
					<th>3depth</th>
					<th>4depth</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="no"></td>
					<td>메인</td>
					<td></td>
					<td></td>
					<td></td>
					<td class="link"><a href="./main/main.html" target="_blank">main.html</a></td>
					<td class="date">2022-05-07</td>
					<td class="work"></td>
					<td class="etc"></td>
				</tr>
				<tr>
					<td class="no"></td>
					<td>company</td>
					<td>회사소개</td>
					<td></td>
					<td></td>
					<td class="link"><a href="./company/company.html" target="_blank">company.html</a></td>
					<td class="date">2022-05-07</td>
					<td class="work"></td>
					<td class="etc"></td>
				</tr>
				<tr>
					<td class="no"></td>
					<td></td>
					<td>협력사</td>
					<td></td>
					<td></td>
					<td class="link"><a href="./company/partners.html" target="_blank">partners.html</a></td>
					<td class="date">2022-05-07</td>
					<td class="work"></td>
					<td class="etc"></td>
				</tr>
				<tr>
					<td class="no"></td>
					<td></td>
					<td>채용안내</td>
					<td></td>
					<td></td>
					<td class="link"><a href="./company/recruit.html" target="_blank">recruit.html</a></td>
					<td class="date">2022-05-07</td>
					<td class="work"></td>
					<td class="etc"></td>
				</tr>
				<tr>
					<td class="no"></td>
					<td></td>
					<td>오시는 길</td>
					<td></td>
					<td></td>
					<td class="link"><a href="./company/location.html" target="_blank">location.html</a></td>
					<td class="date">2022-05-07</td>
					<td class="work"></td>
					<td class="etc"></td>
				</tr>
				<tr>
					<td class="no"></td>
					<td>Business</td>
					<td>AI/Bigdata</td>
					<td></td>
					<td></td>
					<td class="link"><a href="./business/ai_bigdata.html" target="_blank">ai_bigdata.html</a></td>
					<td class="date">2025-11-11</td>
					<td class="work"></td>
					<td class="etc"></td>
				</tr>
				<tr>
					<td class="no"></td>
					<td></td>
					<td>디지털 금융</td>
					<td></td>
					<td></td>
					<td class="link"><a href="./business/digital_finance.html" target="_blank">digital_finance.html</a></td>
					<td class="date">2025-11-11</td>
					<td class="work"></td>
					<td class="etc"></td>
				</tr>
				<tr>
					<td class="no"></td>
					<td></td>
					<td>바우처/보조금</td>
					<td></td>
					<td></td>
					<td class="link"><a href="./business/voucher_subsidy.html" target="_blank">voucher_subsidy.html</a></td>
					<td class="date">2025-11-11</td>
					<td class="work"></td>
					<td class="etc"></td>
				</tr>
				<tr>
					<td class="no"></td>
					<td></td>
					<td>ISP/BPR</td>
					<td></td>
					<td></td>
					<td class="link"><a href="./business/isp_bpr.html" target="_blank">isp_bpr.html</a></td>
					<td class="date">2025-11-11</td>
					<td class="work"></td>
					<td class="etc"></td>
				</tr>
				<tr>
					<td class="no"></td>
					<td></td>
					<td>시스템 통합</td>
					<td></td>
					<td></td>
					<td class="link"><a href="./business/system_integration.html" target="_blank">system_integration.html</a></td>
					<td class="date">2025-11-11</td>
					<td class="work"></td>
					<td class="etc"></td>
				</tr>
				<tr>
					<td class="no"></td>
					<td></td>
					<td>산업별 특화</td>
					<td></td>
					<td></td>
					<td class="link"><a href="./business/industry_specialization.html" target="_blank">industry_specialization.html</a></td>
					<td class="date">2025-11-11</td>
					<td class="work"></td>
					<td class="etc"></td>
				</tr>
				<tr>
					<td class="no"></td>
					<td></td>
					<td>국민행복몰</td>
					<td></td>
					<td></td>
					<td class="link"><a href="./business/happiness_mall.html" target="_blank">happiness_mall.html</a></td>
					<td class="date">2025-11-11</td>
					<td class="work"></td>
					<td class="etc"></td>
				</tr>
				<tr>
					<td class="no"></td>
					<td>Solution</td>
					<td>AI</td>
					<td></td>
					<td></td>
					<td class="link"><a href="./solution/ai.html" target="_blank">ai.html</a></td>
					<td class="date">2022-05-07</td>
					<td class="work"></td>
					<td class="etc"></td>
				</tr>
				<tr>
					<td class="no"></td>
					<td></td>
					<td>Blockchain</td>
					<td></td>
					<td></td>
					<td class="link"><a href="./solution/blockchain.html" target="_blank">blockchain.html</a></td>
					<td class="date">2022-05-07</td>
					<td class="work"></td>
					<td class="etc"></td>
				</tr>
				<tr>
					<td class="no"></td>
					<td></td>
					<td>국고 보조금 관리시스템</td>
					<td></td>
					<td></td>
					<td class="link"><a href="./solution/treasury_subsidy.html" target="_blank">treasury_subsidy.html</a></td>
					<td class="date">2022-05-07</td>
					<td class="work"></td>
					<td class="etc"></td>
				</tr>
				<tr>
					<td class="no"></td>
					<td></td>
					<td>유가보조금 관리시스템</td>
					<td></td>
					<td></td>
					<td class="link"><a href="./solution/foreign_subsidy.html" target="_blank">foreign_subsidy.html</a></td>
					<td class="date">2022-05-07</td>
					<td class="work"></td>
					<td class="etc"></td>
				</tr>
				<tr>
					<td class="no"></td>
					<td></td>
					<td>주유 RFID 관리시스템</td>
					<td></td>
					<td></td>
					<td class="link"><a href="./solution/fuel_rfid.html" target="_blank">fuel_rfid.html</a></td>
					<td class="date">2022-05-07</td>
					<td class="work"></td>
					<td class="etc"></td>
				</tr>
				<tr>
					<td class="no"></td>
					<td>Contact Us</td>
					<td>문의하기</td>
					<td></td>
					<td></td>
					<td class="link"><a href="./contact/contact.html" target="_blank">contact.html</a></td>
					<td class="date">2022-05-07</td>
					<td class="work"></td>
					<td class="etc"></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<script type="text/javascript">
	$(function () {
		$(".tab_menu li a").click(function () {
			$(".tab_menu li a").removeClass("active");
			$(this).addClass("active");
			$(".list_w").hide().removeClass("codinglist")
			var activeTab = $(this).attr("rel");
			$("#" + activeTab).fadeIn().addClass("codinglist");
			chkList();
		});
		chkList();
	});

	function chkList(){
		var tatal_n = $(".codinglist tbody tr").length;
		var curr_n = 0;
		var ing_n = 0;
		$(".codinglist td.link a").each(function() {
			$(this).closest('tr').find('.work').text('대기중').addClass('stand_by');
			if($(this).attr('href') != '#' && $(this).text().length > 0 && $(this).closest('tr').find('.date').text().length > 4){
				curr_n++;
				$(this).closest('tr').find('.work').text('완료').addClass('end');
			} else if ($(this).text().length > 0 && $(this).attr('href') != '#') {
				ing_n++;
				$(this).closest('tr').find('.work').text('진행중').addClass('ing');
			}
		});

		$(".codinglist tbody tr").each(function() {
			var index = $(this).index()+1;
			$(this).children(".codinglist td.no").text(index);
		});

		$(".codinglist .no + td").each(function() {
			if($(this).text() != ""){
				$(this).parent('tr').addClass('division');
			}
		});

		$(".codinglist td").click(function() {
			$(".codinglist tr").removeClass("on");
			$(this).parent(".codinglist tr").addClass("on");
		});

		$('.total_n').text(tatal_n);
		$('.curr_n').text(curr_n);
		$('.notcurr_n').text(tatal_n - curr_n);
		$('.ing_n').text(ing_n).addClass('ing');
		$('.per').text(Math.floor((curr_n/tatal_n)*100) + '%');
		$('.per_2').text(Math.floor((ing_n/tatal_n)*100) + '%');
	}

</script>
</div><!-- //wrap -->
</body>
</html>